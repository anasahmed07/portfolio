import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
      <section className="mx-auto">
        <Header/>
        {children}
        <Footer/>
      </section>
    );
  }