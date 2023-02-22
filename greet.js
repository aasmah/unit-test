//First, Write a function called Greet(name) that takes an argument called name,
function greet(name) {
    //and returns a simple greeting message.For example,

    //Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.

    if (name == null) {
        return "Hello there!"
            // Next, Handle two names as input.If the name parameter is an array containing two names, then both names should be greeted.For example,
            //     if the input parameter is[‘Jose’, ’Pep’], the method should
            // return the string: “Hello, Jose, Pep”.
            // Finally, Handle an arbitrary number of names as input.If the name parameter is an array of multiple names, all names must be greeted.For example,
            //     if the input parameter is[‘Alex’, ’Arsene’, ’Jose’, ’Zidane’], the method should
            // return the string: “Hello, Alex, Arsene, Jose, Zidane”
            //this code handles both the arrays
    } else if (Array.isArray(name)) {
        let retVal = "Hello"
        for (let i = 0; i < name.length; i++) {
            retVal = retVal + ", " + name[i];
        }
        return retVal;
        //Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
        //keep upper case  code down here otherewise it keeps  reutrns this as final and test fails
    } else if (name === name.toUpperCase()) {
        return "HELLO " + name + "!";
    }
    return "Hello " + name + '!';
}
// connects the files  to test .
module.exports = greet;