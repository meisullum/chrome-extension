import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './popup.css'

const text = <p>Hello world, My name is Mei</p>

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(text)
