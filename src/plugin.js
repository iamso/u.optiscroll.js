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
