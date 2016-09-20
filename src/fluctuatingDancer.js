var makeFluctuatingDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeFluctuatingDancer.prototype = Object.create(makeDancer.prototype);

makeFluctuatingDancer.prototype.constructor = makeFluctuatingDancer;

makeFluctuatingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  makeDancer.prototype.step.call(this);
  if (this.counter % 2 === 1) {
    this.$node.css('border', '30px solid green');
    this.counter++;
  } else {
    this.$node.css('border', '80px solid green');
    this.counter++;
  }
};