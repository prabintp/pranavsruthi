import './style.scss';
// import './assets/10.jpeg';
import gImg1 from './assets/10.jpeg';
import gImg2 from './assets/09.jpeg';
import gImg3 from './assets/01.jpeg';
import gImg4 from './assets/12.jpg';
//import './desktop-style.css';

/*import _ from 'lodash';


  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('heading');

    return element;
  }

  document.body.appendChild(component()); */

  $(document).ready(function() {
    appendGallery();

    autoPlayYouTubeModal();
    $('.p-wrapper').removeClass('hide');

    var deadline = new Date(2020,0,9,9,30);
    initializeClock('clockdiv', deadline);
  });

  function getTimeRemaining(endtime, clock) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (t < 0){
      clock.remove();
      return false;
    }
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime, clock);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  

  function appendGallery() {
    var g1 = document.getElementById('gallery1');
    var g2 = document.getElementById('gallery2');
    var g3 = document.getElementById('gallery3');
    var g4 = document.getElementById('gallery4');
    g1.src = gImg1;
    g2.src = gImg2;
    g3.src = gImg3;
    g4.src = gImg4;
  }
  
  function autoPlayYouTubeModal() {
    var trigger = $('.trigger');
    trigger.click(function(e) {
      e.preventDefault();
      var theModal = $(this).data("target");
      var videoSRC = $(this).attr("src");
      var videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal).on('hidden.bs.modal', function(e) {
        $(theModal + ' iframe').attr('src', '');
      });
    });
  };