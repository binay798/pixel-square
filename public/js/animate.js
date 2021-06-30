let primary = document.querySelectorAll('.cardPrimary');
let secondary = document.querySelectorAll('.cardSecondary');
let inp = document.querySelectorAll('.inp');

let duration = 400;
primary.forEach((item, id) => {
  if (id === 0 && window.innerWidth < 450) {
    console.log('inner width');
    return 1;
  }
  item.setAttribute('data-sal', 'slide-up');
  item.setAttribute('data-sal-delay', '100');
  item.setAttribute('data-sal-duration', duration);
  item.setAttribute('data-sal-easing', 'easeInSine');

  duration += 100;
});
secondary.forEach((item) => {
  item.setAttribute('data-sal', 'slide-up');
  item.setAttribute('data-sal-delay', '100');
  item.setAttribute('data-sal-duration', duration);
  item.setAttribute('data-sal-easing', 'easeInSine');

  duration += 100;
});

inp.forEach((item) => {
  item.setAttribute('data-sal', 'slide-up');
  item.setAttribute('data-sal-delay', '100');
  item.setAttribute('data-sal-duration', duration);
  item.setAttribute('data-sal-easing', 'easeInSine');

  duration += 100;
});

sal();
