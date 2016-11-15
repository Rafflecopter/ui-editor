function rcEdit(currEditor, defaults, id) {
  "use strict";

  //------------------------------------------------------------------------------
  // Globals
  var singlesplit = false,
      newContent,
      hasPreview = $(currEditor).attr('data-preview'),
      htmlId = 'html_' + id,
      cssId = 'css_' + id,
      jsId = 'js_' + id,
      iframeId = 'iframe_' + id,
      editorWrapId = 'editWrap_' + id;

  // ---
  // End Globals

  //------------------------------------------------------------------------------
  // Generate ACE Editor DOM
  // Swap out current .editor markup
  // with corresponding ACE Editor

  (function createEditorDOM() {
    
    // if no css or js is present in original .editor markup
    if ((defaults.css == undefined ) && (defaults.js == undefined)) {
      singlesplit = true;

      // Use single split-pane content & show preview if data-preview is found
      newContent="<div class=\"resize-editor\" id=\""
      + editorWrapId 
      + "\"><div class=\""
      + (hasPreview
        ? "editor editor--single editor--has-preview\">"
        : "editor editor--single\">")
      + "<div class=\"editor__header\"><div class=\"editor-logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><path d=\"M17.225 21.335l.955-5.108 5.03.94-.954 5.108-5.03-.94zm8.927 1.668l.953-5.108 5.03.94-.954 5.11-5.028-.942z\"/><path d=\"M37.016 24.857c-.57 2.3-1.59 4.142-3.057 5.522-1.468 1.38-3.284 2.363-5.45 2.95-2.168.586-4.25.694-6.25.326-2-.368-3.908-1.213-5.724-2.533-1.816-1.32-3.163-2.888-4.04-4.7-.878-1.812-1.178-3.896-.9-6.25l1.954.36c-.164 1.787.147 3.41.936 4.863.788 1.455 1.906 2.69 3.353 3.704 1.446 1.016 3.073 1.69 4.88 2.022s3.57.283 5.284-.148c1.713-.433 3.195-1.188 4.447-2.268 1.25-1.078 2.122-2.48 2.614-4.21l1.952.36z\"/><path d=\"M2.656 23.598l11.525 2.04-.273 1.548-11.525-2.04zM1.6 20.896l1.59 6.552\"/><path d=\"M1.853 20.835l1.59 6.552-.51.124-1.59-6.55z\"/><path d=\"M25.465 14.96l-.367 3.055\"/><path d=\"M25.074 14.912l.782.094-.37 3.056-.78-.094z\"/><path d=\"M2.62 9.675l46.378 9.187-.238 1.2-46.38-9.186zM10.93 33.784l22.38 4.326-.21 1.078-22.377-4.326zM19.115 34.06l-.11 1.972\"/><path d=\"M18.723 34.037l.787.043-.108 1.973-.787-.043z\"/><g><path d=\"M23.97 35.11l-.11 1.972\"/><path d=\"M23.578 35.087l.787.043-.108 1.973-.787-.043z\"/></g><g><path d=\"M34.89 36.34l-2.685 3.667\"/><path d=\"M34.678 36.18l.424.312-2.687 3.666-.423-.31z\"/></g></svg></div><div class=\"editor-actions\"></div></div><div class=\"editor__body\"><div class=\"windowGroup\"><div class=\"window html\"><pre id=\""
      + htmlId 
      + "\"></pre></div></div>"
      + (hasPreview
        ? "<div class=\"preview\"><iframe id=\"" + iframeId + "\" name=\"rcEdit\" sandbox=\"allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms\" allowtransparency=\"true\"></iframe></div></div></div><div class=\"resizer\" id=\"resizer-" + id + "\"></div></div>"
        : "</div></div><div class=\"resizer\" id=\"resizer-" + id + "\"></div></div>");

    } else {

      // Use html/css/js editor & show preview if data-preview is found
      newContent="<div class=\"resize-editor\" id=\""
      + editorWrapId 
      + "\"><div class=\""
      + (hasPreview
        ? "editor editor--has-preview\">"
        : "editor\">")
      + "<div class=\"editor__header\"><div class=\"editor-logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><path d=\"M17.225 21.335l.955-5.108 5.03.94-.954 5.108-5.03-.94zm8.927 1.668l.953-5.108 5.03.94-.954 5.11-5.028-.942z\"/><path d=\"M37.016 24.857c-.57 2.3-1.59 4.142-3.057 5.522-1.468 1.38-3.284 2.363-5.45 2.95-2.168.586-4.25.694-6.25.326-2-.368-3.908-1.213-5.724-2.533-1.816-1.32-3.163-2.888-4.04-4.7-.878-1.812-1.178-3.896-.9-6.25l1.954.36c-.164 1.787.147 3.41.936 4.863.788 1.455 1.906 2.69 3.353 3.704 1.446 1.016 3.073 1.69 4.88 2.022s3.57.283 5.284-.148c1.713-.433 3.195-1.188 4.447-2.268 1.25-1.078 2.122-2.48 2.614-4.21l1.952.36z\"/><path d=\"M2.656 23.598l11.525 2.04-.273 1.548-11.525-2.04zM1.6 20.896l1.59 6.552\"/><path d=\"M1.853 20.835l1.59 6.552-.51.124-1.59-6.55z\"/><path d=\"M25.465 14.96l-.367 3.055\"/><path d=\"M25.074 14.912l.782.094-.37 3.056-.78-.094z\"/><path d=\"M2.62 9.675l46.378 9.187-.238 1.2-46.38-9.186zM10.93 33.784l22.38 4.326-.21 1.078-22.377-4.326zM19.115 34.06l-.11 1.972\"/><path d=\"M18.723 34.037l.787.043-.108 1.973-.787-.043z\"/><g><path d=\"M23.97 35.11l-.11 1.972\"/><path d=\"M23.578 35.087l.787.043-.108 1.973-.787-.043z\"/></g><g><path d=\"M34.89 36.34l-2.685 3.667\"/><path d=\"M34.678 36.18l.424.312-2.687 3.666-.423-.31z\"/></g></svg></div><div class=\"editor-actions\"></div></div><div class=\"editor__body\"><div class=\"windowGroup\"><div class=\"window html\"><pre id=\""
      + htmlId 
      + "\"></pre><div class=\"window-btns\"><button class=\"btn btn--window togglePane\" id=\"htmlToggle\" data-editor=\"html\" title=\"Toggle HTML\">HTML<span></span></button></div></div><div class=\"window css\"><pre id=\"" 
      + cssId 
      + "\"></pre><div class=\"window-btns\"><button class=\"btn btn--window togglePane\" id=\"cssToggle\" data-editor=\"css\" title=\"Toggle CSS\">CSS<span></span></button></div></div><div class=\"window js\"><pre id=\"" 
      + jsId 
      +"\"></pre><div class=\"window-btns\"><button class=\"btn btn--window\" id=\"run\" title=\"Run...\">Run</button><button class=\"btn btn--window togglePane\" id=\"jsToggle\" data-editor=\"js\" title=\"Toggle JS\">JavaScript<span></span></button></div></div></div>"

      + (hasPreview
        ? "<div class=\"preview\"><iframe id=\"" + iframeId + "\" name=\"rcEdit\" sandbox=\"allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms\" allowtransparency=\"true\"></iframe></div></div></div><div class=\"resizer\" id=\"resizer-" + id + "\"></div></div></div>"
        : "</div></div><div class=\"resizer\" id=\"resizer-" + id + "\"></div></div>");
    }

    $(currEditor).replaceWith(newContent);
  })();

  //------------------------------------------------------------------------------
  // Create Editor panes
  // Init ACE Editor and set options;
  var htmlField = ace.edit(htmlId);
  htmlField.$blockScrolling = Infinity;

  if(singlesplit === false) {
    var cssField = ace.edit(cssId),
        jsField = ace.edit(jsId);

    cssField.$blockScrolling = Infinity;
    jsField.$blockScrolling = Infinity;
  }

  (function initAce() {
    var aceTheme = "ace/theme/chrome";

    // HTML Editor
    htmlField.setOptions({
      useWorker: false,
      theme: aceTheme,
      displayIndentGuides: true,
      mode: "ace/mode/html",
      tabSize: 2,
      useSoftTabs: true,
      showPrintMargin: false
      // enableEmmet: true
    });

    if (singlesplit === false) {

      // CSS Editor
      cssField.setOptions({
        theme: aceTheme,
        displayIndentGuides: true,
        mode: "ace/mode/css",
        tabSize: 2,
        useSoftTabs: true,
        showPrintMargin: false
        // enableEmmet: true
      });

      // JS Editor
      jsField.setOptions({
        theme: aceTheme,
        displayIndentGuides: true,
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true,
        showPrintMargin: false
      });
    }

    // Set field values from defaults set in the html
    (function defaultsGet() {
      htmlField.setValue(defaults.html);

      if (singlesplit === false) {
        cssField.setValue(defaults.css);
        cssField.clearSelection();
        jsField.setValue(defaults.js);
        jsField.clearSelection();
      }

      if(hasPreview) {
        preview(); // render the intial preview if needed
      }
    })();

  })();
  // END ACE Editor Creation

  //------------------------------------------------------------------------------
  // Toggle editor panes

  if(singlesplit === false) {
    var panes = {
      // Return the number of editor panes displayed
      count: function() {
        var count = 3;
        var items = $(".windowGroup .window");
        items.each(function(el) {
          if ($(items[el]).css("display") === "none") count -= 1;
        });
        return count;
      },
      // On toggling an editor pane add closed mod and toggle button class
      close: function(el) {
        var name = el.dataset.editor;
        $(el).toggleClass("btn-active");
        $(".window." + name).toggleClass("window--closed");
      }
    };

    $(".togglePane").on("click", function() {
      panes.close(this);
    });
  }

  //------------------------------------------------------------------------------
  // Resizable Editor
  var resizr = document.getElementById(editorWrapId),
      startX, startWidth;

  // Trigger dragging events
  function initDrag(e) {
     startX = e.clientX;
     startWidth = parseInt(document.defaultView.getComputedStyle(resizr).width, 10);
     document.documentElement.addEventListener('mousemove', doDrag, false);
     document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  // Trigger css width change on drag
  function doDrag(e) {
     resizr.style.width = (startWidth + ((e.clientX - startX) * 2)) + 'px';
     addClass('resize-editor--resizing', resizr);
  }

  // Remove listeners and abort when dragging stops
  function stopDrag(e) {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
      removeClass('resize-editor--resizing', resizr);
  }

  resizr.addEventListener('mouseover', function init() {
    var resizer = document.getElementById('resizer-' + id);

    addClass('resize-editor--resizable', resizr);
    resizer.addEventListener('mousedown', initDrag, false);
  }, false);

  //------------------------------------------------------------------------------
  // Concat our preview
  // Used by preview and copy/download to compile editor panes and "Imports" into valid html

  function buildOutput() {
    var outputHtml = '';

    if(singlesplit === true) {
      outputHtml = htmlField.getValue();
    } else {
      var content = {
        html: htmlField.getValue(),
        style: cssField.getValue(),
        js: jsField.getValue()
      };

      // String to hold elements to build HTML output
      outputHtml += '<!DOCTYPE html>\n';
      outputHtml += '<html lang="en">\n';
      outputHtml += '<head>\n';
      outputHtml += '<meta charset="UTF-8">\n';
      outputHtml += '<style type="text/css">\n';
      outputHtml += content.style;
      outputHtml += '\n</style>\n';
      outputHtml += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>\n';
      outputHtml += '<script src="https://sdk.rafflecopter.com/v1/cptr.js"></script>\n';
      outputHtml += '</head>\n';
      outputHtml += '<body>\n';
      outputHtml += content.html;
      outputHtml += '\n<script>\n';
      outputHtml += content.js;
      outputHtml += '\n</script>\n';
      outputHtml += '</body>\n';
      outputHtml += '</html>';
    }

    return outputHtml;
  }

  //------------------------------------------------------------------------------
  // Publish preview
  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay

  function preview(delay) {
    delay = delay || 0;
    var timer = null;
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(function() {
      timer = null;

      var textToWrite = buildOutput();

      (document.getElementById(iframeId).contentWindow.document).write(textToWrite);
      (document.getElementById(iframeId).contentWindow.document).close();
    }, delay);
  }

  if(hasPreview) {
    htmlField.on("change", function(e) {
      preview(1000);
    });

    if(singlesplit === false) {
      cssField.on("change", function(e) {
        preview(2000);
      });

      // Update preview window AND js console on click of "Run" button
      $("#run").on("click", function() {
        preview();
      });
    }
  }
};

//------------------------------------------------------------------------------
// Utility functions
// Generate Id
function uniqueId() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

// Add class if not present
function addClass(name, element) {
  var classesString;
  classesString = element.className || "";
  if (classesString.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

// Remove class if present
function removeClass(name, element) {
  element.classList.remove(name);
}


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Build Editors:
// Grabs defaults, assigns a unique id, and calls the editor builder for each
//------------------------------------------------------------------------------

$(".editor").each(function() {
  var self = $(this),
      id = uniqueId(),
      basic = self.find("#default").html().replace(/\<br>/g, '\n');

  defaults = {
    html: basic,
    css: $(self).find("#default-css").html(),
    js: $(self).find("#default-js").html()
  };

  rcEdit(self, defaults, id);
});
