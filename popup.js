// Copyright (c) 2012 Ulrich VACHON. All rights reserved.
// Extension permettant d'ajouter un lien de téléchargement pointant sur les moteurs générateurs de fichier NZB.

/**
 * Code en attente de refactoring un peu hacké afin de permettre l'utilisation du plugin pour la nouvelle version du site.
 */
$(document).ready(function () {
   var NOM_TH_FICHIER = "Fichier";

   var NOM_TABLE_V1 = "tabliste";

   var NOM_TABLE_V2 = "table_results";

   var baseURL = chrome.extension.getURL('./');

   var indexThFichier = getPositionDeLaColonneRecherchee();

   // ajoute le lien dans le td de la colonne "Fichier"
   $("tr td:nth-child(" + indexThFichier + ")").each(function () {
      var titre = $(this).html();

      titre = titre.replace("&nbsp;", "");

      if (titre) {
         // ajout du lien par défaut
         var liens = '<div class="tech_temp" style="display:inline;"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().parent().submit();" class="c16" >' + titre + '</a></div>';
         liens += '&nbsp;';
         liens += '<img id="otherSites" width="12" height="12" src="' + baseURL + 'ampoule.png" data-nom="' + titre + '"/>';
         $(this).html(liens);
      }
   });

   // ajoute le lien vers la popin des autres serveurs disponibles
   $('img[id^=otherSites]').each(function () {
      var titre = $(this).data('nom');

      $(this).CreateBubblePopup({
         innerHtml:getBinsearchLink('' + titre + '') + '&nbsp;' + getYabsearchLink('' + titre + '') + '&nbsp;' + getYubseLink('' + titre + '') + '&nbsp;' + getMisterbinLink('' + titre + '') + '&nbsp;' + getNZBIndexLink('' + titre + '') + '&nbsp;' + getNZBClubLink('' + titre + ''),
         themePath:baseURL + 'jquerybubblepopup-themes',
         position:'top',
         selectable:true
      });
   });

   // post processing nécessaire pour rajouter à la volée les FORM des liens par défauts
   $('.tech_temp').wrap('<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"/>');

   // retourne le lien pour Binsearch
   function getBinsearchLink(titre) {
      return '<form style="display:inline;" action="http://binsearch.info/" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="Binsearch.com" width="16" height="16" src="' + baseURL + 'binsearch.png"/></a></form>';
   }

   // retourne le lien pour Yabsearch
   function getYabsearchLink(titre) {
      return '<form style="display:inline;" action="http://www.yabsearch.com/news/save" method="post" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="Yabsearch.com" width="16" height="16" src="' + baseURL + 'yabsearch.png"/></a></form>';
   }

   // retourne le lien pour Yubse
   function getYubseLink(titre) {
      return '<form style="display:inline;" action="http://www.yubse.com/?" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="Yubse.com" width="16" height="16" src="' + baseURL + 'yubse.png"/></a></form>';
   }

   // retourne le lien pour Misterbin
   function getMisterbinLink(titre) {
      return '<form style="display:inline;" action="http://www.mysterbin.com/search?" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="Misterbin.com" width="16" height="16" src="' + baseURL + 'mysterbin.png"/></a></form>';
   }

   // retourne le lien pour NZBIndex
   function getNZBIndexLink(titre) {
      return '<form style="display:inline;" action="http://www.nzbindex.nl/search/?" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="NZBIndex.com" width="16" height="16" src="' + baseURL + 'nzbindex.png"/></a></form>';
   }

   // retourne le lien pour NZBClub
   function getNZBClubLink(titre) {
      return '<form style="display:inline;" action="http://nzbclub.com/search.aspx?" method="get" target="_blank"><input type="hidden" name="q" value="' + titre + '"><a onClick="$(this).parent().submit();" class="c16" ><img title="NZBClub.com" width="16" height="16" src="' + baseURL + 'nzbclub.png"/></a></form>';
   }

   // cherche l'index de la colonne qui contient le fichier avec un fallback causé pour la nouvelle version du site
   function getPositionDeLaColonneRecherchee() {
      var indexThFichier = $("table#" + NOM_TABLE_V1 + " tr th:contains('" + NOM_TH_FICHIER + "')").index() + 1;

      if (indexThFichier == 0) {
         indexThFichier = $("table#" + NOM_TABLE_V2 + " tr th:contains('" + NOM_TH_FICHIER + "')").index() + 1;
      }
      return indexThFichier;
   }
});
