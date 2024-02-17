async function fetchExchangeRates() {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetchExchangeRates().then((exchangeRates) => {
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];

        const result = (amount * toRate) / fromRate;

        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    });
}

// Populate currency options dynamically
fetchExchangeRates().then((exchangeRates) => {
    const currencyOptions = Object.keys(exchangeRates);

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencyOptions.forEach((currency) => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option.cloneNode(true)); // cloneNode to avoid DOM manipulation issues
    });
});
