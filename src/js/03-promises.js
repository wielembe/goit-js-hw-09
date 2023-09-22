const promiseDataForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const delayNumber = parseInt(event.target.elements['delay'].value);
  const stepNumber = parseInt(event.target.elements['step'].value);
  const amountNumber = parseInt(event.target.elements['amount'].value);
  for (let i = 0; i < amountNumber; i++) {
    createPromise(i + 1, delayNumber + stepNumber * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};
promiseDataForm.addEventListener('submit', handleSubmit);
