export function ImpactSection() {
  const metrics = [
    {
      value: "1M+",
      description: "Workers to be served across Kerala by 2026",
      color: "text-primary",
    },
    {
      value: "70%",
      description: "Reduction in paper-based inefficiencies",
      color: "text-accent",
    },
    {
      value: "24/7",
      description: "Healthcare record accessibility",
      color: "text-secondary",
    },
  ];

  const testimonials = [
    {
      quote:
        "Now I can carry my medical history anywhere! No more language problems at the hospital.",
      name: "আব্দুল রহমান",
      role: "Construction Worker, Kochi",
      icon: "fas fa-user",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      quote:
        "This system has revolutionized how we treat migrant patients. Complete medical history at our fingertips.",
      name: "Dr. Priya Nair",
      role: "Primary Care Physician, Thiruvananthapuram",
      icon: "fas fa-user-md",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
    },
  ];

  return (
    <section className="py-20 bg-muted" data-testid="section-impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-impact">
            Our Impact & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-impact-description">
            Transforming healthcare accessibility for Kerala's migrant workforce
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg text-center"
              data-testid={`card-metric-${index}`}
            >
              <div className={`text-4xl font-bold ${metric.color} mb-2`} data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
              <p className="text-muted-foreground" data-testid={`text-metric-description-${index}`}>
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <i className={`${testimonial.icon} ${testimonial.textColor}`}></i>
                </div>
                <div>
                  <p className="text-lg mb-4 italic" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
