// ================================
// 20 HARD OPERATING SYSTEM QUESTIONS
// ================================

const questions = [

    {
        question: "Which condition is NOT required for a deadlock to occur?",
        options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "Preemption",
            "Circular Wait"
        ],
        answer: 2
    },

    {
        question: "Which CPU scheduling algorithm can cause starvation?",
        options: [
            "FCFS",
            "Round Robin",
            "Priority Scheduling",
            "FIFO"
        ],
        answer: 2
    },

    {
        question: "Which page replacement algorithm can suffer from Belady's anomaly?",
        options: [
            "LRU",
            "Optimal",
            "FIFO",
            "LFU"
        ],
        answer: 2
    },

    {
        question: "What is the primary purpose of a semaphore?",
        options: [
            "Memory allocation",
            "Process synchronization",
            "File compression",
            "CPU scheduling"
        ],
        answer: 1
    },

    {
        question: "What happens when a page fault occurs?",
        options: [
            "The CPU shuts down",
            "The required page is loaded into physical memory",
            "The process is always terminated",
            "The cache is permanently cleared"
        ],
        answer: 1
    },

    {
        question: "Which scheduling algorithm generally gives minimum average waiting time when burst times are known?",
        options: [
            "FCFS",
            "Round Robin",
            "SJF",
            "Priority Scheduling"
        ],
        answer: 2
    },

    {
        question: "What is thrashing in an operating system?",
        options: [
            "Excessive paging activity",
            "CPU overheating",
            "Disk formatting",
            "File corruption"
        ],
        answer: 0
    },

    {
        question: "Which technique allows a process to use more memory than the available physical RAM?",
        options: [
            "Spooling",
            "Virtual Memory",
            "Buffering",
            "Caching"
        ],
        answer: 1
    },

    {
        question: "Which data structure is commonly used to represent a wait-for graph?",
        options: [
            "Graph",
            "Stack",
            "Queue",
            "Array"
        ],
        answer: 0
    },

    {
        question: "What is a race condition?",
        options: [
            "When the result depends on the timing of concurrent accesses",
            "When CPU frequency increases",
            "When memory becomes full",
            "When a process terminates normally"
        ],
        answer: 0
    },

    {
        question: "Which page replacement algorithm provides the theoretical minimum number of page faults?",
        options: [
            "FIFO",
            "LRU",
            "Optimal",
            "Clock"
        ],
        answer: 2
    },

    {
        question: "What is the main purpose of a TLB?",
        options: [
            "Store recently used page table entries",
            "Store CPU instructions permanently",
            "Manage file permissions",
            "Schedule processes"
        ],
        answer: 0
    },

    {
        question: "What is the main goal of the Banker's Algorithm?",
        options: [
            "Increase CPU speed",
            "Avoid entering an unsafe state",
            "Manage files",
            "Reduce cache misses"
        ],
        answer: 1
    },

    {
        question: "What is priority inversion?",
        options: [
            "A high-priority process gets more CPU time",
            "A low-priority process holds a resource needed by a high-priority process",
            "A process changes from user mode to kernel mode",
            "A process gets terminated"
        ],
        answer: 1
    },

    {
        question: "What is an important difference between a process and a thread?",
        options: [
            "Threads cannot execute instructions",
            "Threads within a process can share process resources",
            "Processes always share the same stack",
            "Threads require separate operating systems"
        ],
        answer: 1
    },

    {
        question: "Which memory management technique divides logical memory into fixed-size pages?",
        options: [
            "Segmentation",
            "Paging",
            "Swapping",
            "Compaction"
        ],
        answer: 1
    },

    {
        question: "What is external fragmentation?",
        options: [
            "Unused memory scattered between allocated regions",
            "Unused space inside a CPU register",
            "A corrupted hard disk",
            "A full cache"
        ],
        answer: 0
    },

    {
        question: "Which synchronization mechanism is commonly used to provide mutual exclusion?",
        options: [
            "Mutex",
            "Compiler",
            "Loader",
            "Cache"
        ],
        answer: 0
    },

    {
        question: "What is a context switch?",
        options: [
            "Changing the file system",
            "Switching the CPU from one process or thread to another",
            "Changing the operating system",
            "Deleting a process"
        ],
        answer: 1
    },

    {
        question: "What is the core component of an operating system?",
        options: [
            "Compiler",
            "Kernel",
            "Browser",
            "Text Editor"
        ],
        answer: 1
    }

];


// ================================
// VARIABLES
// ================================

let currentQuestion = 0;

let score = 0;


// ================================
// HTML ELEMENTS
// ================================

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("next-btn");

const progressElement =
    document.getElementById("progress");

const progressFill =
    document.getElementById("progress-fill");

const quizElement =
    document.getElementById("quiz");

const resultElement =
    document.getElementById("result");

const scoreElement =
    document.getElementById("score");

const restartButton =
    document.getElementById("restart-btn");


// ================================
// SHOW QUESTION
// ================================

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent =
        question.question;


    progressElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    optionsElement.innerHTML = "";


    nextButton.disabled = true;


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");


        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        button.classList.add("option");


        button.addEventListener("click", function () {

            selectAnswer(button, index);

        });


        optionsElement.appendChild(button);

    });
}


// ================================
// SELECT ANSWER
// ================================

function selectAnswer(button, selectedIndex) {

    const correctIndex =
        questions[currentQuestion].answer;


    const allOptions =
        document.querySelectorAll(".option");


    // Disable all options

    allOptions.forEach(option => {

        option.disabled = true;

    });


    // Check answer

    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        score++;

    }

    else {

        button.classList.add("wrong");

        allOptions[correctIndex]
            .classList.add("correct");

    }


    nextButton.disabled = false;
}


// ================================
// NEXT QUESTION
// ================================

nextButton.addEventListener("click", function () {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

});


// ================================
// SHOW RESULT
// ================================

function showResult() {

    quizElement.classList.add("hidden");

    resultElement.classList.remove("hidden");


    const percentage =
        (score / questions.length) * 100;


    scoreElement.innerHTML =

        `Your Score: <strong>
        ${score}/${questions.length}
        </strong>

        <br><br>

        Percentage: <strong>
        ${percentage}%
        </strong>`;
}


// ================================
// RESTART QUIZ
// ================================

restartButton.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;


    resultElement.classList.add("hidden");

    quizElement.classList.remove("hidden");


    showQuestion();

});


// ================================
// START QUIZ
// ================================

showQuestion();