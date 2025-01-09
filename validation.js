document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }

    alert('Форма успешно отправлена!');
});
