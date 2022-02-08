<?// Les codes en php
// Pour que du code soit reconnu par php, il faut :
?>
<?//debut du code

?><?// fin du code?>
<?
// les variables
// les variables sont non typée, ce qui veux dire qu'il n'est pas necessaire de leur donner un type(int, string,...)
// les vairables sont precede du signe $


$nom = "Sally"; // exemple de variable en php
$valeur = 10 ; // dans la syntaxes de php ne pas oublier le ";" a la fin
$vraifaux = true;

// les commandes de base
// la commande echo permet d'afficher une valeur
echo $nom; //affiche la valeur de $nom
echo $nom . "\n"  ; // le \n effectue un retour à la ligne

// L'affichage de caractère et de variable s'effectue de cette manière
// l'affichage sera différent en focntion des symbole utilisé le " affiche le teste et la valeur d'une variable, tandis que le ' affiche le texte et le nom de la variable
echo "Bonjour $nom tu as eu $valeur cette année \n"; // dans le terminal vous verrez ceci : Bonjour Sally tu as eu 10 cette année
echo 'Bonjour $nom tu as eu $valeur cette année' . "\n"; // dans le terminal vous verrez ceci : Bonjour $nom tu as eu $valeur cette année

// les tables

$liste = []; // est une table vide
$liste = [10,20]; // est une table contenant deux éléments. La première valeur d'une table est 0



echo $liste[1]; // affiche 20, puisque 1 est la deuxieme valeur de la table
echo "\n";

// on peut aussi creer des table plus complexe
$liste = ["John", "Doe", [10,15,18,21]]; // cette liste contient des caractères et une table

// pour afficher par exemple le chiffre 15, on procede de cette manière

echo $liste [2][1] . "\n"; // [2] correspond à la table et le [1] a la deuxieme valeur de la liste

// pour ajouter une valeur dans la table

$liste[2][4] = 12;

//pour afficher la liste il faut utiliser print_r

print_r($liste[2])."`n";
/* affiche sous ce format le contenu de la liste (array correspond a la table dans la table)

Array
(
    [0] => 10
    [1] => 15
    [2] => 18
    [3] => 21
    [4] => 12
)

*/
// Si je fait

print_r($liste) . "\n";

/*affiche $liste sous ce format

Array
(
    [0] => John
    [1] => Doe
    [2] => Array
        (
            [0] => 10
            [1] => 15
            [2] => 18
            [3] => 21
            [4] => 12
        )

)
*/
// on peut aussi ajouter un element à la liste de cette manière

$liste[2][] = 14;

//le fait de laisser des crochet vide index automatiquement la liste

print_r($liste[2]) . "\n";

/* voici le resultat

Array
(
    [0] => 10
    [1] => 15
    [2] => 18
    [3] => 21
    [4] => 12
    [5] => 14
)
*/
// pour des table plus complexe encore, on peut utiliser des clefs
// pour exemple, prenons une table dans laquelles nous encodons le nom, le prenom, et leurs chiffres porte-bonheur

$liste = [
        // ici on renseigne le nom et le prenom et les chiffres
            [ "nom" => "Doe",
              "prenom" => "John",
              "chiffre" => [1, 5, 8]
            ],
            [ "nom" => "Durant",
              "prenom" => "Simon",
              "chiffre" => [2, 6, 8]
        ],
        ];

    // pour afficher le nom le prenomet les chiffre d'une personne

echo $liste[1]["nom"] . ' '. $liste[1]["prenom"] . ' ' . $liste[1]["chiffre"][0] . "\n";

    /* affiche ceci

Durant Simon 2

*/

// Les conditions

// le if

$valeur2 = 3;

if($valeur2 > 10) {
    echo "votre valeur est superieure a 10 \n";

} else {
    echo "votre valeur est inferieure a 10 \n";
}

// on peut aussi demander d'entrer une valeur avec la commande readline

$valeur2 = readline("entrez une valeur :");

if($valeur2 > 10) {
    echo "votre valeur est superieure a 10 \n";

}   elseif ($valeur == 10){
    echo "votre valeur est egale a 10 \n";
    }
    else {

    echo "votre valeur est inferieure a 10 \n";
    }

    
// le switch

$valeur2 = readline("entrez votre valeur entre 1 et 4 :");

switch ($valeur2) {

    case 1:
        echo ("vous avez tapez 1");
        break;// interrompt le switch
    case 2:
        echo ("vous avez tapez 2");
        break;
    case 3: 
        echo ("vous avez tapez 3");
        break;
    case 4:
        echo ("vous avez tapez 4");
        break;
    default:
        echo ("ce n'est pas un chiffre valide");
    
}
//les opérateurs logiques

// ET se traduit par &&
// OU se traduit par ||


?>
