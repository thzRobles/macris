// Inicializa Muuri
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

// Evento. Hace que aparezcan las imagenes
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
   
    //Evento. Hace que podamos seleccionar categorias
    const enlaces = document.querySelectorAll('#categorias a')
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');
            //Filtrado por categorias
            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    })

    //Hace que podamos seleccionar para la barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        //Filtrado
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) )
    });

    // Agregar listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach( (elemento) => {
        // Click
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            //
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        }) 
    })

    //EventListener del boton de cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    //EventListener del overlay
    overlay.addEventListener('click', (evento) => {
        // overlay.classList.remove('activo');
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
});