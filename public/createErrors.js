
function createErrors() {
    try {
        const errors = document.getElementById('errors');
        if (errors) {
            const div = document.createElement('div');
            div.id = 'divErrors';
            const text = errors.textContent;
            const textArray = text.split(',');
            textArray.forEach(sentence => {
                const p = document.createElement('p');
                p.appendChild(document.createTextNode(sentence));
                p.style.color = 'red';
                p.classList.add('errors');
                div.appendChild(p);
                document.body.appendChild(div);
            });
        }
    }
    catch(err) {}
}
