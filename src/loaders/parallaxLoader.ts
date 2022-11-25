/**
 *
 * @param {Phaser.Scene} scene
 */

export const parallaxLoader = (scene: Phaser.Scene) => {
  scene.load.image("background", "assets/parallax/parallax-mountain-bg.png");
  scene.load.image(
    "background-far",
    "assets/parallax/parallax-mountain-montain-far.png"
  );
  scene.load.image(
    "mountains",
    "assets/parallax/parallax-mountain-mountains.png"
  );
  scene.load.image("trees", "assets/parallax/parallax-mountain-trees.png");
  scene.load.image(
    "background-fg",
    "assets/parallax/parallax-mountain-foreground-trees.png"
  );
};
