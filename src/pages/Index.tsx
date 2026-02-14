import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-makeup.jpg";
import catBoca from "@/assets/cat-boca.jpg";
import catRosto from "@/assets/cat-rosto.jpg";
import catSobrancelhas from "@/assets/cat-sobrancelhas.jpg";
import catAcessorios from "@/assets/cat-acessorios.jpg";
import catUnhas from "@/assets/cat-unhas.jpg";

const categories = [
  { name: "Boca", image: catBoca },
  { name: "Rosto", image: catRosto },
  { name: "Sobrancelhas", image: catSobrancelhas },
  { name: "Acessórios", image: catAcessorios },
  { name: "Unhas", image: catUnhas },
];

const products: any[] = [];

const whatsappLink = (productName: string) =>
  `https://wa.me/559681125017?text=${encodeURIComponent(`Olá! Tenho interesse no produto ${productName} da Glow 10. Pode me passar mais informações?`)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "header-blur border-b border-border py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="font-heading text-2xl md:text-3xl font-bold">
            <span className="text-gradient-pink">Glow</span>{" "}
            <span className="text-foreground">10</span>
          </h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#categorias" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Categorias
            </a>
            <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Produtos
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Sobre
            </a>
          </nav>
          <a
            href="https://wa.me/559681125017"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button gradient-pink text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="shimmer absolute inset-0 pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Realce sua{" "}
              <span className="text-gradient-pink">beleza</span> com a{" "}
              <span className="text-gradient-pink">Glow 10</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              Maquiagens que destacam sua luz natural
            </p>
            <a
              href="#produtos"
              className="glow-button gradient-pink text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold inline-block"
            >
              Ver Produtos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl pointer-events-none" />
            <img
              src={heroImg}
              alt="Produtos de maquiagem Glow 10"
              className="rounded-2xl w-full object-cover shadow-2xl relative z-10"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Nossas <span className="text-gradient-pink">Categorias</span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="glow-card group relative rounded-2xl overflow-hidden cursor-pointer bg-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <span className="font-heading text-lg font-semibold">{cat.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Produtos em <span className="text-gradient-pink">Destaque</span>
          </motion.h3>

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i}
                  className="glow-card bg-card rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl font-semibold mb-1">{product.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-primary font-bold text-xl">{product.price}</span>
                      <a
                        href={whatsappLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Novos produtos em breve!</p>
            </div>
          )}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Sobre a <span className="text-gradient-pink">Glow 10</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Nascemos com a missão de trazer beleza e autoestima acessível. 
                A Glow 10 oferece uma curadoria especial de maquiagens e acessórios 
                para você brilhar em qualquer ocasião.
              </p>
              
              <div className="flex justify-center gap-6">
                <a href="#" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-300">
                  <Facebook size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">
            <span className="text-gradient-pink">Glow</span> 10
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            © {new Date().getFullYear()} Glow 10 Style Hub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
