export function DemoSection() {
  const demoCards = [
    {
      title: "Worker Profile",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
      image: "https://pixabay.com/get/g05377d8f249259f88f6d44e624586aeaf376eee10cf47cd69f3c1439e1e23e649bdf1b918fd78fba38b4c729cffc47ea3238c892b6992db9ab0c38f8aea8de80_1280.jpg",
      content: {
        name: "রহিম উদ্দিন",
        id: "Worker ID: KL2024001",
        visit: "General Checkup - Jan 15, 2024",
      },
    },
    {
      title: "QR Code Scanner",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      isQRScanner: true,
    },
    {
      title: "Doctor Dashboard",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { label: "Today's Patients", value: "24" },
        { label: "Pending Records", value: "6" },
        { label: "Alerts", value: "2", isAlert: true },
      ],
    },
  ];

  return (
    <section className="py-20" data-testid="section-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-demo">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-demo-description">
            Get a sneak peek of our intuitive platform designed for both workers
            and healthcare providers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {demoCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden"
              data-testid={`card-demo-${index}`}
            >
              <div className={`${card.bgColor} p-4`}>
                <h3 className={`${card.textColor} font-semibold`} data-testid={`heading-demo-${index}`}>
                  {card.title}
                </h3>
              </div>
              <div className="p-6">
                <img
                  src={card.image}
                  alt={`${card.title} mockup interface`}
                  className="w-full rounded-lg mb-4"
                  data-testid={`img-demo-${index}`}
                />

                {/* Worker Profile Content */}
                {card.content && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <i className="fas fa-user text-accent-foreground"></i>
                      </div>
                      <div>
                        <p className="font-medium" data-testid="text-worker-name">
                          {card.content.name}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid="text-worker-id">
                          {card.content.id}
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-muted-foreground">Recent Visit</p>
                      <p className="font-medium" data-testid="text-recent-visit">
                        {card.content.visit}
                      </p>
                    </div>
                  </div>
                )}

                {/* QR Scanner Content */}
                {card.isQRScanner && (
                  <div className="text-center">
                    <div className="w-32 h-32 border-4 border-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <i className="fas fa-qrcode text-accent text-4xl"></i>
                    </div>
                    <p className="text-sm text-muted-foreground" data-testid="text-qr-instruction">
                      Scan worker QR code for instant access
                    </p>
                  </div>
                )}

                {/* Doctor Dashboard Stats */}
                {card.stats && (
                  <div className="space-y-3">
                    {card.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex justify-between items-center"
                        data-testid={`stat-${statIndex}`}
                      >
                        <span className="text-sm text-muted-foreground">
                          {stat.label}
                        </span>
                        <span
                          className={`font-semibold ${
                            stat.isAlert ? "text-destructive" : ""
                          }`}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
