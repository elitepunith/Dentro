/* DENTRO DATABASE - FINAL */

const DB = {
    javascript: {
        easy: [
            { q: "Output 'Hello' to console?", opts: ["print('Hello')", "console.log('Hello')", "echo('Hello')", "log.write('Hello')"], a: "console.log('Hello')", h: "It is a method of the console object.", e: "<code>console.log()</code> is the standard way to debug in JS." },
            { q: "Declare a constant variable?", opts: ["let x = 1", "var x = 1", "const x = 1", "constant x = 1"], a: "const x = 1", h: "Short for constant.", e: "<code>const</code> creates a reference that cannot be reassigned." },
            { q: "What does <code>===</code> check?", opts: ["Assignment", "Loose Equality", "Strict Equality", "Not Equal"], a: "Strict Equality", h: "Checks type and value.", e: "<code>===</code> checks if both value and type match, preventing type coercion." },
            { q: "Get array length?", opts: ["size", "length", "count", "len"], a: "length", h: "Full word.", e: "<code>array.length</code> returns the number of items in an array." },
            { q: "Logical AND operator?", opts: ["&&", "||", "&", "and"], a: "&&", h: "Double ampersand.", e: "<code>&&</code> returns true only if both operands are true." },
            { q: "Which symbol is for comments?", opts: ["//", "#", "<!--", "**"], a: "//", h: "Double slash.", e: "<code>//</code> starts a single line comment in JS." },
            { q: "Data type of <code>true</code>?", opts: ["String", "Boolean", "Object", "Number"], a: "Boolean", h: "True or False.", e: "True and False are <code>boolean</code> primitive values." },
            { q: "Add item to array end?", opts: ["push()", "pop()", "shift()", "add()"], a: "push()", h: "Push it in.", e: "<code>push()</code> adds elements to the end of an array." },
            { q: "Result of <code>typeof NaN</code>?", opts: ["number", "NaN", "undefined", "object"], a: "number", h: "Type coercion quirk.", e: "NaN is considered a numeric type in JavaScript." },
            { q: "Check if array?", opts: ["Array.isArray()", "typeof []", "isarray()", "checkArray()"], a: "Array.isArray()", h: "Static method.", e: "<code>Array.isArray()</code> correctly identifies arrays." }
        ],
        medium: [
            { q: "What is a Closure?", opts: ["Loop", "Function remembering scope", "Error", "Tag"], a: "Function remembering scope", h: "Memory of outer variables.", e: "Closures allow access to outer scope variables even after the outer function has returned." },
            { q: "Transform array elements?", opts: ["filter", "map", "reduce", "each"], a: "map", h: "Maps 1 to 1.", e: "<code>map()</code> creates a new array by applying a function to every element." },
            { q: "<code>JSON.stringify</code> does?", opts: ["Parse JSON", "Object to String", "Encrypt", "Compress"], a: "Object to String", h: "Makes it a string.", e: "Converts a JS object into a JSON string." },
            { q: "Filter an array?", opts: ["map()", "filter()", "slice()", "splice()"], a: "filter()", h: "Removes items based on condition.", e: "<code>filter()</code> creates a new array with elements that pass the test." },
            { q: "What is <code>this</code> in global scope?", opts: ["Window", "Document", "Function", "Null"], a: "Window", h: "The browser window.", e: "In global scope, <code>this</code> refers to the Window object (in browsers)." },
            { q: "Check if Not a Number?", opts: ["isNaN()", "isNumber()", "typeof", "checkNaN()"], a: "isNaN()", h: "is... N... N...", e: "<code>isNaN()</code> determines whether a value is NaN." },
            { q: "Convert string to integer?", opts: ["parseInt()", "toInteger()", "Number.int()", "parse()"], a: "parseInt()", h: "Parse Int.", e: "<code>parseInt()</code> parses a string argument and returns an integer." },
            { q: "Join array to string?", opts: ["join()", "concat()", "toString()", "combine()"], a: "join()", h: "Join together.", e: "<code>join()</code> concatenates all elements into a string." }
        ],
        hard: [
            { q: "Event Loop role?", opts: ["Render UI", "Handle Async Callbacks", "Compile Code", "Manage Database"], a: "Handle Async Callbacks", h: "Queue manager.", e: "It moves async callbacks from the callback queue to the call stack." },
            { q: "Does <code>const</code> make objects immutable?", opts: ["Yes", "No", "Only Arrays", "Sometimes"], a: "No", h: "Can you change properties?", e: "<code>const</code> prevents reassignment, but object properties can still be changed." },
            { q: "What is a Promise?", opts: ["Sync function", "Object representing async completion", "Loop", "Error handler"], a: "Object representing async completion", h: "Future value.", e: "A Promise represents the eventual completion of an async operation." },
            { q: "Purpose of <code>'use strict'</code>?", opts: ["Run faster", "Enforce stricter parsing", "Use new syntax", "Debug mode"], a: "Enforce stricter parsing", h: "Catches silent errors.", e: "<code>'use strict'</code> prevents using undeclared variables and other unsafe actions." },
            { q: "Prevent object modification?", opts: ["Object.freeze()", "Object.seal()", "const", "Object.lock()"], a: "Object.freeze()", h: "Frozen solid.", e: "<code>Object.freeze()</code> prevents new properties from being added or existing ones removed." },
            { q: "Generator function syntax?", opts: ["function*", "gen()", "*function", "yield func"], a: "function*", h: "Star symbol.", e: "Generators are defined using the <code>function*</code> syntax." }
        ]
    },
    python: {
        easy: [
            { q: "Print to screen?", opts: ["console.log()", "print()", "echo", "printf()"], a: "print()", h: "Simple verb.", e: "<code>print()</code> is the standard output function." },
            { q: "Comment symbol?", opts: ["//", "/*", "#", "--"], a: "#", h: "Hashtag.", e: "<code>#</code> starts a single line comment." },
            { q: "Create a list?", opts: ["()", "[]", "{}", "<>"], a: "[]", h: "Square brackets.", e: "Lists use square brackets <code>[]</code>." },
            { q: "Boolean True?", opts: ["true", "True", "1", "yes"], a: "True", h: "Capitalized.", e: "Python uses <code>True</code> (capitalized)." },
            { q: "Check length?", opts: ["size()", "count()", "length()", "len()"], a: "len()", h: "Three letters.", e: "<code>len()</code> returns the number of items." },
            { q: "Exponent operator?", opts: ["^", "**", "exp", "pow"], a: "**", h: "Double star.", e: "<code>**</code> is used for power calculations (e.g. 2**3)." },
            { q: "Start if statement?", opts: ["if x:", "if (x) {}", "if x then", "check x:"], a: "if x:", h: "Colon at end.", e: "Python uses <code>if condition:</code> syntax." },
            { q: "Logical AND?", opts: ["&&", "and", "&", "plus"], a: "and", h: "English word.", e: "Python uses the word <code>and</code> for logical operations." }
        ],
        medium: [
            { q: "Define a function?", opts: ["func", "def", "function", "lambda"], a: "def", h: "Short for define.", e: "Use <code>def name():</code> to create functions." },
            { q: "Dictionary brackets?", opts: ["[]", "()", "{}", "<>"], a: "{}", h: "Curly.", e: "Dictionaries use curly braces <code>{}</code> for key-value pairs." },
            { q: "<code>range()</code> returns?", opts: ["List", "Sequence of numbers", "Random number", "Array"], a: "Sequence of numbers", h: "0, 1, 2...", e: "<code>range()</code> returns an immutable sequence of numbers." },
            { q: "Immutable list is called?", opts: ["Tuple", "Set", "Dictionary", "Array"], a: "Tuple", h: "Starts with T.", e: "Tuples are ordered and unchangeable." },
            { q: "Import a module?", opts: ["include", "require", "import", "using"], a: "import", h: "Bring it in.", e: "The <code>import</code> statement is used to bring in modules." },
            { q: "Get user input?", opts: ["get()", "input()", "read()", "scan()"], a: "input()", h: "Standard input.", e: "<code>input()</code> reads a line from input and returns a string." },
            { q: "What does <code>pass</code> do?", opts: ["Nothing", "Skip loop", "Return true", "Exit"], a: "Nothing", h: "Placeholder.", e: "<code>pass</code> is a null statement used as a placeholder." },
            { q: "Remove item from list?", opts: ["delete()", "remove()", "discard()", "erase()"], a: "remove()", h: "Remove value.", e: "<code>list.remove(x)</code> removes the first item with value x." }
        ],
        hard: [
            { q: "What is GIL?", opts: ["Global Interpreter Lock", "Graphics Lib", "General Loop", "Game Interface"], a: "Global Interpreter Lock", h: "Threading limit.", e: "GIL prevents multiple native threads from executing Python bytecodes at once." },
            { q: "Decorator symbol?", opts: ["&", "#", "@", "$"], a: "@", h: "At sign.", e: "Decorators use <code>@</code> syntax to wrap functions." },
            { q: "List comprehension syntax?", opts: ["[x for x in list]", "list.map(x)", "for x in list return x", "loop(list)"], a: "[x for x in list]", h: "Inside brackets.", e: "List comprehensions provide concise syntax for creating lists." },
            { q: "<code>__init__</code> is?", opts: ["Destructor", "Constructor", "Import", "Stringify"], a: "Constructor", h: "Initializes object.", e: "<code>__init__</code> is called when an object is created." },
            { q: "What is <code>self</code>?", opts: ["Global var", "Instance reference", "Static method", "Parent class"], a: "Instance reference", h: "Me, myself.", e: "<code>self</code> represents the instance of the class." },
            { q: "Lambda function?", opts: ["Anonymous function", "Named function", "Class", "Module"], a: "Anonymous function", h: "One line function.", e: "<code>lambda</code> creates small anonymous functions." }
        ]
    },
    css: {
        easy: [
            { q: "Change text color?", opts: ["text-color", "font-color", "color", "fg-color"], a: "color", h: "Just one word.", e: "The <code>color</code> property sets the color of the text." },
            { q: "Select element with ID?", opts: [".", "#", "*", "@"], a: "#", h: "Hashtag.", e: "<code>#</code> is used to select elements by ID." },
            { q: "Make text bold?", opts: ["font-weight: bold", "style: bold", "font: bold", "text: bold"], a: "font-weight: bold", h: "Weight of the font.", e: "<code>font-weight</code> controls the thickness of text." },
            { q: "Space outside border?", opts: ["padding", "spacing", "margin", "gap"], a: "margin", h: "Push others away.", e: "Margin is the space outside the border." },
            { q: "Space inside border?", opts: ["margin", "padding", "inset", "gap"], a: "padding", h: "Inner cushion.", e: "Padding is the space inside the border." },
            { q: "Select class name?", opts: ["#", ".", "$", "&"], a: ".", h: "Dot.", e: "<code>.</code> is used to select elements by class." },
            { q: "CSS stands for?", opts: ["Cascading Style Sheets", "Creative Style System", "Code Style Sheets", "Colorful Style Sheets"], a: "Cascading Style Sheets", h: "Waterfall.", e: "CSS = Cascading Style Sheets." },
            { q: "Change background color?", opts: ["bg-color", "background-color", "color-bg", "background"], a: "background-color", h: "Full name.", e: "<code>background-color</code> sets the background." }
        ],
        medium: [
            { q: "Flexbox axis direction?", opts: ["flex-flow", "flex-direction", "grid-template", "align-items"], a: "flex-direction", h: "Row or Column.", e: "<code>flex-direction</code> defines the direction items are placed." },
            { q: "Z-index works on?", opts: ["Static elements", "Positioned elements", "All elements", "Text only"], a: "Positioned elements", h: "Not static.", e: "<code>z-index</code> only works on positioned elements." },
            { q: "Responsive design query?", opts: ["@media", "@screen", "@responsive", "@size"], a: "@media", h: "Media types.", e: "<code>@media</code> rules apply styles based on viewport size." },
            { q: "Remove underline from link?", opts: ["text-decoration: none", "style: no-line", "link: plain", "font-style: normal"], a: "text-decoration: none", h: "Decoration.", e: "<code>text-decoration: none</code> removes underlines." },
            { q: "Unit relative to font-size?", opts: ["px", "em", "vh", "cm"], a: "em", h: "Rhymes with M.", e: "<code>em</code> is relative to the font-size of the element." },
            { q: "Center text?", opts: ["text-align: center", "align: center", "center-text: true", "font-align: center"], a: "text-align: center", h: "Align text.", e: "<code>text-align: center</code> centers inline content." },
            { q: "Rounded corners?", opts: ["border-radius", "corner-radius", "round-border", "edge-curve"], a: "border-radius", h: "Radius of border.", e: "<code>border-radius</code> adds rounded corners." },
            { q: "Make font italic?", opts: ["font-style: italic", "text-style: italic", "font: italic", "italic: true"], a: "font-style: italic", h: "Style.", e: "<code>font-style: italic</code> italicizes text." }
        ],
        hard: [
            { q: "Specificity of ID?", opts: ["1", "10", "100", "1000"], a: "100", h: "Higher than class.", e: "IDs have a specificity weight of 100." },
            { q: "Grid gap property?", opts: ["spacing", "gutter", "gap", "margin"], a: "gap", h: "Short word.", e: "<code>gap</code> sets the space between rows and columns in grid/flex." },
            { q: "Hide element but keep space?", opts: ["display: none", "visibility: hidden", "opacity: 0", "z-index: -1"], a: "visibility: hidden", h: "Invisible but there.", e: "<code>visibility: hidden</code> hides it but it still takes up layout space." },
            { q: "Default position value?", opts: ["relative", "absolute", "fixed", "static"], a: "static", h: "Unmoved.", e: "HTML elements are positioned <code>static</code> by default." },
            { q: "Box-sizing recommended?", opts: ["content-box", "border-box", "padding-box", "margin-box"], a: "border-box", h: "Includes border/padding.", e: "<code>border-box</code> includes padding and border in the element's total width/height." },
            { q: "Select direct children?", opts: [">", "+", "~", "child"], a: ">", h: "Greater than.", e: "<code>></code> selects only direct children." }
        ]
    },
    java: {
        easy: [
            { q: "Print to console?", opts: ["print()", "System.out.println()", "console.log()", "echo"], a: "System.out.println()", h: "System out...", e: "<code>System.out.println()</code> prints text to the console." },
            { q: "Main method signature?", opts: ["public static void main", "void main", "static public main", "main()"], a: "public static void main", h: "PSVM.", e: "It must be <code>public static void main</code>." },
            { q: "Variable type for text?", opts: ["String", "Char", "Text", "Word"], a: "String", h: "Capital S.", e: "<code>String</code> is the class used to store text." },
            { q: "End a statement?", opts: [".", ";", ":", "!"], a: ";", h: "Semicolon.", e: "Java statements must end with a semicolon." },
            { q: "Integer type?", opts: ["num", "int", "float", "number"], a: "int", h: "Short for integer.", e: "<code>int</code> is the primitive type for integers." },
            { q: "Boolean values?", opts: ["true/false", "0/1", "yes/no", "T/F"], a: "true/false", h: "Lowercase.", e: "Java booleans are <code>true</code> or <code>false</code>." },
            { q: "Comment syntax?", opts: ["//", "#", "<!--", "--"], a: "//", h: "Double slash.", e: "<code>//</code> starts a comment." },
            { q: "Loop for fixed iterations?", opts: ["for", "while", "do-while", "repeat"], a: "for", h: "Standard loop.", e: "<code>for</code> loops are best for fixed iteration counts." }
        ],
        medium: [
            { q: "Create an object?", opts: ["new", "create", "make", "init"], a: "new", h: "New instance.", e: "The <code>new</code> keyword creates a new object instance." },
            { q: "Inheritance keyword?", opts: ["inherits", "extends", "implements", "uses"], a: "extends", h: "Extend functionality.", e: "<code>extends</code> is used to inherit from a class." },
            { q: "Interface keyword?", opts: ["extends", "implements", "using", "interface"], a: "implements", h: "Implement contract.", e: "<code>implements</code> is used to use an interface." },
            { q: "Private access means?", opts: ["Visible everywhere", "Visible only in class", "Visible in package", "Protected"], a: "Visible only in class", h: "Restricted.", e: "<code>private</code> members are only accessible within the same class." },
            { q: "Array size property?", opts: ["size", "length", "count", "len"], a: "length", h: "Not a method.", e: "Arrays use the <code>.length</code> property (no parentheses)." },
            { q: "String length method?", opts: ["length()", "size()", "count()", "len()"], a: "length()", h: "Is a method.", e: "Strings use the <code>.length()</code> method." },
            { q: "Equality operator for primitives?", opts: ["==", "equals()", "===", "same()"], a: "==", h: "Double equals.", e: "<code>==</code> compares values of primitives." },
            { q: "Logical OR?", opts: ["||", "or", "&", "&&"], a: "||", h: "Double pipe.", e: "<code>||</code> represents logical OR." }
        ],
        hard: [
            { q: "JVM stands for?", opts: ["Java Variable Method", "Java Virtual Machine", "Just Virtual Mode", "Java Visual Model"], a: "Java Virtual Machine", h: "Virtual Machine.", e: "JVM executes Java bytecode." },
            { q: "Compare strings?", opts: ["==", "equals()", "===", "compare()"], a: "equals()", h: "Method, not operator.", e: "Use <code>.equals()</code> to compare String content." },
            { q: "Static belongs to?", opts: ["Object", "Class", "Method", "Package"], a: "Class", h: "Shared.", e: "<code>static</code> members belong to the class, not specific instances." },
            { q: "ArrayList vs Array?", opts: ["ArrayList is resizable", "Array is faster", "ArrayList is primitive", "Same"], a: "ArrayList is resizable", h: "Dynamic.", e: "<code>ArrayList</code> can grow and shrink dynamically." },
            { q: "Try-Catch is for?", opts: ["Loops", "Exception Handling", "Networking", "Compilation"], a: "Exception Handling", h: "Catching errors.", e: "Try-Catch blocks handle runtime exceptions." },
            { q: "Keyword for constant?", opts: ["const", "final", "static", "fixed"], a: "final", h: "Final decision.", e: "<code>final</code> variables cannot be reassigned." }
        ]
    }
};

// Helper function to safely get questions
function getQuestions(lang, diff) {
    if (DB[lang] && DB[lang][diff]) return DB[lang][diff];
    return DB.javascript.easy; // Fallback
}