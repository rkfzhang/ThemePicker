function colorChanger(s,color,type){
	var part = $(s);
	part.css(type,color)
}

chrome.runtime.onMessage.addListener(function(request, sender, response){
        //alert(request.part + request.type + request.color)
        colorChanger(request.part,request.color,request.type)
})
		