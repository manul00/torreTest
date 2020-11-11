<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
<link href="<?= css_url_sin()?>signin.css" rel="stylesheet">
<section id="body" class="text-center">
<section class="form-signin">
  <img class="mb-4" src="<?= img_url()?>logo.png" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Login</h1> or <a href="#" id="frm-register">register!</a>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <div class="">
    <div id="Respuest-login" class="alert alert-danger d-none" role="alert">
    
    </div>
  </div>
  <button class="btn btn-lg btn-primary btn-block" id="btn-login">Login</button>

</section>

</section>
<script src="<?= js_url_sin()?>login/login.js"></script>