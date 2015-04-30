document.addEventListener('DOMContentLoaded', function(){
  var button1 = document.querySelector('.btn');
  var button2 = document.querySelector('#refresh')

  button2.addEventListener('click', function(){
      document.querySelector('.form-control').value="";
      document.querySelector("h2").innerHTML="";
  });

  button1.addEventListener('click', function(){
    var farInputTemp = parseInt(document.querySelector('.form-control').value);

      if (isNaN(farInputTemp)) {
        document.querySelector("h2").innerHTML = "That was a number, like, yesterday. Try again."
      }
      else {
        var celResult = ((farInputTemp-32)*(5 / 9)).toFixed(0);
        document.querySelector("h2").innerHTML= "It's " +celResult+ " &deg;C. I only use Celsius.";
      }
  });

});