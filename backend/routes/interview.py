from fastapi import APIRouter

router = APIRouter()

# ==============================
# INTERVIEW QUESTIONS
# ==============================

questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why should we hire you?",
    "Why do you want to join our company?",
    "Where do you see yourself in five years?",
    "Tell me about a project you worked on.",
    "How do you handle pressure?",
    "What is your biggest achievement?",
    "Why did you choose your field of study?"
]

# ==============================
# GET QUESTIONS
# ==============================

@router.get("/questions")
def get_questions():
    return {
        "questions": questions
    }

# ==============================
# SUBMIT ANSWER
# ==============================

@router.post("/answer")
def submit_answer(data: dict):
    return {
        "message": "Answer received",
        "answer": data
    }

# ==============================
# EVALUATE ANSWER
# ==============================

@router.post("/evaluate")
def evaluate_answer(data: dict):

    answer = data.get("answer", "").strip()

    word_count = len(answer.split())

    if word_count < 8:

        score = 4

        strengths = (
            "Your answer is understandable, "
            "but it is too short."
        )

        suggestions = (
            "Add more details, relevant skills, "
            "and an example."
        )

        feedback = (
            "Try to give a more complete "
            "and structured response."
        )

    elif word_count < 20:

        score = 6

        strengths = (
            "You have addressed the question clearly."
        )

        suggestions = (
            "Add a specific example or experience."
        )

        feedback = (
            "Good start. Add more relevant details."
        )

    elif word_count < 40:

        score = 8

        strengths = (
            "Your answer is clear, relevant, "
            "and well structured."
        )

        suggestions = (
            "Add a specific achievement "
            "or real-world example."
        )

        feedback = (
            "Good response. A little more specificity "
            "would make it stronger."
        )

    else:

        score = 9

        strengths = (
            "Your answer is detailed, relevant, "
            "and well communicated."
        )

        suggestions = (
            "Keep your answer focused and avoid "
            "unnecessary information."
        )

        feedback = (
            "Excellent response with good detail "
            "and structure."
        )

    return {
        "score": score,
        "strengths": strengths,
        "suggestions": suggestions,
        "feedback": feedback
    }