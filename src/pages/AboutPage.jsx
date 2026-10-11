import React, { useState, useEffect } from 'react';
import { teamMembers, openPositions } from '../data/teamData';
import { 
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
    expertise: 'Hair Assistant',
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

  const handleSelectRole = (roleTitle) => {
    setFormData(prev => ({ ...prev, expertise: roleTitle }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#F7CEC2]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D8B1B7]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Tabs between About Us and Careers */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => handleTabChange('about')}
            className={`px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
              activeTab === 'about'
                ? 'bg-[#3A1E1E] text-white shadow-xl scale-105'
                : 'bg-white/80 text-[#3A1E1E]/80 hover:bg-[#F3E4DB] border border-[#B97A86]/30'
            }`}
          >
            <span>About Us & Meet the Team</span>
          </button>

          <button
            onClick={() => handleTabChange('careers')}
            className={`px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
              activeTab === 'careers'
                ? 'bg-[#3A1E1E] text-white shadow-xl scale-105'
                : 'bg-white/80 text-[#3A1E1E]/80 hover:bg-[#F3E4DB] border border-[#B97A86]/30'
            }`}
          >
            <span>Careers / Join Our Team</span>
          </button>
        </div>

        {/* ================= SECTION 1: ABOUT US & MEET THE TEAM ================= */}
        {activeTab === 'about' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            
            {/* Story & Philosophy Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
                Our Story & Philosophy
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#3A1E1E] mt-3 leading-tight">
                Meet the Team Behind Maja
              </h1>
              <div className="w-16 h-0.5 bg-[#B97A86] mx-auto mt-4 mb-6" />
              <p className="text-base sm:text-lg text-[#3A1E1E]/90 leading-relaxed font-light">
                At Maja, beauty is personal. It’s about finding the right people, the right treatments, and a welcoming space where you can simply feel like yourself.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#3A1E1E]/80 leading-relaxed font-light">
                Our team brings together talented beauty professionals, each with their own speciality, experience and signature services. From the perfect blowdry to intricate nail art, expert brows and restorative lymphatic massages, there’s a Maja expert for every part of your beauty routine.
              </p>
            </div>

            {/* Team Members Grid (Mockups as instructed in line 61) */}
            <div>
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium">
                  Artisans of Care
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1E1E] mt-1">
                  Our Beauty Experts
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-luxury-card rounded-3xl overflow-hidden border border-[#D8B1B7]/40 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group transform hover:-translate-y-2"
                  >
                    <div>
                      {/* Stylized Mockup Portrait */}
                      <div className="relative h-72 w-full overflow-hidden">
                        <img
                          src={member.mockupImage}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Bio Details */}
                      <div className="p-6">
                        <h3 className="font-serif text-2xl text-[#3A1E1E] font-medium">
                          {member.name}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#7B2E3A] font-medium mt-0.5 mb-3">
                          {member.role}
                        </p>
                        <p className="text-xs sm:text-sm text-[#3A1E1E]/80 leading-relaxed font-normal">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Specialties Pill Badges */}
                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-[#D8B1B7]/30 flex flex-wrap gap-1.5">
                        {member.specialties.map((spec, i) => (
                          <span key={i} className="text-[10px] px-2.5 py-1 rounded-md bg-[#F3E4DB] text-[#7B2E3A] border border-[#D8B1B7]/40 font-medium">
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
            <div className="bg-gradient-to-br from-[#3A1E1E] via-[#2A1414] to-[#231012] rounded-3xl p-8 sm:p-14 text-white border border-[#D8B1B7]/30 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#F7CEC2] font-medium">
                  Our Commitment
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-white mt-3 mb-4">
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
                    className="btn-maja-wine px-7 py-3 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all text-white"
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
              <span className="text-xs uppercase tracking-[0.25em] text-[#7B2E3A] font-medium">
                Careers at Maja
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#3A1E1E] mt-3 leading-tight">
                Your Next Chapter Could Start at Maja
              </h1>
              <div className="w-16 h-0.5 bg-[#B97A86] mx-auto mt-4 mb-6" />
              <p className="text-base sm:text-lg text-[#3A1E1E]/90 leading-relaxed font-light">
                We believe the best beauty experiences come from people who genuinely care about their craft and the people they work with.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#3A1E1E]/80 leading-relaxed font-light">
                At Maja, you’ll be part of a team where creativity, skill and personality come together. Whether your speciality is hair, nails, lashes, beauty or wellness, there’s space to bring your talent to the chair and continue growing along the way.
              </p>
            </div>

            {/* Current Open Positions */}
            <div>
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium">
                  We Are Hiring
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3A1E1E] mt-1 font-normal">
                  Current Opportunities Maja
                </h3>
                <p className="text-xs sm:text-sm text-[#8C7474] mt-2 font-light">
                  Explore our open roles and find your place in our warm, passionate beauty team.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {openPositions.map((pos) => (
                  <div
                    key={pos.id || pos.title}
                    className="bg-white/95 rounded-3xl p-7 sm:p-9 border border-[#D8B1B7]/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F3E4DB] mb-5">
                        <div>
                          <h4 className="font-serif italic text-2xl sm:text-3xl text-[#3A1E1E] font-normal">
                            {pos.title}
                          </h4>
                          <span className="text-xs font-medium text-[#7B2E3A] tracking-wide mt-1 block">
                            {pos.type}
                          </span>
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F7CEC2] text-[#3A1E1E] shrink-0 font-medium">
                          Hiring Now
                        </span>
                      </div>

                      {/* Role Summary */}
                      <p className="text-xs sm:text-sm text-[#3A1E1E]/85 leading-relaxed font-light mb-6">
                        {pos.description}
                      </p>

                      {/* Responsibilities */}
                      {pos.responsibilities && (
                        <div className="mb-6 pt-5 border-t border-[#F3E4DB]/80">
                          <h5 className="text-xs uppercase tracking-wider text-[#7B2E3A] font-semibold mb-3">
                            Responsibilities &amp; Duties
                          </h5>
                          <ol className="space-y-2 text-xs sm:text-sm text-[#3A1E1E]/80 list-decimal list-inside font-light">
                            {pos.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="leading-relaxed">
                                <span className="ml-1">{resp}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Qualifications */}
                      {pos.qualifications && (
                        <div className="pt-5 border-t border-[#F3E4DB]/80 mb-6">
                          <h5 className="text-xs uppercase tracking-wider text-[#7B2E3A] font-semibold mb-3">
                            Qualifications &amp; Requirements
                          </h5>
                          <ol className="space-y-2 text-xs sm:text-sm text-[#3A1E1E]/80 list-decimal list-inside font-light">
                            {pos.qualifications.map((qual, qIdx) => (
                              <li key={qIdx} className="leading-relaxed">
                                <span className="ml-1">{qual}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>

                    {/* Apply Button */}
                    <div className="pt-6 border-t border-[#F3E4DB]">
                      <button
                        onClick={() => handleSelectRole(pos.title)}
                        className="btn-maja-wine w-full py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <span>Apply for {pos.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form (Modeled after Blush N Curls & The Hideaway) */}
            <div id="application-form" className="max-w-3xl mx-auto bg-warm-canvas rounded-3xl p-8 sm:p-12 border border-[#D8B1B7]/40 shadow-xl scroll-mt-28">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-[#7B2E3A] font-medium">
                  Application Form
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3A1E1E] mt-1">
                  Apply to Join the Maja Family
                </h3>
                <p className="text-xs sm:text-sm text-[#8C7474] mt-2 font-light">
                  Tell us about yourself, your experience and what you could bring to our salon.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-12 px-6 rounded-2xl bg-white/90 border border-green-200">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#3A1E1E]">Application Received!</h4>
                  <p className="text-sm text-[#3A1E1E]/80 mt-2 max-w-md mx-auto font-light">
                    Thank you, {formData.fullName}. We have received your application. Our salon director will review your portfolio and get in touch if an opportunity arises.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-[#3A1E1E] text-white"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                        Area of Expertise *
                      </label>
                      <select
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                      >
                        <option value="Hair Assistant">Hair Assistant</option>
                        <option value="Massage Therapist">Massage Therapist</option>
                        <option value="Hair Stylist & Colorist">Hair Stylist & Colorist</option>
                        <option value="Nail Artist & BIAB Specialist">Nail Artist & BIAB Specialist</option>
                        <option value="Lash & Brow Specialist">Lash & Brow Specialist</option>
                        <option value="Waxing & Beauty Therapist">Waxing & Beauty Therapist</option>
                        <option value="Salon Reception">Salon Reception</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                      Instagram / Portfolio Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/yourhandle"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#3A1E1E] mb-1.5">
                      Tell us about yourself and your experience *
                    </label>
                    <textarea
                      name="about"
                      rows={4}
                      required
                      value={formData.about}
                      onChange={handleInputChange}
                      placeholder="Share your background, previous salons, signature treatments, and why you'd love to join Maja Beauty Bar..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#B97A86]/40 focus:border-[#7B2E3A] focus:ring-2 focus:ring-[#F7CEC2]/40 text-sm text-[#3A1E1E]"
                    />
                  </div>

                  {/* CV Upload Simulation */}
                  <div className="p-4 rounded-xl border-2 border-dashed border-[#B97A86]/40 text-center bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
                    <UploadCloud className="w-6 h-6 text-[#7B2E3A] mx-auto mb-1" />
                    <span className="text-xs font-medium text-[#3A1E1E] block">
                      Upload CV / Resume (PDF or DOCX)
                    </span>
                    <span className="text-[11px] text-[#8C7474]">
                      Max file size 10MB
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-luminous w-full py-4 rounded-xl text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl text-white"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-[#D8B1B7]/30 text-center text-xs text-[#8C7474]">
                For direct career inquiries, email us at <span className="font-medium text-[#3A1E1E]">careers@majabeautybar.ae</span> or message via WhatsApp.
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

