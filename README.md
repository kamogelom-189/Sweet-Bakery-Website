# Sweet Bakery Website
 
A multi-page website for a small bakery, built with plain HTML, CSS and JavaScript. It was a coursework project for my Web Development module.
 
## Pages
 
| Page | What's on it |
|---|---|
| **Home** (`index.html`) | FAQ accordion and a lightbox photo gallery |
| **About** (`about.html`) | Information about the bakery |
| **Products** (`products.html`) | Product cards with images |
| **Enquiry** (`enquiry.html`) | Enquiry form (product, volunteer or sponsor) |
| **Contact** (`contact.html`) | Contact form with message type |
 
## Features
 
- **Form validation in JavaScript:** name must be 3-50 characters, email must be valid, and an enquiry or message type must be chosen. Contact messages must be 10-500 characters. Errors show on the page.
- **FAQ accordion** that expands and collapses smoothly.
- **Image gallery** using the [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) library.
- **SEO basics:** page titles, meta descriptions, `robots.txt` and `sitemap.xml`.
- **Responsive meta viewport** on every page.
## Tech stack
 
HTML5, CSS3, vanilla JavaScript, Lightbox2 (via CDN)
 
## Run it locally
 
No build step is needed. Download or clone the repo and open `index.html` in a browser.
 
```bash
git clone https://github.com/kamogelom-189/part3poe.git
cd part3poe
```
 
## Known limitations
 
- The forms validate input but don't send it anywhere. Submission is simulated with an alert because there is no backend.
- `sitemap.xml` and `robots.txt` still use the placeholder domain `yourdomain.com`. Replace it with the real URL once the site is hosted.
## Author
 
**Kamogelo Mathe**: [LinkedIn](https://www.linkedin.com/in/mathe45627) · [GitHub](https://github.com/kamogelom-189)
 
