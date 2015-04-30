//---------------------------------------------------------------------

//--------- PROBLEM ----------

// When the ball is clicked it should fade out, move to a new random location, and then fade back in.
// The new location must be within the .stage div.

// Concepts used: Math.random(), $.on(), $.fadeOut(), $.fadeIn(), $.width(), $.height(), $.css(), $.position()

//--------- SOLUTION ---------
// $(function(){
// var ball = $('.ball')

// ball.on('click', function () {

//     $(this).fadeOut(500, function() {
//       $(this).css({ //still need to not let the ball go right to the edge of stage - hard to click
//           left:(Math.floor(Math.random() * ($('.stage').width()-$('.shape').width()))),
//           top:(Math.floor(Math.random() * ($('.stage').height()-$('.shape').height())))
//           }).fadeIn(500)
//       })
//     })
// });
//---------------------------------------------------------------------

//--------- PROBLEM ----------
// When the user presses the arrow keys (up, down, left, right) the ball should move in that direction.
// If the ball hits the edge of the div.stage it should stop moving (it shouldn't go off the edge of the stage).
// If the user presses the "s" key the ball should shake.
// Concepts used: $.on(), $.animate(), $.width(), $.height(), $.css()

//--------- SOLUTION ---------
// $(function(){

// var box = $('.shape')

// $(document).on('keyup', function(event){
// var key = event.which
//     //shake
//     if (key === 83) { //add && about the position left and position top to make it stop
//       box.effect("shake")
//     }
//     //right
//     else if (key === 39) {
//       box.animate({
//         'marginLeft':'+=30px'
//       })
//     }
//     //left
//     else if (key === 37) {
//       box.animate({
//         'marginLeft':'-=30px'
//       })
//     }
//     //up
//     else if (key === 38) {
//       box.animate({
//         'marginTop':'-=30px'
//       })
//     }
//     //down
//     else if (key === 40) {
//       box.animate({
//         'marginTop':'+=30px'
//       })
//     }
//   })
// })

//---------------------------------------------------------------------

//--------- PROBLEM ----------
// When the user hovers the mouse over the ball it should transform in to a block (remove the ball class)
// and transform back to a ball when they move the mouse away.
// The ball/block should also change colors (set color with jquery) every time the user hovers over it.
// Note: the transofmation (animation) is handled by css (see css/styles.css if you want to see how it works).

// Concepts used:</b> $.hover(), $.addClass(), $.removeClass(), $.css()

//--------- SOLUTION ---------
// $(function(){

// var ball = $('.ball')

// ball.hover(
//   function() {
//     $(this).removeClass('ball');
//     $(this).css({backgroundColor:'#fff786'});
//   },
//   function() {
//     $(this).addClass('ball');
//     $(this).css({backgroundColor:'#4444cc'});
//   });
// });
