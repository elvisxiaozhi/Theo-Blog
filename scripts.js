function myFunction(index) {
   	var links = document.getElementById("navigation_bar").querySelectorAll("a");
   	
   	for(var i = 0; i < links.length; i++) {
   		if(i === index) {
   			links[i].style.color = "#AAAAAA";
   		}
   		else {
   			links[i].style.color = "#666666";
   		}
   	}
}

$(function(){
  $("#nav-placeholder").load("nav.html");
});