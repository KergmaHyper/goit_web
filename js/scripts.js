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
function resetCheckForm() {
    document.getElementById('pm').checked = false;
    document.getElementById('design').checked = false;
    document.getElementById('devel').checked = false;
    document.getElementById('qa').checked = false;
    }
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
    
}

calcPrice();
const formElement = document.getElementById('proj-price-form');
formElement.addEventListener('change', calcPrice);



formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    let usrEmailInputEl = document.getElementById('user-email');
    usrEmailInputEl.value = '';
    let emailModalEl = document.getElementById('modal-email');
    emailModalEl.classList.add('modal-active');

});
const closeBtnEls = document.querySelectorAll('.modal-close-btn');

closeBtnEls.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        let actModForms = document.querySelectorAll('.modal-active');
        actModForms.forEach(function (actModForm ){
             actModForm.classList.remove('modal-active');
            
        });
    });
});

const emailContForm = document.getElementById('email-cont-form');
emailContForm.addEventListener('submit', function (evn) {
    evn.preventDefault();
    let usrEmailInputEl = document.getElementById('user-email');
    let priceCalcEl = document.getElementById('price-calculated');
    if (usrEmailInputEl.value) {
        
        // send form
        // let myForm = document.getElementById('pizzaOrder');
        let formData = new FormData(formElement);
        formData.append('Email', usrEmailInputEl.value);
        formData.append('Price', priceCalcEl.textContent);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(function () {
                // success submit
                let modEmail = document.getElementById('modal-email');
                modEmail.classList.remove('modal-active');
                let modSucc = document.getElementById('modal-success');
                modSucc.classList.add('modal-active');  
            }).
            catch((error) => alert(error));
        return;

    } else {
        // error email
        let emailInputContEl = document.querySelector('.email-input-cont');
        emailInputContEl.classList.add('email-input-cont-err');
    }

});