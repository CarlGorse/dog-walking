# Out and About Dog Walking

The website for Out and About, a local dog-walking business based in Midsomer
Norton. It gives prospective customers information about the walks, the service
area, booking, and the dogs' availability.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful project commands:

```bash
npm run lint
npm run build
npm run start
```

`npm run start` serves a production build created with `npm run build`.

## Pages and data

- `/` - Homepage with the service overview, walks, and prices.
- `/about` - About the walker and Alfie.
- `/availability` - Calendar of group and evening walk availability.
- `/faqs` - Customer FAQs.
- `/blog` - Articles and updates.
- `/calendar` - Redirects to `/availability`.
- `/api/availability` - Returns the availability data as JSON.

The calendar reads [`public/availability.txt`](./public/availability.txt).
Edit that file to update the schedule; its opening comments explain the row
format and availability rules.

## Project layout

- `app/` contains the routes and the root layout.
- `app/_components/home/` contains homepage sections.
- `app/_components/shared/` contains UI shared across pages.
- `app/_config/` contains site details and navigation links.
- `public/` contains images and the availability data file.

Update the business name, tagline, full name, or Facebook URL in
[`app/_config/site-config.ts`](./app/_config/site-config.ts).
