mot = "Bonjour"
nombre = 20

if nombre < 10 :
    print("C'est plus petit que 10")
elif nombre >10:
   print("c'est plus grand que 10")
else:
    print("c'est égale")

while nombre > 0:
    print(nombre)
    nombre = nombre - 1

for lettre in mot:
    print(lettre)
    if lettre in "aeiouy":
        print("Voyelle")
    