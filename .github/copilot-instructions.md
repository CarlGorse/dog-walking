# Out and About Dog Walking: site preferences

Notes for future work on this site. Keep it updated when preferences change.

## Working style
- The owner sends short, informal requests, one tweak at a time. Do exactly what's asked, then confirm briefly with links to changed files.
- Check changes in the browser at http://localhost:3000 where it matters.
- Don't edit files via shell. Use the edit/create tools.
- Next.js 16 has breaking changes. Read `node_modules/next/dist/docs/` before using unfamiliar APIs (see `AGENTS.md`).

## Brand and tone
- Business name: "Out and About", tagline "Dog walking". Based in Midsomer Norton; the home page intro lists the nearby towns and villages served. Use `app/site-config.ts` (`name`, `tagline`, `fullName`, `facebookUrl`) instead of hardcoding.
- Happy, relaxed, friendly tone. Plain wording, no hype.
- Italicise the business name in blog copy via `withItalicName()`.
- Logo: `app/logo-badge.tsx` (circular badge with Alfie icon from `app/alfie-icon.tsx`). Reuse the Alfie icon for dog-related icons.
- Palette: sand tones (Tailwind `amber-*` is remapped in `globals.css`), emerald green accents, dark green contact/calendar panel.

## Business rules (keep copy consistent)
- Max 3 dogs in any group walk.
- Group dogs: at least 1 year old, males neutered, no females in season, and no bigger than a Labrador or German Shepherd (crate size). Solo walks accept any dog, any breed. Nervous dogs welcome.
- Prices are per dog, with multi-dog household discounts. Payment up front. Cancelling has no penalty, but frequent cancellations may prompt a chat about the policy.
- Evening solo: £12 for the hour (includes transport time), extra half hour £4 (unconfirmed; the owner may want £5).
- Group walk times are the owner's wording (pickup by 08:30, earliest return 11:30, and so on). Don't change them.

## UI preferences
- Prices are big and consistent (`text-4xl font-black text-emerald-700`), directly under the days heading. Details come after.
- Calendar (`app/walk-calendar.tsx`, data in `public/availability.txt`, rows `YYYY-MM-DD|slot|available|taken`):
  - Group slots show 3 Alfie icons: full colour if a space is available, pale grey if taken (flipped so a free space looks inviting and a full slot looks faded). Not green.
  - Text beside them: "N spaces available", "1 space available" (singular), "No spaces available".
  - Past days and slots (by UK time, a slot is hidden once its start time has passed) are hidden, and "previous period" is disabled on the current period.
  - Evening rows in `availability.txt` need only `date|evening` to book the evening out (numbers ignored).
  - Keep a little space between the walk description and the icons.
- FAQs (`app/faqs/faq-list.tsx`): category pills (All, Walks, Your dog, Booking and payment, Safety and care). Questions are in customer-journey (chronological) order, with payment before collection.
- Navigation: no Services dropdown. Two-row header from `xl`, hamburger below.
- "What we offer" links to the FAQs for details.

## Technical gotchas
- Dev server on port 3000 doesn't hot-reload `globals.css`. Restart it.
- `.content-card` is unlayered CSS and beats Tailwind utilities, so use `!` modifiers (e.g. `bg-white!`).
- `next/image` caches by URL. Use a new filename for a replaced image.
- Don't use watermarked stock images or remove watermarks.

## Open questions
- Real Facebook URL (currently a placeholder).
- Extra half hour: £4 or £5?
- Delete unused `app/components/pricing-section.tsx`?
- Favicon and mobile menu may still show the old emoji.
