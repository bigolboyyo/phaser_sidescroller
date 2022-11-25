export const platformGroup = (scene: any) => {
  scene.platforms = scene.physics.add
    .staticGroup({
      key: "block",
      quantity: 13,
      setXY: { x: 25, y: 565, stepX: 70 },
    })
    .refresh() as Phaser.Physics.Arcade.StaticGroup;
};
