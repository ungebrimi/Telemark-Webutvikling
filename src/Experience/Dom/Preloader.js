import gsap from 'gsap'
import Experience from '../Experience'

export default class Preloader
{
    constructor()
    {
        this.experience = new Experience()
        this.preloader()
    }

    preloader()
    {
        const loader = document.getElementById('preloader')
        const loaderIcon = document.getElementById('loadericon')

        window.addEventListener('load', () =>
        {
            gsap.to(loader, {opacity: 0, ease: 'slow', duration: 3 })
            gsap.to(loaderIcon, {opacity: 0, ease: 'slow', duration: 3 })
            loader.style.zIndex = '0'
            loaderIcon.style.zIndex = '0'
        })
    }
}