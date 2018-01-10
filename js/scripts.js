$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userNameInput = $("input#userName").val();
    var senderNameInput = $("input#senderName").val();
    var senderCityInput = $("input#senderCity").val();

    $(".userName").text(userNameInput);
    $(".senderName").text(senderNameInput);
    $(".senderCity").text(senderCityInput);

    $("#postcard").show();

    event.preventDefault();
  });
});
