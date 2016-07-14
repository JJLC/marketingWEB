/**
 * 
 */

function formata()
{
	  var myWidth = 0, myHeight = 0;
	  if( typeof( window.innerWidth ) == 'number' )
	  	{
		  //Non-IE
		  myWidth = window.innerWidth;
		  myHeight = window.innerHeight;
	  	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
	  			{
	  				//IE 6+ in 'standards compliant mode'
	  				myWidth = document.documentElement.clientWidth;
	  				myHeight = document.documentElement.clientHeight;
	  			} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) )
	  					{
	  						//IE 4 compatible
	  						myWidth = document.body.clientWidth;
	  						myHeight = document.body.clientHeight;
	  					}
		x = (myWidth-1000)/2;
		if (x<=0)
			x = 0;
		document.getElementById("sheet").style.position = "absolute";
		document.getElementById("sheet").style.marginLeft = x+"px";
}

function mudaPT()
{
	window.parent.location.href = "http://"+location.host+"/views/pt";
}

function mudaSP()
{
	window.parent.location.href = "http://"+location.host+"/views/sp";
}

function mudaEN()
{
	window.parent.location.href = "http://"+location.host+"/views/en";
}

function goHome()
{
	window.parent.location.href = "http://"+location.host+"/views/en";
}

function resizeFrame(mySize)
{
	parent.document.getElementById("corpo").style.height = mySize+"px";
}