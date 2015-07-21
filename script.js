/*Written by ipodlover3354*/

function reloadCommand(msg) {
	console.log(msg);
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	var z = document.getElementById("z").value;
	var cmd = document.getElementById("cmd").value;
	var e = document.getElementById("e").value;
	console.log('/execute ' + e + ' ' + x + ' ' + y + ' ' + z + ' ' + cmd);
	$( "div" ).html('/execute ' + e + ' ' + x + ' ' + y + ' ' + z + ' ' + cmd);
}

reloadCommand();

