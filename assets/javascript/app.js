$(document).ready(function() {
// ================GLOBALS=======================

  //variables relating to my questions and the array of questions
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var questions = [

        // each question has 4 components: the question itself, an array with the 4 different choices, the index of the right answer, and the gif I have in my assets folder that's associated with it
        {question: "Tracer can blink __ times before needing to wait for the ability to recharge.",
        choices: ["14", "3", "5", "7"],
        correctIndex: 1,
        gif: "assets/images/tracer-juke.gif"},

        {question: "Which of the following is NOT one of McCree's voice lines?",
        choices: ["It's your funeral", "You seem familiar. Ain't I killed you before?", "I'm your Huckleberry", "This town ain't big enough for the two of us"],
        correctIndex: 3,
        gif: ""},

        {question: "Zenyatta moves around by ____.",
        choices: ["levitating", "walking/running", "using psychic powers", "using magnetism"],
        correctIndex: 0,
        gif: "assets/images/zen-walking.gif"},

        {question: "The character Hammond is a sentient ____.",
        choices: ["Dog", "Human child", "Hamster", "Gorilla"],
        correctIndex: 2,
        gif: "assets/images/hammond-run.gif"},

        {question: "Roadhog is best known for _____ his enemies.",
        choices: ["devouring", "hooking", "sniping", "loving"],
        correctIndex: 1,
        gif: "assets/images/road-hook.gif"},

        {question: "",
        choices: [],
        correctIndex: ,
        gif: },

        {question: "",
        choices: [],
        correctIndex: ,
        gif: },

        {question: ,
        choices: ,
        correctIndex: ,
        gif: },

        {question: "",
        choices: [],
        correctIndex: ,
        gif: },
    ];

  // variables relating to my timer and its' functionality
    var timer = 30;
    var timerRunning = false;
    var intervalId;

  // variables for keeping track of player choices and some empty arrays for pushing choices into
    var questionHolder = [];


// ====================FUNCTIONS===================

  // timer function that will decrement the timer by 1 second at a time


  // function to call when I need to stop the timer




// =====================GAMEPLAY=====================

    // hide my reset button at the beginning of the game

    // function to start my timer and attach it to my #start button



});