let database = [
{
	username: "lalit137",
	password: "supersecret"
},
{
	username: "lol",
	password: "123"
},
{
	username: "hy",
	password: "333"
}];

let newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from all that learning!"
},
{
	username: "Sally",
	timeline: "Javascript sooo cool!"
}];

let userNamePrompt = prompt("What\'s your username?");
let passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password) {
	for (let i=0; i < database.length; i++) {
		if(username === database[i].username && 
			password === database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
	// if (username === database[0].username &&
	//  password === database[0].password) {
	// 	console.log(newsFeed);
	// } else {
	// 	alert("Sorry, wrong username and password!");
	// }
}

signIn(userNamePrompt, passwordPrompt);