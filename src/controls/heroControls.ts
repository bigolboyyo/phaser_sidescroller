export const heroControls = (scene: any) => {
  if (!scene.cursors) return;

  if (scene.cursors?.left.isDown) {
    scene.player?.setFlipX(true);
    scene.player?.setVelocityX(-200);
    scene.player?.anims.play("left", true);
  } else if (scene.cursors?.right.isDown) {
    scene.player?.resetFlip();
    scene.player?.setVelocityX(200);
    scene.player?.anims.play("right", true);
  } else {
    scene.player?.setVelocityX(0);
  }

  if (scene.cursors.up?.isDown && scene.player?.body.touching.down) {
    scene.player.setVelocityY(-300);
    scene.player.anims.play("jump", true);
  }
};
