let response;
const http = new XMLHttpRequest();
http.open('GET', 'https://api.freecurrencyapi.com/v1/latest?apikey=L3tbMHoifKdDJDAKyWa1OzonVxNQyIOPK7OTvm9F');
http.addEventListener('load', () => {
    const first = JSON.parse(http.responseText);
    response = first.data;
});
http.send();

let nameCurrency;
setInterval(() => {
    const select = document.querySelector('[data-sel]');
    document.querySelector('[data-img]').setAttribute('src', `${select.value}`);
    const option = select.querySelector(`option[value="${select.value}"]`);
    const currency = option.getAttribute('curr');
    nameCurrency = option.getAttribute('name');
    document.querySelector('[data-curr]').textContent = `${currency} ${nameCurrency}`;
}, 1);

let result;
document.querySelector('.res-button').addEventListener('click', () => {
    const inputValue = document.querySelector('[data-input]').value;

    if (nameCurrency === 'AUD') {
        result = inputValue * response.AUD;
    } else if (nameCurrency === 'GBP') {
        result = inputValue * response.GBP;
    } else if (nameCurrency === 'CNY') {
        result = inputValue * response.CNY;
    } else if (nameCurrency === 'EUR') {
        result = inputValue * response.EUR;
    } else if (nameCurrency === 'JPY') {
        result = inputValue * response.JPY;
    } else if (nameCurrency === 'RUB') {
        result = inputValue * response.RUB;
    } else if (nameCurrency === 'TNG') {
        result = inputValue * 457.97;
    }
    document.querySelector('[data-res]').textContent = `${result.toFixed(2)} ${nameCurrency}`;
})