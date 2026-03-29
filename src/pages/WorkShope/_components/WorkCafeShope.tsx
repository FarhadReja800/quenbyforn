

const SocialCafecito = () => {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-block border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            🏆 Members Only Exclusive
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Social Cafecito: <br />
            Where Business <br />
            Leaders Connect
          </h1>
          <p className="text-gray-600 max-w-md leading-relaxed">
            Exclusive monthly networking for FCHCC Members and Strategic Partners. Elevate your professional circle in a sophisticated atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all text-sm">
              Register for the next Cafecito
            </button>
            <p className="text-sm text-gray-500">
              Not an FCHCC member? <a href="#" className="text-black font-bold underline">Join here</a> to attend.
            </p>
          </div>
        </div>

        {/* Hero Image with Badge */}
        <div className="flex-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/Rectangle 6.png" 
              alt="Networking Event" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100">
            <div className="bg-orange-100 p-2 rounded-full">
              <span className="text-orange-500 font-bold text-lg">✓</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Verified</p>
              <p className="text-xs font-bold">FCHCC Member Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* When & Where */}
        <div className="border border-blue-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-3xl mb-6">📅</div>
          <h3 className="text-xl font-bold mb-4 text-[#1E3A5F]">When & Where</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            3rd Friday of every month | 8:30 AM – 10:00 AM at the FCHCC Social Cafecito Meeting.
          </p>
        </div>

        {/* The Experience */}
        <div className="border border-orange-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="text-orange-500 text-3xl mb-6">👥</div>
          <h3 className="text-xl font-bold mb-4 text-[#1E3A5F]">The Experience</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            An ideal space for members to exchange ideas and establish professional relationships with the most prominent business leaders in our community.
          </p>
        </div>

        {/* Topics Covered */}
        <div className="border border-orange-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="text-orange-500 text-3xl mb-6">📈</div>
          <h3 className="text-xl font-bold mb-4 text-[#1E3A5F]">TOPICS COVERED</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Expert speakers covering Marketing, Capital, Finance, Legal, Communities, and more!
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 text-center">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">STAY INFORMED</h2>
          <p className="text-lg font-medium text-gray-700 mb-2">Be sure to look out for meeting invites!</p>
          <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto">
            Subscribe to our mailing list at fchcc.com to stay updated on all upcoming workshops and networking opportunities.
          </p>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="text-left">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 mb-2 block">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-gray-100 border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="yourname@example.com"
              />
            </div>
            <button className="w-full bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 rounded-full shadow-md transition-all uppercase tracking-widest text-xs">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default SocialCafecito;