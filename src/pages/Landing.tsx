import React from 'react';
import { Button } from '@/components/ui/button';
import { TrustCounter } from '@/components/TrustCounter';
import { FloatingAuditIcon } from '@/components/FloatingAuditIcon';
import heroBackground from '@/assets/hero-lake-bg.jpg';
import { 
  CheckCircle, 
  Shield, 
  Eye, 
  Zap, 
  ArrowRight,
  Home,
  FileCheck,
  Users,
  TrendingUp
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-card px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl gradient-text">HANDOVER 360™</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</a>
            <a href="#trust-gap" className="text-foreground/80 hover:text-primary transition-colors">Trust Gap</a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
          </div>
          <Button variant="trust" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
        
        {/* Floating 3D Icons */}
        <FloatingAuditIcon 
          className="top-20 left-10" 
          delay={0}
        />
        <FloatingAuditIcon 
          className="top-40 right-20" 
          delay={1}
        />
        <FloatingAuditIcon 
          className="bottom-40 left-1/4" 
          delay={2}
        />
        <FloatingAuditIcon 
          className="bottom-20 right-1/3" 
          delay={3}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform <span className="gradient-text">Promises</span>
            <br />
            into <span className="gradient-text">Proof</span>
            <br />
            with HANDOVER 360™
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            The cutting-edge trust and transparency platform that revolutionizes 
            how homebuyers and builders experience quality audits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
            <Button variant="hero" size="xl" className="group">
              Start Your Audit Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="transparent" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card p-8 animate-fade-in">
            <div className="text-center">
              <TrustCounter target={98} suffix="%" />
              <p className="text-muted-foreground mt-2">Trust Score</p>
            </div>
            <div className="text-center">
              <TrustCounter target={10000} suffix="+" />
              <p className="text-muted-foreground mt-2">Audits Completed</p>
            </div>
            <div className="text-center">
              <TrustCounter target={500} suffix="+" />
              <p className="text-muted-foreground mt-2">Partner Builders</p>
            </div>
            <div className="text-center">
              <TrustCounter target={99} suffix="%" />
              <p className="text-muted-foreground mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Gap Visualization */}
      <section id="trust-gap" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Trust Gap</span> Crisis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional property handovers leave buyers in the dark. 
              HANDOVER 360™ bridges the gap with transparent, real-time quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <div className="glass-card p-8 relative">
              <div className="absolute top-4 right-4 bg-destructive/20 text-destructive px-3 py-1 rounded-full text-sm font-medium">
                Traditional
              </div>
              <h3 className="text-2xl font-bold mb-6 text-destructive">Before HANDOVER 360™</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Hidden defects discovered post-handover
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Lack of transparency in quality checks
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Disputes between buyers and builders
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Delayed issue resolution
                </div>
              </div>
            </div>

            {/* After */}
            <div className="glass-card p-8 relative shadow-trust">
              <div className="absolute top-4 right-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                HANDOVER 360™
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primary">After HANDOVER 360™</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Real-time quality monitoring
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Complete transparency with photo evidence
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Proactive issue identification
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Instant resolution tracking
                </div>
              </div>
            </div>
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
              Our revolutionary platform creates a seamless bridge between builders and buyers,
              ensuring trust through complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 magnetic">
                <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4 trust-glow">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Our certified auditors conduct stage-wise inspections with live updates 
                  and photo documentation throughout construction.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 magnetic">
                <div className="w-16 h-16 bg-gradient-lake rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Reporting</h3>
                <p className="text-muted-foreground">
                  Detailed reports with visual evidence, compliance scores, and 
                  actionable insights for both buyers and builders.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card p-8 mb-6 hover:shadow-trust transition-all duration-300 magnetic">
                <div className="w-16 h-16 bg-gradient-succulent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced analytics provide trust scores, quality trends, and 
                  predictive insights for informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete peace of mind in your property journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Quality Assurance", desc: "Certified auditor inspections" },
              { icon: Eye, title: "Full Transparency", desc: "Real-time progress visibility" },
              { icon: Zap, title: "Instant Alerts", desc: "Immediate issue notifications" },
              { icon: Users, title: "Stakeholder Portal", desc: "Unified communication hub" },
              { icon: FileCheck, title: "Document Vault", desc: "Secure compliance storage" },
              { icon: TrendingUp, title: "Analytics Dashboard", desc: "Data-driven insights" },
              { icon: CheckCircle, title: "Mobile App", desc: "On-the-go access" },
              { icon: Home, title: "3D Walkthroughs", desc: "Interactive property tours" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:shadow-float transition-all duration-300 group magnetic">
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="gradient-text">Trust</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of homebuyers and builders who've transformed their 
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