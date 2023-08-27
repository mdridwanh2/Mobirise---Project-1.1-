let humbarger = document.querySelector (`.humbarger`)
let navMenu = document.querySelector (`.nav-items`)

humbarger.addEventListener (`click`, () =>{
    navMenu.classList.toggle (`active`)
    humbarger.classList.toggle (`active`)
})



const accorionItem = document.querySelector (`.accordion-title`)
let accordionIcon = document.querySelector (`.accordion-icon`)

accordionIcon.forEach( (el,index) =>{
    el.addEventListener (`click`, () =>{
        accorionItem.forEach (content =>{
            content.classList.remove (``)
        })
    })
})


document.querySelectorAll(`.wacth-video-cnt video`).forEach (video =>{
    document.querySelector(`.popup-video`).style.display = `block`;
});