function rcEdit(currEditor, defaults, id) {
  "use strict";

  //------------------------------------------------------------------------------
  // Globals
  var singlesplit = false,
      newContent = '',
      htmlId = 'html_' + id,
      cssId = 'css_' + id,
      jsId = 'js_' + id,
      iframeId = 'iframe_' + id,
      use = {
        liveEdit: true
      };

  // ---
  // End Globals

  function awsmContent(awsm_content) {
    $(currEditor).replaceWith(awsm_content);
  }

  (function createEditorDOM() {
    if ((defaults.css == undefined ) && (defaults.js == undefined)) {
      singlesplit = true;
      newContent="<div class=\"editor editor--single\"><div class=\"editor__header\"><div class=\"editor-logo\"><svg id=\"rafl-logo\" data-name=\"rafl-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 21\"><title>logo-full</title><path d=\"M8.19,5.94l0.48-2.6,2.53,0.48L10.73,6.42Zm4.49,0.85,0.48-2.6L15.7,4.66l-0.5,2.6Z\"/><path d=\"M17.17,7.54a4.28,4.28,0,0,1-1.32,2.14,5.35,5.35,0,0,1-2.24,1.16,6.29,6.29,0,0,1-5.11-1A5.44,5.44,0,0,1,6.82,8a4.32,4.32,0,0,1-.47-2.47l-1-.17a6,6,0,0,0,.22,2.59L0.87,7.09V7.24L0.47,5.67,0,5.74,0.8,9.1,1.28,9,1,7.94,6,8.83a6.42,6.42,0,0,0,1.87,2.1,7,7,0,0,0,2.88,1.29,7,7,0,0,0,3.15-.17,6.32,6.32,0,0,0,2.74-1.5,5.65,5.65,0,0,0,1.54-2.81Z\"/><polyline points=\"12.35 4.27 11.96 4.22 12.15 2.66 12.54 2.71 12.35 4.27\"/><polyline points=\"24.06 5.29 0.73 0.61 0.85 0 24.18 4.68 24.06 5.29\"/><polygon points=\"16.98 13.49 16.27 14.46 11.75 13.58 11.79 12.95 11.39 12.93 11.36 13.5 9.31 13.1 9.35 12.42 8.95 12.39 8.92 13.03 5.03 12.27 4.92 12.87 15.87 15.01 15.62 15.35 16.05 15.52 17.41 13.65 16.98 13.49\"/><path d=\"M36,12.31S36,12.49,38.16,17a0.57,0.57,0,0,1,.05.24,0.52,0.52,0,0,1-1,.22c-2.35-5-2.35-5-2.35-5H30.72v4.76a0.57,0.57,0,0,1-.57.54,0.54,0.54,0,0,1-.54-0.54V6.65a0.54,0.54,0,0,1,.54-0.54H35a3.1,3.1,0,0,1,3.33,3.21A2.93,2.93,0,0,1,36,12.31ZM35.09,7.1H30.72v4.39h4.35a2.06,2.06,0,0,0,2.11-2q0-.09,0-0.18a2.07,2.07,0,0,0-2-2.18H35.09v0Z\"/><path d=\"M46.24,17.81a0.54,0.54,0,0,1-.54-0.54V16.82a3.24,3.24,0,0,1-2.51,1.07,2.72,2.72,0,0,1-3-2.52c0-1.61,1.3-2.5,3-2.5a3.34,3.34,0,0,1,2.51.88V12.85c0-1.49-.74-2-2.35-2a5.7,5.7,0,0,0-2.34.54,0.5,0.5,0,0,1-.19.05,0.41,0.41,0,0,1-.37-0.24A0.39,0.39,0,0,1,40.4,11a0.44,0.44,0,0,1,.24-0.39,5.84,5.84,0,0,1,2.79-.66c2.07,0,3.29.9,3.29,3v4.37a0.49,0.49,0,0,1-.46.52h0Zm-2.79-4.14c-1.18,0-2.24.49-2.24,1.69a1.92,1.92,0,0,0,2.19,1.71c1.26,0,2.32-.71,2.32-1.72,0-1.23-1.05-1.66-2.25-1.66h0Z\"/><path d=\"M53.29,6.82H52.82c-1.25,0-1.61.5-1.61,1.88v1.47h1.55a0.42,0.42,0,0,1,.42.42h0a0.43,0.43,0,0,1-.42.44H51.22v6.25a0.51,0.51,0,0,1-1,0V11H49.08a0.42,0.42,0,0,1-.41-0.43h0a0.41,0.41,0,0,1,.41-0.41h1.12V8.83c0-1.89.64-2.87,2.56-2.87H53.3a0.42,0.42,0,0,1,.42.43h0a0.42,0.42,0,0,1-.4.43h0\"/><path d=\"M59.41,6.82H58.94c-1.24,0-1.61.5-1.61,1.88v1.47h1.55a0.42,0.42,0,0,1,.42.42v0a0.42,0.42,0,0,1-.41.44H57.33v6.25a0.51,0.51,0,0,1-1,0V11H55.19a0.41,0.41,0,0,1-.4-0.42v0a0.41,0.41,0,0,1,.38-0.43h1.15V8.83C56.32,6.93,57,6,58.88,6h0.54a0.43,0.43,0,0,1,.42.43h0a0.42,0.42,0,0,1-.41.43h0\"/><path d=\"M62.37,17.81a0.5,0.5,0,0,1-.53-0.47s0,0,0,0V6.47a0.54,0.54,0,0,1,.54-0.54,0.49,0.49,0,0,1,.49.5s0,0,0,0V17.31a0.48,0.48,0,0,1-.45.5h0\"/><path d=\"M72.26,14.18h-6A2.84,2.84,0,0,0,69.08,17a3.16,3.16,0,0,0,2.49-1.21,0.4,0.4,0,0,1,.32-0.18,0.45,0.45,0,0,1,.27.11,0.42,0.42,0,0,1,.15.33,0.45,0.45,0,0,1-.1.27A4,4,0,0,1,69,17.88,3.88,3.88,0,0,1,65.21,14v0a3.81,3.81,0,0,1,3.64-4H69a3.75,3.75,0,0,1,3.69,3.8s0,0.06,0,.09a0.35,0.35,0,0,1-.34.36h0ZM69,10.8a2.73,2.73,0,0,0-2.7,2.58h5.38A2.71,2.71,0,0,0,69,10.81h0Z\"/><path d=\"M80.77,16.37a3.82,3.82,0,0,1-6.86-2.45,3.86,3.86,0,0,1,3.73-4h0.11A3.75,3.75,0,0,1,80.43,11a0.43,0.43,0,0,1,0,.6,0.4,0.4,0,0,1-.32.16,0.49,0.49,0,0,1-.27-0.09,3.34,3.34,0,0,0-2.14-.87,2.93,2.93,0,0,0-2.84,3s0,0.06,0,.09A2.93,2.93,0,0,0,77.69,17h0.07a3.14,3.14,0,0,0,2.39-1.2,0.37,0.37,0,0,1,.31-0.14,0.43,0.43,0,0,1,.31.12,0.45,0.45,0,0,1,.12.32,0.5,0.5,0,0,1-.1.29\"/><path d=\"M86,17.88a3.91,3.91,0,0,1-3.86-3.95h0a3.85,3.85,0,1,1,7.7-.29q0,0.14,0,.29A3.9,3.9,0,0,1,86,17.88Zm0-7a2.93,2.93,0,0,0-2.84,3v0.06a2.86,2.86,0,1,0,5.7,0A2.94,2.94,0,0,0,86,10.85H86Z\"/><path d=\"M95.85,17.84a3.3,3.3,0,0,1-2.93-1.65V20.5a0.5,0.5,0,1,1-1,0v-10a0.5,0.5,0,0,1,1,0v1.07a3.28,3.28,0,0,1,2.93-1.65,3.81,3.81,0,0,1,3.75,3.86s0,0.08,0,.12a3.81,3.81,0,0,1-3.64,4H95.85Zm-0.09-7a2.9,2.9,0,0,0-2.85,2.94s0,0.09,0,.14a2.9,2.9,0,0,0,2.73,3.05h0.12a2.86,2.86,0,0,0,2.84-3.06,2.86,2.86,0,0,0-2.84-3.07h0Z\"/><path d=\"M104.78,11h-1.5v6.29a0.47,0.47,0,0,1-.44.5h0a0.5,0.5,0,0,1-.53-0.46s0,0,0,0V11h-1.33a0.41,0.41,0,0,1-.4-0.42v0a0.41,0.41,0,0,1,.38-0.43h1.35V7.59a0.54,0.54,0,0,1,.54-0.54,0.49,0.49,0,0,1,.49.54v2.57h1.5a0.42,0.42,0,0,1,.42.42h0a0.43,0.43,0,0,1-.42.44h0\"/><path d=\"M113.09,14.18h-6A2.84,2.84,0,0,0,109.93,17a3.16,3.16,0,0,0,2.49-1.21,0.39,0.39,0,0,1,.32-0.18,0.45,0.45,0,0,1,.27.11,0.42,0.42,0,0,1,.13.35,0.45,0.45,0,0,1-.1.27,4,4,0,0,1-3.16,1.57A3.88,3.88,0,0,1,106,14V13.92a3.81,3.81,0,0,1,3.64-4h0.11a3.75,3.75,0,0,1,3.69,3.8s0,0.06,0,.09a0.35,0.35,0,0,1-.34.36h0Zm-3.3-3.38a2.73,2.73,0,0,0-2.71,2.58h5.38a2.71,2.71,0,0,0-2.67-2.57h0Z\"/><path d=\"M119.56,10.84a2.72,2.72,0,0,0-2.84,2.6s0,0,0,.07v3.77a0.54,0.54,0,0,1-.51.54,0.5,0.5,0,0,1-.49-0.52v-6.8a0.49,0.49,0,0,1,.45-0.53h0a0.54,0.54,0,0,1,.51.54V11.4a3.21,3.21,0,0,1,2.84-1.48,0.45,0.45,0,0,1,.44.46h0a0.43,0.43,0,0,1-.41.45h0\"/></svg></div><div class=\"editor-actions\"></div></div><div class=\"editor__body\"><div class=\"windowGroup\"><div class=\"window html\"><pre id=\"" + htmlId + "\"></pre></div></div><div class=\"preview\"><iframe id=\"" + iframeId + "\" name=\"rcEdit\" sandbox=\"allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms\" allowtransparency=\"true\"></iframe></div></div></div>";

    } else {
      newContent="<div class=\"editor\"><div class=\"editor__header\"><div class=\"editor-logo\"><svg id=\"rafl-logo\" data-name=\"rafl-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 21\"><title>logo-full</title><path d=\"M8.19,5.94l0.48-2.6,2.53,0.48L10.73,6.42Zm4.49,0.85,0.48-2.6L15.7,4.66l-0.5,2.6Z\"/><path d=\"M17.17,7.54a4.28,4.28,0,0,1-1.32,2.14,5.35,5.35,0,0,1-2.24,1.16,6.29,6.29,0,0,1-5.11-1A5.44,5.44,0,0,1,6.82,8a4.32,4.32,0,0,1-.47-2.47l-1-.17a6,6,0,0,0,.22,2.59L0.87,7.09V7.24L0.47,5.67,0,5.74,0.8,9.1,1.28,9,1,7.94,6,8.83a6.42,6.42,0,0,0,1.87,2.1,7,7,0,0,0,2.88,1.29,7,7,0,0,0,3.15-.17,6.32,6.32,0,0,0,2.74-1.5,5.65,5.65,0,0,0,1.54-2.81Z\"/><polyline points=\"12.35 4.27 11.96 4.22 12.15 2.66 12.54 2.71 12.35 4.27\"/><polyline points=\"24.06 5.29 0.73 0.61 0.85 0 24.18 4.68 24.06 5.29\"/><polygon points=\"16.98 13.49 16.27 14.46 11.75 13.58 11.79 12.95 11.39 12.93 11.36 13.5 9.31 13.1 9.35 12.42 8.95 12.39 8.92 13.03 5.03 12.27 4.92 12.87 15.87 15.01 15.62 15.35 16.05 15.52 17.41 13.65 16.98 13.49\"/><path d=\"M36,12.31S36,12.49,38.16,17a0.57,0.57,0,0,1,.05.24,0.52,0.52,0,0,1-1,.22c-2.35-5-2.35-5-2.35-5H30.72v4.76a0.57,0.57,0,0,1-.57.54,0.54,0.54,0,0,1-.54-0.54V6.65a0.54,0.54,0,0,1,.54-0.54H35a3.1,3.1,0,0,1,3.33,3.21A2.93,2.93,0,0,1,36,12.31ZM35.09,7.1H30.72v4.39h4.35a2.06,2.06,0,0,0,2.11-2q0-.09,0-0.18a2.07,2.07,0,0,0-2-2.18H35.09v0Z\"/><path d=\"M46.24,17.81a0.54,0.54,0,0,1-.54-0.54V16.82a3.24,3.24,0,0,1-2.51,1.07,2.72,2.72,0,0,1-3-2.52c0-1.61,1.3-2.5,3-2.5a3.34,3.34,0,0,1,2.51.88V12.85c0-1.49-.74-2-2.35-2a5.7,5.7,0,0,0-2.34.54,0.5,0.5,0,0,1-.19.05,0.41,0.41,0,0,1-.37-0.24A0.39,0.39,0,0,1,40.4,11a0.44,0.44,0,0,1,.24-0.39,5.84,5.84,0,0,1,2.79-.66c2.07,0,3.29.9,3.29,3v4.37a0.49,0.49,0,0,1-.46.52h0Zm-2.79-4.14c-1.18,0-2.24.49-2.24,1.69a1.92,1.92,0,0,0,2.19,1.71c1.26,0,2.32-.71,2.32-1.72,0-1.23-1.05-1.66-2.25-1.66h0Z\"/><path d=\"M53.29,6.82H52.82c-1.25,0-1.61.5-1.61,1.88v1.47h1.55a0.42,0.42,0,0,1,.42.42h0a0.43,0.43,0,0,1-.42.44H51.22v6.25a0.51,0.51,0,0,1-1,0V11H49.08a0.42,0.42,0,0,1-.41-0.43h0a0.41,0.41,0,0,1,.41-0.41h1.12V8.83c0-1.89.64-2.87,2.56-2.87H53.3a0.42,0.42,0,0,1,.42.43h0a0.42,0.42,0,0,1-.4.43h0\"/><path d=\"M59.41,6.82H58.94c-1.24,0-1.61.5-1.61,1.88v1.47h1.55a0.42,0.42,0,0,1,.42.42v0a0.42,0.42,0,0,1-.41.44H57.33v6.25a0.51,0.51,0,0,1-1,0V11H55.19a0.41,0.41,0,0,1-.4-0.42v0a0.41,0.41,0,0,1,.38-0.43h1.15V8.83C56.32,6.93,57,6,58.88,6h0.54a0.43,0.43,0,0,1,.42.43h0a0.42,0.42,0,0,1-.41.43h0\"/><path d=\"M62.37,17.81a0.5,0.5,0,0,1-.53-0.47s0,0,0,0V6.47a0.54,0.54,0,0,1,.54-0.54,0.49,0.49,0,0,1,.49.5s0,0,0,0V17.31a0.48,0.48,0,0,1-.45.5h0\"/><path d=\"M72.26,14.18h-6A2.84,2.84,0,0,0,69.08,17a3.16,3.16,0,0,0,2.49-1.21,0.4,0.4,0,0,1,.32-0.18,0.45,0.45,0,0,1,.27.11,0.42,0.42,0,0,1,.15.33,0.45,0.45,0,0,1-.1.27A4,4,0,0,1,69,17.88,3.88,3.88,0,0,1,65.21,14v0a3.81,3.81,0,0,1,3.64-4H69a3.75,3.75,0,0,1,3.69,3.8s0,0.06,0,.09a0.35,0.35,0,0,1-.34.36h0ZM69,10.8a2.73,2.73,0,0,0-2.7,2.58h5.38A2.71,2.71,0,0,0,69,10.81h0Z\"/><path d=\"M80.77,16.37a3.82,3.82,0,0,1-6.86-2.45,3.86,3.86,0,0,1,3.73-4h0.11A3.75,3.75,0,0,1,80.43,11a0.43,0.43,0,0,1,0,.6,0.4,0.4,0,0,1-.32.16,0.49,0.49,0,0,1-.27-0.09,3.34,3.34,0,0,0-2.14-.87,2.93,2.93,0,0,0-2.84,3s0,0.06,0,.09A2.93,2.93,0,0,0,77.69,17h0.07a3.14,3.14,0,0,0,2.39-1.2,0.37,0.37,0,0,1,.31-0.14,0.43,0.43,0,0,1,.31.12,0.45,0.45,0,0,1,.12.32,0.5,0.5,0,0,1-.1.29\"/><path d=\"M86,17.88a3.91,3.91,0,0,1-3.86-3.95h0a3.85,3.85,0,1,1,7.7-.29q0,0.14,0,.29A3.9,3.9,0,0,1,86,17.88Zm0-7a2.93,2.93,0,0,0-2.84,3v0.06a2.86,2.86,0,1,0,5.7,0A2.94,2.94,0,0,0,86,10.85H86Z\"/><path d=\"M95.85,17.84a3.3,3.3,0,0,1-2.93-1.65V20.5a0.5,0.5,0,1,1-1,0v-10a0.5,0.5,0,0,1,1,0v1.07a3.28,3.28,0,0,1,2.93-1.65,3.81,3.81,0,0,1,3.75,3.86s0,0.08,0,.12a3.81,3.81,0,0,1-3.64,4H95.85Zm-0.09-7a2.9,2.9,0,0,0-2.85,2.94s0,0.09,0,.14a2.9,2.9,0,0,0,2.73,3.05h0.12a2.86,2.86,0,0,0,2.84-3.06,2.86,2.86,0,0,0-2.84-3.07h0Z\"/><path d=\"M104.78,11h-1.5v6.29a0.47,0.47,0,0,1-.44.5h0a0.5,0.5,0,0,1-.53-0.46s0,0,0,0V11h-1.33a0.41,0.41,0,0,1-.4-0.42v0a0.41,0.41,0,0,1,.38-0.43h1.35V7.59a0.54,0.54,0,0,1,.54-0.54,0.49,0.49,0,0,1,.49.54v2.57h1.5a0.42,0.42,0,0,1,.42.42h0a0.43,0.43,0,0,1-.42.44h0\"/><path d=\"M113.09,14.18h-6A2.84,2.84,0,0,0,109.93,17a3.16,3.16,0,0,0,2.49-1.21,0.39,0.39,0,0,1,.32-0.18,0.45,0.45,0,0,1,.27.11,0.42,0.42,0,0,1,.13.35,0.45,0.45,0,0,1-.1.27,4,4,0,0,1-3.16,1.57A3.88,3.88,0,0,1,106,14V13.92a3.81,3.81,0,0,1,3.64-4h0.11a3.75,3.75,0,0,1,3.69,3.8s0,0.06,0,.09a0.35,0.35,0,0,1-.34.36h0Zm-3.3-3.38a2.73,2.73,0,0,0-2.71,2.58h5.38a2.71,2.71,0,0,0-2.67-2.57h0Z\"/><path d=\"M119.56,10.84a2.72,2.72,0,0,0-2.84,2.6s0,0,0,.07v3.77a0.54,0.54,0,0,1-.51.54,0.5,0.5,0,0,1-.49-0.52v-6.8a0.49,0.49,0,0,1,.45-0.53h0a0.54,0.54,0,0,1,.51.54V11.4a3.21,3.21,0,0,1,2.84-1.48,0.45,0.45,0,0,1,.44.46h0a0.43,0.43,0,0,1-.41.45h0\"/></svg></div><div class=\"editor-actions\"></div></div><div class=\"editor__body\"><div class=\"windowGroup\"><div class=\"window html\"><pre id=\"" + htmlId + "\"></pre><div class=\"window-btns\"><button class=\"btn btn--window togglePane\" id=\"htmlToggle\" data-editor=\"html\" title=\"Toggle HTML\">HTML<span></span></button></div></div><div class=\"window css\"><pre id=\"" + cssId + "\"></pre><div class=\"window-btns\"><button class=\"btn btn--window togglePane\" id=\"cssToggle\" data-editor=\"css\" title=\"Toggle CSS\">CSS<span></span></button></div></div><div class=\"window js\"><pre id=\"" + jsId +"\"></pre><div class=\"window-btns\"><button class=\"btn btn--window\" id=\"run\" title=\"Run...\">Run</button><button class=\"btn btn--window togglePane\" id=\"jsToggle\" data-editor=\"js\" title=\"Toggle JS\">JavaScript<span></span></button></div></div></div><div class=\"preview\"><iframe id=\"" + iframeId + "\" name=\"rcEdit\" sandbox=\"allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms\" allowtransparency=\"true\"></iframe></div></div></div></div>";
    }

    awsmContent(newContent);
  })();

  //------------------------------------------------------------------------------
  // Editor panes
  // Init ACE Editor and set options;
  var htmlField = ace.edit(htmlId);

  if( singlesplit == false) {
    var cssField = ace.edit(cssId),
        jsField = ace.edit(jsId);
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
      showPrintMargin: false,
      enableEmmet: true
    });

    if (singlesplit == false) {
      // CSS Editor
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
      jsField.setOptions({
        theme: aceTheme,
        displayIndentGuides: true,
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true,
        showPrintMargin: false
      });
    }

    // Set field values from either those stored in sessionStorage
    // or defaults set in the html
    (function defaultsGet() {
      htmlField.setValue(defaults.html);

      if (singlesplit == false) {
        cssField.setValue(defaults.css);
        cssField.clearSelection();
        jsField.setValue(defaults.js);
        jsField.clearSelection();
      }

      preview(); // render the intial preview
    })();

  })();
  // END ACE Editor

  //------------------------------------------------------------------------------
  // Toggle editor panes

  if(singlesplit == false) {
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
  // Concat our preview
  // Used by preview and copy/download to compile editor panes and "Imports" into valid html

  function buildOutput() {

    if(singlesplit == true) {
      var content = {
        html: htmlField.getValue()
      };
    } else {
      var content = {
        html: htmlField.getValue(),
        style: cssField.getValue(),
        js: jsField.getValue()
      };
    }

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

    if(singlesplit == true) {
      html = content.html;
    }

    return html;
  }

  //------------------------------------------------------------------------------
  // Publish preview
  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay

  htmlField.on("change", function(e) {
    preview(1000);
  });

  if(singlesplit == false) {
    cssField.on("change", function(e) {
      preview(2000);
    });

    // Update preview window AND js console on click of "Run" button
    $("#run").on("click", function() {
      preview();
    });
  }

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
};

function makeId() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

$(".editor").each(function() {
  var self = this,
      id = makeId();
  defaults = {
    html: $(self).find("#default-html").html(),
    css: $(self).find("#default-css").html(),
    js: $(self).find("#default-js").html()
  };


  rcEdit(self, defaults, id);
});
