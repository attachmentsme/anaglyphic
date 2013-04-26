(function(){
  var _this = this;

  this.init = function() {
    _this.anaglyphPage();
  }

  this.anaglyphPage = function() {
    var maxDomDepth = _this.findDomDepth();
    var hiddenCanvas;

    _this.showSpinner();
    html2canvas(document.body, {
      onrendered: function(canvas) {
        $('body *').each(function(element) {
          var itemDomDepth = $(this).parents().length;
          _this.applyAnaglyphClassToElement($(this), _this.normalizeAnaglyphLevel(itemDomDepth, maxDomDepth), _this.getBackgroundColorOfLocation(canvas, $(this).offset().top, $(this).offset().left));
        });
        _this.hideSpinner();
      }
    });
  }

  this.findDomDepth = function() {
    var treeDepth = 0;
    $('body *').each(function(element) {
      if($(this).parents().length > treeDepth) {
        treeDepth = $(this).parents().length;
      }
    });
    return treeDepth;
  }

  this.showSpinner = function() {
    $('body').append('<div class="spinner-container"><div class="spinner rotate"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>Loading...</div>');
  }

  this.hideSpinner = function() {
    $('.spinner-container').remove();
  }

  this.applyAnaglyphClassToElement = function(element, level, backgroundColorArray) {
    darknessLevel = getBackgroundDarknessLevel(backgroundColorArray[0], backgroundColorArray[1], backgroundColorArray[2])
    if (darknessLevel == 0) {
      element.addClass('anaglyphic-dark_' + level);
    }
    else if (darknessLevel == 2){
      element.addClass('anaglyphic-light_' + level);
    }
    else{
      element.addClass('anaglyphic-no-style');
    }    
  }

  //returns 0-2, dark -> mid -> light
  this.getBackgroundDarknessLevel = function(red, green, blue) {
    var darknessThresholdValue = 60,
    lightnessThresholdValue = 150,
    luminosity = 0.299 * red + 0.587 * green + 0.114 * blue;//0.2126 * red + 0.7152 * green + 0.0722 * blue; // per ITU-R BT.709

    if (luminosity <= darknessThresholdValue) return 0;
    if (luminosity >= lightnessThresholdValue) return 2;
    return 1;
  }

  this.normalizeAnaglyphLevel = function(itemDomDepth, maxDomDepth) {
    var normalizedLevel = Math.ceil(((16.0 / maxDomDepth) * itemDomDepth) - 8.0);
    if (normalizedLevel > 16) normalizedLevel = 16;
    if (normalizedLevel < -16) normalizedLevel = -16;
    return normalizedLevel;
  }

  this.getBackgroundColorOfLocation = function(canvas, top, left) {
    var context = canvas.getContext( '2d' );
    var pixelData = context.getImageData(left, top, 1, 1).data;
    var pixelColorArray = [pixelData[0], pixelData[1], pixelData[2]];
    return pixelColorArray;
  }

  this.init();
})();