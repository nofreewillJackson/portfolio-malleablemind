import { Alert, Button, List, Modal, TaskBar, TextArea, TitleBar } from '@react95/core'
import { Access230, BatExec, FileText } from '@react95/icons'
import { useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import styled from 'styled-components'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Window = styled.div`
    padding: 24px;

    form {
        display: flex;
        flex-direction: column;

        textarea {
            margin: 8px 0;
            width: 300px;
        }
    }

    embed {
        height: 80vh;
        width: 80vw;
    }
`

const Icon = styled.button`
    all: unset;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;

    * {
        cursor: pointer;
    }
`

function FlashcardApp({ show, toggle }) {
    const [showAlert, setShowAlert] = useState(false);
    const [showSecondAlert, setShowSecondAlert] = useState(false);  // second alert state
    const [base64, setBase64] = useState('');
    const textarea = useRef(null);

    const handleCloseFlashcard = () => {
        toggle(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // if 'jackson'
        if (event.currentTarget.base64.value.toLowerCase() === 'jackson') {
            window.open('https://example.com', '_blank');
        } else {
            setShowAlert(true);
        }
    };

    const handleFirstAlertClose = () => {
        setShowAlert(false);
        setShowSecondAlert(true);  // Show the second alert after the first is closed
    };

    // Calculate the center position of the modal
    const modalCenterPosition = {
        x: Math.floor(window.innerWidth / 2) - 200,
        y: Math.floor(window.innerHeight / 2) - 200
    };

    return (
        <Window>
            {show ? (
                <Modal
                    titleBarOptions={[
                        <TitleBar.Help
                            key="help"
                            onClick={() => {
                                alert("if you feel like you can't handle life's curveballs, remember we all in this sinking titanic and will die soon anyway so just chill out!");
                            }}
                        />,
                        <TitleBar.Close key="close" onClick={handleCloseFlashcard} />,
                    ]}
                    closeModal={() => toggle(false)}
                    defaultPosition={modalCenterPosition}
                    icon={<BatExec variant='32x32_4' />}
                    title='Send Anonymous Feedback to Jackson'
                >
                    <form onSubmit={handleSubmit}>
                        <TextArea name='base64' ref={textarea} rows={10} />
                        <Button type='submit'>Submit!</Button>
                    </form>
                </Modal>
            ) : null}

            {showAlert ? (
                <Alert
                    title='Oops'
                    type='error'
                    message='Say it to his face instead.'
                    closeAlert={handleFirstAlertClose}  // Close the first alert and show the second
                    buttons={[{ value: 'bruh', onClick: handleFirstAlertClose }]}
                />
            ) : null}

            {showSecondAlert ? (
                <Alert
                    title='OopsX2'
                    type='why?'
                    message='(sorry, DB is currently offline)'
                    closeAlert={() => setShowSecondAlert(false)}  // Close the second alert
                    buttons={[{ value: 'Got it', onClick: () => setShowSecondAlert(false) }]}
                />
            ) : null}

            {base64 ? (
                <Modal
                    closeModal={() => setBase64('')}
                    defaultPosition={modalCenterPosition}
                    icon={<FileText variant='32x32_4' />}
                    menu={[
                        {
                            name: 'File',
                            list: (
                                <List style={{ zIndex: 1 }}>
                                    <List.Item
                                        onClick={() => {
                                            const downloadLink = document.createElement('a');
                                            const fileName = 'decoded pdf.pdf';
                                            downloadLink.href = `data:application/pdf;base64,${base64}`;
                                            downloadLink.download = fileName;
                                            downloadLink.click();
                                        }}
                                    >
                                        Download
                                    </List.Item>
                                </List>
                            ),
                        },
                    ]}
                    title='pdf'
                >
                    <Document file={`data:application/pdf;base64,${base64}`}>
                        <Page pageNumber={1} />
                    </Document>
                </Modal>
            ) : null}

        </Window>
    );
}

export default FlashcardApp;
