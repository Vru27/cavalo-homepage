'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Why buy a used truck from Cavalo?',
    answer: 'With complete certified assurance, Cavalo removes the danger and uncertainty associated with purchasing a secondhand truck. Only the best quality certified used trucks are offered in your location, thanks to our background check. A truck that is certified by Cavalo Assured must go through an extensive inspection that looks at the condition of every component of the truck before it can be certified. Being Cavalo Assured needs perfection. All Cavalo Guaranteed trucks have simple paperwork, free RC transfers, and vehicle financing choices with cheap interest rates starting at XX%. You can buy a truck that is ideal for your business and work by going through a transparent, reasonable, and safe approach.'
  },
  {
    id: 2,
    question: 'What makes cavalo the best place to sell my truck?',
    answer: ''
  },
  {
    id: 3,
    question: 'Will Cavalo help me in arranging for finance?',
    answer: ''
  },
  {
    id: 4,
    question: 'How long does it take to sell my truck?',
    answer: ''
  },
  {
    id: 5,
    question: 'What all factors impact the prices of my truck?',
    answer: ''
  },
  {
    id: 6,
    question: 'How much fee do you charge for RC Transfer?',
    answer: ''
  }
];

export default function FAQsSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left Side - Illustration and Title */}
          <div className="space-y-6">
            {/* FAQ Illustration */}
            <div className="w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80"
                alt="FAQ Illustration"
                className="w-full h-auto"
              />
            </div>

            {/* Title and Description */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">FAQs</h2>
              <p className="text-gray-600 text-lg">Frequently Asked Questions.</p>
              <p className="text-gray-600 text-lg">Here are some common questions about Cavalo.</p>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-1">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-gray-700 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0">
                    {openId === faq.id ? (
                      <Minus className="w-6 h-6 text-gray-900" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-900" />
                    )}
                  </span>
                </button>

                {openId === faq.id && faq.answer && (
                  <div className="pb-5 pr-12">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}