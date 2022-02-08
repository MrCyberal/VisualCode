import random
nombre_alea = random.randint(0,100)
Choix_joueur = int(-1)
# print(nombre_alea)

while nombre_alea != Choix_joueur:

    Choix_joueur = int(input("Faites un choix entre 0 et 100 :"))
    
    if Choix_joueur < nombre_alea:
        print("le nombre est plus grand")
    elif Choix_joueur > nombre_alea:
        print("le nombre est plus petit")
    else:
        print("Bravo ! C'est gagné !")
