import React from 'react'

const QnAns = (props) => {

    const [faqSwitch, setFaqSwitch] = React.useState(false) 

    function toggle() {
        setFaqSwitch(!faqSwitch)
    }


  return (
    <div>
      <div onClick={toggle} className='bg-gray-800 text-white mt-2 pl-4 p-5 rounded-xl'>

        <p>{props.question}</p>

        <p className={faqSwitch? 'mt-6 text-sm text-gray-50 border-t border-t-gray-600 pt-4' : 'hidden'}>{props.answer}</p>

      </div>
    </div>
  )
}

export default QnAns
