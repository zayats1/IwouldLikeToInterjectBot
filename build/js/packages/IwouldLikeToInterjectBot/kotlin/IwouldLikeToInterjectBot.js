(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'IwouldLikeToInterjectBot'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'IwouldLikeToInterjectBot'.");
    }
    root.IwouldLikeToInterjectBot = factory(typeof IwouldLikeToInterjectBot === 'undefined' ? {} : IwouldLikeToInterjectBot, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var println = kotlin_kotlin.$crossModule$.println;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function main() {
    println('IWouldLikeToInterjectBot');
  }
  main();
  return _;
}));

//# sourceMappingURL=IwouldLikeToInterjectBot.js.map