Figma+Retro: https://trello.com/invite/b/67c096391948eb3cd00e6c78/ATTI9ebde831f2b9782cdc59dd26c31ab21bB416B208/airbean


# Group-exam-Airbean
Orangea björnen

Gruppövning: Airbean

Ni ska bygga en webbapp där det går att beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).
Arbetsgång

    Ni ska arbeta enligt Scrum med dagliga standups (kan vara på morgonen, vid lunch eller eftermiddagen), sprint planering och retro.

    På torsdag 20/2, fredag 21/2, måndag 24/2 och onsdag 26/2 finns det möjlighet till handledning via Discord (Samma rutiner som förra kursen för handledning: Bokning: Använd kö-dokumentet i Discord. När det är er tur, kontakta Mandus och bjud in till möte via Discord).

    Böra med att en i gruppen skapar ett Reactprojekt och pushar upp detta och resterande i gruppen klonar ner repot och sen kör en npm install.

    Arbeta med brancher i Git och gärna med pull requests.

    Diskutera hur ni ska lägga upp strukturen, kodkonventioner, namnstandarder.

    Projektet ska använda SASS.

    Använd Trello för projekt- och uppgiftshantering.

    Sätt upp en sprint backlog med user stories och fördela arbetet i Trello.

Deadline och presentation:

    Inlämning senast fredag 28/2 kl. 23:59.
    Gruppens presentation sker på fredag 28/2 (lektions tid), där resultat och process redovisas inför klassen.

User stories:

    Som användare vill jag kunna se en meny med kaffedrycker.

    Som användare vill jag kunna lägga till produkter i varukorgen.

    Som användare vill jag kunna se och uppdatera varukorgen. (Hur ni vill lösa detta är upp till er, designen visar ingen lösning.)

    Kunna skicka sin order med fetch och alla produkter och få ett svar med en ETA och ordernummer för att sedan se min beställningsstatus.

    Ni får lägga till fler stories eller tekniska uppgifter efter behov.

Figmaskiss

https://www.figma.com/design/Zpx8KqhL7g66JZ6MOhbxJ6/AirBean-v.1.1---Without-profile?node-id=0-1&p=f&t=F3NtupL9M0abMYI4-0
API-dokumentation

https://airbean-9pcyw.ondigitalocean.app/api/docs/

BASE URL

https://airbean-9pcyw.ondigitalocean.app

Ni behöver enbart bry er om följande tre endpoints:

    /api/beans/
    /api/beans/order
    /api/beans/order/status/{orderNr}

Strunta i allt om User från Swaggern.

För att få Godkänt ska du:

    Gjort enligt Figma skissen (viss variation på färger, typsnitt etc är tillåtet).
    Alla specificerade user stories ska vara genomförda.
    Appens styling ska göras med SASS.

För att Väl Godkänt ska du:

    Allt som krävs för G.
    Kunna ta bort produkter ur varukorgen.
    Eftersom kunden vill starta med ett bang! Så vill Airbean fira med ett kampanjerbjudande! : Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr (49 kr billigare totalt). Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.
