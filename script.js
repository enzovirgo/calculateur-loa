function calculateAnnualInterestRate(Pv, Vr, L, n) {
  // Fonction pour calculer le taux d'intérêt mensuel en utilisant la méthode de Newton-Raphson
  function newtonRaphson(f, df, guess, maxIter = 100, tolerance = 1e-6) {
    let r = guess;
    for (let i = 0; i < maxIter; i++) {
      let fValue = f(r);
      let fDerivative = df(r);
      let rNew = r - fValue / fDerivative;
      if (Math.abs(rNew - r) < tolerance) {
        return rNew;
      }
      r = rNew;
    }
    throw new Error('Failed to converge');
  }

  // La fonction f(r)
  function f(r) {
    return r * (Math.pow(1 + r, n)) - (Vr / Pv) - (L * (Math.pow(1 + r, n) - 1)) / (r * Pv);
  }

  // La dérivée f'(r) de la fonction f(r)
  function df(r) {
    return (Math.pow(1 + r, n) * (1 + n * r - r) + Vr - L * (n * Math.pow(1 + r, n - 1) * Pv * (1 + r - r) + Pv * (Math.pow(1 + r, n) - 1))) / (r * r * Pv * Pv);
  }

  // Estimation initiale pour le taux d'intérêt mensuel r
  let rGuess = (2 * (n * L - Pv + Vr)) / (n * (Pv + Vr));
  rGuess /= 100; // Convertir en décimal

  // Calculer le taux d'intérêt mensuel en utilisant la méthode de Newton-Raphson
  let rMonthly = newtonRaphson(f, df, rGuess);

  // Convertir le taux mensuel en taux annuel
  let rAnnual = (Math.pow(1 + rMonthly, 12) - 1) * 100;

  return rAnnual;
}

// Demander à l'utilisateur les valeurs nécessaires
let Pv = prompt('Entrez le montant du prêt (Pv):');
let Vr = prompt('Entrez la valeur résiduelle (Vr):');
let L = prompt('Entrez le paiement mensuel (L):');
let n = prompt('Entrez le nombre de mois (n):');

// Convertir les entrées en nombres
Pv = Number(Pv);
Vr = Number(Vr);
L = Number(L);
n = Number(n);

// Calculer et afficher le taux d'intérêt annuel
let annualInterestRate = calculateAnnualInterestRate(Pv, Vr, L, n);
console.log(`Le taux d'intérêt annuel est: ${annualInterestRate.toFixed(4)}%`);
