import ScrollReveal from "../components/ScrollReveal";
import { Poppins } from "next/font/google";
import ContactForm from "./ContactForm";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function ContactUs() {
  return (
    <main className={`pt-20 overflow-x-hidden ${poppins.className}`}>
      {/* HERO SECTION */}
      <ScrollReveal>
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              We're Here to Help Your Child Thrive
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have questions? Ready to book an assessment? Reach out to our team—we'll guide you through the next steps toward real, lasting progress.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* LOCATIONS & FORM SECTION */}
      <ScrollReveal>
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2">
            {/* LEFT SIDE - LOCATIONS */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Locations</h2>
                <p className="text-gray-600">Visit us at either of our Chennai clinics or connect with us online.</p>
              </div>

              {/* Location 1 */}
              <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                    📍 Location 1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">DARC Clinic - Ashok Nagar</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📍</span>
                      <span>Sona Complex, 1st Floor, 52nd St<br />Sarvamangala Colony, Ashok Nagar<br />Chennai, TN 600083</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">📞</span>
                      <a href="tel:+918015152682" className="hover:text-blue-600 transition">+91 80151 52682</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">✉️</span>
                      <a href="mailto:themomscare365@gmail.com" className="hover:text-blue-600 transition">themomscare365@gmail.com</a>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">🕒</span>
                      <span>Mon–Sat: 9 AM – 9 PM<br />Sunday: Closed</span>
                    </p>
                  </div>
                  <a 
                    href="https://share.google/LtHeFc8L3EJAb2JYg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Location 2 */}
              <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700">
                    📍 Location 2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">DARC Clinic - Pallikaranai</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📍</span>
                      <span>5/1077, Maxworth Nagar 2nd St<br />Maxworth Nagar, Pallikaranai<br />Chennai, Tamil Nadu 600129, India</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">📞</span>
                      <a href="tel:+918015152682" className="hover:text-blue-600 transition">+91 80151 52682</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">✉️</span>
                      <a href="mailto:themomscare365@gmail.com" className="hover:text-blue-600 transition">themomscare365@gmail.com</a>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">🕒</span>
                      <span>Mon–Sat: 9 AM – 9 PM<br />Sunday: Closed</span>
                    </p>
                  </div>
                  <a 
                    href="https://share.google/S5n8Ba1FBMdX7l4f3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Online Option */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white p-6 shadow-md">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                    💻 Teletherapy Available
                  </div>
                  <h3 className="text-xl font-bold">Connect From Anywhere</h3>
                  <p className="text-white/90 text-sm">
                    We offer online consultations and therapy sessions for families who prefer remote support or live outside Chennai.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-md">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA SECTION */}
      <ScrollReveal>
        <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-5">
            <h3 className="text-3xl font-bold">Ready to Take the First Step?</h3>
            <p className="text-white/90">
              Book an assessment today and discover how we can support your child's development journey with evidence-based, root-cause therapy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href="/book" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:shadow-lg transition"
              >
                Book Appointment
              </a>
              <a 
                href="tel:+918015152682" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
              >
                Call +91 80151 52682
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
