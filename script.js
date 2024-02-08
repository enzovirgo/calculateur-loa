function calculateInterestRate(PV, D, L, VR, n, L1) {
    var numerator = 12 * (L * n + VR - PV + D);
    var denominator = (PV - D + L1 - VR) * n;
    var interestRate = (numerator / denominator) * 100;
    return interestRate;
}

function calculateAndDisplayInterestRate() {
    var PV = parseFloat(document.getElementById("PV").value);
    var D = parseFloat(document.getElementById("D").value);
    var L1 = parseFloat(document.getElementById("L1").value);
    var L = parseFloat(document.getElementById("L").value);
    var VR = parseFloat(document.getElementById("VR").value);
    var n = parseInt(document.getElementById("n").value);

    var interestRate = calculateInterestRate(PV, D, L, VR, n, L1);
    document.getElementById("result").innerHTML = "Le taux d'intérêt annuel est de : " + interestRate.toFixed(2) + "%";
}
