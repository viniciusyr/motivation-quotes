const quotesAPI = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "90cyeigeFCBuAO/CUpfb/A==4atKff2dwzH389Yk";

export async function getURL() {
    try {
        const result = await fetch(quotesAPI, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!result.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await result.json();
        const authorText = data[0].author;
        const quoteText = data[0].quote;
        return { authorText, quoteText };
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
