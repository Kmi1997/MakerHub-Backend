let section = document.querySelector('section');
document.addEventListener('DOMContentLoaded', function() {
    fetch('/public/getInternships')
        .then(response => response.json())
        .then(data => data.internships.forEach(elem => {

            let intDiv = document.createElement('div');
            intDiv.innerText = 'Coucou'
            section.appendChild(intDiv);

        }))
        .catch(error => console.log(error));
});