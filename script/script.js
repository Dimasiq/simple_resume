function addList(){
	let element = document.getElementById('skillsList');
	let text = document.getElementById('textForm').value;
	let list = document.createElement('li');
	
	list.innerHTML = text;
	
	element.appendChild(list);
  
  document.onclick = function(){
    list = Array.from(document.querySelectorAll('li'));
    list.forEach((e) => {e.onclick = function() { this.remove(); } });
  }
}

