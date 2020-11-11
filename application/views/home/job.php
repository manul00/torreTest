<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<section class="body-services">
<section class="container pt-3 mb-3">
   <section class="row">
   <div class="col-md-12 ">
        <form action="/post" method="post">
            <input class="form-control" name="name" id="jobId" placeholder="Jobs ID?..." /><br />
            
            <input id="consult" class="btn btn-primary" type="button" value="Search" /><br /><br />
        </form>
    </div>
   </section>
   <section class="row">    
        <section class="col-md-12 " >
            <table>
                <thead>
                    
                </thead>
                <tbody id="jobData">

                </tbody>
            </table>
        </section>
   </section>
</section>
</section>
<script src="<?= js_url_sin()?>login/jobs.js" type="text/javascript"></script>