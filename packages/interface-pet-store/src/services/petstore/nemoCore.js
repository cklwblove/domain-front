// nemoCoreSource/nemoCore.ts
function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _create_class(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _NemoCoreManager = /*#__PURE__*/ (function () {
  'use strict';
  function _NemoCoreManager1() {
    _class_call_check(this, _NemoCoreManager1);
  }
  _create_class(
    _NemoCoreManager1,
    [
      {
        key: 'fetch',
        value: function fetch1(url) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return fetch(url, options).then(function (res) {
            return res.json();
          });
        }
      },
      {
        key: 'useRequest',
        value: function useRequest(fetch2) {
          if (typeof fetch2 !== 'function') {
            console.error('request should be a function ');
            return;
          }
          this.fetch = fetch2;
        }
      }
    ],
    [
      {
        key: 'getSingleInstance',
        value: function getSingleInstance() {
          if (!_NemoCoreManager.singleInstance) {
            _NemoCoreManager.singleInstance = new _NemoCoreManager();
            return _NemoCoreManager.singleInstance;
          }
          return _NemoCoreManager.singleInstance;
        }
      }
    ]
  );
  return _NemoCoreManager1;
})();
var NemoCoreManager = _NemoCoreManager;
NemoCoreManager.singleInstance = null;
var NemoCore = NemoCoreManager.getSingleInstance();
export { NemoCore };
