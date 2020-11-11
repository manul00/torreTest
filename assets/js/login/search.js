$(document).ready(function () {
    searchjob = (url)=>{
        var html=''
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
            'accept-language': 'es-419,es;q=0.9',
         },
         type: "POST",
         url: url,
         
         success: function (d) {
            loader_stop()
            $('#totalJobs').html('Total '+d.total).removeClass('d-none')
            html+=`
            <tr>
                <td>
                    Compensantion Range
                </td>
            </tr>`
            $.each(d.aggregators.compensationrange, function (a, v) { 
            html+=`
                <tr>
                    <td>
                        Total: ${v.total}
                    </td>
                    <td>
                        ${v.value}
                    </td>
                </tr>`
            });
            html+=`<tr><td>Remote</td></tr>`
            $.each(d.aggregators.remote, function (b, v2){ 
            html+=`
                <tr>
                    <td>
                        Total: ${v2.total}
                    </td>
                    <td>
                        ${v2.value}
                    </td>
                </tr>`
            });
            $.each(d.aggregators.remoter, function (c, v3){ 
                html+=`
                    <tr>
                        <td>
                            Total: ${v3.total}
                        </td>
                        <td>
                            ${v3.value}
                        </td>
                    </tr>`
                });
            html+=`<tr><td>Skill</td></tr>`
            $.each(d.aggregators.skill, function (c, v4){ 
            html+=`
                <tr>
                    <td>
                        Total: ${v4.total}
                    </td>
                    <td>
                        ${v4.value}
                    </td>
                </tr>`
            });
            html+=`<tr><td>Type</td></tr>`
            $.each(d.aggregators.type, function (c, v5){ 
            html+=`
                <tr>
                    <td>
                        Total: ${v5.total}
                    </td>
                    <td>
                        ${v5.value}
                    </td>
                </tr>`
            });
            $('#jobResult').html(html)
         }
     })
     .always(()=>{
        loader_stop()
     });
    }
    $('#Type').on('change',()=>{
        let remote = ''
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