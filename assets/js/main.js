const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 300,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3500,
    delay: 300,
})

sr.reveal('.perfil, .contact')
sr.reveal('.info', {origin: 'right', delay: 600})
sr.reveal('.about', {origin: 'left', delay: 800})
sr.reveal('.games__card, .services, .links__card', {interval: 100})