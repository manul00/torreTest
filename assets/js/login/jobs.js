$(document).ready(function () {
    searchJob = ()=>{
        var html=''
     $.ajax({
        beforeSend:()=>{
            loader_start()
        },
         headers: {
             'Access-Control-Allow-Origin': 'https://torre.co',
         },
         type: "GET",
         url: "https://torre.co/api/opportunities/"+$('#jobId').val(),
         contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         success: function (d) {
             loader_stop()
             $('#titleJobs').html(d.objective).removeClass('d-none')
            $.each(d.commitment, function (a, v) {
                html += `<tr><td>${a}</td>
                    <td>${v}</td></tr>`
            });
            $.each(d.compensation, function (b, v2) {
                html += `<tr><td>${b}</td>
                    <td>${v2}</td></tr>`
            });
            html += `<tr><td>Created</td>
            <td>${d.created}</td></tr>
            <tr><td>Deadline</td>
            <td>${d.deadline}</td></tr>
            `
            $.each(d.details, function (c, v3) {
                html += `<tr><td>${v3.code}</td>
                    <td>${v3.content}</td></tr>`
            });
            html += `
            <tr>                    
                <td>Organization</td>
            </tr>`
            $.each(d.organizations, function (d, v4) {
                html += `
                    <tr><td>${v4.name}</td>
                    <td><img src="${v4.picture}" alt="${v4.name}"></td></tr>`
            });
            html += `
            <tr>                    
                <td>Owner</td>
            </tr>`
            $.each(d.owner, function (c, v5) {
                html += `
                    <tr>                    
                        <td>${c}</td>
                        <td>${v5}</td>
                    </tr>`
            });
            $.each(d.place, function (d, v6) {
                html += `<tr>                    
                        <td>${d}</td>
                        <td>${v6}</td>
                    </tr>`
            });
                
            
            $('#jobData').html(html)
            
         },
         error:(e)=>{
            $('#titleJobs').html('').addClass('d-none')
            if(e.status == 404)
            {
                html+=`
                <div class="alert alert-danger" role="alert">
                    Job Not found
                </div> ` 
            }
            $('#jobData').html(html)
        }
     })
     .always(()=>{
        loader_stop()
     });
    }
 
    $('#consult').on('click',()=>{
     searchJob() 
    })  
 });