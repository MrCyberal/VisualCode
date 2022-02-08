import Morse
resultat = ""
choix = "4"
while choix != "0" :
    resultat = ""
    print("Pour convertir du texte en morse tapez 1" )
    print("Pour convertir du morse en texte tapez 2")
    print("Pour quitter tapez 0 ")
    choix = input( " Votre choix : ")
    
    if choix == "0" :
        print("A la prochaine !!")

    elif choix == "1" :

        texte = input("Entrez le texte à convertir : ")

        for c in texte :
            index = Morse.alphabet_list.index(c)
            code = Morse.morse_list[index]
            resultat += code + " "
            
        print(resultat)
        
    elif choix == "2" :

        texte = input("Entrez le code à convertir : ")
        flag = str.split(texte," ")
        for t in flag :
            index = Morse.morse_list.index(t)
            code = Morse.alphabet_list[index]
            resultat += code
            
        print(resultat)
  
    elif choix > "2" :

        print("Autre choix !!")