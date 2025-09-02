export function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Health Records for{" "}
              <span className="text-accent-foreground">Migrant Workers</span> –
              Accessible Anytime, Anywhere
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Empowering healthcare for Kerala's migrant workforce through secure,
              multilingual, and sustainable digital health records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
                data-testid="button-get-started"
              >
                Get Started
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Healthcare workers helping migrant workers"
              className="rounded-2xl shadow-2xl"
              data-testid="img-hero-healthcare"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-qrcode text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-sm" data-testid="text-qr-access">QR Code Access</p>
                  <p className="text-xs text-muted-foreground" data-testid="text-instant-retrieval">
                    Instant record retrieval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
