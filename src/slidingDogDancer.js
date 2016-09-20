var makeSlidingDogDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  makeDogDancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeSlidingDogDancer.prototype = Object.create(makeDogDancer.prototype);

makeSlidingDogDancer.prototype.constructor = makeSlidingDogDancer;

makeSlidingDogDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.oldStep = this.step;
  makeDogDancer.prototype.step.call(this);

  var slide1 = '' + Math.random() * 100 + '%';
  var slide2 = '' + Math.random() * 100 + '%';
  this.$node.css({
    'content': 'url("http://www.lovethisgif.com/uploaded_images/4784-Funny-Dancing-Dog.gif?1")',
    'width': '200px',
    'height': '200px'
  });


  if (this.counter % 8 === 0) {
    this.$node.animate({
      left: slide2,
      top: slide1,
      right: slide1,
      botom: slide2
    });
    this.counter++;
  }
};