(function(){
  var _this = this;

  this.init = function() {
    _this.anaglyphPage();
  }

  this.anaglyphPage = function() {
    var treeDepth = 0;
    $('body *').each(function(element) {
      //console.log($(this))
      console.log($(this).parents().length)
      if($(this).parents().length > treeDepth) {
        treeDepth = $(this).parents().length;
      }
    });
    console.log(treeDepth)
  }

  this.init();
})();