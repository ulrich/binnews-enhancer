// Copyright (c) 2012 Ulrich VACHON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement sur Binsearch.com

$(document).ready(function() {
   var NOM_TH_FICHIER = "Fichier";
   var indexThFichier = 0;

   // cherche l'index de la colonne "Fichier"   
   $("table#tabliste tr th").each(function() {
		var ths = $(this).text();
		if (ths == NOM_TH_FICHIER) {
			indexThFichier = $(this).index() + 1;
		}
	});

	// ajoute le lien dans le td de la colonne "Fichier"
	$("tr[class*='ligne'] td:nth-child(" + indexThFichier + ")").each(function() {
     var titre = $(this).html();

     $(this).html('<a class="c16" target="_blank" href="http://binsearch.info/?q=' + titre + '&max=100&adv_age=1100&server=">' + titre + '</a>&nbsp;<img title="Binsearch.com" width="8" height="8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACaSURBVDhPxVPbCcAgDOxoDuAYDuAAjuG/wziAAziAAzhAygkpPkBsbWlAiJC7eJd4CCFo5xw7YGAHghAC8VkhHwioiv8JnHOUcy5vgiyl1GD4VEItB3lK6R6BtZaklAXIYYxpSJZMhBQO5LW53xJorUs3GPhIAiYQY7zAuMOTJQno6r1vwPyiKUG/fZg9gH1nrnv/M63sf11zAkn/SrR2ETSdAAAAAElFTkSuQmCC"/>');
   });
});
