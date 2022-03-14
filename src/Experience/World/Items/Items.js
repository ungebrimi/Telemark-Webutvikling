import Experience from "../../Experience";
import Logo from "./Logo";
import Triangle from "./Triangle";

export default class Items
{
    constructor()
    {
        this.experience = new Experience
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.logo = new Logo()
        this.triangle = new Triangle()

        this.setItems()

        this.time.on('tick', () =>
        {
            this.positionItems()
        })
    }

    setItems()
    {
        this.items = 
        [
           this.logo.logo,
           this.triangle.triangle
        ]
        for(const item of this.items)
        {
            this.scene.add(item)
        }
    }

    positionItems()
    {
        const mediaQuery = window.matchMedia("(max-width: 620px)")   
        const handleScreenSize = (e) =>
        {
            if (e.matches)
            {
                //logo
                this.items[0].position.set(0, -4, 0)
                this.items[0].scale.set(1, 1, 1)
                // triangle
                this.items[1].position.set(0, -15, 0)
            }
            else if (!e.matches)
            {
                //logo
                this.items[0].position.set(-2, -3, 1)
                this.items[0].scale.set(1, 1, 1)
                // triangle
                this.items[1].position.set(5, -13.5, 0)
            }
        }
        mediaQuery.addEventListener(handleScreenSize, () =>
        {
            console.log("screen")
        })
        handleScreenSize(mediaQuery)
    }
}