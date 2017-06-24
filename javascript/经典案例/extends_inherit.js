// 继承与扩展

'use strict';

// Plane Bee Flyer
(function () {
  function Flyer(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  Flyer.prototype.fly = function () {
    console.log(`${this.name}以时速${this.speed}飞行`);
  };

  function Plane(name, speed, score) {
    Flyer.call(this, name, speed);
    this.score = score;
  }

  Plane.prototype.getScore = function () {
    console.log(`${this.name}击落敌机，得分${this.score}`);
  };

  Object.setPrototypeOf(Plane.prototype, Flyer.prototype);

  function Bee(name, speed, award) {
    Flyer.call(this, name, speed);
    this.award = award;
  }
  Bee.prototype.getAwd = function () {
    console.log(`击落蜜蜂，得分${this.award}`);
  };
  Object.setPrototypeOf(Bee.prototype, Flyer.prototype);

  let f16 = new Plane('F16', 1000, 20);
  console.log(f16);
  f16.fly();
  f16.getScore();
  let bee = new Bee('小蜜蜂', 100, '1 Life');
  bee.fly();
  bee.getAwd();
}());
