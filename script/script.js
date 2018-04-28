function addList(){
	let element = document.getElementById('skillsList');
	let text = document.getElementById('textForm').value;
	let list = document.createElement('li');
	
	list.innerHTML = text;
	
	element.appendChild(list);
}