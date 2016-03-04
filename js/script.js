jQuery(document).ready(function($) 
{
	var rango=$('#rango').val();

	$('#rango').change(function(event) 
	{
		construyeCapicua($('#rango').val());

	});	

function construyeCapicua (rango) 
	{
		$('#textRango').html("Nivel "+rango);
		var array="1";
		var ecuacion="";
		var respuesta="";
		for (var i = 0; i < rango; i++) 
		{
			array+="1"
			ecuacion+= array+" X "+array + " :"+"<br>" ;
			respuesta+=Number(array)*Number(array)+"<br>";
		
			$('#ecuacion').html(ecuacion).css({
				"color"			: randomColor(),
				"font-weight"	: "bold",
				"text-shadow"	: "5px 5px 5px #aaa",
				"font-size"		: "2em"
			});

			$('#respuesta').html(respuesta).css({
				"color"			: randomColor(),
				"font-weight"	: "bold",
				"text-shadow"	: "5px 5px 5px #aaa",
				"font-size"		: "2em"
			});
		};
	};

 function randomColor()
	{ 	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};	


});