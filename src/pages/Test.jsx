import { useEffect, useState } from "react"
import { Snowfall } from "react-snowfall"
import { questions } from '../consts/questions'
import { ProgressBar } from "../conponents/ProgressBar/ProgrssBar"





export const Test = () => {
    const [questionList, setQuestionList] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [points, setPoints] = useState(0)
    const [isFinished, setIsFinished] = useState(false)


    function handleGetRandomQuestions(questions) {
        const randomChoiceQuestions = [];

        while (randomChoiceQuestions.length < 10) {
            const randomIndex = Math.floor(Math.random() * questions.length);

            const question = questions[randomIndex];

            let isUnique = true;

            for (let i = 0; i < randomChoiceQuestions.length; i++) {
                if (randomChoiceQuestions[i].title === question.title) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                randomChoiceQuestions.push(question);
            }
        }
        return randomChoiceQuestions;
    }

    useEffect(() => {
        const randomQuestions = handleGetRandomQuestions(questions);
        setQuestionList(randomQuestions);
        setCurrentQuestion(randomQuestions[0]);
        console.log(randomQuestions.length)
    }, []);


    function handleResponse(responseIndex) {
        if (currentQuestion.correct === responseIndex) {
            setPoints(prev => ++prev)

        }
        if (currentQuestionIndex >= questionList.length - 1) {
            setIsFinished(true)
            return
        }

        setCurrentQuestionIndex(prev => {
            const newIndex = ++prev
            setCurrentQuestion(questionList[newIndex])
            return newIndex
        })
    }

    if (currentQuestion == null) {
        return <div></div>
    }



    return (
        <section style={{
            margin: 'auto',
            maxWidth: 680,
            marginTop: 80
        }}>
            <ProgressBar current={currentQuestionIndex} total={questionList.length - 1} />
            <section key={currentQuestion.title}>
                {isFinished
                    ? (<>
                        <h1 style={{
                            marginTop: 30
                        }}>
                            Итоговый бал: {points}
                        </h1>
                        <section style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <img style={{
                                width: 300,
                            }}
                                src={points > 7 ? "./gifs/win.gif" : "./gifs/defeat.gif"}
                            />
                            <audio
                                controls
                                loop
                                autoPlay
                                style={{
                                    visibility: 'hidden'
                                }}>
                                <source src={points > 7 ? "./audio/win.mp3" : "./audio/defeat.mp3"} type="audio/mpeg" />
                            </audio>
                        </section>
                    </>)
                    : (
                        <>
                            <h1 style={{
                                marginTop: 20
                            }}>
                                Вопрос: <br />

                            </h1>
                            <p style={{
                                marginTop: 10,
                                textAlign: 'justify',
                                fontWeight: 600
                            }}>
                                {currentQuestion.title}
                            </p>
                            <section>
                                <h3 style={{
                                    marginTop: 20
                                }}>
                                    Ответы:
                                </h3>
                                <ul style={{
                                    marginTop: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10
                                }}>
                                    {currentQuestion.answers.map((ans, index) => (
                                        <li key={index}>
                                            <button onClick={() => handleResponse(index)} style={{
                                                minWidth: 300
                                            }}>
                                                {ans}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <section>
                                </section>
                            </section>
                        </>
                    )}

            </section>
            <Snowfall />
        </section>
    )
}
