// ver 0.5
document.addEventListener('DOMContentLoaded', addField);

function addField () {
	/* add year options */
	console.log('updated');
	// var years = document.getElementById('DOByears'),
	// 	yroption;
	// for (var i = 0; i < YEARS; i++) {
	// 	yroption = document.createElement('option');
	// 	yroption.textContent = CUR_YEAR - OLDEST_USER - i;
	// 	years.appendChild(yroption);
	// }

	// var msgnum = 1;
	// /* add a field */
	// var sendfield = document.getElementById('add');
	// // 	newfield,
	// // 	name,
	// // 	value;
	// sendfield.addEventListener('click', function (event) {
	// 	// console.log("post");
	// 	var payload = {randomWord: "test"};
	// 	// payload.randomWord = document.getElementById('httpbin').value;

	// 	if (!payload.randomWord){ // check that a word was entered in the form
	// 		alert("You need to enter a random word.");
	// 		return;
	// 	}
	// 	/* make your Ajax variable and set it up */
	// 	var req = new XMLHttpRequest();
	// 	req.open("POST", "http://localhost:3000/getPost?json=true", true); // true for async
	// 	// req.open("GET", "http://localhost:3000/getPost"); // true for async
	// 	req.setRequestHeader('Content-Type', 'application/json');
	// 	// req.addEventListener("readystatechange", function () {
 //  //         if (this.readyState === 4) {
 //  //           console.log(this.responseText);
 //  //         }
 //  //       });
	// 	req.addEventListener('load', function () {
	// 		if(req.status >= 200 && req.status < 400){ // check for valid request
	// 			// var response = 
	// 			console.log(req.responseText);
	// 		} else {
	// 			console.log("Whoops, something went wrong. Maybe: ", req.statusText);
	// 		}
	// 	});
	// 	/* send to api, encoding payload as JSON */
	// 	req.send(JSON.stringify(payload));
	// 	// req.send();
	// 	event.preventDefault();
	// });
}