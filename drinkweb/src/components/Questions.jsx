import React from 'react'
import "./questions.scss"

const Questions = ({ qaArray }) => {
    return (

        <div className='Questions'>
            <div className='QuestionsContainer'>
                {qaArray.map((options, i) =>
                    <div className='options' key={i}>
                        <p>{options.id}. {options.desc}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Questions;