const message = document.querySelector('.message');
const stack = document.querySelector('.stack');
const bugContainer = document.querySelector('.bugs-container');

console.log(message, stack);

fetch('https://wadudu.herokuapp.com/api/errors')
.then(res => res.json())
.then(bugs => {
    bugs.forEach(bug => {
        const bugElement = document.createElement('div');
        bugElement.className = 'bug'
        const h1 = document.createElement('h1');
        h1.innerHTML = bug.message;
        h1.style.color = "red";
        const p = document.createElement('p');
        p.style.color = "green"; 
        p.style.fontWeight = "bold";
        p.innerHTML = bug.stack;
        bugElement.appendChild(h1);
        bugElement.appendChild(p);
        bugContainer.appendChild(bugElement);
    });
})

.catch(err => console.log(err));