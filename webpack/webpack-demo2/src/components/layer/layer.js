// import tpl from './layer.html'
import tpl from './layer.tpl'
import './layer.less'

class Layer {
  static tpl () {
    return {
      name: 'layer',
      tpl: tpl
    }
  }
}

export default Layer
