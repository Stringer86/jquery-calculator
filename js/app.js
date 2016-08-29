$(function() {
  'use strict';
  
  var $screen = $('#screen');
  var numArray = [];
  var numArray2 = [];
  var operator = "";
  var $answer;
  function display(event) {   ///this displays what in inputted and adds numbers to an array
    var $this = $(this);
    var $stringChar = $this.text();
    var $intChar = parseInt($stringChar);
    $screen.append($this.text());
    if (!isNaN($intChar)) {
      numArray.push($intChar);
    }
    // console.log(numArray);

  }
  function clear(event) {
    // var $clear = $('#clear');
    $screen.text("");
    numArray.length = 0;
    numArray2.length = 0;
    operator = "";
  }
  function addToArray(event) {
    var $this = $(this);
    if (numArray.length !== 0) {  ///this adds the numbers to a new array when operator clicked
    numArray2.push(parseInt(numArray.join('')));
    }
    numArray = [];
    // console.log(numArray2);
  }
  function operators(event) {
    var $this = $(this);
    if ($this.text() !== '=') {
      operator += $this.text();
    } else {
      operator = operator;
    }
    // console.log(operator);
    // console.log($operator.length);
    if (operator.length > 1) {
      $screen.text("Error");
    }
  }


  function math(event) {
    if (operator === '÷') {
      $answer = numArray2[0]/numArray2[1];
      $screen.text(numArray2[0]/numArray2[1]);
      if (numArray2[0]/numArray2[1] === Infinity) {
        $screen.text("Error");
      }
    } else if (operator === 'x') {
      $screen.text(numArray2[0]*numArray2[1]);
      $answer = numArray2[0]*numArray2[1];
    } else if (operator === '+') {
      $screen.text(numArray2[0]+numArray2[1]);
      $answer = numArray2[0]+numArray2[1];
    } else if (operator === '-') {
      $screen.text(numArray2[0]-numArray2[1]);
      $answer = numArray2[0]-numArray2[1];
    }
    operator = "";
    numArray2 = [$answer];
    // console.log(numArray2);



}

//event listeners
  var $span = $('span');
  $span.click(display);   //use .on for event delegation

  var $clear = $('#clear');
  $clear.click(clear);

  var $operator = $('.operator');
  $operator.click(addToArray);
  $operator.click(operators);

  var $equal = $('#equals');
  $equal.click(math);




});
