

const RedioProg = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white font-sans text-center">
      
      {/* Top Logo */}
      <div className="flex justify-center mb-8">
        <img 
          src="/images/Radio-Show-logo-transparent 1.png" 
          alt="FCHCC Logo" 
          className="h-24 object-contain"
        />
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
        <span className="text-blue-500">FCHCC On</span> Air Radio Program
      </h1>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-sm md:text-base leading-relaxed mb-12">
        <p className="font-medium">
          Don't miss this great opportunity to be part of something extraordinary! Get ready for insightful discussions, exclusive insights and the opportunity to connect with like-minded members, as well as the opportunity to PROMOTE YOUR BUSINESS to the LARGEST NETWORK OF HISPANIC LISTENERS IN NORTHEAST FLORIDA! Do not miss it!
        </p>
        <p>
          Our radio show is the chamber's initiative to assist our corporate members grow their businesses by helping to bring awareness to their services and products.
        </p>
      </div>

      {/* Content with Side Image */}
      <div className="flex flex-col md:flex-row items-start gap-12 text-left mb-16">
        <div className="flex-1 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            The First Coast Hispanic Chamber of Commerce's "FCHCC On Air" Radio Program 
            is a great way to promote your business and for our audience to learn more 
            about your company and how it serves the Hispanic community.
          </p>
          
          <div>
            <p className="font-semibold mb-4">
              The show airs on Action 930 Wednesdays at 1 PM & Sundays at 9:30 AM ET! To be considered for a guest spot, please note:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be an active corporate member of the FCHCC chamber (Membership level Small Business #1 up to Strategic Partner).</li>
              <li>Your company/business positively impacts your community.</li>
            </ul>
          </div>
        </div>

        {/* Right Side Image/Poster */}
        <div className="flex-1 w-full md:w-auto">
          <div className="border border-gray-200 p-2 rounded-sm shadow-sm">
            <img 
              src="/images/Radio-program-Spanish-600x600 1.png" 
              alt="Radio Program Poster" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">
          Request a guest spot
        </button>
      </div>

    </div>
  );
};

export default RedioProg;