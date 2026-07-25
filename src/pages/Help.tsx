import { Mail, Phone, MessageCircle, ArrowLeft, ChevronRight, FileQuestion, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

export function Help() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${import.meta.env.VITE_SUPPORT_WHATSAPP_NUMBER}?text=Hello, I need help with...`, '_blank');
  };

  const faqs = [
    { q: 'How to track my order?', a: 'You can track your order in the "My Services" section.' },
    { q: 'What is the refund policy?', a: 'Refunds are processed within 7-10 working days if the service is not initiated.' },
    { q: 'How to upload documents?', a: 'Once you place an order, our expert will contact you for document collection.' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] p-6 space-y-8 pb-[calc(6rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')} 
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Help & Support</h1>
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => window.open(`tel:+${import.meta.env.VITE_SUPPORT_PHONE_NUMBER}`)}
          className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex flex-col items-center gap-3 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
            <Phone className="w-6 h-6 text-blue-400" />
          </div>
          <span className="font-bold text-sm">Call Us</span>
        </button>
        <button 
          onClick={() => window.open('mailto:support@companyfileseva.com')}
          className="p-6 bg-purple-600/10 border border-purple-500/20 rounded-3xl flex flex-col items-center gap-3 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <Mail className="w-6 h-6 text-purple-400" />
          </div>
          <span className="font-bold text-sm">Email Us</span>
        </button>
      </div>

      <button 
        onClick={handleWhatsApp}
        className="w-full p-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
          </div>
          <div className="text-left">
            <p className="font-bold">WhatsApp Support</p>
            <p className="text-xs text-white/40">Instant reply within 5 mins</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
      </button>

      {/* FAQs */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
          <FileQuestion className="w-4 h-4" /> Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2">
              <p className="font-bold text-sm">{faq.q}</p>
              <p className="text-xs text-white/40 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Chat CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4 shadow-2xl shadow-blue-600/20">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold">Still have questions?</h2>
        <p className="text-white/80 text-sm">Our support team is available 24/7 to help you with any queries.</p>
        <button 
          onClick={() => showToast("Live Chat coming soon", "info")}
          className="w-full h-14 bg-white text-black rounded-2xl font-bold hover:bg-white/90 transition-colors"
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
}
