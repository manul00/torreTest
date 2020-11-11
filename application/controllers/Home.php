<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
    }

	public function load_home()
	{   
        $data =  $this->load->view('home/home2');
        echo json_encode($data);
    }
	

    public function load_search()
	{
        $data =  $this->load->view('home/search');
        echo json_encode($data);
    }

    public function load_job()
	{
        $data =  $this->load->view('home/job');
        echo json_encode($data);
    }
    public function load_bio()
	{
        $data =  $this->load->view('home/bio');
        echo json_encode($data);
    }
    

}

