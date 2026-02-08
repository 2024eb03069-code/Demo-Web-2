import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  Dumbbell, 
  Target, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  CheckCircle2, 
  Star,
  Activity,
  HeartPulse,
  Flame,
  UserCheck,
  Trophy,
  Instagram
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";

// Mock Data
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Member since 2021",
    content: "Suraj sir creates the most effective workout plans. I lost 12kg in 3 months and gained significant muscle. The atmosphere is very motivating!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Member since 2022",
    content: "Best gym in Nagpur for beginners. The trainers are patient and correct your form constantly. Highly recommend for women looking for a safe environment.",
    rating: 5
  },
  {
    name: "Amit Deshmukh",
    role: "Member since 2019",
    content: "Clean equipment, great crowd, and no nonsense training. This place is serious about results. The 3-month package is a steal.",
    rating: 4
  }
];

const SERVICES = [
  { title: "Personal Training", desc: "1-on-1 coaching customized to your goals, body type, and fitness level.", icon: UserCheck },
  { title: "Weight Loss", desc: "Scientifically designed programs to help you shed fat and keep it off permanently.", icon: Flame },
  { title: "Muscle Building", desc: "Hypertrophy focused training plans to maximize muscle growth and definition.", icon: Dumbbell },
  { title: "Strength Training", desc: "Build raw power and functional strength with compound movements.", icon: Trophy },
  { title: "Cardio & Endurance", desc: "Improve heart health and stamina with our modern cardio equipment.", icon: HeartPulse },
  { title: "Women's Fitness", desc: "Specialized training zones and programs designed specifically for women.", icon: Activity },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-lg" : "bg-transparent border-transparent py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg uppercase tracking-wider text-white">Suraj Wanjari</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Fitness & Gym</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ScrollLink to="about" smooth={true} className="text-sm font-medium hover:text-primary cursor-pointer uppercase tracking-wider transition-colors">About</ScrollLink>
            <ScrollLink to="services" smooth={true} className="text-sm font-medium hover:text-primary cursor-pointer uppercase tracking-wider transition-colors">Services</ScrollLink>
            <ScrollLink to="testimonials" smooth={true} className="text-sm font-medium hover:text-primary cursor-pointer uppercase tracking-wider transition-colors">Stories</ScrollLink>
            <ScrollLink to="pricing" smooth={true} className="text-sm font-medium hover:text-primary cursor-pointer uppercase tracking-wider transition-colors">Plans</ScrollLink>
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider">
              Join Now
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-secondary border-l-border">
                <div className="flex flex-col gap-6 mt-10">
                   <ScrollLink to="about" smooth={true} className="text-xl font-bold uppercase">About</ScrollLink>
                   <ScrollLink to="services" smooth={true} className="text-xl font-bold uppercase">Services</ScrollLink>
                   <ScrollLink to="testimonials" smooth={true} className="text-xl font-bold uppercase">Testimonials</ScrollLink>
                   <ScrollLink to="pricing" smooth={true} className="text-xl font-bold uppercase">Pricing</ScrollLink>
                   <Button onClick={scrollToContact} className="w-full bg-primary mt-4">JOIN NOW</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Gym atmospheric background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm"
              >
                <Star className="w-4 h-4 fill-primary" />
                <span>Nagpur's Most Trusted Gym</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] text-white"
              >
                Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Your Body</span> Today
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-primary pl-4"
              >
                Fat Loss | Muscle Gain | Personal Training <br/>
                <span className="text-white font-medium">Beginner Friendly Environment</span>
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button 
                  onClick={scrollToContact}
                  className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
                >
                  <span className="skew-x-[10deg]">Start Free Trial</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
                >
                  <span className="skew-x-[10deg]">View Plans</span>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-8 flex items-center gap-4 text-sm font-medium text-gray-400"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-700 flex items-center justify-center overflow-hidden">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold">4.7</span>
                  </div>
                  <span>1300+ Happy Members</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden md:block"
            >
              <LeadForm className="max-w-md ml-auto backdrop-blur-md bg-secondary/80 border-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Happy Members", value: "1300+", icon: Users },
              { label: "Experience", value: "8+ Years", icon: Clock },
              { label: "Certified Trainers", value: "100%", icon: CheckCircle2 },
              { label: "Rating", value: "4.7/5", icon: Star },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold font-display text-white mb-1">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              {/* Gym trainer / owner image placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Trainer" 
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-xl border border-primary/20 shadow-xl z-20 max-w-xs hidden md:block">
                <p className="font-display font-bold text-xl uppercase mb-1">"Consistency is Key"</p>
                <p className="text-sm text-muted-foreground">- Suraj Wanjari</p>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Why Choose Us?" subtitle="About The Gym" alignment="left" />
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Serving Nagpur since 2016, we have established ourselves as the premier destination for serious fitness enthusiasts and beginners alike. We believe that fitness is not just about lifting weights—it's about building a lifestyle.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Certified & Experienced Trainers",
                  "Beginner Friendly Atmosphere",
                  "Scientific Approach to Fat Loss",
                  "Clean & Hygienic Facility"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider">
                Book a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Programs" subtitle="What We Offer" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Membership Plans" subtitle="Invest In Yourself" />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Basic Access" 
              price="₹999" 
              period="mo"
              features={[
                { text: "Gym Access", included: true },
                { text: "Cardio Section", included: true },
                { text: "General Guidance", included: true },
                { text: "Diet Plan", included: false },
                { text: "Personal Trainer", included: false },
              ]}
              onSelect={scrollToContact}
              delay={0}
            />
            <PricingCard 
              title="Standard Transformation" 
              price="₹1,499" 
              period="mo"
              isPopular={true}
              features={[
                { text: "Gym Access", included: true },
                { text: "Cardio Section", included: true },
                { text: "Floor Trainer Support", included: true },
                { text: "Basic Diet Tips", included: true },
                { text: "Personal Trainer", included: false },
              ]}
              onSelect={scrollToContact}
              delay={0.1}
            />
            <PricingCard 
              title="Premium Coaching" 
              price="₹2,499" 
              period="mo"
              features={[
                { text: "Gym Access", included: true },
                { text: "Cardio Section", included: true },
                { text: "Dedicated Personal Trainer", included: true },
                { text: "Customized Diet Plan", included: true },
                { text: "Weekly Progress Tracking", included: true },
              ]}
              onSelect={scrollToContact}
              delay={0.2}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold uppercase mb-2 text-white">🔥 Limited Time Offer</h3>
            <p className="text-xl mb-4 text-gray-200">Get 3 Months Standard Membership for just <span className="text-primary font-bold text-3xl">₹3,999</span></p>
            <p className="text-sm text-muted-foreground mb-6">Save ₹1,000 instantly • No hidden charges</p>
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-8 py-6">Claim Offer Now</Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading title="Success Stories" subtitle="Real Results" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-white mb-6">
            Don't Wait For Tomorrow
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Your future self will thank you. Start your fitness journey today with a free trial session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold uppercase h-14 px-8 text-lg" onClick={scrollToContact}>
              Get Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold uppercase h-14 px-8 text-lg">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="w-5 h-5" /> DM on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-display font-bold uppercase text-white mb-8">Visit The Gym</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase mb-1">Location</h4>
                    <p className="text-gray-400">Kamal Chowk, Nagpur, Maharashtra 440017</p>
                    <p className="text-sm text-primary mt-2 cursor-pointer hover:underline">Get Directions →</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase mb-1">Timing</h4>
                    <p className="text-gray-400">Monday - Saturday</p>
                    <p className="text-white font-bold">06:00 AM – 11:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase mb-1">Contact</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">info@surajwanjari.gym</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold uppercase mb-6">Book Your Free Session</h3>
              <LeadForm className="shadow-none border-none bg-transparent p-0" />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Suraj Wanjari Personal Trainer & Unisex Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}
