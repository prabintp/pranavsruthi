import './style.scss';
// import './assets/10.jpeg';
import gImg1 from './assets/10.jpeg';
import gImg2 from './assets/09.jpeg';
import gImg3 from './assets/01.jpeg';
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
  });

  function appendGallery() {
    var g1 = document.getElementById('gallery1');
    var g2 = document.getElementById('gallery2');
    var g3 = document.getElementById('gallery3');
    g1.src = gImg1;
    g2.src = gImg2;
    g3.src = gImg3;
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