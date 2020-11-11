<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<section class="body-services">
<section class="container pt-3 mb-3">
   <section class="row">
   <div class="col-md-12 ">
        <form action="/post" method="post">
            <input class="form-control" name="name" id="search" placeholder="Search a job..." /><br />
            <select  class="form-control"  name="" id="Type">
                <option selected disabled value="0">Select</option>
                <option value="1">Jobs</option>
                <option value="2">People</option>
            </select>
        </form>
    </div>
   </section>
   <section class="row">    
        <section class="col-md-12 " >
            <table>
                <thead>
                    <tr>
                        <th  class="d-none " id="totalJobs"></th>
                    </tr>
                </thead>
                <tbody id="jobResult">

                </tbody>
            </table>
        </section>
   </section>
</section>
</section>
<script src="<?= js_url_sin()?>login/search.js" type="text/javascript"></script>