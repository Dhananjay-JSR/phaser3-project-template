import { Scene } from "phaser";
import logo from './assets/logo.png'
class preloadScene extends Scene{
    constructor(){
        super({
            key: "preload"
           })
    }
    preload(){
        this.load.image('logo',logo)
    }
    create(){
        this.add.image(400,300,'logo')
        this.input.on('pointerdown',()=>{
            this.scene.start('GameScene')
        })
    }
}

export default preloadScene