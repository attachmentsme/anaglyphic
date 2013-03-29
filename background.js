chrome.browserAction.onClicked.addListener(function(tab) {
  anaglyphPageOnTab(tab);
});

function anaglyphPageOnTab(tab) {
  console.log('3d-izing the page')
  chrome.tabs.executeScript(null, 
  {
    code:"document.body.appendChild(document.createElement('script')).src='" + chrome.extension.getURL("javascript/anaglyphic.js") +"';"
  }, function () {
    console.log('i did that stuff you wanted')
  });
}
function anaglyphTab(tab) {
  console.log('hello');
}



