const FAQ = () => (
  <section className="py-24">
    <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700">
      FAQs for AI & Machine Learning Solutions
    </h2>

    <div className="max-w-4xl mx-auto px-6 space-y-4">
      {[
        {
          q: "What AI & Machine Learning services do you offer?",
          a: "We provide Generative AI solutions, machine learning model development, computer vision systems, NLP & chatbot solutions, recommendation engines, and predictive analytics tailored to business needs."
        },
        {
          q: "Do you build custom AI and ML models?",
          a: "Yes. All our AI and Machine Learning models are custom-built based on your business objectives, data availability, and scalability requirements."
        },
        {
          q: "Can you integrate AI solutions with our existing systems?",
          a: "Absolutely. We seamlessly integrate AI & ML solutions with your existing applications, databases, cloud infrastructure, and enterprise systems."
        },
        {
          q: "How long does an AI & ML project usually take?",
          a: "Project timelines vary based on complexity and data readiness, but most AI & ML engagements typically range from 6 to 16 weeks."
        }
      ].map((faq, i) => (
        <details
          key={i}
          className="group bg-white border rounded-xl p-5 shadow-sm"
        >
          <summary className="cursor-pointer font-medium text-gray-800">
            {faq.q}
          </summary>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;
