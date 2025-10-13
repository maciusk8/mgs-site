document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (email.trim() === '' || message.trim() === '') {
                alert('Pola E-mail oraz Wiadomość są wymagane!');
                return;
            }
            // Wyświetlamy alert (w prawdziwej aplikacji tutaj byłby kod wysyłający dane na serwer)
            alert('Wiadomość została wysłana! (To jest wersja demonstracyjna)');
            contactForm.reset();
        });
    }
});