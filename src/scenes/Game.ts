import Phaser from "phaser";
import { createParallaxAlignment } from "~/utils/createParallaxAlignment";
import { blockLoader } from "~/loaders/blockLoader";
import { charLoader } from "~/loaders/charLoader";
import { heroSpriteAnims } from "~/animations/heroSpriteAnims";
import { heroControls } from "~/controls/heroControls";
import { heroSprite } from "~/dynamic/heroSprite";
import { platformGroup } from "~/static/platforms";

export default class Game extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("main-game");
  }

  init() {}

  preload() {
    blockLoader(this);
    charLoader(this);
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    platformGroup(this);

    heroSpriteAnims(this);
    heroSprite(this);
  }

  update() {
    heroControls(this);
  }
}
