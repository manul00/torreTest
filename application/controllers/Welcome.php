<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function index()
	{	
		$data['head'] = $this->load->view('head', NULL, TRUE);
		$data['footer'] = $this->load->view('footer', NULL, TRUE);
		$data['js'] = $this->load->view('js', NULL, TRUE);
		$this->load->view('index',$data);

	}
}
