// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina 
// un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa 
// proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono 
// ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona 
// un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà 
// “color” in modo dinamico: generare in modo casuale un codice colore, 
// sapendo che la notazione esadecimale è formata dal simbolo “#” seguito 
// da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna. 
// Scomponiamo il problema in micro-passaggi logici che solamente in un 
// secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota 
// libreria Font Awesome, perciò come prima cosa assicuriamoci di aver 
// inserito il link alla cdn nell’head della pagina.
// Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, 
// analizziamo come è formato il tag <i> di un’icona qualsiasi, in particolare 
// focalizziamoci sulle classi.
// Come possiamo usare i dati presenti nella nostra struttura dati per creare 
// l’elemento html nel modo corretto e visualizzare l’icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, 
// senza alcuno stile, con all’interno l’icona e uno span con il nome. 
// Solamente quando la parte logica è completa, ci dedichiamo al css.



const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//RICHIAMO IL ROW DA HTML
let iconsContainer = document.querySelector(`.my_row`);

//chiamare creaIcone all'inizio e generalizzarla per quando richiamo col click
creaIcone(icons)


//CICLO TYPE DI OGGETTI DELL'ARRAY ICONS
function creaIcone (all){
	
	for (let i = 0; i < all.length; i++) {

		creaBox( all[ i ] )
		selezioneBox(all[i].type)
	}
}
//FUNZIONE PER STAMPARE SUL DOM I BOX
function creaBox( icon ) {

	iconsContainer.innerHTML += `
		<div class="col d-flex justify-content-between align-items-start flex-wrap" id="container2">
			<div class="box d-flex flex-column justify-content-center align-items-center">
				<i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}"></i>
				<span>${icon.name}</span>
			</div>
		</div>`
}

//FUNZIONE PER ESTRAPOLARE TYPE E ASSOCIARLO AL SELECT

let tipi = all[i].type

function selezioneBox ( types ) {

	let tipo = document.getElementById(`tipo`);

	tipo.addEventListener(`change`, function () {

	if( tipo.value == `All` ){
		creaBox()
	}else if (tipo.value == `animal`){
		iconsContainer.innerHTML += " ";
		const risAnim = tipi.filter(function(animali){
			return (animali.type === "animal")
		})
		creaIcone(risAnim)
	}else if (tipo.value == `vegetable`){
		iconsContainer.innerHTML += " ";
		const risVeget = tipi.filter(function(vegetali){
			return (vegetali.type === "vegetable")
		})
		creaIcone(risVeget)
	}else (tipo.value == `user`)
		iconsContainer.innerHTML += " ";
		const risUtenti = tipi.filter(function(utenti){
			return (utenti.type === "user")
		})
		creaIcone(risUtenti)

	})

}