export default {
  zindex: 100,

  calculatedScrollbarWidth: null,

  addClass (element, className) {
    if (element.classList) { element.classList.add(className); } else { element.className += ' ' + className; }
  },

  addMultipleClasses (element, className) {
    if (element.classList) {
      let styles = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.classList.add(styles[i]);
      }
    } else {
      let styles = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.className += ' ' + styles[i];
      }
    }
  },

  removeClass (element, className) {
    if (element.classList) { element.classList.remove(className); } else { element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); }
  },

  hasClass (element, className) {
    if (element.classList) { return element.classList.contains(className); } else { return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className); }
  },

  siblings (element) {
    return Array.prototype.filter.call(element.parentNode.children, function (child) {
      return child !== element;
    });
  },

  find (element, selector) {
    return element.querySelectorAll(selector);
  },

  findSingle (element, selector) {
    return element.querySelector(selector);
  },

  index (element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] === element) return num;
      if (children[i].nodeType === 1) num++;
    }
    return -1;
  },

  relativePosition (element, target) {
    let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    let targetHeight = target.offsetHeight;
    let targetWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let viewport = this.getViewport();
    let top;
    let left;

    if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
      top = -1 * (elementDimensions.height);
      if (targetOffset.top + top < 0) {
        top = 0;
      }
    } else {
      top = targetHeight;
    }

    if ((targetOffset.left + elementDimensions.width) > viewport.width) { left = targetWidth - elementDimensions.width; } else { left = 0; }

    element.style.top = top + 'px';
    element.style.left = left + 'px';
  },

  absolutePosition (element, target) {
    let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    let elementOuterHeight = elementDimensions.height;
    let elementOuterWidth = elementDimensions.width;
    let targetOuterHeight = target.offsetHeight;
    let targetOuterWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let windowScrollTop = this.getWindowScrollTop();
    let windowScrollLeft = this.getWindowScrollLeft();
    let viewport = this.getViewport();
    let top;
    let left;

    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      if (top < 0) {
        top = 0 + windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
    }

    if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) { left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth; } else { left = targetOffset.left + windowScrollLeft; }

    element.style.top = top + 'px';
    element.style.left = left + 'px';
  },

  getHiddenElementOuterHeight (element) {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementHeight = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementHeight;
  },

  getHiddenElementOuterWidth (element) {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementWidth = element.offsetWidth;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementWidth;
  },

  getHiddenElementDimensions (element) {
    let dimensions = {};
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return dimensions;
  },

  scrollInView (container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);

    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if ((offset + itemHeight) > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },

  fadeIn (element, duration) {
    element.style.opacity = 0;

    let last = +new Date();
    let opacity = 0;
    let tick = function () {
      opacity = +element.style.opacity.replace(',', '.') + (new Date().getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +new Date();

      if (+opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };

    tick();
  },

  fadeOut (element, ms) {
    var opacity = 1;
    var interval = 50;
    var duration = ms;
    var gap = interval / duration;

    let fading = setInterval(() => {
      opacity = opacity - gap;

      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }

      element.style.opacity = opacity;
    }, interval);
  },

  getWindowScrollTop () {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },

  getWindowScrollLeft () {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },

  matches (element, selector) {
    var p = Element.prototype;
    var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p.msMatchesSelector || function (s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  },

  getOuterWidth (el, margin) {
    let width = el.offsetWidth;

    if (margin) {
      let style = getComputedStyle(el);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }

    return width;
  },

  getHorizontalPadding (el) {
    let style = getComputedStyle(el);
    return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  },

  getHorizontalMargin (el) {
    let style = getComputedStyle(el);
    return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  },

  innerWidth (el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  },

  width (el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  },

  getInnerHeight (el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);

    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
  },

  getOuterHeight (el, margin) {
    let height = el.offsetHeight;

    if (margin) {
      let style = getComputedStyle(el);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    return height;
  },

  getHeight (el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);

    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

    return height;
  },

  getWidth (el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    return width;
  },

  getViewport () {
    let win = window;
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let w = win.innerWidth || e.clientWidth || g.clientWidth;
    let h = win.innerHeight || e.clientHeight || g.clientHeight;

    return { width: w, height: h };
  },

  getOffset (el) {
    let rect = el.getBoundingClientRect();

    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },

  getUserAgent () {
    return navigator.userAgent;
  },

  isIE () {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
            // IE 10 or older => return version number
      return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
            // IE 11 => return version number
      return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
           // Edge (IE 12+) => return version number
      return true;
    }

        // other browser
    return false;
  },

  appendChild (element, target) {
    if (this.isElement(target)) { target.appendChild(element); } else if (target.el && target.el.nativeElement) { target.el.nativeElement.appendChild(element); } else { throw new Error('Cannot append ' + target + ' to ' + element); };
  },

  removeChild (element, target) {
    if (this.isElement(target)) { target.removeChild(element); } else if (target.el && target.el.nativeElement) { target.el.nativeElement.removeChild(element); } else { throw new Error('Cannot remove ' + element + ' from ' + target); };
  },

  isElement (obj) {
    return (typeof HTMLElement === 'object' ? obj instanceof HTMLElement
            : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string'
    );
  },

  calculateScrollbarWidth () {
    if (this.calculatedScrollbarWidth !== null) { return this.calculatedScrollbarWidth; }

    let scrollDiv = document.createElement('div');
    scrollDiv.className = 'ui-scrollbar-measure';
    document.body.appendChild(scrollDiv);

    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    this.calculatedScrollbarWidth = scrollbarWidth;

    return scrollbarWidth;
  },

  invokeElementMethod (element, methodName, args) {
    methodName.apply(element, args);
  },

  clearSelection () {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty();
      } catch (error) {
                // ignore IE bug
      }
    }
  }
};
