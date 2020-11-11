<?php
//   if(!$this->session->userdata('usu_id')) { header("Location: ".base_url());
// $this->session->unset_userdata('vis_id'); ?>
<!DOCTYPE html>
<html lang="es">
  <head>
  <?php $this->load->view('head'); ?>
  </head>
  <body>
 
    <!-- ########## CONTEND ########## -->
    <div class="" id="contenido-local">
      
      </div>
      <!-- ########## FOOTER ########## -->
      <?php $this->load->view('js'); ?>
      <?php $this->load->view('footer'); ?>
      <!-- ########## FINAL FOOTER ########## -->
    <!-- ########## FINAL DE CONTENIDO ########## -->
    <script src="./assets/js/masterpage.js"></script>
    <!-- <div id="loading">
      <img id="loading-image" src="<?= img_url()?>apple-icon.png" alt="Loading..." />
      <h3 id="loading-text">Loading...</h3>
    </div> -->
  </body>
</html>
