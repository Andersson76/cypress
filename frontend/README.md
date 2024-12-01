# Cypress - Uppgiftshanterare

En enkel fullstack-applikation för att hantera uppgifter, byggd med Express, React/TypeScript, TailwindCSS och PostgreSQL, för testning i Cypress.

## Installation och Användning

Följ dessa steg för att köra applikationen lokalt:

1. Klona repot.
2. Installera beroenden för både backend och frontend:
   cd backend
   npm install
   cd ../frontend
   npm install

3. Skapa .env fil i backend mappen och lägg till databasanslutningssträngen där. PostgreSQL exempel: PGURI=postgres://username:password@localhost:5432/database-name

4. Starta backend och frontend för utveckling:
   cd backend
   npm run dev

5. Gå till http://localhost:3000 för att se applikationen

6. Starta Cypress:
   npx cypress open

7. Välj en testfil för att köra tester.

## Uppnådda mål:

	•	E2E-tester: Skapande av uppgifter.
	•	Komponenttest: Test av TaskItem-komponent.
	•	Komplett E2E-test: Från frontend till databas.
	•	Mocking: GET-anrop med JSON-fixture.
