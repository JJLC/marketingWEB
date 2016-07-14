/**
 * 
 */

function abreHome(myLanguage)
{
	parent.document.getElementById('corpo').src='home.html';
	oTable = document.getElementById("tbl_navegador");
	btn1 = oTable.rows[0].cells[0];
	btn2 = oTable.rows[0].cells[1];
	btn3 = oTable.rows[0].cells[2];
	btn4 = oTable.rows[0].cells[3];
	btn1.style.background = "url('../../images/bt_home.jpg')";
	btn2.style.backgroundImage = "";
	btn3.style.backgroundImage = "";
	btn4.style.backgroundImage = "";
	btn1.style.color = "white";
	btn2.style.color = "black";
	btn3.style.color = "black";
	btn4.style.color = "black";
}

function abreGrupo(myLanguage)
{
	parent.document.getElementById('corpo').src='grupo.html';
	oTable = document.getElementById("tbl_navegador");
	btn1 = oTable.rows[0].cells[0];
	btn2 = oTable.rows[0].cells[1];
	btn3 = oTable.rows[0].cells[2];
	btn4 = oTable.rows[0].cells[3];
	btn1.style.backgroundImage = "";
	btn2.style.background = "url('../../images/bt_grupo.jpg')";
	btn3.style.backgroundImage = "";
	btn4.style.backgroundImage = "";
	btn1.style.color = "black";
	btn2.style.color = "white";
	btn3.style.color = "black";
	btn4.style.color = "black";	
}

function abreContactos(myLanguage)
{
	parent.document.getElementById('corpo').src='contactos.php';
	oTable = document.getElementById("tbl_navegador");
	btn1 = oTable.rows[0].cells[0];
	btn2 = oTable.rows[0].cells[1];
	btn3 = oTable.rows[0].cells[2];
	btn4 = oTable.rows[0].cells[3];
	btn1.style.backgroundImage = "";
	btn2.style.backgroundImage = "";
	btn3.style.background = "url('../../images/bt_contactos.jpg')";
	btn4.style.backgroundImage = "";
	btn1.style.color = "black";
	btn2.style.color = "black";
	btn3.style.color = "white";
	btn4.style.color = "black";
}

function abreLogin()
{
	parent.document.getElementById('corpo').src='http://marketing-bi.localhost/public';
	oTable = document.getElementById("tbl_navegador");
	btn1 = oTable.rows[0].cells[0];
	btn2 = oTable.rows[0].cells[1];
	btn3 = oTable.rows[0].cells[2];
	btn4 = oTable.rows[0].cells[3];
	btn1.style.backgroundImage = "";
	btn2.style.backgroundImage = "";
	btn3.style.backgroundImage = "";
	btn4.style.background = "url('../../images/bt_area_reservada.jpg')";
	btn1.style.color = "black";
	btn2.style.color = "black";
	btn4.style.color = "white";
	btn3.style.color = "black";
}