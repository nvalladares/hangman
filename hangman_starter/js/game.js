// 
// $("#letter").keypress(function(event){
//     alert(String.fromCharCode(event.which)); 
//  })

$("#letter").keypress(function() {
  var letter = String.fromCharCode(event.which);
  return guess(letter);
});

function guess(letter) {
	$(".guessed-letters").append(letter + " ");
}