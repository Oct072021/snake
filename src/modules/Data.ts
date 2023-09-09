class Data {
  score: number
  level: number

  element_score: HTMLElement
  element_level: HTMLElement

  constructor() {
    this.score = 0
    this.level = 1
    this.element_score = document.getElementById('score')!
    this.element_level = document.getElementById('level')!
  }

  addScore(): void {
    this.score++
    this.element_score.innerHTML = this.score + ''

    if (this.score % 10 === 0) {
      this.levelUp()
    }
  }

  levelUp(): void {
    if (this.level < 10) {
      this.level++
      this.element_level.innerHTML = this.level + ''
    }
  }
}

export default Data
