var SirTrevor = require("sir-trevor-js")
  , $ = require("jquery");

SirTrevor.DEBUG = true;
SirTrevor.LANGUAGE = "en";
SirTrevor.config.debug = true;
SirTrevor.config.scribeDebug = true;
SirTrevor.config.language = "en";

SirTrevor.setBlockOptions("Text", {
  onBlockRender: function() {
    console.log("Text block rendered");
  }
});

window.editor = new SirTrevor.Editor({
  el: $('.sir-trevor'),
  convertFromMarkdown: true,
  blockTypes: [
    "Heading",
    "Text",
    "List",
    "Quote",
    "Image",
    "Video",
    "Tweet"
  ]
});

$('form').bind('submit', function(){
    $('#st-json-debug').text(window.editor.store.toString(true));
    return false;
});

