$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userNameInput = $("input#userName").val();

    $(".userName").text(userNameInput);

    $("#postcard").show();

    event.preventDefault();
  });
});
