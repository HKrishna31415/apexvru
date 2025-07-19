export const formatCurrency = (
    value: any, 
    options: Intl.NumberFormatOptions = {}
): string => {
    const numericValue = Number(value);
    const defaultOptions: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'USD',
    };

    // If fractional digits aren't specified, decide based on value.
    if (options.minimumFractionDigits === undefined && options.maximumFractionDigits === undefined) {
        if (Math.abs(numericValue) >= 1000 || numericValue === 0) {
            defaultOptions.minimumFractionDigits = 0;
            defaultOptions.maximumFractionDigits = 0;
        } else {
            defaultOptions.minimumFractionDigits = 2;
            defaultOptions.maximumFractionDigits = 2;
        }
    }
    
    return new Intl.NumberFormat('en-US', { ...defaultOptions, ...options }).format(numericValue);
};