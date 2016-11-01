/*global $:false, ace:false, htmlField:false, cssField:false, jsField:false, jqconsole:false*/
(function cloudEdit() {
  "use strict";

  //------------------------------------------------------------------------------
  // Globals
  var use = {
    liveEdit: true
  };

  // ---
  // End Globals

  //------------------------------------------------------------------------------
  // Editor panes
  // Init ACE Editor and set options;
  (function initAce() {
    var aceTheme;
    if (localStorage.getItem("theme")) {
      aceTheme = localStorage.getItem("theme");
    } else {
      aceTheme = "ace/theme/chrome";
    }

    // HTML Editor
    window.htmlField = ace.edit("html");
    htmlField.setOptions({
      useWorker: false,
      theme: aceTheme,
      displayIndentGuides: true,
      mode: "ace/mode/html",
      tabSize: 2,
      useSoftTabs: true,
      showPrintMargin: false,
      enableEmmet: true
    });


    // CSS Editor
    window.cssField = ace.edit("css");
    cssField.setOptions({
      theme: aceTheme,
      displayIndentGuides: true,
      mode: "ace/mode/css",
      tabSize: 2,
      useSoftTabs: true,
      showPrintMargin: false,
      enableEmmet: true
    });

    // JS Editor
    window.jsField = ace.edit("js");
    jsField.setOptions({
      theme: aceTheme,
      displayIndentGuides: true,
      mode: "ace/mode/javascript",
      tabSize: 2,
      useSoftTabs: true,
      showPrintMargin: false
    });

    // Set field values from either those stored in sessionStorage
    // or defaults set in the html
    (function sessionStorageGet() {
      var default_html = $("#default__html").html(),
          default_css = $("#default__css").html(),
          default_js = $("#default__js").html();

      if (sessionStorage.getItem("html")) {
        htmlField.setValue(sessionStorage.getItem("html"));
        htmlField.clearSelection();
      } else {
        htmlField.setValue(default_html);
        htmlField.clearSelection();
      }
      if (sessionStorage.getItem("css")) {
        cssField.setValue(sessionStorage.getItem("css"));
        jsField.clearSelection();
      } else {
        cssField.setValue(default_css);
        cssField.clearSelection();
      }
      if (sessionStorage.getItem("js")) {
        jsField.setValue(sessionStorage.getItem("js"));
        jsField.clearSelection();
      } else {
        jsField.setValue(default_js);
        jsField.clearSelection();
      }

      if (sessionStorage.getItem("use")) {
        use = JSON.parse(sessionStorage.getItem("use"));
      }
      if (sessionStorage.getItem("cssMode")) {
        cssField.getSession().setMode(sessionStorage.getItem("cssMode"));
      }

      preview(); // render the intial preview
    })();

  })();
  // END ACE Editor

  //------------------------------------------------------------------------------
  // Init jqconsole

  (function initConsole() {
    var header = "Ctrl+C: abort command, Ctrl+A: start of Line, Ctrl+E: end of line.\n";

    // Creating the console.
    window.jqconsole = $("#console").jqconsole(header);
    jqconsole.SetIndentWidth(2);

    // Abort prompt on Ctrl+C.
    jqconsole.RegisterShortcut("C", function() {
      jqconsole.AbortPrompt();
      handler();
    });
    // Move to line start Ctrl+A.
    jqconsole.RegisterShortcut("A", function() {
      jqconsole.MoveToStart();
      handler();
    });
    // Move to line end Ctrl+E.
    jqconsole.RegisterShortcut("E", function() {
      jqconsole.MoveToEnd();
      handler();
    });
    jqconsole.RegisterMatching("{", "}", "brace");
    jqconsole.RegisterMatching("(", ")", "paran");
    jqconsole.RegisterMatching("[", "]", "bracket");

    // console.log implementation
    window.log = function(message) {
      var data = "";
      if (typeof message == "object") {
        data = JSON && JSON.stringify ? JSON.stringify(message) : String(message);
      } else {
        data = message;
      }
      jqconsole.Write("==> " + data + "\n");
    };

    // Handle a command.
    var handler = function(command) {
      if (command) {
        if (command.search("console.log" !== -1)) {
          command = command.replace("console.log", "log");
        }
        try {
          jqconsole.Write("==> " + window.eval(command) + "\n");
        } catch (e) {
          jqconsole.Write("ReferenceError: " + e.message + "\n");
        }
      }
      jqconsole.Prompt(true, handler, function(command) {
        // Continue line if can't compile the command.
        try {
          new Function(command);
        } catch (e) {
          if (/[\[\{\(]$/.test(command)) {
            return 1;
          } else {
            return 0;
          }
        }
        return false;
      });
    };
    // Initiate the first prompt.
    handler();
  })();
  // END jqconsole

  //------------------------------------------------------------------------------
  // Toggle editor panes

  $(".togglePane").on("click", function() {
    panes.close(this);
  });
  $("#consoleToggle").on("click", function() {
    $(this).toggleClass("btn-active");
    $(".console").toggleClass("console--closed");
  });

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

  //------------------------------------------------------------------------------
  // Concat our preview
  // Used by preview and copy/download to compile editor panes and "Imports" into valid html

  function buildOutput(consoleJS) {

    var content = {
      html: htmlField.getValue(),
      style: cssField.getValue(),
      js: jsField.getValue()
    };

    // String to hold elements to build HTML output
    var html = '';
    html += '<!DOCTYPE html>\n';
    html += '<html lang="en">\n';
    html += '<head>\n';
    html += '<meta charset="UTF-8">\n';
    html += '<style type="text/css">\n';
    html += content.style;
    html += '\n</style>\n';
    html += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>\n';
    html += '<script src="https://sdk.rafflecopter.com/v1/cptr.js"></script>\n';
    html += '</head>\n';
    html += '<body>\n';
    html += content.html;
    html += '\n<script>\n';
    html += content.js;
    html += '\n</script>\n';
    html += '</body>\n';
    html += '</html>';

    return html;
  }

  //------------------------------------------------------------------------------
  // Publish preview
  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay

  htmlField.getSession().on("change", function(e) {
    preview(1000);
  });
  cssField.getSession().on("change", function(e) {
    preview(2000);
  });

  // Update preview window AND js console on click of "Run" button
  $("#run").on("click", function() {
    preview();
  });

  function preview(delay) {
    delay = delay || 0;
    var timer = null;
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(function() {
      timer = null;

      // pass true as we want the pseudo console.js script
      //console.time('buildOutput'); // start timer for debugging
      var textToWrite = buildOutput(true);

      (document.getElementById("iframe").contentWindow.document).write(textToWrite);
      (document.getElementById("iframe").contentWindow.document).close();
      //console.timeEnd('buildOutput'); // end timer for debugging
    }, delay);
  }

  //------------------------------------------------------------------------------
  // Copy our 'source' (WIP)

  var clipboard = new Clipboard('.btn--copy');

  clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
  });

  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });

  //------------------------------------------------------------------------------
  // Download our 'source'
  // Source: http://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
  $("#download").on("click", function() {

    function destroyClickedElement(event) {
      document.body.removeChild(event.target);
    }

    var $download = document.createElement("a");

    // pass false as we don't want the pseudo console.js script
    var textToWrite = buildOutput(false);
    var textFileAsBlob = new Blob([textToWrite], {type: "text/plain"});
    var fileNameToSaveAs = "index.html";

    $download.download = fileNameToSaveAs;

    if (typeof window.webkitURL === "function") {
      // Chrome
      $download.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox
      $download.href = window.URL.createObjectURL(textFileAsBlob);
    }
    $download.onclick = destroyClickedElement;
		$download.style.display = "none";
		document.body.appendChild($download);
    $download.click();
  });

  //------------------------------------------------------------------------------
  // Double-check user leave/refresh
  window.onbeforeunload = function (e) {

    // Save current buffers into sessionStorage
    sessionStorage.setItem("html", htmlField.getValue());
    sessionStorage.setItem("css", cssField.getValue());
    sessionStorage.setItem("js", jsField.getValue());

    // save selected imports into sessionStorage
    sessionStorage.setItem("use", JSON.stringify(use));
    // and if using LESS/Sass make sure the editor mode is saved as well
    sessionStorage.setItem("cssMode", cssField.getSession().getMode().$id);

    // If we haven't been passed the event get the window.event
    e = e || window.event;
    var message = "Your current session may be lost..";
    return message;
  };
})();
