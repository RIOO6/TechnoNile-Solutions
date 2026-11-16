# TechnoNile Solutions — GitHub Pages website

A responsive, bilingual (English/Arabic) static company website. It uses plain HTML, CSS and JavaScript, so it can be published directly with GitHub Pages. No build tools or backend are required.

## 1. Edit these details before publishing

Open `js/script.js`. At the very top, find `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  whatsapp: "", // Your WhatsApp number, international format, digits only
  email: "",    // Public business email
  phone: "",    // Optional public phone
  location: "Khartoum, Sudan"
};
```

- Put your WhatsApp number in international format without `+`, spaces or dashes (example format: `2499XXXXXXXX`).
- Or add your business email. The contact form uses WhatsApp if configured; otherwise it uses email.
- If both are empty, the form explains what needs configuring instead of pretending to send a message.

## 2. Other places to personalize

Search in `index.html` for `EDIT:` comments:
- Meta description.
- Company name and brand text if you change the brand.
- Location line in the hero/footer.
- The portfolio disclaimer and example project cards.

The service descriptions and all English/Arabic translations are in `js/script.js` inside the `translations` object. Edit both `en` and `ar` to keep the two languages consistent.

Replace the illustrative portfolio graphics with screenshots of real projects when you are ready. Do not present the sample dashboard or network graphic as a completed customer project. The website explicitly labels them as illustrative.

## 3. Publish on GitHub Pages

1. Create a GitHub repository, for example `technonile-site`.
2. Upload the complete contents of this folder. `index.html` must be in the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site will be available at the URL shown in Settings → Pages.

If you use a custom domain later, configure it under Settings → Pages and follow GitHub's DNS instructions.

## 4. Important limitations

- GitHub Pages hosts static files. This site does not include a server-side database, login system, admin panel or PHP backend.
- The contact form opens WhatsApp or the visitor's email app; it does not store submissions on the website.
- Google Fonts are loaded online. The site still renders with fallback fonts if the visitor cannot reach Google Fonts.
- Use HTTPS and test both languages on a phone before sharing the site.

## Files

- `index.html` — page structure and content.
- `css/styles.css` — all styling and responsive layout.
- `js/script.js` — language switching, mobile navigation and contact form behavior.
- `assets/logo.svg`, `assets/favicon.svg` — editable vector brand assets.
