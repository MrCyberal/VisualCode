import random
from math import ceil
partie = ""

while partie != "0" :
    
    print("Veuillez chosir votre chiffre entre 0 et 49")
    nb0 = int(input("-->"))
    print("Deposez votre mise")
    mise = int(input("-->"))

    gagnant = random.randint(0,49)

    if gagnant % 2 == 0 :
        couleur = "Noir"
        par = "pair"
    else :
        couleur = "Rouge"
        par = "impair"

    print ("Le numero gagnant est le ",gagnant,couleur,"et",par)

    if gagnant == nb0 :
        mise = mise * 3
        print("vous avez gagnez", mise, "$")
    elif gagnant % 2 == nb0 % 2 :
        mise = ceil(mise * 0.5)
        print("vous avez gagnez",mise, "$")

    else :
        print("Vous avez perdu!")

    print("Si voulez-vous continuer tapez 1")
    print("pour quitter tapez 0")
    
    partie = input("-->")
