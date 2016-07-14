<?php

	require_once '../../classes/PHPMailer_v5/class.phpmailer.php';
	
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		$mail = new PHPMailer(true);
		$mail->IsSMTP();
		$mail->SMTPAuth   = true;
		$mail->Port       = 25;
		$mail->Host       = "";
		$mail->Username   = "";
		$mail->Password   = "";
		$mail->From       = $_POST["email"];
		$mail->FromName   = $_POST["nome"];
		$mail->AddAddress("");
		$mail->AddCC($_POST["email"]);
		$body = "";
		$body = "";
		$footer             = "";
		$footer             = "";			
		$mail->Subject = "Message from DirMgp";
		$msg = "<font family='Myriad Pro'>";
		$msg .= $_POST["mensagem"];
		$msg .= "</font>";
		$mail->MsgHTML($msg);
		$mail->IsHTML(true);
		$mail->Send();
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Insert title here</title>
	<link href="../../css/mktweb.css" rel="stylesheet" type="text/css" />
	<link href="../../css/contactos.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="barraContacto">
	</div>
	<div class="barraSombra">
	</div>
	<p>Envie nos su mensaje</p>
	<form id="form_contactos" method="post">
		<table>
			<tr>
				<td>Nombre:</td>
				<td><input type="text" id="nome" name="nome" value="" maxlength="50" size="50"/></td>
			</tr>
			<tr>
				<td>E-Mail:</td>
				<td><input type="text" id="email" name="email" value="" maxlength="50" size="50"/></td>
			</tr>
			<tr>
				<td style="vertical-align: top;">Mensaje: </td>
				<td><textarea rows="10" cols="50" id="mensagem" name="mensagem"></textarea></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td colspan="2" align="right"><input type="submit" value="Enviar" style="background-color: #0C5197; color: white; border: none;"></td>
			</tr>
		</table>
	</form>
	<div class="companies">
		<label style="font-size: 30px; margin-left: 50px;">Contacts</label>
		<div class="company">
			<label class="companyName">mktWEB</label><br/>
			<label class="companyAddress">&nbsp;</label><br/>
			<label class="companyAddress">&nbsp;</label><br/>
			<label class="companyAddress">&nbsp;</label><br/>
			<label class="companyPhone">Telef: </label>
		</div>
	</div>
</body>
</html>