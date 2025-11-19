// require('./index.scss')
console.log('hello webpack!')

// 测试babel 
import('./index.scss')
import labelfn from './testlabel.js'
labelfn()
// 测试babel 


if (process.env.NODE_ENV === "development") {
    console.log("baseurl is localhost")
  } else {
    console.log("baseurl is imooc.com")
  }
  