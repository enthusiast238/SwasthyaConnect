export function SDGSection() {
  const sdgGoals = [
    {
      number: 3,
      title: "SDG 3 - Good Health",
      description:
        "Ensuring universal health access and promoting well-being for all migrant workers regardless of their background.",
      icon: "fas fa-heartbeat",
      gradient: "from-red-500 to-red-600",
    },
    {
      number: 10,
      title: "SDG 10 - Reduced Inequalities",
      description:
        "Breaking down barriers to healthcare access and ensuring equitable treatment for migrant communities.",
      icon: "fas fa-balance-scale",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      number: 16,
      title: "SDG 16 - Strong Institutions",
      description:
        "Building transparent, digital record systems that promote accountability and effective governance in healthcare.",
      icon: "fas fa-gavel",
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="sdg-impact" className="py-20 bg-muted" data-testid="section-sdg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-sdg">
            Aligned with UN Sustainable Development Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-sdg-description">
            Our solution directly contributes to achieving key sustainable
            development goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sdgGoals.map((goal, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg text-center"
              data-testid={`card-sdg-${goal.number}`}
            >
              <div
                className={`w-24 h-24 bg-gradient-to-br ${goal.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <i className={`${goal.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`heading-sdg-${goal.number}`}>
                {goal.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-sdg-${goal.number}`}>
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
