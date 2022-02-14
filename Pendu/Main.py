# Jeu du pendu
# A chaque tour, le mot a trouver est afficher avec des ****
# Chaque fois qu'une lettre est trouvée, l'etoile est remplacee par la lettre ex : *o**o** pour bonjour si o est trouve
# On affiche aussi le nombre de chances restantes a chaque tour

# from ast import And
# from ntpath import join
from ntpath import join
import random
# from re import I
from Sequence_pendu import graph_pendu 


# Liste des mots du pendu
liste_mots = [
    "armoiree",
    "bouclee",
    "buissoni",
    "beureau",
    "chaisee",
    "cartonn",
    "couteau",
    "fichier",
    "garage",
    "glacee",
    "journale",
    "kiwi",
    "lampee",
    "listee",
    "montagnee",
    "remise",
    "sandale",
    "taxia",
    "vampiree",
    "volantt",
]

# on prend un mots de la liste de maniere aleatoire
mot_a_trouver = random.choice(liste_mots)
# on initialise nos variables
lettres_essayer = []
lettres_trouvees = []
mot_trouve = ""
nb_chances = 8
nb_essai = 0
nb_lettres_trouvees = int(1) 
Longueur_mot = len(mot_a_trouver)
x=0
print("le mot a trouver : ", Longueur_mot*"*")
 
lettres_trouvees = ["*"] * Longueur_mot
convert_lettres_trouvees = " ".join(lettres_trouvees) # converti la liste en chaine de caractere

while (nb_essai < nb_chances) and (nb_lettres_trouvees <= Longueur_mot):

    print("choix de la lettre")
    choix_lettre = input("--->>>")
    
    lettres_essayer.append(choix_lettre) # ajoute a la liste les lettres essayer
    
    if choix_lettre in lettres_trouvees :

        print(" lettre deja choisie")



    elif choix_lettre in mot_a_trouver :
        
        for position, lettre in enumerate(mot_a_trouver) :

            if lettre == choix_lettre :
                nb_lettres_trouvees += 1
                lettres_trouvees[position] = choix_lettre
        convert_lettres_trouvees = " ".join(lettres_trouvees)  # converti la liste en chaine de caractere    
        print(convert_lettres_trouvees)     
        print("lettre essayez", " ".join(lettres_essayer)) # affiche les lettres essayer
    else :
        graph_pendu(nb_essai)
        nb_essai+=1
        print(convert_lettres_trouvees)
        print("lettre essayez", " ".join(lettres_essayer))
        
if (nb_lettres_trouvees <= Longueur_mot)== False:

    print(" Vous avez trouve!!")

else :

    print("Vous avez perdu!!")


