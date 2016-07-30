
;(function (factory) {
  'use strict';

  if (/^f/.test(typeof define) && define.amd) {
    define(['jquery', 'optiscroll'], factory);
  }
  else if (/^o/.test(typeof exports)) {
    factory(require('jquery'), require('optiscroll'));
  }
  else {
    factory(jQuery, Optiscroll);
  }
})(function ($, Optiscroll) {
