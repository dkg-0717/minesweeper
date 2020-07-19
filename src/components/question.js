import React from 'react'
import '../assets/styles/question.css'

const Question = ({ showModal, setModal, currentItem, setActive, currentQuestion }) => {

    if (showModal == 0) return null

    console.log(currentQuestion)

    const closeModal = () => {
        setActive(0)
        setModal(0)
    }

    return (
        <div className={`question `}>
            <div className={`question-container ${showModal == 1 ? 'showModal' : null}`}>
                <button onClick={closeModal}>Close Modal</button>
            </div>
        </div>
    )
}

export default Question
