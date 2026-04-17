import {
  Wrench,
  Monitor,
  Unlock,
  Settings,
  Network,
  Palette,
  AppWindow,
  Printer,
  ShoppingCart,
  Smartphone,
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

// ==========================================
// CONFIGURATION DU LOGO
// 1. Hébergez votre logo sur un site gratuit comme https://imgbb.com/ ou https://zupimages.net/
// 2. Copiez le "Lien direct de l'image" (qui se termine par .png ou .jpg)
// 3. Collez-le ci-dessous entre les guillemets.
// Seul vous (qui avez accès à ce code) pourrez le modifier !
// ==========================================
const LOGO_URL = "https://i.ibb.co/b5zw3r5D/logo-png.png"; // <-- LIEN CORRIGÉ

const services = [
  {
    title: "Réparation & Entretien",
    description: "Maintenance préventive et curative d'ordinateurs et équipements informatiques.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Systèmes d'Exploitation",
    description: "Installation et mise à jour de Windows, macOS, Linux et autres systèmes.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Déblocage Téléphones",
    description: "Bypass iCloud, FRP, MDM et déblocage réseau pour toutes les marques.",
    icon: Unlock,
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Configuration Équipements",
    description: "Paramétrage de matériel informatique, électronique et installation de logiciels.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Réseaux & Sécurité",
    description: "Installation de routeurs, switchs, serveurs et caméras de surveillance.",
    icon: Network,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Design & Logiciels",
    description: "Conception de logos professionnels et développement de logiciels sur mesure.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Applications Mobiles",
    description: "Création d'applications personnalisées pour répondre à vos besoins spécifiques.",
    icon: AppWindow,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Impression Multi-support",
    description: "Impression de haute qualité sur papier, bâche, et autres supports publicitaires.",
    icon: Printer,
    image: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Vente Matériel IT",
    description: "Fourniture d'équipements informatiques performants pour professionnels et particuliers.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1531297172868-6f1ce9e80300?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Téléphones & Accessoires",
    description: "Vente en gros et en détail de smartphones et accessoires de dernière génération.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1583394834008-65ba520a7251?auto=format&fit=crop&w=800&q=80"
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                {LOGO_URL ? (
                  <img 
                    src={LOGO_URL} 
                    alt="DIGITAL TECH Logo" 
                    className="h-12 w-auto object-contain mix-blend-multiply"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`${LOGO_URL ? 'hidden' : 'flex'} h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground`}>
                  <Monitor className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">DIGITAL TECH</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#accueil" className="text-sm font-medium hover:text-primary transition-colors">Accueil</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Nos Services</a>
              <a href="#pourquoi-nous" className="text-sm font-medium hover:text-primary transition-colors">Pourquoi Nous</a>
              <a href="#contact">
                <Button variant="default" className="bg-primary hover:bg-primary/90">Contactez-nous</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Accueil</a>
              <a href="#services" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Nos Services</a>
              <a href="#pourquoi-nous" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Pourquoi Nous</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary">Contactez-nous</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                Basé à Likasi, RDC
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Solutions IT <span className="text-primary">Professionnelles</span> & <span className="text-secondary">Rapides</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Votre partenaire technologique de confiance au Congo. De la réparation d'ordinateurs à l'installation de réseaux complexes, nous offrons des services de qualité à des prix abordables pour Lubumbashi, Likasi et Kolwezi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services">
                  <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                    Découvrir nos services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://wa.me/243831606715" target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Direct
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
                alt="Technicien IT au travail" 
                className="relative rounded-2xl shadow-2xl border border-slate-200 object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Nos Services</h2>
            <p className="text-lg text-slate-600">
              Une gamme complète de services informatiques et technologiques pour répondre à tous vos besoins professionnels et personnels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback image if the specific Unsplash photo fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 h-12 w-12 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm text-slate-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="pourquoi-nous" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Pourquoi choisir DIGITAL TECH ?</h2>
              <p className="text-lg text-slate-300 mb-8">
                Nous sommes dédiés à fournir les meilleures solutions technologiques dans le Grand Katanga, avec une expertise reconnue à Likasi, Lubumbashi et Kolwezi.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Professionnalisme", desc: "Une équipe d'experts qualifiés garantissant un travail soigné et aux normes." },
                  { title: "Rapidité d'intervention", desc: "Nous comprenons l'urgence de vos besoins IT. Nos délais de livraison sont parmi les meilleurs." },
                  { title: "Prix Abordables", desc: "Des tarifs compétitifs sans compromis sur la qualité du service ou du matériel." },
                  { title: "Proximité", desc: "Basés à Likasi, nous intervenons rapidement dans toute la région (Lubumbashi, Kolwezi)." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Clients Satisfaits</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Support Technique</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Années d'Expérience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">3</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Villes Principales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Contactez-nous</h2>
            <p className="text-lg text-slate-600">
              Prêt à démarrer votre projet ou besoin d'une réparation urgente ? Notre équipe est à votre écoute.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Notre Adresse</h3>
                    <p className="text-slate-600 text-sm">Likasi, Haut-Katanga<br/>République Démocratique du Congo</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Téléphone & WhatsApp</h3>
                    <p className="text-slate-600 text-sm">
                      Appel : <a href="tel:+243990630055" className="hover:text-primary">+243 990630055</a><br/>
                      WhatsApp : <a href="https://wa.me/243831606715" target="_blank" rel="noreferrer" className="hover:text-primary">+243 831606715</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:digitaltech136@gmail.com" className="hover:text-primary">digitaltech136@gmail.com</a><br/>
                      <a href="mailto:jackinmwamba136@gmail.com" className="hover:text-primary">jackinmwamba136@gmail.com</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>Nous vous répondrons dans les plus brefs délais.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Décrivez votre besoin..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                {LOGO_URL ? (
                  <img 
                    src={LOGO_URL} 
                    alt="DIGITAL TECH Logo" 
                    className="h-8 w-auto object-contain mix-blend-screen opacity-90"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <Monitor className={`${LOGO_URL ? 'hidden' : 'block'} h-6 w-6 text-primary`} />
                <span className="text-xl font-bold text-white tracking-tight">DIGITAL TECH</span>
              </div>
              <p className="text-sm max-w-sm mb-6">
                Votre partenaire de confiance pour tous vos besoins informatiques, électroniques et numériques à Likasi, Lubumbashi et Kolwezi.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#accueil" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Nos Services</a></li>
                <li><a href="#pourquoi-nous" className="hover:text-primary transition-colors">Pourquoi Nous</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services Principaux</h4>
              <ul className="space-y-2 text-sm">
                <li>Réparation IT</li>
                <li>Réseaux & Sécurité</li>
                <li>Déblocage Téléphones</li>
                <li>Vente Matériel</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} DIGITAL TECH. Tous droits réservés.</p>
            <p>Conçu pour l'excellence en RDC.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/243831606715"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
