module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addLikeAction.js":
/*!************************************!*\
  !*** ./src/forum/addLikeAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'actionItems', function (items) {
    var post = this.attrs.post;
    if (post.isHidden() || !post.canLike()) return;
    var likes = post.likes();
    var isLiked = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user && likes && likes.some(function (user) {
      return user === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    });
    items.add('like', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--link',
      onclick: function onclick() {
        isLiked = !isLiked;
        post.save({
          isLiked: isLiked
        }); // We've saved the fact that we do or don't like the post, but in order
        // to provide instantaneous feedback to the user, we'll need to add or
        // remove the like from the relationship data manually.

        var data = post.data.relationships.likes.data;
        data.some(function (like, i) {
          if (like.id === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) {
            data.splice(i, 1);
            return true;
          }
        });

        if (isLiked) {
          data.unshift({
            type: 'users',
            id: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()
          });
        }
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(isLiked ? 'flarum-likes.forum.post.unlike_link' : 'flarum-likes.forum.post.like_link')));
  });
});

/***/ }),

/***/ "./src/forum/addLikesList.js":
/*!***********************************!*\
  !*** ./src/forum/addLikesList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/punctuateSeries */ "flarum/helpers/punctuateSeries");
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PostLikesModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PostLikesModal */ "./src/forum/components/PostLikesModal.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'footerItems', function (items) {
    var post = this.attrs.post;
    var likes = post.likes();

    if (likes && likes.length) {
      var limit = 4;
      var overLimit = likes.length > limit; // Construct a list of names of users who have liked this post. Make sure the
      // current user is first in the list, and cap a maximum of 4 items.

      var names = likes.sort(function (a) {
        return a === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user ? -1 : 1;
      }).slice(0, overLimit ? limit - 1 : limit).map(function (user) {
        return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(user)
        }, user === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user ? flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-likes.forum.post.you_text') : flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(user));
      }); // If there are more users that we've run out of room to display, add a "x
      // others" name to the end of the list. Clicking on it will display a modal
      // with a full list of names.

      if (overLimit) {
        var count = likes.length - names.length;
        names.push(m("a", {
          href: "#",
          onclick: function onclick(e) {
            e.preventDefault();
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_components_PostLikesModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
              post: post
            });
          }
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.transChoice('flarum-likes.forum.post.others_link', count, {
          count: count
        })));
      }

      items.add('liked', m("div", {
        className: "Post-likedBy"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('far fa-thumbs-up'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.transChoice('flarum-likes.forum.post.liked_by' + (likes[0] === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user ? '_self' : '') + '_text', names.length, {
        count: names.length,
        users: flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_4___default()(names)
      })));
    }
  });
});

/***/ }),

/***/ "./src/forum/components/PostLikedNotification.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/PostLikedNotification.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostLikedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__);




var PostLikedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostLikedNotification, _Notification);

  function PostLikedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PostLikedNotification.prototype;

  _proto.icon = function icon() {
    return 'far fa-thumbs-up';
  };

  _proto.href = function href() {
    return app.route.post(this.attrs.notification.subject());
  };

  _proto.content = function content() {
    var notification = this.attrs.notification;
    var user = notification.fromUser();
    return app.translator.transChoice('flarum-likes.forum.notifications.post_liked_text', 1, {
      user: user
    });
  };

  _proto.excerpt = function excerpt() {
    return Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__["truncate"])(this.attrs.notification.subject().contentPlain(), 200);
  };

  return PostLikedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostLikesModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/PostLikesModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostLikesModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__);






var PostLikesModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostLikesModal, _Modal);

  function PostLikesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = PostLikesModal.prototype;

  _proto.className = function className() {
    return 'PostLikesModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('flarum-likes.forum.post_likes.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("ul", {
      className: "PostLikesModal-list"
    }, this.attrs.post.likes().map(function (user) {
      return m("li", null, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: app.route.user(user)
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(user), " ", ' ', flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(user)));
    })));
  };

  return PostLikesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/NotificationGrid */ "flarum/components/NotificationGrid");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addLikeAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addLikeAction */ "./src/forum/addLikeAction.js");
/* harmony import */ var _addLikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addLikesList */ "./src/forum/addLikesList.js");
/* harmony import */ var _components_PostLikedNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PostLikedNotification */ "./src/forum/components/PostLikedNotification.js");









flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarum-likes', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.notificationComponents.postLiked = _components_PostLikedNotification__WEBPACK_IMPORTED_MODULE_8__["default"];
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.canLike = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('canLike');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.likes = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('likes');
  Object(_addLikeAction__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_addLikesList__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'notificationTypes', function (items) {
    items.add('postLiked', {
      name: 'postLiked',
      icon: 'far fa-thumbs-up',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-likes.forum.settings.notify_post_liked_label')
    });
  });
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/NotificationGrid":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationGrid']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationGrid'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/punctuateSeries":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['helpers/punctuateSeries']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/punctuateSeries'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map