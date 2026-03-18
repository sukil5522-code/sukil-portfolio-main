# 🤖 How to Add Chatbot to All Pages

## Quick Setup Guide

Follow these simple steps to add the Gemini AI chatbot to all your portfolio pages.

---

## Step 1: Add Chatbot CSS to Each HTML File

In **projects.html**, **certifications.html**, and **achievements.html**, find the `</style>` tag and **paste the chatbot CSS BEFORE it**:

```html
<!-- Find this line in each file: -->
</style>

<!-- Add chatbot.css content BEFORE the </style> tag -->
```

**Copy the entire content from `chatbot.css` and paste it before `</style>` in each file.**

---

## Step 2: Add Chatbot HTML to Each Page

In each HTML file (**projects.html**, **certifications.html**, **achievements.html**), find the line:

```html
<footer>
```

**Paste the chatbot HTML BEFORE the `<footer>` tag:**

Copy the content from `chatbot-snippet.html` and paste it right before `<footer>` in each file.

---

## Step 3: Add Chatbot JavaScript to Each Page

At the **END** of each HTML file, find:

```html
</script>

</body>
</html>
```

**Paste the chatbot JavaScript BEFORE `</body>`:**

Copy the entire content from `chatbot.js` and wrap it in `<script>` tags:

```html
<script>
// Paste chatbot.js content here
</script>

</body>
</html>
```

---

## Step 4: Update Hamburger Menu (Mobile Only)

In each file (**projects.html**, **certifications.html**, **achievements.html**), find the hamburger CSS:

```css
.hamburger{
  display:none;
  /* ... rest of the styles ... */
}
```

Add a comment to make it clear it's mobile-only:

```css
/* ── HAMBURGER (Mobile Only) ── */
.hamburger{
  display:none; /* Hidden by default on desktop */
  /* ... rest of the styles ... */
}
```

---

## Step 5: Get Your Gemini API Key

1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key

---

## Step 6: Add API Key to All Files

In **ALL HTML files** (index.html, projects.html, certifications.html, achievements.html), find:

```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

Replace with your actual key:

```javascript
const GEMINI_API_KEY = 'AIzaSy...your-actual-key-here...';
```

---

## ✅ Verification Checklist

After completing all steps, verify:

- [ ] **index.html** - Already has chatbot ✅
- [ ] **projects.html** - Added chatbot CSS, HTML, and JS
- [ ] **certifications.html** - Added chatbot CSS, HTML, and JS  
- [ ] **achievements.html** - Added chatbot CSS, HTML, and JS
- [ ] All files have your Gemini API key
- [ ] Hamburger menu only shows on mobile (< 768px)
- [ ] Chat button (💬) appears on all pages
- [ ] Clicking chat button opens the widget
- [ ] Can send messages and receive AI responses

---

## 🎯 File Locations Reference

```
Your Portfolio/
├── index.html              ✅ Already has chatbot
├── projects.html          ⚠️ Needs chatbot added
├── certifications.html    ⚠️ Needs chatbot added
├── achievements.html      ⚠️ Needs chatbot added
├── chatbot.css            📄 Copy this CSS to each file
├── chatbot.js             📄 Copy this JS to each file
└── chatbot-snippet.html   📄 Copy this HTML to each file
```

---

## 🚀 Alternative: External File Method

Instead of copying code to each file, you can link to external files:

### In the `<head>` section of each page:
```html
<link rel="stylesheet" href="chatbot.css">
```

### Before `</body>` tag of each page:
```html
<script src="chatbot.js"></script>
```

### And add the chatbot HTML snippet before `<footer>`:
Just copy/paste from `chatbot-snippet.html`

This method is cleaner and easier to maintain!

---

## 🐛 Troubleshooting

**Chatbot button not appearing?**
- Check if chatbot HTML is added before `<footer>`
- Verify chatbot CSS is included in `<style>` section

**Chatbot not responding?**
- Verify your Gemini API key is correct
- Check browser console for errors (F12)
- Make sure you have internet connection

**Hamburger shows on desktop?**
- Check the media query: `.hamburger{display:none;}` should be the default
- Only `@media(max-width:768px){ .hamburger{display:flex;} }` should show it

---

## 📞 Need Help?

If you encounter any issues:
1. Check browser console (F12) for error messages
2. Verify all code was copied correctly
3. Ensure API key is valid and active
4. Test in different browsers

---

**Happy coding! 🎉**
