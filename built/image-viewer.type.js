"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var image_viewer_style_1 = require("./image-viewer.style");
var Props = (function () {
    function Props() {
        this.show = false;
        this.imageUrls = [];
        this.flipThreshold = 80;
        this.maxOverflow = 300;
        this.index = 0;
        this.failImageSource = undefined;
        this.backgroundColor = 'black';
        this.footerContainerStyle = {};
        this.menuContext = {
            saveToLocal: 'save to the album',
            cancel: 'cancel'
        };
        this.saveToLocalByLongPress = true;
        this.style = {};
        this.onLongPress = function () {
        };
        this.onClick = function () {
        };
        this.onDoubleClick = function () {
        };
        this.onSave = function () {
        };
        this.renderHeader = function () {
            return null;
        };
        this.renderFooter = function () {
            return null;
        };
        this.renderIndicator = function (currentIndex, allSize) {
            return React.createElement(react_native_1.View, { style: image_viewer_style_1.simpleStyle.count }, React.createElement(react_native_1.Text, { style: image_viewer_style_1.simpleStyle.countText }, currentIndex + '/' + allSize));
        };
        this.renderImage = function (props) {
            return React.createElement(react_native_1.Image, props);
        };
        this.renderArrowLeft = function () {
            return null;
        };
        this.renderArrowRight = function () {
            return null;
        };
        this.onShowModal = function () {
        };
        this.onCancel = function () {
        };
        this.onSwipeDown = function () {
        };
        this.loadingRender = function () {
            return null;
        };
        this.onSaveToCamera = function () {
        };
        this.onChange = function () {
        };
    }
    return Props;
}());
exports.Props = Props;
var State = (function () {
    function State() {
        this.show = false;
        this.currentShowIndex = 0;
        this.imageLoaded = false;
        this.imageSizes = [];
        this.isShowMenu = false;
    }
    return State;
}());
exports.State = State;
//# sourceMappingURL=image-viewer.type.js.map