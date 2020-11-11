$(document).ready(function (e) {

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
  .done(()=>{
    

  /*   $(document).scroll(()=>{
      var bav= $('nav').offset();
    if(bav.top > 150)
    {
      
    }  
      console.log(bav);
    }) */
  });
}

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

cargar_contact = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')},
    type: "POST",
    url: document.base_url+"home/cargar_contact",
    success: function (d) {
      let res = $.parseJSON(d)
          
      $('#contenido-local').html(res);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
    }
  });
}

cargar_aboutus = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')},
    type: "POST",
    url: document.base_url+"home/cargar_aboutus",
    success: function (d) {
      let res = $.parseJSON(d)
          
      $('#contenido-local').html(res);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
    }
  });
}


cargar_services = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')},
    type: "POST",
    url: document.base_url+"home/cargar_services",
    success: function (d) {
      let res = $.parseJSON(d)
          
      $('#contenido-local').html(res);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
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

$('#myaccount').on('click',()=>{
  cargar_myaccount()
})

$('#services').on('click',()=>{
  cargar_services()
})

$('#aboutus').on('click',()=>{
  cargar_aboutus()
})

$('#contact').on('click',()=>{
  cargar_contact()
})

$('#login').on('click',()=>{
  cargar_login()
})

$('#home').on('click',()=>{
  cargar_home()
})

cargar_home()

cerrarSesion = ()=>
{
    $.ajax({
        type: "POST",
        url: document.base_url+"login/logout",
        success: function (d) {
           
           location.reload()
        }
    });
}

$('#logout').on('click',()=>{
    cerrarSesion()
})


 
});
