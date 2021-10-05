$(document).ready(function() {
    "use strict";
    var t, e, i, s, n, o = [];

    function r() {
        this.scale = .15, this.check = 50, this.move = 300, this.render = 5, this.force3D = !1, this._entries = null, this._positions = [], this._widths = [], this._heights = [], this._containerWidth = 0, this._containerHeight = 0, this._scrollElCount = 0, this._renderDelay = 1, this._isRendering = !0, this.__bound_delay = this._delay.bind(this), this.__bound_renderElements = this._renderElements.bind(this), o.push(this)
    }
    r.destroyAll = function() {
        for (; o.length > 0;) o[0].destroy()
    }, r.prototype.setEntries = function(t) {
        this._setEntries(t), this._entries && this._positions[0] && this.__bound_renderElements()
    }, r.prototype.resize = function(t, e) {
        this._resize(t, e), this._entries && this._positions[0] && this.__bound_renderElements()
    }, r.prototype.destroy = function() {
        this._isRendering = !1, this._delayTimeout && cancelAnimationFrame(this._delayTimeout), this._renderTimeout && cancelAnimationFrame(this._renderTimeout);
        for (var t = 0, e = o.length; t < e; t++)
            if (o[t] === this) {
                o.splice(t, 1);
                break
            }
    }, r.prototype._setEntries = function(t) {
        this._entries = t, this._scrollElCount = this._entries.length
    }, r.prototype._resize = function(i, s) {
        for (this._containerWidth = i, this._containerHeight = s, t = 0; t < this._scrollElCount; t++) e = this._entries[t], this._positions[t] = a(e), this._positions[t].leftFraction = Math.max(0, Math.min(1, this._positions[t].left / this._containerWidth)), this._heights[t] = e.offsetHeight, this._widths[t] = e.offsetWidth
    }, r.prototype._renderElements = function() {
        this._isRendering && (this._renderDelay = this.render, this._delayTimeout = requestAnimationFrame(this.__bound_delay), this._set(window.scrollY))
    }, r.prototype._delay = function() {
        this._isRendering && (this._renderTimeout = requestAnimationFrame(0 == --this._renderDelay ? this.__bound_renderElements : this.__bound_delay))
    }, r.prototype._set = function(o) {
        for (t = 0; t < this._scrollElCount; t++) e = this._entries[t], i = this._positions[t].leftFraction, s = this._positions[t].top - o - this._containerHeight, s -= -2.35 * this.check * i, n = (s + this.check) / this.check, n = Math.max(0, n), (n = Math.min(1, n)) <= 0 ? (s = this._positions[t].top - o + this._heights[t], s += -2.25 * this.check * i, n = (s - this.check) / this.check, n = Math.max(0, n), n = 1 - (n = Math.min(1, n)), e.style.opacity = 1 - n, e.style[h] = this.force3D ? "translate(0, " + this.move * n * -1 + "px) scale(" + (1 - this.scale * n * -1) + ")" : "translate3d(0, " + this.move * n * -1 + "px, 0) scale(" + (1 - this.scale * n * -1) + ")") : (e.style.opacity = 1 - n, e.style[h] = this.force3D ? "translate(0, " + this.move * n + "px) scale(" + (1 - this.scale * n) + ")" : "translate3d(0, " + this.move * n + "px, 0) scale(" + (1 - this.scale * n) + ")")
    };
    var h = "transform",
        l = function() {
            if (document.body && document.body.style) {
                var t = "transform";
                if (!(t in document.body.style))
                    for (var e = ["ms", "Khtml", "O", "Moz", "Webkit"]; e.length;) {
                        var i = e.pop() + "Transform";
                        i in document.body.style && (t = i)
                    }
                h = t
            } else setTimeout(l, 17)
        };
    l();
    var a = function(t) {
        var e = t,
            i = 0,
            s = 0;
        if (document.getElementById || document.all)
            do {
                for (s += t.offsetLeft - t.scrollLeft, i += t.offsetTop - t.scrollTop, t = t.offsetParent, e = e.parentNode; e != t;) s -= e.scrollLeft, i -= e.scrollTop, e = e.parentNode
            } while (t.offsetParent);
        else document.layers && (i += t.y, s += t.x);
        return {
            top: i,
            left: s
        }
    };
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return r
    }) : "undefined" != typeof module && module.exports ? (module.exports = r, module.exports.FancyScroll = r) : window.FancyScroll = r
}());