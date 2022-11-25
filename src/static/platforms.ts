export const platformGroup = (scene: any) => {
  scene.platforms = scene.physics.add
    .staticGroup({
      key: "block",
      quantity: 700,
      setXY: { x: 25, y: 565, stepX: 70 },
    })
    // .setScrollFactor(0.)
    .refresh() as Phaser.Physics.Arcade.StaticGroup;
};
