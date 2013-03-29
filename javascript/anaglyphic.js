$(document).ready(function(){ 
  var _this = this;

  this.init = function() {
    _this.bindEvents();
  }

  this.bindEvents = function() {
    $('#load-site-button').click( function() {
      _this.loadPage();
    });
  }

  this.loadPage = function() {
    $('.anaglyph-window').attr('src', $('#site-url-field').val());
    setTimeout(function(){
      _this.anaglyphPage();
    },5000);
  }

  this.anaglyphPage = function() {
    console.log('woohoo look at me making an anaglyph!');
  }

  this.init();
});