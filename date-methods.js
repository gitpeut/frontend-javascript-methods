/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay.toLocaleString() );


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

const nowDate = new Date();

console.log( nowDate.toTimeString() );
console.log( nowDate.getHours() );
console.log( nowDate.getMinutes() );



/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

const longOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};

// Using the english locale produces commas after the weekday and the date
let enDateWithCommas = currentDay.toLocaleString( 'en-EN', longOptions );

//These commas are unwanted, so must be filtered out
console.log( 'Date with commas ' + enDateWithCommas);
enCommalessArray = enDateWithCommas.split(',');
console.log( enCommalessArray);
enDateWithoutCommas = enCommalessArray.join('');

console.log( enDateWithoutCommas);

// But , much easier, use the toDateString() method, that does not have commas,

console.log ( currentDay.toDateString());


