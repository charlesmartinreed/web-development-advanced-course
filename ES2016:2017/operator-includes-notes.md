#Exponentiation Operator

- Before ES2016, we got exponents by adding Math.pow(2, 4) // 16
- ES2016 adds '**'operator
- 2 ** 4, or 2 to the 4th
- You can also use the exponentiation sign as you would +=, -=, *=, etc. It is **=

ex:
for (let i=0; i < nums.length; i++) {
total **= nums[i];
}

#Includes

- Int ES2016, arrays got the include method that was previously added in ES2015 for the string method
- Good replacement for using indexOf since it directly returns a boolean
