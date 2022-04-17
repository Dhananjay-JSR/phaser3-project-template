import Phaser from 'phaser';
import zero from './assets/0.png';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import four from './assets/4.png';
import five from './assets/5.png';
import six from './assets/6.png';
import seven from './assets/7.png';
import eight from './assets/8.png';
import nine from './assets/9.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {

        this.load.image('0', zero);
        this.load.image('1', one);
        this.load.image('2', two);
        this.load.image('3', three);
        this.load.image('4', four);
        this.load.image('5', five);
        this.load.image('6', six);
        this.load.image('7', seven);
        this.load.image('8', eight);
        this.load.image('9', nine);
    }
      
    create ()
    {
       
        this.Create_Rectangle_Add_Scrollable_Meta();    
        this.swapable()

    }
    swapable(){
        this.physics.overlap(this.zero, this.tr1, function (zero, tr1) {
            console.log("hello")
        })
    }
    Create_Rectangle_Add_Scrollable_Meta(){
        //Function to initlize Rectable and Add Dragable Property and Populate Meta Data by Name Tag


        
        this.tr1 = this.add.rectangle(74, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr2 = this.add.rectangle(222, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr3 = this.add.rectangle(370, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr4 = this.add.rectangle(518, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr5 = this.add.rectangle(666, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        

        this.br1 = this.add.rectangle(74, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br2 = this.add.rectangle(222, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br3 = this.add.rectangle(370, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br4 = this.add.rectangle(518, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br5 = this.add.rectangle(666, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)  
        
        this.zero = this.add.image( 50, 600, '0').setScale(0.5).setInteractive()
        this.one = this.add.image( 150, 600, '1').setScale(0.5).setInteractive();
        this.two = this.add.image( 250, 600, '2').setScale(0.5).setInteractive();
        this.three = this.add.image( 350, 600, '3').setScale(0.5).setInteractive();
        this.four = this.add.image( 450, 600, '4').setScale(0.5).setInteractive();
        this.five = this.add.image( 550, 600, '5').setScale(0.5).setInteractive();
        this.six = this.add.image( 650, 600, '6').setScale(0.5).setInteractive();
        this.seven = this.add.image( 750, 600, '7').setScale(0.5).setInteractive();
        this.eight = this.add.image( 850, 600, '8').setScale(0.5).setInteractive();
        this.nine = this.add.image( 950, 600, '9').setScale(0.5).setInteractive();
        this.zero.name="zero"
        this.one.name="one"
        this.two.name="two"
        this.three.name="three"
        this.four.name="four"
        this.five.name="five"
        this.six.name="six"
        this.seven.name="seven"
        this.eight.name="eight"
        this.nine.name="nine"
        this.physics.add.staticGroup([this.tr1,this.tr2,this.tr3,this.tr4,this.tr5,this.br1,this.br2,this.br3,this.br4,this.br5,this.zero, this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine])
        this.input.setDraggable([this.zero, this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine]);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
        
        this.input.on('dragend', function (pointer, gameObject) {

            console.log(gameObject.name)
    
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
