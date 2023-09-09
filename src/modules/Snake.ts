class Snake {
  element: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection

  isAlive: boolean

  constructor() {
    this.element = document.querySelector('.snake')!
    this.head = this.element.children[0] as HTMLElement
    this.bodies = this.element.children

    this.isAlive = true
  }

  get X(): number {
    return this.head.offsetLeft
  }
  get Y(): number {
    return this.head.offsetTop
  }

  set X(val: number) {
    if (val < 0 || val > 290) {
      // throw new Error('蛇撞墙了')
      this.isAlive = false
      return
    }
    this.moveBody()
    this.head.style.left = `${val}px`
    this.checkCrash()
  }

  set Y(val: number) {
    if (val < 0 || val > 290) {
      // throw new Error('蛇撞墙了')
      this.isAlive = false
      return
    }
    this.moveBody()
    this.head.style.top = `${val}px`
    this.checkCrash()
  }

  eatFood(): void {
    const div = document.createElement('div')
    div.style.left =
      (this.bodies[this.bodies.length - 1] as HTMLElement).offsetLeft + 'px'
    div.style.top =
      (this.bodies[this.bodies.length - 1] as HTMLElement).offsetTop + 'px'
    this.element.appendChild(div)
  }

  moveBody(): void {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      ;(this.bodies[i] as HTMLElement).style.left = `${X}px`
      ;(this.bodies[i] as HTMLElement).style.top = `${Y}px`
    }
  }

  checkCrash(): void {
    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        this.isAlive = false
      }
    }
  }
}

export default Snake
