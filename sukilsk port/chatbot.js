/* ══════════════════════════════════════
   CHATBOT - Gemini AI Integration
   Include this file in all pages
══════════════════════════════════════ */

// Your Gemini API Key (replace with your actual key)
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

// Portfolio data context for the AI
const portfolioContext = `You are an AI assistant for Sukil R's portfolio. Answer questions about him based on this information:

**Personal Information:**
- Name: Sukil R
- Title: AI Agent Developer and Python Engineer
- Location: Pallipalayam, Tamil Nadu, India
- Email: sukilsukil8@gmail.com
- Phone: +91 73394 62370
- LinkedIn: linkedin.com/in/sukil-sk-254b30276
- GitHub: github.com/sukil5522-code
- Portfolio: sukilsk.netlify.app

**About:**
I am an AI Agent Developer and Python Engineer. I design smart architectures, integrate LLMs, and build scalable workflows. Available for AI Engineering Roles.

**Skills:**
Python, AI Agents, LangChain, LlamaIndex, OpenAI API, Claude API, RAG Systems, Vector Databases (ChromaDB), FastAPI, Flask, Machine Learning, TensorFlow, Pandas, Data Analysis, AWS, Docker, Redis, Celery, MongoDB, Elasticsearch, BERT, React

**Projects:**
1. AI Agent Framework - Built a modular AI agent framework with multi-tool support, memory management, and adaptive reasoning capabilities. (Python, LangChain, OpenAI)
2. RAG Chatbot System - Developed a retrieval-augmented generation chatbot with document ingestion, vector search, and contextual responses. (ChromaDB, FastAPI, React)
3. Workflow Automation Engine - Created an intelligent workflow engine that automates complex business processes using LLM-powered decision making. (Celery, Redis, Claude API)
4. Data Analysis Agent - Built an autonomous agent that analyzes datasets, generates insights, and creates visualizations using natural language. (Pandas, Plotly, GPT-4)
5. Smart Task Scheduler - Intelligent task scheduling system that optimizes workflow priorities using machine learning. (TensorFlow, Flask, MongoDB)
6. Semantic Search Engine - Advanced search engine with semantic understanding and ranked results using transformer models. (Elasticsearch, BERT, Docker)

**Certifications:**
- AI & Machine Learning Specialization - Stanford University (January 2026)
- LangChain & LLM Development - Udemy (December 2025)
- Advanced Python Programming - Python Institute PCAP (November 2025)
- AWS Cloud Practitioner - Amazon Web Services (October 2025)
- API Development & Integration - LinkedIn Learning (September 2025)
- Deep Learning Fundamentals - DeepLearning.AI (August 2025)

**Achievements:**
- Won Best AI Project Award at AI Innovation Hackathon (March 2026)
- Open source contributor to LangChain and LlamaIndex (5+ merged PRs)
- Deployed production AI system serving 10,000+ daily users with 99.9% uptime
- Published 10+ technical articles reaching 50,000+ developers
- Led AI development for startup securing Series A funding

**Stats:**
- 15+ Projects Completed
- 8 Certifications
- 500+ GitHub Contributions
- 3 Awards Won

Keep your responses friendly, concise, and helpful. If asked about contact, provide the email and phone. If asked about availability, mention he's available for AI Engineering roles.`;

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const chatFab = document.getElementById('chat-fab');
  const chatWidget = document.getElementById('chat-widget');
  const chatClose = document.getElementById('chat-close');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  if (!chatFab || !chatWidget) return; // Exit if chatbot elements don't exist

  // Open/close chat
  chatFab.addEventListener('click', () => {
    chatWidget.classList.add('open');
    chatFab.classList.add('active');
    chatInput.focus();
  });

  chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('open');
    chatFab.classList.remove('active');
  });

  // Send message
  async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    chatSend.disabled = true;
    
    // Show typing indicator
    const typingId = Date.now();
    addTypingIndicator(typingId);
    
    try {
      // Call Gemini API
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${portfolioContext}\n\nUser question: ${message}\n\nProvide a helpful response based on the portfolio information above.`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });

      const data = await response.json();
      
      removeTypingIndicator(typingId);
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        addMessage(aiResponse, 'bot');
      } else {
        addMessage("I'm having trouble connecting right now. Please try again or contact Sukil directly at sukilsukil8@gmail.com", 'bot');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      removeTypingIndicator(typingId);
      
      // Fallback to local responses if API fails
      const fallbackResponse = generateLocalResponse(message);
      addMessage(fallbackResponse, 'bot');
    } finally {
      chatSend.disabled = false;
    }
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !chatSend.disabled) sendMessage();
  });

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    // Convert markdown-style formatting to HTML
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = `
      <div class="chat-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
      <div class="chat-bubble">${formattedText}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addTypingIndicator(id) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = `typing-${id}`;
    
    typingDiv.innerHTML = `
      <div class="chat-avatar">🤖</div>
      <div class="chat-typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator(id) {
    const typingDiv = document.getElementById(`typing-${id}`);
    if (typingDiv) typingDiv.remove();
  }

  // Fallback local response generator (used if Gemini API fails)
  function generateLocalResponse(question) {
    const q = question.toLowerCase();
    
    if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return `You can reach Sukil at:<br>📧 Email: sukilsukil8@gmail.com<br>📱 Phone: +91 73394 62370<br>💼 LinkedIn: linkedin.com/in/sukil-sk-254b30276`;
    }
    
    if (q.includes('skill') || q.includes('technology')) {
      return `Sukil specializes in Python, AI Agents, LangChain, LlamaIndex, RAG Systems, Vector Databases, FastAPI, and more. He's particularly strong in AI agent development and LLM integration.`;
    }
    
    if (q.includes('project')) {
      return `Sukil has built several impressive projects including an AI Agent Framework, RAG Chatbot System, Workflow Automation Engine, and Data Analysis Agent. Check out the Projects page for more details!`;
    }
    
    if (q.includes('available') || q.includes('hire')) {
      return `Yes! Sukil is currently available for AI Engineering roles. He specializes in building intelligent agent architectures and integrating LLMs. Contact him at sukilsukil8@gmail.com`;
    }
    
    return `I can help you learn about Sukil's skills, projects, experience, and more. Try asking about his skills, projects, certifications, or how to contact him!`;
  }
});
