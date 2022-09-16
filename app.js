const cards = document.querySelectorAll('.card')

let image = document.createElement('img')

for(let card of cards){
    let image = document.createElement('img')
    image.setAttribute('src',`./assets/${Math.floor(Math.random() * 3)+1}.png`)
    card.append(image)
}