
;(function (factory) {
  'use strict';

  if (/^f/.test(typeof define) && define.amd) {
    define(['ujs', 'optiscroll'], factory);
  }
  else if (/^o/.test(typeof exports)) {
    factory(require('ujs'), require('optiscroll'));
  }
  else {
    factory(ujs, Optiscroll);
  }
})(function ($, Optiscroll) {
