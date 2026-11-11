# Wellen-Werkstatt

Interaktive Lern-App zu **mechanischen Wellen** (Bildungsplan Berufliches Gymnasium BW, Physik, BPE 10). Optimiert für das iPad im Querformat, läuft aber in jedem aktuellen Browser. Nach dem ersten Laden mit Netz funktioniert sie auch offline.

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

## Meine Erfolge, Aktivierungscode, Abgabe

**Ablauf für die Klasse:** Siegel-Symbol „Meine Erfolge“ (Startseite, neben den Kapiteln) → Aktivierungscode eingeben (einmalig, Form `A17-EK6R-XLWG`) → „Stand senden“ → Datei im Abgabe-Ordner ablegen.

Wer keinen Code eingibt, arbeitet wie bisher weiter. Die Seite „Meine Erfolge“ zeigt den Stand auch ohne Konto.

**Lehrkraft-Werkzeug:** Die Datei `Wellen-Werkstatt-Nachweise.html` liegt **nicht** in diesem Repo. Sie wird auf dem PC per Doppelklick im Browser geöffnet (funktioniert offline, nichts wird hochgeladen).

1. Hauptpasswort wählen (langer Satz). Es steht nicht in der App und wird nicht gespeichert. Das Kontrollkürzel zeigt, ob du es später gleich eingegeben hast. Ohne dieses Passwort lassen sich die Nachweise nicht mehr prüfen.
2. Klassen anlegen (WebUntis-Import oder Liste von Hand, eine Zeile pro Person: `ID Name`).
3. „Kärtchen erzeugen“: Aktivierungscodes als Tabelle, CSV oder druckbare Kärtchen.
4. „Nachweise prüfen“: Abgabe-Ordner hineinziehen. Mehrere Dateien einer Person werden zusammengeführt, falsche Prüfsummen erscheinen unter „Auffällig“.

Die Codes gelten nur für die Wellen-Werkstatt. Codes und Stand-Dateien aus dem Mathe-Master werden abgelehnt, auch bei gleichem Hauptpasswort.

**Abgabe einstellen:** `ABGABE` am Anfang des Skripts in `index.html` (Link zum Ordner, Hinweistext, Erinnerungstage). Der Abgabe-Ordner sollte so eingestellt sein, dass die Klasse nur hochladen, aber keine fremden Dateien sehen kann.

**Stand verloren oder Gerät gewechselt?** „Meine Erfolge“ → „Stand wiederherstellen“ mit der zuletzt gesendeten Datei oder dem Stand-Code (nur mit dem eigenen Aktivierungscode möglich). Es wird nur dazugeholt, nichts gelöscht.

**Grenzen:** Jede Person kennt ihren eigenen Schlüssel und könnte mit Entwicklerwerkzeugen den eigenen Stand fälschen. Für Übungsnachweise reicht das. Der Code ist bewusst kurz (6 Zeichen Schlüssel, 2 Prüfzeichen). Wer die Stand-Datei einer anderen Person in die Hand bekommt, kann deren Schlüssel mit etwas Aufwand durchprobieren, deshalb der Abgabe-Ordner ohne Leserecht.

## Für Lehrkräfte

- **Lehrkraft-Modus:** Logo oben links 4 Sekunden gedrückt halten, dann PIN eingeben. Die PIN steht als `PIN` am Anfang des Skripts in `index.html` (Voreinstellung 2605). Sie ist im Quelltext lesbar und nur eine Hürde. Im Lehrkraft-Modus ist alles freigeschaltet, und unter „Meine Erfolge“ lässt sich eine Aktivierung entfernen.
- **Fortschritt** wird nur lokal im Browser gespeichert. Übertragen wird nichts, außer die Person sendet ihren Stand selbst.
- **Darstellung:** Hell, Dunkel oder Auto, umschaltbar oben auf der Startseite.

## Neue Version veröffentlichen

1. In `version.js` die Version oder den Stand ändern. **Das ist nötig**, sonst erkennen die Geräte die neue Fassung nicht.
2. Alle Dateien dieses Ordners im Repo ersetzen.

Die Geräte prüfen beim Start, beim Zurückkehren in die App und wenn sie wieder Netz haben, ob `version.js` unter der eigenen Adresse eine andere Version meldet. Dann erscheint „Neue Version verfügbar“ mit dem Knopf „Jetzt aktualisieren“. Unten auf der Startseite steht außerdem der Knopf „Aktualisieren“. Fortschritt, Konto und Einstellungen bleiben bei jedem Update erhalten. Nach einem Upload dauert es bei GitHub Pages manchmal ein bis zwei Minuten, bis die neuen Dateien ausgeliefert werden.

**Der Fortschritt hängt an der Adresse der App.** Das Repo darf deshalb nicht umbenannt oder verschoben werden. Safari und die Home-Bildschirm-App haben auf dem iPad getrennten Speicher. Wer das Symbol neu auf den Home-Bildschirm legt, sollte vorher den Stand senden und danach wiederherstellen.

Geräte mit Version 2.1 haben noch keine Update-Prüfung. Sie bekommen die neue Fassung beim nächsten normalen Laden der Seite.

## Veröffentlichen mit GitHub Pages

1. Den Inhalt dieses Ordners in ein Repository hochladen.
2. *Settings → Pages → Build and deployment*: Branch `main`, Ordner `/ (root)`.
3. Die App ist dann unter `https://<benutzername>.github.io/<repository>/` erreichbar.

Auf dem iPad lässt sie sich über *Teilen → Zum Home-Bildschirm* wie eine App ablegen.

## Technik

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App (HTML, CSS, JavaScript) |
| `version.js` | Versionsnummer und Stand |
| `sw.js` | Offline-Kopie (Netz zuerst, sonst gespeicherte Kopie) |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Name und Symbol für den Home-Bildschirm |

Nur die Schriften werden von Google Fonts geladen. Ohne Internet nutzt die App die Systemschriften.

Neue Inhalte lassen sich im Abschnitt `INHALTE` am Anfang des Skripts ergänzen: `STECKBRIEFE`, `KAPITEL` und die Aufgabenlisten. Vorhandene Namen von Steckbriefen und Challenges dürfen nicht geändert werden, sonst passt der gespeicherte Fortschritt nicht mehr. Zu neuen Kapiteln braucht auch das Lehrkraft-Werkzeug eine neue Fassung.

---

Version 2.2 · Stand 11.11.2026

## Neu in Version 2.3: Kapitel 3 „Interferenz & stehende Wellen“

- 7 Steckbriefe, 4 Challenges (Pulse treffen sich, Laut oder leise?, Echo am Seilende, Knoten oder Bauch?) und das Spiel „Vögel auf der Leitung“.
- Der bisherige Fortschritt bleibt beim Update erhalten. Alles Neue steht im Quelltext zwischen `/*K3-ANFANG*/` und `/*K3-ENDE*/`.
- Für die Auswertung das Lehrkraft-Werkzeug `Wellen-Werkstatt-Nachweise-v2.3.html` benutzen (kennt Kapitel 3).
- Ton im Wellenfeld ist aus, bis man „Ton: aus“ antippt.
