$(document).ready(function() {
    var database = firebase.database();
    
 
    console.log(database);
        var name = "";
        var role = "";
        var age = 0;
        var startDate = "";
        var monthlyRate ="";

$("#submitEmployee").on("click", function(event) {
      event.preventDefault();
      
      name = $("#employeeName").val().trim();
      role = $("#role").val().trim();
      age = $("#age").val().trim();
      startDate = $("#start-date").val().trim();
      monthlyRate = $("#Monthly-date").val().trim();

});