import { SiteContent } from "@/content/siteContent";

export const generateSiteHtml = (content: SiteContent): string => {
  return `
    <!-- Hero Section -->
    <section class="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex items-center justify-center min-h-screen py-20">
          <div class="text-center max-w-4xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 font-semibold text-sm mb-6">
              <span>✨</span>
              <span>${content.hero.badge}</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              ${content.hero.title}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.hero.titleHighlight}</span>
            </h1>
            <p class="text-lg sm:text-xl text-purple-200/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              ${content.hero.description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all">
                ${content.hero.ctaPrimary}
                <span>→</span>
              </a>
              <a href="/services" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-400/50 text-purple-200 font-semibold rounded-xl hover:bg-purple-500/10 transition-all">
                ${content.hero.ctaSecondary}
              </a>
            </div>
            <div class="pt-8 border-t border-purple-500/20">
              <p class="text-sm font-medium text-purple-300/70 mb-4">Déjà adopté par de nombreux professionnels</p>
              <div class="flex items-center justify-center gap-8">
                ${content.hero.stats.map(stat => `
                  <div class="text-center">
                    <div class="text-2xl font-extrabold text-white">${stat.value}</div>
                    <div class="text-sm text-purple-300/70">${stat.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24 bg-gray-950 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
            ${content.howItWorks.badge}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.howItWorks.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.howItWorks.titleHighlight}</span>
          </h2>
          <p class="text-lg text-gray-400">${content.howItWorks.description}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${content.howItWorks.steps.map((step, index) => `
            <div class="relative group">
              <div class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all h-full">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                  ${step.step}
                </div>
                <h3 class="text-xl font-bold text-white mb-3">${step.title}</h3>
                <p class="text-gray-400">${step.description}</p>
              </div>
              ${index < content.howItWorks.steps.length - 1 ? '<div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="py-24 bg-gray-900 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
            ${content.industries.badge}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.industries.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.industries.titleHighlight}</span>
          </h2>
          <p class="text-lg text-gray-400">${content.industries.description}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${content.industries.items.map(industry => `
            <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
              <h3 class="text-xl font-bold text-white mb-4">${industry.name}</h3>
              <ul class="space-y-2">
                ${industry.features.map(feature => `
                  <li class="flex items-center gap-2 text-gray-300">
                    <span class="text-purple-400">✓</span>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-24 bg-gray-950 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
            ${content.benefits.badge}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.benefits.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.benefits.titleHighlight}</span>
          </h2>
          <p class="text-lg text-gray-400">${content.benefits.description}</p>
        </div>
        <div class="flex justify-center gap-8 mb-12">
          ${content.benefits.stats.map(stat => `
            <div class="text-center px-6 py-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div class="text-3xl font-extrabold text-purple-400">${stat.value}</div>
              <div class="text-sm text-gray-400">${stat.label}</div>
            </div>
          `).join('')}
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          ${content.benefits.items.map(benefit => `
            <div class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
              <h3 class="text-xl font-bold text-white mb-3">${benefit.title}</h3>
              <p class="text-gray-400">${benefit.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-gray-900 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
            ${content.testimonials.badge}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.testimonials.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.testimonials.titleHighlight}</span>
          </h2>
          <p class="text-lg text-gray-400">${content.testimonials.description}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${content.testimonials.items.map(testimonial => `
            <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div class="flex items-center gap-1 mb-4">
                ${'★'.repeat(testimonial.rating)}
              </div>
              <p class="text-gray-300 mb-6 italic">"${testimonial.quote}"</p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  ${testimonial.author.charAt(0)}
                </div>
                <div>
                  <p class="font-semibold text-white">${testimonial.author}</p>
                  <p class="text-gray-400 text-sm">${testimonial.business}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-24 bg-gray-950 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
            ${content.pricing.badge}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.pricing.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> ${content.pricing.titleHighlight}</span>
          </h2>
          <p class="text-lg text-gray-400">${content.pricing.description}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          ${content.pricing.plans.map(plan => `
            <div class="${plan.highlighted 
              ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-2 border-purple-500 transform scale-105' 
              : 'bg-gray-900/50 border border-gray-800'} backdrop-blur-sm rounded-2xl p-8 relative">
              ${plan.highlighted ? '<span class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">Populaire</span>' : ''}
              <h3 class="text-xl font-bold text-white mb-2">${plan.name}</h3>
              <p class="text-gray-400 text-sm mb-4">${plan.description}</p>
              <p class="text-4xl font-extrabold text-white mb-6">${plan.price}</p>
              <ul class="space-y-3 mb-8">
                ${plan.features.map(feature => `
                  <li class="flex items-center gap-2 ${plan.highlighted ? 'text-purple-200' : 'text-gray-300'}">
                    <span class="text-purple-400">✓</span>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
              <a href="/contact" class="${plan.highlighted
                ? 'block text-center py-3 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100'
                : 'block text-center py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700'} transition">
                ${plan.cta}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ${content.cta.title}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"> ${content.cta.titleHighlight}</span>
          </h2>
          <p class="text-xl text-purple-200/90 mb-8 max-w-2xl mx-auto">${content.cta.description}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
              ${content.cta.ctaPrimary}
              <span>→</span>
            </a>
            <a href="/services" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              ${content.cta.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-gray-950 border-t border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold text-white mb-4">CréaVisuel</h3>
            <p class="text-gray-400 max-w-md">${content.footer.description}</p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Navigation</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/" class="hover:text-purple-400 transition">Accueil</a></li>
              <li><a href="/services" class="hover:text-purple-400 transition">Services</a></li>
              <li><a href="/about" class="hover:text-purple-400 transition">À propos</a></li>
              <li><a href="/contact" class="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:${content.footer.email}" class="hover:text-purple-400 transition">${content.footer.email}</a>
              </li>
              <li class="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:${content.footer.phone}" class="hover:text-purple-400 transition">${content.footer.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© ${new Date().getFullYear()} CréaVisuel - B2Santos Communication. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `;
};
