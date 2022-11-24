import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("hello-world");
  }

  preload() {
    // parallax loading
    const parallaxLoader = () => {
      this.load.image("background", "assets/parallax/parallax-mountain-bg.png");
      this.load.image(
        "background-far",
        "assets/parallax/parallax-mountain-montain-far.png"
      );
      this.load.image(
        "mountains",
        "assets/parallax/parallax-mountain-mountains.png"
      );
      this.load.image("trees", "assets/parallax/parallax-mountain-trees.png");
      this.load.image(
        "background-fg",
        "assets/parallax/parallax-mountain-foreground-trees.png"
      );
    };
    parallaxLoader();

    const blockLoader = () => {
      this.load.image("block", "assets/png/block.png");
    };
    blockLoader();

    const charLoader = () => {
      this.load.spritesheet("catWarrior", "assets/cat_fighter_spritemap.png", {
        frameWidth: 64,
        frameHeight: 64,
      });
    };
    charLoader();
  }

  create() {
    // adding parallax
    const parallaxCreation = () => {
      this.add.image(437.5, 300, "background").setDisplaySize(875, 600);
      this.add.image(437.5, 300, "background-far").setDisplaySize(875, 600);
      this.add.image(437.5, 300, "mountains").setDisplaySize(875, 600);
      this.add.image(437.5, 300, "trees").setDisplaySize(875, 600);
      this.add.image(437.5, 300, "background-fg").setDisplaySize(875, 600);
    };
    parallaxCreation();

    this.platforms = this.physics.add
      .staticGroup({
        key: "block",
        quantity: 13,
        setXY: { x: 25, y: 565, stepX: 70 },
      })
      .refresh() as Phaser.Physics.Arcade.StaticGroup;

    this.player = this.physics.add
      .sprite(50, 450, "catWarrior")
      .setScale(3)
      .setSize(12, 30)
      .setOffset(26, 25);

    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.platforms, this.player);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("catWarrior", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("catWarrior", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (!this.cursors) return;

    if (this.cursors?.left.isDown) {
      this.player?.setFlipX(true);
      this.player?.setVelocityX(-200);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.right.isDown) {
      this.player?.resetFlip();
      this.player?.setVelocityX(200);
      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocityX(0);
    }

    if (this.cursors.up?.isDown && this.player?.body.touching.down) {
      this.player.setVelocityY(-300);
    }
  }
}
