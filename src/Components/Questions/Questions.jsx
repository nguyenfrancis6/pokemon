import React from 'react'
import './Questions.css'
import { useState, useEffect } from 'react'
import triviaImage from '../../assets/trivia.png'

const Questions = () => {

  const [answer, setAnswer] = useState()
  const [question, setQuestion] = useState()
  const [textHidden, setTextHidden] = useState(true)

  useEffect(() => {
    randomQuestion()
  }, [])

  function randomQuestion() {
    const question = info[Math.floor(Math.random() * info.length)]
    setQuestion(question.question)
    setAnswer(question.answer)
  }

  function reset() {
    randomQuestion()
    setTextHidden(true)
  }
  
  const info = [
    {question: 'What was the first Pokémon that Ash catched?', answer: 'Caterpie'},
    {question: 'Which legendary bird did Ash see first?', answer: 'Ho-Oh'},
    {question: "This Pokémon was said to have been born from another Pokémon in the video game. However, in a movie, it is said to be the first Pokémon to be created by humans. Who's that Pokémon?", answer: 'Mewtwo' },
    {question: 'Who says this quote: "Smell you later."', answer: 'Gary'},
    {question: "Which Pokémon could originally only be able to be seen with a Silph Scope?", answer: 'Gastly'},
    {question: "What does the word 'Pokémon' translate into?", answer: 'Pocket Monster'},
    {question: "How many Eevee evolutions are there?", answer: "Eight"},
    {question: "Who was the first Pokémon ever designed?", answer: 'Rhydon'},
    {question: 'Who is the god of Pokémon?', answer: 'Arceus'},
    {question: "Pokedex entry: Symbol Pokémon", answer: "Unown"},
    {question: 'Quote: "We hope to see you again!"', answer: "Nurse Joy"},
    {question: "Which companies made Pokémon?", answer: "Nintendo and Game Freak"},
    {question: "Who specializes in the Dragon type in the Kanto Elite Four?", answer: "Lance"},
    {question: "How old is Ash at the start of the Pokémon series?", answer: "10"},
    {question: "What are the names of the two Team Rocket members that continually try to steal Ash's Pikachu?", answer: "Jessie and James"},
    {question: 'Which Pokémon is cheerfully described like this in the Pokédex? "It pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds."', answer: "Cubone"},
    {question: "The Alola region, which was the setting for Pokémon Sun and Pokémon Moon, is loosely based on which US state?", answer: "Hawaii"},
    {question: "Unova draws inspiration for its geographical and social background from which U.S. state?", answer: "New York"},
    {question: "What is the signature move of Dialga?", answer: "Roar of Time"},
    {question: "Which 3 legendary pokemon are referred to as 'The Weather Trio'?", answer: "Rayquaza, Kyogre, Groudon"}
  ]

  return (
    <>
    <div className='header'>
      <h1>PokéTrivia</h1>
      <img src={triviaImage} alt="" />
    </div>
    <div className='trivia'>
      <div className="question">{question}</div>
      <div className="answer">{textHidden ? '' : answer}</div>
      <button className="reveal" onClick={() => setTextHidden(!textHidden)}>Reveal Answer</button>
      <button className='generate' onClick={() => reset()}>Generate another question</button>
    </div>
    </>
  )
}

export default Questions