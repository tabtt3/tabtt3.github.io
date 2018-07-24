import EntryBase from './_entryBase'

export default class Index extends EntryBase{
  onReady() {
    console.log('index')
  }

  onLoad() {
    console.log('index')
  }

  initializeScroll() {
    window.addEventListener('resize', () => {
      console.log('scroll')
    })
  }
}

new Index()
