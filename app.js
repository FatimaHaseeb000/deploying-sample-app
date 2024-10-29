// app.js
document.getElementById('inputField').addEventListener('input', function() {
    const inputText = this.value;

    // Check if the input matches the specific sentence
    if (inputText === "fetch data") {
        fetchData();
    }
});

async function fetchData() {
    const url = 'data.json'; // Path to your JSON file

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').innerText = 'Error fetching data';
    }
}

function displayData(data) {
    // Assuming data is an object with properties to display
    document.getElementById('output').innerHTML = `
        <h2>Fetched Data:</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}