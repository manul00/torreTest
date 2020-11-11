<!--   Core JS Files   -->
<script src="<?= js_url_sin()?>jquery.min.js" type="text/javascript"></script>
<script src="<?= js_url_sin()?>bootstrap.min.js" type="text/javascript"></script>
<!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ -->
<script src="<?= js_url_sin()?>bootstrap-switch.js"></script>
<!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker -->

<script src="<?= js_url_sin()?>now-ui-kit.js?v=1.3.0" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../assets/js/vendor/jquery.slim.min.js"><\/script>')</script>
<script src="<?= js_url_sin()?>bootstrap.bundle.min.js"></script>
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" type="text/javascript">
<script type="text/javascript">

  document.base_url = "<?= base_url() ?>";
  document.img_url = "<?= img_url() ?>";
  document.js_url = "<?= js_url_sin()?>";
  document.asset_url = "<?= asset_url() ?>";
  document.views_url = "<?= views() ?>";

  function loader_start() {
    $('#loading').show();
  }

  function loader_stop(tag = '') {
    $('#loading').hide();
  }

</script>