def calculate_interest_rate(PV, D, L, VR, n, L1):
    numerator = 12 * (L * n + VR - PV + D)
    denominator = (PV - D + L1 - VR) * n
    interest_rate = (numerator / denominator) * 100
    return interest_rate

# Prix de vente du bien
PV = float(input("Entrez le prix de vente du bien : "))
# Dépôt initial
D = float(input("Entrez le dépôt initial : "))
# Montant du premier loyer majoré
L1 = float(input("Entrez le montant du premier loyer majoré : "))
# Loyer mensuel
L = float(input("Entrez le loyer mensuel : "))
# Valeur résiduelle
VR = float(input("Entrez la valeur résiduelle : "))
# Durée de la location en mois
n = int(input("Entrez la durée de la location en mois : "))

# Calcul du taux d'intérêt annuel
interest_rate = calculate_interest_rate(PV, D, L, VR, n, L1)

print("Le taux d'intérêt annuel est de :", interest_rate, "%")
