import React from 'react';
import 'antd/dist/antd.css'

type QuestionPropsType = {
    country: string
}

export const Question = (props: QuestionPropsType) => {
    return (
        <div>
            {`Столица ${props.country}?`}
        </div>
    )
}