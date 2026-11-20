/* Wellen-Werkstatt · Heft
   =====================================================================
   Inhalte des Hefts. Jedes Kapitel hat Abschnitte, jeder Abschnitt eine Liste von Bausteinen.

   Bausteine (jeweils eine Liste in eckigen Klammern):
     ["merke",       "Text"]                                blauer Kasten
     ["text",        "Text"]                                normaler Absatz (sparsam benutzen)
     ["formel",      "Formel", "Wann gilt sie?", {fs: 22}]  wichtige Formel: dick gerahmt; fs = Seite in der
                                                            IQB-Formelsammlung (nur, wenn sie dort steht)
     ["nebenformel", "Formel", "Wann gilt sie?"]            weniger wichtige Formel: ohne Rahmen (fs geht auch hier)
     ["groessen",    [["Zeichen","Größe","Einheit"], …]]    Tabelle der Größen
     ["skizze",      "name", "Bildunterschrift"]            Skizze (Namen siehe index.html, HSK)
     ["beispiel",    "Aufgabe", ["Zeile 1", "Zeile 2", …]]  grüner Kasten mit Rechnung
     ["achtung",     "Text"]                                oranger Kasten für typische Fehler

   Karteikarten je Kapitel:  karten: [{id:"k1-…", v:"Vorderseite (Frage)", r:"Rückseite (Antwort)", s:"skizze"}]
   Die id nie ändern (daran hängt der Lernstand der Karte). s ist freiwillig.

   Schreibweise wie in der IQB-Formelsammlung: Schwingung s(t), Amplitude s<sub>max</sub>;
   Welle y(x,t), Amplitude y<sub>max</sub>; Länge des Wellenträgers ℓ; Grundschwingung k = 0.
   Brüche schreibst du so: {Zähler|Nenner}, zum Beispiel {1|f}. Tiefgestellt: <sub>max</sub>. Fett: <b>Wort</b>.
   Ein Abschnitt mit  tief:true  ist Vertiefung und tritt optisch etwas zurück.
   Reihenfolge der Kapitel und Abschnitte = Reihenfolge im Heft.
   ===================================================================== */
window.HEFT = [
  /* ================================ Kapitel 1 ================================ */
  { kap: "k1", abschnitte: [
    { titel: "Mechanische Welle", inhalt: [
      ["merke", "Eine <b>mechanische Welle</b> ist die Ausbreitung einer Schwingung in einem Medium, auch <b>Wellenträger</b> genannt. Gekoppelte <b>Oszillatoren</b> geben ihre Schwingung an den Nachbarn weiter."],
      ["skizze", "kette", "Der Erreger stößt die Kette an. Jeder Oszillator schwingt nur um seine Ruhelage, weitergegeben wird die Schwingung."],
      ["merke", "Eine Welle transportiert <b>Energie</b>, aber <b>keine Materie</b>."],
      ["achtung", "Die Oszillatoren wandern nicht mit der Welle. Ein Blatt auf dem See schaukelt auf und ab, bleibt aber im Mittel an seinem Platz."]
    ]},
    { titel: "Quer- und Längswelle", inhalt: [
      ["merke", "<b>Transversalwelle (Querwelle):</b> Die Oszillatoren schwingen <b>senkrecht</b> zur Ausbreitungsrichtung.<br><b>Longitudinalwelle (Längswelle):</b> Die Oszillatoren schwingen <b>parallel</b> zur Ausbreitungsrichtung."],
      ["skizze", "querlaengs", "Oben schwingen die Oszillatoren quer, unten längs. Bei der Längswelle wechseln Verdichtung und Verdünnung."],
      ["text", "Querwellen: Seilwelle, S-Welle bei Erdbeben. Längswellen: Schall in Luft, gestauchte Federschlange, P-Welle bei Erdbeben."],
      ["achtung", "In Gasen und im Innern von Flüssigkeiten gibt es nur Längswellen, Schall in Luft ist also immer eine Längswelle. Die Wasserwelle an der Oberfläche ist eine Mischform: Die Wasserteilchen laufen auf kreisähnlichen Bahnen."]
    ]},
    { titel: "Kenngrößen einer Schwingung", inhalt: [
      ["groessen", [["s", "Auslenkung (Elongation): momentane Entfernung aus der Ruhelage", "m"], ["s<sub>max</sub>", "Amplitude: größte Auslenkung", "m"], ["T", "Periodendauer: Zeit für eine volle Schwingung", "s"], ["f", "Frequenz: Zahl der Schwingungen pro Sekunde", "Hz = {1|s}"]]],
      ["formel", "T = {1|f}", "für jede periodische Schwingung. f und T gibt der <b>Erreger</b> vor.", { fs: 21 }],
      ["nebenformel", "f = {n|t}", "n Perioden in der Zeit t: So bestimmst du f durch Abzählen.", { fs: 21 }],
      ["skizze", "zeitbild", "Zeitbild s(t) eines Oszillators: T von Maximum zu Maximum, s<sub>max</sub> von der Ruhelage bis zum Maximum."],
      ["achtung", "T ist eine Zeit, keine Länge. Aus einem Foto der Welle (Momentbild) kannst du T nicht ablesen."]
    ]},
    { titel: "Wellenlänge λ", inhalt: [
      ["merke", "Die <b>Wellenlänge λ</b> ist der Abstand zweier benachbarter Oszillatoren im gleichen Schwingungszustand, zum Beispiel von Wellenberg zu Wellenberg. Einheit: 1 m."],
      ["skizze", "momentbild", "Momentbild y(x) der Welle: λ von Berg zu Berg, von Berg zu Tal nur λ/2."],
      ["text", "Bei Wellen heißt die Auslenkung y, die Amplitude y<sub>max</sub>. So steht es auch in der Formelsammlung."],
      ["achtung", "Von einem Wellenberg zum nächsten Wellental ist es nur λ/2."]
    ]},
    { titel: "Ausbreitungsgeschwindigkeit c", inhalt: [
      ["merke", "Die <b>Ausbreitungsgeschwindigkeit c</b> gibt an, wie schnell sich ein Schwingungszustand, zum Beispiel ein Wellenberg, durch das Medium bewegt."],
      ["formel", "c = λ · f", "für jede fortschreitende periodische Welle. Mit f = {1|T} heißt das: In der Zeit T kommt die Welle genau eine Wellenlänge λ voran, c = {λ|T}.", { fs: 22 }],
      ["skizze", "ausbreitung", "Zwei Momentbilder kurz nacheinander: Der Wellenberg ist um Δx weitergelaufen."],
      ["nebenformel", "Δx = c · Δt", "für jeden Schwingungszustand, Puls oder Schall: Strecke = Ausbreitungsgeschwindigkeit · Laufzeit."],
      ["beispiel", "Eine Stimmgabel schwingt mit f = 440 Hz. Schall breitet sich in Luft mit c = 343 m/s aus. Wie groß ist die Wellenlänge?", ["λ = {c|f} = {343 m/s|440 Hz} ≈ 0,780 m"]],
      ["beispiel", "Ein Echo kommt 1,6 s nach dem Ruf zurück. Wie weit ist die Felswand entfernt? (c = 343 m/s)", ["Der Schall läuft hin und zurück: 2d = c · Δt", "d = {c · Δt|2} = {343 m/s · 1,6 s|2} ≈ 274 m"]],
      ["achtung", "Rechne immer in m, s und Hz: 25 cm = 0,25 m, 200 ms = 0,2 s, 1,5 kHz = 1500 Hz."]
    ]},
    { titel: "Wer bestimmt was?", inhalt: [
      ["merke", "Der <b>Erreger</b> bestimmt f (und T). Das <b>Medium</b> bestimmt c. Daraus folgt die Wellenlänge λ = {c|f}."],
      ["skizze", "medium", "Die Welle läuft in ein Medium mit kleinerem c: f bleibt, λ wird kürzer."],
      ["merke", "Beim Übergang in ein anderes Medium bleibt die Frequenz f gleich. c und λ ändern sich."],
      ["achtung", "Eine größere Amplitude macht die Welle nicht schneller. Schwingt der Erreger schneller, bleibt c gleich und λ wird kleiner."]
    ]},
    { titel: "Schnelle und Ausbreitungsgeschwindigkeit", tief: true, inhalt: [
      ["text", "Die <b>Schnelle</b> v ist die Geschwindigkeit, mit der ein einzelner Oszillator um seine Ruhelage schwingt. Sie ändert sich ständig und ist in der Ruhelage am größten."],
      ["nebenformel", "v<sub>max</sub> = s<sub>max</sub> · ω  mit  ω = 2π · f", "für harmonische Schwingungen. Folgt aus v(t) = s<sub>max</sub> · ω · cos(ω · t + φ<sub>0</sub>).", { fs: "21 und 22" }],
      ["beispiel", "Ein Korken auf dem See schwingt mit s<sub>max</sub> = 3,0 cm und T = 2,0 s. Die Wellenberge sind 4,0 m voneinander entfernt.", ["v<sub>max</sub> = s<sub>max</sub> · 2π · f = 0,030 m · 2π · 0,50 Hz ≈ 0,094 m/s", "c = {λ|T} = {4,0 m|2,0 s} = 2,0 m/s: Die Welle ist viel schneller als der Korken."]]
    ]},
    { titel: "Schallgeschwindigkeit in verschiedenen Medien", tief: true, inhalt: [
      ["groessen", [["Luft (20 °C)", "343", "m/s"], ["Wasser", "≈ 1480", "m/s"], ["Stahl", "≈ 5000 bis 6000", "m/s"]]],
      ["text", "In warmer Luft ist Schall schneller: pro Grad Celsius etwa 0,6 m/s mehr (bei 0 °C etwa 331 m/s)."]
    ]}
  ],
  karten: [
    { id: "k1-welle", v: "Was ist eine mechanische Welle, und was transportiert sie?", r: "Die Ausbreitung einer Schwingung in einem Medium (Wellenträger) über gekoppelte Oszillatoren. Sie transportiert <b>Energie</b>, aber <b>keine Materie</b>.", s: "kette" },
    { id: "k1-arten", v: "Woran unterscheidest du Querwelle und Längswelle?", r: "Querwelle: Schwingung <b>senkrecht</b> zur Ausbreitung. Längswelle: Schwingung <b>parallel</b> zur Ausbreitung. Schall in Luft ist eine Längswelle.", s: "querlaengs" },
    { id: "k1-tf", v: "Wie hängen Periodendauer T und Frequenz f zusammen?", r: "T = {1|f}  (Formelsammlung S. 21). f und T gibt der Erreger vor." },
    { id: "k1-lambda", v: "Was ist die Wellenlänge λ? Wie weit ist es von Berg zu Tal?", r: "Der Abstand zweier benachbarter Oszillatoren im gleichen Schwingungszustand, z. B. Berg zu Berg. Von Berg zu Tal nur λ/2.", s: "momentbild" },
    { id: "k1-c", v: "Wie berechnest du die Ausbreitungsgeschwindigkeit c?", r: "c = λ · f = {λ|T}  (Formelsammlung S. 22)." },
    { id: "k1-wer", v: "Was bestimmt der Erreger, was das Medium? Was passiert beim Wechsel in ein anderes Medium?", r: "Erreger: f. Medium: c. Daraus λ = {c|f}. Beim Medienwechsel bleibt f, c und λ ändern sich." }
  ]},

  /* ================================ Kapitel 2 ================================ */
  { kap: "k2", abschnitte: [
    { titel: "Momentbild und Zeitbild", inhalt: [
      ["merke", "<b>Momentbild y(x)</b> (Ortsdarstellung): die Auslenkung aller Oszillatoren zu einem festen Zeitpunkt, wie ein Foto der Welle. Ablesbar: <b>λ</b> und y<sub>max</sub>.<br><b>Zeitbild y(t)</b> (Zeitdarstellung): die Auslenkung eines einzelnen Oszillators im Lauf der Zeit, wie ein Video von diesem Teilchen. Ablesbar: <b>T</b> und y<sub>max</sub>."],
      ["skizze", "ortzeit", "Links das Momentbild mit λ, rechts das Zeitbild eines Oszillators mit T."],
      ["achtung", "Beide Bilder sehen gleich aus. Schau immer zuerst auf die Achse: Steht dort x, liest du Längen ab (λ). Steht dort t, liest du Zeiten ab (T)."]
    ]},
    { titel: "Aus beiden Bildern rechnen", inhalt: [
      ["formel", "c = λ · f", "Aus dem Momentbild λ, aus dem Zeitbild T ablesen, dann c = {λ|T}.", { fs: 22 }],
      ["beispiel", "Im Momentbild liegen zwei Wellenberge 0,80 m auseinander. Im Zeitbild eines Oszillators liegen zwei Maxima 0,40 s auseinander.", ["λ = 0,80 m und T = 0,40 s", "c = {λ|T} = {0,80 m|0,40 s} = 2,0 m/s"]],
      ["achtung", "Achte auf die Einheiten an den Achsen (cm oder m, ms oder s), bevor du rechnest."]
    ]},
    { titel: "Wohin bewegt sich ein Oszillator?", inhalt: [
      ["merke", "Jeder Oszillator macht als Nächstes das, was sein Nachbar <b>in Richtung Erreger</b> gerade eben gemacht hat."],
      ["skizze", "regel", "Die Welle läuft nach rechts: Vor einem Wellenberg geht es nach oben, hinter dem Berg nach unten."],
      ["achtung", "Zuerst die Laufrichtung der Welle klären. Läuft dieselbe Welle nach links, kehren sich alle Pfeile um."]
    ]},
    { titel: "Gleichtakt und Gegentakt", inhalt: [
      ["merke", "Zwei Oszillatoren im Abstand λ (oder 2λ, 3λ, …) schwingen im <b>Gleichtakt</b>. Im Abstand λ/2 (oder 3λ/2, …) schwingen sie im <b>Gegentakt</b>."],
      ["skizze", "takt", "A und B liegen eine Wellenlänge auseinander und schwingen im Gleichtakt. C liegt λ/2 hinter B und schwingt im Gegentakt."]
    ]},
    { titel: "Polarisation", inhalt: [
      ["merke", "Ein Spalt lässt von einer Querwelle nur die Schwingung parallel zum Spalt durch. Danach schwingt die Welle nur noch in dieser Richtung: Sie ist <b>polarisiert</b>.<br>Nur <b>Querwellen</b> lassen sich polarisieren."],
      ["skizze", "polar", "Ein Spalt lässt die senkrechte Schwingung durch. Ein zweiter, gekreuzter Spalt hält sie auf."],
      ["achtung", "Umgekehrt gilt: Lässt sich eine Welle polarisieren, ist sie eine Querwelle. Schall in Luft lässt sich nicht polarisieren, er ist eine Längswelle."]
    ]},
    { titel: "Die Wellenfunktion", tief: true, inhalt: [
      ["nebenformel", "y(x,t) = y<sub>max</sub> · sin(2π · ({t|T} − {x|λ}))", "für eine harmonische Welle, die in +x-Richtung läuft. Der Erreger sitzt bei x = 0 und startet zur Zeit t = 0 nach oben. Die Welle ist erst angekommen, wenn t ≥ {x|c}, vorher ist y = 0.", { fs: 22 }],
      ["beispiel", "y<sub>max</sub> = 4,0 cm, T = 0,50 s, λ = 2,0 m. Wie groß ist die Auslenkung bei x = 1,5 m zur Zeit t = 0,80 s?", ["Angekommen? {x|c} = {1,5 m|4,0 m/s} ≈ 0,38 s, also ja.", "y = 4,0 cm · sin(2π · (1,6 − 0,75)) = 4,0 cm · sin(2π · 0,85) ≈ −3,2 cm"]],
      ["nebenformel", "Δφ = 2π · {Δx|λ}", "Phasenunterschied zweier Oszillatoren im Abstand Δx."],
      ["achtung", "Der Taschenrechner muss im Bogenmaß (RAD) rechnen."]
    ]}
  ],
  karten: [
    { id: "k2-ort", v: "Was zeigt das Momentbild y(x), was das Zeitbild y(t)? Was liest du jeweils ab?", r: "y(x): alle Oszillatoren zu einem Zeitpunkt (Foto), ablesbar λ und y<sub>max</sub>. y(t): ein Oszillator im Lauf der Zeit (Video), ablesbar T und y<sub>max</sub>.", s: "ortzeit" },
    { id: "k2-c", v: "Im Momentbild liest du λ ab, im Zeitbild T. Wie kommst du zu c?", r: "c = {λ|T} = λ · f  (Formelsammlung S. 22)." },
    { id: "k2-regel", v: "Wie bestimmst du, ob ein Oszillator als Nächstes nach oben oder unten schwingt?", r: "Er macht, was sein Nachbar <b>in Richtung Erreger</b> gerade gemacht hat. Laufrichtung der Welle beachten!", s: "regel" },
    { id: "k2-takt", v: "Zwei Oszillatoren sind λ/2 voneinander entfernt. Wie schwingen sie zueinander?", r: "Im Gegentakt. Im Abstand λ, 2λ, … schwingen sie im Gleichtakt." },
    { id: "k2-polar", v: "Welche Wellen lassen sich polarisieren, und was folgt daraus?", r: "Nur Querwellen. Lässt sich eine Welle polarisieren, ist sie eine Querwelle. Schall in Luft lässt sich nicht polarisieren.", s: "polar" }
  ]},

  /* ================================ Kapitel 3 ================================ */
  { kap: "k3", abschnitte: [
    { titel: "Superposition", inhalt: [
      ["merke", "Treffen sich zwei Wellen, addieren sich ihre Auslenkungen an jeder Stelle: <b>y = y₁ + y₂</b>. Danach laufen beide unverändert weiter (ungestörte Überlagerung)."],
      ["skizze", "superpos", "Ein Berg und ein Tal laufen aufeinander zu. Beim Treffen addieren sich die Auslenkungen, danach laufen beide unverändert weiter."],
      ["achtung", "Ein gerades Seil im Moment der Überlagerung heißt nicht Ruhe: Die Teilchen bewegen sich schnell. Deshalb tauchen beide Pulse wieder auf."]
    ]},
    { titel: "Interferenz", inhalt: [
      ["merke", "Überlagern sich zwei Wellen gleicher Frequenz dauerhaft, spricht man von <b>Interferenz</b>. Im Gleichtakt verstärken sie sich (<b>konstruktiv</b>), im Gegentakt schwächen sie sich ab (<b>destruktiv</b>)."],
      ["skizze", "interferenz", "Links: gleichphasig, die Amplituden addieren sich. Rechts: gegenphasig, die Wellen löschen sich aus."],
      ["achtung", "Vollständige Auslöschung gibt es nur bei gleich großen Amplituden. Sonst bleibt eine kleinere Welle übrig."]
    ]},
    { titel: "Gangunterschied", inhalt: [
      ["merke", "Zwei Quellen schwingen im Gleichtakt. Die Wege s₁ und s₂ bis zum Punkt P unterscheiden sich um den <b>Gangunterschied Δs = |s₂ − s₁|</b>."],
      ["skizze", "gang", "Von Q₁ und Q₂ laufen die Wellen auf verschiedenen Wegen zum Punkt P."],
      ["formel", "Δs = k · λ   (k = 0, 1, 2, …)", "Verstärkung (Maximum): Die Wellen kommen im Gleichtakt an."],
      ["formel", "Δs = (2k − 1) · {λ|2}   (k = 1, 2, 3, …)", "Auslöschung (Minimum): Die Wellen kommen im Gegentakt an."],
      ["beispiel", "λ = 40 cm. Der Punkt P ist 1,20 m von Q₁ und 1,80 m von Q₂ entfernt.", ["Δs = 1,80 m − 1,20 m = 0,60 m = 1,5 · λ", "Das ist (2k − 1) · {λ|2} mit k = 2: Auslöschung."]],
      ["achtung", "Es kommt nur auf den Unterschied der Wege an, und der zählt in Wellenlängen."]
    ]},
    { titel: "Reflexion am Ende des Wellenträgers", inhalt: [
      ["merke", "<b>Festes Ende:</b> Die Welle wird mit Phasensprung um π reflektiert, ein Berg kommt als Tal zurück.<br><b>Loses Ende:</b> Reflexion ohne Phasensprung, ein Berg kommt als Berg zurück."],
      ["skizze", "reflexion", "Oben ein festes Ende, unten ein loses Ende: Was hinläuft, und was zurückkommt."]
    ]},
    { titel: "Stehende Welle", inhalt: [
      ["merke", "Laufen zwei Wellen gleicher Frequenz und Amplitude gegeneinander, entsteht eine <b>stehende Welle</b>. <b>Knoten</b> bleiben immer in Ruhe, in den <b>Bäuchen</b> schwingt der Wellenträger mit doppelter Amplitude. Eine stehende Welle transportiert keine Energie."],
      ["skizze", "stehend", "Knoten (K) und Bäuche (B): Benachbarte Knoten liegen λ/2 auseinander, vom Knoten zum Bauch sind es λ/4."],
      ["merke", "Am <b>festen Ende</b> liegt ein Knoten, am <b>losen Ende</b> ein Bauch."],
      ["achtung", "Der Abstand zweier benachbarter Knoten ist λ/2, nicht λ."]
    ]},
    { titel: "Eigenschwingungen", inhalt: [
      ["formel", "λ<sub>k</sub> = {2ℓ|k + 1}", "für zwei feste oder zwei lose Enden. Grundschwingung k = 0, Oberschwingungen k = 1, 2, 3, …", { fs: 23 }],
      ["formel", "λ<sub>k</sub> = {2ℓ|k + {1|2}}", "für ein festes und ein loses Ende. Grundschwingung k = 0, Oberschwingungen k = 1, 2, 3, …", { fs: 23 }],
      ["skizze", "eigen", "Links zwei feste Enden, rechts ein festes und ein loses Ende, jeweils für k = 0, 1, 2."],
      ["merke", "Mit c = λ · f folgen die <b>Eigenfrequenzen</b>. Bei zwei gleichen Enden ist f<sub>k</sub> = (k + 1) · f<sub>0</sub>: alle ganzzahligen Vielfachen der Grundfrequenz."],
      ["beispiel", "Eine Gitarrensaite (ℓ = 65 cm, c = 143 m/s) ist an beiden Enden fest. Wie groß sind f<sub>0</sub> und die Frequenz der 2. Oberschwingung?", ["λ<sub>0</sub> = 2ℓ = 1,30 m, f<sub>0</sub> = {c|λ<sub>0</sub>} = {143 m/s|1,30 m} = 110 Hz", "k = 2: λ<sub>2</sub> = {2ℓ|3} ≈ 0,433 m, f<sub>2</sub> = 3 · f<sub>0</sub> = 330 Hz"]],
      ["achtung", "Die Grundschwingung hat k = 0. Die 2. Oberschwingung (k = 2) hat drei Bäuche."]
    ]},
    { titel: "Wellenfunktion der stehenden Welle", tief: true, inhalt: [
      ["nebenformel", "y(x,t) = 2y<sub>max</sub> · cos(2π · {x|λ}) · sin(2π · {t|T})", "y<sub>max</sub> ist die Amplitude der beiden gegeneinander laufenden Wellen. Knoten liegen dort, wo der Kosinus null ist.", { fs: 23 }]
    ]}
  ],
  karten: [
    { id: "k3-super", v: "Was passiert, wenn sich zwei Wellen treffen?", r: "Die Auslenkungen addieren sich: y = y₁ + y₂. Danach laufen beide unverändert weiter.", s: "superpos" },
    { id: "k3-gang-max", v: "Bei welchem Gangunterschied verstärken sich zwei gleichphasige Wellen?", r: "Δs = k · λ mit k = 0, 1, 2, …", s: "gang" },
    { id: "k3-gang-min", v: "Bei welchem Gangunterschied löschen sich zwei gleichphasige Wellen aus?", r: "Δs = (2k − 1) · {λ|2} mit k = 1, 2, 3, …, also λ/2, 3λ/2, …" },
    { id: "k3-reflex", v: "Wie wird eine Welle am festen und am losen Ende reflektiert?", r: "Festes Ende: Phasensprung um π, Berg wird Tal. Loses Ende: kein Phasensprung, Berg bleibt Berg.", s: "reflexion" },
    { id: "k3-steh", v: "Knoten und Bäuche: Wie weit liegen sie auseinander? Was liegt am festen, was am losen Ende?", r: "Knoten zu Knoten λ/2, Knoten zu Bauch λ/4. Festes Ende: Knoten. Loses Ende: Bauch.", s: "stehend" },
    { id: "k3-eigen", v: "Welche Wellenlängen passen auf einen Wellenträger der Länge ℓ mit zwei festen Enden?", r: "λ<sub>k</sub> = {2ℓ|k + 1} mit k = 0 (Grundschwingung), 1, 2, …  (Formelsammlung S. 23)", s: "eigen" }
  ]},

  /* ================================ Kapitel 4 ================================ */
  { kap: "k4", abschnitte: [
    { titel: "Eigenschwingungen einer Saite", inhalt: [
      ["merke", "Eine Saite ist an beiden Enden fest, dort liegen immer Knoten. Es passen nur die Wellenlängen λ<sub>k</sub> = {2ℓ|k + 1} (Formelsammlung S. 23)."],
      ["formel", "f<sub>k</sub> = (k + 1) · {c|2ℓ}", "für Saiten und andere Wellenträger mit zwei festen (oder zwei losen) Enden; folgt aus λ<sub>k</sub> und c = λ · f. Grundfrequenz f<sub>0</sub> = {c|2ℓ}.", { fs: "23 und 22" }],
      ["skizze", "saite", "Grundschwingung (k = 0) und die ersten beiden Oberschwingungen einer Saite."],
      ["beispiel", "Die tiefe E-Saite einer Gitarre ist 65 cm lang und hat die Grundfrequenz 82,4 Hz. Wie schnell laufen Wellen auf ihr?", ["λ<sub>0</sub> = 2ℓ = 1,30 m", "c = λ<sub>0</sub> · f<sub>0</sub> = 1,30 m · 82,4 Hz ≈ 107 m/s"]],
      ["achtung", "Die Saitenlänge ist nicht λ. Bei der Grundschwingung gilt ℓ = λ<sub>0</sub>/2."]
    ]},
    { titel: "Offenes und gedacktes Rohr", inhalt: [
      ["merke", "Im Rohr schwingt die Luft als Längswelle. Am <b>offenen Ende</b> liegt ein Bewegungsbauch, am <b>geschlossenen Ende</b> ein Bewegungsknoten. Offenes Rohr = zwei lose Enden, gedacktes Rohr = ein festes und ein loses Ende."],
      ["formel", "offen: f<sub>k</sub> = (k + 1) · {c|2ℓ}     gedackt: f<sub>k</sub> = (2k + 1) · {c|4ℓ}", "Grundschwingung k = 0; folgt aus λ<sub>k</sub> und c = λ · f.", { fs: "23 und 22" }],
      ["skizze", "rohr", "Bewegungsamplitude der Luft: offenes Rohr mit Bäuchen an beiden Enden, gedacktes Rohr mit Knoten am geschlossenen Ende."],
      ["beispiel", "Ein gedacktes Panflötenrohr ist 10 cm lang (c = 343 m/s). Wie hoch ist sein Grundton?", ["λ<sub>0</sub> = 4ℓ = 0,40 m", "f<sub>0</sub> = {c|λ<sub>0</sub>} = {343 m/s|0,40 m} ≈ 858 Hz"]],
      ["achtung", "Beim gedackten Rohr fehlen die geraden Vielfachen der Grundfrequenz. Sein Grundton liegt bei gleicher Länge eine Oktave tiefer als beim offenen Rohr."]
    ]},
    { titel: "Kundt'sches Rohr", inhalt: [
      ["merke", "Ein Lautsprecher erzeugt im Rohr eine stehende Schallwelle. Leichtes Pulver sammelt sich in den <b>Bewegungsknoten</b>. Benachbarte Häufchen liegen <b>λ/2</b> auseinander."],
      ["skizze", "kundt", "Pulverhäufchen in den Bewegungsknoten: Ihr Abstand ist λ/2."],
      ["formel", "c = λ · f", "Aus dem Häufchenabstand folgt λ, mit der bekannten Frequenz f dann c.", { fs: 22 }],
      ["beispiel", "Bei f = 1,70 kHz liegen benachbarte Häufchen 10,0 cm auseinander.", ["λ = 2 · 10,0 cm = 0,200 m", "c = λ · f = 0,200 m · 1700 Hz = 340 m/s"]],
      ["achtung", "Miss über mehrere Häufchen: Zwischen n + 1 Häufchen liegen n Abstände von je λ/2."]
    ]},
    { titel: "Klang und Instrumente", inhalt: [
      ["merke", "Die <b>Tonhöhe</b> bestimmt die Grundfrequenz f<sub>0</sub>. Die <b>Klangfarbe</b> bestimmt die Mischung der Oberschwingungen."],
      ["skizze", "spektrum", "Spektrum einer gezupften Saite: Anteile der Schwingungen mit f<sub>0</sub>, 2f<sub>0</sub>, 3f<sub>0</sub>, …"],
      ["text", "Die Stellschrauben stecken in f<sub>0</sub> = {c|2ℓ}: Kürzere Saite (Bund) oder straffere Saite (größeres c) ergibt einen höheren Ton, eine schwerere Saite (kleineres c) einen tieferen."],
      ["achtung", "Beim <b>Flageolett</b> berührst du die Saite bei ℓ/2: Dort entsteht ein Knoten, es bleiben nur 2f<sub>0</sub>, 4f<sub>0</sub>, … und die Oktave klingt."]
    ]},
    { titel: "Schwebung", tief: true, inhalt: [
      ["text", "Zwei Töne mit fast gleicher Frequenz überlagern sich. Du hörst die mittlere Frequenz, deren Lautstärke an- und abschwillt."],
      ["skizze", "schwebung", "Überlagerung zweier fast gleicher Töne: Die Hüllkurve schwillt mit der Schwebungsfrequenz an und ab."],
      ["nebenformel", "f<sub>S</sub> = |f<sub>1</sub> − f<sub>2</sub>|     T<sub>S</sub> = {1|f<sub>S</sub>}", "für zwei Töne mit den Frequenzen f<sub>1</sub> und f<sub>2</sub>."],
      ["beispiel", "Zwei Stimmgabeln mit 440 Hz und 443 Hz klingen zusammen.", ["f<sub>S</sub> = 443 Hz − 440 Hz = 3 Hz, also drei Lautstärkemaxima pro Sekunde."]]
    ]}
  ],
  karten: [
    { id: "k4-saite", v: "Welche Frequenzen kann eine Saite der Länge ℓ haben?", r: "f<sub>k</sub> = (k + 1) · {c|2ℓ} mit k = 0 (Grundschwingung), 1, 2, …", s: "saite" },
    { id: "k4-rohr", v: "Welche Eigenfrequenzen hat ein gedacktes Rohr?", r: "f<sub>k</sub> = (2k + 1) · {c|4ℓ}: nur die ungeraden Vielfachen von f<sub>0</sub> = {c|4ℓ}.", s: "rohr" },
    { id: "k4-offen-gedackt", v: "Ein offenes Rohr wird an einem Ende verschlossen. Was passiert mit dem Grundton?", r: "Er sinkt um eine Oktave: λ<sub>0</sub> wird von 2ℓ zu 4ℓ, f<sub>0</sub> halbiert sich." },
    { id: "k4-kundt", v: "Was misst du am Kundt'schen Rohr, und wie kommst du zu c?", r: "Den Abstand benachbarter Häufchen: λ/2. Dann c = λ · f (Formelsammlung S. 22).", s: "kundt" },
    { id: "k4-klang", v: "Was bestimmt die Tonhöhe, was die Klangfarbe?", r: "Tonhöhe: Grundfrequenz f<sub>0</sub>. Klangfarbe: Mischung der Oberschwingungen.", s: "spektrum" },
    { id: "k4-schwebung", v: "Zwei Töne mit 440 Hz und 444 Hz klingen zusammen. Was hörst du?", r: "Einen Ton von 442 Hz, dessen Lautstärke 4-mal pro Sekunde an- und abschwillt: f<sub>S</sub> = |f<sub>1</sub> − f<sub>2</sub>| = 4 Hz." }
  ]}
];
