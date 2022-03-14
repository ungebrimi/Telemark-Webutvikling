import Experience from '../Experience'

export default class Carousel
{
    constructor()
    {
        this.experience = new Experience()
        this.carousel()
    }

    carousel()
    {
        const slides = document.querySelectorAll('.product__pages-item')
        const dots = document.querySelectorAll('.dot')
        const totalDots = dots.length
        const dot1 = document.querySelector('#dot1')
        const dot2 = document.querySelector('#dot2')
        const dot3 = document.querySelector('#dot3')
        const totalSlides = slides.length
        const nextButton = document.querySelector('#next')
        const previousButton = document.querySelector('#prev')
        let slidePosition = 0

        // eventlisteners
        nextButton.addEventListener('click', () =>
        {
            if(slidePosition === totalSlides -1)
            {
                slidePosition = 0
            }
            else
            {
                slidePosition ++
            }
            updateSlidePostion()
        }) 

        previousButton.addEventListener('click', () =>
        {
            if (slidePosition === 0) {
                slidePosition = totalSlides -1;
            } else {
                slidePosition --;
            }
            updateSlidePostion()
        })


        const updateSlidePostion = () => 
        {
            for (let slide of slides) 
            {
                slide.classList.add('hidden')
                slide.classList.remove('visible')
            }
            slides[slidePosition].classList.remove('hidden')
            
            switch(slidePosition)
            {
            case(0):
                dot1.style.backgroundColor = "#080d0e"
                dot2.style.backgroundColor = "#e4e4e4"
                dot3.style.backgroundColor = "#e4e4e4"
            break
            case(1):  
                dot1.style.backgroundColor = "#e4e4e4"
                dot2.style.backgroundColor = "#080d0e"
                dot3.style.backgroundColor = "#e4e4e4"
            break
            case(2):
                dot1.style.backgroundColor = "#e4e4e4"
                dot2.style.backgroundColor = "#e4e4e4"
                dot3.style.backgroundColor = "#080d0e"
            break
            }
        }
    }
}