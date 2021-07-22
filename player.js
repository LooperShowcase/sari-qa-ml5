class Player {
  constructor() {
    this.size = 100;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 2;
    this.frameCounter = 0;
  }

  jump() {
    if (this.y === height - this.size) this.velocityY = -25;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    if (this.frameCounter <= 15) {
      image(playerImage1, this.x, this.y, this.size, this.size);
    } else if (this.frameCounter >= 15 && this.frameCounter <= 30) {
      image(playerImage2, this.x, this.y, this.size, this.size);
    } else if (this.frameCounter >= 30 && this.frameCounter <= 45) {
      image(playerImage3, this.x, this.y, this.size, this.size);
    } else {
      this.frameCounter = 0;
      image(playerImage1, this.x, this.y, this.size, this.size);
    }
  }
  collieded(obstacleToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 40,
      this.size - 40,
      obstacleToCheck.x,
      obstacleToCheck.y,
      obstacleToCheck.size - 40,
      obstacleToCheck.size - 40
    );

    return isColliding;
  }
}
