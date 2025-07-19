import { PublicCompanyData } from '../types';

// In a real application, you would get a free API key from a provider like 
// Financial Modeling Prep (financialmodelingprep.com) and store it in an .env file.
// The code expects process.env.API_KEY to be available.
const API_KEY = process.env.API_KEY;

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

// MOCK DATA for fallback when API_KEY is not present
const MOCK_DATA: { [key: string]: PublicCompanyData } = {
  'AAPL': { ticker: 'AAPL', companyName: 'Apple Inc.', stockPrice: 195.89, marketCap: 3000000000000, sharesOutstanding: 15500000000, eps: 6.13, annualDividend: 0.96, beta: 1.29 },
  'MSFT': { ticker: 'MSFT', companyName: 'Microsoft Corporation', stockPrice: 370.95, marketCap: 2750000000000, sharesOutstanding: 7450000000, eps: 9.67, annualDividend: 2.72, beta: 1.23 },
  'XOM': { ticker: 'XOM', companyName: 'Exxon Mobil Corporation', stockPrice: 105.50, marketCap: 420000000000, sharesOutstanding: 4000000000, eps: 9.85, annualDividend: 3.64, beta: 0.77 },
  'DEFAULT': { ticker: 'DEFAULT', companyName: 'Default Corp.', stockPrice: 150, marketCap: 1000000000, sharesOutstanding: 100000000, eps: 1.00, annualDividend: 0, beta: 1.0 },
};

export async function fetchFinancialData(ticker: string): Promise<PublicCompanyData | null> {
    const upperTicker = ticker.toUpperCase();

    if (!API_KEY) {
        console.warn("API_KEY is not set. Using mock data. Get a free key from financialmodelingprep.com and set it in your environment.");
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(MOCK_DATA[upperTicker] || MOCK_DATA['DEFAULT']);
            }, 500); // Simulate network delay
        });
    }

    try {
        const [profileRes, metricsRes] = await Promise.all([
            fetch(`${BASE_URL}/profile/${upperTicker}?apikey=${API_KEY}`),
            fetch(`${BASE_URL}/key-metrics-ttm/${upperTicker}?apikey=${API_KEY}`)
        ]);

        if (!profileRes.ok || !metricsRes.ok) {
            const profileError = await profileRes.json();
            const metricsError = await metricsRes.json();
            console.error('Failed to fetch data from FMP API', profileError, metricsError);
            throw new Error(`API returned an error: ${profileError['Error Message'] || 'Failed to fetch'}`);
        }
        
        const profileData = await profileRes.json();
        const metricsData = await metricsRes.json();

        // The API returns an array, so we take the first element.
        const profile = profileData?.[0];
        const metrics = metricsData?.[0];
        
        if (!profile || !metrics) {
            console.error('API response was empty for ticker:', upperTicker);
            return null;
        }

        const transformedData: PublicCompanyData = {
            ticker: profile.symbol,
            companyName: profile.companyName,
            stockPrice: profile.price,
            marketCap: profile.mktCap,
            sharesOutstanding: metrics.sharesOutstandingTTM,
            eps: metrics.epsdilutedTTM,
            annualDividend: metrics.dividendPerShareTTM,
            beta: profile.beta,
        };

        return transformedData;

    } catch (e) {
        console.error("Failed to fetch or process financial data:", e);
        throw e; // Rethrow the error to be caught by the component
    }
}
