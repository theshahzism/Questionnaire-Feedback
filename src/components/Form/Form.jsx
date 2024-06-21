// import React, { useState } from 'react';
// import './Form.css';

// const Form = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(7).fill('')); 
//   const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

//   const questions = [
//     {
//       question: "What is your favorite programming language?",
//       options: ["JavaScript", "Python", "Java", "C++"],
//       singleSelect: true 
//     },
//     {
//       question: "What is your preferred framework or library?",
//       options: ["React", "Angular", "Vue.js", "jQuery"],
//       singleSelect: true 
//     },
//     {
//       question: "Which backend technology do you prefer?",
//       options: ["Node.js", "Django", "Spring Boot", "Express.js"]
//     },
//     {
//       question: "Which database system do you use most?",
//       options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
//     },
//     {
//       question: "What is your preferred text editor or IDE?",
//       options: ["Visual Studio Code", "Sublime Text", "IntelliJ IDEA", "Atom"]
//     },
//     {
//       question: "What is your favorite programming language?",
//       type: "string" 
//     },
//     {
//       question: "Any additional comments?",
//       type: "string" // Indicates text input question
//     }
//   ];

//   const nextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       if (!validateAnswer()) {
//         setErrorMessage('Please select at least one option or add text before proceeding.');
//         return; // Do not proceed if answer is not valid
//       } else {
//         setErrorMessage(''); // Clear error message if answer is valid
//       }
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const prevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleAnswerChange = (event) => {
//     const { value, type, checked } = event.target;
//     const newAnswers = [...answers];
    
//     if (type === 'checkbox') {
//       const selectedOptions = newAnswers[currentQuestion] || [];
      
//       if (checked) {
//         newAnswers[currentQuestion] = [...selectedOptions, value];
//       } else {
//         newAnswers[currentQuestion] = selectedOptions.filter(option => option !== value);
//       }
//     } else {
//       newAnswers[currentQuestion] = value;
//     }

//     setAnswers(newAnswers);
//   };

//   const validateAnswer = () => {
//     const answer = answers[currentQuestion];
//     if (Array.isArray(answer)) {
//       return answer.length > 0;
//     } else {
//       return answer.trim() !== '';
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateAnswer()) {
//       setErrorMessage('Please select at least one option or enter text before submitting.');
//       return; // Do not submit if answer is not valid
//     }
//     // Handle submission logic here
//     setErrorMessage(''); // Clear error message on successful submission
//     // alert('Form submitted with answers: ' + JSON.stringify(answers));
//   };

//   return (
//     <div className="form-container">
//       <h2>Survey Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="question-block">
//           <p className="question">{questions[currentQuestion].question}</p>
//           {questions[currentQuestion].options ? (
//             <div className="options">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <label key={index} className="option">
//                   <input
//                     type={questions[currentQuestion].singleSelect ? 'radio' : 'checkbox'}
//                     name={`question${currentQuestion}`}
//                     value={option}
//                     checked={answers[currentQuestion].includes(option)}
//                     onChange={handleAnswerChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           ) : (
//             <input
//               type="text"
//               value={answers[currentQuestion]}
//               onChange={handleAnswerChange}
//               className="text-input"
//             />
//           )}
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </div>
//         <div className="navigation-buttons">
//           <button type="button" onClick={prevQuestion} disabled={currentQuestion === 0} className="nav-button">
//             Previous
//           </button>
//           {currentQuestion === questions.length - 1 ? (
//             <button type="submit" className="submit-button" onClick={handleSubmit}>
//               Submit
//             </button>
//           ) : (
//             <button type="button" onClick={nextQuestion} className="nav-button">
//               Next
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;










import React, { useState } from 'react';
import './Form.css';
import axios from 'axios'; // Import Axios for HTTP requests

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(7).fill(''));
  const [username, setUsername] = useState(''); // State for username
  const [errorMessage, setErrorMessage] = useState('');

  const questions = [
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
      singleSelect: true
    },
    {
      question: "What is your preferred framework or library?",
      options: ["React", "Angular", "Vue.js", "jQuery"],
      singleSelect: true
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
    },
    {
      question: "What is your favorite programming language?",
      type: "string"
    },
    {
      question: "Any additional comments?",
      type: "string" // Indicates text input question
    }
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      if (!validateAnswer()) {
        setErrorMessage('Please select at least one option or add text before proceeding.');
        return;
      } else {
        setErrorMessage('');
      }
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (event) => {
    const { value, type, checked } = event.target;
    const newAnswers = [...answers];

    if (type === 'checkbox') {
      const selectedOptions = newAnswers[currentQuestion] || [];

      if (checked) {
        newAnswers[currentQuestion] = [...selectedOptions, value];
      } else {
        newAnswers[currentQuestion] = selectedOptions.filter(option => option !== value);
      }
    } else {
      newAnswers[currentQuestion] = value;
    }

    setAnswers(newAnswers);
  };

  const validateAnswer = () => {
    const answer = answers[currentQuestion];
    if (Array.isArray(answer)) {
      return answer.length > 0;
    } else {
      return answer.trim() !== '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAnswer()) {
      setErrorMessage('Please select at least one option or enter text before submitting.');
      return;
    }

    // Prepare data to send to JSON Server
    const responseData = {
      username: username,
      answers: answers,
    };

    try {
      // Send POST request to JSON Server
      const response = await axios.post('http://localhost:3001/responses', responseData);
      console.log('Response saved:', response.data);

      // Clear form state on successful submission
      setAnswers(Array(7).fill(''));
      setUsername('');
      setCurrentQuestion(0);
      setErrorMessage('');
    } catch (error) {
      console.error('Error saving response:', error);
      setErrorMessage('Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="question-block">
          <p className="question">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options ? (
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type={questions[currentQuestion].singleSelect ? 'radio' : 'checkbox'}
                    name={`question${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion].includes(option)}
                    onChange={handleAnswerChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={answers[currentQuestion]}
              onChange={handleAnswerChange}
              className="text-input"
            />
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className="username-input">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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



