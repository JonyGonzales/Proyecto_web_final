const Categorias =
    [
        { categorias: 'ACCESORIOS' },
        // {categorias: 'AUTOMÓVIL'},
        // {categorias: 'BEBES'},
        // {categorias: 'COCINA'},
        { categorias: 'CUIDADO PERSONAL' },
        // {categorias: 'DEPORTE'},
        { categorias: 'ESCRITORIO' },
        // {categorias: 'HERRAMIENTAS'},
        { categorias: 'HOGAR' },
        // {categorias: 'KAWAI'},
        // {categorias: 'KIDS'},
        // {categorias: 'MASCOTAS'},
        // {categorias: 'MODA'},
        // {categorias: 'NAVIDAD'},
        // {categorias: 'OTROS'},
        // {categorias: 'SKINCARE'},
        { categorias: 'TECNOLOGÍA' }
    ];


const listaCategorias = document.getElementById('listaCategorias');

Categorias.forEach(Categorias => {
    const a = document.createElement('a');
    a.innerHTML = `
    <a type="button" id="${Categorias.categorias}"  href="Categorias.html"
    class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium 
    border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    ${Categorias.categorias}
    </a>
    `;
    listaCategorias.appendChild(a);
});



