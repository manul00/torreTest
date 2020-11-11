$(document).ready(function () {
    update = ()=>{
        $.ajax({beforeSend:()=>{
                if($('#password').val() != $('#newpassword').val())
                {   
                    $('#responseUpdate').html('The passwords are not equal')
                    $('#responseUpdate').removeClass('d-none')
                    $('#password').val('')
                    $('#newpassword').val('')
                    return false
                }
                else
                {
                    $('#responseUpdate').html('')
                    $('#responseUpdate').addClass('d-none')
                }    
            },
        type: "POST",
        url: document.base_url+"login/updateUser",
        data: {
            email:$('#email').val(),
            password:$('#password').val()
            },
        success: function (d) {
            let res = $.parseJSON(d)
            console.log(res);
            if(res[0].sqlcode == 1)
            {
                
                $('#responseUpdateS').html(res[0].sqlmsg)
                $('#responseUpdateS').removeClass('d-none')
               setTimeout(() => {
                   location.reload()
               }, 2000);
            }
            else
            {
                $('#responseUpdate').html(res[0].sqlmsg)
                $('#responseUpdate').removeClass('d-none')
            }
        }
        });    
    }

    cargar_myaccount = ()=>{
        $.ajax({
          beforeSend:()=>{$('#contenido-local').html('')},
          type: "POST",
          url: document.base_url+"home/cargar_myaccount",
          success: function (d) {
            let res = $.parseJSON(d)
                
            $('#contenido-local').html(res);
            $('#agregarClases').addClass('bg-primary')
            $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
            $('#navbarDropdown').css('padding-top','30px')
          }
        });
      }

    listarUsuario = ()=>{
        $.ajax({
            type: 'POST',
            url: document.base_url+"login/listar_usuario",
            success: function (d) {
                let res = $.parseJSON(d)
                {
                    console.log(res);
                    $('#apellido').html(res[0].usu_apellido)
                    $('#nombre').html(res[0].usu_nombre)
                    $('#correo').html(res[0].usu_correo)
                    $('#name').val(res[0].usu_nombre)
                    $('#last').val(res[0].usu_apellido)
                }
            }
        });
    }

    $('#submit').on('click', function () {
        update()
    });

    listarUsuario()
});