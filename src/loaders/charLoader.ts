export const charLoader = (scene: Phaser.Scene) => {
  scene.load.spritesheet("catWarrior", "assets/cat_fighter_spritemap.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 13,
  });
};
