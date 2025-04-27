document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        alert("Bravo pour votre don et votre soutien !");
    });
});
