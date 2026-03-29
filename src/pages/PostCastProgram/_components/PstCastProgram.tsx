import React from 'react';

const PodcastProgram = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white font-sans text-center">
      
      {/* Podcast Logo */}
      <div className="flex justify-center mb-10">
        <img 
          src="https://via.placeholder.com/200x100?text=Business+%26+Culture+Podcast" 
          alt="Podcast Logo" 
          className="h-28 object-contain"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
        <span className="text-blue-500">FCHCC</span> Monthly Podcast Program
      </h1>

      {/* Hosts Section */}
      <div className="max-w-3xl mx-auto mb-14 text-gray-800">
        <p className="text-base font-semibold">
          With hosts: Monica Hernandez, FCHCC President Sheifalika Bhatnagar, CMG Cox Media Group Maria Isabel Montoya MiAddvantage
        </p>
      </div>

      {/* Main Description Body */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-sm md:text-base leading-relaxed text-left md:text-center">
        <p>
          FCHCC's Business & Culture Podcast is a space to celebrate multiculturalism and diversity as the first podcast of its kind from a Hispanic Chamber of Commerce in Florida!
        </p>

        <p>
          We share topics of interest including: business, events, hot topics, art, and culture. Follow us on <a href="#" className="text-blue-400 hover:underline">Social Media</a> to listen in on the next episode! The Podcast airs the first Saturday of each month on 104.5 WOKV Jacksonville News and Talk.
        </p>

        <p>
          Our podcast is the another initiative of our chamber to assist our corporate members and show the impact of Hispanic culture on the Northeast Florida community.
        </p>

        {/* Requirements Section */}
        <div className="pt-4">
          <p className="font-bold mb-4">To be considered for a guest spot, please note:</p>
          <ul className="inline-block text-left list-disc pl-6 space-y-2">
            <li>
              You must be an FCHCC Platinum chamber (Membership level Large Corporation #2 up to Strategic Partner) in good standing.
            </li>
            <li>
              Your company/business positively impacts your community.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3.5 px-12 rounded-xl text-lg transition-all shadow-md active:scale-95">
          Request a guest spot
        </button>
      </div>

    </div>
  );
};

export default PodcastProgram;