"use client";

import { Shield, Zap, Users, Folder, BarChart3, Smartphone, Cube, CheckCircle } from "lucide-react";

export default function Landing() {
  const features = [
    { icon: Shield, title: "Quality Assurance", desc: "Certified auditor inspections" },
    { icon: Zap, title: "Instant Alerts", desc: "Immediate issue notifications" },
    { icon: Users, title: "Stakeholder Portal", desc: "Unified communication hub" },
    { icon: Folder, title: "Document Vault", desc: "Secure compliance storage" },
    { icon: BarChart3, title: "Analytics Dashboard", desc: "Data-driven insights" },
    { icon: Smartphone, title: "Mobile App", desc: "On-the-go access" },
    { icon: Cube, title: "3D Walkthroughs", desc: "Interactive property tours" },
    { icon: CheckCircle, title: "Peace of Mind", desc: "Guaranteed trust & transparency" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Havensure?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon; // ✅ Fix: Use capitalized component reference
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
        </div>
      </div>
    </section>
  );
}
