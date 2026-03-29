import { useState } from 'react';

const DiscountPro = () => {

  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "Do I need to be an FCHCC member to offer a discount?",
      answer: "You don't have to be a member to offer a discount."
    },
    {
      question: "How long does approval take?",
      answer: "Approval usually takes 3-5 business days after review."
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative h-142 flex items-center px-8 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/unsplash_HYLfpSdpFV0.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1e3a8a]/30"></div>

        <div className="z-10 max-w-xl text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#60A5FA]">FCHCC</span> Discount Program
          </h1>

          <p className="text-sm md:text-base mb-8 leading-relaxed text-blue-100">
            FCHCC's Members Discounts Program provides positive exposure for
            your business and can add value through increased business with
            chamber members.
          </p>

          <div className="flex items-center gap-4">

            <span className="text-sm font-medium">
              Questions about this program?
            </span>

            <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition">
              Get Help
            </button>

          </div>

        </div>

        {/* Design Shapes */}
        <div className="absolute right-20 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>

        <div className="absolute right-10 top-20 w-64 h-24 bg-white/10 -rotate-12"></div>

      </section>


      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-[#3B82F6] mb-8">
          Frequently-Asked Questions
        </h2>

        <div className="border border-blue-200 rounded-lg overflow-hidden mb-16">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border-b border-blue-100 last:border-none"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
              >

                <span>
                  {index + 1}. {faq.question}
                </span>

                <span className="text-2xl text-blue-500">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="p-5 bg-white border-t border-blue-50 text-sm text-gray-600">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>


        {/* How to Offer */}
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          How to Offer a Member Discount
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-12">

          <div className="flex-1 border-2 border-blue-400 p-6 rounded leading-relaxed text-gray-700">

            To offer a member discount and prevent delays, we ask that you
            complete the member discount form in its entirety. You can upload
            your logo and/or banner ad. After we receive your application,
            the Board will review your discount. If approved, our staff will
            notify you and publish your offer.

          </div>

          <div className="w-full md:w-64 bg-blue-50 p-6 rounded-md text-center text-xs text-gray-600">

            <p className="font-bold mb-2">
              NOTE:
            </p>

            <p>
              Businesses may request to offer a member discount. The chamber
              reserves the right to refuse any request. Benefits expire after
              one year.
            </p>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center space-y-8">

          <p className="text-lg">
            Any more questions? feel free to{" "}
            <a
              href="#"
              className="text-orange-400 font-medium"
            >
              contact us!
            </a>
          </p>

          <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3 px-10 rounded-lg transition shadow-md">

            Submit a Discount

          </button>

          <p className="text-sm text-gray-500 pt-8">

            To view current discounts, log in to the Members Only Portal →

            <a
              href="#"
              className="text-orange-400 ml-1"
            >
              click here!
            </a>

          </p>

        </div>

      </div>

    </div>
  );

};

export default DiscountPro;