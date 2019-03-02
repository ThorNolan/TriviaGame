$(document).ready(function() {
// ================GLOBALS=======================

  //variables relating to my questions and the array of questions
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    //var numQestions = questions.length;

    var questions = [
        // each question has 4 components: the question itself, an array with the 4 different choices, the index of the right answer, and the gif I have in my assets folder that's associated with it
        {question: "Tracer can blink __ times before needing to wait for the ability to recharge.",
        choices: ["14", "3", "5", "7"],
        correctIndex: 1,
        gif: "assets/images/tracer-juke.gif"},

        {question: "Which of the following is NOT one of McCree's voice lines?",
        choices: ["It's your funeral.", "It's high noon!", "I'm your Huckleberry.", "This town ain't big enough for the two of us."],
        correctIndex: 3,
        gif: "assets/images/mccree-sextuple.gif"},

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

        {question: "The character Mei is originally from ____.",
        choices: ["South Korea", "Germany", "China", "The United States"],
        correctIndex: 2,
        gif: "assets/images/mei-bye.gif"},

        {question: "Sombra's name means ____ in spanish.",
        choices: ["'assassin", "'infiltrator'", "'hacker'", "'shadow'"],
        correctIndex: 3,
        gif: "assets/images/sombra-wave.gif"},

        {question: "How much damage does the quick melee ability do (excluding Reinhardt and Brigitte!)?",
        choices: ["30 damage", "60 damage", "100 damage", "25 damage"],
        correctIndex: 0,
        gif: "assets/images/friendship.gif"},

    ];

  // variables relating to my timer and its' functionality
    var timer = 21;
    var timerRunning = false;
    var intervalId;

  // variables for keeping track of player choices and some empty arrays for pushing the players' choices into
    var questionHolder = [];
    var playerSelection = "";
    var randomSelection = Math.floor(Math.random(questions.length));
    var randomIndex;


// ====================FUNCTIONS===================

  // timer function that will start my timer and decrement the time by 1 second at a time
    function startTimer () {
        if (!timerRunning) {
            intervalId = setInterval(counter, 1000);
            timerRunning = true;
        }
    }

  // function to call when I need to stop the timer
    function stopTimer () {
        timerRunning = false;
        clearInterval(intervalId);
    }

  // function to display the timer at my #timer div and update it as it counts down to 0 at the interval I set in startTimer()
    function counter() {
        timer--;
        $("#timer").html("<p>" + timer + "</p>");

        if (timer === 0) {
            stopTimer();
            unanswered++;
        }
    }

  //  function to display one of the questions on the screen after the #begin button has been clicked
  
    function randomQuestion() {
        randomIndex = questions[randomSelection];

    }

// =====================GAMEPLAY=====================

  // hide my reset button at the beginning of the game
    $("#tryAgain").hide();


  // function to  hide the image and button when clicked and start my timer counting down
    $("#begin").on("click", function() {
        startTimer();
        $(".zenOpener").hide();
        $("#begin").hide();
    });



});