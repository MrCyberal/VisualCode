

liste = ["a","b","c"]

alpha =""

while alpha != "+" :
    
    print("Tapez votre caratère ou + pour quitter")
    
    alpha = input("==>")
    if alpha != "+":
        
        liste.append(alpha)
        print(liste)
    
    