// function navBarClicked(index) {
//    	var links = document.getElementById("navigation-bar").querySelectorAll("a");
   	
//    	for(var i = 0; i < links.length; i++) {
//    		if(i === index) {
//    			links[i].style.color = "#AAAAAA";
//    		}
//    		else {
//    			links[i].style.color = "#666666";
//    		}
//    	}
// }

function setCookie(name, value, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    alert(document.cookie);
}

function readCookie() {
	alert(document.cookie);
}

$(document).ready(function() {
    $("#navigation-bar.a").click(function() {
        $("#navigation-bar.a").removeClass('current');
        $(this).addClass('current');
    });
});

$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#footer-placeholder").load("footer.html");
});