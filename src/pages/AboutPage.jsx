import React, { useState, useEffect } from 'react';
import { teamMembers, openPositions } from '../data/teamData';
import { 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  Heart,
  UploadCloud,
  ArrowRight
} from 'lucide-react';

export default function AboutPage({ initialTab = 'about', onTabChange }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'about');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    expertise: 'Hair Stylist',
    experience: '',
    about: '',
    portfolio: ''
  });

  // Synchronize with prop changes from navbar/URL
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#E8DAC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#E2CEB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Tabs between About Us and Careers */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => handleTabChange('about')}
            className={`px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'about'
                ? 'bg-[#1C1816] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
            }`}
          >
            <Users className="w-4 h-4 text-[#C5A880]" />
            <span>About Us & Meet the Team</span>
          </button>

          <button
            onClick={() => handleTabChange('careers')}
            className={`px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'careers'
                ? 'bg-[#1C1816] text-[#FFFDF9] shadow-xl scale-105'
                : 'bg-white/80 text-[#5C5048] hover:bg-[#F3ECE1] border border-[#C5A880]/25'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#C5A880]" />
            <span>Careers / Join Our Team</span>
          </button>
        </div>

        {/* ================= SECTION 1: ABOUT US & MEET THE TEAM ================= */}
        {activeTab === 'about' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            
            {/* Story & Philosophy Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-medium">
                Our Story & Philosophy
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] mt-3 leading-tight">
                Meet the Team Behind Maja
              </h1>
              <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4 mb-6" />
              <p className="text-base sm:text-lg text-[#3E342F] leading-relaxed font-light">
                At Maja, beauty is personal. It’s about finding the right people, the right treatments, and a welcoming space where you can simply feel like yourself.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#6E6157] leading-relaxed">
                Our team brings together talented beauty professionals, each with their own speciality, experience and signature services. From the perfect blowdry to intricate nail art, expert brows and restorative lymphatic massages, there’s a Maja expert for every part of your beauty routine.
              </p>
            </div>

            {/* Team Members Grid (Mockups as instructed in line 61) */}
            <div>
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-medium">
                  Artisans of Care
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1816] mt-1">
                  Our Beauty Experts
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-luxury-card rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group transform hover:-translate-y-2"
                  >
                    <div>
                      {/* Stylized Mockup Portrait */}
                      <div className="relative h-72 w-full overflow-hidden">
                        <img
                          src={member.mockupImage}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E5D2BA] border border-white/20">
                            {member.tag}
                          </span>
                        </div>
                      </div>

                      {/* Bio Details */}
                      <div className="p-6">
                        <h3 className="font-serif text-2xl text-[#1C1816] font-medium">
                          {member.name}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#9E7D47] font-medium mt-0.5 mb-3">
                          {member.role}
                        </p>
                        <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Specialties Pill Badges */}
                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-[#C5A880]/15 flex flex-wrap gap-1.5">
                        {member.specialties.map((spec, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#C5A880]/15 text-[#5C4524] font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Highlight Banner */}
            <div className="bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#1C1816] rounded-3xl p-8 sm:p-14 text-white border border-[#D8B1B7]/30 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#F7CEC2] font-medium">
                  Our Commitment
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-[#FFFDF9] mt-3 mb-4">
                  More Than a Beauty Team
                </h3>
                <p className="text-sm sm:text-base text-[#F3E4DB]/90 leading-relaxed font-light">
                  What makes Maja special is our people. Different talents, different personalities, one shared goal: to make every visit feel worth coming back for.
                </p>
                <p className="mt-3 text-sm text-[#F3E4DB]/80 leading-relaxed font-light">
                  Whether you’re here for your regular BIAB, a fresh blowdry, your favourite brow treatment or a moment to completely unwind, we’re here to make you feel looked after.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => handleTabChange('careers')}
                    className="btn-maja-wine px-7 py-3 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
                  >
                    <span>Explore Career Opportunities</span>
                    <ArrowRight className="w-4 h-4 text-[#F7CEC2]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= SECTION 2: JOIN OUR TEAM / CAREERS ================= */}
        {activeTab === 'careers' && (
          <div id="career-section" className="space-y-16 animate-in fade-in duration-300">
            
            {/* Career Header (Ref: The Hideaway & Blush N Curls) */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A6865A] font-medium">
                Careers at Maja
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1816] mt-3 leading-tight">
                Your Next Chapter Could Start at Maja
              </h1>
              <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4 mb-6" />
              <p className="text-base sm:text-lg text-[#3E342F] leading-relaxed font-light">
                We believe the best beauty experiences come from people who genuinely care about their craft and the people they work with.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#6E6157] leading-relaxed">
                At Maja, you’ll be part of a team where creativity, skill and personality come together. Whether your speciality is hair, nails, lashes, beauty or wellness, there’s space to bring your talent to the chair and continue growing along the way.
              </p>
            </div>

            {/* Current Open Positions */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1816] mb-6 text-center">
                Current Opportunities in Dubai
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {openPositions.map((pos, idx) => (
                  <div
                    key={idx}
                    className="bg-luxury-card rounded-2xl p-6 border border-[#C5A880]/30 shadow-md flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-serif text-xl text-[#1C1816] font-medium">
                        {pos.title}
                      </h4>
                      <p className="text-xs text-[#9E7D47] font-medium mt-1">
                        {pos.type}
                      </p>
                      <p className="text-xs text-[#7A6F68] mt-2">
                        Requirements: {pos.experience}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-green-100 text-green-800 shrink-0">
                      Hiring Now
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form (Modeled after Blush N Curls & The Hideaway) */}
            <div className="max-w-3xl mx-auto bg-warm-canvas rounded-3xl p-8 sm:p-12 border border-[#C5A880]/30 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-medium">
                  Application Form
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1816] mt-1">
                  Apply to Join the Maja Family
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6F68] mt-2">
                  Tell us about yourself, your experience and what you could bring to our salon.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-12 px-6 rounded-2xl bg-white/90 border border-green-200">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1C1816]">Application Received!</h4>
                  <p className="text-sm text-[#5C5048] mt-2 max-w-md mx-auto">
                    Thank you, {formData.fullName}. We have received your application. Our salon director will review your portfolio and get in touch if an opportunity arises.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-[#1C1816] text-white"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                        Area of Expertise *
                      </label>
                      <select
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                      >
                        <option value="Hair Stylist & Colorist">Hair Stylist & Colorist</option>
                        <option value="Nail Artist & BIAB Specialist">Nail Artist & BIAB Specialist</option>
                        <option value="Lash & Brow Specialist">Lash & Brow Specialist</option>
                        <option value="Massage Therapist (Lymphatic / DHA)">Massage Therapist (Lymphatic / DHA)</option>
                        <option value="Waxing & Beauty Therapist">Waxing & Beauty Therapist</option>
                        <option value="Salon Reception & Concierge">Salon Reception & Concierge</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Instagram / Portfolio Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/yourhandle"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Tell us about yourself and your experience *
                    </label>
                    <textarea
                      name="about"
                      rows={4}
                      required
                      value={formData.about}
                      onChange={handleInputChange}
                      placeholder="Share your background, previous salons, signature treatments, and why you'd love to join Maja Beauty Bar..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-sm"
                    />
                  </div>

                  {/* CV Upload Simulation */}
                  <div className="p-4 rounded-xl border-2 border-dashed border-[#C5A880]/40 text-center bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
                    <UploadCloud className="w-6 h-6 text-[#9E7D47] mx-auto mb-1" />
                    <span className="text-xs font-medium text-[#1C1816] block">
                      Upload CV / Resume (PDF or DOCX)
                    </span>
                    <span className="text-[11px] text-[#7A6F68]">
                      Max file size 10MB
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-luminous w-full py-4 rounded-xl text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                  >
                    <Send className="w-4 h-4 text-[#1A1614]" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-[#C5A880]/20 text-center text-xs text-[#7A6F68]">
                For direct career inquiries, email us at <span className="font-medium text-[#1C1816]">careers@majabeautybar.ae</span> or message via WhatsApp.
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

