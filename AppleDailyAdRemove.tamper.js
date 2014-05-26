// ==UserScript==
// @id             Apple_Daily_AD_Remover
// @name           Apple Daily AD Remover
// @version        0.16.13.20140525.1703
// @namespace      https://github.com/river0825/gressmonkeyscript
// @updateURL      https://github.com/river0825/gressmonkeyscript/blob/master/AppleDailyAdRemove.tamper.js
// @downloadURL    https://github.com/river0825/gressmonkeyscript/blob/master/AppleDailyAdRemove.tamper.js
// @description    remove ad from apple daily
// @include        http://*.gamme.com.tw/*
// @include        https://*.gamme.com.tw/*
// @include        http://*.appledaily.com.tw/*
// @include        https://*.appledaily.com.tw/*
// @match          http://*.gamme.com.tw/*
// @match          https://*.gamme.com.tw/*
// @match          http://*.appledaily.com.tw/*
// @match          https://*.appledaily.com.tw/*
// @grant          none
// ==/UserScript==


$(function(){
	$(".fb_iframe_widget").hide()
});