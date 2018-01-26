var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id' : '2734',
	'X-Auth-Token' : '734e8b8747edb393c7f630390b717ea6'
};

// dodawanie do każdego zapytania nagłówków autoryzacji (client-id + token)
$.ajaxSetup ({
	headers: myHeaders	
});

// wyślij zapytanie do endpointa i pobierz obiekt 'board'
$.ajax ({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(responce.columns);
	}
});

// dla każdej kolumny z tablicy Columns utwórz nowy obiekt 'col' z id i name. Do obiektu 'board' dodaj nową kolumnę (col). Do stworzenia col'a potrzebujemy id i name. Id jest zawsze INDYWIDUALNE dla col'a, a nie losowe jak poprzednio.
function setupColumns(columns) {
	columns.forEach(function (column) {	 // metoda forEach() --> dla każdej kolumny z tablicy kolumn
		var col = new Column(column.id, column.name);
		board.createColumn(col); // stwórz obiekt 'col' w obiekcie 'board'
		setupCards(col, column.cards);
	});
}
// do col wrzucamy cards. Dla każdego elementu tablicy Cards (czyli card) utwórz nowe atrybuty/klucze (id,name...). Do 'col' dodaj metodą createCard() 'card'
function setupCards(col, cards) {
	cards.forEach(function (card) {
			var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
			col.createCard(card);		
	});
}









