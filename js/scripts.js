var button = document.getElementsByClassName('button');
var buttonLength = button.length;
for (var i = 0; i < buttonLength; i++) {
	alert(button[i].innerText);
}