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

    // Set field values from either those stored in sessionStorage
    // or defaults set in the html
    (function sessionStorageGet() {
      var default_html = $("#default").html();

      if (sessionStorage.getItem("html")) {
        htmlField.setValue(sessionStorage.getItem("html"));
        htmlField.clearSelection();
      } else {
        htmlField.setValue(default_html);
        htmlField.clearSelection();
      }

      if (sessionStorage.getItem("use")) {
        use = JSON.parse(sessionStorage.getItem("use"));
      }

      preview(); // render the intial preview
    })();

  })();
  // END ACE Editor

  //------------------------------------------------------------------------------
  // Concat our preview
  // Used by preview and copy/download to compile editor panes and "Imports" into valid html

  function buildOutput(consoleJS) {

    var content = {
      html: htmlField.getValue()
    };

    // String to hold elements to build HTML output
    var html = content.html;

    return html;
  }

  //------------------------------------------------------------------------------
  // Publish preview
  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay

  htmlField.getSession().on("change", function(e) {
    preview(1000);
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

  // var clipboard = new Clipboard('.btn--copy');

  // clipboard.on('success', function(e) {
  //     console.info('Action:', e.action);
  //     console.info('Text:', e.text);
  //     console.info('Trigger:', e.trigger);

  //     e.clearSelection();
  // });

  // clipboard.on('error', function(e) {
  //     console.error('Action:', e.action);
  //     console.error('Trigger:', e.trigger);
  // });

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
