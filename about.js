console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



let snugDuck = document.querySelector('#duck')

const duck = () => {
    alert('Im glad you like duckys')
}

snugDuck.addEventListener('mouseover', duck)