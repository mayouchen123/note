import {Info} from './Info.js'

let peterInfo = Reflect.construct(Info, {name: 'peter', age: 25})
console.log(peterInfo)
