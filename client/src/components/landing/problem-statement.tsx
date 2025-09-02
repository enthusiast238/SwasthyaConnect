export function ProblemStatement() {
  const problems = [
    {
      icon: "fas fa-language",
      title: "Language Barriers",
      description:
        "Communication gaps between healthcare providers and migrant workers leading to misdiagnosis and inadequate care.",
      bgColor: "bg-destructive",
      textColor: "text-destructive-foreground",
    },
    {
      icon: "fas fa-file-medical",
      title: "Inconsistent Records",
      description:
        "Fragmented paper-based systems causing lost medical history and repeated tests, increasing costs and delays.",
      bgColor: "bg-destructive",
      textColor: "text-destructive-foreground",
    },
    {
      icon: "fas fa-hospital",
      title: "Limited Access",
      description:
        "Difficulty accessing quality healthcare services due to documentation issues and lack of proper identification.",
      bgColor: "bg-destructive",
      textColor: "text-destructive-foreground",
    },
  ];

  return (
    <section className="py-20 bg-muted" data-testid="section-problem-statement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-challenge">
            The Challenge We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-challenge-description">
            Over 4 million migrant workers in Kerala face language barriers, lack of
            consistent medical records, and difficulty accessing quality healthcare.
            Our solution bridges this gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg text-center"
              data-testid={`card-problem-${index}`}
            >
              <div
                className={`w-16 h-16 ${problem.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <i className={`${problem.icon} ${problem.textColor} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`heading-problem-${index}`}>
                {problem.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-problem-${index}`}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
