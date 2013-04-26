var _this = this;
this.anaglyphedTabs = [];

chrome.browserAction.onClicked.addListener(function(tab) {
  anaglyphPageOnTab(tab);
});

function anaglyphPageOnTab(tab) {
  //if (!_this.anaglyphedTabs.contains(tab.id)) {
    // var link = document.createElement('link');
    // link.type = 'text/css';
    // link.rel = 'stylesheet';
    // link.href = chrome.extension.getURL("stylesheets/anaglyphic.css");
    //chrome.tabs.executeScript(null, {code:"document.body.appendChild("+ link + ")';"}, function() {});
    chrome.tabs.executeScript(null, {code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/third_party/html2canvas.js") +"';"});
    chrome.tabs.executeScript(null, {code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/third_party/jquery.min.js") +"';"});
    chrome.tabs.executeScript(null, {code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/anaglyphic.js") +"';"});
    //_this.anaglyphedTabs.push(tab.id);
  //}
}

Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}