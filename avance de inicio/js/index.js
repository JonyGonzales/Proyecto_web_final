$(document).ready(function () {
  $("#loginButton").click(function (event) {
    event.preventDefault();

    // Cargar el contenido del formulario de inicio de sesión desde sesion.html
    $.ajax({
      url: "sesion.html",
      dataType: "html",
      success: function (response) {
        // Insertar el contenido del formulario de inicio de sesión en un contenedor
        $("#loginContainer").html(response);

        // Mostrar el contenedor del formulario de inicio de sesión
        $("#loginContainer").show();

        // Ocultar el contenido detrás del formulario de inicio de sesión
        $("body").css("overflow", "hidden");
      }
    });
  });

  // Cerrar el formulario de inicio de sesión cuando se haga clic en el botón de cierre
  $(document).on("click", "#closeButton", function () {
    // Ocultar el contenedor del formulario de inicio de sesión
    $("#loginContainer").hide();

    // Restaurar el desbordamiento del cuerpo
    $("body").css("overflow", "auto");
  });
});

function cargarPagina() {
  var frame = $('#miIframe'); // Reemplaza '#frame' con el ID de tu iframe
  var url = './CarritoCompras.html';
  frame.attr('src', url).show();
}

