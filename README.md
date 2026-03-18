# Sukil R - AI Portfolio Website

A modern, interactive portfolio website with an AI-powered chatbot assistant.

## ✨ Features

- 🌓 **Dark/Light Theme Toggle** - Smooth theme switching with preference saving
- 🤖 **AI Chatbot** - Powered by Google Gemini API to answer questions about the portfolio
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Beautiful Animations** - Starfield background, comet cursor, smooth transitions
- 📄 **Multi-Page Structure** - Home, Projects, Certifications, Achievements
- 💬 **Smart Navigation** - Desktop menu + mobile hamburger menu

## 🚀 Quick Start

### 1. Set Up Gemini API Key

The chatbot uses Google's Gemini API. To enable it:

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Add Your API Key

Open `index.html` and find this line (around line 1050):

```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:

```javascript
const GEMINI_API_KEY = 'AIzaSyA...your-actual-key-here...';
```

### 3. Open the Website

Simply open `index.html` in your web browser. No server needed!

## 🤖 Chatbot Features

The AI chatbot can answer questions about:

- ✅ Skills and technologies
- ✅ Projects and experience
- ✅ Certifications and education
- ✅ Achievements and awards
- ✅ Contact information
- ✅ Availability for work

**Example questions:**
- "What are Sukil's skills?"
- "Tell me about his AI projects"
- "How can I contact him?"
- "Is he available for work?"
- "What certifications does he have?"

## 📁 File Structure

```
portfolio/
├── index.html              # Home page with chatbot
├── projects.html          # Projects showcase
├── certifications.html    # Certifications list
├── achievements.html      # Achievements & stats
└── README.md             # This file
```

## 🎨 Customization

### Update Portfolio Information

To update your information, edit the `portfolioContext` variable in `index.html` (around line 1025):

```javascript
const portfolioContext = `You are an AI assistant for Sukil R's portfolio...`;
```

Update with your own:
- Personal details
- Skills
- Projects
- Certifications
- Achievements

### Change Theme Colors

The portfolio uses CSS variables for easy theming. Find these in the `<style>` section:

```css
:root{
  --void:#03010a;      /* Background color */
  --star:#e8e0ff;      /* Text color */
  --a:#b490ff;         /* Accent color 1 */
  --a2:#7fd4ff;        /* Accent color 2 */
  --grad:linear-gradient(135deg,#b490ff,#7fd4ff); /* Gradient */
}
```

## 🔒 Security Note

**Important:** Never commit your API key to public repositories! 

For production deployment:
- Use environment variables
- Implement server-side API calls
- Add rate limiting
- Consider using API key restrictions in Google Cloud Console

## 📱 Mobile Responsive

The website is fully responsive with:
- Desktop: Full navigation menu visible
- Mobile (< 768px): Hamburger menu with overlay
- Optimized chatbot layout for all screen sizes

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your files (remember to remove/hide your API key!)
3. Go to Settings > Pages
4. Select your branch and save

### Netlify
1. Drag and drop your folder to [Netlify](https://app.netlify.com)
2. Your site will be live instantly!

### Vercel
1. Import your repository to [Vercel](https://vercel.com)
2. Deploy with one click

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables, Animations)
- Vanilla JavaScript
- Google Gemini API
- Canvas API (for starfield animation)

## 📞 Contact

- **Email:** sukilsukil8@gmail.com
- **Phone:** +91 73394 62370
- **LinkedIn:** [sukil-sk-254b30276](https://linkedin.com/in/sukil-sk-254b30276)
- **GitHub:** [sukil5522-code](https://github.com/sukil5522-code)

## 📄 License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

---

**Built with ❤️ by Sukil R**

*Navigating the Cosmos · Tamil Nadu, India ✦*
