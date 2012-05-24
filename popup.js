// Copyright (c) 2012 Ulrich VACHON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement sur Binsearch.com

$(document).ready(function() {
   var NOM_TH_FICHIER = "Fichier";

   // cherche l'index de la colonne qui contient le fichier
   var indexThFichier = $("table#tabliste tr th:contains('" + NOM_TH_FICHIER + "')").index() + 1;

   // ajoute le lien dans le td de la colonne "Fichier"
   $("tr[class*='ligne'] td:nth-child(" + indexThFichier + ")").each(function() {
      var titre = $(this).html();

      // ajout du lien par défaut
      var liens = '<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a class="c16" id="binsearchLink" href="#">' + titre + '</a></form>';
      liens += '&nbsp;';
      liens += getBinsearchLink(titre);
      liens += '&nbsp;';
      liens += getYabsearchLink(titre);

      $(this).html(liens);
   });

   // retourne le lien pour Binsearch
   function getBinsearchLink(titre) {
      return '<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a class="c16" id="binsearchLink" href="#">' + getBinsearchImage() + '</a></form>';
   }

   // retourne le lien pour Yabsearch
   function getYabsearchLink(titre) {
      return '<form style="display:inline;" action="http://www.yabsearch.com/news/save" method="post" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a class="c16" id="binsearchLink" href="#">' + getYabsearchImage() + '</a></form>';
   }

   // retourne l'image du logo pour Binsearch
   function getBinsearchImage() {
      return '<img title="Binsearch.com" width="8" height="8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACaSURBVDhPxVPbCcAgDOxoDuAYDuAAjuG/wziAAziAAzhAygkpPkBsbWlAiJC7eJd4CCFo5xw7YGAHghAC8VkhHwioiv8JnHOUcy5vgiyl1GD4VEItB3lK6R6BtZaklAXIYYxpSJZMhBQO5LW53xJorUs3GPhIAiYQY7zAuMOTJQno6r1vwPyiKUG/fZg9gH1nrnv/M63sf11zAkn/SrR2ETSdAAAAAElFTkSuQmCC"/>';
   }

   // retourne l'image du logo pour Yabsearch
   function getYabsearchImage() {
      return '<img title="Yabsearch.com" width="8" height="8" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6X1248TJ450nSrYwR2F2ZJnugZGZUiaNjGVxtBYHaOeRuPUYJRRWk0lGNl0/VmVNycpXd9f0R/9k="/>';
   }

   // event branché sur la recherche sur Binnews
   $("a[id=binsearchLink]").click(function() {
       $(this).closest("form").submit();
   });

   // event branché sur la recherche sur Yabsearch
   $("a[id=yabsearchLink]").click(function() {
       $(this).closest("form").submit();
   });
});

