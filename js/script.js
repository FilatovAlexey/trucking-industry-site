$(document).ready(() => {
  $(".btn-mobile--menu").click(function() {
    $(".btn-mobile--menu").toggleClass("close");
    $(".nav--hidden").toggleClass("active");
  });

  $(".show-popup").click(function() {
    $("div." + $(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $("#overlay").show();
    return false;
  });
  $("a.close").click(function() {
    $(this)
      .parent()
      .fadeOut(200);
    $("#overlay").remove("#overlay");
    $(".input1").val("");
    return false;
  });
  $(document).mouseup(function(e) {
    var div = $(".popup");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.fadeOut(200);
      $("#overlay").remove("#overlay");
    }
  });
  $(function() {
    $(".phone").mask("8(999) 999-9999");
  });
  // отправка формы
  $(".popup__submit").on("submit", function(event) {
    event.preventDefault();
    var serializeFormData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: serializeFormData,
      success: function() {
        // закрытие попапа
        $("a.close")
          .parent()
          .fadeOut(200);
        $("#overlay").remove("#overlay");
        //очистим форму
        $(".popup__submit")[0].reset();
        //уведомление об успешной отправке формы
        $(".success").fadeIn(500);
        setTimeout( function(){
          $(".success").fadeOut(500);
        },3000);
        return false;
       
      },
      error: function(err) {
        console.log("Внимание! произошла ошибка:" + err);
      }
    });
  });
});
