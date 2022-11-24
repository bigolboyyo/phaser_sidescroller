// shoutout to https://opengameart.org/users/kenney for the platformer assets

import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 875,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [HelloWorldScene],
};

export default new Phaser.Game(config);
