import './style.scss';
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
    autoPlayYouTubeModal();
  });
  
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