/**
 * Output the nth fibonacci number
 * @param {number} n - nth place
 * @returns {number}
 * */
function fibonacci(n, memo = new Map()) {
  if (n === 0 || n === 1) {
    return n
  }

  if (memo.has(n)) {
    return memo.get(n)
  }
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  memo.set(n, result)
  return result
}


function fibonacci2(n) {
  if (n === 0 || n === 1 ) {
    return 1
  }
  
  let a = 0
  let b = 1

  for (let i = 0; i < n; i++) {
    let temp = a
    a = b
    b = temp + a
  }
  return b
}


console.time('Time')
console.log(fibonacci2(0))
console.log(fibonacci2(1))
console.log(fibonacci2(2))
console.log(fibonacci2(3))
console.log(fibonacci2(4))
console.log(fibonacci2(5))
console.log(fibonacci2(6))
console.log(fibonacci2(7))
console.log(fibonacci2(8))
console.log(fibonacci2(9))
console.log(fibonacci2(10))
console.timeEnd('Time')