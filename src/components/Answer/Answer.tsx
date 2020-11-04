import React from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';
import { Button } from 'antd';

type AnswerPropsType = {
    capital: string
}

export const Answer = (props: AnswerPropsType) => {
    return (
        <div>
            <Input placeholder={props.capital} />
            <Button type="primary">Ответить</Button>
        </div>
    )
}