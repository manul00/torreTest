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
            let intreres = ''
            let jobss = ''
            let stre = ''

            $.each(d.strengths, function (i, v) { 
                    stre +=`<tr>
                    <td>
                        Created: ${v.created}
                    </td>
                    <td>
                        ${v.name}
                    </td>
                </tr>`
            });
            $.each(d.interests, function (i, v) { 
                    intreres +=`<tr>
                    <td>
                        ${v.name}
                    </td>
                    <td>
                        ${v.created}
                    </td>
                </tr>`
            });

            $.each(d.experiences, function (i, v) { 
                jobss +=`<tr>
                   <td>
                       ${v.name}
                   </td>
                   <td>
                       ${v.responsibilities}
                       
                   </td>
               </tr>
               <tr>
                   <td>
                       FROM ${v.fromMonth}/${v.fromYear}
                   </td>
                   <td>
                     TO ${v.toMonth}/${v.toYear}
                   </td>
               </tr>
               
               `
           });

            html+=`<tr>
                <td>
                    Name
                </td>
                <td>
                    ${d.person.name}
                </td>
            </tr>
            <tr>
                <td>
                    Location
                </td>
                <td>
                    ${d.person.location.name}
                </td>
            </tr>
            <tr>
                <td>
                    Picture
                </td>
                <td>
                    <img width="200px" src="${d.person.picture}">
                </td>
            </tr>
            
            <tr>
                <td>
                    Head Line
                </td>
                <td>
                    ${d.person.professionalHeadline}
                </td>
            </tr>
            <tr>
                <td>
                    Summary
                </td>
                <td>
                    ${d.person.summaryOfBio}
                </td>
            </tr>
            <tr>
            <td>
                Education
            </td>
            <td>
                ${d.education[0].name}
            </td>
            </tr>
            <tr>
                <td>
                   Organization
                </td>
                <td>
                   ${d.education[0].organizations[0].name}
                </td>
            </tr>
            <tr>
                <td>
                   FROM ${d.education[0].fromYear}
                </td>
                <td>
                    TO ${d.education[0].toYear}
                </td>
            </tr>
            <tr>
                <td>
                <b>Interests</b>
                  
                </td>
                <td>
                    Created: ${intreres}
                </td>
            </tr>
            <tr>
                <td>
                  <b>Experience</b>
                </td>
                <td>
                    ${jobss}
                </td>
            </tr>
            <tr>
                <td>
                  <b>Strengths</b>
                </td>
                <td>
                    ${stre}
                </td>
            </tr>
            `


            
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