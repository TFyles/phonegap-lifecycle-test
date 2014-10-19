var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");

		window.localStorage.setItem("Phone", "Blackberry");
		window.localStorage.setItem("Laptop", "Compaq");
		window.localStorage.setItem("Desktop", "Custom");

		document.getElementById("phone").innerHTML = localStorage.getItem("Phone");
        document.getElementById("length").innerHTML = localStorage.length;

        var freddo = {
        	"EnergyKJ": "2180",
        	"EnergyKcal": "520",
        	"Protein": "7.1"
        	"Carbohydrates": {
        		"Total": "59.0",
        		"Sugars": "58.5"
        	}
        	"Fat": {
        		"Total" : "28.5",
        		"Saturated": "17.5"
        	}
        	"Fibre" : "0.6"
        	
        }

        var freddoString = JSON.stringify(freddo);
        window.localStorage.setItem("Protein", freddoString);
        var getProtein = window.localStorage.getItem("Protein");
        var freddoJSON = JSON.parse(getProtein);

        document.getElementById("protein").innerHTML = freddoJSON;
   }
	
	function updateDisplay() {
		$("#launched").text("Application launch test : " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
