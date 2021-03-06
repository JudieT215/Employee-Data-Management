$(document).ready(function() {
    var database = firebase.database();

    console.log(database);
    var name = "";
    var role = "";
    var age = 0;
    var startDate = "";
    var monthlyRate = "";

    $("#submitEmployee").on("click", function(event) {
        event.preventDefault();

        name = $("#employeeName")
            .val()
            .trim();
        role = $("#role")
            .val()
            .trim();
        age = $("#age")
            .val()
            .trim();
        startDate = $("#start-date")
            .val()
            .trim();
        monthlyRate = $("#Monthly-date")
            .val()
            .trim();

        // Code for handling the push
        database.ref().push({
            name: name,
            role: role,
            age: age,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        createRow();
    });

    database.ref().on("child_added", function(childSnapshot) {
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().age);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthlyRate);
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

    var createRow = function() {
        // Get reference to existing tbody element, create a new table row element
        var tBody = $("tbody");
        var tRow = $("<tr>");
  
        // Methods run on jQuery selectors return the selector they we run on
        // This is why we can create and save a reference to a td in the same statement we update its text
        var nameTd = $("<td>").text(childSnapshot.val().name);
        console.log(nameTd);
        var roleTd = $("<td>").text(childSnapshot.val().role);
        // var actorsTd = $("<td>").text(data.Actors);
        // Append the newly created table data to the table row
        tRow.append(nameTd, roleTd);
        // Append the table row to the table body
        $("tBody").append(tRow);
    };
});