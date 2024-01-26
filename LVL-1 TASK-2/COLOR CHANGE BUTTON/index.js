



$('button').click(function() {
    var thisRandomColor = randomColor();
    
    $(this)
       .css('background-color', thisRandomColor)
       .html('this hex color - ' + thisRandomColor);
  });
    
  function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  