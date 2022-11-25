export const heroSpriteAnims = (scene: Phaser.Scene) => {
  scene.anims.create({
    key: "left",
    frames: scene.anims.generateFrameNumbers("catWarrior", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "right",
    frames: scene.anims.generateFrameNumbers("catWarrior", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "jump",
    frames: scene.anims.generateFrameNames("catWarrior", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
};
