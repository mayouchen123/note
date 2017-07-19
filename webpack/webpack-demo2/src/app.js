import './css/common.css'
import Layer from './components/layer/layer.js'

class App {
  static outputTpl (template) {
    let element = document.getElementById('app')
    let tplObj = template.tpl()

    element.innerHTML = tplObj.tpl({
      name: 'peter',
      arr: ['apple', 'xiaomi', 'meizu']
    })
  }
}

App.outputTpl(Layer)
