<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
    }
       
	public function load_home()
	{
        $data =  $this->load->view('home/home2',NULL,TRUE);
        echo json_encode($data);
    }
	
    public function load_search()
	{
        $data =  $this->load->view('home/search',NULL,TRUE);
        echo json_encode($data);
    }

    public function load_bioinformation()
	{
        $data =  $this->load->view('home/bioinformation',NULL,TRUE);
        echo json_encode($data);
    }
    public function load_jobinformation()
	{
        $data =  $this->load->view('home/jobsinformation',NULL,TRUE);
        echo json_encode($data);
    }
    }

}

