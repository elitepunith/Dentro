/* DENTRO - Question Database */

const QUESTIONS = {
    javascript: {
        easy: [
            { q: "Which keyword creates a constant variable?", options: ["var", "let", "const", "static"], answer: 2, hint: "Can't be changed.. .", explain: "const creates a constant that can't be reassigned." },
            { q: "How do you print to console? ", options: ["print()", "console.log()", "echo()", "log()"], answer: 1, hint:  "Console method...", explain: "console.log() outputs to the console." },
            { q: "What does === check? ", options: ["Assignment", "Loose equality", "Strict equality", "Not equal"], answer: 2, hint: "Stricter than ==.. .", explain: "=== checks value AND type." },
            { q: "Which adds to END of array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0, hint: "Push it.. .", explain: "push() adds to end." },
            { q: "What is typeof null?", options: ["null", "undefined", "object", "boolean"], answer: 2, hint: "JS quirk...", explain: "typeof null is 'object' - a famous bug." },
            { q: "Single-line comment?", options: ["# comment", "// comment", "/* */", "-- comment"], answer: 1, hint: "Two slashes...", explain: "// starts single-line comment." },
            { q: "What does NaN mean?", options: ["Not a Null", "Not a Number", "New Number", "No Number"], answer: 1, hint: "Invalid math...", explain: "NaN = Not a Number." },
            { q: "Create an array? ", options: ["(1,2,3)", "[1,2,3]", "{1,2,3}", "<1,2,3>"], answer: 1, hint: "Square brackets...", explain: "Arrays use []." }
        ],
        medium: [
            { q: "What is a closure?", options: ["Close window", "Function remembering outer scope", "Loop end", "Error type"], answer: 1, hint: "Functions remember...", explain: "Closures access outer scope variables." },
            { q: "[1,2,3]. map(x => x*2) returns? ", options: ["[1,2,3]", "[2,4,6]", "6", "undefined"], answer: 1, hint: "Transforms each.. .", explain: "map doubles each element." },
            { q: "Spread operator?", options: ["**", "...", "=>", ":: "], answer: 1, hint:  "Three dots...", explain: "...  spreads elements." },
            { q: "What is hoisting?", options: ["DOM move", "Declarations moved to top", "Loop type", "Error handling"], answer: 1, hint:  "Lifted up...", explain: "Declarations move to scope top." },
            { q: "async/await does?", options: ["Faster code", "Sync operations", "Easier Promises", "Threading"], answer: 2, hint: "Promise sugar...", explain: "Makes Promise code cleaner." },
            { q: "null vs undefined?", options: ["Same", "null intentional, undefined not", "undefined intentional", "null for numbers"], answer: 1, hint:  "Purpose...", explain: "null is intentional absence." },
            { q: "Event bubbling?", options: ["Create events", "Child to parent propagation", "Error", "Animation"], answer: 1, hint:  "Bubbles up...", explain: "Events bubble from child to parent." },
            { q: "Array. isArray([]) returns?", options: ["true", "false", "array", "undefined"], answer: 0, hint: "Is it an array? ", explain: "Returns true for arrays." }
        ],
        hard: [
            { q: "Event loop does?", options: ["Mouse events", "Manages call stack & queue", "Creates loops", "Compiles JS"], answer: 1, hint:  "Async mechanism...", explain: "Moves callbacks from queue to stack." },
            { q: "What is WeakMap?", options: ["Slow Map", "Map with weak object keys", "Deprecated", "Limited Map"], answer: 1, hint: "Garbage collection...", explain: "Keys are weakly held for GC." },
            { q: "Object.freeze() does?", options: ["Delete", "Make immutable (shallow)", "To array", "Deep copy"], answer: 1, hint:  "Can't change...", explain: "Prevents property changes (shallow)." },
            { q: "Temporal Dead Zone?", options: ["Sci-fi", "Before let/const accessible", "Memory leak", "Old API"], answer: 1, hint:  "let/const...", explain: "Period before declaration is accessible." },
            { q: "call() vs apply()?", options: ["Same", "call:  args list, apply: array", "apply deprecated", "call for constructors"], answer: 1, hint: "Arguments passing...", explain: "call(this,a,b) vs apply(this,[a,b])" },
            { q: "Symbol used for?", options: ["Math", "Unique identifiers", "Strings", "Icons"], answer: 1, hint:  "Unique...", explain: "Creates unique property keys." },
            { q: "What is Proxy?", options: ["Network", "Wraps object with custom behavior", "Promise alt", "Deprecated"], answer: 1, hint:  "Intercepts...", explain: "Customizes object operations." },
            { q: "'use strict' purpose?", options: ["Faster", "Catches errors", "New features", "TypeScript"], answer: 1, hint: "Stricter...", explain: "Catches mistakes, disables bad features." }
        ]
    },
    python: {
        easy: [
            { q: "Print 'Hello' in Python?", options: ["console.log()", "print()", "echo()", "printf()"], answer: 1, hint: "Simple function...", explain: "print() outputs text." },
            { q: "Comment in Python?", options: ["//", "#", "/* */", "--"], answer: 1, hint:  "Hash.. .", explain: "# starts a comment." },
            { q: "Create a list?", options: ["(1,2,3)", "[1,2,3]", "{1,2,3}", "<1,2,3>"], answer: 1, hint: "Square brackets.. .", explain: "Lists use []." },
            { q: "Define a function?", options: ["function", "def", "fn", "func"], answer: 1, hint:  "Define...", explain: "def defines functions." },
            { q: "len([1,2,3]) returns?", options: ["1", "2", "3", "4"], answer: 2, hint: "Count items...", explain: "len() returns item count." },
            { q: "Start if statement?", options: ["if (x==5) {}", "if x==5:", "if x==5 then", "if (x==5):"], answer: 1, hint:  "Colon, no brackets...", explain: "if condition:" },
            { q: "Boolean value?", options: ["'True'", "TRUE", "True", "true"], answer: 2, hint: "Capital T...", explain: "Python uses True/False." },
            { q: "Get user input?", options: ["scanf()", "input()", "read()", "cin()"], answer: 1, hint:  "Simple...", explain: "input() gets user input." }
        ],
        medium: [
            { q: "List comprehension?", options: ["Understanding lists", "Compact list creation", "Documentation", "Debug tool"], answer: 1, hint:  "[x for x in...]", explain: "Creates lists efficiently." },
            { q: "'self' refers to?", options: ["Class itself", "Current instance", "Global var", "Parent class"], answer: 1, hint: "This instance...", explain: "self is the current object." },
            { q: "*args does?", options: ["Multiply", "Variable positional args", "Required args", "Keyword args"], answer: 1, hint: "Variable number...", explain: "Accepts any number of args." },
            { q: "**kwargs does?", options: ["Keyword args as dict", "Power", "Multiply", "Error handling"], answer: 0, hint: "Key-value.. .", explain: "Collects keyword args." },
            { q: "Decorator?", options: ["Design pattern", "Modifies function", "UI component", "Comment"], answer: 1, hint:  "@something...", explain: "Wraps functions." },
            { q: "'pass' does?", options: ["Skip iteration", "Nothing (placeholder)", "Return", "Raise error"], answer: 1, hint:  "Placeholder...", explain: "pass does nothing." },
            { q: "'is' vs '=='?", options:  ["Same", "is: identity, ==: equality", "==: identity", "is deprecated"], answer: 1, hint:  "Identity vs value...", explain: "is checks same object." },
            { q: "Generator? ", options: ["Random numbers", "yield for lazy iteration", "Class creator", "File writer"], answer: 1, hint:  "yield...", explain: "Yields values one at a time." }
        ],
        hard: [
            { q: "What is GIL?", options: ["Graphics lib", "Global Interpreter Lock", "Import", "GC"], answer: 1, hint:  "Threading limit...", explain: "Limits threads to one at a time." },
            { q: "Metaclass?", options: ["Base class", "Class of classes", "Abstract class", "Deprecated"], answer: 1, hint:  "Class of class...", explain: "Defines how classes behave." },
            { q: "__init__ does?", options: ["Destroy", "Initialize instance", "Import", "Create class"], answer: 1, hint:  "Constructor...", explain: "Initializes new objects." },
            { q: "@staticmethod vs @classmethod?", options: ["Same", "classmethod gets cls", "staticmethod faster", "classmethod deprecated"], answer:  1, hint: "First argument...", explain: "@classmethod receives cls." },
            { q: "__slots__ does?", options: ["Time slots", "Limits attrs, saves memory", "Methods", "UI slots"], answer: 1, hint:  "Memory.. .", explain: "Restricts attributes." },
            { q: "Context manager?", options: ["Memory mgr", "__enter__/__exit__ for 'with'", "Thread mgr", "File system"], answer: 1, hint:  "with statement...", explain: "Handles setup/cleanup." },
            { q: "lru_cache does?", options: ["Clear cache", "Memoize results", "Manage memory", "Log calls"], answer: 1, hint: "Cache...", explain: "Caches function results." },
            { q: "Duck typing?", options: ["Type check", "Behavior over type", "Animal class", "Error handling"], answer: 1, hint: "If it quacks.. .", explain: "If it has methods, it works." }
        ]
    },
    java: {
        easy: [
            { q: "Entry point of Java?", options: ["start()", "main()", "run()", "init()"], answer: 1, hint: "Main.. .", explain: "main() is the entry point." },
            { q: "Create new object?", options: ["create", "new", "make", "instance"], answer: 1, hint:  "New...", explain: "new ClassName() creates objects." },
            { q: "Print in Java?", options: ["print()", "console.log()", "System.out.println()", "echo()"], answer: 2, hint: "System. out...", explain: "System. out.println() prints." },
            { q: "Declare integer?", options: ["integer x", "int x", "num x", "Int x"], answer: 1, hint: "Lowercase...", explain: "int is the integer type." },
            { q: "Java file extension?", options: [".java", ".jv", ".class", ".jar"], answer: 0, hint: "Same as name...", explain: ". java for source code." },
            { q: "Inherit a class?", options: ["inherits", "implements", "extends", "using"], answer: 2, hint: "Extends...", explain: "extends for inheritance." },
            { q: "Boolean holds?", options: ["Numbers", "Text", "true/false", "Objects"], answer: 2, hint: "Two values...", explain: "boolean holds true or false." },
            { q: "Single-line comment?", options: ["#", "//", "--", "'"], answer: 1, hint: "Two slashes...", explain: "// for comments." }
        ],
        medium: [
            { q: "== vs . equals() for String?", options: ["Same", "== refs, .equals() content", ". equals() faster", "== for content"], answer: 1, hint:  "Reference vs value...", explain: "== checks reference, .equals() checks content." },
            { q: "Interface is? ", options: ["UI", "Contract with method signatures", "Database", "File"], answer: 1, hint:  "Contract...", explain: "Defines methods to implement." },
            { q: "'final' variable?", options: ["Delete", "Constant", "Public", "Last"], answer: 1, hint:  "Can't change...", explain: "final can't be reassigned." },
            { q: "Method overloading?", options: ["Too many methods", "Same name, diff params", "Override parent", "Loading"], answer: 1, hint:  "Same name...", explain: "Same name, different parameters." },
            { q: "'static' means?", options: ["Unchanging", "Belongs to class not instance", "Private", "Fast"], answer: 1, hint:  "Class level...", explain: "Shared by all instances." },
            { q: "Autoboxing?", options: ["Packaging", "Primitive to wrapper auto", "Compression", "UI"], answer: 1, hint:  "int to Integer...", explain: "Auto converts primitive to wrapper." },
            { q: "No duplicates collection?", options: ["ArrayList", "LinkedList", "HashSet", "Vector"], answer: 2, hint: "Set...", explain: "Sets don't allow duplicates." },
            { q: "Constructor?", options: ["Destroys", "Creates/initializes objects", "Loop", "Import"], answer: 1, hint:  "Creates...", explain: "Initializes new objects." }
        ],
        hard: [
            { q:  "Diamond problem?", options: ["Memory", "Multiple inheritance ambiguity", "Graphics", "Database"], answer: 1, hint:  "Inheritance...", explain: "Ambiguity with multiple parents." },
            { q: "volatile variable?", options: ["Unstable", "Always from main memory", "Temporary", "Deprecated"], answer: 1, hint: "Thread visibility...", explain: "Read from main memory always." },
            { q: "synchronized does?", options: ["DB sync", "One thread at a time", "Time sync", "Network"], answer: 1, hint: "Thread safety...", explain: "Prevents concurrent access." },
            { q: "Reflection?", options: ["Mirror", "Runtime class inspection", "Debug", "UI"], answer: 1, hint:  "Runtime...", explain: "Inspect/modify classes at runtime." },
            { q: "Stack vs Heap?", options: ["Same", "Stack: locals, Heap: objects", "Heap faster", "Stack for objects"], answer: 1, hint:  "Where things live...", explain: "Stack for locals, Heap for objects." },
            { q: "Lambda in Java?", options: ["Greek", "Anonymous function", "Loop", "Variable"], answer: 1, hint:  "() -> .. .", explain: "Short anonymous functions." },
            { q: "Streams (Java 8)?", options: ["File I/O", "Functional collection ops", "Network", "Audio"], answer: 1, hint:  ". filter().map()...", explain: "Functional operations on collections." },
            { q: "Optional purpose?", options: ["Optional params", "Avoid null pointer", "Optional imports", "Deprecated"], answer: 1, hint:  "No nulls...", explain: "Wraps potentially null values." }
        ]
    },
    cpp: {
        easy: [
            { q: "cout does?", options: ["Input", "Output", "Count", "File"], answer: 1, hint:  "c-out...", explain: "cout outputs to console." },
            { q: "I/O header?", options: ["<stdio.h>", "<iostream>", "<input.h>", "<console. h>"], answer: 1, hint: "I/O stream...", explain: "<iostream> for cin/cout." },
            { q: "Declare pointer?", options: ["int ptr", "int &ptr", "int *ptr", "pointer int"], answer: 2, hint: "Asterisk...", explain: "* declares pointer." },
            { q: "endl does?", options: ["End program", "Newline + flush", "End function", "End tag"], answer: 1, hint:  "End line...", explain: "Adds newline and flushes." },
            { q: "Allocate memory?", options: ["malloc", "new", "alloc", "create"], answer: 1, hint:  "C++ way...", explain: "new allocates memory." },
            { q: "Scope resolution?", options: ["::", "->", ".", "::>"], answer: 0, hint: "Double colon...", explain: "::  accesses scope." },
            { q: "Use std namespace?", options: ["import std", "using namespace std", "#include std", "namespace=std"], answer: 1, hint: "using.. .", explain: "using namespace std;" },
            { q: "& in parameters?", options: ["Pointer", "Pass by reference", "Address", "AND"], answer: 1, hint:  "Reference...", explain: "Passes by reference." }
        ],
        medium: [
            { q: "struct vs class?", options: ["Same", "Default:  struct public, class private", "struct no methods", "class no data"], answer: 1, hint:  "Default access...", explain: "Only default access differs." },
            { q: "Virtual function?", options: ["Imaginary", "Can be overridden", "No body", "Static"], answer: 1, hint:  "Polymorphism...", explain: "Enables runtime polymorphism." },
            { q: "RAII?", options: ["Library", "Resource Acquisition Is Initialization", "Compiler", "Debugger"], answer: 1, hint: "Resource...", explain: "Ties resources to object lifetime." },
            { q: "const after method?", options: ["Returns const", "Won't modify object", "Is constant", "Cached"], answer: 1, hint:  "Promise...", explain: "Won't change member variables." },
            { q: "Operator overloading?", options: ["Too many ops", "Custom op behavior", "Loading ops", "Syntax error"], answer: 1, hint:  "+ for your class...", explain: "Define operators for types." },
            { q: "Destructor does?", options: ["Create", "Cleanup on destroy", "Copy", "Move"], answer: 1, hint: "~ClassName.. .", explain: "Releases resources on destruction." },
            { q: "Template?", options: ["Design file", "Generic blueprint", "File type", "Macro"], answer: 1, hint:  "Generic...", explain: "Type-independent code." },
            { q: "nullptr?", options: ["Null string", "Null pointer (C++11)", "Null int", "Null object"], answer: 1, hint:  "Null pointer...", explain: "Type-safe null pointer." }
        ],
        hard: [
            { q: "Rule of Three?", options: ["Pattern", "Need destructor/copy ctor/copy assign together", "Naming", "Memory"], answer: 1, hint:  "Special members...", explain: "If need one, likely need all three." },
            { q: "Pure virtual? ", options: ["Clean", "= 0, must override", "Static", "Const"], answer: 1, hint: "= 0...", explain: "Makes class abstract." },
            { q: "Move semantics?", options: ["Moving code", "Transfer instead of copy", "Pattern", "Threading"], answer: 1, hint:  "Efficient...", explain: "Transfers ownership, avoids copy." },
            { q: "unique_ptr?", options: ["Unique var", "Exclusive ownership smart ptr", "Special int", "String"], answer: 1, hint:  "Smart pointer...", explain: "Owns object exclusively." },
            { q: "SFINAE?", options: ["Library", "Substitution Failure Is Not An Error", "Compiler", "Debugger"], answer: 1, hint: "Template...", explain: "Failed substitution isn't error." },
            { q: "Diamond problem C++?", options: ["Memory", "Multiple inheritance ambiguity", "Syntax", "Pointer"], answer: 1, hint:  "Two parents...", explain: "Ambiguity from shared grandparent." },
            { q: "Stack vs Heap?", options: ["Same", "Stack: auto/fast, Heap: manual/slower", "Heap faster", "Stack for large"], answer: 1, hint: "Auto vs manual...", explain: "Stack automatic, Heap manual." },
            { q: "Lambda C++?", options: ["Greek", "Anonymous function object", "Template", "Macro"], answer: 1, hint:  "[](){}...", explain: "Creates anonymous functions." }
        ]
    },
    css: {
        easy: [
            { q: "CSS stands for?", options: ["Computer Styles", "Cascading Style Sheets", "Creative Styles", "Colorful Sheets"], answer: 1, hint:  "Cascading...", explain: "Cascading Style Sheets." },
            { q: "Select id 'header'?", options: [".header", "#header", "header", "*header"], answer: 1, hint: "Hash...", explain: "# selects by ID." },
            { q: "Select class 'btn'?", options: [".btn", "#btn", "btn", "*btn"], answer: 0, hint: "Dot...", explain: ".  selects by class." },
            { q: "Change text color?", options: ["text-color", "font-color", "color", "foreground"], answer: 2, hint: "Just color...", explain: "color property." },
            { q: "Space INSIDE element?", options: ["margin", "padding", "spacing", "border"], answer: 1, hint:  "Inside...", explain: "padding is inside." },
            { q: "Make text bold?", options: ["font-weight:  bold", "text-style: bold", "font-bold:  true", "bold:  yes"], answer: 0, hint: "Font weight...", explain: "font-weight:  bold;" },
            { q: "Default div display?", options: ["inline", "block", "flex", "none"], answer: 1, hint:  "Full width...", explain: "div is block by default." },
            { q: "Default position?", options: ["relative", "absolute", "fixed", "static"], answer: 3, hint: "Normal flow...", explain: "static by default." }
        ],
        medium: [
            { q: "Box model order (in to out)?", options: ["margin,border,padding,content", "content,padding,border,margin", "border,margin,content,padding", "padding,content,margin,border"], answer: 1, hint: "Content first...", explain: "Content→Padding→Border→Margin." },
            { q: "position: relative?", options: ["Removes from flow", "Offset from normal position", "Fixed", "Relative to parent"], answer: 1, hint: "Offset...", explain: "Positions from normal spot." },
            { q: "position: absolute?", options: ["Normal flow", "Relative to positioned ancestor", "Fixed to screen", "Center"], answer: 1, hint:  "Nearest positioned.. .", explain: "Positions relative to positioned parent." },
            { q: "Center block horizontally?", options: ["text-align: center", "margin:  0 auto", "center:  true", "align: center"], answer: 1, hint: "Auto margins...", explain: "margin: 0 auto centers blocks." },
            { q: "z-index controls?", options: ["Zoom", "Stacking order", "Size", "Rotation"], answer: 1, hint:  "Layers...", explain: "Controls what's on top." },
            { q: "Flexbox for? ", options: ["Flexibility", "1D layout", "Animation", "Grid"], answer: 1, hint:  "Row or column...", explain: "One-dimensional layouts." },
            { q: "em vs rem?", options: ["Same", "em: parent, rem: root", "rem: parent", "em bigger"], answer: 1, hint:  "Root vs parent...", explain: "em=parent, rem=root font size." },
            { q: "overflow:  hidden?", options: ["Hide element", "Clip overflow", "Show scrollbar", "Expand"], answer: 1, hint:  "Content that doesn't fit...", explain: "Clips overflowing content." }
        ],
        hard: [
            { q: "Specificity order (low to high)?", options: ["ID,Class,Element", "Element,Class,ID", "Class,ID,Element", "Element,ID,Class"], answer: 1, hint: "ID most specific...", explain: "Element < Class < ID." },
            { q: "display: grid for?", options: ["Flexbox", "2D layout", "Table", "Block"], answer: 1, hint:  "Rows AND columns...", explain: "Two-dimensional layouts." },
            { q: "CSS variable syntax?", options: ["$variable", "--variable-name", "@variable", "var(name)"], answer: 1, hint: "Double dash...", explain: "--name, used with var(--name)." },
            { q: "will-change does?", options: ["Detect changes", "Optimization hint", "Change content", "Trigger animation"], answer: 1, hint:  "Performance...", explain: "Hints browser to optimize." },
            { q: "visibility: hidden vs display:none?", options: ["Same", "visibility keeps space", "display keeps space", "visibility removes from DOM"], answer: 1, hint:  "Space...", explain: "visibility keeps layout space." },
            { q: "contain:  layout?", options: ["Contains content", "Isolates layout calculations", "Creates container", "Limits size"], answer: 1, hint: "Performance...", explain: "Isolates for better performance." },
            { q: "Pseudo-element?", options: ["Fake", ":: before, ::after", "Hidden", "Deleted"], answer: 1, hint:  "Double colon...", explain: "Insert styled content." },
            { q: "backface-visibility: hidden?", options: ["Hide background", "Hide back in 3D rotation", "Hide behind others", "Remove"], answer: 1, hint: "3D...", explain: "Hides back face in 3D transforms." }
        ]
    }
};

function getQuestions(lang, diff) {
    if (! QUESTIONS[lang]) lang = 'javascript';
    if (! QUESTIONS[lang][diff]) diff = 'easy';
    return QUESTIONS[lang][diff];
}