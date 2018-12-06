# Explanation

```sh
c += ~~a.pop() + ~~b.pop()
```

It's a double [bitwise not operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT).

What is going on:

- When an array becomes empty, .pop() returns undefined.
- When performing a bitwise operation, operand is converted by ToInt32:
- ToNumber for undefined returns NaN.
- If number is NaN, +0, −0, +∞, or −∞, ToInt32 returns +0.
- Bitwise NOTing any number x yields -(x + 1), so ~0 return -1.
- ~-1 returns 0.