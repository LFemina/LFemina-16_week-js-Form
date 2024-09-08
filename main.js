document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');

    const form = document.forms.myForm;
    const name = form.elements.name;
    const email = form.elements.email;
    const age = form.elements.age;
    const sex = form.elements.sex;
    const select = form.elements.select;
    const password = form.elements.password;
    const agreeTerms = form.elements.agreeTerms;

    const error = document.querySelectorAll('.error');

    function checkValidity() {
        let errors = [];
        error.forEach(err => err.textContent = '');

        const nameValue = name.value.trim();
        if (nameValue === '') {
            error[0].textContent = 'Имя не введено.';
            errors.push('name');
        } else if (nameValue.length < 2 || nameValue.length > 20) {
            error[0].textContent = 'Длина имени не соответствует требованиям.';
            errors.push('name');
        }

        const emailValue = email.value.trim();
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailValue === '') {
            error[1].textContent = 'Email не введен.';
            errors.push('email');
        } else if (!regex.test(emailValue)) {
            error[1].textContent = 'Указанный email некорректный.';
            errors.push('email');
        }

        const ageValue = age.value;
        if (ageValue === '') {
            error[2].textContent = 'Возраст не введен.';
            errors.push('age');
        } else if (ageValue < 1 || ageValue > 100) {
            error[2].textContent = 'Возраст не соответствует требованиям.';
            errors.push('age');
        }

        const sexValue = Array.from(sex).some(input => input.checked);
        if (!sexValue) {
            error[3].textContent = 'Пол не выбран.';
            errors.push('sex');
        }

        const selectValue = select.value;
        if (selectValue === '') {
            error[4].textContent = 'Профессия не выбрана.';
            errors.push('select');
        }

        const passwordValue = password.value;
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (passwordValue === '') {
            error[5].textContent = 'Пароль не введен.';
            errors.push('password');
        } else if (!pattern.test(passwordValue)) {
            error[5].textContent = 'Пароль не соответствует указанным требованиям.';
            errors.push('password');
        }

        const agreeTermsValue = agreeTerms.checked;
        if (!agreeTermsValue) {
            error[6].textContent = 'Необходимо принять условия';
            errors.push('agreeTerms');
        }

        submitBtn.disabled = errors.length > 0;
    }

    form.addEventListener('input', checkValidity);
    form.addEventListener('change', checkValidity);

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        checkValidity();
        if (!submitBtn.disabled) {
            console.log('Форма отправлена!');
            form.reset();
            submitBtn.disabled = true;
        }
    });
});