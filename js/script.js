$(document).ready(function() {
  $('#timer').countdown('2018/04/08', function(event) {
    $(this).html(event.strftime(`
    %D дней
    <div style="margin-left:10px">
      <span>%H</span> :
      <span>%M</span> :
      <span>%S</span>
    </div>`));
  });

  $('.video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.photo').magnificPopup({
    type:'image'
  });

  $('.order').magnificPopup({
    type: 'inline',
    preloader: false
  });
});