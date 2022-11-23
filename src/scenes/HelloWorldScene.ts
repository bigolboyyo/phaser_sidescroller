import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {}

  create() {
    this.add.text(400, 300, "Hello, World!").setOrigin(0.5, 0.5);
  }
}
