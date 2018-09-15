# JavaScriptUtil

JS常用工具类



### 1. Array工具里常用方法

```javascript
	/*
     * 判断一个元素是否在数组中
     */
    contains (arr, val) 

    /**
     * @param  {arr} 数组
     * @param  {fn} 回调函数
     * @return {undefined}
     */
    each (arr, fn)

    /**
     * @param  {arr} 数组
     * @param  {fn} 回调函数
     * @param  {thisObj} this指向
     * @return {Array} 
     */
    map (arr, fn, thisObj)

    /**
     * @param  {arr} 数组
     * @param  {type} 1：从小到大   2：从大到小   3：随机
     * @return {Array}
     */
    sort (arr, type = 1) 

    /*
     * 去重
    */
    unique (arr)

    /*
     * 求两个集合的并集
     */
    union (a, b) 

    /*
     * 求两个集合的交集
     */
    intersect (a, b)

    /*
     * 删除其中一个元素
     */
    remove (arr, ele)

    /*
     * 将类数组转换为数组的方法
     */
    formArray (ary) 

    /*
     * 最大
     */
    max (arr) 

    /*
     * 最小值
     */
    min (arr) 

    /*
     * 求和
     */
    sum (arr) 

    /*
     * 平均值
     */
    average (arr) 
```

