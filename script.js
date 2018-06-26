
function table() {

	let div = document.querySelector("div");
	div.innerHTML = "";
	let num = document.querySelector("input").value;

	for(let i = 1 ; i <= 10; i++){
		
	
	let bodyEl = document.querySelector("body");
	div.innerHTML +=  "<p>" + num + " * " + i + " = " +( num * i )+ "</p>";


}

}