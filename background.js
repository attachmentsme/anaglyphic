chrome.browserAction.onClicked.addListener(function(tab) {
  anaglyphPageOnTab(tab);
});

function anaglyphPageOnTab(tab) {
  // var link = document.createElement('link');
  // link.type = 'text/css';
  // link.rel = 'stylesheet';
  // link.href = chrome.extension.getURL("stylesheets/anaglyphic.css");
  
  chrome.tabs.executeScript(null, {code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/anaglyphic.js") +"';"});
  chrome.tabs.executeScript(null, {code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/third_party/jquery.min.js") +"';"});
  //chrome.tabs.executeScript(null, {code:"document.body.appendChild("+ link + ")';"}, function() {});
}