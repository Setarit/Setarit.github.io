$('#scrollButton').first('a').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
});
