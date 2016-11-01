/*global $:false, ace:false, htmlField:false, cssField:false, jsField:false, jqconsole:false*/
(function cloudEdit() {
  "use strict";
  // Globals
  // ---
  // For buildOutput() creation. Toggle includes in html output.
  var use = {
    Autoprefixer: true,
    Less: false,
    Sass: false,
    Modernizr: false,
    Normalize: false,
    Bootstrap: false,
    Foundation: false,
    liveEdit: true
  };

  // ---
  // End Globals

   // Check if a new appcache is available on page load. If so, ask to load it.
  window.addEventListener("load", function(e) {
    window.applicationCache.addEventListener("updateready", function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        if (confirm("A new version of this site is available. Load it?")) {
          window.location.reload();
        }
      } else {
        // Manifest didn't changed. Do NOTHING!
      }
    }, false);
  }, false);

  // Create Text Area panes
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

    // Retrieve values from sessionStorage if set
    (function sessionStorageGet() {
      if (sessionStorage.getItem("html")) {
        htmlField.setValue(sessionStorage.getItem("html"));
        htmlField.clearSelection();
      } else {
        htmlField.setValue("<!-- Do not place html/head/body tags here.\n" +
          "Insert the tags as would normally be used in your\n" +
          "body element. <script> tags ARE allowed, though\n" +
          "they're best placed at the end of your HTML -->\n");
        htmlField.clearSelection();
        $(".html").one("touchstart click", function() {
          htmlField.setValue("");
        });
      }
      if (sessionStorage.getItem("css")) {
        cssField.setValue(sessionStorage.getItem("css"));
        cssField.clearSelection();
      }
      if (sessionStorage.getItem("js")) {
        jsField.setValue(sessionStorage.getItem("js"));
        jsField.clearSelection();
      }
      if (sessionStorage.getItem("use")) {
        use = JSON.parse(sessionStorage.getItem("use"));
      }
      if (sessionStorage.getItem("cssMode")) {
        cssField.getSession().setMode(sessionStorage.getItem("cssMode"));
      }
    })();

  })();
  // END ACE Editor

  // init jqConsole
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

  // Toggle Text Areas from Displaying
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
    // Resize panes based upon number currently toggled ON
    // resize: function() {
    //   var count = this.count();
    //   var win = $(".windowGroup .column-33");
    //   if (count === 3 || count === 0) {
    //     win.css("width", "33%");
    //   } else if (count === 2) {
    //     win.css("width", "49.5%");
    //   } else if (count === 1) {
    //     win.css("width", "99%");
    //   }
    // },
    // On toggling an editor pane resize remaining and toggle button class
    close: function(el) {
      var name = el.dataset.editor;
      $(el).toggleClass("btn-active");
      $(".window." + name).toggleClass("window--closed");
    }
  };

  // Used by preview and download to compile editor panes and "Imports" into valid html
  function buildOutput(consoleJS) {

    var content = {
      html: htmlField.getValue(),
      style: cssField.getValue(),
      js: jsField.getValue()
    };

    // If using Autoprefixer, load it first via XMLHTTPRequest but do so only once.
    if (use.Autoprefixer && typeof autoprefixer === "undefined") {
      (function loadAutoprefixer() {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://rawgit.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js", false);
        xmlHttp.send(null);
        var ap = document.createElement("script");
        ap.type ="text/javascript";
        ap.text = xmlHttp.responseText;
        document.getElementsByTagName("head")[0].appendChild(ap);
      })();
    }

    // If using Sass, load it first via XMLHTTPRequest but do so only once.
    // We don't want to include it from the get-go as it's 2 Megabytes!!
    if (use.Sass && typeof Sass === "undefined") {
      (function loadSass() {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://rawgit.com/medialize/sass.js/master/dist/sass.min.js", false);
        xmlHttp.send(null);
        var sass = document.createElement("script");
        sass.id = "sass";
        sass.type = "text/javascript";
        sass.text = xmlHttp.responseText;
        document.getElementsByTagName("head")[0].appendChild(sass);
      })();
    }

    // String to hold elements to build HTML output
    var html = '';
    html += '<!DOCTYPE html>\n';
    html += '<html lang="en">\n';
    html += '<head>\n';
    html += '<meta charset="UTF-8">\n';
    if (use.Normalize) {
      html += '<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css" rel="stylesheet">\n';
    }
    if (use.Bootstrap) {
      html += '<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">\n';
    }
    if (use.Foundation) {
      html += '<link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.2.2/css/foundation.min.css" rel="stylesheet">\n';
    }
    if (use.Less) {
      html += '<style type="text/less">\n';
    } else {
      html += '<style type="text/css">\n';
    }
    if (use.Autoprefixer) {
      html += autoprefixer({ cascade: true }).process(content.style).css;
    } else if (use.Sass) {
      html += Sass.compile(content.style);
    } else {
      html += content.style;
    }
    html += '\n</style>\n';
    html += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>\n';
    if (use.Bootstrap) {
      html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js"></script>\n';
    }
    if (use.Foundation) {
      html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.2.2/js/foundation/foundation.min.js"></script>\n';
    }
    if (use.Modernizr) {
      html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>\n';
    }
    if (use.Less) {
      // Set LESS global variable to turn errorReporting off and mode to production
      html += '<script>\nless={env: "production", errorReporting: null}\n</script>\n';
      html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/1.7.0/less.min.js"></script>\n';
    }
    html += '</head>\n';
    html += '<body>\n';
    html += content.html;
    // true if previewing in the preview pane; false if called by download function.
    if (consoleJS) {
      html += '\n<script src="js/console.min.js"></script>\n';
    }
    html += '\n<script>\n';
    html += content.js;
    html += '\n</script>\n';
    html += '</body>\n';
    html += '</html>';

    return html;
  }

  // Toggle live edit/preview mode. It's sometimes slow or doesn't react well.
  $("#liveEdit").on("click", function() {
    use.liveEdit ? use.liveEdit = false:use.liveEdit = true;
    $(this).toggleClass("btn-active");
  });

  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay if "use.liveEdit: true".
  htmlField.getSession().on("change", function(e) {
    if (use.liveEdit) preview(1000);
  });
  cssField.getSession().on("change", function(e) {
    if (use.liveEdit) preview(2000);
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

  // Download HTML/CSS/JS
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

  // Detect a user leaving a page and display a message
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
    // // For IE6-8 and Firefox prior to version 4
    if (e) e.returnValue = message;
    // // For Chrome, Safari, IE8+ and Opera 12+
    return message;
  };
})();
