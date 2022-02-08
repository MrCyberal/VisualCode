from time import sleep
import liste_mot
from liste_mot import verifie_input
from liste_mot import epreuve_ecrite
choix_menu = -1


print("bienvenue...")

while choix_menu != 0 :
    print("MENU")
    print("1. leçon n°1")
    print("2. leçon n°2")
    print("3. leçon n°3")
    print("4. leçon n°4")
    print("5. leçon n°5")
    print("0. Quitter")
    choix_menu = int(input("faites votre choix --->>>"))

    if choix_menu == 1 :

        for texte_a_ecrire in liste_mot.lesson1 :
           
            texte_taper = epreuve_ecrite(texte_a_ecrire)

            while verifie_input(texte_taper,texte_a_ecrire) == False :
                
                texte_taper = epreuve_ecrite(texte_a_ecrire)

    elif choix_menu == 2 :

        for texte_a_ecrire in liste_mot.lesson2 :
           
            texte_taper = epreuve_ecrite(texte_a_ecrire)

            while verifie_input(texte_taper,texte_a_ecrire) == False :
                
                texte_taper = epreuve_ecrite(texte_a_ecrire)
       

    elif choix_menu == 3 :

        for texte_a_ecrire in liste_mot.lesson3 :
           
            texte_taper = epreuve_ecrite(texte_a_ecrire)

            while verifie_input(texte_taper,texte_a_ecrire) == False :
                
                texte_taper = epreuve_ecrite(texte_a_ecrire)
       
    elif choix_menu == 4 :

        for texte_a_ecrire in liste_mot.lesson5 :
           
            texte_taper = epreuve_ecrite(texte_a_ecrire)

            while verifie_input(texte_taper,texte_a_ecrire) == False :
                
                texte_taper = epreuve_ecrite(texte_a_ecrire)

        
    elif choix_menu == 5 :

        for texte_a_ecrire in liste_mot.lesson5 :
           
            texte_taper = epreuve_ecrite(texte_a_ecrire)

            while verifie_input(texte_taper,texte_a_ecrire) == False :
                
                texte_taper = epreuve_ecrite(texte_a_ecrire)

       
    else :

        print(" au revoir")



