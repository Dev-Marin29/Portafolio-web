document.addEventListener('DOMContentLoaded', function() {
    // Descuentos semanales con imágenes de productos
    const descuentos = {
        lunes: { texto: '10% de descuento en productos lácteos', imagen: 'img/lacteos.png' },
        martes: { texto: '15% de descuento en carnes', imagen: 'img/carnes.png' },
        miércoles: { texto: '20% de descuento en verduras', imagen: 'img/verduras.png' },
        jueves: { texto: '10% de descuento en frutas', imagen: 'img/frutas.png' },
        viernes: { texto: 'Descuento especial en productos de aseo', imagen: 'img/aseo.jpg' },
        sábado: { texto: '2x1 en productos seleccionados', imagen: 'img/promocion.png' },
        domingo: { texto: 'Descuentos en artículos de panadería', imagen: 'img/panaderia.png' }
    };

    // Función para obtener el día actual en minúsculas
    const obtenerDiaSemana = () => {
        const opciones = { weekday: 'long' };
        return new Date().toLocaleDateString('es-ES', opciones).toLowerCase();
    };

    // Obtener el día de la semana actual
    const diaActual = obtenerDiaSemana();
    const descuento = descuentos[diaActual] || { texto: 'Consulta nuestras promociones diarias.', imagen: 'img/default.jpg' };

    // Mostrar el descuento y la imagen
    document.getElementById('descuento-semanal').innerHTML = `
        <h3>Hoy es ${diaActual.charAt(0).toUpperCase() + diaActual.slice(1)}</h3>
        <p>${descuento.texto}</p>
        <img src="${descuento.imagen}" alt="Imagen del descuento" style="width:300px; height:auto;">
    `;
});

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que la página se recargue al enviar el formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar que los campos no estén vacíos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);

        // Aquí se reinician los campos del formulario
        document.getElementById('contactForm').reset();
    }
});

