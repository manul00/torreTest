$(document).ready(function () {
   searchUserBio = ()=>{
    var html=''
    $.ajax({
        beforeSend:()=>{
            loader_start()
        },
        headers: {
            'Access-Control-Allow-Origin': 'https://torre.co',
            "proxy": "https://cat-fact.herokuapp.com/",
        },
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/"+$('#userName').val(),
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (d) {
            loader_stop()
            //console.log(d);

            $(d.person).each(function (i, v) {
                $.each(v, function (j, v2) { 
                    console.log(v2 +' ESPACIO '+j);
                    
                    html+=`<tr>
                        <td>
                            ${v2[j]}
                        </td>   
                        <td>
                            ${v2}
                        </td>
                    </tr>` 
                     
                });
                
            });
            
            // $.each(d, function (i, v) { 
            //     if(typeof v == 'object')
            //     {
            //         $.each(v, function (k, v2) { 
            //            if(typeof v2 == 'object')
            //            {
            //                $.each(v2, function (j, v3) {
            //                    if(typeof v3 == 'object')
            //                    {    
            //                        $.each(v3, function (l, v4) { 
            //                            if(typeof v4 == 'object')
            //                            {
            //                                 $.each(v4, function (m, v5) { 
            //                                     html+=`<tr>
            //                                         <td>
            //                                        v5
            //                                         </td>   
            //                                         <td>
            //                                         ${v5}
            //                                         </td>
            //                                     </tr>` 
            //                                 });
            //                            }
            //                            else
            //                            {
            //                                html+=`<tr>
            //                                     <td>
            //                                    v4
            //                                     </td> 
            //                                    <td>
            //                                    ${v4}
            //                                    </td>
            //                                </tr>` 
            //                            }
            //                        });
            //                    } 
            //                    else{

            //                        html+=`<tr>
            //                             <td>
            //                            v3
            //                             </td> 
            //                            <td>
            //                            ${v3}
            //                            </td>
            //                        </tr>` 
            //                    }
            //                });
            //            } 
            //            else
            //            {
            //                html+=`<tr>
            //                     <td>
            //                     ${v}
            //                     </td> 
            //                     <td>
            //                     ${v2}
            //                     </td>
            //                 </tr>`   
            //            } 
            //         });

            //     }
            //     else
            //     {
            //         tml+=`<tr>
            //             <td>
            //                 v1
            //             </td> 
            //             <td>
            //             ${v}
            //             </td>
            //         </tr>` 
                    
            //     }
            // });
                           
            $('#userData').html(html)
        },
        error:(e)=>{
            if(e.status == 404)
            {
                html+=`
                        <div class="alert alert-danger" role="alert">
                            User Not found
                        </div>  
                    ` 
            }
            $('#userData').html(html)
        }
    })
    .fail(()=>{
        loader_stop()
            html+=`<tr>
                <td>
                    <div class="alert alert-danger" role="alert">
                        User Not found
                    </div>  
                </td>
            </tr>
           `
    })
    .always(()=>{
        loader_stop()
    });
   }

   $('#consult').on('click',()=>{
    searchUserBio() 
   })
    


});