"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question:
        "What sets Recruitment An  Alternative Solution’s resume search engine apart from others?",
      answer:
        " Recruitment An  Alternative Solution uses proprietary AI-powered resume search technology with advanced semantic search and natural language processing, ensuring more accurate and relevant candidate results.",
    },
    {
      question:
        "How does Recruitment An  Alternative Solution give my company a competitive edge?",
      answer:
        " By streamlining your recruitment process, reducing time-to-hire, and providing real-time recruitment insights, Recruitment An  Alternative Solution helps you stay ahead in a competitive staffing market.",
    },
    {
      question:
        "How can Recruitment An  Alternative Solution help reduce recruitment costs?",
      answer:
        " Recruitment An  Alternative Solution improves recruiter productivity by automating manual tasks, minimizing reliance on external job boards, and simplifying the hiring process all leading to cost-effective staffing solutions.",
    },
    {
      question:
        "What key features complement Recruitment An  Alternative Solution’s core platform?",
      answer:
        " Recruitment An  Alternative Solution offers seamless HR integrations, mobile access, and customizable workflows tailored to your organization’s staffing needs.",
    },
    {
      question:
        "Will using Recruitment An  Alternative Solution require significant retraining?",
      answer:
        " Not at all. Recruitment An  Alternative Solution features a user-friendly interface that requires minimal training. Our dedicated customer success team ensures smooth onboarding and continuous support.",
    },
    {
      question:
        "How does Recruitment An  Alternative Solution collect resumes?",
      answer:
        " Recruitment An  Alternative Solution aggregates resumes from multiple channels, including job boards, your company’s career site, and direct submissions.",
    },
    {
      question: "How fast are resumes available after submission?",
      answer:
        " Resumes are typically processed and indexed in real-time available for search within seconds.",
    },
    {
      question:
        "Can Recruitment An  Alternative Solution retrieve resumes from any job board?",
      answer:
        " Yes, Recruitment An  Alternative Solution integrates with all major job boards and supports resume parsing from virtually any source.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 bg-b">
          <h1 className="text-3xl  md:text-4xl font-bold text-text-color mt-10">
            What is Recruitment An Alternative Solution?
          </h1>
          <p className="text-lg mt-3 text-gray-200">
            Frequently asked questions about our platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none">
                <h2 className="text-lg md:text-xl font-medium text-gray-400">
                  {faq.question}
                </h2>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <FiChevronDown className="text-gray-100 text-xl" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="pb-4 text-gray-100">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
