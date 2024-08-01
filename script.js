//your JS code here. If required.
  const getNumbers = () => new Promise(resolve => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);
        });

        // Function to filter out odd numbers
        const filterOddNumbers = (numbers) => new Promise(resolve => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(number => number % 2 === 0);
                resolve(evenNumbers);
            }, 1000);
        });

        // Function to multiply even numbers by 2
        const multiplyEvenNumbers = (numbers) => new Promise(resolve => {
            setTimeout(() => {
                const multipliedNumbers = numbers.map(number => number * 2);
                resolve(multipliedNumbers);
            }, 2000);
        });

        // Getting the output div
        const outputDiv = document.getElementById('output');

        // Chaining the promises
        getNumbers()
            .then(numbers => {
                outputDiv.textContent = `Initial array: ${numbers.join(', ')}`;
                return filterOddNumbers(numbers);
            })
            .then(evenNumbers => {
                outputDiv.textContent = `Even numbers: ${evenNumbers.join(', ')}`;
                return multiplyEvenNumbers(evenNumbers);
            })
            .then(multipliedNumbers => {
                outputDiv.textContent = `Multiplied even numbers: ${multipliedNumbers.join(', ')}`;
            })
            .catch(error => {
                outputDiv.textContent = `Error: ${error}`;
            });