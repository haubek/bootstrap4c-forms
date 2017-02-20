$(function() {
  $('body').on('input propertychange', '.form-group-floating-label', function(e) {
    $(this).toggleClass('form-group-floating-label-with-value', !!$(e.target).val());
  }).on('focus', '.form-group-floating-label', function() {
    $(this).addClass('form-group-floating-label-with-focus');
  }).on('blur', '.form-group-floating-label', function() {
    $(this).removeClass('form-group-floating-label-with-focus');
  });
});

$(function() {
  $('.form-group-floating-label .form-control').focusout(function () {
    var text_val = $(this).val();
    $(this).parent().toggleClass('form-group-floating-label-with-value', text_val !== "");
  }).focusout();
});
