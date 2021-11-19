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
        const h4 = document.createElement('h4');
        h4.innerHTML = bug.message;
        h4.style.color = "red";
        const p = document.createElement('p');
        p.style.color = "green"; 
        p.style.fontWeight = "normal";
        p.innerHTML = bug.stack;
        bugElement.appendChild(h4);
        bugElement.appendChild(p);
        bugContainer.appendChild(bugElement);
    });
})

.catch(err => console.log(err));