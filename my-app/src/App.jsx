
import './App.css';
import React from 'react';
import { AboutMe } from './components/AboutMe';
import  AboutMe1  from './components/AboutMe';

// Компонент это функция JS кот возвращает
// ОДИН ТЕГ HTML
// все теги обернуты в одного родителя
// one parent element
// чтобы компонент что-то отрисовывал необходим RETURN
// Компонент называется с большой буквы
//безымянный тег  - это фрагмент <>
export function App() {
  return (
    <>
      <div className="App">Hello world</div>
      <h1>My Name is Natalia</h1>
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </>
  );
}

export default App;

