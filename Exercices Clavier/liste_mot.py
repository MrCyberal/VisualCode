lesson1 = ["partir en vacance","des voitures","il est tard","un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"]
lesson2 = ["179/83","123*34.90","7294+2309"]
lesson3 = ["Marguerite","La fête était fantastique","J'ai toujours sommeil !"]
lesson4 = ["le tréma est ceci ¨","il est utilisé par exemple sur le i de maïs"," Ou sur le e de Noël"]
lesson5 = ["Si vous voulez tapez ce caractère : @, vous aurez besoin de la touche alt gr"]

def verifie_input(texte_taper,texte_a_ecrire) :

    if texte_taper == texte_a_ecrire :

        return True
    
    else :

        return False

def epreuve_ecrite(texte_a_ecrire) : 

    print("Recopier le texte ci-desous")
    print(texte_a_ecrire)
    texte_taper = input("--->>")

    return texte_taper