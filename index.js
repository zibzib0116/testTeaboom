const fas_list = {
    '100':  { article: '01306', 'old-price': 349.20, price: 326.40 },
    '500':  { article: '01307', 'old-price': 1646, price: 1432 },
    '1000': { article: '01308', 'old-price': 2592, price: 2064 },
    '5000': { article: '01309', 'old-price': 8710, price: 6320 },
};

function getCheckedValues(group) {
    const radios = document.getElementsByName(group);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function price_change() {
    const radio_value = getCheckedValues('fas');
    const data = fas_list[radio_value];
    if (!data) return;

    const card = document.querySelector('.product-card');

    for (const item of card.querySelectorAll('[data-tag]')) {
        const attrName = item.getAttribute('data-tag');
        const value = data[attrName];

        if (value == null) {
            item.hidden = true;
        } else {
            item.hidden = false;
            item.querySelector('.product-card__value').textContent = value;
        }
    }
}

document.querySelectorAll('input[name="fas"]').forEach((radio) => {
    radio.addEventListener('change', price_change);
});

price_change();