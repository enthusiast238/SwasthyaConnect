export function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-id-card",
      title: "Digital Health Record",
      description:
        "Portable, unique ID-based health records accessible from anywhere with complete medical history and treatment plans.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      icon: "fas fa-globe",
      title: "Multilingual Support",
      description:
        "Full support for Malayalam, Hindi, Bengali, and English ensuring clear communication and understanding.",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure Cloud Storage",
      description:
        "Enterprise-grade security with QR-code based access ensuring data privacy and HIPAA compliance.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      icon: "fas fa-user-md",
      title: "Doctor & Worker Portal",
      description:
        "Intuitive interfaces for both healthcare providers and workers to update and access records efficiently.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      icon: "fas fa-brain",
      title: "AI-Driven Insights",
      description:
        "Preventive health insights and early warning systems powered by machine learning algorithms.",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile-First Design",
      description:
        "Optimized for smartphones with offline capabilities ensuring access even in remote areas.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
  ];

  return (
    <section id="features" className="py-20" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-features">
            Our Solution & Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-description">
            Comprehensive digital health platform designed specifically for migrant
            workers in Kerala
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`card-feature-${index}`}
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6`}
              >
                <i className={`${feature.icon} ${feature.textColor} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`heading-feature-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-feature-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
