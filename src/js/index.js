
// Anzahl der Durchläufe, Definierung von Knopf und Eingabebox
let amount = 0;
let calcBtn = document.getElementById("calc");
let input = document.getElementById("times");

// Angabe, ob gerade verfügbar
let available = true;

// Farben
let colorRed = "#ff007a";
let colorWait = "#ff007a";

// Aktivieren von Knopf
function disable() {

    // Wenn der Knopf aktiviert ist, wird er deaktiviert
    if (calcBtn.disabled == false) {
        calcBtn.disabled = true;
    };

    // Wenn die Anzahl der Durchläufe höher/gleich 100000 ist: Knopffarbe wird während Berechnung auf Rot (Wartend) gestellt
    if (Math.round(input.value) >= 100000 && Math.round(input.value) <= 1000000) calcBtn.style.background = colorWait;
}

// Deaktivieren von Knopf
function enable() {

    // Wenn der Knopf deaktiviert ist, wird er aktiviert
    if (calcBtn.disabled) calcBtn.disabled = false;

    // Knopffarbe wird normal
    calcBtn.style.background = null;
}

// Farbe der Tabelle ändern
function tableColor(color) {
    document.querySelectorAll("table").forEach(key => key.style.borderColor = color);
    document.querySelectorAll("th").forEach(key => key.style.borderColor = color);
    document.querySelectorAll("td").forEach(key => key.style.borderColor = color);
}

// Nach Click auf Knopf
calcBtn.addEventListener("click", () => {

    // Knopf wird deaktiviert
    disable()

    setTimeout(() => {
        // Tabellenfarbe auf Grün
        tableColor("#0ff");

        // Ist verfügbar?
        if (available) {

            // Auf nicht verfügbar stellen
            available = false;

            // Anzahl der Gewinne und Durchläufe wird auf 0 gesetzt
            amount = 0;
            let times = 0;

            // Durchläufe von Eingabe erfassen
            times = Math.round(input.value);

            // Wenn Durchläufe im Bereich zwischen 1 und 1000000 sind:
            if (times && times <= 1000000 && times >= 1) {

                // Für jeden Durchlauf:
                for (let j = 0; j < times; j++) {

                    // Kapazitäten
                    let capacities = [];

                    // Verfügbare Zahlen
                    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

                    // Zahlen, die nicht im roten Bereich sind
                    for (var i = 1; i < 23; i++) {

                        // Zufällige Zahl aus Liste -> in Kapazitäten
                        let randomNum = nums[Math.floor(Math.random() * nums.length)];
                        capacities.push(randomNum);

                        // Zahl aus Liste entfernt, damit sie kein zweites Mal kommt
                        nums.splice(nums.indexOf(randomNum), 1);
                    }

                    // Leere Liste für rote Zahlen
                    let capacitiesInvalid = [];

                    // Leere Liste für nichtrote Zahlen
                    let capacitiesValid = [];

                    // Rote Zahlen kommen in Liste
                    for (let i = 0; i < 8; i++) {
                        capacitiesInvalid.push(capacities[i]);
                    }

                    // Nichtrote Zahlen kommen in Liste
                    for (let i = 8; i < capacities.length; i++) {
                        capacitiesValid.push(capacities[i]);
                    }

                    // Maximalwert von roter Zahlenliste
                    let invalidHighestNum = Math.max(...capacitiesInvalid);

                    // "Richtige" Zahlenliste wird durchlaufen
                    for (let i = 0; i < capacitiesValid.length; i++) {

                        // Zahl höher als Höchstwert von roter Liste?
                        if (capacitiesValid[i] > invalidHighestNum) {

                            // Zahl = 22? Wenn ja: Gewinne plus 1
                            if (capacitiesValid[i] == 22) amount++;

                            // Es wird nicht weitergesucht
                            break;
                        }
                    }
                }

                // Anzahl der Durchläufe wird in die Tabelle eingetragen
                document.getElementById("tdTimes").innerHTML = times;

                // Gewinnrate (Gewinnanzahl / Durchläufe * 100) wird in die Tabelle eingetragen
                document.getElementById("tdRate").innerHTML = `${amount / times * 100}%`;
            }

            // Wenn Durchläufe nicht im Bereich zwischen 1 und 1000000 sind:
            else {

                // Farbe der Tabelle zu rot
                tableColor(colorRed);
            }

            // Verfügbarkeit wird auf "ja" gestellt, da das Programm fertig durchgelaufen ist
            available = true;
        }
        
        // Wenn nicht verfügbar:
        else {

            // Farbe der Tabelle wird zu rot geändert (Ein anderes Rot als bei der Eingabe einer falschen Zahl)
            tableColor(colorWait);
        }

        // Knopf wird wieder aktiviert
        enable();
    }, 1);
});