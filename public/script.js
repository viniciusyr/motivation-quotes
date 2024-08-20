import { getURL } from './quotesAPI.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const { authorText, quoteText } = await getURL();
        if (authorText && quoteText) {
            const quoteContainer = document.getElementById('quote-container');
            const authorContainer = document.getElementById('author-container');
            if (quoteContainer && authorContainer) {
                quoteContainer.innerText = quoteText;
                authorContainer.innerText = authorText;
            } else {
                console.error('Elementos HTML não encontrados.');
            }
        }
    } catch (error) {
        console.error('Error in script:', error);
    }
});
