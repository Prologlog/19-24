let elem = document.querySelector('#elem');
let list = document.querySelector('#list');
elem.addEventListener('keypress', func1)
    function func1(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		let span = document.createElement('span');
		span.classList.add('span');
		span.textContent = this.value;
		span.addEventListener('dblclick', 
        function () {
			let text = this.textContent;
			this.textContent = '';
			let input = document.createElement('input');
			input.value = text;
			this.appendChild(input);
			let self = this;
			input.addEventListener('keypress', func3)
            function func3(event) {
				if (event.key == 'Enter') {
					self.textContent = this.value;
				}
			};
		});
		li.appendChild(span);
		let del = document.createElement('span');
		del.textContent = 'удалить';
		del.classList.add('del');
		del.addEventListener('click', func4)
        function func4() {
			this.parentElement.remove();
		};
		li.appendChild(del);
		let mark = document.createElement('span');
		mark.textContent = 'сделано';
		mark.classList.add('dd');
		mark.addEventListener('click', function() {
			this.parentElement.classList.add('gg');
		});
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
}

