$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userName = $("input#userName").val();

    $(."userName").text(userNameInput);

    $("#postcard").show();

    event.preventDefault();

  });
});
