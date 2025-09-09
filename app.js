'use strict'

async function buscarImagens (raca) {
const url = `https://dog.ceo/api/breed/${raca}/images`
const response = await fetch(url)
const imagens = await response.json()
console.log(imagens.message)
return imagens.message

}

const buscarbtn = document.getElementById('buscarbutton')

function criarCardDogs (url) {
    resultado.innerHTML = '';

    imagens.array.forEach(url => {
    const cardDog = document.createElement('div');
    card.classList.add('card-cachorro');

    const img = document.createElement('img');
    img.src = url;
    img.classList.add('foto-card');

    }); 
   

    // card.appendChild(img);
    // resultado.appendChild(cardDog);
    buscarbtn.addEventListener('click', async () => {
     const raca = racainput.value.toLowerCase()
    })



}



 buscarImagens('pinscher')
