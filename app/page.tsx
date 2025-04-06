"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Clock, MapPin, Mail, Phone, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Vijayendra Mudigal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    rating: 5,
    text: "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thank a lot to Bhuvan, Siddharth and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation."
  }
];

const blogs = [
  {
    title: "One Person Company Registration and Compliance: PAN, TAN, and GST Filing Simplified",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    date: "March 28, 2025",
    author: "Om Adesh Ghai"
  },
  {
    title: "A Complete Guide to Registering a Startup in India: Step-by-Step",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    date: "March 28, 2025",
    author: "Kamal Sharma"
  },
  {
    title: "One Person Company Can Be Registered As? Exploring OPC Structures and Requirements!",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    date: "March 28, 2025",
    author: "Om Adesh Ghai"
  }
];

const partners = [
  'Google', 'HP', 'Huawei', 'Lee', 'McDonalds', 'Slack', 'Target', 'Adobe', 'Amazon', 'AMD', 'Dell'
];

const footerLinks = {
  startBusiness: [
    'Private Limited Company',
    'Limited Liability Partnership',
    'One Person Company',
    'Section 8 Company Registration',
    'Nidhi Company Registration',
    'Producer Company Registration',
    'MSME Registration'
  ],
  governmentRegistration: [
    'FSSAI Registration',
    'IEC Registration',
    'Trademark Registration',
    'DSC Registration'
  ],
  complianceTax: [
    'Compliance Pvt Ltd',
    'Compliance LLP',
    'GST Registration'
  ],
  bisCdsco: [
    'BIS Certification',
    'BIS FMCS Certification',
    'BIS CRS Certification',
    'ISI Mark Certification',
    'CDSCO Registration',
    'Medical Device Registration'
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">RegisterKaro</div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm hover:text-primary">Home</a>
            <a href="#" className="text-sm hover:text-primary">Startup</a>
            <a href="#" className="text-sm hover:text-primary">Blog</a>
            <a href="#" className="text-sm hover:text-primary">Contact Us</a>
            <a href="#" className="text-sm hover:text-primary">About Us</a>
            <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
              +91-8447-274-555
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                We take care of ALL your business compliance needs
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                RegisterKaro
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                An online business compliance platform that helps entrepreneurs and other individuals with official registrations, tax filings, and other legal matters.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Started
              </Button>
            </div>
            <div className="flex-1 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full -z-10" />
              <div className="absolute bottom-0 right-20 w-32 h-32 bg-orange-50 rounded-full -z-10" />
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Professional Business Woman"
                  width={600}
                  height={700}
                  className="rounded-lg"
                />
                <div className="absolute -right-4 top-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Business Registered</div>
                </div>
                <div className="absolute -left-4 top-1/2 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary">20,000+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="absolute -right-4 bottom-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary">250+</div>
                  <div className="text-sm text-gray-600">Business Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80"
                alt="Mobile App"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-2xl font-bold text-orange-500">WHY CHOOSE US</h2>
              <p className="text-gray-600">
                Our expert team is here to guide you through the entire process of business registration and compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Expert Team",
                  "Quick Process",
                  "Complete Support",
                  "Online Platform",
                  "Affordable Prices",
                  "Quality Service"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Company Registration",
                icon: "/company.png"
              },
              {
                title: "Business Registration",
                icon: "/business.png"
              },
              {
                title: "Trademark Registration",
                icon: "/trademark.png"
              },
              {
                title: "Legal Documentation",
                icon: "/legal.png"
              },
              {
                title: "NGO Registration",
                icon: "/ngo.png"
              },
              {
                title: "Patent Services",
                icon: "/patent.png"
              },
              {
                title: "ISO Registration",
                icon: "/iso.png"
              },
              {
                title: "Website & Branding",
                icon: "/website.png"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our Client Services Team is always happy to talk to you about what is best for your needs. Contact our team to find out if we are the right fit for you.
            </p>
            <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
              Schedule a Meeting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-12">CONTACT US</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          <TestimonialsHeader />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-12">LATEST BLOG</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="container mx-auto px-4 text-center">
          <PartnersHeader />
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} name={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1426] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <FooterColumn title="START A BUSINESS" links={footerLinks.startBusiness} />
            <FooterColumn title="GOVERNMENT REGISTRATION" links={footerLinks.governmentRegistration} />
            <FooterColumn title="COMPLIANCE & TAX" links={footerLinks.complianceTax} />
            <FooterColumn title="BIS & CDSCO" links={footerLinks.bisCdsco} />
          </div>
          <SocialLinks />
          <FooterDisclaimer />
        </div>
      </footer>
    </main>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <ContactInfoItem
        icon={<MapPin className="h-6 w-6 text-orange-500 mt-1" />}
        title="Main Office"
        content={
          <>
            Safe Ledger Private Limited<br />
            #20, Ground Floor, 17th ML, Old Airport<br />
            Raj Kodihalli, Bangalore, Karnataka<br />
            560008
          </>
        }
      />
      <ContactInfoItem
        icon={<Phone className="h-6 w-6 text-orange-500 mt-1" />}
        title="Make a call"
        content="Phone: +91-8447-4583"
      />
      <ContactInfoItem
        icon={<Clock className="h-6 w-6 text-orange-500 mt-1" />}
        title="Working Hours"
        content={
          <>
            Monday-Friday: 9:00-06:00<br />
            Saturday-Sunday: Holiday
          </>
        }
      />
      <ContactInfoItem
        icon={<Mail className="h-6 w-6 text-orange-500 mt-1" />}
        title="Send an email"
        content={
          <>
            support@registerkaro.in<br />
            admin@registerkaro.in
          </>
        }
      />
    </div>
  );
}

// function ContactInfoItem({ icon, title, content }) {
//   return (
//     <div className="flex items-start gap-4">
//       {icon}
//       <div>
//         <h3 className="font-semibold text-lg mb-2">{title}</h3>
//         <p className="text-gray-600">{content}</p>
//       </div>
//     </div>
//   );
// }


type ContactInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode; 
};

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-[#F8F9FF] p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
      <form className="space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" type="tel" />
        <Textarea placeholder="Message" className="h-32" />
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Send Now
        </Button>
      </form>
    </div>
  );
}

function TestimonialsHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-4">
        Hear What Our Customers<br />Have To Say
      </h2>
      <p className="text-gray-600">
        RegisterKaro is used by tens of thousands of<br />
        founders to start, manage, and grow their business
      </p>
      <div className="text-3xl font-bold text-orange-500 mt-4">20,000+</div>
      <div className="text-lg text-gray-600">Happy Customers</div>
    </div>
  );
}

type Testimonial = {
  name: string;
  role?: string;
  message: string;
  image?: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

function TestimonialSlider({ testimonials }) {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600">{testimonial.text}</p>
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BlogCard({ title, image, date, author }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="text-sm text-gray-600">
          <p>{date}</p>
          <p>Written by {author}</p>
        </div>
      </div>
    </Card>
  );
}

function PartnersHeader() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">
        We <span className="text-orange-500">partner</span> with the best,
      </h2>
      <h3 className="text-xl mb-4">
        so that your business can flow <span className="text-orange-500">seamlessly</span>.
      </h3>
      <p className="text-gray-600 mb-12">
        Your business needs numerous expertise and that's why we are providing you the best services with the best names in the field.
      </p>
    </>
  );
}

function PartnerLogo({ name }) {
  return (
    <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
      <Image
        src={`https://logo.clearbit.com/${name.toLowerCase()}.com`}
        alt={name}
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-orange-500 font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-orange-500">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4 mb-8">
      <a href="#" className="hover:text-orange-500"><Facebook className="h-5 w-5" /></a>
      <a href="#" className="hover:text-orange-500"><Instagram className="h-5 w-5" /></a>
      <a href="#" className="hover:text-orange-500"><Twitter className="h-5 w-5" /></a>
      <a href="#" className="hover:text-orange-500"><Linkedin className="h-5 w-5" /></a>
      <a href="#" className="hover:text-orange-500"><Youtube className="h-5 w-5" /></a>
    </div>
  );
}

function FooterDisclaimer() {
  return (
    <div className="text-sm text-gray-400">
      <p className="mb-4">© 2024 - Safe Ledger Private Limited. All rights reserved.</p>
      <p>
        Please note that we are a facilitating platform enabling access to reliable professionals. 
        We are not a law firm and do not provide legal services ourselves. The information on this 
        website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.
      </p>
    </div>
  );
}