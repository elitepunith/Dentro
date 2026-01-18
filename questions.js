/* DENTRO DATABASE - 5 QUESTIONS PER LEVEL */

const DB = {
    // ==========================================
    // JAVASCRIPT
    // ==========================================
    javascript: {
        easy: [
            { q: "Output 'Hello' to console?", opts: ["print()", "console.log()", "echo()", "log()"], a: "console.log()", h: "Console method.", e: "<code>console.log()</code> is the standard way to debug in JS." },
            { q: "Declare a constant?", opts: ["let", "var", "const", "fixed"], a: "const", h: "Short for constant.", e: "<code>const</code> creates a reference that cannot be reassigned." },
            { q: "What does <code>===</code> check?", opts: ["Value only", "Type only", "Value and Type", "Memory address"], a: "Value and Type", h: "Strict equality.", e: "<code>===</code> checks if both value and type match." },
            { q: "Get array length?", opts: ["size", "count", "length", "len"], a: "length", h: "Full word.", e: "<code>array.length</code> returns the item count." },
            { q: "Comment symbol?", opts: ["//", "#", "<!--", ";"], a: "//", h: "Double slash.", e: "<code>//</code> starts a single line comment." }
        ],
        medium: [
            { q: "What is a Closure?", opts: ["A loop", "Function remembering scope", "Error type", "Tag"], a: "Function remembering scope", h: "Memory.", e: "Closures allow access to outer scope variables after return." },
            { q: "Transform array items?", opts: ["filter", "map", "reduce", "each"], a: "map", h: "1 to 1 mapping.", e: "<code>map()</code> creates a new array by applying a function to elements." },
            { q: "Check for NaN?", opts: ["isNaN()", "checkNaN()", "isNumber()", "typeof"], a: "isNaN()", h: "Is Not a Number.", e: "<code>isNaN()</code> determines whether a value is NaN." },
            { q: "Convert object to JSON?", opts: ["JSON.parse", "JSON.stringify", "JSON.object", "JSON.to"], a: "JSON.stringify", h: "Make string.", e: "<code>JSON.stringify()</code> converts a JS object to a JSON string." },
            { q: "Filter array items?", opts: ["map", "filter", "slice", "splice"], a: "filter", h: "Remove unwanted.", e: "<code>filter()</code> creates a new array with elements that pass a test." }
        ],
        hard: [
            { q: "Event Loop role?", opts: ["Render UI", "Handle Async Callbacks", "Compile Code", "Manage DB"], a: "Handle Async Callbacks", h: "Queue manager.", e: "It moves async callbacks from queue to stack." },
            { q: "Does <code>const</code> freeze objects?", opts: ["Yes", "No", "Only Arrays", "Sometimes"], a: "No", h: "Properties change.", e: "<code>const</code> prevents reassignment, but properties can change." },
            { q: "What is a Promise?", opts: ["Sync function", "Async completion object", "Loop", "Error"], a: "Async completion object", h: "Future value.", e: "A Promise represents the eventual completion of an async operation." },
            { q: "Prevent object changes?", opts: ["Object.freeze()", "Object.lock()", "const", "Object.stop()"], a: "Object.freeze()", h: "Ice.", e: "<code>Object.freeze()</code> prevents adding or removing properties." },
            { q: "Generator syntax?", opts: ["function*", "gen()", "*function", "yield"], a: "function*", h: "Star.", e: "Generators are defined using <code>function*</code>." }
        ]
    },

    // ==========================================
    // PYTHON
    // ==========================================
    python: {
        easy: [
            { q: "Print to screen?", opts: ["console.log", "print()", "echo", "printf"], a: "print()", h: "Simple verb.", e: "<code>print()</code> is the standard output function." },
            { q: "Comment symbol?", opts: ["//", "/*", "#", "--"], a: "#", h: "Hashtag.", e: "<code>#</code> starts a single line comment." },
            { q: "Create a list?", opts: ["()", "[]", "{}", "<>"], a: "[]", h: "Square brackets.", e: "Lists use square brackets <code>[]</code>." },
            { q: "Check length?", opts: ["size", "count", "length", "len"], a: "len", h: "Three letters.", e: "<code>len()</code> returns the number of items." },
            { q: "Exponent operator?", opts: ["^", "**", "exp", "pow"], a: "**", h: "Star star.", e: "<code>**</code> is used for power calculations." }
        ],
        medium: [
            { q: "Define a function?", opts: ["func", "def", "function", "lambda"], a: "def", h: "Short for define.", e: "Use <code>def name():</code> to create functions." },
            { q: "Dictionary brackets?", opts: ["[]", "()", "{}", "<>"], a: "{}", h: "Curly.", e: "Dictionaries use curly braces <code>{}</code>." },
            { q: "<code>range(3)</code> result?", opts: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3, 2, 1"], a: "0, 1, 2", h: "Starts at 0.", e: "Range starts at 0 and stops before the number." },
            { q: "Immutable list?", opts: ["Tuple", "Set", "List", "Array"], a: "Tuple", h: "Starts with T.", e: "Tuples <code>()</code> are ordered and unchangeable." },
            { q: "Get user input?", opts: ["get", "input", "read", "scan"], a: "input", h: "Input.", e: "<code>input()</code> reads a line from console." }
        ],
        hard: [
            { q: "What is GIL?", opts: ["Global Interpreter Lock", "Graphics Lib", "General Loop", "Game Interface"], a: "Global Interpreter Lock", h: "Thread limit.", e: "GIL prevents multiple native threads from executing bytecode at once." },
            { q: "Decorator symbol?", opts: ["&", "#", "@", "$"], a: "@", h: "At.", e: "Decorators use <code>@</code> syntax." },
            { q: "List comprehension?", opts: ["[x for x in list]", "list.map(x)", "for x in list", "loop(list)"], a: "[x for x in list]", h: "Concise loop.", e: "It offers a shorter syntax when you want to create a new list." },
            { q: "<code>__init__</code> is?", opts: ["Constructor", "Destructor", "Import", "String"], a: "Constructor", h: "Init object.", e: "It initializes the object's state." },
            { q: "Anonymous function?", opts: ["lambda", "def", "anon", "func"], a: "lambda", h: "Greek letter.", e: "<code>lambda</code> creates small anonymous functions." }
        ]
    },

    // ==========================================
    // CSS
    // ==========================================
    css: {
        easy: [
            { q: "Change text color?", opts: ["font-color", "text-color", "color", "fg"], a: "color", h: "One word.", e: "The <code>color</code> property sets text color." },
            { q: "Select ID?", opts: [".", "#", "*", "@"], a: "#", h: "Hash.", e: "<code>#</code> selects elements by ID." },
            { q: "Select Class?", opts: [".", "#", "*", "&"], a: ".", h: "Dot.", e: "<code>.</code> selects elements by class." },
            { q: "Space outside?", opts: ["padding", "margin", "border", "gap"], a: "margin", h: "Outer.", e: "Margin is space outside the border." },
            { q: "Space inside?", opts: ["padding", "margin", "inset", "spacing"], a: "padding", h: "Inner.", e: "Padding is space inside the border." }
        ],
        medium: [
            { q: "Flex direction?", opts: ["flex-flow", "flex-direction", "grid-template", "align"], a: "flex-direction", h: "Row/Col.", e: "Defines the direction flex items are placed." },
            { q: "Z-index needs?", opts: ["Positioned element", "Block element", "Flex item", "Grid item"], a: "Positioned element", h: "Not static.", e: "Z-index works on relative, absolute, or fixed positioning." },
            { q: "Responsive query?", opts: ["@media", "@screen", "@size", "@view"], a: "@media", h: "Media.", e: "<code>@media</code> applies styles based on viewport." },
            { q: "No underline?", opts: ["text-decoration: none", "no-line", "style: plain", "font: normal"], a: "text-decoration: none", h: "Decoration.", e: "Removes underlines from links." },
            { q: "Relative unit?", opts: ["px", "pt", "cm", "em"], a: "em", h: "Font relative.", e: "<code>em</code> is relative to parent font size." }
        ],
        hard: [
            { q: "Highest specificity?", opts: ["ID", "Class", "Element", "Universal"], a: "ID", h: "Unique identifier.", e: "IDs have higher specificity than classes or tags." },
            { q: "Gap property?", opts: ["grid-gap", "gap", "spacing", "gutter"], a: "gap", h: "Modern syntax.", e: "<code>gap</code> sets space between rows/cols in grid/flex." },
            { q: "Hide but keep space?", opts: ["display: none", "visibility: hidden", "opacity: 0", "z-index: -1"], a: "visibility: hidden", h: "Invisible.", e: "The element is invisible but still takes up space." },
            { q: "Direct child selector?", opts: [">", "+", "~", "child"], a: ">", h: "Greater than.", e: "<code>></code> selects only direct children." },
            { q: "Best box model?", opts: ["border-box", "content-box", "padding-box", "fill-box"], a: "border-box", h: "Include border.", e: "<code>border-box</code> includes padding/border in width." }
        ]
    },

    // ==========================================
    // JAVA
    // ==========================================
    java: {
        easy: [
            { q: "Print to console?", opts: ["System.out.println", "print", "console.log", "echo"], a: "System.out.println", h: "System out.", e: "Standard output stream." },
            { q: "Text variable?", opts: ["String", "Char", "Text", "Word"], a: "String", h: "Capital S.", e: "<code>String</code> stores text." },
            { q: "Integer type?", opts: ["int", "num", "float", "number"], a: "int", h: "Small int.", e: "<code>int</code> is for whole numbers." },
            { q: "End statement?", opts: [";", ".", ":", "!"], a: ";", h: "Semi-colon.", e: "Statements end with <code>;</code>." },
            { q: "True or False?", opts: ["boolean", "bool", "bit", "logic"], a: "boolean", h: "Full word.", e: "<code>boolean</code> stores true/false." }
        ],
        medium: [
            { q: "Create object?", opts: ["new", "create", "make", "init"], a: "new", h: "Fresh.", e: "<code>new</code> allocates memory for an object." },
            { q: "Inheritance?", opts: ["extends", "implements", "inherits", "uses"], a: "extends", h: "Extend class.", e: "<code>extends</code> inherits from a superclass." },
            { q: "Interface?", opts: ["implements", "extends", "using", "interface"], a: "implements", h: "Implement it.", e: "<code>implements</code> is used for interfaces." },
            { q: "Array size?", opts: ["length", "size", "count", "len"], a: "length", h: "Property.", e: "<code>arr.length</code> gives array size." },
            { q: "String size?", opts: ["length()", "size()", "count()", "len()"], a: "length()", h: "Method.", e: "<code>str.length()</code> gives string length." }
        ],
        hard: [
            { q: "Compare Strings?", opts: ["equals()", "==", "match()", "same()"], a: "equals()", h: "Content check.", e: "<code>==</code> checks reference, <code>equals()</code> checks content." },
            { q: "What is JVM?", opts: ["Java Virtual Machine", "Java Var Mode", "Just Virtual", "Java Visual"], a: "Java Virtual Machine", h: "Machine.", e: "JVM executes Java bytecode." },
            { q: "Shared member?", opts: ["static", "shared", "global", "public"], a: "static", h: "Class level.", e: "<code>static</code> belongs to class, not instance." },
            { q: "Resizable array?", opts: ["ArrayList", "Array", "ListArray", "Vector"], a: "ArrayList", h: "Dynamic.", e: "<code>ArrayList</code> resizes dynamically." },
            { q: "Constant variable?", opts: ["final", "const", "static", "fixed"], a: "final", h: "Last one.", e: "<code>final</code> prevents modification." }
        ]
    }
};

// Helper function to safely get questions
function getQuestions(lang, diff) {
    if (DB[lang] && DB[lang][diff]) return DB[lang][diff];
    return DB.javascript.easy; // Fallback
}