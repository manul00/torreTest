$(document).ready(function () {

load_home = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')
    loader_start()},
    type: "POST",
    url: document.base_url+"home/load_home",
    success: function (d) {
      // let res = $.parseJSON(d)
         // console.log(d);
       loader_stop()   
      $('#contenido-local').html(d);
      $('#agregarClases').addClass('navbar navbar-expand-lg bg-primary fixed-top navbar-transparent')
    }
  })
}


load_search = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')
    loader_start()},
    type: "POST",
    url: document.base_url+"home/load_search",
    success: function (d) {
      //let res = $.parseJSON(d)
         loader_stop() 
      $('#contenido-local').html(d);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
    }
  });
}

load_job = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')
    loader_start()},
    type: "POST",
    url: document.base_url+"home/load_job",
    success: function (d) {
      //let res = $.parseJSON(d)
         loader_stop() 
      $('#contenido-local').html(d);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
    }
  });
}


load_bio = ()=>{
  $.ajax({
    beforeSend:()=>{$('#contenido-local').html('')
    loader_start()},
    type: "POST",
    url: document.base_url+"home/load_bio",
    success: function (d) {
      let re//s = $.parseJSON(d)
        loader_stop()  
      $('#contenido-local').html(d);
      $('#agregarClases').addClass('bg-primary')
      $('#agregarClases').removeClass('navbar navbar-expand-lg fixed-top navbar-transparent')
      $('#navbarDropdown').css('padding-top','30px')
    }
  });
}

$('#bio').on('click',()=>{
  load_bio()
})

$('#job').on('click',()=>{
  load_job()
})

$('#search').on('click',()=>{
  load_search()
})


$('#home').on('click',()=>{
  load_home()
})

load_home()




 
});
