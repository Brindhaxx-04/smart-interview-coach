from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


@router.get("/questions")
def get_questions():
    return {
        "questions": [
            "Tell me about yourself.",
            "What are your strengths?",
            "Why should we hire you?"
        ]
    }


class AnswerRequest(BaseModel):
    question: str
    answer: str


@router.post("/answer")
def submit_answer(data: AnswerRequest):
    return {
        "question": data.question,
        "answer": data.answer,
        "message": "Answer received successfully!"
    }


@router.post("/evaluate")
def evaluate_answer(data: AnswerRequest):
    answer_length = len(data.answer.split())

    if answer_length >= 20:
        score = 8
        feedback = "Good answer. Your response has enough detail."
    elif answer_length >= 10:
        score = 6
        feedback = "Good start. Try adding more details and examples."
    else:
        score = 4
        feedback = "Your answer is too short. Try explaining with more details."

    return {
        "question": data.question,
        "score": score,
        "feedback": feedback
    }