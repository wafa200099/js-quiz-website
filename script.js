function Answer1() {
  var a = window.prompt("Enter Number :");
  document.getElementById("answer1").innerHTML = a;
  document.getElementById("answer1n").innerHTML = `
  <code>
  function Answer1() {
  var a = window.prompt("Enter Number :");
  document.getElementById("answer1").innerHTML = a;
   
  } </code>
  `;
}

function Answer2() {
  var a = window.prompt("Enter Number :");
  if (a % 3 == 0 && a % 4 == 0) {
    document.getElementById("answer2").innerHTML = "yes";
    document.getElementById("answer2n").innerHTML = ` <code>
    function Answer2() {
      var a = window.prompt("Enter Number :");
      if (a % 3 == 0 && a % 4 == 0) {
        document.getElementById("answer2").innerHTML = "yes";
      } else {
        document.getElementById("answer2").innerHTML = "no";
      }
    }</code>`;
  } else {
    document.getElementById("answer2").innerHTML = "no";
    document.getElementById("answer2n").innerHTML = `
    <code>
    function Answer2() {
      var a = window.prompt("Enter Number :");
      if (a % 3 == 0 && a % 4 == 0) {
        document.getElementById("answer2").innerHTML = "yes";
      } else {
        document.getElementById("answer2").innerHTML = "no";
      }
    }</code>`;
  }
}

function Answer3() {
  var a = window.prompt("Enter first Number :");
  var b = window.prompt("Enter srcond  Number :");

  if (a > b) {
    document.getElementById("answer3").innerHTML = a;
    document.getElementById("answer3n").innerHTML = `
    <code>
    function Answer3() {
      var a = window.prompt("Enter first Number :");
      var b = window.prompt("Enter srcond  Number :");
    
      if (a > b) {
        document.getElementById("answer3").innerHTML = a;
      } else {
        document.getElementById("answer3").innerHTML = b;
      }
    }</code>`;
  } else {
    document.getElementById("answer3").innerHTML = b;
    document.getElementById("answer3n").innerHTML = `
    <code>
    function Answer3() {
      var a = window.prompt("Enter first Number :");
      var b = window.prompt("Enter srcond  Number :");
    
      if (a > b) {
        document.getElementById("answer3").innerHTML = a;
      } else {
        document.getElementById("answer3").innerHTML = b;
      }
    }</code>`;
  }
}
function Answer4() {
  var a = window.prompt("Enter Number :");

  if (a < 0) {
    document.getElementById("answer4").innerHTML = "negative";
    document.getElementById("answer4n").innerHTML = `function Answer4() {
      var a = window.prompt("Enter Number :");
    
      if (a < 0) {
        document.getElementById("answer4").innerHTML = "negative";
      } else {
        document.getElementById("answer4").innerHTML = "positive";
      }
    }`;
  } else {
    document.getElementById("answer4").innerHTML = "positive";
    document.getElementById("answer4n").innerHTML = `function Answer4() {
      var a = window.prompt("Enter Number :");
    
      if (a < 0) {
        document.getElementById("answer4").innerHTML = "negative";
      } else {
        document.getElementById("answer4").innerHTML = "positive";
      }
    }`;
  }
}

function Answer5() {
  var a = window.prompt("Enter first Number :");
  var b = window.prompt("Enter srcond  Number :");
  var c = window.prompt("Enter third Number :");
  document.getElementById("answer5n").innerHTML = `
    function Answer5() {
      var a = window.prompt("Enter first Number :");
      var b = window.prompt("Enter srcond  Number :");
      var c = window.prompt("Enter third Number :");
      if (a > b && a > c) {
        document.getElementById("answer51").innerHTML = a + "max";
      } else if (b > c && b > a) {
        document.getElementById("answer51").innerHTML = b + "max";
      } else {
        document.getElementById("answer51").innerHTML = c + "max";
      }
      if (a < b && a < c) {
        document.getElementById("answer52").innerHTML = a + "min";
      } else if (b < c && b < a) {
        document.getElementById("answer52").innerHTML = b + "min";
      } else {
        document.getElementById("answer52").innerHTML = c + "min";
      }
    }`;
  if (a > b && a > c) {
    document.getElementById("answer51").innerHTML = a + "max";
  } else if (b > c && b > a) {
    document.getElementById("answer51").innerHTML = b + "max";
  } else {
    document.getElementById("answer51").innerHTML = c + "max";
  }
  if (a < b && a < c) {
    document.getElementById("answer52").innerHTML = a + "min";
  } else if (b < c && b < a) {
    document.getElementById("answer52").innerHTML = b + "min";
  } else {
    document.getElementById("answer52").innerHTML = c + "min";
  }
}

function Answer6() {
  var a = window.prompt("Enter Number :");

  if (a % 2 == 0) {
    document.getElementById("answer6").innerHTML = "even";
    document.getElementById("answer6n").innerHTML = `function Answer6() {
      var a = window.prompt("Enter Number :");
    
      if (a % 2 == 0) {
        document.getElementById("answer6").innerHTML = "even";
      } else {
        document.getElementById("answer6").innerHTML = "odd";
      }
    }`;
  } else {
    document.getElementById("answer6").innerHTML = "odd";
    document.getElementById("answer6n").innerHTML = `function Answer6() {
      var a = window.prompt("Enter Number :");
    
      if (a % 2 == 0) {
        document.getElementById("answer6").innerHTML = "even";
      } else {
        document.getElementById("answer6").innerHTML = "odd";
      }
    }`;
  }
}

function Answer7() {
  var a = window.prompt("Enter a char :");
  document.getElementById("answer7n").innerHTML = `function Answer7() {
    var a = window.prompt("Enter a char :");
  
    if (a == "a") {
      document.getElementById("answer7").innerHTML = "vowel";
    } else if (a == "o") {
      document.getElementById("answer7").innerHTML = "vowel";
    } else if (a == "e") {
      document.getElementById("answer7").innerHTML = "vowel";
    } else if (a == "u") {
      document.getElementById("answer7").innerHTML = "vowel";
    } else if (a == "i") {
      document.getElementById("answer7").innerHTML = "vowel";
    } else {
      document.getElementById("answer7").innerHTML = " consonant";
    }
  }
  `;

  if (a == "a") {
    document.getElementById("answer7").innerHTML = "vowel";
  } else if (a == "o") {
    document.getElementById("answer7").innerHTML = "vowel";
  } else if (a == "e") {
    document.getElementById("answer7").innerHTML = "vowel";
  } else if (a == "u") {
    document.getElementById("answer7").innerHTML = "vowel";
  } else if (a == "i") {
    document.getElementById("answer7").innerHTML = "vowel";
  } else {
    document.getElementById("answer7").innerHTML = " consonant";
  }
}

function Answer8() {
  var a = window.prompt("Enter Number :");
  document.getElementById("answer8n").innerHTML = `function Answer8() {
    var a = window.prompt("Enter Number :");
    
    var res = [];
  
    for (let index = 1; index < a; index++) {
      res.push(index);
    }
    document.getElementById("answer8").innerHTML = res;
  }
  `;
  var res = [];

  for (let index = 1; index < a; index++) {
    res.push(index);
  }
  document.getElementById("answer8").innerHTML = res;
}

function Answer9() {
  var a = window.prompt("Enter Number :");
  document.getElementById("answer9n").innerHTML = `function Answer9() {
    var a = window.prompt("Enter Number :");
  
    let arr = [];
    for (var i = 0; i <= 12; i++) {
      var result = i * a;
  
      arr.push("${a} * ${i} = ${result}");
  
      var narr = arr.map(function (value) {
        return value + " ";
      });
    }
    document.getElementById("answer9").innerHTML = narr;
  }
  `;

  let arr = [];
  for (var i = 0; i <= 12; i++) {
    var result = i * a;

    arr.push(`${a} * ${i} = ${result}`);

    var narr = arr.map(function (value) {
      return value + " ";
    });
  }
  document.getElementById("answer9").innerHTML = narr;
}

function Answer10() {
  var a = window.prompt("Enter Number :");
  document.getElementById("answer10n").innerHTML = `function Answer10() {
    var a = window.prompt("Enter Number :");
    var res = [];
  
    for (let index = 1; index < a; index++) {
      if (index % 2 == 0) {
        res.push(index);
      }
    }
    document.getElementById("answer10").innerHTML = res;
  }`;

  var res = [];

  for (let index = 1; index < a; index++) {
    if (index % 2 == 0) {
      res.push(index);
    }
  }
  document.getElementById("answer10").innerHTML = res;
}

function Answer11() {
  var a = window.prompt("Enter first Number :");
  var b = window.prompt("Enter srcond  Number :");
  let res = Math.pow(a, b);

  document.getElementById("answer11").innerHTML = res;
  document.getElementById("answer11n").innerHTML = `function Answer11() {
    var a = window.prompt("Enter first Number :");
    var b = window.prompt("Enter srcond  Number :");
    let res = Math.pow(a, b);
  
    document.getElementById("answer11").innerHTML = res;
  }
  `;
}

function Answer12() {
  var a = Number(window.prompt("Enter first subject mark :"));
  var b = Number(window.prompt("Enter second subject mark :"));
  var c = Number(window.prompt("Enter third subject mark :"));
  var d = Number(window.prompt("Enter fourth subject mark :"));
  var e = Number(window.prompt("Enter fifth subject mark :"));
  document.getElementById("answer12n").innerHTML = `
  function Answer12() {
    var a = Number(window.prompt("Enter first subject mark :"));
    var b = Number(window.prompt("Enter second subject mark :"));
    var c = Number(window.prompt("Enter third subject mark :"));
    var d = Number(window.prompt("Enter fourth subject mark :"));
    var e = Number(window.prompt("Enter fifth subject mark :"));
  
    var total = a + b + c + d + e;
    var average = total / 5.0;
    var percentage = (average / 500.0) * 100;
    document.getElementById("answer121").innerHTML = total;
    document.getElementById("answer122").innerHTML = average;
    document.getElementById("answer123").innerHTML = percentage;
  }`;

  var total = a + b + c + d + e;
  var average = total / 5.0;
  var percentage = (average / 500.0) * 100;
  document.getElementById("answer121").innerHTML = "total:::::::" + total;
  document.getElementById("answer122").innerHTML = "average::::::::" + average;
  document.getElementById("answer123").innerHTML =
    "percentage::::::::" + percentage;
}

function Answer13() {
  var numberOfDays;
  var month = Number(window.prompt("Month Number:"));
  document.getElementById("answer13n").innerHTML = `function Answer13() {
    var numberOfDays;
    var month = Number(window.prompt("Month Number:"));
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      numberOfDays = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      numberOfDays = 30;
    } else if (month == 2) {
      numberOfDays = 28;
    }
  
    document.getElementById("answer13").innerHTML = numberOfDays;
  }`;

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    numberOfDays = 31;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    numberOfDays = 30;
  } else if (month == 2) {
    numberOfDays = 28;
  }

  document.getElementById("answer13").innerHTML = numberOfDays;
}

function Answer14() {
  var grade;
  var a = Number(window.prompt("Enter Computer mark"));
  var b = Number(window.prompt("Enter Physics mark"));
  var c = Number(window.prompt("Enter Chemistry mark"));
  var d = Number(window.prompt("Enter Biology mark"));
  var e = Number(window.prompt("Enter Mathematics mark"));
  document.getElementById("answer14n").innerHTML = `function Answer14() {
    var grade;
    var a = Number(window.prompt("Enter Computer mark"));
    var b = Number(window.prompt("Enter Physics mark"));
    var c = Number(window.prompt("Enter Chemistry mark"));
    var d = Number(window.prompt("Enter Biology mark"));
    var e = Number(window.prompt("Enter Mathematics mark"));
    var total = a + b + c + d + e;
    var percentage = total / 5.0;
    document.getElementById("answer141").innerHTML = percentage;
    if (percentage >= 90) {
      grade = "A";
    } else if (percentage >= 80) {
      grade = "B";
    } else if (percentage >= 70) {
      grade = "C";
    } else if (percentage >= 60) {
      grade = "D";
    } else if (percentage >= 40) {
      grade = "E";
    } else if (percentage < 40) {
      grade = "F";
    }
    document.getElementById("answer142").innerHTML = grade;
  }`;

  var total = a + b + c + d + e;

  var percentage = total / 5.0;
  document.getElementById("answer141").innerHTML = percentage;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else if (percentage < 40) {
    grade = "F";
  }
  document.getElementById("answer142").innerHTML = grade;
}

function Answer15() {
  var numberOfDays;
  var month = Number(window.prompt("Month Number:"));
  document.getElementById("answer15n").innerHTML = `function Answer15() {
    var numberOfDays;
    var month = Number(window.prompt("Month Number:"));
  
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        numberOfDays = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        numberOfDays = 30;
        break;
      case 2:
        numberOfDays = 28;
        break;
      default:
        numberOfDays = "not included as month";
        break;
    }
  
    document.getElementById("answer15").innerHTML = numberOfDays;
  }`;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfDays = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfDays = 30;
      break;
    case 2:
      numberOfDays = 28;
      break;
    default:
      numberOfDays = "not included as month";
      break;
  }

  document.getElementById("answer15").innerHTML = numberOfDays;
}

function Answer16() {
  var char = window.prompt("Enter a char :");
  document.getElementById("answer16n").innerHTML = `function Answer16() {
    var char = window.prompt("Enter a char :");
    var res;
    switch (char) {
      case "a":
      case "e":
      case "o":
      case "i":
      case "u":
        res = "the char is vowel";
  
        break;
      default:
        res = "the char is not vowel";
        break;
    }
    document.getElementById("answer16").innerHTML = res;
  }`;

  var res;
  switch (char) {
    case "a":
    case "e":
    case "o":
    case "i":
    case "u":
      res = "the char is vowel";

      break;
    default:
      res = "the char is not vowel";
      break;
  }
  document.getElementById("answer16").innerHTML = res;
}

function Answer17() {
  var a = window.prompt("Enter first Number :");
  var b = window.prompt("Enter srcond  Number :");
  document.getElementById("answer17n").innerHTML = `function Answer17() {
    var a = window.prompt("Enter first Number :");
    var b = window.prompt("Enter srcond  Number :");
    var max = 0;
  
    switch (true) {
      case a > b:
        max = a;
        break;
      case b > a:
        max = b;
        break;
      default:
        max = "theres no max , equle numbers";
        break;
    }
    document.getElementById("answer17").innerHTML = "The Max Number is  : " + max;
  }`;

  var max = 0;

  switch (true) {
    case a > b:
      max = a;
      break;
    case b > a:
      max = b;
      break;
    default:
      max = "theres no max , equle numbers";
      break;
  }
  document.getElementById("answer17").innerHTML = "The Max Number is  : " + max;
}

function Answer18() {
  var a = window.prompt("Enter A Number :");
  document.getElementById("answer18n").innerHTML = `function Answer18() {
    var a = window.prompt("Enter A Number :");
    var res;
  
    switch (true) {
      case a % 2 == 0:
        res = "even";
        break;
  
      default:
        res = "odd";
        break;
    }
    document.getElementById("answer18").innerHTML = res;
  }`;

  var res;

  switch (true) {
    case a % 2 == 0:
      res = "even";
      break;

    default:
      res = "odd";
      break;
  }
  document.getElementById("answer18").innerHTML = res;
}
function Answer19() {
  var a =  Number(window.prompt("Enter A Number :")) 
  document.getElementById("answer19n").innerHTML = `
  function Answer19() {
    var a =  Number(window.prompt("Enter A Number :")) 
  
    var res;
  
    switch (true) {
      case a > 0:
        res = "positve";
        break;
      case a < 0:
        res = "negative";
        break;
      default:
        res = "the number is 0";
        break;
    }
    document.getElementById("answer19").innerHTML = res;
  }`;

  var res;

  switch (true) {
    case a > 0:
      res = "positve";
      break;
    case a < 0:
      res = "negative";
      break;
    default:
      res = "the number is 0";
      break;
  }
  document.getElementById("answer19").innerHTML = res;
}

function Answer20() {
  var a = Number(window.prompt("Enter first Number :"));
  var operator = window.prompt("Enter the operator :");
  var b = Number(window.prompt("Enter second  Number :"));
  document.getElementById("answer20n").innerHTML = `function Answer20() {
    var a = Number(window.prompt("Enter first Number :")) 
    var operator = window.prompt("Enter the operator :");
    var b =Number(window.prompt("Enter second  Number :")) 
    var res;
    switch (operator) {
      case "+":
        res = a + b;
        document.getElementById("answer20").innerHTML = res;
        break;
      case "-":
        res = a - b;
        document.getElementById("answer20").innerHTML = res;
        break;
      case "*":
        res = a * b;
        document.getElementById("answer20").innerHTML = res;
        break;
      case "/":
        res = a / b;
        document.getElementById("answer20").innerHTML = res;
        break;
      case "^":
        res = a ^ b;
        document.getElementById("answer20").innerHTML = res;
        break;
      default:
        res = "invalid operation ";
        document.getElementById("answer20").innerHTML = res;
        break;
    }
  }
  `;

  var res;
  switch (operator) {
    case "+":
      res = a + b;
      document.getElementById("answer20").innerHTML = res;
      break;
    case "-":
      res = a - b;
      document.getElementById("answer20").innerHTML = res;
      break;
    case "*":
      res = a * b;
      document.getElementById("answer20").innerHTML = res;
      break;
    case "/":
      res = a / b;
      document.getElementById("answer20").innerHTML = res;
      break;
    case "^":
      res = a ^ b;
      document.getElementById("answer20").innerHTML = res;
      break;
    default:
      res = "invalid operation ";
      document.getElementById("answer20").innerHTML = res;
      break;
  }
}
