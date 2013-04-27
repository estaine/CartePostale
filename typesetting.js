

function initAll() {
    timer = window.setInterval("animation()", 100);  ///зададим интервал вызова функции animation() 100мс
}
function animation() {
    var w = parseInt(document.getElementById("iTitle").style.height);  ///определим текущую ширину блока и увеличим на 1
    if (w < 500) {  ///если ширина меньше  200, увеличим ширину блока на 1px
        document.getElementById("iTitle").style.height = w +1 + "px";
    } else window.clearInterval(timer);   ///если нет, разрушим интервал (перестанем вызывать функцию animation())
}
function typeset()
{
	var HAGIN_HEIGHT_TO_SIZE = 0.724;
	var HAGIN_WIDTH_TO_SIZE = 5.858;
	var MAX_HEIGHT_RATIO = 0.15;
	var MAX_WIDTH_RATIO = 0.60;
	var BORDER_ENVELOPE_WIDTH = 90;

	var titleFontSize = ($(document).width() * MAX_WIDTH_RATIO * HAGIN_HEIGHT_TO_SIZE / HAGIN_WIDTH_TO_SIZE <= $(document).height() * MAX_HEIGHT_RATIO) ? ($(document).width() * MAX_WIDTH_RATIO / HAGIN_WIDTH_TO_SIZE) : ($(document).height() * MAX_HEIGHT_RATIO / HAGIN_HEIGHT_TO_SIZE);
	$("#iTitle").css("fontSize", titleFontSize);
	
	var envAmt = titleFontSize * HAGIN_WIDTH_TO_SIZE / BORDER_ENVELOPE_WIDTH  + 1 ;
	
	for (var envCnt = 0;  envCnt < envAmt; envCnt++)
	{
		var img = $("<img />").attr({ "id": "iBorderImage" + envCnt, "src": "images/brd_envelope.png" }).appendTo($("#iTitleBorder"));		
		sleep(1000);
	}

	
	
}

$(document).ready(typeset);
window.onload = initAll;