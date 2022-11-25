// shoutout to https://opengameart.org/users/kenney for the platformer assets

import Phaser from "phaser";

import Game from "./scenes/Game";
import ParallaxBackground from "./scenes/ParallaxBackground";

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
  scene: [ParallaxBackground, Game],
};

export default new Phaser.Game(config);
