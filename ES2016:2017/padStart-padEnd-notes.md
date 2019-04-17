# padStart
- pad or place a certain char a number of times before a string
- first param is the total length of new string, second param is what to pad with FROM THE START - default pad item is empty space
- ex: "awesome".padStart(10, '!'); //!!!awesome

# padEnd
- pad or place a certain char a number times at END of string
- first param is the total length of new string, second param is what to pad with FROM THE END - default pad item is empty space
- ex: "awesome".padEnd(10, '!');  //awesome!!!

- When would you use these? This is good when you need to make sure that strings are all of a uniform length.
- There's a good example of WHY this sort of thing was necessary to be found in the aftermath of the left-pad fiasco: (https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)[Left-pad and NPM]
