$(document).ready(function () {
cargar_home = ()=>{
    $.ajax({
        beforeSend:()=>{$('#contenido-local').html('')},
        type: "POST",
        url: document.base_url+"home/cargar_home",
        success: function (d) {
        let res = $.parseJSON(d)
            
        $('#contenido-local').html(res);
        $('#agregarClases').addClass('navbar navbar-expand-lg bg-primary fixed-top navbar-transparent')
        }
    })
}

    //LOGIN
$('#btn-login').on('click',(e)=>{
    $.ajax({
      type: "POST",
      url: document.base_url+"login/login",
      data: {
        email:$('#inputEmail').val().trim(),
        password:$('#inputPassword').val().trim()
      },
      success: function (d) {
        let res = $.parseJSON(d)
        if(res[0].sqlcode == 1)
        {   
            $('#Respuest-login').addClass('d-none')
            location.reload()
        }
        else
        {   
            $('#inputEmail').val('')
            $('#inputPassword').val('')
            $('#Respuest-login').html(res[0].sqlmsg).removeClass('d-none')
        }
      }
    });
  })

$('#frm-register').on('click',()=>{
    $.ajax({
        beforeSend:()=>{$('#contenido-local').html('')},
        type: "POST",
        url: document.base_url+"home/cargar_register",
        success: function (d) {
        let res = $.parseJSON(d)
            
        $('#contenido-local').html(res);
        $('#agregarClases').addClass('bg-primary')
        $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
        $('#navbarDropdown').css('padding-top','30px')
        }
    });
})

cargar_login = ()=>{
    $.ajax({
        beforeSend:()=>{$('#contenido-local').html('')},
        type: "POST",
        url: document.base_url+"home/cargar_login",
        success: function (d) {
        let res = $.parseJSON(d)
            
        $('#contenido-local').html(res);
        $('#agregarClases').addClass('bg-primary')
        $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
        $('#navbarDropdown').css('padding-top','30px')
        }
    });
    }
      
$('#btn-register').on('click',()=>{
    $.ajax({
        type: "POST",
        url: document.base_url+"Login/register",
        data: {
            email:$('#inputEmail').val(),
            password:$('#inputPassword').val(),
            name:$('#inputName').val(),
            last:$('#inputLast').val()
        },
        success: function (d) {
            let res = $.parseJSON(d)
            if(res[0].sqlcode == 1)
            {
                $('#Respuest-register-s').html(res[0].sqlmsg).removeClass('d-none')
                $('#Respuest-register').addClass('d-none')
                setTimeout(() => {
                    cargar_login()
                }, 5000);
            }
            else
            {   
                $('#Respuest-register').html(res[0].sqlmsg).removeClass('d-none')
                $('#Respuest-register-s').addClass('d-none')
                $('#inputEmail').val('')
                $('#inputPassword').val('')
                $('#inputName').val('')
                $('#inputLast').val('')
            }
            console.log(res);
            
        }
    });
})

});