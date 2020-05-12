/**
 * *@2020-5
 * *@author mikeYuan 
 */

module.exports = {
    plugins: {
      autoprefixer: {},
      "postcss-px2rem": {
        remUnit: 75, // 50px = 1rem
        remPrecision: 2 // rem的小数点后位数
      }
    }
   };