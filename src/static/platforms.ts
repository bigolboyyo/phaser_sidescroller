export const platformGroup = (scene: any) => {
  scene.platforms = scene.physics.add.staticGroup({
    key: "block",
    quantity: 700,
    setXY: { x: -500, y: 565, stepX: 70 },
  }) as Phaser.Physics.Arcade.StaticGroup;
};
