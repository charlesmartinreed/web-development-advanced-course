var firstName = "Elie"
var lastName = "Schoppik"

var greeting = "Hello " + firstName + " " + lastName;

- Becomes, this in ES2015
var greeting = `Hello, ${firstName} ${lastName}`;

- Template strings are also useful for creating multiline strings

`
This
is
an
example of
a multiline string
`

- Notice the use of backticks, ``, to open and close template strings
