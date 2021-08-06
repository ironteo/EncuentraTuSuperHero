let esconderResultado = $('#resultado').hide();



$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

        let valorInput = $("#inputIngresoUsuario").val();

        $.ajax({
            url: `https://www.superheroapi.com/api.php/10224949299295623/${valorInput}`,

            success: function(data) {
                let imagen = data.image.url;
                let nombre = data.name;
                let conexiones = data.connections.relatives;
                let ocupacion = data.work.occupation;
                let firtsApation = data.biography;
                let altura = data.appearance.height[1];
                let peso = data.appearance.weight[1];
                let alianzas = data.connections;

                let intelligence = data.powerstats.intelligence;
                let strength = data.powerstats.strength;
                let speed = data.powerstats.speed;
                let durability = data.powerstats.durability;
                let power = data.powerstats.power;
                let combat = data.powerstats.combat;

                $("#imagenSuper").html(
                    `<img src="${imagen}">`
                );

                $("#TextoResultado").html(`
                    <div>
                    <h3>Nombre: ${nombre}</h3>
                    <hr>
                    <p>Conexiones: ${conexiones}</p>
                    <hr>
                    <p>Ocupacion: ${ocupacion}</p>
                    <hr>
                    <p>Primera Aparicion: ${firtsApation}</p>
                    <hr>
                    <p>Altaura: ${altura}</p>
                    <hr>
                    <p>Peso: ${peso}</p>
                    <hr>
                    <p>Alianzas: ${alianzas}</p>  
                    </div>`
                );
                
                $('#resultado').show();
            }
            //Fin success
        })
        //Fin ajax
    })
    //Fin submit
})
//Fin ready

