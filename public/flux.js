
let section = document.querySelector('section');
section.style.marginTop = '200px';

const optionsDate = { year: 'numeric', month: 'long', day: 'numeric'};

document.addEventListener('DOMContentLoaded', function() {
    fetch('/public/getInternships')
        .then(response => response.json())
        .then(data => data.internships.forEach(elem => {

            let intDiv = document.createElement('div');
            let name = document.createElement('p');
            let infosDiv = document.createElement('div');
            let numberAvailable = document.createElement('p');
            let age = document.createElement('p');
            let hour = document.createElement('p');
            let date = document.createElement('p');
            let infoDivBottom = document.createElement('div');
            let startDate = new Date(elem.startDate).toLocaleDateString('fr-FR', optionsDate);
            let endDate = new Date(elem.endDate).toLocaleDateString('fr-FR', optionsDate);
            let price = document.createElement('p');
            let register = document.createElement('a');

            register.textContent = "S'inscrire ici";
            register.style.fontSize = '1.7em';
            register.style.position = 'absolute';
            register.style.left = '78%';
            register.style.color = '#ea8118';

            price.innerText = elem.price + '€';
            price.style.transform = 'rotate(-22deg)';
            price.style.fontSize = '2.1em';
            price.style.position = 'absolute';
            price.style.right = '78%';

            date.innerText = 'Du ' + startDate + ' au ' + endDate;
            hour.innerText = 'De ' + elem.startHour + ' à ' + elem.endHour;

            infoDivBottom.style.display = 'flex';
            infoDivBottom.style.flexDirection = 'column';
            infoDivBottom.style.alignItems = 'center';
            infoDivBottom.appendChild(date);
            infoDivBottom.appendChild(hour);

            age.innerText = 'À partir de ' + elem.fromAge + " ans";

            if (elem.desc) {
                let desc = document.createElement('p');
                desc.style.fontSize = '1.4em';
                desc.innerText = elem.desc.trim();
                infosDiv.appendChild(desc);
            }

            numberAvailable.style.fontSize = '1.2em';
            numberAvailable.innerText = elem.numberAvailable + " places disponibles";

            infosDiv.style.display = 'flex';
            infosDiv.style.flexDirection = 'column';
            infosDiv.style.alignItems = 'center';
            infosDiv.appendChild(numberAvailable);
            infosDiv.appendChild(price);
            infosDiv.appendChild(age);
            infosDiv.appendChild(register);

            name.innerText = elem.name + " à " + elem.place;
            name.style.textAlign = 'center';
            name.style.fontSize = '2.4em';

            intDiv.appendChild(name);
            intDiv.appendChild(infosDiv);
            intDiv.style.marginTop = '100px';
            intDiv.style.marginBottom = '10px';
            intDiv.style.border = '1px solid black';
            intDiv.style.boxShadow = '2px 1px 7px black';
            intDiv.style.borderRadius = '5px 5px 5px';
            intDiv.style.width = '700px';

            if (elem.image) {
                let img = document.createElement('img');
                img.alt = 'Image du stage';
                img.style.display = 'block';
                img.style.margin = 'auto';
                img.style.marginTop = '50px';
                img.src = 'data:image/png;base64,' + elem.image;
                intDiv.appendChild(img);
            }

            intDiv.appendChild(infoDivBottom);
            section.appendChild(intDiv);

        }))
        .catch(error => console.log(error));
});