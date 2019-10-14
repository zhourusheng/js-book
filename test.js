var obj = {
  p1: 123,
  p2: 456
}

// Object.keys() 只返回可枚举的属性
const res = Object.keys(obj)

// Object.getOwnPropertyNames() 方法既返回
const res2 = Object.getOwnPropertyNames(obj)

console.log(res)
console.log(res2)