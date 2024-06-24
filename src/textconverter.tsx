import React, { useState } from 'react';
import './App.css';


const TextConverter: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [wordCount, setWordCount] = useState(0);
  const [charCountWithoutSpaces, setCharCountWithoutSpaces] = useState(0); 
  
 const [darkMode, setDarkMode] = useState(false);
 const [bgColor, setBgColor] = useState<string>('white');

  const handleChange = (event:any) => {
    setInput(event.target.value);
    updateWordCount(event.target.value);
  };

  const convertToUpper = () => {
    setInput(prevInput => prevInput.toUpperCase());
    alert('Text converted to Uppercase!');
  };

  const convertToLower = () => {
    setInput(prevInput => prevInput.toLowerCase());
    alert('Text converted to Lowercase!');
  };

  const updateWordCount = (text: string) => {
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);

    const textWithoutSpaces = text.replace(/\s+/g, '');
    setCharCountWithoutSpaces(textWithoutSpaces.length);
};

const clearText = () => {
    setInput('');
   
    setWordCount(0);
    
    setCharCountWithoutSpaces(0);
    alert('Text is cleared!');
};

const calculateReadingTime = (text: string) => {
    const words = text.split(' ').filter(word => word.length > 0); // Split text by spaces and filter out empty strings
    const numWords = words.length;
    const wordsPerMinute = 200; // Average reading speed (words per minute)
    const readingTimeMinutes = Math.ceil(numWords / wordsPerMinute);
    return readingTimeMinutes;
  };

  const readingTime = calculateReadingTime(input);
  
const copyText = () => {
    // Select the text area content
    const textArea = document.createElement('textarea');
    textArea.value = input;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Text is Copied!');
};

const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode); 
};

const changeBackgroundColor = (color: string) => {
  setBgColor(color);
};


  return (
    
/*  <li className={darkMode ? 'dark-mode' : ''}>
                <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
                </li>*/
    
    <div>
   <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}  style={{ backgroundColor: bgColor }} >
  
    
      <nav className="navbar" >
      
                <ul>
                    <li><a >Text Converter</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li> 
          <li>
            <button onClick={() => changeBackgroundColor('red')}>Red</button>
            <button onClick={() => changeBackgroundColor('lightgreen')}>Green</button>
            <button onClick={() => changeBackgroundColor('lightblue')}>Blue</button>
            <button onClick={() => changeBackgroundColor('grey')}>Dark Mode</button>
            
          </li>
          
                </ul>
             
      </nav>
           
      <h1>Enter the text to analyze below</h1>
     
      <textarea
       
        value={input}
        onChange={handleChange}
        placeholder="Enter Text"
    
      />
      <div>
        <button onClick={convertToUpper}>Convert to Uppercase</button>
        <button onClick={convertToLower}>Convert to Lowercase</button>
        <button onClick={clearText} style= {{ marginLeft: '1rem' }}>Clear Text</button>
        <button onClick={copyText} className="copy-button">Copy Text</button>
      </div>
      <h3>Your Text Summary:</h3>
      <p>{wordCount} words  {charCountWithoutSpaces} characters</p>
      <p>{readingTime} minute read</p>
      <h2>Preview </h2>
      <p>{input}</p>
    
     </div>
            
     </div>
   
  );
};

export default TextConverter;
