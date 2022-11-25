/**
 *
 * @param {Phaser.Scene} scene
 * @param {string} texture
 * @param {number} scrollFactor
 * @param {number} displayX
 * @param {number} displayY
 */

export const createParallaxAlignment = (
  scene: Phaser.Scene,
  count: number,
  texture: string,
  scrollFactor: number,
  displayX: number,
  displayY: number
) => {
  let srcWidth = scene.textures.get(texture).getSourceImage().width;
  let totalWidth = scene.scale.width * 10;
  count = Math.ceil(totalWidth / srcWidth) * scrollFactor;
  let x = 0;

  for (let i = 0; i < count; i++) {
    const img = scene.add
      .image(x, scene.scale.height, texture)
      .setOrigin(0, 1)
      .setScrollFactor(scrollFactor)
      .setDisplaySize(displayX, displayY);

    x += displayX;
  }
};
