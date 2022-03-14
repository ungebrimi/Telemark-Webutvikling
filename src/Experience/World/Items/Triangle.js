import * as THREE from 'three'
import Experience from '../../Experience'

export default class Triangle 
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.resources = this.experience.resources

        this.setTriangle()

        this.time.on('tick', () =>
        {
            this.rotateTriangle()
        })
    }

    setTriangle()
    {
        const texture = this.resources.items.texture4

        this.triangle = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1),
            new THREE.MeshNormalMaterial(
                {
                    map: texture
                }
            )
        )
    }

    rotateTriangle()
    {
        this.triangle.rotation.y = this.time.elapsed * 0.0004
        this.triangle.rotation.x = this.time.elapsed * 0.0004

    }
}