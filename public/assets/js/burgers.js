$(function() {
    $(".change-devoured").on("click", function(event) {
      var burger_id = $(this).data("id");
      console.log(burger_id)
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devoured: newdevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + burger_id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log($("[name=devoured]:checked").val())
  
      var newBurger = {
        burger_name: $("#bg").val().trim(),
        devoured: $("[name=devoured]:checked").val()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          alert("Got a new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
// 


// $(document).ready(function() {
//     $(".devour-form").on("submit", function(event) {
//         event.preventDefault();
//         var burger_id= $(this).children("burger_id").val();
//         $ajax({
//             method: "PUT",
//             url: "/burgers/" + burger_id}).then(function(data) {
//                 console.log("added new burger!")
//                 location.reload();
//             })
//         })
//     })
    