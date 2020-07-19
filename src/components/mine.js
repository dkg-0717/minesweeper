import React, { useEffect, useState } from 'react'
import smile from '../assets/images/smile.png'
import bomb from '../assets/images/bomb.png'
import MineGame from '../utils/create-grid'
import Question from '../components/question'
import questions from '../utils/questions.json'

const Mine = () => {

  // let [mine, setMine] = useState([])
  let [modal, setModal] = useState(0)
  let [isActive, setActive] = useState(0)
  let [gridItems, setGridItems] = useState([])
  let [currentQuestion, setCurrentQuestion] = useState({})
  // let filas = 3
  // let columnas = 4
  let totalItems = 36
  let bombs = 16
  let totalGrids = Array(totalItems).fill("")
  let mineClass = new MineGame({ bombs, totalGrids })
  let currentItem = 0
  let totalQuestions = questions


  useEffect(() => {
    console.log(questions)
    setGridItems(mineClass.getGridItems())
    // setMine(totalGrids.length)
    mineClass.setGridConfig()
  }, [])

  const getRandomQuestion = () => {
    let random = Math.floor(Math.random() * (totalQuestions.length - 0) + 0)
    let question = totalQuestions.splice(random, 1)
    return question
  }

  const hideCover = (evt) => {
    mineClass.hideCover(evt)
    if (mineClass.getAnswer() == 'bomb') {
      setCurrentQuestion(getRandomQuestion())
      setActive(1)
      setTimeout(() => {
        setModal(1)
      }, 750)
    }
  }

  if (gridItems == []) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="mine" >
        {
          gridItems.map((item, index) => {
            return (
              <div className="cover" style={{ pointerEvents: isActive == 1 ? 'none' : 'auto' }} onClick={(evt) => {
                hideCover(evt)
              }} key={index}>{index}
                <div className="item" data-type={item.bg} key={index} style={{ backgroundImage: `url(${item.bg == 'smile' ? smile : bomb})` }}>
                </div>
              </div>
            )
          })
        }
      </div>
      <Question
        showModal={modal}
        setModal={setModal}
        currentItem={currentItem}
        setActive={setActive}
        currentQuestion={currentQuestion}
      />
    </>
  )
}

export default Mine;