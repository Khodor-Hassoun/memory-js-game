const cards = document.querySelectorAll('.card')

let image = document.createElement('img')
let firstCard = ''
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
            console.log('Almost there')
        }

    })
}