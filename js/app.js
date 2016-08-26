$(function() {
  var $screen = $('#screen');
  var numArray = [];
  var numArray2 = [];
  var operator = "";
  function display(event) {   ///this displays what in inputted and adds numbers to an array
    var $this = $(this);
    var $stringChar = $this.text();
    var $intChar = parseInt($stringChar);
    $screen.append($this.text());
    if (!isNaN($intChar)) {
      numArray.push($intChar);
    }

  }
  function clear(event) {
    var $clear = $('#clear');
    $screen.text("");
    numArray.length = 0;
    numArray2.length = 0;
  }
  function addToArray(event) {
    var $this = $(this);
    numArray2.push(parseInt(numArray.join(''))); ///this adds the numbers to a new array when operator clicked
    numArray = [];
    console.log(numArray2);
  }
  function operators(event) {
    var $this = $(this);
    if ($this.text() === '÷') {
      operator = '÷';
    } else if ($this.text() === 'x') {
      operator = 'x';
    } else if ($this.text() === '-') {
      operator = '-';
    } else if ($this.text() === '+'){
      operator = '+';
    } else {
      operator = operator;
    }
    console.log(operator);
  }


  function math(event) {
    if (operator === '÷') {
      $screen.text(numArray2[0]/numArray2[1]);
    }

}


  var $span = $('span');
  $span.click(display);

  var $clear = $('#clear');
  $clear.click(clear);

  var $operator = $('.operator');
  $operator.click(addToArray);
  $operator.click(operators);

  var $equal = $('#equals');
  $equal.click(math);




});
