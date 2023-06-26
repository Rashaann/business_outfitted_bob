class EndScene extends Phaser.Scene {
    constructor() {
      super({ key: 'EndScene' })
    }
  
    preload() {
      this.load.image('end', 'https://content.codecademy.com/courses/learn-phaser/BOB/Game%20over.png');
    }
  
    create() {
      screen = this.add.image(0, 0, 'end').setOrigin(0);
  
      // Reset of global variables.
      score = 0;
      speed = 0.5;
  
      // Reset sprite positions.
      gameState.numCoordinates = {};
  
      this.input.keyboard.on('keydown', () => {
        this.scene.stop('EndScene');
        this.scene.start('GameScene');
      });
    }
  }
  
  
  
  