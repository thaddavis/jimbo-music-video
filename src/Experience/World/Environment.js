import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('environment')
        }

        // this.setSunLight()
        this.setLights()
        // this.addGrid()
        // this.addFrame()
        // this.setEnvironmentMap()
    }

    setSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.sunLight)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }

    setLights()
    {
        console.log('setLights')

        // vvv Directional light vvv
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 1, 100)
        // directionalLight.castShadow = true
        // directionalLight.shadow.mapSize.width = 1024
        // directionalLight.shadow.mapSize.height = 1024
        // directionalLight.shadow.mapSize.width = 2048
        // directionalLight.shadow.mapSize.height = 2048
        // directionalLight.shadow.camera.near = 0.5
        // directionalLight.shadow.camera.far = 20
        // directionalLight.shadow.camera.top = 20
        // directionalLight.shadow.camera.right = 20
        // directionalLight.shadow.camera.bottom = -20
        // directionalLight.shadow.camera.left = -20
        // directionalLight.position.set(2, 2, 14)
        // const t = new THREE.Object3D();
        // t.translateX(0);
        // t.translateY(0);
        // t.translateZ(0);
        // directionalLight.target = t;
        // this.scene.add(directionalLight)
        // this.scene.add(directionalLight.target);
        // const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
        // directionalLightCameraHelper.visible = true
        // this.scene.add(directionalLightCameraHelper)
        // ^^^ Directional light ^^^

        // const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
        // light.position.set( -10, 10, 10 ); // default; light shining from top
        // light.castShadow = true; // default false
        // this.scene.add(light)

        // light.shadow.mapSize.width = 512; // default
        // light.shadow.mapSize.height = 512; // default
        // light.shadow.camera.near = 0.5; // default
        // light.shadow.camera.far = 50; // default

        // const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
        // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
        // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        // sphere.castShadow = true; //default is false
        // sphere.receiveShadow = false; //default
        // this.scene.add( sphere );

        // const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
        // const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
        // const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        // plane.receiveShadow = true;
        // this.scene.add( plane );

        // const helper = new THREE.CameraHelper( light.shadow.camera );
        // this.scene.add( helper );
    }

    setEnvironmentMap()
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.encoding = THREE.sRGBEncoding
        
        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this.scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }
    }

    addGrid()
    {
        console.log('addGrid')

        this.gridHelper = new THREE.GridHelper(10,10)
        this.gridHelper.rotation.x = - Math.PI * 0.5
        this.scene.add(this.gridHelper)

        // The X axis is red. The Y axis is green. The Z axis is blue.
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
    }

    addFrame()
    {
        console.log('addFrame')

        const points = [];
        points.push( new THREE.Vector3( -16, -9, 0 ) );
        points.push( new THREE.Vector3( -16, 9, 0 ) );
        points.push( new THREE.Vector3( 16, 9, 0 ) );
        points.push( new THREE.Vector3( 16, -9, 0 ) );
        points.push( new THREE.Vector3( -16, -9, 0 ) );

        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const material = new THREE.MeshBasicMaterial({
            color: 'orange',
        })

        this.frame = new THREE.Line(geometry, material)
        this.scene.add(this.frame)
    }
}