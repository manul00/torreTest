$(document).ready(function () {
    searchjob = (url)=>{
     $.ajax({
         beforeSend:()=>{
             loader_start()
         },
         headers: {
            'Access-Control-Allow-Origin': 'https://torre.co',
            'authority': 'search.torre.co',
            'method': 'OPTIONS',
            'path': '/people/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=0&aggregate=trueoffset=0',
            'scheme': 'https',
            'accept': '*/*',
            ' accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-419,es;q=0.9',
            'access-control-request-headers': 'content-type',
            'access-control-request-method': 'POST',
            'origin': 'https://torre.co',
            'referer': `https://torre.co/es/search/people?q=%28skill%2Frole%3A${$('#search').val()}.1%20or%20name%3A${$('#search').val()}%20or%20organization%3A${$('#search').val()}%29`,
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site'
         },
         type: "POST",
         url: url,
         
         success: function (d) {
             loader_stop()
             let html=''
             $('#jobResult').html('')
             $.each(d, function (i, v) { 
                 
                 
                 if(typeof v == 'object')
                 {
                     $.each(v, function (k, v2) { 
                        if(typeof v2 == 'object')
                        {
                            $.each(v2, function (j, v3) {
                                if(typeof v3 == 'object')
                                {    
                                    $.each(v3, function (l, v4) { 
                                        if(typeof v4 == 'object')
                                        {
                                             $.each(v4, function (m, v5) { 
                                                 html+=`<tr>
                                                     <td>
                                                         
                                                     </td>   
                                                     <td>
                                                     ${v5}
                                                     </td>
                                                 </tr>` 
                                             });
                                        }
                                        else
                                        {
                                            html+=`<tr>
                                                 <td>
                                                     
                                                 </td> 
                                                <td>
                                                ${v4}
                                                </td>
                                            </tr>` 
                                        }
                                    });
                                } 
                                else{
 
                                    html+=`<tr>
                                         <td>
                                             
                                         </td> 
                                        <td>
                                        ${v3}
                                        </td>
                                    </tr>` 
                                }
                            });
                        } 
                        else
                        {
                            html+=`<tr>
                                 <td>
                                     
                                 </td> 
                                 <td>
                                 ${v2}
                                 </td>
                             </tr>`   
                        } 
                     });
 
                 }
                 else
                 {
                     html+=`<tr>
                         <td>
                             
                         </td> 
                         <td>
                         ${v}
                         </td>
                     </tr>` 
                     
                 }
                  
             });
              console.log(d);
                            
             $('#jobResult').html(html)
         }
     })
     .always(()=>{
        loader_stop()
     });
    }
 
    $('#Type').on('change',()=>{
        let url = ''
        if($('#Type').val() == 1)
        {
            url='https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=0&aggregate=true&offset=0'
        }
        else if($('#Type').val() == 2)
        {
            url='https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=0&aggregate=true&offset=0'
        }
        searchjob(url) 
    })
     
 
 
 });