$(document).ready(function () {
    searchJob = ()=>{
     $.ajax({
         headers: {
             'Access-Control-Allow-Origin': 'https://torre.co',
         },
         type: "GET",
         url: "https://torre.co/api/opportunities/"+$('#jobId').val(),
         contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         success: function (d) {
             let html=''
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
                            
             $('#jobData').html(html)
         }
     });
    }
 
    $('#consult').on('click',()=>{
     searchJob() 
    })
     
 
 
 });