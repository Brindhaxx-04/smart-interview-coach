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

        currentQuestionIndex = 0;
        showQuestion();

    } catch (error) {
        console.error(error);

        document.getElementById("question").textContent =
            "Unable to load question.";
    }
}

function showQuestion() {
    document.getElementById("question").textContent =
        questions[currentQuestionIndex];

    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
}

function nextQuestion() {
    if (questions.length === 0) {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

    showQuestion();
}

async function submitAnswer() {
    const question =
        document.getElementById("question").textContent;

    const answer =
        document.getElementById("answer").value.trim();

    const result =
        document.getElementById("result");

    if (!answer) {
        result.textContent = "Please enter your answer.";
        return;
    }

    result.innerHTML = "Evaluating your answer...";

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
                <h3>Interview Feedback</h3>

                <div class="score">
                    Score: ${data.score}/10
                </div>

                <p>
                    <strong>Strengths:</strong><br>
                    ${data.strengths}
                </p>

                <p>
                    <strong>Suggestions:</strong><br>
                    ${data.suggestions}
                </p>

                <p>
                    <strong>Overall Feedback:</strong><br>
                    ${data.feedback}
                </p>
            </div>
        `;

    } catch (error) {
        console.error(error);

        result.textContent =
            "Unable to connect to backend.";
    }
}

loadQuestion();