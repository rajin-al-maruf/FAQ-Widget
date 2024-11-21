import React from 'react'
import QnAns from './QnAns'
import faqData from '../faqData'
// import { FiPlus } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";


const Faq = () => {

  return (
    <div>
      <div className='max-w-3xl m-auto mt-20 px-4'>
        <p className='text-2xl mb-4 ml-4'>FAQ</p>
        {faqData.map(item => {
          return(
            <QnAns 
              question={item.question}
              answer={item.answer}
              id={item.id}
            />
          )
        })}
        
      </div>
      
    </div>
  )
}

export default Faq
