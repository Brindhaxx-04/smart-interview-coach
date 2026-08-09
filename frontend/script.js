function nextQuestion() {
    if (questions.length === 0) {
        loadQuestion();
        return;
    }

    // Check if interview is completed
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("question").textContent =
            "🎉 Interview Completed!";

        document.getElementById("answer").style.display = "none";

        document.querySelector("button[onclick='submitAnswer()']").style.display = "none";

        document.querySelector("button[onclick='nextQuestion()']").style.display = "none";

        document.getElementById("result").innerHTML = `
            <div class="feedback-card">
                <h3>Great job!</h3>
                <p>You have completed all ${questions.length} interview questions.</p>
                <p>Keep practicing to improve your confidence and interview skills.</p>
            </div>
        `;

        return;
    }

    currentQuestionIndex++;

    document.getElementById("question").textContent =
        questions[currentQuestionIndex];

    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
}