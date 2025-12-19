
# 🚀 ReviewPeer: Elite Peer-to-Peer Code Review Marketplace

ReviewPeer is a specialized E-learning and Micro-Mentorship platform designed to bridge the gap between junior developers seeking industry-standard feedback and senior engineers from top-tier tech companies (FAANG, Unicorns) looking to share their expertise.

Unlike generic course platforms, ReviewPeer focuses on **Cohort-Based Learning** and **Personalized Code Audits**, solving the critical "feedback loop" problem in a developer's career journey.

---

## 🌟 Key Features

### 1. Senior Mentor Marketplace
- **Curated Selection:** Browse a directory of vetted senior engineers from companies like Google, Meta, and Microsoft.
- **Transparent Pricing:** Clear per-review pricing models allowing juniors to get elite feedback without long-term commitments.
- **Stack-Specific Filtering:** Filter mentors by language (TypeScript, Rust, Go) or expertise (Architecture, Testing, Frontend).

### 2. AI-Powered Initial Scans
- **Gemini 3 Pro Integration:** Every repository submitted undergoes an immediate automated analysis.
- **Instant Insights:** Provides a professional "pre-review" summary and specific line-by-line suggestions before the human mentor even opens the code.
- **Architectural Analysis:** The AI focuses on FAANG-level best practices, identifying race conditions, performance bottlenecks, and clean code violations.

### 3. Real-Time Mentorship Chat
- **Direct Access:** Integrated chat interface for juniors to discuss review findings directly with their assigned senior mentor.
- **Contextual Learning:** Ask follow-up questions, request clarification on architectural choices, and receive career advice.
- **Smart Responses:** Backed by Gemini Flash for high-speed, relevant developer assistance when mentors are offline.

### 4. Interactive Dashboard & Progression
- **Active Review Tracking:** Real-time status updates for ongoing code audits.
- **Skill Progression Visuals:** A data-driven approach to tracking your improvement in areas like "Architecture," "Performance," and "Readability."
- **Suggested Learning:** AI-driven mentor recommendations based on your current project's tech stack.

### 5. Seamless Payment & Integration
- **GitHub First:** Built-in repository link validation.
- **Secure Transactions:** Stripe-ready checkout flow for processing review fees securely.
- **Senior Guarantee:** Refund policy and SLA tracking (48-hour review turnaround).

---

## 🛠 Tech Stack

- **Frontend:** React 19 (ESM based)
- **Styling:** Tailwind CSS (Modern, Dark-mode centric UI)
- **Icons:** Lucide React
- **Intelligence Engine:** Google Gemini API (`gemini-3-pro-preview` & `gemini-3-flash-preview`)
- **State Management:** React Hooks (useState, useEffect)
- **Architecture:** Component-based modular design

---

## 📖 How it Works

1.  **Discovery:** A junior developer browses the marketplace and selects a mentor that matches their project's stack.
2.  **Booking:** The user provides their GitHub repository URL and completes a secure payment.
3.  **AI Scan:** ReviewPeer immediately triggers a Gemini-powered analysis of the repository to provide instant value.
4.  **Expert Audit:** The Senior Mentor performs a manual, deep-dive review, focusing on logic, scalability, and industry standards.
5.  **Iteration:** The junior and senior connect via the Real-time Chat to finalize the review and discuss career growth.

---

## 🚀 Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/review-peer.git
    ```
2.  **Environment Configuration:**
    Ensure you have your Gemini API Key set in your environment:
    ```env
    API_KEY=your_gemini_api_key_here
    ```
3.  **Local Development:**
    The project uses standard ES6 modules. Serve the root directory using any local web server (e.g., Live Server, Vite, or Python's `http.server`).

---

## 🎯 Future Roadmap

- [ ] **Direct GitHub API Pull:** Automatic fetching of PR comments.
- [ ] **Live Video Sessions:** 1-on-1 pair programming integration.
- [ ] **Enterprise Tier:** Onboarding entire engineering teams for internal peer reviews.
- [ ] **Mentor Verification Badge:** Integration with LinkedIn/GitHub to verify employment history.

---

## 📄 License

ReviewPeer is released under the **MIT License**. Build better code, together.

---
*Built with ❤️ for the next generation of Software Engineers.*
