import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ModelsPage from './pages/ModelsPage';
import CatalogPage from './pages/CatalogPage';
import DealersPage from './pages/DealersPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import DealerLoginPage from './pages/DealerLoginPage';
import ServiceLoginPage from './pages/ServiceLoginPage';
import SalesmanLoginPage from './pages/SalesmanLoginPage';
import ModelDetailPage from './pages/ModelDetailPage';
import DealersListPage from './pages/DealersListPage';
import ServiceListPage from './pages/ServiceListPage';
import DealerServiceLoginPage from './pages/DealerServiceLoginPage';
import DealerServiceApplicationPage from './pages/DealerServiceApplicationPage';
import B2BLoginPage from './pages/B2BLoginPage';
import B2BDashboardPage from './pages/B2BDashboardPage';

type Page = 'home' | 'about' | 'models' | 'catalog' | 'dealers' | 'news' | 'contact' | 'dealer-login' | 'service-login' | 'salesman-login' | 'model-detail' | 'dealers-list' | 'service-list' | 'dealer-service-login' | 'dealer-service-application' | 'b2b-login' | 'b2b-dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash.startsWith('hakkimizda')) {
        setCurrentPage('about');
      } else if (hash.startsWith('modeller')) {
        setCurrentPage('models');
      } else if (hash.startsWith('katalog')) {
        setCurrentPage('catalog');
      } else if (hash.startsWith('bayiler')) {
        setCurrentPage('dealers-list');
      } else if (hash.startsWith('servisler')) {
        setCurrentPage('service-list');
      } else if (hash.startsWith('bayi-servis-girisi')) {
        setCurrentPage('dealer-service-login');
      } else if (hash.startsWith('bayi-servis-basvuru')) {
        setCurrentPage('dealer-service-application');
      } else if (hash.startsWith('b2b-login')) {
        setCurrentPage('b2b-login');
      } else if (hash.startsWith('b2b-dashboard')) {
        setCurrentPage('b2b-dashboard');
      } else if (hash.startsWith('bayi-servis') || hash.startsWith('hizmet-noktalari')) {
        setCurrentPage('dealers');
      } else if (hash.startsWith('haberler')) {
        setCurrentPage('news');
      } else if (hash.startsWith('iletisim')) {
        setCurrentPage('contact');
      } else if (hash.startsWith('bayi-giris')) {
        setCurrentPage('dealer-login');
      } else if (hash.startsWith('servis-giris')) {
        setCurrentPage('service-login');
      } else if (hash.startsWith('plasiyer-giris')) {
        setCurrentPage('salesman-login');
      } else if (hash.startsWith('model/')) {
        setCurrentPage('model-detail');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'models':
        return <ModelsPage />;
      case 'catalog':
        return <CatalogPage />;
      case 'dealers':
        return <DealersPage />;
      case 'dealers-list':
        return <DealersListPage />;
      case 'service-list':
        return <ServiceListPage />;
      case 'dealer-service-login':
        return <DealerServiceLoginPage />;
      case 'dealer-service-application':
        return <DealerServiceApplicationPage />;
      case 'b2b-login':
        return <B2BLoginPage />;
      case 'b2b-dashboard':
        return <B2BDashboardPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'dealer-login':
        return <DealerLoginPage />;
      case 'service-login':
        return <ServiceLoginPage />;
      case 'salesman-login':
        return <SalesmanLoginPage />;
      case 'model-detail':
        return <ModelDetailPage />;
      default:
        return <HomePage />;
    }
  };

  const isLoginPage = currentPage === 'dealer-login' || currentPage === 'service-login' || currentPage === 'salesman-login' || currentPage === 'dealer-service-login' || currentPage === 'b2b-login';
  const isB2BPage = currentPage === 'b2b-dashboard';

  return (
    <>
      {isLoginPage || isB2BPage ? (
        renderPage()
      ) : (
        <Layout>
          {renderPage()}
        </Layout>
      )}
    </>
  );
}

export default App;
