const productos = [
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 1, nombre: 'Pañuelos', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto1.png' },
    { id: 2, nombre: 'Cesta', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto2.png' },
    { id: 3, nombre: 'Cubo de basura', precio: 50.00, cantidad: 0, imagen: 'imagenes/foto3.png' }

];


const listaProductos = document.getElementById('listaProductos');

productos.forEach(producto => {
    const td = document.createElement('tr');
    td.innerHTML = `
    <tr>
    <td> <img src="${producto.imagen}" alt="${producto.nombre}" style="max-width: 200px"> </td>
    <td> <h3>${producto.nombre}</h3> </td>
    <td> <h3 style="width:100px"> <input type="number" min=0 max=99 id="typeNumber" class="form-control"/></h3> </td>
    <td> <h3 style="width:100px"> S/. ${producto.precio}</h3> </td>
    </tr>
    `;
    listaProductos.appendChild(td);
});



const ListaDeProductos = document.getElementById('idproductos');

productos.forEach(producto => {
    const div = document.createElement('div');
    div.innerHTML = `
        <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/${producto.nombre}.html">
            <img class="p-2 rounded-t-lg" src="imagenes/foto2.png" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    style="text-align: center ; margin-bottom: 5px;">${producto.nombre}</h5>
            </a>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">${producto.precio}</span>
                <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</a>
            </div>
        </div>
        </div>
        `;
        ListaDeProductos.appendChild(div);
});