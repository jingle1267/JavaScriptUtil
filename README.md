## JavaScript 常用工具类

| 工具类     | 简介               |
| ---------- | ------------------ |
| ArrayUtil  | 数据常用操作       |
| Base64Util | base64加解密       |
| DataUtil   | 日期相关操作       |
| CookieUtil | cookie 相关操作    |
| DeviceUtil | 设备浏览器相关信息 |
| URLUtil    | URL 相关操作       |
|            |                    |
|            |                    |
|            |                    |
|            |                    |
|            |                    |



### 1. Array 工具里常用方法

```
npm install com.ihongqiqu.js.array
```

| ArrayUtil 中方法名     | 功能介绍                                             |
| ---------------------- | ---------------------------------------------------- |
| contains (arr, val)    | 判断一个元素是否在数组中                             |
| each (arr, fn)         | 遍历数组                                             |
| map (arr, fn, thisObj) | 数组遍历                                             |
| sort (arr, type = 1)   | 数组排序，{type} 1：从小到大   2：从大到小   3：随机 |
| unique (arr)           | 去重                                                 |
| union (a, b)           | 求两个集合的并集                                     |
| intersect (a, b)       | 求两个集合的交集                                     |
| remove (arr, ele)      | 删除其中一个元素                                     |
| formArray (ary)        | 将类数组转换为数组的方法                             |
| max (arr)              | 最大                                                 |
| min (arr)              | 最小值                                               |
| sum (arr)              | 求和                                                 |
| average (arr)          | 平均值                                               |


### 2. Base64 加解密

```
npm install com.ihongqiqu.js.base
```

| Base64Util 中方法名     | 功能介绍                                             |
| ---------------------- | ---------------------------------------------------- |
| encode (input)         | Base64 加密                                         |
| decode (input)         | Base64 解密                                         |


