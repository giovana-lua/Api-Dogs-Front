'use strict'

async function buscarImagens (raca) {
const url = `https://dog.ceo/api/breed/${raca}/images`
const response = await fetch(url)
const imagens = await response.json()
console.log(imagens.message)
return imagens.message

}

const input = document.getElementById('input-dog')
const buscarbtn = document.getElementById('buscarbutton')
const resultado = document.getElementById('resultado')


function criarCardDogs (urls) {
    //limpa o resultado anterior 
    resultado.innerHTML = '';

    urls.forEach(url => {
    const cardDog = document.createElement('div');
    cardDog.classList.add('card-cachorro');

    const img = document.createElement('img');
    img.src = url;
    img.classList.add('foto-card');

    //Adiciona a imagem ao card
    cardDog.appendChild(img);
    //Adiciona o card ao elemento resultado
    resultado.appendChild(cardDog);


    });    
}
    
    buscarbtn.addEventListener('click', async () => {
    const raca = input.value.toLowerCase()
    const imagens = await buscarImagens(raca)
    criarCardDogs(imagens)
       
   })


 buscarImagens()
