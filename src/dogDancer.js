var makeDogDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);

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


  this.$node.css({content: 'url("https://i.ytimg.com/vi/9r1yG9e0GOE/maxresdefault.jpg")',
                  width: '300px',
                  height: '300px'
                });
};