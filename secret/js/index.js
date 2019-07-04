const users = [
	{
		"username": "Texture",
		"pass": "maggedut2019"
	},
	{
		"username": "Ankjaer",
		"pass": "jegermikogduerdig"
	}
];

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

var loggedin = false;

function login() {
	var username = document.getElementById("usernameinput").value;
	var password = document.getElementById("pwdinput").value;

	for (i = 0; i < users.length; i++) {
		if(username == users[i].username && password == users[i].pass) {
			console.log(`${username} - Correct Login. Redirecting...`);
			document.cookie = "username="+username+"";
			loggedin = true;
  			window.location.assign("https://dreamleaks.pw/secret/main.html"); // https://dreamleaks.pw/secret/main.html
			return;
		}
	}
	console.log("Invalid Username or Password.");
};

function logOut() {
	var username = getCookie("username");
	var logoutBtn = document.getElementById("logoutBtn");

	if(username != "") {
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		window.location.assign("/secret/"); // /secret/
	}
};
	
function loginCheck() {
	var username = getCookie("username");
	var logoutBtn = document.getElementById("logoutBtn");
	var para = document.getElementById("status");
	if(username != "") {
		para.innerHTML = "Welcome back, "+username+".";
		loggedin = true;
		logoutBtn.hidden = false;
		return true;
	} else {
		para.innerHTML = "You're not logged in.";
		loggedin = false;
		logoutBtn.hidden = true;
		return false;
	}
};

function changePage(pname) {
	var container = document.getElementById("content");
	var melbtn = document.getElementById("mellist");
	var arbtn = document.getElementById("arlist");
	var sgbtn = document.getElementById("sglist");
	var srbtn = document.getElementById("srlist");
	var mgbtn = document.getElementById("mglist");
	var pisbtn = document.getElementById("pislist");
	if(pname == "Melee") { 
		$(melbtn).addClass('active');
		$(pisbtn).removeClass('active');
		$(arbtn).removeClass('active');
		$(sgbtn).removeClass('active');
		$(srbtn).removeClass('active');
		$(mgbtn).removeClass('active');
		container.innerHTML = "<div id=\"backupmel\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/file/d/1hoM3pibs7XZs-9EKNVTvi99KFAhw7G8a/view?usp=sharing\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else if(pname == "AR") {
		$(arbtn).addClass('active');
		$(melbtn).removeClass('active');
		$(pisbtn).removeClass('active');
		$(sgbtn).removeClass('active');
		$(srbtn).removeClass('active');
		$(mgbtn).removeClass('active');
		container.innerHTML = "<div id=\"backupar\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/uc?export=download&confirm=wAY4&id=1spI-oKFCCj7eDGNokwKCT5ZZTIRjDvFi\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else if(pname == "SG") {
		$(arbtn).removeClass('active');
		$(melbtn).removeClass('active');
		$(pisbtn).removeClass('active');
		$(sgbtn).addClass('active');
		$(srbtn).removeClass('active');
		$(mgbtn).removeClass('active');
		container.innerHTML = "<div id=\"backupsg\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/uc?authuser=0&id=1wc7DqSkexe7_lrs9C6YsghDSVGvsfBqt&export=download\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else if(pname == "SR") {
		$(arbtn).removeClass('active');
		$(melbtn).removeClass('active');
		$(sgbtn).removeClass('active');
		$(pisbtn).removeClass('active');
		$(srbtn).addClass('active');
		$(mgbtn).removeClass('active');
		container.innerHTML = "<div id=\"backupsr\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/uc?authuser=0&id=1uSHvKPHMo_EabMFjeTAesnCwQDX8CSd8&export=download\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else if(pname == "MG") {
		$(arbtn).removeClass('active');
		$(melbtn).removeClass('active');
		$(sgbtn).removeClass('active');
		$(pisbtn).removeClass('active');
		$(srbtn).removeClass('active');
		$(mgbtn).addClass('active');
		container.innerHTML = "<div id=\"backupmg\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/file/d/1wFnp1hQ9UOG4gKKP9f2yyOrL5mAmP28d/view?usp=sharing\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else if(pname == "Pistol") {
		$(arbtn).removeClass('active');
		$(melbtn).removeClass('active');
		$(sgbtn).removeClass('active');
		$(srbtn).removeClass('active');
		$(mgbtn).removeClass('active');
		$(pisbtn).addClass('active');
		container.innerHTML = "<div id=\"backuppist\"><h4>Backup</h4><a class=\"text-primary font-weight-light\" href=\"https://drive.google.com/file/d/1FavADWN-ztaSV2D701Q-3v-_NpFDr9KV/view?usp=sharing\" download>Download</a><br><small class=\"text-muted\">Updated: 07/04/2019</small><br><br></div><hr>";
	} else {
		console.log("wut?");
	}
};
