//importando CSS
import './index.css'

//importando Render
import { render } from '@testing-library/react'
import ReactDom from  'react-dom' //O nome necessariamente nao precisa ser ReactDom, mas é uma boa pratica

//Imortando o JSX
import React from 'react'

const elemento = document.getElementById('root')

ReactDom.render( 
    <div>
        <strong>Hello world</strong>
    </div>
    ,elemento)

//OU pode-se fazer assim:

/*
const tag = <strong>Hello world</strong>

ReactDom.render( 
    <div>
        {tag}
    </div>
    ,elemento)    
*/