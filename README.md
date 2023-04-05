# Techapplication - RaveMatch

Welkom bij ons Techapplication project: RaveMatch, een muziekmatchingsapp voor muziekliefhebbers. Gebruikers ontdekken nieuwe muziek en ontmoeten nieuwe mensen (die dezelfde muziek hebben ontdekt) op basis van het nummer waarmee ze gematcht zijn.

## Inhoudsopgave

- [Functie](#functie)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [API Endpoints](#api-endpoints)
- [Technologieën](#technologieën)
- [Bijdragen](#bijdragen)
- [Licentie](#licentie)

## Functie

RaveMatch is een muziekmatchingsapp die muziekliefhebbers helpt nieuwe nummers te ontdekken en sociale contacten te leggen. Met onze matchingsysteem worden gebruikers verbonden op basis van hun gedeelde muziekinteresses, waardoor ze nieuwe mensen kunnen ontmoeten en hun netwerk kunnen uitbreiden.

## Installatie

Welkom op de repository van team A (TEC1).

1. Clone de repository
git clone https://github.com/briannededeugd/techapplication/

2. Installeer de benodigde dependencies
npm install

3. Voer de volgende commando's uit om te controleren of Node correct is geïnstalleerd
node install
node --version

4. Maak een `.env` bestand aan en voeg de benodigde gegevens toe (bijv. MongoDB URI)

5. Start het project met `npm start`

## Gebruik

### Register
- Nog invullen
### Home
- Nog invullen
### Explore
De Explore pagina toont een lijst van gebruikersprofielen met hun voornaam, achternaam, leeftijd, favoriete liedjes en stemmingen. Gebruikers kunnen andere gebruikers volgen of ontvolgen.
### My Profile
Toont het profiel van de ingelogde gebruiker, met hun naam, leeftijd, profielfoto, 'Liked Songs' en muzikale stemmingen. Gebruikers kunnen ook zien wie ze volgen.
### Filtering
- Nog invullen
### Matching
Op de Matching-pagina kunnen gebruikers het lied ontdekken dat op dat moment het beste bij hen past. Door een vragenlijst in te vullen, wordt de ideale muziekmatch getoond, gebaseerd op de voorkeurstaal die de gebruiker heeft geselecteerd.
### Liking
Gebruikers kunnen nieuwe nummers ontdekken, de artiest en titel van elk nummer bekijken en ervoor kiezen om een nummer leuk of niet leuk te vinden.

## API Endpoints

### filterRouter.js
- `GET /`: Geeft een bevestigingsbericht terug dat aangeeft dat de filterrouter werkt.

### followingrouter.js
- `GET /following/explore`: Laadt de Explore-pagina met een lijst van alle gebruikers.
- `POST /following/follow/:profileId`: Volg of ontvolg een gebruiker op basis van het profileId en de followStatus in het verzoek.
- `GET /following/myprofile/:adminId`: Laadt de My Profile-pagina voor de beheerder met ID adminId, samen met de door de beheerder gelikete nummers.
- `GET /following/followlist`: Laadt de Following-pagina met een lijst van gevolgde gebruikers.
- `POST /following/followlist/:profileId`: Ontvolg een gebruiker op basis van het profileId en de followStatus in het verzoek.

### likingRouter.js
- `GET /liking`: Laadt de Songs-pagina met een lijst van alle nummers.
- `POST /liking/like/:songId`: Like of unlike een nummer op basis van het songId en de likeStatus in het verzoek.

### matchingRouter.js
- `GET /`: Render de 'matchingfeels' pagina.
- `GET /matchingelements`: Render de 'matchingelements' pagina.
- `GET /matchinglanguage`: Render de 'matchinglanguage' pagina.
- `GET /matchingresult`: Render de 'matchingresult' pagina.
- `POST /userPost`: Verwerk en sla de door de gebruiker geselecteerde features, stemmingen en talen op en navigeer naar de volgende pagina.
- `POST /matchingresult`: Verwerk de gebruikersinvoer, filter de liedjes op basis van de geselecteer
 
## Technologieën

Dit zijn de belangrijkste technologieën die we hebben gebruikt voor ons project:
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- bcrypt
- EJS
- env
- Nodemon
- Slug

Daarnaast hebben we de volgende development dependencies gebruikt:
- ESLint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin

Deze zorgen ervoor dat de pakketten consistent zijn en voorkomen meerdere conflicten in de package(-lock).json.

## Bijdragen

Bijdragen van teamleden:

- Tristan: Register / log in
- Brianne: Match
- Elaine: Filter
- Jarno: Track/Save
- Bryan: Like

Wij verwelkom alle hulp om RaveMatch te verbeteren! Als je wilt helpen, volg dan deze stappen:

1. Maak een kopie (fork) van het project.
2. Maak een nieuwe tak (branch) met een duidelijke naam, bijvoorbeeld `nieuwe-functie` of `bug-oplossen`.
3. Doe je aanpassingen in die tak (branch).
4. Zorg dat je code goed past bij de rest van de code en dat je niks kapot maakt.
5. Test je aanpassingen goed en zorg dat alles nog werkt.
6. Sla je aanpassingen op (commit) met een korte uitleg van wat je hebt gedaan.
7. Vraag of je aanpassingen mogen worden toegevoegd (pull request) aan het hoofdproject. Leg uit wat je hebt veranderd, waarom en hoe je het hebt getest.

Als je problemen vindt of nieuwe ideeën hebt, open dan een nieuw probleem (issue) op de [issue tracker](https://github.com/briannededeugd/techapplication/issues). Leg duidelijk uit wat het probleem is of wat je idee is en hoe je het probleem kunt laten gebeuren (als dat kan).

## Licentie

Dit project is gelicenseerd onder de MIT License.

Copyright (c) 2023 Brianne

Zie het [LICENSE](https://github.com/briannededeugd/techapplication/blob/main/LICENSE) bestand voor de volledige licentietekst.