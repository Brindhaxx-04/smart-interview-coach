const API_URL = "http://127.0.0.1:8000";

async function loadQuestion() {
    try {
        const response = await fetch(`${API_URL}/questions/`);
        const data = await response.json();

        document.getElementById("question").textContent =
            data.questions[0];

    } catch (error) {
        document.getElementById("question").textContent =
            "Unable to load question.";
        console.error(error);
    }
}

async function submitAnswer() {
    const question = document.getElementById("question").textContent;
    const answer = document.getElementById("answer").value;
    const result = document.getElementById("result");

    if (!answer.trim()) {
        result.textContent = "Please enter your answer.";
        return;
    }

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

        const data = await response.json();

        result.innerHTML = `
            <strong>Score: ${data.score}/10</strong>
            <p>${data.feedback}</p>
        `;

    } catch (error) {
        result.textContent = "Unable to connect to backend.";
        console.error(error);
    }
}

loadQuestion();