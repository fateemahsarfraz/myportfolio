import React, { useState } from 'react';
import { Window } from '../components/Window';
import { Github, Linkedin, Mail, Send, ExternalLink } from 'lucide-react';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Window id="contact">
      <div className="flex flex-col max-w-5xl mx-auto justify-start py-2 px-4 md:px-6 h-full overflow-y-auto">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent p-2 md:p-6 pb-8">
          
          <div className="space-y-6 flex flex-col justify-start mt-2">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-tight">
                Let's Connect.
              </h2>
              <p className="text-base text-slate-600">
                Prefer email for professional communication. Open to collaborations, freelance, or just geeking out about tech.
              </p>
            </div>

            <div className="space-y-3">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fateemahsarfraz@gmail.com&su=Portfolio%20Contact&body=Hi%20Fatima," target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-[1.25rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm">Email</h3>
                  <p className="text-xs text-slate-500">fateemahsarfraz@gmail.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-800 transition-colors" />
              </a>

              <a href="https://github.com/fateemahsarfraz" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-[1.25rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm">GitHub</h3>
                  <p className="text-xs text-slate-500">@fateemahsarfraz</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-800 transition-colors" />
              </a>

              <a href="https://www.linkedin.com/in/fatima-sarfraz-015414350" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-[1.25rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm">LinkedIn</h3>
                  <p className="text-xs text-slate-500">Fatima Sarfraz</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-800 transition-colors" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-start">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs justify-start font-bold text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-50 text-slate-700 placeholder:text-slate-400 transition-all font-medium text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 text-slate-700 placeholder:text-slate-400 transition-all font-medium text-sm"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-50 text-slate-700 placeholder:text-slate-400 resize-none transition-all font-medium text-sm"
                  placeholder="Hi Fatima, I'd like to talk about..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all active:scale-95 tracking-wide shadow-sm text-sm"
              >
                {sent ? "Message Delivered!" : "Send Message"} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </Window>
  );
}
