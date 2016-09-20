$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    var position = 50;
    var half = Math.floor(window.dancers.length / 2);
    for (var i = 0; i < half; i++) {
      window.dancers[i].$node.animate({
        top: '75%',
        left: '' + position + 'px'
      });

      position += 150;
    }

    position = 50;
    for (var i = half; i < window.dancers.length; i++) {
      window.dancers[i].$node.animate({
        top: '25%',
        left: '' + position + 'px'
      });

      position += 150;
    }
  });

  $('.interact').on('click', function(event) {
    var a, b, c;
    for (var i = 0; i < window.dancers.length; i++) { // checks for specific type of dancer
      // if (specific type of dancer) {
      if (window.dancers[i].constructor.name === 'makeDogDancer') {
        for (var j = 0; j < window.dancers.length; j++) { // compares distance b/w specified dancer and all other dancers
          // don't check distance with self
          if (i !== j) {
            // check distance with other dancers and interact
            a = window.dancers[i].top - window.dancers[j].top;
            b = window.dancers[i].left - window.dancers[j].left;
            c = Math.sqrt(a * a - b * b);
            // if (c < certain distance) {
            // debugger;
            if (c < 200) {
              // interact and do something cool
              window.dancers[j].$node.fadeOut();
            }
          }
        }
      }
    }
  });
});

