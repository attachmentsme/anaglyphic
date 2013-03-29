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
    $('.anaglyph-window').load(function() {
      console.log('aha!')
    })
  }

  this.init();
});