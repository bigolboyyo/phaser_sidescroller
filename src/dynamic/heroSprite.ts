export const heroSprite = (scene: any) => {
  scene.player = scene.physics.add
    .sprite(50, 450, "catWarrior")
    .setScale(3)
    .setSize(12, 30)
    .setOffset(26, 25);

  scene.player.setBounce(0.1);
  scene.player.setCollideWorldBounds(true);

  scene.physics.add.collider(scene.platforms, scene.player);
};
