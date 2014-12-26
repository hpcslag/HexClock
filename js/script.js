//'use strict'
function Time(){
	var t = new Date();
	var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    document.body.style.backgroundColor = '#'+h+''+m+''+s;
	document.getElementById('time').innerHTML = '<p  align="center" class="time">#'+h+''+m+''+s+'</p>';
	setTimeout(function(){Time()},1000);
}