const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        devel: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        devel: 2500,
        qa: 900
    },
    'web-app': {
        pm: 2000,
        design: 1100,
        devel: 3000,
        qa: 1000
    },
    'mobile-app': {
        pm: 3000,
        design: 1500,
        devel: 4000,
        qa: 1300
    }
};
function getFormValue() {
    let websiteTypeElement = document.getElementById('proj-type');
    let pmEl = document.getElementById('pm');
    let designEl = document.getElementById('design');
    let develEl = document.getElementById('devel');
    let qaEl = document.getElementById('qa');
    return {
        websiteType: websiteTypeElement.value,
        pm: pmEl.checked,
        design: designEl.checked,
        devel: develEl.checked,
        qa: qaEl.checked
    }
}

function resetCheckForm() {
    document.getElementById('pm').checked = false;
    document.getElementById('design').checked = false;
    document.getElementById('devel').checked = false;
    document.getElementById('qa').checked = false;
    // console.log('form reset.')
}
function calcPrice() {
    let values = getFormValue();
    let totalPrice = 0;
    let workType = prices[values.websiteType]
    if (values.pm) { totalPrice += workType.pm };
    if (values.design) { totalPrice += workType.design };
    if (values.devel) { totalPrice += workType.devel };
    if (values.qa) { totalPrice += workType.qa };
    let totalPriceEl = document.getElementById('total-price');
    totalPriceEl.textContent = totalPrice;
    // console.log(totalPrice);
}
const formElement = document.getElementById('proj-price-form');
formElement.addEventListener('change', calcPrice);

const selEl = document.getElementById('proj-type');

const emailModalEl = document.getElementById('modal-email');

// selEl.addEventListener('change', resetCheckForm);

console.log(formElement);


formElement.addEventListener('submit', function (event) {
     event.preventDefault;
    event.
    emailModalEl.classList.add('modal-active');
});