$(document).ready(function() {
  
  $('button#your-name-button').click(function() {
    
    console.log("your-name-button clicked");
    
    $.ajax({
      method: "GET",
      url: "//immense-harbor-7957.herokuapp.com/api/yourName"
    }).done(function(response) {
      console.log(response.name);
    }).fail(function(mgs){
      $('div#your-name').html("<p>"+response.name+"<p>");
    });
    
  });
  
});