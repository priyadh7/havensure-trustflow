import React from "react";
import { Button } from "@/components/ui/button";
import { BuildingCard } from "@/components/BuildingCard";
import { TrustCounter } from "@/components/TrustCounter";
import { FloatingAuditIcon } from "@/components/FloatingAuditIcon";
import heroBackground from "@/assets/hero-lake-bg.jpg";
import luxuryTower from "@/assets/luxury-tower.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import affordableHousing from "@/assets/affordable-housing.jpg";
import mixedUse from "@/assets/mixed-use.jpg";
import {
  CheckCircle,
  Shield,
  Eye,
  Zap,
  ArrowRight,
  FileCheck,
  Users,
  BarChart3,
  Smartphone,
  Cube,
  Folder,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-card px-8 py-4 rounded-2xl shadow-lg backdrop-blur-md">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
            <span className="font-bold text-xl gradient-text">
              HANDOVER 360™
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#portfolio"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
          </div>
          <Button variant="trust" size="sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />

        {/* Floating Icons */}
        <FloatingAuditIcon className="top-20 left-10" delay={0} />
        <FloatingAuditIcon className="top-40 right-20" delay={1} />
        <FloatingAuditIcon className="bottom-40 left-1/4" delay={2} />
        <FloatingAuditIcon className="bottom-20 right-1/3" delay={3} />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Industry-Graded <span className="gradient-text">Buildings</span>
            <br />
            with <span className="gradient-text">HANDOVER 360™</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover our portfolio of certified properties across all categories.
            From luxury towers to affordable housing – every project audited to
            perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
            <Button variant="hero" size="xl" className="group">
              Explore Graded Buildings
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="transparent" size="xl">
              View Audit Process
            </Button>
          </div>

          {/* Trust Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card p-8 rounded-2xl shadow-lg animate-fade-in">
            <div className="text-center">
              <TrustCounter target={2500} suffix="+" />
              <p className="text-muted-foreground mt-2">Buildings Graded</p>
            </div>
            <div className="text-center">
              <TrustCounter target={850} suffix="+" />
              <p className="text-muted-foreground mt-2">A+ Grade Buildings</p>
            </div>
            <div className="text-center">
              <TrustCounter target={98} suffix="%" />
              <p className="text-muted-foreground mt-2">Quality Standards Met</p>
            </div>
            <div className="text-center">
              <TrustCounter target={500} suffix="+" />
              <p className="text-muted-foreground mt-2">Certified Builders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Industry-Graded</span> Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every building in our network undergoes rigorous HANDOVER 360™
              auditing. Explore properties across all categories with verified
              trust scores.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <BuildingCard
              title="Emerald Heights Luxury Residences"
              location="Prime Downtown District"
              image={luxuryTower}
              grade="A+"
              score={96}
              type="Residential"
              units={340}
              completionDate="Dec 2024"
              builder="Premium Developers Ltd."
              status="Completed"
              description="Ultra-luxury residential tower featuring premium finishes, smart home integration, and world-class amenities."
            />
            <BuildingCard
              title="TechHub Commercial Center"
              location="Business Innovation Zone"
              image={commercialBuilding}
              grade="A"
              score={92}
              type="Commercial"
              units={120}
              completionDate="Mar 2024"
              builder="Corporate Builders Inc."
              status="Completed"
              description="State-of-the-art commercial complex designed for modern businesses with sustainable architecture."
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <BuildingCard
              title="Harmony Community Homes"
              location="Family Neighborhood"
              image={affordableHousing}
              grade="A"
              score={89}
              type="Residential"
              units={180}
              completionDate="Jun 2024"
              builder="Community First Developers"
              status="In Progress"
              description="Thoughtfully designed affordable housing creating vibrant communities without compromising quality."
            />
            <BuildingCard
              title="Urban Plaza Mixed Development"
              location="City Center"
              image={mixedUse}
              grade="B+"
              score={85}
              type="Mixed-Use"
              units={250}
              completionDate="Sep 2024"
              builder="Metropolitan Developers"
              status="In Progress"
              description="Dynamic mixed-use development combining retail, office, and residential spaces."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">HANDOVER 360™</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform creates a seamless bridge between builders and buyers,
              ensuring trust through complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 rounded-xl">
                <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Stage-wise inspections with live updates and photo documentation
                  throughout construction.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 rounded-xl">
                <div className="w-16 h-16 bg-gradient-lake rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Reporting</h3>
                <p className="text-muted-foreground">
                  Detailed reports with visual evidence, compliance scores, and
                  actionable insights.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 rounded-xl">
                <div className="w-16 h-16 bg-gradient-succulent rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust Analytics</h3>
                <p className="text-muted-foreground">
                  Analytics provide trust scores, quality trends, and predictive
                  insights for decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete peace of mind in your property
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{[
  { icon: Shield, title: "Quality Assurance", desc: "Certified auditor inspections" },
  { icon: Zap, title: "Instant Alerts", desc: "Immediate issue notifications" },
  { icon: Users, title: "Stakeholder Portal", desc: "Unified communication hub" },
  { icon: Folder, title: "Document Vault", desc: "Secure compliance storage" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Data-driven insights" },
  { icon: Smartphone, title: "Mobile App", desc: "On-the-go access" },
  { icon: Cube, title: "3D Walkthroughs", desc: "Interactive property tours" },
  { icon: CheckCircle, title: "Peace of Mind", desc: "Guaranteed trust & transparency" },
].map((feature, index) => {
  const Icon = feature.icon; // ✅ Capitalize and assign
  return (
    <div
      key={index}
      className="glass-card p-6 hover:shadow-float transition-all duration-300 group rounded-xl"
    >
      <Icon
        className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
        aria-hidden="true"
      />
      <h3 className="font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.desc}</p>
    </div>
  );
})}


      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="gradient-text">Trust</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of homebuyers and builders who’ve transformed their
            property journey with HANDOVER 360™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="xl" className="group">
              Start Your Free Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
