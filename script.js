// --- Main Celebration Icon Logic ---
const icon = document.getElementById('celebration-icon');
const messageElement = document.querySelector('.message');
const promptElement = document.querySelector('.click-prompt');
const originalMessage = messageElement.textContent;

icon.addEventListener('click', function() {
    icon.classList.add('wisdom-glow');
    messageElement.textContent = "Your wisdom shines brighter with every year. Thank you for all you teach us. Happy Birthday!";
    promptElement.classList.add('hidden'); 

    setTimeout(() => {
        icon.classList.remove('wisdom-glow');
        messageElement.textContent = originalMessage; 
        promptElement.classList.remove('hidden'); 
    }, 4000); 
});

// --- FLOATING BALLOONS & HATS LOGIC ---
const balloonContainer = document.getElementById('balloon-container');
const hatContainer = document.getElementById('hat-container');

const balloonEmojis = ['🎈', '✨', '🌟', '💛']; // Added some celebratory emojis
const hatEmojis = ['🎩', '👑', '🥳', '🎉']; // Added crown and party popper

function createFloatingElement(container, emojis, className) {
    const element = document.createElement('div');
    element.classList.add(className);
    element.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Random emoji
    
    // Randomize starting horizontal position
    element.style.left = `${Math.random() * 100}vw`; 
    
    // Randomize animation duration for variety
    element.style.animationDuration = `${Math.random() * 8 + 8}s`; // 8-16 seconds
    element.style.animationDelay = `-${Math.random() * 8}s`; // Stagger start times
    
    container.appendChild(element);

    // Remove element after it's gone off-screen to prevent DOM clutter
    element.addEventListener('animationend', () => {
        element.remove();
    });
}

// Generate a new balloon every 1-2 seconds
setInterval(() => createFloatingElement(balloonContainer, balloonEmojis, 'balloon'), Math.random() * 1000 + 1000); 

// Generate a new hat every 2-3 seconds
setInterval(() => createFloatingElement(hatContainer, hatEmojis, 'hat'), Math.random() * 1000 + 2000); 


// --- GIFTS