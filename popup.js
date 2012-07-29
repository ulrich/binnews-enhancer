// Copyright (c) 2012 Ulrich VACHON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement sur Binsearch.com

$(document).ready(function () {
   var NOM_TH_FICHIER = "Fichier";

   var baseURL = chrome.extension.getURL('./');

   // cherche l'index de la colonne qui contient le fichier
   var indexThFichier = $("table#table_results tr th:contains('" + NOM_TH_FICHIER + "')").index() + 1;

   // ajoute le lien dans le td de la colonne "Fichier"
   $("tr td:nth-child(" + indexThFichier + ")").each(function () {
      var titre = $(this).html();

      titre = titre.replace("&nbsp;", "");

      if (titre) {
         // ajout du lien par défaut
         var liens = '<div class="tech_temp" style="display:inline;"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().parent().submit();" class="c16" href="#">' + titre + '</a></div>';
         liens += '&nbsp;';
         liens += '<img id="otherSites" width="12" height="12" src="' + baseURL + 'ampoule.png" data-nom="' + titre + '"/>';
         $(this).html(liens);
      }
   });

   // ajoute le lien vers la popin des autres serveurs disponibles
   $('img[id^=otherSites]').each(function () {
      var titre = $(this).data('nom');

      $(this).CreateBubblePopup({
         innerHtml:getBinsearchLink('' + titre + '') + '&nbsp;' + getYabsearchLink('' + titre + '') + '&nbsp;' + getYubseLink('' + titre + ''),
         themePath:baseURL + 'jquerybubblepopup-themes',
         position:'top',
         selectable:true
      });
   });

   // post processing nécessaire pour rajouter à la volée les FORM des liens par défauts
   $('.tech_temp').wrap('<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"/>');

   // retourne le lien pour Binsearch
   function getBinsearchLink(titre) {
      return '<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" href="#"><img title="Binsearch.com" width="16" height="16" src="' + baseURL + 'binsearch.png"/></a></form>';
   }

   // retourne le lien pour Yabsearch
   function getYabsearchLink(titre) {
      return '<form style="display:inline;" action="http://www.yabsearch.com/news/save" method="post" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" href="#"><img title="Yabsearch.com" width="16" height="16" src="' + baseURL + 'yabsearch.png"/></a></form>';
   }

   // retourne le lien pour Yubse
   function getYubseLink(titre) {
      return '<form style="display:inline;" action="http://www.yubse.com/?" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" href="#"><img title="Yubse.com" width="16" height="16" src="' + baseURL + 'yubse.png"/></a></form>';
   }
});
