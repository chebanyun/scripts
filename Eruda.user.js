// ==UserScript==
// @name         test
// @namespace    https://www.tampermonkey.net/
// @version      1.1.8.8
// @license      AGPL-3.0
// @description  test
// @author       Tenfond
// @match        *://*/*
// @require    https://eruda.liriliri.io/eruda.min.js
// @require11      https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @grant      unsafeWindow
// @grant      GM_log
// @grant      GM_deleteValue
// @grant      GM_getValue
// @grant      GM_listValues
// @grant      GM_setValue
// @grant      GM_registerMenuCommand
// @grant      GM_setClipboard
// @grant      GM_addStyle
// @grant      GM_getResourceURL
// @grant      GM_xmlhttpRequest

// @grant      GM_openInTab
// @grant      GM_notification

// @run-at       document-end
// ==/UserScript==

eruda.init();
eruda.get("console").config.set("displayGetterVal", !0);