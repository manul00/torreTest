$(document).ready(()=>{
	function formatNumber (n) {
		n = String(n).replace(/\D/g, "");
	  	return n === '' ? n : Number(n).toLocaleString();
	}
});