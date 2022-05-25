(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlinx_kotlinx_nodejs = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_nodejs === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_nodejs);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_nodejs.js.map