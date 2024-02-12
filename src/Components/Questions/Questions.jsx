import React from 'react'
import './Questions.css'

const Questions = () => {
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
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""},
    {question: "", answer: ""}
  ]

  return (
    <div className='trivia'>
      <div className="question"></div>
      <button className="reveal">Reveal Answer</button>
      <div className="answer"></div>
    </div>
  )
}

export default Questions