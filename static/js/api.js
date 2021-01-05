const BROWSER_VERIFY = {
    isChrome: !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
    isIE: !!document.documentMode,
    isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
}
const BROWSER = {
    CHROME: {id: 1, name: 'CHROME', exp: BROWSER_VERIFY.isChrome},
    IE: {id: 2, name: 'IE', exp: BROWSER_VERIFY.isIE},
    EDGE: {id: 3, name: 'EDGE', exp: !BROWSER_VERIFY.isIE && !!window.StyleMedia},
    EDGE_CHROMIUM: {
        id: 4,
        name: 'EDGE_CHROMIUM',
        exp: BROWSER_VERIFY.isChrome && (navigator.userAgent.indexOf("Edg") !== -1)
    },
    FIREFOX: {id: 5, name: 'FIREFOX', exp: typeof InstallTrigger !== 'undefined'},
    SAFARI: {
        id: 6, name: 'SAFARI', exp: /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification))
    },
    OPERA: {id: 7, name: 'OPERA', exp: BROWSER_VERIFY.isOpera},
    /*BLINK: {id: 8, name: 'BLINK', exp: (BROWSER_VERIFY.isChrome || BROWSER_VERIFY.isOpera) && !!window.CSS},*/
}

export default {
    textEquals(el, i, m) {
        console.log(el, i, m);
        const $el = document.querySelector(el);
        const searchText = m[3];
        let match = '';
        let tagName = $el.tagName;

        if (tagName === 'input' || tagName === 'textarea') {
            match = $el.value.trim().match("^" + searchText + "$");
        } else
            match = $el.textContent.trim().match("^" + searchText + "$");
        return match && match.length > 0;
    },
    _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            this._typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            this._typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return this._typeof(obj);
    },
    initMap(map, value) {
        for (let _len = arguments.length, para = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            para[_key - 2] = arguments[_key];
        }

        let segments = $.extend(true, [], para);
        let key = segments.pop();
        let ref = map;

        while (segments.length > 0) {
            let s = segments.shift();

            if (_typeof(ref[s]) !== 'object') {
                ref[s] = {};
            }

            ref = ref[s];
        }

        ref[key] = value;
    },
    getMap(map) {
        for (let _len2 = arguments.length, para = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            para[_key2 - 1] = arguments[_key2];
        }

        let segments = $.extend(true, [], para);
        let key = segments.pop();
        let ref = map;

        while (segments.length > 0) {
            let s = segments.shift();

            if (_typeof(ref[s]) != 'object') {
                return undefined;
            }

            ref = ref[s];
        }

        return ref[key];
    },
    // 돈 3자리 마다 ',' 리턴
    stringToDigits(s) {
        return s.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    gvfa(arr) {
        let userLang = (navigator.language || navigator.userLanguage).substring(0, 2);
        if (userLang !== 'ko') {
            userLang = 'ko';
        }
        let result = '';
        if (arr) {
            if (Array.isArray(arr)) {
                $.each(arr, function (i, v) {
                    if (v.startsWith(userLang)) {
                        result = v.replace(userLang, '');
                    }
                });
            } else if (typeof arr === 'string' || arr instanceof String) {
                if (arr.startsWith(userLang)) {
                    result = arr.replace(userLang, '');
                }
            }

        }
        return result;
    },
    /**
     * pad(10, 4) => 0010
     * pad(9, 4) => 0009
     * pad(123, 4) => 0123
     * pad(10, 4, '-') => --10
     * @param num
     * @param width
     * @param padData
     * @returns {string}
     */
    pad(num, width, padData) {
        padData = padData || '0';
        num = num + '';
        return num.length >= width ? num : new Array(width - num.length + 1).join(padData) + num;
    },
    phoneAddHypen(str) {
        if (!str)
            return str;
        str = str.trim();
        return str.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
    },
    /**
     * @function ARRAY_INDEX_EXIST(arr, index)
     * if(aie(arr, 3))
     * @returns {boolean }
     */
    aie(arr, idx) {
        return arr && typeof arr[idx] !== 'undefined' && arr[idx];
    }
}
