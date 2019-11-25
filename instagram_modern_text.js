//Just copy this code and call instaModernize('target-class');

function instaModernize(targetClass){
  var mainWidth = $("."+targetClass).innerWidth();
  //	alert(mainWidth);
  var fontSizes = [];
  var texts = $(".beauty-string");
  for (var i=0; i<texts.length; i++) fontSizes.push(1);

  function adjustSizes() {
    var allGood = true;
    for( var i=0; i< texts.length; i++ ){
      var el = $(texts[i]);
      if (el.innerWidth() < mainWidth){
        fontSizes[i] += (mainWidth)/4000;
        allGood = false;
        el.css("font-size", fontSizes[i]+"em");
      }
    }
    if (!allGood) setTimeout(adjustSizes, 0);
  }
  adjustSizes();
}

instaModernize("beautify-me");
