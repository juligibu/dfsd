// LOADER

let loader = new Vue({
    el: '#loader-principal',
    data: {
        loader:
        '<div class="img">'+
            '<img src = "images/logo.png">'+
      '</div >'+
    '<div id="loader-container">'+
    '</div>'
    },
});

// NAVBAR

let navbar = new Vue({
    el: '#navbar',
    data:
    {
        barranavegacion:
            '<a href="index.html" class="logo"><img src="images/logo.png" alt="logo"></a>' +
            '<ul class="menu-items" >' +
            '<li><a href="index.html">Inicio</a></li>' +
            '<li class="dropdown">' +
            '<a href="productos.html">Productos</a>' +
            '<ul class="dropdown-content">' +
            '<li><a href="sistemafotovoltaico.html">Sistema Fotovoltaico</a></li>' +
            '<li><a href="climatizaciondepiscinas.html">Climatización de Piscinas</a></li>' +
            '<li><a href="bombassolares.html">Bombas Solares</a></li>' +
            '<li><a href="airecalientesolar.html">Aire Caliente Solar</a></li>' +
            '<li><a href="aguasanitariacaliente.html">Agua Sanitaria Caliente</a></li>' +
            '<li><a href="iluminacionsolar.html">Punto Solar</a></li>' +
            '</ul>' +
            '</li>' +
            '<li><a href="index.html#proyecto">Proyectos</a></li>' +
            '<li><a href="empresa.html">Empresa</a></li>' +
            '<li><a href="preguntasfrecuentes.html">Preguntas Frecuentes</a></li>' +
            '</ul >' +
            '<span class="btn-menu"><i class="fas fa-bars"></i></span>'
    },
});

// FOOTER

let footer = new Vue ({
    el: '#footer',
    data: {
        foot:
        '<div class="footer">'+
        '<div class="row">'+
            '<div class="footer-col">'+
                '<h4>ENERGÍA SOLAR</h4>'+
                '<ul>'+
                    '<li>'+
                        '<p>Producida por la luz o el calor del sol para la generación de electricidad o la'+
                            'producción de calor. Inagotable y renovable</p>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<div class="footer-col">'+
                '<h4><a href="empresa.html" class="link">LA EMPRESA</a></h4>'+
                '<ul>'+
                    '<li><a href="empresa.html">MISIÓN</a></li>'+
                    '<li><a href="empresa.html">VISIÓN</a></li>'+
                    '<li><a href="preguntasfrecuentes.html">PREGUNTAS FRECUENTES</a></li>'+
                '</ul>'+
            '</div>'+
            '<div class="footer-col">'+
                '<h4>¿QUERÉS ENCONTRARNOS?</h4>'+
                '<ul>'+
                    '<li><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13048.781789073935!2d-58.740831!3d-35.1517461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3234258d8c6f259!2sEnerg%C3%ADa%20Solar%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1636565399612!5m2!1ses-419!2sar"'+
                            'width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<div class="footer-col">'+
                '<h4>SEGUINOS</h4>'+
                '<div class="social-links">'+
                    '<a href="https://www.facebook.com/energiasolarbuenosaires/" target="_blank"><i class="fa fa-facebook-f"></i></a>'+
                    '<a href="https://api.whatsapp.com/send?phone=541136045362&app=facebook&entry_point=page_cta&fbclid=IwAR1W47JprC_zGMrHFOdajKhV21lA6VaUzRlTKSFXgNdnEcrqT1JtAM2bXHs"'+
                        'target="_blank"><i class="fa fa-whatsapp"></i></a>'+
                    '<a href="https://www.instagram.com/esba_bs.as/" target="_blank"><i class="fa fa-instagram"></i></a>'+
                    '<a href="mailto:energiasolarbuenosaires@gmail.com?Subject=Consulta"><i class="fa fa-inbox"></i></a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'
    },
});

// PRODUCTOS

let prod = new Vue({
    el: '#prod',
    data: {
        productos:
            '<h1 class="titulo"><a href="productos.html"> PRODUCTOS </a></h1>' +
            '<div class="container-cards">' +
            '<a href="sistemafotovoltaico.html"><div class="card">' +
            '<div class="card-image1"></div>' +
            '<div class="card-text">' +
            '<h2>Sistema Fotovoltaico</h2>' +
            '<p>La tecnología FV es una energía renovable totalmente confiable, disponible en cualquier ubicación y sin limitaciones para su instalación. No emite gases nocivos, ni genera ruidos molestos.</p>' +
            '</div>' +
            '</div></a>' +
            '<a href="climatizaciondepiscinas.html"><div class="card">' +
            '<div class="card-image2"></div>' +
            '<div class="card-text">' +
            '<h2>Climatización de Piscinas</h2>' +
            '<p>Consisten en captadores se intercalan fácilmente en el circuito de filtrado del agua, proporcionando un intercambio de calor directo. Prolonga la temporada de uso estival.</p>' +
            '</div>' +
            '</div></a>' +
            '<a href="bombassolares.html"><div class="card">' +
            '<div class="card-image3"></div>' +
            '<div class="card-text">' +
            '<h2>Equipos Combinados</h2>' +
            '<p>Los equipos combinados son de circulación impulsada, consisten básicamente de tres partes: sistema de acumulación, campo de captadores solares y sistema de conducción del líquido.</p>' +
            '</div>' +
            '</div></a>' +
            '<a href="airecalientesolar.html"><div class="card">' +
            '<div class="card-image4"></div>' +
            '<div class="card-text">' +
            '<h2>Aire Caliente Solar</h2>' +
            '<p>Captadores tipo ventanas solares, brindan una solución para calefacción de casas de fin de semana o que no están habitadas regularmente. Ahora las paredes externas tienen un uso.</p>' +
            '</div>' +
            '</div></a>' +
            '<a href="aguasanitariacaliente.html"><div class="card">' +
            '<div class="card-image5"></div>' +
            '<div class="card-text">' +
            '<h2>Agua Caliente Sanitaria</h2>' +
            '<p>Los equipos solares ENERGE para ACS de circulación natural, proveen agua caliente en el circuito sanitario  (baños, cocina, lavandería). Son de sencilla instalación, no requieren mantenimiento.</p>' +
            '</div>' +
            '</div></a>' +
            '<a href="iluminacionsolar.html"><div class="card">' +
            '<div class="card-image6"></div>' +
            '<div class="card-text">' +
            '<h2>Iluminación Solar</h2>' +
            '<p>Las luminarias led solares funcionan en base a energía limpia y con muy bajo mantenimiento, reduciendo sensiblemente el consumo con una extensa vida útil.</p>' +
            '</div>' +
            '</div></a>' +
            '</div>'
    },
});

// NAVBAR SCROLL

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 30 && window.screen.width > 880) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// INTERFAZ CARGA

window.onload = function carga() {
    var contenedor = document.getElementById('loader-principal')
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

// RESPONSIVE

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})

// CARROUSEL

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
    muestraSlides(indice += n);
}

function posicionSlide(n) {
    muestraSlides(indice = n);
}
setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 4000);
function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active';

}

//MODAL

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function () {
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex) {
        modal.style.display = 'none';
    }
});

let modald = document.getElementById('miModald');
let flexd = document.getElementById('flexd');
let abrird = document.getElementById('abrird');
let cerrard = document.getElementById('closed');

abrird.addEventListener('click', function () {
    modald.style.display = 'block';
});

cerrard.addEventListener('click', function () {
    modald.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex) {
        modald.style.display = 'none';
    }
});

let modalt = document.getElementById('miModalt');
let flext = document.getElementById('flext');
let abrirt = document.getElementById('abrirt');
let cerrart = document.getElementById('closet');

abrirt.addEventListener('click', function () {
    modalt.style.display = 'block';
});

cerrart.addEventListener('click', function () {
    modalt.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex) {
        modalt.style.display = 'none';
    }
});

