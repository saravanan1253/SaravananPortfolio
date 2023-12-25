window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
	sidemenu.style.right = "0";
}
function closemenu(){
	sidemenu.style.right = "-200px";
}

