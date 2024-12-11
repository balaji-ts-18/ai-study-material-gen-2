'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {

    const {courseID} = useParams();
    const [quizData, setQuizData] = useState();
    const [quiz, setQuiz] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState();

    useEffect(() => {
        GetQuiz();
    }, [])

    
    const GetQuiz = async () => {
        const result = await axios.post('/api/study-type', {
            courseId : courseID,
            studyType : 'Quiz'
        })
        
        setQuizData(result.data);
        setQuiz(result.data?.content?.questions)
        console.log(result);
    }

    const checkAnswer=(userAnswer, currentQuestion) => {
        if(userAnswer == currentQuestion?.correctAnswer) {
            setIsCorrectAnswer(true);
            setCorrectAnswer(currentQuestion?.correctAnswer)
            return;
        }
        
        setIsCorrectAnswer(false);
    }

    useEffect(() => {
        setCorrectAnswer(null);
        setIsCorrectAnswer(null);
    }, [stepCount]);

  return (
    <div>
      <h2 className='font-bold text-2xl text-center mb-4'>Quiz</h2>

      <StepProgress data={quiz} stepCount={stepCount} setStepCount={(value)=>setStepCount(value)}  />

        <div>
            {/* {quiz&&quiz.map((item, index)=>( */}
                <QuizCardItem quiz={quiz[stepCount]}
                userSelectedOption={(v)=>checkAnswer(v, quiz[stepCount])}
                />
            {/* ))} */}
        </div>

        {isCorrectAnswer == false && 
        <div>
            <div className='border p-3 border-red-700 bg-red-200 rounded-lg'>
                <h2 className='font-bold text-lg text-red-600'>Incorrect</h2>
                <p className='text-red-600'>Your Answer is Wrong, And Correct Answer is {correctAnswer}</p>
            </div>
        </div> }

        {isCorrectAnswer == true && 
        <div>
            <div className='border p-3 border-green-700 bg-green-200 rounded-lg'>
                <h2 className='font-bold text-lg text-green-600'>Correct</h2>
                <p className='text-green-600'>Your Answer is Correct</p>
            </div>
        </div> }

    </div>
  )
}

export default Quiz
