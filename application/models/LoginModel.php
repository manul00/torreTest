<?php
defined('BASEPATH') or exit('No direct script access allowed');

class LoginModel extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function updateUser($email,
    $password,
    $update)
    {
        $db = $this->load->database('default', TRUE);
        $result = $db->query(
            "call base_produccion.`usuario#register`(
                '".$email."',
                '". password_hash($password, PASSWORD_BCRYPT)."',
                ' ',
                ' ',
                ".$update.",
                '".$this->session->userdata('usu_id')."'
            );"
        )->result();
        $db->close();
        return $result;
    }
    public function register($email,$clave,$name,$last,$updateUser,$usu_id)
    {
        $db = $this->load->database('default', TRUE);
        $result = $db->query(
            "call base_produccion.`usuario#register`('".$email."','". password_hash($clave, PASSWORD_BCRYPT)."','".$name."','".$last."',".$updateUser.",".$usu_id.");"
        )->result();
        $db->close();
        return $result;
    }
    public function login($usuario)
    {
        $db = $this->load->database('default', TRUE);
        $result = $db->query(
            "call base_produccion.`usuario#login`('".$usuario."');"
        )->result();
        $db->close();
        return $result;
    }
    public function listar_usuario()
    {
        $db = $this->load->database('default', TRUE);
        $result = $db->query(
            "call base_produccion.`usuario#listar_info`(".$this->session->userdata('usu_id').");"
        )->result();
        $db->close();
        return $result;
    }
}

/* End of file AnexoModel.php */
/* Location: ./application/models/AnexoModel.php */
