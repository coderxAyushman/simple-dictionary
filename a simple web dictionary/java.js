const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const result = document.getElementById('result');

const sound = document.getElementById('sound');

const btn = document.getElementById('search-btn');




btn.addEventListener('click', () => {
	let inpWord = document.getElementById('inp-word').value;

	inpWord.toLowerCase();



	fetch(`${url}${inpWord}`)
	     .then((response) => response.json())
	     .then((data) => {
	     	console.log(data);
	     	result.innerHTML = `<div class="Word">
				<h3 id="main">${inpWord}</h3>
			<button title="Currently Unavailable!"><ion-icon name="volume-high-outline"  class="hell"></ion-icon></button>				
			</div>
             
            <div class="details">
            	<p class="usmp">${data[0].meanings[0].partOfSpeech}</p>
            	<p class="usmp">${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>

            <p class="word-example" class="usmp">
            ${data[0].meanings[0].definitions[0].example || ''}
            </p>`




            sound.setAttribute('src', `https:${data[0].phonetics[0].audio}`);
            console.log(sound);
	     })




	     .catch(() => {
	     	result.innerHTML = `<h3>Couldn't find the word...</h3>`
	     })
     

     
	     new Audio('done.mp3').play();
})




	