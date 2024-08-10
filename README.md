# JSNAD
OpenJS Node.js Application Developer certification

- 💰 $395
- ⚙️ Hands-on Practical Lab (Online)
- 🪪 Passport ID with English text
- ⌛ Duration of Exam 2 hours
- 💯 68% or above must be earned to pass

## [official documentation OpenJS Resources Allowed.](https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed#openjs-node.js-application-developer-jsnad-and-openjs-node.js-services-developer-jsnsd)

## Domains & Competencies
- [x] Buffer and Streams
- [ ] Control flow
- [ ] Child Processes
- [ ] Diagnostics
- [ ] Error Handling
- [ ] Node.js CLI
- [ ] Events
- [ ] File System
- [ ] JavaScript Prerequisites
- [ ] Module system
- [ ] Process/Operating System
- [ ] Package.json
- [ ] Unit Testing

### Buffer and Streams


### Downloading Node 
❌ Downloading Node with package managers can lag behind and cause compatibility problems (i.e. Brew for MacOS)<br>
❌ Another significant issue with installing Node.js via an OS package manager is that installing global modules with Node's module installer (npm) tends to require the use of `sudo` (a command which grants root privileges)<br>
✅ Use Node version manager (nvm) `nvm install 20`

❔ Aside from the Node binary, what else does a Node installation provide?
 A module package manager 

## ▶︎ Node Binary 

### Command options
To see all Node command line flags for any version of Node, execute `node --help` and view the output. Beyond the Node command line flags there are additional flags for modifying the JavaScript runtime engine: V8. To view these flags run `node --v8-options`.

Check syntax using `--check or -c flag` (i.e. `node --check app.js`)

### Evaluate node in shell
Node can directly evaluate code from the shell. The `-p` or `--print` flag evaluates an expression and prints the result, the `-e` or `--eval` flag evaluates without printing the result of the expression.

The following will print 2:

`node --print "1+1"`

The following will not print anything because the expression is evaluated but not printed:

`node --eval "1+1"`

### Accessing modules
Usually a module would be required, like so: `require('fs')`, however all Node core modules can be accessed by their namespaces within the code evaluation context.

For example, the following would print all the files with a .js extension in the current working directory in which the command is run:

node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"

### Stack Trace Limit
Set stack trace limit like `node --stack-trace-limit=99999 app.js`

Generally, the stack trace limit should stay at the default in production scenarios due to the overhead involved with retaining long stacks. It can nevertheless be useful for development purposes.

❔ Which flag allows a CommonsJS module to be preloaded? `-r` or `--require`

## ▶︎ Debugging and diagnostics 

### Inspect Mode 
Inspect mode can be enabled with the --inspect flag:

`node --inspect app.js`

For most cases however, it is better to cause the process to start with an active breakpoint at the very beginning of the program using the --inspect-brk flag:

`node --inspect-brk app.js` --> execution is paused at the first line of executable code (like function call below)

![image](https://github.com/malwoodsantoro/jsnad-study-guide/assets/19801577/5e1ae698-0c76-4b8d-81ef-d7cd046afdf6)

More debugging info: https://nodejs.org/en/guides/debugging-getting-started

### Breaking on Error
The "Pause on exceptions" feature can be used to automatically set a breakpoint at the line where an error is thrown

### Adding a Breakpoint in Devtools
Clicking the blue play button in the right column will cause program execution to resume, the f function will be called and the runtime will pause on line 3:

![image](https://github.com/malwoodsantoro/jsnad-study-guide/assets/19801577/94ebcf26-402d-4118-92e8-de8b8d95caa0)

### Adding a Breakpoint in Code

The debugger statement can be used to explicitly pause on the line that the statement appears when debugging.

```
function f (n = 99) {
  if (n === 0) throw Error()
  debugger
  f(n - 1)
}
f()
```

💭 _When not debugging, these debugger statements are ignored, however due to noise and potential performance impact it is not good practice to leave debugger statements in code._

❔What keyword can be used within the code of a program to cause the process to pause on a specific line when in debug mode? `debugger`<br>
❔In order to set a breakpoint on the first line of execution when entering debug mode, which flag should be used? `--inspect-brk`

## ▶︎ Key Javascript concepts
### Data types

**LOOSELY** typed language - meaning that variable types are not strictly enforced, allowing for dynamic and flexible variable assignments without explicit type declarations. 

JavaScript 7️⃣ primitives are as follows:

- null - deliberate assignment to indicate the absence of a meaningful value
- undefined - any variable initialized without a value 
- Number: 1, 1.5, -1e4, NaN
- BigInt: 1n, 9007199254740993n
- String: 'str', "str", `str ${var}`
- Boolean: true, false
- Symbol: Symbol('description'), Symbol.for('namespace')

Other than that, absolutely everything else in JavaScript is an **object**.

All JavaScript objects have **prototypes**. A prototype is an implicit reference to another object that is queried in property lookups. If an object doesn't have a particular property, the object's prototype is checked for that property. If the object's prototype does not have that property, the object's prototype's prototype is checked and so on.

### Functions 

A function can be assigned to an object:

```
const obj = { id: 999, fn: function () { console.log(this.id) } }
obj.fn() // prints 999
```
When a function is assigned to an object, when the implicit **this** keyword is accessed within that function it will refer to the object on which the function was called. This is why obj.fn() outputs 999. 

Functions have a **call** method that can be used to set their this context:

```
function fn() { console.log(this.id) }
const obj = { id: 999 }
const obj2 = { id: 2 }
fn.call(obj2) // prints 2
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)
```

In this case the fn function wasn't assigned to any of the objects, this was set dynamically via the **call** function.

### Functional prototypal inheritance 

The functional approach to creating prototype chains is to use **Object.create**:

```
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
  name: {value: 'Rufus the dog'}
})

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

To describe the full prototype chain:

    - the prototype of rufus is dog
    - the prototype of dog is wolf
    - the prototype of wolf is Object.prototype.

### Constructor function prototypal inheritance 

The Constructor approach to creating a prototype chain is to define properties on a function's prototype object and then call that function with new. 

```
function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo');
};

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

// Set Dog's prototype to a new instance of Wolf
Dog.prototype = new Wolf();

Dog.prototype.constructor = Dog;

Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"
```

### Class constructors

With the introduction of ES6, JavaScript now supports class syntax for defining constructors and inheritance. Here's how the example would look using class constructors:

```
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method added to Animal class
  sayName() {
    console.log("My name is " + this.name);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name) {
    super(name + " the dog");
  }

  // Method specific to Dog class
  bark() {
    console.log(this.name + ": woof");
  }
}

// Create an instance of Dog
const rufus = new Dog("Rufus");

// Call methods on the instance
rufus.sayName(); // Output: "My name is Rufus the dog"
rufus.bark();    // Output: "Rufus the dog: woof"

```

### Closure scope 

When a function is created, an invisible object called closure scope is also created.Parameters and variables within the function are stored in this closure scope object.

```
function outerFn() {
  var foo = true;
  function innerFn() {
    console.log(foo); // Accesses foo from the closure scope of outerFn
  }
  innerFn();
}
outerFn(); // Output: true
```

If there's a naming collision, the reference to the nearest closure scope takes precedence over outer scopes.

```
function outerFn() {
  var foo = true;
  function innerFn(foo) {
    console.log(foo); // Accesses foo parameter of innerFn
  }
  innerFn(1); // Output: 1
}
outerFn();
```

## Packages & Dependencies

### Initializing a package

A package in Node.js is essentially a folder containing a package.json file along with the project's code. The npm init command is used to quickly create a package.json file in the current directory. Running npm init initiates a CLI wizard prompting for package information.

The generated package.json file includes default fields such as name, version, description, main file, scripts, keywords, author, and license.
These fields provide essential metadata about the package, including its purpose, entry point, and licensing information.

### Installing dependencies 

Once a folder has a package.json file, dependencies can be installed using the npm install command followed by the package name.
For example, `npm install pino` installs the pino logger package.

Running `npm install` modifies the package.json file by adding a "dependencies" field containing the installed package and its version.
This field specifies the package namespace as the key and the Semver range version number as the value.

The package-lock.json file is generated when dependencies are installed, containing a map of all dependencies with their exact versions.

### Development dependencies 

Running npm install without any flags automatically saves the dependency to the package.json file's "dependencies" field. Some dependencies are required for production, while others are development tools to support the development process. Development dependencies are specified in the package.json file under the "devDependencies" field.

### Semver 

`"pino": "^8.14.1"` denotes the pino dependency with a compatible version range starting from 8.14.1   (MAJOR, MINOR, PATCH)

 (MAJOR, MINOR, PATCH) 

The caret (^) prefix indicates compatibility with the specified MAJOR version (4) and any higher MINOR and PATCH versions within the same major version.

## Node's Module system 
| Feature                 | CommonJS (CJS)         | ECMAScript Modules (ESM) |
|-------------------------|------------------------|---------------------------|
| Import Syntax           | `require('module')`    | `import module from 'module'` |
| Asynchronous Loading    | Synchronous            | Asynchronous              |
| Default Export Handling | Not Supported          | Supported                 |
| Named Export Handling   | Supported              | Supported                 |
| Dynamic Imports         | Not Supported          | Supported                 |
| File Extension          | `.js`                  | `.mjs`                    |
| Top-level Scope         | No Top-level Scope     | Top-level Scope           |
| Static Analysis         | Not Easily Analyzed    | Easily Analyzed            |
| Circular Dependencies   | Resolves Synchronously| Resolves Asynchronously |

### Asynchronous Control Flow

## Callbacks 

Functions passed as arguments to other functions and executed at a later time, typically after an asynchronous task is completed. 

```
const { readFile } = require('fs');

// Define the callback function
const print = (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
};

// Call the readFile function with the callback
readFile(__filename, print);
```

Executing asynchronous tasks in sequence

```
const { readFile } = require('fs');

// Define the files to read
const files = ['bigFile.txt', 'mediumFile.txt', 'smallFile.txt'];
const data = [];

// Recursive function for serial execution
const read = (index) => {
  if (index < files.length) {
    readFile(files[index], (err, contents) => {
      if (err) {
        console.error(err);
        return;
      }
      data.push(contents);
      read(index + 1); // Call read recursively for the next file
    });
  } else {
    console.log(Buffer.concat(data).toString()); // Print concatenated contents
  }
};

// Start serial execution
read(0);
```