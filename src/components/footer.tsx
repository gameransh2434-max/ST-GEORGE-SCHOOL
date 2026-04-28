import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-school-navy text-white/80 pt-16 pb-8 border-t-[8px] border-school-gold"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex flex-col text-white">
              <span className="font-serif font-bold text-2xl leading-tight">
                St. George School
              </span>
              <span className="text-xs uppercase tracking-widest font-medium text-school-gold mt-1">
                Banda, U.P.
              </span>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Managed by: Diocesan Education Board of the Diocesan Council of
              the Diocese of Lucknow (C.N.I.)
            </p>
            <div className="inline-block border border-white/20 px-3 py-1 text-xs mt-2 text-white/90 uppercase tracking-wider">
              Affiliated to C.B.S.E., New Delhi
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="hover:text-school-gold transition-colors text-sm"
                >
                  About the School
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="hover:text-school-gold transition-colors text-sm"
                >
                  Academics &amp; Streams
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="hover:text-school-gold transition-colors text-sm"
                >
                  Admissions Open
                </a>
              </li>
              <li>
                <a
                  href="#campus"
                  className="hover:text-school-gold transition-colors text-sm"
                >
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-school-gold shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Awas Vikas, Chilla Road,
                  <br />
                  Banda-210001 (U.P.), India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-school-gold shrink-0" />
                <span className="text-sm">05192-220842, 6388675905</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-school-gold shrink-0" />
                <a
                  href="mailto:st.georgeschool.bnd@gmail.com?subject=Enquiry%20from%20Website"
                  className="text-sm hover:text-school-gold transition-colors underline-offset-2 hover:underline"
                >
                  st.georgeschool.bnd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              School Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-school-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-medium">Summer Timings</p>
                  <p>7:30 AM - 1:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-school-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-medium">Winter Timings</p>
                  <p>8:30 AM - 2:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-school-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-medium">Office Hours</p>
                  <p>9:00 AM - 1:00 PM (Mon-Sat)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs">
          <p className="text-school-crimson font-semibold tracking-wide uppercase">
            &copy; {year} St. George School, Banda. All Rights Reserved with
            Madarax Development.
          </p>
        </div>
      </div>
    </footer>
  );
}
