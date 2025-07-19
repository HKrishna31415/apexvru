import React, { useState } from 'react';
import { ArrowRightIcon } from './icons';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Democratic People's Republic of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Republic of Korea", "Republic of Moldova", "Romania", "Russian Federation", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syrian Arab Republic",
  "Tajikistan", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United Republic of Tanzania", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Viet Nam",
  "Yemen",
  "Zambia", "Zimbabwe"
];


export const QuoteForm: React.FC = () => {
    const [formData, setFormData] = useState({
        numTanksLow: '',
        numTanksMid: '',
        numTanksHigh: '',
        tankSizeLow: '',
        tankSizeMid: '',
        tankSizeHigh: '',
        salesVolumeLow: '',
        salesVolumeMid: '',
        salesVolumeHigh: '',
        costPerLiter: '1.5',
        location: 'United States of America',
        contactMethod: 'Email',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this data to a server.
        alert(`Form Submitted! (Not really)\n${JSON.stringify(formData, null, 2)}`);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, contactMethod: e.target.value }));
    };

    const inputClasses = "w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition";

    return (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl w-full max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Gas Station Info</h3>
            <p className="text-gray-600 mb-8">
                We take great pride in everything that we do, control over products allows us to ensure our customers receive the best quality service for their gasoline stations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="space-y-4 rounded-lg border border-gray-300 p-4">
                    <legend className="px-2 text-sm font-medium text-gray-700">Number of Tanks (by Grade)</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Lowest</label>
                            <input name="numTanksLow" type="number" min="0" value={formData.numTanksLow} onChange={handleChange} placeholder="e.g., 2" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Mid-Grade(s)</label>
                            <input name="numTanksMid" type="number" min="0" value={formData.numTanksMid} onChange={handleChange} placeholder="e.g., 1" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Premium</label>
                            <input name="numTanksHigh" type="number" min="0" value={formData.numTanksHigh} onChange={handleChange} placeholder="e.g., 1" className={inputClasses} />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="space-y-4 rounded-lg border border-gray-300 p-4">
                    <legend className="px-2 text-sm font-medium text-gray-700">Tank Size in Liters (by Grade)</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Lowest</label>
                            <input name="tankSizeLow" type="number" min="0" value={formData.tankSizeLow} onChange={handleChange} placeholder="e.g., 40000" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Mid-Grade(s)</label>
                            <input name="tankSizeMid" type="number" min="0" value={formData.tankSizeMid} onChange={handleChange} placeholder="e.g., 20000" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Premium</label>
                            <input name="tankSizeHigh" type="number" min="0" value={formData.tankSizeHigh} onChange={handleChange} placeholder="e.g., 20000" className={inputClasses} />
                        </div>
                    </div>
                </fieldset>
                
                <fieldset className="space-y-4 rounded-lg border border-gray-300 p-4">
                    <legend className="px-2 text-sm font-medium text-gray-700">Monthly Sales Volume in Liters (by Grade)</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Lowest</label>
                            <input name="salesVolumeLow" type="number" min="0" value={formData.salesVolumeLow} onChange={handleChange} placeholder="e.g., 200000" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Mid-Grade(s)</label>
                            <input name="salesVolumeMid" type="number" min="0" value={formData.salesVolumeMid} onChange={handleChange} placeholder="e.g., 100000" className={inputClasses} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Premium</label>
                            <input name="salesVolumeHigh" type="number" min="0" value={formData.salesVolumeHigh} onChange={handleChange} placeholder="e.g., 100000" className={inputClasses} />
                        </div>
                    </div>
                </fieldset>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Avg. Cost Per Liter</label>
                        <input name="costPerLiter" type="number" step="0.01" min="0" value={formData.costPerLiter} onChange={handleChange} placeholder="e.g., 1.50" className={inputClasses} />
                    </div>
                     <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <select id="location" name="location" value={formData.location} onChange={handleChange} className={inputClasses} >
                           {countries.map(country => (
                             <option key={country} value={country}>{country}</option>
                           ))}
                        </select>
                    </div>
                </div>

                <fieldset className="space-y-4 rounded-lg border border-gray-300 p-4">
                     <legend className="px-2 text-sm font-medium text-gray-700">Contact Information</legend>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
                        <div className="flex items-center space-x-6">
                            {['All', 'Email', 'Phone'].map(method => (
                                <label key={method} className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="contactMethod"
                                        value={method}
                                        checked={formData.contactMethod === method}
                                        onChange={handleRadioChange}
                                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                                    />
                                    <span>{method}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {(formData.contactMethod === 'Email' || formData.contactMethod === 'All') && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className={inputClasses} />
                            </div>
                        )}
                        {(formData.contactMethod === 'Phone' || formData.contactMethod === 'All') && (
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" required className={inputClasses} />
                            </div>
                        )}
                    </div>
                </fieldset>
                
                <button type="submit" className="w-full bg-gray-800 text-white font-bold py-4 px-6 rounded-lg flex justify-between items-center group hover:bg-gray-900 transition-colors transform hover:scale-[1.02]">
                    <span>Submit Request</span>
                    <div className="h-6 w-6 bg-white/20 rounded-full flex items-center justify-center">
                       <ArrowRightIcon className="h-5 w-5 text-white transform transition-transform group-hover:translate-x-1" />
                    </div>
                </button>
            </form>
        </div>
    );
};