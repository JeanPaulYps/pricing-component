const ANUAL_PRICES = { 
    'basic': "$19.99",
    'professional': "$24.99",
    'master': "$39.99",
}

const MONTHLY_PRICES = { 
    'basic': "$199.99",
    'professional': "$249.99",
    'master': "$399.99",
}


const priceCheckbox = document.getElementById("priceCheckbox");
const basicPrice = document.getElementById("Basic");
const professionalPrice = document.getElementById("Professional");
const masterPrice = document.getElementById("Master");

const changePrices = ({ prices: {basic, professional, master } }) => {
    basicPrice.innerHTML = basic;
    professionalPrice.innerHTML = professional;
    
    masterPrice.innerHTML = master;
}


const changePrice = (priceIsMonthly) => {
    if (priceIsMonthly) {
        const prices = ANUAL_PRICES;
        changePrices({prices});
    }
    else {
        const prices = MONTHLY_PRICES;
        changePrices({prices});
    }

}

console.log(basicPrice.innerHTML)
console.log(priceCheckbox.checked)

priceCheckbox.addEventListener('change', () => {
    const priceIsMonthly = priceCheckbox.checked;
    changePrice(priceIsMonthly);
})