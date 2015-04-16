$(document).ready(function() {
  
  $('button#your-name-button').click(function() {
    
    console.log("your-name-button clicked");
    
    $.ajax({
      method: "GET",
      url: "//immense-harbor-7957.herokuapp.com"
    }).done(function(response) {
      
    }).fail(function(mgs){
      
    });
    
  });
  
});