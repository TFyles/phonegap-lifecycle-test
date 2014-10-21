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

       var me =  {
       	"firstName":"Tom",
       	"lastName":"Fyles",
       	"course":"computing"
       };

       document.getElementById("ja").innerHTML = me.firstName+" "+ me.lastName+" "+me.course;
   
       var db = window.openDatabase("food",1.0,"food database", 1024 * 1024);
       db.transaction(createTable, error, success);
 /*
       function createTable(tx){
       	tx.executeSql("CREATE TABLE IF NOT EXISTS nutrition(id UNIQUE, name TEXT, fat FLOAT)");
       }

       function success(){
       	db.transaction(addFood, error);
       }

       function addFood(tx){
       	tx.executeSql("INSERT INTO nutrition(id, name, fat) VALUES (1, 'freddo', '28.5') ");
       	tx.executeSql("INSERT INTO nutrition(id, name, fat) VALUES (2, 'snowbites', '20') ");
       	tx.executeSql("INSERT INTO nutrition(id, name, fat) VALUES (3, 'snowman', '30.5') ");
       }

       function error(err) {
       	alert("oops something went wrong " + err.message);
       }

       function queryDB(tx) {
        tx.executeSql('SELECT * FROM nutrition', [], Success, error);
       }

       function querySuccess(tx, results) {
        var len = results.rows.length;
         document.getElementById("rows").innerHTML ="nutrition table: " + len + " rows found.";
        for (var i=0; i<len; i++){
             document.getElementById("res").innerHTML ="Row = " + i + " ID = " + results.rows.item(i).id + " Name =  " + results.rows.item(i).name; + " Fat = " + results.rows.item(i).fat ;
       	}
       }
*/

     function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        document.getElementById("rows").innerHTML = "DEMO table: " + len + " rows found.";
        for (var i=0; i<len; i++){
        document.getElementById("res").innerHTML = "Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data;
        }
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryDB, errorCB);
    }
     
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
