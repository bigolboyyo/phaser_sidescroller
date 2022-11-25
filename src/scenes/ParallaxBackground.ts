import Phaser from "phaser";
import { parallaxLoader } from "~/loaders/parallaxLoader";
import { createParallaxAlignment } from "~/utils/createParallaxAlignment";

export default class ParallaxBackground extends Phaser.Scene {
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private maximumCamWidth!: number;
  constructor() {
    super("parallax-background");
  }

  init() {
    let allScenes = this.game.scene.scenes;
    let mainGame = allScenes[1].scene;

    mainGame.start();

    // this.physics.world.setBounds(-35, 0, 7000, this.scale.height, false, true);
  }

  preload() {
    // background
    // background-far
    // mountains
    // trees
    // background-fg
    parallaxLoader(this);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const totalWidth = width * 11;
    this.maximumCamWidth = width * 11;

    // set out of boundary space on left side of screen. char will die if falls past a certain point

    createParallaxAlignment(this, totalWidth, "background", 0.1, width, 600);
    createParallaxAlignment(this, totalWidth, "background-far", 0.25, 875, 600);
    createParallaxAlignment(this, totalWidth, "mountains", 0.5, 875, 600);
    createParallaxAlignment(this, totalWidth, "trees", 1, 875, 600);
    createParallaxAlignment(this, totalWidth, "background-fg", 1.5, 875, 600);

    this.cameras.main.setBounds(0, 0, this.maximumCamWidth, height);
  }

  update(time: number, delta: number): void {
    const cam = this.cameras.main;
    const speed = 10;

    // console.info("Cam Scroll X Property:", cam.scrollX);

    if (cam.scrollX === this.maximumCamWidth - this.scale.width) {
      cam.scrollX = -speed;
    }

    if (this.cursors?.left.isDown) {
      cam.scrollX -= speed;
    } else if (this.cursors?.right.isDown) {
      cam.scrollX += speed;
    }
  }
}
