# Explanation


The short version is: if an object is being coerced into a primitive value (boolean, number, string), and contains a method called valueOf, that method is called and the result is used in place of the object.

For example, if you have this:

```sh
var o = { a: 1 };
console.log( o + 1 );
```

The default action taken by the JS engine would be to turn o into the string "[object Object]", and then add 1 to it, resulting in the string "[object Object]1".

Now, if we added a method valueOf, like so:

```sh
var o = { a: 1, valueOf: function() { return this.a } };
console.log( o + 1 );
```

Now the JS engine will see that valueOf exists on the object, and call that. In this case, we return the value of a on the object, and the output becomes 2.

This can be useful in simulating value-types, which JS does not have, so that we can perform simple arithmetic or logic operations on more complex data structures. That being said, I think it's very rarely used in practice, because it's better to have an explicit method, rather than relying on coercion to convert an object. (For example, we might have an object that is used to calculate a running average. Rather than using valueOf to get the current average, it's far clearer to have a method called getAverage()).

---

The other part is how we're using it on the returned method here. So, Functions in JavaScript are also objects, and can have properties and methods added to them, just like normal objects.

What happens in this answer is we return a new, anonymous function that can be used to add the previous value (n) and the new value (x). We also add a valueOf method to the anonymous function, which returns the previous value.

So, if we have code that looks like this:

```sh
var n1 = add(1); // n1 is a Function, but also has a valueOf property
var n2 = n1(2);  // ditto for n2
```

We can coerce the n1 and n2 functions into values by using them in an arithmetic or logical expression, like so:

```sh
console.log( 0 + n1 ) // => 0 + n1.valueOf() => 0 + 1 => 1
console.log( 0 + n2 ) // => 0 + n2.valueOf() => 0 + (1+2) => 3
```

Hoefully that helps a little.