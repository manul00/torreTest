$(document).ready(function () {
   searchUserBio = ()=>{
    $.ajax({
        headers: {
            'Access-Control-Allow-Origin': 'https://torre.co',
        },
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/"+$('#userName').val(),
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (d) {
            let html=''
            $.each(d, function (i, v) { 
                console.log(Object.keys(v));
                
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
                                                        ${Object.keys(v5)}
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
                                                    ${Object.keys(v4)}
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
                                            ${Object.keys(v3)}
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
                                    ${Object.keys(v2)}
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
                    tml+=`<tr>
                        <td>
                            ${Object.keys(v)}
                        </td> 
                        <td>
                        ${v}
                        </td>
                    </tr>` 
                    
                }
                 
            });
                           
            $('#userData').html(html)
        }
    });
   }

   $('#consult').on('click',()=>{
    searchUserBio() 
   })
    


});