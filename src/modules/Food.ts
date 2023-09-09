class Food {
  element: HTMLElement

  constructor() {
    this.element = document.querySelector('.food')!
  }

  get X(): number {
    return this.element.offsetLeft
  }

  get Y(): number {
    return this.element.offsetTop
  }

  // 改变定位实现创建食物的效果
  createFood(): void {
    let x = Math.round(Math.random() * 29) * 10
    let y = Math.round(Math.random() * 29) * 10

    this.element.style.left = `${x}px`
    this.element.style.top = `${y}px`
  }
}

export default Food
