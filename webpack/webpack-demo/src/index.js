import _ from 'lodash'
import './style.css'
import Icon from './xiaoxin.gif'
import Data from './data.xml'
import printMe from './print.js'

function component () {
  var allElement = document.createDocumentFragment()
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'World'], ' ')
  element.className = 'hello'

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  allElement.appendChild(btn)

  // 添加图片到div中
  var myIcon = new Image()
  myIcon.src = Icon
  allElement.appendChild(myIcon)

  console.log(Data)

  return allElement
}
document.body.appendChild(component())
