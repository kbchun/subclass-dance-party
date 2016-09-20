var makeDogDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('doggy');
  this.counter = 0;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeDogDancer.prototype = Object.create(makeDancer.prototype);

makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.oldStep = this.step;
  makeDancer.prototype.step.call(this);


  this.$node.css({content: 'url("http://i.imgur.com/8YH4Z1S.gif")',
                  width: '200px',
                  height: '200px',
                  border: '0'
                });

  if (this.counter % 2 === 0) {
    this.$node.css({'-moz-transform': 'scale(-1, 1)',
                  '-webkit-transform': 'scale(-1, 1)',
                  '-o-transform': 'scale(-1, 1)',
                  '-ms-transform': 'scale(-1, 1)',
                  transform: 'scale(-1, 1)',
                });
    this.counter++;
  } else {
    this.$node.css({'-moz-transform': 'scale(1, 1)',
                  '-webkit-transform': 'scale(1, 1)',
                  '-o-transform': 'scale(1, 1)',
                  '-ms-transform': 'scale(1, 1)',
                  transform: 'scale(1, 1)'
                });
    this.counter++;
  }
};