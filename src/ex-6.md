### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

Svar: Interfaces kan enkelt extendas med "extend", medans "types" kan göra liknande men med en intersection type med '&'.

t.ex

interface Family {
combinedAge: number
numberOfPeople: number
}

interface BiggerFamily extends Family {
grandChildren: true
}

här ärver BiggerFamily alla properties som Family har, med type skulle det bli så här:

type Family = {
combinedAge: number
numberOfPeople: number
}

type GrandChildrenFamily = {
grandChildren: true
}

type BiggerFamily = Family & GrandChildrenFamily

Det finns andra skillnader såsom att interfaces kan använda "implements". t.ex Class Bil impements Cardetails, där:

type Cardetails = {
color: string
}

Class Bil implements Cardetails {
color: 233 ///ger ts error då det måste vara en string
}
