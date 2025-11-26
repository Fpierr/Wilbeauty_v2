import React, { useEffect } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

const rainPapers = () => {
  for (let i = 0; i < 500; i++) {
    const paper = document.createElement("div");
    paper.className = "fixed top-0 pointer-events-none rounded-[0.75px] shadow-sm z-[9999] opacity-0";
    paper.style.backgroundColor = getRandomColor();
    paper.style.width = `${Math.random() * 7 + 2}px`;
    paper.style.height = `${Math.random() * 7 + 2}px`;
    paper.style.left = `${Math.random() * 100}vw`;
    paper.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    paper.style.animationDelay = `${Math.random() * 2}s`;
    paper.style.transform = `translateX(${Math.random() * 100 - 50}vw)`;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        0% { transform: translateY(0) rotate(0deg); opacity:1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity:0; }
      }
    `;
    if (!document.querySelector('[data-paper-animation]')) {
      style.setAttribute('data-paper-animation', '');
      document.head.appendChild(style);
    }

    document.body.append(paper);
    setTimeout(() => paper.remove(), 3000);
  }
};

const PaperRain = () => {
  useEffect(() => {
    rainPapers();
  }, []);

  return null;
};

export default PaperRain;
