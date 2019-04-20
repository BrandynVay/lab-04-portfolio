

const nextBackground = (index) => {
  let backgrounds = [
    'url(../public/images/japan.jpg)',
    'url(../public/images/galaxy-sky-banner.jpg)'
  ]
  $('#main > section.one').css('background-image', backgrounds[index]);
}

nextBackground();
