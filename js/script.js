document.addEventListener ('DOMContentLoaded', function () {

    EventListeners();

    darkMode ();
});

function darkMode() {
    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

function EventListeners() {
    const MobileMenu = document.querySelector('.mobile-menu')

    MobileMenu.addEventListener('click', navegacionMobile);

    function navegacionMobile() {
        const navegacion = document.querySelector('.navegacion')

        navegacion.classList.toggle('mostrar')}
    }