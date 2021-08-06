let esconderResultado = $('#resultado').hide();

$(document).ready(function() {
    $('button').on('click', function() {
        let ingresoUsuario = $('#inputIngresoUsuario').val();

        $('#resultado').show();
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10224949299295623/${ingresoUsuario}`,
            dataType: "json",
            success: function(datos) {
                console.log(ingresoUsuario);

                $('#imagenSuper')
                    .append(`<img src="${datos.image.url}" class="h-100 w-100"></img>`);

                $('#TextoResultado')
                    .append(`<p class="card-text">Nombre: ${datos.name} 
                    <br>Conexiones: ${datos.connections.relatives}</p>`)
                    .append(`<p class="card-text">Ocupacion: ${datos.work.occupation} </p>`)
                    //.append(`<li class="list-group-item">Primer aparicion: ${datos.biography.first-appearance} </li>`)
                    .append(`<p class="card-text">Altura: ${datos.appearance.height[1]} </p>`)
                    .append(`<p class="card-text">Peso: ${datos.appearance.weight[1]} </p>`)
                    .append(`<p class="card-text">${datos.biography.aliases} </p>`);

                //document.getElementById("resultado").innerHTML = `<p>nombre: ${datos.name} </p>`;
                console.log(datos);
                console.log(datos.connections.relatives);
                console.log(datos.image);
                console.log(datos.work.occupation);

                ///////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////


                ///////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////
            },
            error: function(error) {
                console.log(error);
            }
        });
    })
})