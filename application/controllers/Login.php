<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model('LoginModel');
        //Do your magic here
    }

    public function updateUser()
    {
        $data = $this->LoginModel->updateUser(
            $this->input->post('email'),
            $this->input->post('password'),
            1
        );
        echo json_encode($data);
    }

    public function listar_usuario()
    {
        $data = $this->LoginModel->listar_usuario();
        echo json_encode($data);
    }
    public function register()
    {
        $data = $this->LoginModel->register(
            $this->input->post('email'),
            $this->input->post('password'),
            $this->input->post('name'),
            $this->input->post('last'),
            0,
            0
        );
        echo json_encode($data);
    }
   
	public function login()
	{
        $data = $this->LoginModel->login(
            $this->input->post('email')
        );

        if ($data[0]->sqlcode == 1) {
			$pw = $this->input->post('password');
			if (password_verify($pw, $data[0]->usu_clave)) {
				$this->session->unset_userdata('usu_id');
				$this->session->unset_userdata('usu_usuario');
				$this->session->unset_userdata('perf_id');
				$this->session->unset_userdata('usu_nombre');
				$this->session->unset_userdata('usu_apellido');
			
				$this->session->set_userdata('usu_id',$data[0]->usu_id);
				$this->session->set_userdata('usu_usuario' , $data[0]->usu_usuario);
				$this->session->set_userdata('perf_id' , $data[0]->perf_id);
				$this->session->set_userdata('usu_nombre' , $data[0]->usu_nombre);
                $this->session->set_userdata('usu_apellido' , $data[0]->usu_apellido);
                $data[0]->sqlmsg = $this->session->userdata('usu_nombre');
			}else{
                $data[0]->sqlcode = 0;
                $data[0]->sqlmsg = 'The password or username is incorrect';
			}
		}

		echo json_encode($data);
    }

    public function logout()
	{
		session_destroy();
        echo json_encode('');
	}
}

