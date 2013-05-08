document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
    url = tabs[0].url;

    var frame = document.createElement('iframe');
    frame.setAttribute('src', 'http://f.heynicejacket.com/l?url=' + url);

    document.body.appendChild(frame);
  });

});
