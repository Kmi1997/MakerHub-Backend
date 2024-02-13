function createPopup() {

    const infoUser = `Cher utilisateur,\n\n
    Nous tenons à vous informer de notre pratique de collecte et de stockage de données en base de données. 
    Nous accordons une grande importance à la protection de votre vie privée et à la transparence dans nos pratiques de traitement des données.\n\n
Lorsque vous utilisez notre site web, certaines informations sont collectées et stockées dans notre base de données. Ces informations incluent:\n\n
- Votre nom et prénom de votre enfant\n
- Votre adresse e-mail\n
- Votre numéro de téléphone\n
- L'âge de votre enfant\n
- Votre préférence au droit à l'image\n\n
Nous collectons ces informations pour le bon fonctionnement du site et pour vous fournir un service de qualité. 
Vos données sont stockées de manière sécurisée et ne sont accessibles qu'aux membres autorisés de notre équipe.\n
Les cookies sont stockés pour une durée de 24 heures. Nous nous engageons à ne pas partager vos informations personnelles.\n
En utilisant notre site web, vous consentez à la collecte et au stockage de vos informations en base de données/cookies. Vous avez le droit de demander l'accès à vos données, de les rectifier ou de les supprimer.\n
Si vous avez des questions ou des préoccupations concernant la collecte ou le stockage de vos données, n'hésitez pas à nous contacter à l'adresse scoolfamily@outlook.com.\n
Nous vous remercions de votre confiance et de votre compréhension.\n
Cordialement,\n
L'équipe de la s'Cool Family.`;


    if (!getCookie()){

        const infos = document.createElement('p');
        infos.innerText = infoUser;
        infos.classList.add('popup-p');
        infos.style.display = 'none';

        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container');

        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popupContainer.appendChild(infos);

        const message = document.createElement('p');
        message.textContent = "Notre site internet utilise des cookies. Ces cookies sont nécessaires au bon " +
            "fonctionnement du site et ne peuvent être refusés.";

        const seeMore = document.createElement('a');
        seeMore.textContent = "En savoir plus";
        seeMore.style.fontSize = '0.5em';
        seeMore.style.marginRight = '2%';
        seeMore.href = "#";
        seeMore.addEventListener('click', function() {
            seeMore.style.display = 'none';
            infos.style.display = 'block';
            message.textContent = "";
        });

        const button = document.createElement('button');
        button.textContent = "OK";
        button.addEventListener('click', closePopup);

        // Ajout des éléments au DOM
        popupContent.appendChild(message);
        popupContent.appendChild(seeMore);
        popupContent.appendChild(button);
        popupContainer.appendChild(popupContent);
        document.body.appendChild(popupContainer);

        // Affichage du popup
        popupContainer.style.display = 'block';
    }
}

function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    while (popupContainer.firstChild) {
        popupContainer.removeChild(popupContainer.firstChild);
    }
    popupContainer.remove();
    document.cookie = "cookieSeen=true;expires=1;path=/";
}

function getCookie() {
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        if (cookie === 'cookieSeen' + '=' + 'true') {
            return true
        }
    }
    return null;
}

createPopup();