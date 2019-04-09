/*Dette kommenterer ut kode slik som i css*/

//Det samme gjør dette for en linje

/*alert("jeg kommer fra en annen fil");
prompt("Hva heter du?");
confirm("Er du helt sikker?");
*/

// "document." Henter nettside

document.write("Heihei");
document.write("Ha det bra");
document.write("<h2>Hei hei</h2>")
document.write("<p>Dette er laget med javascript</p>");

//Tall bruker ikke appostrofer
//Mattestykker regnes automatisk
document.write(400 + 200);
document.write( 2 + 4 * 5);

//Kan legge in html i javascript
document.write("<ul>");
document.write("<li>Taco</li>");
document.write("<li>Biff</li>");
document.write("<li>Fiskeboller</li>");
document.write("<li>Løksuppe</li>");
document.write("<li>Tomater</li>");


document.write("</ul>")

// `` string template gjør at man kan skrive inn html innenfor disse
document.write(`
<ul>
  <li>Taco</li>
  <li>Taco</li>
  <li>Taco</li>
  <li>Taco</li>
</ul>
`);

console.log('yoooo');

// Vi kan blande ssammen doble og enkle appostrofer
document.write( "Grete Waitz' vinnertid" );
document.write( 'Han sa "Jeg liker deg"' );

document.write(`

<button id="minKnapp">

${ 2 + 3 }

</button>

`);