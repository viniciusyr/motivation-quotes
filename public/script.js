import { getURL } from './quotesAPI.js';

let quoteText = '';
let authorText = '';

document.addEventListener('DOMContentLoaded', async () => {
    await fetchAndDisplayQuote();
});

async function fetchAndDisplayQuote() {
    try {
        const { authorText: newAuthorText, quoteText: newQuoteText } = await getURL();
        if (newAuthorText && newQuoteText) {
            quoteText = newQuoteText;
            authorText = newAuthorText;
            
            const quoteContainer = document.getElementById('quote-container');
            const authorContainer = document.getElementById('author-container');
            if (quoteContainer && authorContainer) {
                quoteContainer.innerText = quoteText;
                
                const searchQuery = authorText.replace(/\s+/g, '+'); 
                const searchLink = `https://www.google.com/search?q=${searchQuery}`;
                authorContainer.innerHTML = `<a href="${searchLink}" target="_blank">${authorText}</a>`;
            } else {
                console.error('Error: The containers were not found!');
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function refreshQuote() {
    fetchAndDisplayQuote(); 
}

window.refreshQuote = refreshQuote;
