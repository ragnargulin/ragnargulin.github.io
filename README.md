# portfolio

TO DO
- definiera rubriknivåer med flex-mått (byta ut mot dimensionerna i root kanske?). Kan man även lägga till transition, så att rubirker läses in först, sen h2, h3, p etc
- nav till toppen eller hamburgare för mobile
- minimera alla SVG med online-verktyg
- minimera allt PNG och JPG


User feedback:
•	Det är för många animationer och effekter.
•	Ta bort den skakande hover-effekten på menyn och länkarna.
•	Ta bort den snurrande logotypen.
•	Ta bort möjligheten att ändra färg på smileyn. Om smileyn ska vara kvar, använd den orange accentfärgen som redan finns.
•	Kanske ta bort smileyn helt, den döljer textblock i mobilvy.
•	Brödtexten är för stor på vissa ställen, vilket gör den svår att läsa, som på startsidan. Kanske ska göras om till punktlista eller något annat för att göra den mer lättläst.
•	För att förbättra tillgängligheten, se över hur hemsidan fungerar utan mus. Testa navigering med tab och text-till-tal. (WCAG är extra hett just nu iochmed de nya eu lagkraven)
•	Använd din “R”-ikon som favicon istället för Pac-Man-spöket.
•	Ändra titeltaggen och ta bort punkterna mellan favicon och namnet.
•	Jag kan se att du döpt dina rubriker som är svgs till “Big boy” och “Bigger boy” Det är lite roligt men om du ska jobba med tillgänglighet är det bättre att ha dessa som text och göra de till H1 och H2


På mobilen händer det lite märkliga saker... se foton. Antar att den är kodad för dator. Se t ex bathroom under inspiration.

Lite inkonsekvent med gemener och versaler i rubrik och text och mellan olika stycken. Gothenburg skall stavas med versal i början, precis som Umeå och Halmstad. 

Dom första e-mojisarna var kul men känns sedan lite överflödiga tycker vi.



OPTIMISERING // GÖRA SIST
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


