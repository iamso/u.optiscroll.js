/*!
 *  - Version 0.2.0
 * u.js plugin for Optiscroll
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2016-07-30
 * Copyright (c) 2016 Steve Ottoz
 * Released under the MIT license
 */
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


  'use strict';

  var pluginName = 'optiscroll';

  $.fn[pluginName] = function(options) {
    var method, args;

    if(typeof options === 'string') {
      args = Array.prototype.slice.call(arguments);
      method = args.shift();
    }

    return this.each(function() {
      var $el = $(this);
      var inst = $el.data(pluginName);

      // start new optiscroll instance
      if(!inst) {
        inst = new Optiscroll(this, options || {});
        $el.data(pluginName, inst);
      }
      // allow exec method on instance
      else if(inst && typeof method === 'string') {
        inst[method].apply(inst, args);
        if(method === 'destroy') {
          $el.removeData(pluginName);
        }
      }
    });
  };


});
