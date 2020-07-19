
class MineGame {
  constructor({ bombs, totalGrids }) {
    this.bombs = bombs;
    this.totalGrids = totalGrids;
    this.bgs = []
    this.randomBombs = []
    this.createBG()
    this.answer = ''
    this.currentItem = 0
  }

  createBombs() {
    this.bombs = Array(this.bombs).fill("")
  }

  createRandomNumber() {
    let randomNumber = Math.floor(Math.random() * this.totalGrids.length);
    return randomNumber;
  }

  createAllGrid() {
    this.totalGrids = this.totalGrids.map((item, index) => {
      if (this.randomBombs.includes(index)) return { bg: 'bomb' }
      return { bg: 'smile' }
    })
  }

  createRandom() {
    this.bombs.forEach((item, index) => {
      do {
        let randomNumber = this.createRandomNumber()
        if (!this.randomBombs.includes(randomNumber)) {
          this.randomBombs.push(randomNumber)
        }
      } while (this.randomBombs.length - 1 != index)
    })
  }

  setGridConfig() {
    let grid = document.querySelector('.mine')
    grid.style.gridTemplateColumns = `repeat(${6}, 1fr)`;
  }

  createBG() {
    this.createBombs()
    this.createRandom()
    this.createAllGrid()
  }

  hideCover(evt) {
    let target = evt.currentTarget
    let child = target.children[0];
    let itemType = child.dataset.type;
    target.classList.add('hide-item')
    child.classList.add('show-item')
    this.answer = itemType
    // target.style = 'black'
    // evt.currentTarget.className = 'bomb'
  }

  getAnswer() {
    return this.answer
  }

  getGridItems() {
    return this.totalGrids
  }

  createGrid() {
    // for (let i = 0; i < this.totalGrids; i++) {
    //   let div = this.createElement('div')
    //   let cover = this.createElement('div')
    //   div.classList.add('item')
    //   cover.classList.add('cover')
    //   cover.addEventListener('click', this.hideCover)
    //   div.appendChild(cover)
    //   this.$mineContainer.appendChild(div)
    // }
  }

}

export default MineGame