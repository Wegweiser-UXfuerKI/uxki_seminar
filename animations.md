# Wegweiser Animationen

## Wie funktioniert das System?

Aufbau der ausgewählten Animationen:

```
AnimationData.jsx:
1   export const AnimationData = {
2       Bereichsname: {
3           Type: "Base",
4           Content: [
5               {
6                   Image: { typeImg: "image", src: bild1, alt: "Bild 1" },
7                   Texts: [
8                       { typeText: "titel", string: "Inhalt" },
9                       { typeText: "text", string: "Inhalt" }, ...
10                  ],
11                  AnimationOrder: [...],
12                  AnimationOrderRev: [...]
13              },
14              {...},
15          ]
15      }
16  }
```

Dies ist ein Beispiel für den Aufbau, wie Animationen hinterlegt werden. Wichtig ist, dass dieser allgemeine Aufbau eingehalten wird. Für die lesbarkeit sollte - muss aber nicht - die Reihenfolge innerhalb von Objekten "{ }" eingehalten werden, die Reihenfolge innerhalb von Arrays "[ ]" ist essentiell für die Funktionalität.

Der Tatsächliche Inhalt der Animationen findet in `Content:` statt, dieses Array beinhaltet die einzelnen "Kapitel" der Animationen. Einzelne Kapitel werden durch unterschiedliche Objekte in Content gekennzeichnet. Pro Kapitel werden Text und Bild festgelegt, sowie AnimationOrder für die Animationen weiter und AnimationOrderRev für die Animationen zurück. _Im folgenden wird der Aufbau lediglich für AnimationOrder spezifisch betrachtet und nicht für AnimationOrderRev, da diese äquivalent sind._

```
1   AnimationOrder: [
2       [
3           [
4               { Animation 1 },
5               { Animation 2 },
6           ],
7           [
8               { Animation 3 },
9               { Animation 4 },
10          ],
11      ],
12      [
13          [
14              { Animation 5 },
15              { Animation 6 },
16          ],
17      ]
18  ],
```

_Beispielbild AnimationOrder_

Innerhalb von AnimationOrder gibt es ein oder mehrere Arrays (Zeile 2-11, Zeile 12-17), welche die Anzahl der "Klicks" (Klicks = Pfeiltasten bzw. auf dem Bildschirm klicken) darstellen. Somit würde man hier zweimal klicken müssen um in das nächste Kapitel zu kommen mit anderen Texten.  
Diese "Klickarrays" beinhalten ein oder mehrere Arrays (z.B. Zeile 3-6, oder Zeile 7-10), welche zeitgleiche Animationen darstellen. Alle Animationen die innerhalb solcher Arrays stehen werden Zeitgleich gestartet.  
Wenn ein Klick stattfindet werden die Arrays innerhalb des aktuellen Klickarrays durchgelaufen. In dem obigen Beispiel würde dies wie folgt aussehen:

_Klick_ &rarr; Animation 1 und Animation 2 werden ausgeführt &rarr; Animation 3 und Animation 4 werden ausgeführt.  
_Klick_ &rarr; Animation 5 und Animation 6 werden ausgeführt.

Grundsätzlich werden in `Image` und `Texts` die Texte bzw. das Bild für dieses

### Was muss vom Aufbau geändert werden um eine Animation hinzuzufügen?

Nun geht es darum, welche Werte angepasst werden müssen um eigenen Animationen hinzuzufügen. Die Inhaltlichen Puntke müssen entsprechend der Seite und gewünschten Inhalt angepasst werden.

1. `Bereichsname:` Der Name der Aktuellen Einheit (beim EU AI Act wären diese _Einleitung_, _Risikostufen_, _Designimplikationen_ und _Fazit_) Nun muss man das passende Chapter finden und in diesem die nächsten Schritte durchgeführt werden.
2. `Image:` Hier muss das passende Bild in dieser Datei importiert werden und in `src:` eingesetzt werden. `typeImg:` gibt dabei an, ob es sich um ein Bild oder ein Video handelt (_Video hinterlegung unzureichend getestet_), `alt:` gibt dabei wie man es auch von html kennt den Alternativtext an, wenn das bild nicht geladen werden kann.
3. Im `Texts:` Array werden Objekte mit den einzelnen Textblöcken hinterlegt; Die Anzahl der Verwendeten Text Objekte bestimmt wie viele Texte angezeigt werden können (aktuelles Maximum ist 5 ~ soll im optimalfall ohne Limit sein). Ein Text besteht aus `typeText:` und `string:`. Als Typen gibt es aktuell _titel_ und _text_, welche sich darin unterscheiden, dass titel etwas größer ist und leicht Bold. In string kommt der angezeigte Text rein.
4. In dem `AnimationOrder` Array werden (in den Subarrays) die gewünschten Animationen angegeben. Hierbei muss man darauf achten, dass man in die passenden SubArrays die Objekte Reinschreibt um die Reihenfolge und gewünschte funktionalität zu gewährleisten. Zunächst muss bestimmt werden welches `element:` animiert werden soll, innerhalb des `animationSelected:` Arrays werden die animationen in einem String hinterlegt. Der `speed:` gibt darüber auskunft wie lange die Animationen in dem Array brauchen um vollendet zu sein.
5. In `AnimationOrderRev:` muss entsprechend Rückwirkend die Reihenfolge angegeben werden - mit äquivalenten Aufbau zu AnimationOrder.

Schritte 4 und 5 müssen entsprechend der gewünschten Anzahl an Animationen wiederholt werden.

## Welche Animationen gibt es?

Grundsätzlich sind die meisten CSS stylings möglich anzuwenden. Diese werden in der `animations.jsx` gespeichert. In der aktuellen Fassung sind folgende bereits hinterlegt:

|       CSS styling        |              Name in AnimationData              |             Effekt              |                                                          Info                                                          |
| :----------------------: | :---------------------------------------------: | :-----------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| top, right, bottom, left |                 `move:top:50%`                  |            top: 50%             |             Setzt den Abstand zu einer Seite. Top muss mit Seite ersetzt werden, 50% mit gewünschten Wert.             |
|          unset           |                  `remove:top`                   |           top: unset            | Entfernt den Abstand zu der gewählten Seite (meist notwendig, wenn die gegenüberliegende richtung genutzt werden soll) |
|        transform         | `translate50`, `translateMinus50`, `translate0` | transform: translateY(-50%),... |              Verschiebt das Element um die Hälfte seiner Größe nach oben/unten (notwendig zum Zentrieren)              |
|         opacity          |                 `hide`, `show`                  |     opacity: 0, opacity: 1      |                                                blendet Element ein/aus                                                 |
|          color           |                `color:#hexwert`                 |         color: #hexwert         |                                       setzt die Textfarbe auf einen eigenen Wert                                       |

Weitere Stylings/Animationen können grundsätzlich im selben Prinzip hinzugefügt werden, dazu muss der Name, den man auch in AnimationData verwendet innerhlab der `animations.jsx` hinterlegt werden. Wenn es sich bei der neuen Animation um eine mit eigenen Werten handelt (bisher alle die ein `:` beinhalten) muss zusätzlich eine geweisse Logik innerhalb der Datei `AnimationContainer.jsx` angewendet werden, damit die Werte richtig übertragen werden.  
_Die Animationen für transform können z.B. auch zu einem keyword reduziert werden. Um den Code weiter zu reduzieren könnte man die unset Funktion auch mit `move:` aufrufen, für die lesbarkeit bietet es sich aber an, diesen Fall gesondert zu behandeln._

## Welche Limitationen gibt es? / Fragen

Im Aktuellen Zustand ist eine der Limitationen, dass komplexere Stylings erst hinterlegt werden müssen um die Funktionalität zu gewährleisten. Auch wenn dies nicht sonderlich Aufwändig ist, stellt es dennoch Aufwand dar. Auch der Aufwand Animationen für ein Kapitel zu hinterlegen, wird durch die Menge des Schreibens das Potential aktuell limieren.  
Eine weitere durchaus relevante Limitirung ist die Responsiveness, aktuell ist keine deisgnierte Responsiveness gegeben, bis zu einer gewissen Bildschirmbreit sieht es aber dennoch akzeptabel aus. Auch ist es im aktuellen Systemstand so, dass maximal 5 Textblöcke genutzt werden können, auch wenn diese Änderung mit relativ wenig Aufwand von statten gehen könnte, liegen die Prioritäten bei relevanteren Aspekten. Wenn es notwendig werden sollte, noch mehr unterschiedliche Texte abzubilden kann man überlegen diese Änderung zu vollziehen.  
Weiter ist die Vielfalt der Übergänge dahingehend limitiert, dass mit States gearbeitet wird und nur einer zeitgleich aktiv sein kann. Man kann also aktuell keine "Morph"-Übergänge durchführen. Es ist für einen angenehmen Ablauf notwendig, dass erst die Elemente nicht mehr Sichtbar sind (ob durch opacity oder bewegen außerhalb des sichtbaren), dann das State-wechsel stattfindet und dann die Elemente erst wieder Sichtbar werden.

### Wieso muss ich die zurück Animationen extra definieren? Kann er nicht die von AnimationOrder einen Schritt zuvor nehmen?

Zunächst war dies der Plan. Wie man sich vorstellen kann, könnte dies deutlich den Schreibaufwand und das Umdenken beim zurückgehen reduzieren. Jedoch ist die komplexität zu hoch gewesen, als dass ich es hinbekommen habe. Auf längere Sicht sollte dies Möglich sein (wobei dann mehr Infos hinterlegt werden müssen bei den "Vorwärts"-Animationen).

### Was behindert die Lösung der Limitationen?

Im wesentlichen sind alle der Limiterungen geplant auf längere Sicht zu lösen. Manche bekommen dabei aber einen höheren Stellenwert als andere. So wird sich die aktuelle Limierung mit der Anzahl und Auswahl der bereits implementierten Animationen/Stylings mit dem Ausbau des Systems selbst lösen.
