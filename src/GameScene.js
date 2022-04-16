import { Scene } from "phaser";
import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";
import music from './assets/music/music.mp3'

class GameScene extends Scene {
  constructor() {

    super({
        key: "GameScene"
    });
    this.score=0;
    this.gameOver=false
  }

  preload() {
      this.load.audio('pick',music)
      this.add.text(200,0,"Caching Images")
    this.load.image("sky", sky);
    this.load.image("ground", ground);
    this.load.image("star", star);
    this.load.image("bomb", bomb);
    this.load.spritesheet("dude", dude, { frameWidth: 32, frameHeight: 48 });
  }
  create() {
    
    const sky = this.add.image(400, 300, "sky");
    this.createPlatform();
    this.createPlayer();
    this.createStar()
    this.physics.add.overlap(this.player,this.stars,(player,star)=>{
        star.disableBody(true,true)
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);


        var music = this.sound.add('pick');

        music.play();

        if (this.stars.countActive(true) === 0)
        {
            this.stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            this.bomb = this.bombs.create(x, 16, 'bomb');
            this.bomb.setBounce(1);
            this.bomb.setCollideWorldBounds(true);
            this.bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    
        }
        
    })

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });


    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.bombs, this.platforms);

    this.physics.add.collider(this.player, this.bombs, ()=>{
    this.physics.pause();
    if ( this.gameOver){

    }
    else {
        this.GameOverTitle = this.add.text(400,300,"GAME OVER", { fontSize: '32px', fill: '#000' }

        )
    }
    this.player.setTint(0xff0000);

    this.player.anims.play('turn');
    this.gameOver = true;
    }, null, this);
    
  }
  update(){
    this.createCursor(); 
  }
  //===================================== Base Class Function
  createStar(){
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    this.stars.children.iterate((child)=> {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });
    this.physics.add.collider(this.stars,this.platforms)
  }
  createCursor(){
    this.cursors = this.input.keyboard.createCursorKeys()
    if (this.cursors.left.isDown)
{
    this.player.setVelocityX(-160);
    this.player.anims.play('left', true);
}
else if (this.cursors.right.isDown)
{
    this.player.setVelocityX(160);
    this.player.anims.play('right', true);
}
else
{
    this.player.setVelocityX(0);
    this.player.anims.play('turn');
}
if (this.cursors.up.isDown && this.player.body.touching.down)
{
    this.player.setVelocityY(-330);
}
  }

  createPlatform() {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");
  }


  createPlayer() {
    this.player = this.physics.add.sprite(100, 450, "dude");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player,this.platforms)

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export default GameScene;
