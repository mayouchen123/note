// 模拟抽奖业务逻辑
{
  let draw = function (count) {
    // 具体抽奖逻辑
    console.info(`剩余${count}次`)
  }

  let residue = function * (count) {
    while (count > 0) {
      count--
      yield draw()
    }
  }
  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function () {
    star.next()
  }, false)
}
