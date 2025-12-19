
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Code, 
  Github, 
  User, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Zap,
  CheckCircle2,
  ChevronRight,
  Star
} from 'lucide-react';
import { Mentor, ReviewRequest, Message } from './types';
import { getCodeAnalysis, getChatResponse } from './services/geminiService';

const MOCK_MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Sarah Drasner',
    role: 'Staff Engineer',
    company: 'Google',
    avatar: 'https://picsum.photos/seed/sarah/200',
    rating: 4.9,
    reviewsCount: 124,
    price: 49,
    tags: ['React', 'TypeScript', 'Node.js'],
    bio: 'Expert in frontend architecture and developer experience. Ex-Netlify, ex-Microsoft.',
    languages: ['JavaScript', 'TypeScript', 'Go']
  },
  {
    id: '2',
    name: 'Dan Abramov',
    role: 'Principal Engineer',
    company: 'Meta',
    avatar: 'https://picsum.photos/seed/dan/200',
    rating: 5.0,
    reviewsCount: 89,
    price: 99,
    tags: ['React', 'Architecture', 'API Design'],
    bio: 'Co-author of Redux and Create React App. Dedicated to making complex systems simple.',
    languages: ['JavaScript', 'Rust', 'C++']
  },
  {
    id: '3',
    name: 'Kent C. Dodds',
    role: 'Senior Consultant',
    company: 'EpicWeb.dev',
    avatar: 'https://picsum.photos/seed/kent/200',
    rating: 4.8,
    reviewsCount: 215,
    price: 75,
    tags: ['Fullstack', 'Testing', 'Remix'],
    bio: 'Quality software is built on quality testing. I help devs build more with less bugs.',
    languages: ['JavaScript', 'HTML/CSS', 'SQL']
  }
];

const LandingPage = ({ onExplore }: { onExplore: () => void }) => (
  <div className="flex flex-col min-h-screen">
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-8 animate-fade-in">
          <Zap size={14} />
          <span className="text-sm font-medium">New: AI-Powered Initial Scans</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Stop guessing. Get your code <br />
          <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent italic underline decoration-indigo-500/30">
            reviewed by pros.
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The elite marketplace connecting junior developers with senior engineers for personalized, deep-dive code reviews and micro-mentorship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            Find a Mentor <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-semibold border border-zinc-800 transition-all">
            How it works
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-zinc-900 pt-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-zinc-500 text-sm">Verified Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">12k+</div>
            <div className="text-zinc-500 text-sm">Reviews Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">4.9/5</div>
            <div className="text-zinc-500 text-sm">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">98%</div>
            <div className="text-zinc-500 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-zinc-950/50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Developers Choose ReviewPeer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Code className="text-indigo-500" />, 
              title: "Quality Feedback", 
              desc: "Not just lint errors. Real architectural advice, performance tips, and best practices." 
            },
            { 
              icon: <Github className="text-indigo-500" />, 
              title: "GitHub Integration", 
              desc: "Seamlessly connect your repositories and pick specific pull requests for review." 
            },
            { 
              icon: <TrendingUp className="text-indigo-500" />, 
              title: "Career Growth", 
              desc: "Build connections with engineers from top tech companies and get job-ready." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Marketplace = ({ onSelectMentor }: { onSelectMentor: (mentor: Mentor) => void }) => {
  const [search, setSearch] = useState('');
  
  const filteredMentors = MOCK_MENTORS.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Find your Mentor</h1>
          <p className="text-zinc-400">Select an expert to audit your code and level up your skills.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text"
            placeholder="Search by name, stack, or company..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map(mentor => (
          <div key={mentor.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg text-sm text-yellow-500 font-bold">
                  <Star size={14} fill="currentColor" />
                  {mentor.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
              <p className="text-indigo-400 text-sm font-medium mb-3">{mentor.role} @ {mentor.company}</p>
              <p className="text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">{mentor.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md border border-zinc-700">{tag}</span>
                ))}
              </div>
            </div>
            <div className="mt-auto p-6 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-white">${mentor.price}</span>
                <span className="text-zinc-500 text-sm ml-1">/review</span>
              </div>
              <button 
                onClick={() => onSelectMentor(mentor)}
                className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2 text-sm"
              >
                Book Review <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckoutModal = ({ mentor, onClose, onComplete }: { mentor: Mentor; onClose: () => void; onComplete: () => void }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'processing'>('details');
  const [repoUrl, setRepoUrl] = useState('');

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-xl font-bold">Book Review with {mentor.name}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white"><X size={20} /></button>
        </div>

        <div className="p-8">
          {step === 'details' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">GitHub Repository URL</label>
                <div className="relative">
                  <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="https://github.com/username/repo"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/20">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-indigo-500 shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-indigo-400">Senior Guarantee</p>
                    <p className="text-xs text-zinc-400 mt-1">If your code isn't reviewed within 48 hours, you'll receive a full refund plus a free AI scan.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setStep('payment')}
                disabled={!repoUrl.includes('github.com')}
                className="w-full py-4 bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 text-white rounded-xl font-bold transition-all"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl mb-4">
                <div className="flex items-center gap-3">
                  <img src={mentor.avatar} className="w-10 h-10 rounded-lg" alt="" />
                  <div>
                    <p className="font-medium">{mentor.name}</p>
                    <p className="text-xs text-zinc-500">Code Review Package</p>
                  </div>
                </div>
                <p className="font-bold">${mentor.price}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Card Details</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="4242 4242 4242 4242"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                  <input type="text" placeholder="CVC" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                </div>
              </div>
              <button 
                onClick={handlePay}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                Pay ${mentor.price}
              </button>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 text-center">
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Securing your booking...</h3>
              <p className="text-zinc-500">Contacting {mentor.name} and processing payment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ activeReview, onChat }: { activeReview: ReviewRequest | null; onChat: () => void }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all">
            Refresh Status
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="font-bold flex items-center gap-2"><Code size={20} /> Active Reviews</h2>
              <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-md">
                {activeReview ? '1 ACTIVE' : 'NO ACTIVE REVIEWS'}
              </span>
            </div>
            {activeReview ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                      <Github size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{activeReview.repoUrl.split('/').pop()}</h4>
                      <p className="text-zinc-500 text-sm">Review by Sarah Drasner • Assigned 10 mins ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-300 font-bold mb-1">Status</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-bold border border-yellow-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                      IN PROGRESS
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <button 
                    onClick={onChat}
                    className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl border border-zinc-700 transition-all flex flex-col items-center gap-2 group"
                  >
                    <MessageSquare size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Chat with Mentor</span>
                  </button>
                  <button className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl border border-zinc-700 transition-all flex flex-col items-center gap-2 group">
                    <TrendingUp size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">View AI Insights</span>
                  </button>
                  <button className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl border border-zinc-700 transition-all flex flex-col items-center gap-2 group">
                    <Zap size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Expedite Review</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-20 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-600">
                  <Search size={32} />
                </div>
                <p className="text-zinc-400 mb-6">You don't have any active code reviews. Ready to improve your skills?</p>
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all">
                  Find a Mentor
                </button>
              </div>
            )}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h2 className="font-bold flex items-center gap-2"><TrendingUp size={20} /> Skill Progression</h2>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Architecture Score</p>
                  <p className="text-2xl font-bold">78% <span className="text-green-500 text-sm font-normal">↑ 12%</span></p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 text-sm mb-1">Best Language</p>
                  <p className="text-2xl font-bold">TypeScript</p>
                </div>
              </div>
              <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[78%] rounded-full" />
              </div>
              <p className="text-xs text-zinc-500 mt-3 text-center italic">Keep going! Your last review improved your code readability by 15%.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="font-bold mb-6 flex items-center gap-2"><Zap size={20} className="text-yellow-500" /> Suggested Mentors</h3>
            <div className="space-y-6">
              {MOCK_MENTORS.slice(1, 3).map(mentor => (
                <div key={mentor.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={mentor.avatar} className="w-10 h-10 rounded-lg object-cover" alt="" />
                    <div>
                      <p className="text-sm font-bold">{mentor.name}</p>
                      <p className="text-xs text-zinc-500">{mentor.role}</p>
                    </div>
                  </div>
                  <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all">
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-600 rounded-2xl p-6 text-white overflow-hidden relative group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Zap size={120} />
            </div>
            <h3 className="text-lg font-bold mb-2">ReviewPeer Pro</h3>
            <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Get unlimited AI scans and 20% off all senior reviews.</p>
            <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatView = ({ mentor }: { mentor: Mentor }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: mentor.id, text: "Hey! Thanks for booking a review. I've received your repository link and I'm starting the deep dive now. Any specific parts of the codebase you're worried about?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), senderId: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const history = messages.map(m => ({ role: m.senderId === 'user' ? 'user' : 'model', content: m.text }));
      const responseText = await getChatResponse(history, input);
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), senderId: mentor.id, text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col h-[calc(100vh-120px)]">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={mentor.avatar} className="w-12 h-12 rounded-xl object-cover" alt="" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full" />
            </div>
            <div>
              <h3 className="font-bold">{mentor.name}</h3>
              <p className="text-xs text-zinc-500">{mentor.role} @ {mentor.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Zap size={18} /></button>
            <button className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white"><ShieldCheck size={18} /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.senderId === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.senderId === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className="text-[10px] mt-2 opacity-50 text-right">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-zinc-700 flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75" />
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="relative flex items-center gap-3">
            <input 
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 mt-2 text-center uppercase tracking-widest font-bold">Encrypted End-to-End</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'marketplace' | 'dashboard' | 'chat'>('landing');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [activeReview, setActiveReview] = useState<ReviewRequest | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookMentor = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setShowCheckout(true);
  };

  const handleCheckoutComplete = () => {
    const newRequest: ReviewRequest = {
      id: Date.now().toString(),
      mentorId: selectedMentor!.id,
      repoUrl: 'https://github.com/dev/new-app',
      status: 'pending',
      price: selectedMentor!.price,
      timestamp: Date.now()
    };
    setActiveReview(newRequest);
    setShowCheckout(false);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-indigo-500/30">
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setView('landing')}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
              <Code className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">Review<span className="text-indigo-500">Peer</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setView('marketplace')} className={`text-sm font-medium hover:text-white transition-colors ${view === 'marketplace' ? 'text-white' : 'text-zinc-400'}`}>Marketplace</button>
            <button onClick={() => setView('dashboard')} className={`text-sm font-medium hover:text-white transition-colors ${view === 'dashboard' ? 'text-white' : 'text-zinc-400'}`}>Dashboard</button>
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Become a Mentor</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-white">Sign In</button>
            <button 
              onClick={() => setView('marketplace')}
              className="px-5 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
            >
              Get Started
            </button>
          </div>

          <button className="md:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black pt-20 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 text-xl">
            <button onClick={() => { setView('marketplace'); setIsMenuOpen(false); }} className="text-left font-bold">Marketplace</button>
            <button onClick={() => { setView('dashboard'); setIsMenuOpen(false); }} className="text-left font-bold">Dashboard</button>
            <button className="text-left font-bold">Become a Mentor</button>
            <div className="h-px bg-zinc-800 my-4" />
            <button className="w-full py-4 bg-indigo-600 rounded-xl font-bold">Sign In</button>
          </nav>
        </div>
      )}

      <main className="flex-1 pt-16">
        {view === 'landing' && <LandingPage onExplore={() => setView('marketplace')} />}
        {view === 'marketplace' && <Marketplace onSelectMentor={handleBookMentor} />}
        {view === 'dashboard' && <Dashboard activeReview={activeReview} onChat={() => setView('chat')} />}
        {view === 'chat' && selectedMentor && <ChatView mentor={selectedMentor} />}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
              <Code className="text-zinc-400" size={16} />
            </div>
            <span className="font-bold">ReviewPeer</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-zinc-600">© 2024 ReviewPeer. Built for engineers, by engineers.</p>
        </div>
      </footer>

      {showCheckout && selectedMentor && (
        <CheckoutModal 
          mentor={selectedMentor} 
          onClose={() => setShowCheckout(false)}
          onComplete={handleCheckoutComplete}
        />
      )}
    </div>
  );
}
