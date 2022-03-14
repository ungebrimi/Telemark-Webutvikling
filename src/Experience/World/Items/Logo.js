import * as THREE from 'three'
import Experience from '../../Experience'

export default class Logo
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.setLogo()

        // Time tick event
        this.time.on('tick', () =>
        {
          this.rotateBox()
        })
    }

    setLogo()
    {
        const logoTexture = this.resources.items.logo

        this.logo = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshMatcapMaterial(
                {
                    map: logoTexture
                }
            )
        )
    }

    rotateBox()
    {
        this.logo.rotation.x = this.time.elapsed * 0.0002
        this.logo.rotation.y = this.time.elapsed * 0.0002
    }
}