
import React, { useState } from 'react';
 
const CurrencyDropdown = () => {
const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency

const handleCurrencyChange = (event) => {
setSelectedCurrency(event.target.value);
};
return (
<div className='alert alert-primary'>
<label htmlFor="currency">Currency:</label>
<select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
<option value="$">$ Dollar</option>
<option value="£">£ Pound</option>
<option value="€">€ Euro</option>
<option value="₹">₹ Rupee</option> 
{/* Add more currency options as needed */}
</select>
</div>
);
};
export default CurrencyDropdown;
