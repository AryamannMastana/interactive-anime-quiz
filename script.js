const correctAns = ['C','C','B','B','D','D','C','B','D','C'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoretext = document.querySelector('.score-text');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // Check answers
    userAns.forEach((answer,index) => {
        if(answer === correctAns[index]){
            score += 10;
        }
    });

    console.log(score);

    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        scoretext.textContent = output;
        if(output === score){
            clearInterval(timer);
        }
        output++;
    }, 30);
    
});
