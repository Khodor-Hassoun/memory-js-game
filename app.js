const cards = document.querySelectorAll('.card')
const result = document.querySelector('.result')
let image = document.createElement('img')
let firstCard = ''
let wincounter = 0;
for(let card of cards){
    let image = document.createElement('img')
    image.setAttribute('src',`./assets/${Math.floor(Math.random() * 3)+1}.png`)
    card.append(image)
}
// for(let card of cards){
//     card.addEventListener('click', ()=>{
//         card.classList.add('no-image')
//     })
// }



// Logic. Go inside a div -> img ->src. compare with next click button
//If true we add a point and run a picture loop
//If false we hide both images and keep the game going
for(let card of cards){
    card.addEventListener('click',()=>{
        image = card.childNodes[1].src
        if( firstCard != image){
            firstCard = card.childNodes[1].src
        }
        else{
            wincounter++
            console.log('Almost there')
            result.innerHTML=`${wincounter}`
            for(let card of cards){
                card.removeChild(card.childNodes[1])
                let image = document.createElement('img')
                image.setAttribute('src',`./assets/${Math.floor(Math.random() * 3)+1}.png`)
                card.append(image)
            }

        }

    })
}