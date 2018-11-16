### DateUtil 工具里常用方法

```
npm install com.ihongqiqu.js.date
```

```javascript
    /**
     * 格式化时间
     *
     * @param  {time} 时间
     * @param  {cFormat} 格式
     * @return {String} 字符串
     *
     * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
     */
    formatTime(time, cFormat)

    /**
     * 返回指定长度的月份集合
     *
     * @param  {time} 时间
     * @param  {len} 长度
     * @param  {direction} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
     * @return {Array} 数组
     *
     * @example   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
     */
    getMonths(time, len, direction)

    /**
     * 返回指定长度的天数集合
     *
     * @param  {time} 时间
     * @param  {len} 长度
     * @param  {direction} 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
     * @return {Array} 数组
     *
     * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
     */
    getDays(time, len, diretion)

    /**
     * @param  {s} 秒数
     * @return {String} 字符串
     *
     * @example formatHMS(3610) // -> 1h0m10s
     */
    formatHMS (s)

    /**
     * 获取某月有多少天
     * @param time
     * @returns {number}
     */
    getMonthOfDay (time)

    /**
     * 获取某年有多少天
     * @param time
     * @returns {number}
     */
    getYearOfDay (time)

    /**
     * 获取某年的第一天
     * @param time
     * @returns {string}
     */
    getFirstDayOfYear (time)

    /**
     * 获取某年最后一天
     * @param time
     * @returns {string}
     */
    getLastDayOfYear (time)

    /**
     * 获取某个日期是当年中的第几天
     * @param time
     * @returns {number}
     */
    getDayOfYear (time)

    /**
     * 获取某个日期在这一年的第几周
     * @param time
     * @returns {number}
     */
    getDayOfYearWeek (time)

```