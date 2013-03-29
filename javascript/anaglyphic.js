(function(){
  var _this = this;

  this.init = function() {
    _this.anaglyphPage();
  }

  this.anaglyphPage = function() {
    var maxDomDepth = _this.findDomDepth();
    $('body *').each(function(element) {
      var itemDomDepth = $(this).parents().length + 1;
      _this.applyAnaglyphClassToElement($(this), _this.normalizeAnaglyphLevel(itemDomDepth, maxDomDepth));
    });
    _this.applyStyling();
  }

  this.findDomDepth = function() {
    var treeDepth = 0;
    $('body *').each(function(element) {
      if($(this).parents().length > treeDepth) {
        treeDepth = $(this).parents().length + 1;
      }
    });
    return treeDepth;
  }

  this.applyAnaglyphClassToElement = function(element, level) {
    element.addClass('anaglyphic_' + level);
  }

  this.normalizeAnaglyphLevel = function(itemDomDepth, maxDomDepth) {
    normalizedLevel = Math.floor(((32.0 / maxDomDepth) * itemDomDepth) - 16.0);
    if (normalizedLevel > 16) normalizedLevel = 16;
    if (normalizedLevel < -16) normalizedLevel = -16;
    return normalizedLevel;
  }

  this.applyStyling = function() {
    $( "[class^=anaglyphic]" ).each(function() {
      var classNames = $(this).attr("class");
      $(this).css( "color", "rgba(0,255,255,0.5)" );
      $(this).css( "text-shadow", "rgba(255,0,0,0.5) " + classNames.split("_")[1] + "px 0px 0px");
    });
    $( "img[class^=anaglyphic]" ).each(function() {
      $(this).css("opacity", "0.5")
      $(this).wrap('<div class="tintBlue"></div>');  
      $(this).clone().insertAfter(this).wrap('<div class="tintRed"></div>');
    });
  }

  this.init();
})();