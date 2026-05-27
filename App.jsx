import React, { useMemo, useState } from "react";
import { Menu, X, MessageCircle, MapPin, Phone, Star, ShieldCheck, Sparkles, Scissors, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Leather Tote",
    category: "Bags",
    material: "Genuine Leather",
    customizable: true,
    description: "A spacious everyday tote with a timeless silhouette, designed for work, travel and daily style.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Vintage Leather Jacket",
    category: "Jackets",
    material: "Premium Leather",
    customizable: true,
    description: "A classic leather jacket crafted for a confident, polished look that never goes out of style.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Minimal Brown Wallet",
    category: "Wallets",
    material: "Full Grain Leather",
    customizable: false,
    description: "A compact wallet with clean stitching, smooth finish and daily durability.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Office Messenger Bag",
    category: "Bags",
    material: "Genuine Leather",
    customizable: true,
    description: "A structured leather messenger bag made for office, laptop carry and effortless everyday use.",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Classic Leather Belt",
    category: "Belts",
    material: "Genuine Leather",
    customizable: false,
    description: "A refined belt with a clean buckle and long-lasting leather finish.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "Personalised Gift Set",
    category: "Custom Gifts",
    material: "Premium Leather",
    customizable: true,
    description: "A thoughtful leather gifting option with initials, colour and finish customisation.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", "Bags", "Jackets", "Wallets", "Belts", "Custom Gifts"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  const whatsappNumber = "919773349911";
  const whatsappText = encodeURIComponent("Hi Jazz Leather Boutique, I want to enquire about your leather products.");

  return (
    <div className="min-h-screen bg-[#fbf6ef] text-[#2b1b12]">
      <div className="bg-[#2b1b12] px-4 py-2 text-center text-xs font-medium tracking-wide text-[#f7eadb] sm:text-sm">
        Premium leather bags, jackets & accessories | Customisation available
      </div>

      <header className="sticky top-0 z-50 border-b border-[#ead8c3] bg-[#fbf6ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6b3f24] text-lg font-bold text-white shadow-sm">J</div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Jazz</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#7a5a43]">Leather Boutique</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a className="hover:text-[#8c542f]" href="#home">Home</a>
            <a className="hover:text-[#8c542f]" href="#products">Products</a>
            <a className="hover:text-[#8c542f]" href="#custom">Custom Orders</a>
            <a className="hover:text-[#8c542f]" href="#about">About</a>
            <a className="hover:text-[#8c542f]" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#6b3f24] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4f2c19]"
            >
              WhatsApp Enquiry
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#ead8c3] px-4 pb-5 lg:hidden">
            <div className="flex flex-col gap-4 py-4 text-sm font-medium">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#custom" onClick={() => setMenuOpen(false)}>Custom Orders</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-[#6b3f24] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp Enquiry
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 inline-flex rounded-full border border-[#d8bfa5] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7a5a43]">
                Genuine leather essentials
              </p>
              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Timeless Leather. Crafted for Everyday Luxury.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5747]">
                Discover premium leather bags, jackets, wallets, belts and custom leather gifts from Jazz Leather Boutique.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center rounded-full bg-[#6b3f24] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4f2c19]">
                  Shop Collection <ChevronRight className="ml-2" size={18} />
                </a>
                <a href="#custom" className="inline-flex items-center justify-center rounded-full border border-[#6b3f24] px-7 py-3 text-sm font-semibold text-[#6b3f24] hover:bg-white">
                  Customise Your Product
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#c6905f]/30 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=1400&q=80"
                alt="Premium leather products"
                className="relative h-[540px] w-full rounded-[2rem] object-cover shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 text-[#b07a42]">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="mt-2 text-sm font-semibold">Boutique leather collection</p>
                <p className="text-xs text-[#7a5a43]">Made for long-lasting style</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShieldCheck, title: "Genuine Materials", text: "Leather products made with quality materials." },
                { icon: Scissors, title: "Customisation", text: "Personalisation and custom product options." },
                { icon: Sparkles, title: "Boutique Style", text: "Curated designs for daily and occasion use." },
                { icon: MessageCircle, title: "Easy Enquiry", text: "Connect directly on WhatsApp before buying." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#ead8c3] bg-[#fbf6ef] p-6">
                  <item.icon className="mb-4 text-[#6b3f24]" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f5747]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c542f]">Our collection</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Featured Leather Products</h2>
                <p className="mt-4 max-w-2xl text-[#6f5747]">Browse bags, jackets, wallets, belts and custom gifting options from Jazz Leather Boutique.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? "bg-[#6b3f24] text-white" : "border border-[#d8bfa5] bg-white text-[#6b3f24] hover:bg-[#f4e7d7]"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <motion.article layout key={product.id} className="group overflow-hidden rounded-[1.8rem] border border-[#ead8c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    {product.customizable && <span className="absolute left-4 top-4 rounded-full bg-[#fbf6ef] px-3 py-1 text-xs font-semibold text-[#6b3f24]">Customisable</span>}
                  </div>
                  <div className="flex h-[300px] flex-col p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b826f]">{product.category}</p>
                        <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#8c542f]">{product.material}</p>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-[#6f5747]">{product.description}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Jazz Leather Boutique, I want to enquire about ${product.name}.`)}`} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-[#6b3f24] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#4f2c19]">
                        Enquire
                      </a>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-full border border-[#d8bfa5] px-4 py-3 text-sm font-semibold text-[#6b3f24] hover:bg-[#fbf6ef]"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="custom" className="bg-[#2b1b12] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8bfa5]">Custom orders</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Want something made your way?</h2>
              <p className="mt-5 text-lg leading-8 text-[#ead8c3]">
                Choose leather type, colour, initials, size, design changes or gifting customisation. Share your requirement and our team will help you with available options.
              </p>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Jazz Leather Boutique, I want to enquire about a custom leather product.")}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2b1b12] hover:bg-[#f7eadb]">
                Enquire on WhatsApp
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Initials & names", "Colour options", "Gift sets", "Design changes"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <Sparkles className="mb-4 text-[#d8bfa5]" />
                  <h3 className="text-lg font-semibold">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#ead8c3]">Available based on product type and material availability.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <img src="https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?auto=format&fit=crop&w=1200&q=80" alt="Leather craftsmanship" className="h-[460px] w-full rounded-[2rem] object-cover shadow-xl" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c542f]">About Jazz</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">A boutique destination for timeless leather style.</h2>
              <p className="mt-5 leading-8 text-[#6f5747]">
                Jazz Leather Boutique is a family-owned brand established in 1960 and situated in the heart of Mumbai’s renowned leather hub, Dharavi. We bring together premium leather materials, practical design and timeless craftsmanship across bags, jackets, wallets, belts and gifting products. Our focus is simple: quality products that feel personal, stylish and made to last.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold">100%</p>
                  <p className="mt-1 text-sm text-[#6f5747]">Enquiry-first shopping support</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold">Custom</p>
                  <p className="mt-1 text-sm text-[#6f5747]">Options for selected products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-[#fbf6ef] p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c542f]">Contact us</p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Visit or enquire with Jazz Leather Boutique.</h2>
                  <p className="mt-5 leading-8 text-[#6f5747]">For product enquiries, custom orders and availability, reach out directly on call or WhatsApp.</p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#6b3f24]" />
                      <div>
                        <p className="font-semibold">Narendra Kale</p>
                        <a href="tel:+919773349911" className="text-[#8c542f] hover:underline">+91 97733 49911</a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="text-[#6b3f24]" />
                      <div>
                        <p className="font-semibold">WhatsApp Enquiry</p>
                        <a href="tel:+919773349911" className="text-[#8c542f] hover:underline">+91 97733 49911</a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-[#6b3f24]" />
                      <div>
                        <p className="font-semibold">Store Location</p>
                        <a href="https://share.google/cgiDepYWKYS9r3D0t" target="_blank" rel="noreferrer" className="text-[#8c542f] hover:underline">
                          View Store Location
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2b1b12] shadow-md hover:bg-[#f5eee6]"
              >
                <X size={20} />
              </button>

              <div className="grid gap-10 lg:grid-cols-2">
                <div className="p-6 lg:p-8">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-[520px] w-full rounded-[1.8rem] object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c542f]">
                    {selectedProduct.category}
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {selectedProduct.name}
                  </h2>

                  <p className="mt-5 text-lg font-medium text-[#8c542f]">
                    {selectedProduct.material}
                  </p>

                  <p className="mt-6 text-base leading-8 text-[#6f5747]">
                    {selectedProduct.description} Crafted with attention to detail and designed for both style and functionality, this product reflects the timeless craftsmanship of Jazz Leather Boutique.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#fbf6ef] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c542f]">Material</p>
                      <p className="mt-2 text-lg font-semibold">{selectedProduct.material}</p>
                    </div>

                    <div className="rounded-3xl bg-[#fbf6ef] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c542f]">Customisation</p>
                      <p className="mt-2 text-lg font-semibold">
                        {selectedProduct.customizable ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border border-[#ead8c3] p-6">
                    <h3 className="text-lg font-semibold">Care Instructions</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6f5747]">
                      <li>• Store in a cool and dry place.</li>
                      <li>• Avoid prolonged exposure to direct sunlight and moisture.</li>
                      <li>• Clean gently using a soft dry cloth.</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Jazz Leather Boutique, I want to enquire about ${selectedProduct.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#6b3f24] px-7 py-4 text-sm font-semibold text-white hover:bg-[#4f2c19]"
                    >
                      Enquire on WhatsApp
                    </a>

                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="inline-flex items-center justify-center rounded-full border border-[#d8bfa5] px-7 py-4 text-sm font-semibold text-[#6b3f24] hover:bg-[#fbf6ef]"
                    >
                      Back to Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#2b1b12] px-4 py-10 text-[#ead8c3]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-semibold text-white">Jazz Leather Boutique</p>
            <p className="mt-1 text-sm">Premium leather products and custom gifting.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#custom" className="hover:text-white">Custom Orders</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
