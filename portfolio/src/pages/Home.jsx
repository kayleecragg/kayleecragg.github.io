import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const sentences = [
  "listening to laufey",
  "playing path to nowhere",
  "re-watching arcane",
  "drawing my favs <3",
  "playing love and deepspace"
];

export default function Home() {
  const [typingText, setTypingText] = useState('');
  const stateRef = useRef({
    sentenceIndex: 0,
    charIndex: 0,
    isTyping: true
  });

  useEffect(() => {
    const typingDelay = 34;
    const erasingDelay = 30;
    const newSentenceDelay = 900;
    let timeoutId;

    const type = () => {
      const { sentenceIndex, charIndex, isTyping } = stateRef.current;
      
      if (isTyping) {
        if (charIndex < sentences[sentenceIndex].length) {
          setTypingText(prev => prev + sentences[sentenceIndex].charAt(charIndex));
          stateRef.current.charIndex++;
          timeoutId = setTimeout(type, typingDelay);
        } else {
          stateRef.current.isTyping = false;
          timeoutId = setTimeout(type, newSentenceDelay);
        }
      } else {
        if (charIndex > 0) {
          setTypingText(prev => prev.slice(0, -1));
          stateRef.current.charIndex--;
          timeoutId = setTimeout(type, erasingDelay);
        } else {
          stateRef.current.isTyping = true;
          stateRef.current.sentenceIndex = (stateRef.current.sentenceIndex + 1) % sentences.length;
          timeoutId = setTimeout(type, typingDelay + 1100);
        }
      }
    };

    timeoutId = setTimeout(type, newSentenceDelay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div id="main">
          <div className="text-box">
            <p id="aboutme">kaylee cragg</p>
            <div id="static-text" className="typing-effect">
              i am currently a student at <br />the university of
              new south wales<br />pursuing a degree in computer science<br /><br />
              i'm likely <span id="typing">{typingText}</span><span className="typing-cursor">|</span>(:<br /><br />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}