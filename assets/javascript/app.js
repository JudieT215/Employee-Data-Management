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
});