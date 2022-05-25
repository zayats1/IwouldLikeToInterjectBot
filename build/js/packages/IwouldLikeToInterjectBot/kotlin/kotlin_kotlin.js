(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_kotlin = factory(typeof kotlin_kotlin === 'undefined' ? {} : kotlin_kotlin);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  NodeJsOutput.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput.prototype.constructor = NodeJsOutput;
  BufferedOutput.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput.prototype.constructor = BufferedOutput;
  BufferedOutputToConsoleLog.prototype = Object.create(BufferedOutput.prototype);
  BufferedOutputToConsoleLog.prototype.constructor = BufferedOutputToConsoleLog;
  //endregion
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function _get_output__1179223594() {
    init_properties_console_kt_3903220573();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_uuzh5q_k$ = function () {
    this.print_o29p2b_k$('\n');
  };
  BaseOutput.prototype.println_gh3jfj_k$ = function (message) {
    this.print_o29p2b_k$(message);
    this.println_uuzh5q_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput(outputStream) {
    BaseOutput.call(this);
    this.outputStream_1 = outputStream;
  }
  NodeJsOutput.prototype.print_o29p2b_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this.outputStream_1.write(messageString);
  };
  NodeJsOutput.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog() {
    BufferedOutput.call(this);
  }
  BufferedOutputToConsoleLog.prototype.print_o29p2b_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__2513334987_tgqkad_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3.substring(0, i);
        break $l$block_3;
      }
      tmp0_this._set_buffer__2424755159_nu2sqj_k$(tmp + tmp$ret$4);
      this.flush_sgqoqb_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5.substring(tmp3_substring_0);
        break $l$block_5;
      }
      s = tmp$ret$6;
    }
    var tmp1_this = this;
    tmp1_this._set_buffer__2424755159_nu2sqj_k$(tmp1_this._get_buffer__2513334987_tgqkad_k$() + s);
  };
  BufferedOutputToConsoleLog.prototype.flush_sgqoqb_k$ = function () {
    console.log(this._get_buffer__2513334987_tgqkad_k$());
    this._set_buffer__2424755159_nu2sqj_k$('');
  };
  BufferedOutputToConsoleLog.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput() {
    BaseOutput.call(this);
    this.buffer_1 = '';
  }
  BufferedOutput.prototype._set_buffer__2424755159_nu2sqj_k$ = function (_set____804775014) {
    this.buffer_1 = _set____804775014;
  };
  BufferedOutput.prototype._get_buffer__2513334987_tgqkad_k$ = function () {
    return this.buffer_1;
  };
  BufferedOutput.prototype.print_o29p2b_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.buffer_1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    tmp.buffer_1 = tmp_0 + tmp$ret$0;
  };
  BufferedOutput.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    init_properties_console_kt_3903220573();
    _get_output__1179223594().println_gh3jfj_k$(message);
  }
  var properties_initialized_console_kt_1003722681;
  function init_properties_console_kt_3903220573() {
    if (!properties_initialized_console_kt_1003722681) {
      properties_initialized_console_kt_1003722681 = true;
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
          tmp$ret$0 = isNode_2 ? new NodeJsOutput(process.stdout) : new BufferedOutputToConsoleLog();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      output = tmp$ret$1;
    }
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.println = println;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_kotlin.js.map