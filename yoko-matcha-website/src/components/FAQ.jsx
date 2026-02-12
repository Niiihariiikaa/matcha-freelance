// FAQ.jsx
import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this real matcha?",
      answer: "Yes. We use real matcha powder blended with plant-based ingredients."
    },
    {
      question: "How much caffeine is in a serving of Yokō?",
      answer: "One serving (approx. 1 tsp) contains about 30-70mg of caffeine, which is less than a cup of coffee. However, because matcha contains L-theanine, the energy boost is steady and focused—no jitters or afternoon crashes here."
    },
    {
      question: "Do I need milk?",
      answer: "No. The oat milk is already in the blend."
    },
    {
      question: "Hot or cold?",
      answer: "Both work beautifully."
    },
    {
      question: "How should I store my Yokō Matcha?",
      answer: "Matcha is sensitive to light, heat, and air. To keep it fresh, store your Yokō bag in a cool, dark place (like a cupboard). For maximum freshness, we recommend finishing the bag within 2 months of opening."
    },
    {
      question: "How many servings per pouch?",
      answer: "10 servings."
    },
    {
      question: "Are your flavored blends sweetened?",
      answer: "Our Vanilla Bean Matcha has a light, natural sweetness, while our Sea Salt and Ginger Spice blends are focused on aromatics. We keep our ingredient lists clean and transparent, so you can control your own sugar intake by adding your favorite sweetener at home."
    }
  ];

  return (
    <section className="bg-[repeating-linear-gradient(90deg,rgba(232,207,199,0.25)_0px,rgba(232,207,199,0.25)_35px,rgba(225,194,184,0.25)_35px,rgba(225,194,184,0.25)_70px)] pointer-events-none py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-paytone text-[#2E7D32] text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-[#C8E6C9] rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-[#F1F8E9] hover:bg-[#E8F5E3] transition-colors duration-200"
              >
                <span className="text-xl font-poppins font-semibold text-[#2E7D32] pr-8">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-[#2E7D32] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="px-8 py-6 text-gray-700 font-poppins text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;