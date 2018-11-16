class TypeUtil {

    /**
     * 是否字符串
     * @param o
     * @returns {boolean}
     */
    isString(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'String'
    }

    /**
     * 是否数字
     * @param o
     * @returns {boolean}
     */
    isNumber(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
    }

    /**
     * 是否boolean
     * @param o
     * @returns {boolean}
     */
    isBoolean(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
    }

    /**
     * 是否函数
     * @param o
     * @returns {boolean}
     */
    isFunction(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
    }

    /**
     * 是否为null
     * @param o
     * @returns {boolean}
     */
    isNull(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
    }

    /**
     * 是否undefined
     * @param o
     * @returns {boolean}
     */
    isUndefined(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
    }

    /**
     * 是否对象
     * @param o
     * @returns {boolean}
     */
    isObj(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
    }

    /**
     * 是否数组
     * @param o
     * @returns {boolean}
     */
    isArray(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
    }

    /**
     * 是否时间
     * @param o
     * @returns {boolean}
     */
    isDate(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
    }

    /**
     * 是否正则
     * @param o
     * @returns {boolean}
     */
    isRegExp(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
    }

    /**
     * 是否错误对象
     * @param o
     * @returns {boolean}
     */
    isError(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
    }

    /**
     * 是否Symbol函数
     * @param o
     * @returns {boolean}
     */
    isSymbol(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
    }

    /**
     * 是否Promise对象
     * @param o
     * @returns {boolean}
     */
    isPromise(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
    }

    /**
     * 是否Set对象
     * @param o
     * @returns {boolean}
     */
    isSet(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
    }

    /**
     * 是否 false
     * @param o
     * @returns {boolean}
     */
    isFalse(o) {
        if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true
        return false
    }

    /**
     * 是否 true
     * @param o
     * @returns {boolean}
     */
    isTrue(o) {
        return !this.isFalse(o)
    }

}

module.exports = new TypeUtil();
