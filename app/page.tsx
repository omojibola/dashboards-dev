import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodeExample from '@/components/CodeExample';
import MailingListSignup from '@/components/MailingListSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeExample />
        <MailingListSignup />
      </main>
      <Footer />
    </div>
  );
}
