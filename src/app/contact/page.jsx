"use client";
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  MessageCircle,
  AtSign,
  Send,
  ChevronRight,
  Loader
} from 'lucide-react';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [animateMap, setAnimateMap] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Animation effects
  useEffect(() => {
    // Trigger map animation after page load
    const timer = setTimeout(() => {
      setAnimateMap(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you shortly.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer a comprehensive range of industrial solutions including manufacturing equipment, technical consultations, maintenance services, and consumable supplies for various industries."
    },
    {
      question: "Do you offer on-site technical support?",
      answer: "Yes, our team of expert technicians provides on-site technical support for all our products and services. We can schedule visits based on your requirements."
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please contact our emergency support line."
    },
    {
      question: "Do you offer product demonstrations?",
      answer: "Yes, we offer product demonstrations at our facility or via virtual meetings. Please contact our sales team to schedule a demonstration."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-500 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-20 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-800/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Get In Touch</h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have. We look forward to hearing from you and providing the solutions you need.
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-20 fill-gray-50 -mb-1">
            <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Quick contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 -mt-16 mb-16 relative z-10">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 transform transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    476, Narayan Peth, Cosmos Bank Building, Off Laxmi Road, Pune - 411 030
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 transform transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <a href="mailto:sales@metatechind.com" className="block text-gray-600 hover:text-blue-600 transition-colors">sales@metatechind.com</a>
                  <a href="mailto:meta@metatechind.com" className="block text-gray-600 hover:text-blue-600 transition-colors">meta@metatechind.com</a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 transform transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                  <a href="tel:+919422526706" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 94225 26706</a>
                  <a href="tel:+919822012226" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 98220 12226</a>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs and Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            {/* Tab Navigation */}
            <div className="flex border-b">
              <button 
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'form' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Contact Form
              </button>
              <button 
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'details' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Contact Details
              </button>
              <button 
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'faq' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              {/* Contact Form */}
              {activeTab === 'form' && (
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send Us A Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
                  </div>

                  {formStatus.message && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-100 text-green-700' 
                        : 'bg-red-50 border border-red-100 text-red-700'
                    }`}>
                      <div className="flex">
                        {formStatus.type === 'success' ? (
                          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        )}
                        <span>{formStatus.message}</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AtSign className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <MessageCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Please provide details about your inquiry..."
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex justify-center sm:justify-end pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin h-5 w-5 mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Contact Details */}
              {activeTab === 'details' && (
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Contact Information</h2>
                    <p className="text-gray-600">Reach out to us through any of these channels</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* Address Card */}
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Main Office</h3>
                            <p className="text-gray-600">
                              476, Narayan Peth, Cosmos Bank Building, <br />
                              Off Laxmi Road, Pune - 411 030.
                            </p>
                            <a 
                              href="https://maps.google.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                              View on Maps
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email Card */}
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Addresses</h3>
                            <div className="space-y-2">
                              <div>
                                <span className="text-sm text-gray-500">Sales Inquiries:</span>
                                <a href="mailto:sales@metatechind.com" className="block text-gray-600 hover:text-blue-600 transition-colors">sales@metatechind.com</a>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500">General Information:</span>
                                <a href="mailto:meta@metatechind.com" className="block text-gray-600 hover:text-blue-600 transition-colors">meta@metatechind.com</a>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500">Support Team:</span>
                                <a href="mailto:support@metatechind.com" className="block text-gray-600 hover:text-blue-600 transition-colors">support@metatechind.com</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Phone Card */}
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Phone className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                            <div className="space-y-2">
                              <div>
                                <span className="text-sm text-gray-500">Main Office:</span>
                                <a href="tel:+919422526706" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 94225 26706</a>
                                <a href="tel:+919822012226" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 98220 12226</a>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500 font-medium">Consumables Department:</span>
                                <a href="tel:+919822006106" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 98220 06106</a>
                                <a href="tel:+918380015435" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 83800 15435</a>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500 font-medium">Technical Support:</span>
                                <a href="tel:+919876543210" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 98765 43210</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Working Hours */}
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Clock className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h3>
                            <ul className="space-y-2">
                              <li className="flex justify-between">
                                <span className="text-gray-600">Monday - Friday:</span>
                                <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Saturday:</span>
                                <span className="text-gray-800 font-medium">9:00 AM - 4:00 PM</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Sunday:</span>
                                <span className="text-gray-800 font-medium">Closed</span>
                              </li>
                              <li className="pt-2 mt-2 border-t border-gray-200">
                                <span className="text-gray-600">Technical Support:</span>
                                <span className="text-gray-800 font-medium block">8:00 AM - 8:00 PM (Weekdays)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* FAQ Section */}
              {activeTab === 'faq' && (
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Find quick answers to common questions</p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
                      >
                        <button
                          className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium text-gray-800">{faq.question}</span>
                          <ChevronRight className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? 'transform rotate-90' : ''}`} />
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            openFaq === index ? 'max-h-48' : 'max-h-0'
                          }`}
                        >
                          <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Didn't find what you're looking for?</h4>
                      <p className="text-blue-700 text-sm">
                        If you couldn't find the answer to your question, please don't hesitate to reach out to us directly using our contact form.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className={`rounded-2xl overflow-hidden shadow-xl relative ${animateMap ? 'transform-none opacity-100' : 'transform translate-y-4 opacity-0'} transition-all duration-700`}>
            <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-6 px-8">
              <h2 className="text-2xl font-bold">Find Us</h2>
              <p className="text-blue-100">Visit our office in Narayan Peth, Pune</p>
            </div>
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3261296874026!2d73.85108907485575!3d18.516880782582695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147ec640def%3A0xb4c90071a0cc3b4f!2sNarayan%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715077107431!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Our team of experts is ready to provide you with the solutions you need to take your business to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919422526706" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <button 
                onClick={() => {
                  setActiveTab('form');
                  window.scrollTo({
                    top: document.querySelector('form').offsetTop - 100,
                    behavior: 'smooth'
                  });
                }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors font-medium border border-blue-500"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;