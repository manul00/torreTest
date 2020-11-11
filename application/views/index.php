<!DOCTYPE html>
<html lang="es">
  <head>
  <?php $this->load->view('head'); ?>
  </head>
  <body>
    <!-- ########## MENU ########## -->
    <?php //$this->load->view('layout/menu'); ?>
    <!-- ########## FINAL DEL MENU ########## -->

    <!-- ########## TOP HEADER ########## -->
    <?php //$this->load->view('layout/top_menu'); ?>
    <!-- ########## FINAL DEL TOP HEADER ########## -->

    <!-- ########## PANEL DE OPCIONES ADICIONALES ########## -->
    <?php //$this->load->view('layout/options'); ?>
    <!-- ########## FINAL PANEL DE OPCIONES ADICIONALES ########## --->

    
    <!-- ########## CONTENIDO ########## -->
    <div class="" id="contenido-local">
      
      </div>
      <!-- ########## FOOTER ########## -->
      <?php $this->load->view('js'); ?>
      <?php $this->load->view('footer'); ?>
      <!-- ########## FINAL FOOTER ########## -->
    <!-- ########## FINAL DE CONTENIDO ########## -->
    <script src="<?= js_url_sin()?>masterpage.js"></script>
    <div id="loading">
      <img id="loading-image" src="<?= img_url()?>apple-icon.png" alt="Loading..." />
      <h3 id="loading-text">Loading...</h3>
    </div>
  </body>
</html>
