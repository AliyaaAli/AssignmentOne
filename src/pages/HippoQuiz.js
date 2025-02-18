"use client";
import React, { useState } from "react";
import Link from "next/link";

function HippoQuiz() {
    const questions = [
        { question: "What do hippos mainly eat?", answer: "grass" },
        { question: "Where do hippos spend most of their time?", answer: "water" },
        { question: "Where are hippos most found?", answer: "africa" },
    ];

    const [index, setIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const checkAnswer = () => {
        setSubmitted(true);
    };

    const nextQuestion = () => {
        setIndex((index + 1) % questions.length);
        setUserAnswer("");
        setSubmitted(false);
    };

    return (
        <div className="container">
            <h2>Hippo Quiz</h2>
            <p>{questions[index].question}</p>
            <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
            <button onClick={checkAnswer}>Submit</button>
            {submitted && (userAnswer.toLowerCase() === questions[index].answer ? <p className="correct">Correct!</p> : <p className="wrong">Try Again!</p>)}
            {submitted && <button onClick={nextQuestion}>Next Question</button>}
            <br></br>
            <Link href="/">Back To Home</Link>
        </div>
    );
}

export default HippoQuiz;
