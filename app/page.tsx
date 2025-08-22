'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'
import { PlayIcon } from '@heroicons/react/24/outline'

export default function OctopusVisionLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('pix')
  const [selectedProduct, setSelectedProduct] = useState({
    name: 'Óculos Octopus Vision Premium',
    price: 299.90,
    description: 'Óculos com design minimalista e lentes de alta performance'
  })

  useEffect(() => {
    // Smooth scroll behavior
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true)
  }

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false)
  }

  const handlePayment = () => {
    // Simular processamento de pagamento
    alert(`Processando pagamento via ${selectedPaymentMethod.toUpperCase()} - R$ ${selectedProduct.price.toFixed(2)}`)
    setIsPaymentModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Octopus Vision</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#collections" className="text-gray-600 hover:text-blue-600 transition-colors">Coleções</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
                <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Por que Nós</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={openPaymentModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Comprar Agora
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#collections" className="block px-3 py-2 text-gray-600">Coleções</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600">Como Funciona</a>
              <a href="#why-us" className="block px-3 py-2 text-gray-600">Por que Nós</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600">Depoimentos</a>
              <a href="#faq" className="block px-3 py-2 text-gray-600">FAQ</a>
              <button
                onClick={openPaymentModal}
                className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Comprar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              {/* Achievement Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <CheckCircleIcon className="w-4 h-4 mr-2" />
                +10.000 clientes satisfeitos
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Veja o Mundo com 
                  <span className="text-blue-600"> Clareza</span> e 
                  <span className="text-blue-600"> Estilo</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Óculos premium que combinam design minimalista com tecnologia de lentes de alta performance
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openPaymentModal}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Comprar Agora
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Explorar Coleções
                </button>
              </div>

              {/* Social Metric */}
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="text-lg font-medium">98% de satisfação dos clientes</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-on-scroll">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/7983355/pexels-photo-7983355.jpeg"
                  alt="Pessoa estilosa usando óculos Octopus Vision"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">UV Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Blue Light Filter Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Eco Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="collections" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="space-y-8">
            {/* Main Feature Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 animate-on-scroll">
              <div className="max-w-3xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Design Atemporal
                </h3>
                <p className="text-lg text-gray-600">
                  Criamos óculos que nunca saem de moda, combinando elegância minimalista com funcionalidade superior para o seu dia a dia.
                </p>
              </div>
            </div>

            {/* Secondary Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all animate-on-scroll">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conforto Duradouro</h3>
                <p className="text-gray-600">Leves e ergonômicos para uso diário sem incômodo.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all animate-on-scroll">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proteção Completa</h3>
                <p className="text-gray-600">Lentes com filtro UV e anti-reflexo para máxima proteção.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all animate-on-scroll">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">Produzidos com materiais recicláveis e processos eco-friendly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-us" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualidade Premium</h3>
              <p className="text-gray-600">Óculos desenvolvidos com materiais de alta durabilidade e acabamento impecável.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologia de Lentes</h3>
              <p className="text-gray-600">Clareza e proteção avançada em todas as condições de luz e ambiente.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estilo Único</h3>
              <p className="text-gray-600">Design minimalista que se adapta ao seu lifestyle e personalidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 animate-on-scroll">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg"
                  alt="Ana P."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Ana P. • Designer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Os óculos mais confortáveis e estilosos que já tive. O design é perfeito para o meu trabalho criativo."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 animate-on-scroll">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/19987431/pexels-photo-19987431.jpeg"
                  alt="Bruno L."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Bruno L. • Programador</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Perfeitos para trabalhar no computador, reduziram muito minha fadiga visual. Recomendo!"
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 animate-on-scroll">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg"
                  alt="Carla M."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Carla M. • Advogada</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "A qualidade das lentes é incrível, consigo usar o dia inteiro sem nenhum incômodo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "As lentes têm proteção contra luz azul?",
                answer: "Sim, todas as nossas lentes possuem filtro contra luz azul nociva, ideal para quem passa muito tempo em frente às telas."
              },
              {
                question: "Posso trocar ou devolver se não gostar?",
                answer: "Sim, oferecemos garantia de 30 dias para troca ou devolução sem complicações. Sua satisfação é nossa prioridade."
              },
              {
                question: "Vocês entregam em todo o Brasil?",
                answer: "Sim, enviamos para todo o território nacional com frete rápido e seguro. Consulte os prazos para sua região."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 animate-on-scroll">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Descubra o seu novo par de óculos hoje
              </h2>
              <p className="text-xl text-gray-600">
                Experimente a combinação perfeita de estilo, conforto e tecnologia. Seus olhos merecem o melhor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openPaymentModal}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Comprar Agora
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Ver Coleções
                </button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/29191796/pexels-photo-29191796.jpeg"
                  alt="Óculos Octopus Vision premium"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Octopus Vision © 2025</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="payment-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="payment-modal-content bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Finalizar Compra</h2>
                <button
                  onClick={closePaymentModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Product Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedProduct.name}</h3>
                    <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      R$ {selectedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Método de Pagamento</h3>

                <div className="space-y-3">
                  {/* PIX */}
                  <label className="payment-method-card flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={selectedPaymentMethod === 'pix'}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="payment-method-content ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">PIX</span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Instantâneo</span>
                      </div>
                      <p className="text-sm text-gray-600">Pagamento imediato via código QR</p>
                    </div>
                  </label>

                  {/* Cartão de Crédito */}
                  <label className="payment-method-card flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={selectedPaymentMethod === 'credit'}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="payment-method-content ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Cartão de Crédito</span>
                        <span className="text-sm text-gray-600">até 12x</span>
                      </div>
                      <p className="text-sm text-gray-600">Visa, Mastercard, Elo</p>
                    </div>
                  </label>

                  {/* Boleto */}
                  <label className="payment-method-card flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="boleto"
                      checked={selectedPaymentMethod === 'boleto'}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="payment-method-content ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Boleto Bancário</span>
                        <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">5% desc.</span>
                      </div>
                      <p className="text-sm text-gray-600">Vencimento em 3 dias úteis</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Details */}
              {selectedPaymentMethod === 'credit' && (
                <div className="mb-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Nome como está no cartão"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parcelas
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>1x de R$ {selectedProduct.price.toFixed(2)} sem juros</option>
                      <option>2x de R$ {(selectedProduct.price / 2).toFixed(2)} sem juros</option>
                      <option>3x de R$ {(selectedProduct.price / 3).toFixed(2)} sem juros</option>
                      <option>6x de R$ {(selectedProduct.price / 6).toFixed(2)} sem juros</option>
                      <option>12x de R$ {(selectedProduct.price / 12).toFixed(2)} sem juros</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Customer Info */}
              <div className="mb-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Dados Pessoais</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closePaymentModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {selectedPaymentMethod === 'pix' && 'Gerar PIX'}
                  {selectedPaymentMethod === 'credit' && 'Finalizar Compra'}
                  {selectedPaymentMethod === 'boleto' && 'Gerar Boleto'}
                </button>
              </div>

              {/* Security Notice */}
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2zm10-12V6a2 2 0 00-2-2H8a2 2 0 00-2 2v3h8V6z" />
                </svg>
                Pagamento 100% seguro e criptografado
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
