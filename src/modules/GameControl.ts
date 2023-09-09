import Food from './Food'
import Data from './Data'
import Snake from './Snake'
import Directions from './Directions'

class GameControl {
  snake: Snake
  data: Data
  food: Food

  direction: Directions // 控制方向

  element_gameOver: HTMLElement

  constructor() {
    this.snake = new Snake()
    this.data = new Data()
    this.food = new Food()

    this.direction = Directions.stop

    this.element_gameOver = document.querySelector('.game_over')!

    this.init()
  }

  init() {
    this.food.createFood()

    document.addEventListener('keydown', this.keydownHandler.bind(this))

    this.move()
  }

  keydownHandler(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Up':
      case 'ArrowUp':
        this.direction =
          this.direction === Directions.down ? this.direction : Directions.up // 禁止掉头，监听键盘输入事件，掉头时不改变方向
        break
      case 'Down':
      case 'ArrowDown':
        this.direction =
          this.direction === Directions.up ? this.direction : Directions.down
        break
      case 'Right':
      case 'ArrowRight':
        this.direction =
          this.direction === Directions.left ? this.direction : Directions.right
        break
      case 'Left':
      case 'ArrowLeft':
        this.direction =
          this.direction === Directions.right ? this.direction : Directions.left
        break
    }
  }

  move(): void {
    switch (this.direction) {
      case Directions.up:
        this.snake.Y -= 10
        break
      case Directions.down:
        this.snake.Y += 10
        break
      case Directions.left:
        this.snake.X -= 10
        break
      case Directions.right:
        this.snake.X += 10
        break
    }

    if (this.isEat(this.snake.X, this.snake.Y)) {
      this.snake.eatFood()
      this.data.addScore()
      this.food.createFood()
    }

    if (this.snake.isAlive) {
      setTimeout(this.move.bind(this), 300)
    } else {
      this.gameOver()
    }

    // this.snake.isAlive && setTimeout(this.move.bind(this), 500)
    // !this.snake.isAlive && this.gameOver()
  }

  isEat(X: number, Y: number): boolean {
    return X === this.food.X && Y === this.food.Y
  }

  gameOver(): void {
    // this.element_gameOver.style.display = 'block'
    this.element_gameOver.style.transform = 'scale(100%)'
    // this.element_gameOver.style.transition = '0s'
  }
}

export default GameControl
