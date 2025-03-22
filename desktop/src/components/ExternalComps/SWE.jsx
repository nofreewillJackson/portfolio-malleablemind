import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab, TitleBar, Button, ProgressBar } from '@react95/core';
import { New16 } from '@react95/icons';
import { useWindowSize } from '../WindowSizeContext';
import questionsData from './questions.json';



export default function SWECards(props) {
    const showSWECards = props.show;
    const toggleShowSWECards = props.toggle;
    const handleCloseSWECards = () => {
        toggleShowSWECards(false);
    };


    const windowSmall = useWindowSize();

    // Initialize questions from JSON file
    const [questions] = useState(questionsData);

    // State to keep track of current question index for each chapter
    const [currentIndexes, setCurrentIndexes] = useState({
        chapter1: 0,
        chapter2: 0,
        chapter3: 0,
        misc: 0,
    });

    // State to keep track of whether the answer is shown for each chapter
    const [showAnswer, setShowAnswer] = useState({
        chapter1: false,
        chapter2: false,
        chapter3: false,
        misc: false,
    });

    // State to keep track of incorrect answers per chapter
    const [incorrectAnswers, setIncorrectAnswers] = useState({
        chapter1: [],
        chapter2: [],
        chapter3: [],
        misc: [],
    });

    // State to keep track of total questions attempted per chapter
    const [totalAttempted, setTotalAttempted] = useState({
        chapter1: 0,
        chapter2: 0,
        chapter3: 0,
        misc: 0,
    });

    // State to keep track of total correct answers per chapter
    const [totalCorrect, setTotalCorrect] = useState({
        chapter1: 0,
        chapter2: 0,
        chapter3: 0,
        misc: 0,
    });

    const handleSeeAnswer = (chapter) => {
        setShowAnswer((prevShow) => ({
            ...prevShow,
            [chapter]: true,
        }));
    };

    const handleAnswer = (chapter, isCorrect) => {
        const currentQuestion = questions[chapter][currentIndexes[chapter]];
        // Increase total attempted questions for this chapter
        setTotalAttempted((prev) => ({
            ...prev,
            [chapter]: prev[chapter] + 1,
        }));

        if (isCorrect) {
            // Increase total correct answers for this chapter
            setTotalCorrect((prev) => ({
                ...prev,
                [chapter]: prev[chapter] + 1,
            }));
        } else {
            // Add to incorrectAnswers for this chapter
            setIncorrectAnswers((prev) => ({
                ...prev,
                [chapter]: [...prev[chapter], currentQuestion],
            }));
        }
        // Move to next question in the chapter
        setCurrentIndexes((prevIndexes) => ({
            ...prevIndexes,
            [chapter]: prevIndexes[chapter] + 1,
        }));
        // Reset showAnswer for this chapter
        setShowAnswer((prevShow) => ({
            ...prevShow,
            [chapter]: false,
        }));
    };

    const calculatePercentage = (chapter) => {
        if (totalAttempted[chapter] > 0) {
            return Math.round((totalCorrect[chapter] / totalAttempted[chapter]) * 100);
        } else {
            return 0;
        }
    };

    // Reset function to reset all states
    const handleReset = () => {
        setCurrentIndexes({
            chapter1: 0,
            chapter2: 0,
            chapter3: 0,
            misc: 0,
        });
        setShowAnswer({
            chapter1: false,
            chapter2: false,
            chapter3: false,
            misc: false,
        });
        setIncorrectAnswers({
            chapter1: [],
            chapter2: [],
            chapter3: [],
            misc: [],
        });
        setTotalAttempted({
            chapter1: 0,
            chapter2: 0,
            chapter3: 0,
            misc: 0,
        });
        setTotalCorrect({
            chapter1: 0,
            chapter2: 0,
            chapter3: 0,
            misc: 0,
        });
    };

    // Define the default position
    const screenW = 88;
    const screenH = 22;

    return (
        <>
            {showSWECards && (
                <Modal
                    width={windowSmall ? '100%' : '30vw'}
                    height={windowSmall ? '100%' : 'auto'}
                    style={{
                        maxWidth: windowSmall ? '100vw' : 'none',
                        maxHeight: windowSmall ? '100vh' : 'none',
                        overflow: 'auto',
                        position: 'absolute',
                        left: windowSmall ? 0 : screenW,
                        top: windowSmall ? 0 : screenH,
                    }}
                    icon={<New16 variant="16x16_4" />}
                    title="Flashcards"
                    dragOptions={
                        windowSmall
                            ? { disabled: true }
                            : {
                                defaultPosition: {
                                    x: screenW - 88,
                                    y: screenH - 22,
                                },
                            }
                    }
                    titleBarOptions={[
                        <TitleBar.Help
                            key="help"
                            onClick={() => {
                                alert('ur on ur own kiddo');
                            }}
                        />,
                        <TitleBar.Close key="close" onClick={handleCloseSWECards} />,
                    ]}
                >
                    <Tabs defaultActiveTab="Chapter 1">
                        <Tab title="Chapter 1">
                            <div
                                className="scrollable-content"
                                style={{
                                    maxHeight: 'calc(90vh - 100px)',
                                    overflowY: 'auto',
                                    paddingRight: '15px',
                                }}
                            >
                                {questions.chapter1 && questions.chapter1.length > 0 ? (
                                    currentIndexes.chapter1 < questions.chapter1.length ? (
                                        <div>
                                            <p>{questions.chapter1[currentIndexes.chapter1].question}</p>
                                            {!showAnswer.chapter1 ? (
                                                <Button onClick={() => handleSeeAnswer('chapter1')}>See Answer</Button>
                                            ) : (
                                                <div>
                                                    <p>{questions.chapter1[currentIndexes.chapter1].answer}</p>
                                                    <Button onClick={() => handleAnswer('chapter1', true)}>was correct</Button>
                                                    <Button onClick={() => handleAnswer('chapter1', false)}>was incorrect</Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div>
                                            <p>No more questions in Chapter 1</p>
                                            <p>Your Score:</p>
                                            <ProgressBar percent={calculatePercentage('chapter1')} width="200px" />
                                        </div>
                                    )
                                ) : (
                                    <p>Loading questions...</p>
                                )}
                            </div>
                        </Tab>
                        <Tab title="Chapter 2">
                            <div
                                className="scrollable-content"
                                style={{
                                    maxHeight: 'calc(90vh - 100px)',
                                    overflowY: 'auto',
                                    paddingRight: '15px',
                                }}
                            >
                                {questions.chapter2 && questions.chapter2.length > 0 ? (
                                    currentIndexes.chapter2 < questions.chapter2.length ? (
                                        <div>
                                            <p>{questions.chapter2[currentIndexes.chapter2].question}</p>
                                            {!showAnswer.chapter2 ? (
                                                <Button onClick={() => handleSeeAnswer('chapter2')}>See Answer</Button>
                                            ) : (
                                                <div>
                                                    <p>{questions.chapter2[currentIndexes.chapter2].answer}</p>
                                                    <Button onClick={() => handleAnswer('chapter2', true)}>Correct</Button>
                                                    <Button onClick={() => handleAnswer('chapter2', false)}>Incorrect</Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div>
                                            <p>No more questions in Chapter 2</p>
                                            <p>Your Score:</p>
                                            <ProgressBar percent={calculatePercentage('chapter2')} width="200px" />
                                        </div>
                                    )
                                ) : (
                                    <p>Loading questions...</p>
                                )}
                            </div>
                        </Tab>
                        <Tab title="Chapter 3">
                            <div
                                className="scrollable-content"
                                style={{
                                    maxHeight: 'calc(90vh - 100px)',
                                    overflowY: 'auto',
                                    paddingRight: '15px',
                                }}
                            >
                                {questions.chapter3 && questions.chapter3.length > 0 ? (
                                    currentIndexes.chapter3 < questions.chapter3.length ? (
                                        <div>
                                            <p>{questions.chapter3[currentIndexes.chapter3].question}</p>
                                            {!showAnswer.chapter3 ? (
                                                <Button onClick={() => handleSeeAnswer('chapter3')}>See Answer</Button>
                                            ) : (
                                                <div>
                                                    <p>{questions.chapter3[currentIndexes.chapter3].answer}</p>
                                                    <Button onClick={() => handleAnswer('chapter3', true)}>Correct</Button>
                                                    <Button onClick={() => handleAnswer('chapter3', false)}>Incorrect</Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div>
                                            <p>No more questions in Chapter 3</p>
                                            <p>Your Score:</p>
                                            <ProgressBar percent={calculatePercentage('chapter3')} width="200px" />
                                        </div>
                                    )
                                ) : (
                                    <p>Loading questions...</p>
                                )}
                            </div>
                        </Tab>
                        <Tab title="Misc">
                            <div
                                className="scrollable-content"
                                style={{
                                    maxHeight: 'calc(90vh - 100px)',
                                    overflowY: 'auto',
                                    paddingRight: '15px',
                                }}
                            >
                                {questions.misc && questions.misc.length > 0 ? (
                                    currentIndexes.misc < questions.misc.length ? (
                                        <div>
                                            <p>{questions.misc[currentIndexes.misc].question}</p>
                                            {!showAnswer.misc ? (
                                                <Button onClick={() => handleSeeAnswer('misc')}>See Answer</Button>
                                            ) : (
                                                <div>
                                                    <p>{questions.misc[currentIndexes.misc].answer}</p>
                                                    <Button onClick={() => handleAnswer('misc', true)}>Correct</Button>
                                                    <Button onClick={() => handleAnswer('misc', false)}>Incorrect</Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div>
                                            <p>No more questions in Misc</p>
                                            <p>Your Score:</p>
                                            <ProgressBar percent={calculatePercentage('misc')} width="200px" />
                                        </div>
                                    )
                                ) : (
                                    <p>Loading questions...</p>
                                )}
                            </div>
                        </Tab>
                        <Tab title="Result">
                            <div
                                className="scrollable-content"
                                style={{
                                    maxHeight: 'calc(90vh - 100px)',
                                    overflowY: 'auto',
                                    paddingRight: '15px',
                                }}
                            >
                                {Object.values(incorrectAnswers).some((arr) => arr.length > 0) ? (
                                    <div>
                                        <h3>Incorrect Answers:</h3>
                                        {Object.keys(incorrectAnswers).map((chapter) =>
                                            incorrectAnswers[chapter].map((item, index) => (
                                                <div key={`${chapter}-${index}`}>
                                                    <p>
                                                        <strong>Chapter:</strong> {chapter}
                                                    </p>
                                                    <p>
                                                        <strong>Question:</strong> {item.question}
                                                    </p>
                                                    <p>
                                                        <strong>Answer:</strong> {item.answer}
                                                    </p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                ) : (
                                    <p>So far so good..</p>
                                )}
                                <div>
                                    <h3>Your Overall Scores:</h3>
                                    <ul>
                                        <li>
                                            Chapter 1:
                                            <ProgressBar percent={calculatePercentage('chapter1')} width="200px" />
                                        </li>
                                        <li>
                                            Chapter 2:
                                            <ProgressBar percent={calculatePercentage('chapter2')} width="200px" />
                                        </li>
                                        <li>
                                            Chapter 3:
                                            <ProgressBar percent={calculatePercentage('chapter3')} width="200px" />
                                        </li>
                                        <li>
                                            Misc:
                                            <ProgressBar percent={calculatePercentage('misc')} width="200px" />
                                        </li>
                                    </ul>
                                </div>
                                {/* Add a Reset button in the Result tab */}
                                <Button onClick={handleReset} style={{ marginTop: '20px' }}>
                                    Reset Progress
                                </Button>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal>
            )}
        </>
    );
}
