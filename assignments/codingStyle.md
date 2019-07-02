1. 🎖 Go through this resource [Coding Style](http://javascript.info/coding-style)

After going through the anove resource convert the code below to the proper code style structure.
```js
function pow(x,n)
{
let result=1;
for(let i=0;i<n;i++) {result*=x;}
return result;
}

let x=   prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
```

## Solution
```js
// your code goes here

function pow(x, n) {
  let result=1;
  for(let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ''), n = prompt("n?", '');
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert(pow(x,n));
}
```