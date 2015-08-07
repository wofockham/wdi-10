var catFactory = function (age, furColor, favouriteFood) {
  return {
    age: age,
    furColor: furColor,
    favouriteFood: favouriteFood,
    indulge: function () {
      this.eat( this.favouriteFood );
    },
    meow: function() {
      console.log('miaow');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);
    },
    sleep: function(numMinutes) {
      for (var i = 0; i < numMinutes; i++) {
        console.log('z');
      }
    }
  }
};


var lizzieTheCat = catFactory(18, 'grey');
var daemon = catFactory(1, 'black', 'liver');

daemon.indulge(); // "Yum, I love liver"
