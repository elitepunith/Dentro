/* 
   Database of questions. 
   Structure: Language -> Difficulty -> List of Questions
*/

const QUESTION_DATA = {
    javascript: {
        easy: [
            { q: "Which symbol is used for comments?", options: ["//", "<!--", "#", "**"], correct: 0, hint: "It looks like two slashes.", explanation: "// is for single line comments in JS." },
            { q: "How do you declare a constant?", options: ["var", "let", "const", "fix"], correct: 2, hint: "Short for constant.", explanation: "const creates a variable that cannot be reassigned." },
            { q: "What is console.log() used for?", options: ["Printing to screen", "Debugging", "Sending email", "Nothing"], correct: 1, hint: "Developers use it to see values.", explanation: "It prints output to the browser console." }
        ],
        medium: [
            { q: "What is === operator?", options: ["Assignment", "Strict Equality", "Loose Equality", "Not Equal"], correct: 1, hint: "Checks value AND type.", explanation: "Strict equality checks if value and type are identical." },
            { q: "Which is NOT a data type?", options: ["String", "Boolean", "Number", "Element"], correct: 3, hint: "Elements are DOM nodes.", explanation: "Element is a DOM concept, not a primitive JS data type." }
        ],
        hard: [
            { q: "What is a Closure?", options: ["A loop", "Function with outer scope access", "A syntax error", "Closing a tag"], correct: 1, hint: "Scope memory.", explanation: "A closure gives you access to an outer function's scope from an inner function." }
        ]
    },
    python: {
        easy: [
            { q: "How do you print text?", options: ["console.log()", "print()", "echo", "write()"], correct: 1, hint: "Just the word 'print'.", explanation: "print() is the standard output function." }
        ],
        medium: [
            { q: "How do you start a list?", options: ["{}", "[]", "()", "<>"], correct: 1, hint: "Square brackets.", explanation: "Lists in Python are created using square brackets []." }
        ],
        hard: [
            { q: "What is a tuple?", options: ["Mutable list", "Immutable list", "Dictionary", "String"], correct: 1, hint: "Cannot be changed.", explanation: "Tuples are immutable sequences, unlike lists which are mutable." }
        ]
    },
    // Fallbacks for other languages to prevent crashes if selected
    css: { easy: [{ q: "What stands for CSS?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Code Style Sheets"], correct: 0, hint: "Cascading...", explanation: "CSS = Cascading Style Sheets." }] },
    java: { easy: [{ q: "Main method entry point?", options: ["start()", "main()", "init()", "run()"], correct: 1, hint: "public static void...", explanation: "main() is the entry point." }] }
};

// Helper to safely get questions
function getQuestions(lang, diff) {
    if(QUESTION_DATA[lang] && QUESTION_DATA[lang][diff]) {
        return QUESTION_DATA[lang][diff];
    }
    // Fallback if data is missing
    return [{ q: "Sample Question", options: ["A", "B", "C", "D"], correct: 0, hint: "Pick A", explanation: "Fallback data." }];
}