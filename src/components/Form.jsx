import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill([])); // Array to store arrays of selected answers
  const questions = [
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      question: "What is your preferred framework or library?",
      options: ["React", "Angular", "Vue.js", "jQuery"]
    },
    {
      question: "Which backend technology do you prefer?",
      options: ["Node.js", "Django", "Spring Boot", "Express.js"]
    },
    {
      question: "Which database system do you use most?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      question: "What is your preferred text editor or IDE?",
      options: ["Visual Studio Code", "Sublime Text", "IntelliJ IDEA", "Atom"]
    }
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    const questionIndex = parseInt(name.replace('question', ''), 10);
    const newAnswers = [...answers];
    const selectedOptions = newAnswers[questionIndex];

    if (selectedOptions.includes(value)) {
      // Remove if already selected
      newAnswers[questionIndex] = selectedOptions.filter(option => option !== value);
    } else {
      // Add to selected options
      newAnswers[questionIndex] = [...selectedOptions, value];
    }

    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    // alert('Form submitted with answers: ' + JSON.stringify(answers));
  };

  return (
    <div className="form-container">
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="question-block">
          <p className="question">{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="checkbox"
                  name={`question${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion].includes(option)}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="navigation-buttons">
          <button type="button" onClick={prevQuestion} disabled={currentQuestion === 0} className="nav-button">
            Previous
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button type="submit" className="submit-button">
              Submit
            </button>
          ) : (
            <button type="button" onClick={nextQuestion} className="nav-button">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
