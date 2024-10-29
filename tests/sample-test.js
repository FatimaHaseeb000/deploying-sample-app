import { Selector } from 'testcafe';

fixture `My Web App Tests`
    .page `http://localhost:5500`; // Change to your app's URL

test('Fetch data on correct input', async t => {
    const inputField = Selector('#inputField');
    const outputDiv = Selector('#output');

    await t
        .typeText(inputField, 'fetch data')
        .expect(outputDiv.innerText).contains('Fetched Data:'); // Adjust based on expected output
});