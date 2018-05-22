// build a single-page app for a simple Tic Tac Toe game
// A single page app means that once the page loads, no user-generated actions on the page may cause the entire page to reload.
// One way this rule could be broken in your implementation is that you might consider resetting the game state by refreshing the page. 
// For the initial version of this game, you may only use native DOM methods to listen for events and update the DOM as gameplay progresses. This means: no jQuery, React or any other libraries or frameworks. All your code should live in one file, app.js, and all 
// your HTML should live in index.html.

//push all the results to the arr
//if the last result pushed is 0
//shows X
// var firstClicked = undefined;
// var onClick = function() {
//  var test = document.getElementsByTagName("tr")
//  for (var i = 0; i < test.length; i++) {
//     test[i].innerHTML = 'X'
//     console.log(test)
// }
// }
var obj= {};
obj[1] = [];
obj[2] = [];
obj[3] = [];
var arr = [];
var boolean1 = [];
var boolean2 = [];
var boolean3 = [];
function myFunction(event) {
  var firstClicked = event.target.id;
  var test =  document.getElementById(firstClicked);
  if (arr.length > 0 && arr[arr.length -1] === 'X') {
     test.innerHTML = 'O'
    arr.push('O');
  } else {
    test.innerHTML = 'X'
    arr.push('X');
  }
  if (firstClicked === 'one' || firstClicked === 'two' || firstClicked === 'three') {
    boolean1.push(document.getElementById(firstClicked).innerHTML === 'X');
  }
    if (boolean1.length === 3 && !boolean1.includes(false)) {
        document.getElementById("winner").innerHTML = 'X is the winner!'
    } else if (boolean1.length === 3 && !boolean1.includes(true)) {
        document.getElementById("winner").innerHTML = 'O is the winner!'
  }
  if (firstClicked === 'four' || firstClicked === 'five' || firstClicked === 'six') {
        boolean2.push(document.getElementById(firstClicked).innerHTML === 'X')
  }
  if (boolean2.length === 3 && !boolean2.includes(false)) {
    document.getElementById("winner").innerHTML = 'X is the winner!'
} else if (boolean2.length === 3 && !boolean2.includes(true)) {
    document.getElementById("winner").innerHTML = 'O is the winner!'
}
  if (firstClicked === 'seven' || firstClicked === 'eight' || firstClicked === 'nine') {
    boolean3.push(document.getElementById(firstClicked).innerHTML === 'X')
}
if (boolean3.length === 3 && !boolean3.includes(false)) {
    document.getElementById("winner").innerHTML = 'X is the winner!'
} else if (boolean3.length === 3 && !boolean3.includes(true)) {
    document.getElementById("winner").innerHTML = 'O is the winner!'
}
if (boolean1.length <= 3 || boolean2.length <= 3 || boolean2.length <= 3)
if (boolean1[0] && boolean2[0] && boolean3[0]) {
    document.getElementById("winner").innerHTML = 'O is the winner!'
}
console.log(boolean1)
console.log(boolean2)
console.log(boolean3)
}

function reload() {
    location.reload();
}

//   var os = []
//   var xs = []
//   for (var i = 0; i < arr.length; i ++) {
//     if (arr[i] === 'O') {
//     os.push(arr[i])
//     } else if(arr[i] === 'X') {
//     xs.push(arr[i])
//   }
//  }
//  if (arr[0] === 'X' && xs.length > os.length && os.length === 5 || xs.length === 5) {
//     document.getElementById("winner").innerHTML = 'X is the winner!' }
// else {
//     document.getElementById("winner").innerHTML = 'O is the winner!' 






// document.addEventListener("DOMContentLoaded", function(event) {
//     var square = document.getElementsByClassName('test') 
//     console.log(square)
//   });

// var onClick = function() {
//     var square = document.getElementsByClassName('test');
//      square[0].innerHTML = 'X'
//      arr.push('X');
// }

// var onClick1 = function() {
//     var square = document.getElementsByClassName('test');
//     console.log(arr[length])
//     if (arr[length] === 'X') {
//      square[1].innerHTML = 'O'
//      arr.push('O');
//     } else {
//      square[1].innerHTML = 'X'
//      arr.push('X');
//     }
// }

// var onClick2 = function() {
//     var square = document.getElementsByClassName('test');
//     if (arr[length] === 'X') {
//         square[2].innerHTML = 'O'
//         arr.push('O');
//        } else {
//         square[2].innerHTML = 'X'
//         arr.push('X');
//        }
// }

// var onClick3 = function() {
//     var square = document.getElementsByClassName('test');
//     if (arr[length - 1] === 'X') {
//         square[3].innerHTML = 'O'
//         arr.push('O');
//        } else {
//         square[3].innerHTML = 'X'
//         arr.push('X');
//        }
// }

// var onClick4 = function() {
//     var square = document.getElementsByClassName('test');
//     if (arr[length - 1] === 'X') {
//         square[4].innerHTML = 'O'
//         arr.push('O');
//        } else {
//         square[4].innerHTML = 'X'
//         arr.push('X');
//        }
// }

// var onClick5 = function() {
//     var square = document.getElementsByClassName('test');
//      square[5].innerHTML = 'X'
// }

// var onClick6 = function() {
//     var square = document.getElementsByClassName('test');
//      square[6].innerHTML = 'X'
// }

// var onClick7 = function() {
//     var square = document.getElementsByClassName('test');
//      square[7].innerHTML = 'X'
// }

// var onClick8 = function() {
//     var square = document.getElementsByClassName('test');
//      square[8].innerHTML = 'X'
// }



