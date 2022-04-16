import GameScene from './GameScene';
import preloadScene from './preloadscene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale:{
        autoCenter: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [preloadScene,GameScene]
};

export default config;