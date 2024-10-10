# portfolio

TO DO
- definiera rubriknivåer med flex-mått (byta ut mot dimensionerna i root kanske?). Kan man även lägga till transition, så att rubirker läses in först, sen h2, h3, p etc
- nav till toppen eller hamburgare för mobile
- minimera alla SVG med online-verktyg




OPTIMISERING // GÖRA SIST
- att göra hela sidan till nån sån lista-grej? Så den bara uppdaterar det som syns på skärmen
- alla svg kan vara inline
- ladda ner google fonts, och bara de storlekar som används
- Lägg till tillgänglighetsfunktioner
- Lägg till aria labels på allt
- lägg till attribution link för flaticons + typsnitt satoshi
- https://www.resume.se/opinion/debatt/lagen-om-digital-tillganglighet-missar-den-storsta-malgruppen/


FRAMTIDA GREJER
- Other projects? Ev bara länka till insta
- Citat från folk som jobbat med mig
- Testa att ha stora rubrikerna bakom content? Typ i färg, så svart text kan stå över
- Stort © 2024? Istället för handskriven text längst ner. Låg kontrast i så fall 


DM Sans är typsnittet som använts för SVG-rubriker i nuläget. 700 weight
Flaticons för ikoner. Regular

https://www.fontsquirrel.com/fonts/ElliotSix

(kolla även upp DM mono som alternativ till Roboto mono)
Design strats:

- Psychology of color
- Clear call to action
- Friendly and approachable interface
- Show off code skills in simple ways
- Gör en grafisk manual i Figma
- Jacobs law of internet ux, three click rule


KLART!!
- script för + - på collapsibles
- uppdatera script för navbar så att det kommer ihåg vart man senast var och stannar där vid refresh
- animation när collapsibles öppnas
- Script för att hålla copyrigth-år korrekt
- Uppdatera svg för contact links
- Design ethos typ? Jag vill ha enkla, tidlösa och intuitiva designs som lämnar avtryck
- lös padding på p element i footer och cv
-Snygga till favicon
-CONT och ACT olika beteenden när de skalas ner och upp. Lös
- long och latituda vid kontakt? för skojs skull? 57° 40' 43.428'' N
11° 53' 0.924'' E
- fixa id på sections så att de matchar med navbar
- Stora asterixer eller liknande som ligger i bakgrund och följer på scroll. Kaanske långam rörelse för 3d effekt
- padding på höger i footern strular fortfarande vid mobile view
- svg-ord är fortarande DM sans, men font primary är Satoshi. Testa göra svg av satoshi (behåller MS sans, Satoshi blev lite för fyrkantigt)
- behöver jag har nav på top, eller kan jag göra ett ännu större HELLO och sen scrolla ner till text (bestämde mig för att behålla nav)
- återställ scroll postition när man stänger fönster. ska starta högst upp när man öppnar sidan på nytt (ändrade localStorage till sessionStorage)
- bilden är inte centrerad
- loggan beter sig nog bättre om den är en ren svg. Gör om script om det behövs.
- beter sig nog bättre om bodyLeft och right inte är position absolute, utan bara är 10% bredd och bodymid 80%
-owerflow-problem på iphone SE
- funktion för att förstora bilder genom att klicka på dom?
- om ovan, lös så att musen blir ett plus eller forstoringsglas när man hivrar bider
- Ändra currentcolor på en div ist för att växla divs
- ändra så att bilder är i line med p element i portfolio. Bara lägg p och bilder i leftRow och rightRow, med rubriken i en separat div ovanför
- Lazy load för bilder


