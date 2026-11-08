# Wellen-Werkstatt

Lern-App zu mechanischen Wellen (Steckbriefe, Quiz, Micro-Challenges). Läuft komplett im Browser, es werden keine Daten an einen Server geschickt.

## Auf GitHub veröffentlichen (einmalig)

1. Auf github.com ein neues Repository anlegen, z. B. `wellen-werkstatt`, Sichtbarkeit **Public**
   (GitHub Pages ist im kostenlosen Konto nur für öffentliche Repos verfügbar).
2. Im Repository **Add file → Upload files** wählen und **alle Dateien aus dieser ZIP** hineinziehen
   (`index.html`, `icon-180.png`, `icon-512.png`, `manifest.webmanifest`, `.nojekyll`, `LIESMICH.md`).
   Hinweis: `.nojekyll` ist unter Windows/macOS eine „versteckte“ Datei – sie ist nicht zwingend nötig.
3. **Commit changes** klicken.
4. **Settings → Pages**: Bei „Source“ **Deploy from a branch** wählen, Branch **main**, Ordner **/ (root)**, **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter
   `https://DEIN-GITHUB-NAME.github.io/wellen-werkstatt/`

## Aufs iPad oder Smartphone

1. Die Adresse in **Safari** öffnen.
2. **Teilen-Symbol → Zum Home-Bildschirm** → Hinzufügen.
3. Die Wellen-Werkstatt ab jetzt **immer über das Symbol auf dem Home-Bildschirm** starten.

## Wichtig zu den Daten

- Gespeichert werden nur die Bestwerte, und zwar **nur im Browser des Geräts** – nichts davon landet auf GitHub. Das Repo enthält nur die App selbst.
- Die Bestwerte hängen an der Adresse und an der Home-Bildschirm-App. Wer die App einmal über die Datei und einmal über GitHub öffnet, hat zwei getrennte Stände.

## Hinweise

- Die Schriften (Bricolage Grotesque, Atkinson Hyperlegible, JetBrains Mono) werden von Google Fonts geladen. Ohne Internet nutzt die App Systemschriften, alles funktioniert weiterhin.
- Neue Version einspielen: Im Repository `index.html` durch die neue Datei ersetzen (Upload mit gleichem Namen, Commit). Die Bestwerte bleiben erhalten, solange die Adresse gleich bleibt.
