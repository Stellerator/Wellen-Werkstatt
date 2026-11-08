# Wellen-Werkstatt

Interaktive Lern-App zu **mechanischen Wellen** (Bildungsplan Berufliches Gymnasium BW, Physik, BPE 10). Optimiert für das iPad im Querformat, läuft aber in jedem aktuellen Browser.

## Inhalt

**Kapitel 1 – Grundlagen:** Definition, Quer- und Längswellen, Elongation, Amplitude, T, f, λ und c
**Kapitel 2 – Darstellungen & Polarisation:** s(x), s(t), Merkregel zur Teilchenbewegung, Polarisation
**Kapitel 3 – Interferenz & stehende Wellen:** folgt

Jedes Kapitel ist ein **Lernpfad**:

1. **Steckbriefe:** Karten zum Durchblättern, jede mit Animation und Mini-Check
2. **Challenges:** je drei Levels (qualitativ → mit Zahlen → Transfer)

| Kapitel | Challenges |
|---|---|
| 1 | Was ändert sich? · Wellen-Dirigent · Quer oder längs? |
| 2 | Welches Teilchen bin ich? · Ablesen & Rechnen · Polarisierbar? |

## Spielregeln

- **Level-Hürde:** Jedes Level hat 5 Aufgaben. Mit 4 Treffern im ersten Versuch ist es geschafft.
- **Freischalten:** Wer alle Mini-Checks löst, öffnet Challenge 1. Level 1 einer Challenge öffnet die nächste Challenge.
- **Erst vorhersagen, dann zuschauen:** Animationen starten erst nach der Antwort.
- Falsche Antworten in den Rechen- und Ablese-Levels sind typische Fehler und bekommen eine gezielte Rückmeldung.

## Für Lehrkräfte

- **Lehrkraft-Modus:** Logo oben links etwa 1 Sekunde gedrückt halten. Dann ist alles freigeschaltet, zum Beispiel zum Vorführen. Nochmal lange drücken schaltet den Modus aus.
- **Fortschritt** wird nur lokal im Browser gespeichert (localStorage). Es werden keine Daten übertragen. Zurücksetzen über den Knopf unten auf der Startseite.
- **Darstellung:** Hell, Dunkel oder Auto (wie das Gerät), umschaltbar oben auf der Startseite.

## Veröffentlichen mit GitHub Pages

1. Den Inhalt dieses Ordners in ein Repository hochladen.
2. *Settings → Pages → Build and deployment*: Branch `main`, Ordner `/ (root)`.
3. Die App ist dann unter `https://<benutzername>.github.io/<repository>/` erreichbar.

Auf dem iPad lässt sie sich über *Teilen → Zum Home-Bildschirm* wie eine App ablegen.

## Technik

Eine einzige Datei (`index.html`) mit HTML, CSS und JavaScript, ohne Abhängigkeiten. Nur die Schriften werden von Google Fonts geladen. Ohne Internet nutzt die App stattdessen die Systemschriften.

Neue Inhalte lassen sich im Abschnitt `INHALTE` am Anfang des Skripts ergänzen: `STECKBRIEFE`, `KAPITEL` und die Aufgabenlisten.

---

Version 2.1 · Stand 06.11.2026
