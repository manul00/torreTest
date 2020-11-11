<section class=" container">
    <section>

    </section>
    <section class="row" style="padding-top:40px">
        <section class="col-12 col-md-6">
            <form action="/post" method="post">
                <input class="form-control" readonly id="name" name="name" placeholder="Name..." /><br />
                <input class="form-control" readonly id="last" name="last" placeholder="Last..." /><br />
                <input class="form-control" id="email" name="email" placeholder="E-mail..." /><br />
                <input class="form-control" id="password" type="password" name="password" placeholder="Password..." /><br />
                <input class="form-control" id="newpassword" type="password" name="cPassword" placeholder="Confirm password..." /><br />
                <div class="">
                    <div id="responseUpdate" class="alert alert-danger d-none" role="alert">
                    
                    </div>
                    <div id="responseUpdateS" class="alert alert-success d-none" role="alert">
                    
                    </div>
                </div>
                <input class="btn btn-primary" id="submit" value="Update" /><br /><br />
            </form>
        </section>
        <section class="col-12 col-md-3">
            <img src="<?= img_url()?>default-avatar.png" alt="">
        </section>
        <section class="col-12 col-md-3">
            <p id='nombre'></p>
            <p id="apellido"></p>
            <p id='correo'></p>
        </section>
    </section>
</section>

<script src="<?= js_url_sin()?>login/myAccount.js"></script>