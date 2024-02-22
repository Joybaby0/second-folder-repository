
window.addEventListener("scroll", function(){
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


let faqDisplay = document.querySelectorAll(".faq-display")

faqDisplay.forEach(function(faqs){
    faqs.addEventListener("click", function(){
        // console.log("clicked")
        faqs.classList.toggle("show-text")


        const icon = faqs.querySelector(".faq-icon i")
            if(icon.className === 'fas fa-plus'){
                icon.className = 'fas fa-minus'
            }else{
                icon.className = 'fas fa-plus'
            }
        
    })
})

let navMenu = document.querySelector(".nav-menu")
let openBtn = document.querySelector(".open-btn")
let closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", function(){
    navMenu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    openBtn.style.display = "none"
})

closeBtn.addEventListener("click", function(){
    navMenu.style.display = "none"
    closeBtn.style.display = "none"
    openBtn.style.display = "inline-block"
})