const API_URL = "";

let currentQuestionIndex = 0;
let questions = [];

async function loadQuestion() {
    try {
        const response = await fetch(`${API_URL}/questions`);

        if (!response.ok) {
            throw new Error("Failed to load questions");
        }

        const data = await response.json();

        questions = data.questions || [];

        if (questions.length === 0) {
            document.getElementById("question").textContent =
                "No questions available.";
            return;
        }

        document.getElementById("question").textContent =
            questions[currentQuestionIndex];

        document.getElementById("answer").value = "";
        document.getElementById("result").innerHTML = "";

    } catch (error) {
        console.error("Question loading error:", error);

        document.getElementById("question").textContent =
            "Unable to load question.";
    }
}

function nextQuestion() {
    if (questions.length === 0) {
        loadQuestion();
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

    document.getElementById("question").textContent =
        questions[currentQuestionIndex];

    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
}

async function submitAnswer() {
    const question =
        document.getElementById("question").textContent;

    const answer =
        document.getElementById("answer").value;

    const result =
        document.getElementById("result");

    if (!answer.trim()) {
        result.textContent = "Please enter your answer.";
        return;
    }

    result.textContent = "Evaluating your answer...";

    try {
        const response = await fetch(`${API_URL}/evaluate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question,
                answer: answer
            })
        });

        if (!response.ok) {
            throw new Error("Evaluation failed");
        }

        const data = await response.json();

        result.innerHTML = `
            <div class="feedback-card">
                <div class="score">Score: ${data.score}/10</div>
                <p><strong>Feedback:</strong> ${data.feedback}</p>
            </div>
        `;

    } catch (error) {
        console.error("Answer evaluation error:", error);

        result.textContent =
            "Unable to connect to backend.";
    }
}

loadQuestion();