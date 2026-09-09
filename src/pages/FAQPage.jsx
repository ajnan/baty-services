import React, { useState } from 'react';
import { ChevronDown, Search, Phone, HelpCircle } from 'lucide-react';
import { faqData, faqCategories } from '../data/faqData';

export default function FAQPage({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItem, setOpenItem] = useState(1);

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Questions' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0b0e14] text-white min-h-screen">
      {/* Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#141822] to-[#0b0e14] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fdb813]/10 border border-[#fdb813]/30 text-[#fdb813] font-heading font-black text-xs uppercase tracking-widest mb-4">
            HELP & COMMON QUESTIONS
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
            FREQUENTLY ASKED <span className="text-[#fdb813]">QUESTIONS</span>
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Everything you need to know about our debris removal, construction cleanup, dirt & gravel delivery, and Texas dispatch timelines.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., pricing, same day, permits)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#141822] border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#fdb813] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#fdb813] text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-zinc-400">
              No questions found matching your search. Please give us a call!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openItem === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#141822] border border-zinc-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenItem(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading font-black text-lg sm:text-xl text-white hover:text-[#fdb813] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#fdb813] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-[#fdb813] mx-auto" />
          <h3 className="font-heading font-black text-2xl text-white uppercase">
            STILL HAVE A QUESTION?
          </h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Our team is always available to discuss custom project requirements, load sizes, or immediate dispatch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:4092184240"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fdb813] text-black font-heading font-black text-base uppercase rounded tracking-wider shadow"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL 409-218-4240</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-heading font-black text-base uppercase rounded tracking-wider border border-zinc-700 cursor-pointer"
            >
              SEND US A MESSAGE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
