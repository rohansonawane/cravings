## Cravings – Homemade Premium Chocolate Experience

A mobile-first, premium dark & golden themed ecommerce experience for the **Cravings** homemade chocolate brand. Built with Next.js App Router, Tailwind CSS v4, shadcn/ui, and framer-motion.

![Cravings preview](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80)

---

### Tech Stack
- Next.js 14 App Router (TypeScript)
- Tailwind CSS v4 + custom theme variables
- shadcn/ui component primitives
- framer-motion for micro interactions
- Global cart context with sheet UI

---

### Local Development
```bash
npm install
npm run dev
# open http://localhost:3000
```

Available scripts:
- `npm run dev` – local development
- `npm run lint` – run ESLint
- `npm run build` – production build
- `npm run start` – serve production build

---

### Vercel Deployment
The repository is ready for Vercel (see `vercel.json`). To deploy:

1. **Create the project**  
   - Visit [Vercel](https://vercel.com/new) → “Import Git Repository”  
   - Select `rohansonawane/cravings` and choose the main branch.

2. **Confirm build settings**  
   - Framework: **Next.js** (auto-detected)  
   - Install Command: `npm install`  
   - Build Command: `npm run build`  
   - Output Directory: `.next`

3. **Environment variables**  
   - None required today. Add as needed via the Vercel dashboard.

4. **Deploy**  
   - Click Deploy. Vercel will build and provide a production URL.  
   - Optional: connect a custom domain in the project settings.

CLI Option:
```bash
vercel login
vercel
vercel --prod
```

Vercel GitHub integration is enabled via `vercel.json`, so pushes to `main` can auto-trigger new deployments.

---

### Project Structure
```
src/
  app/
    page.tsx          # landing page
    shop/             # product listing page
    collections/      # curated experiences
    gifting/          # gifting concierge
    story/            # brand story timeline
  components/
    cart/             # cart sheet
    layout/           # header & footer
    ui/               # shadcn components
  context/
    cart-context.tsx  # global cart provider
  data/
    site-content.ts   # products, gallery, video
```

---

### License
MIT © Cravings
