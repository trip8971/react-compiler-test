import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RootLayout from './app/layout';
import Page from './app/page';
import CountriesBrokenPage from './app/countries-broken/page';
import CountriesFixedPage from './app/countries-fixed/page';
import SimpleCasesPage from './app/simple-cases/page';

// Temporary component for placeholder links
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="hover:underline">{children}</Link>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        {/* Navigation links - can be moved to a dedicated Nav component later */}
        <nav className="p-4 bg-gray-100">
          <ul className="flex space-x-4">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/simple-cases">Simple Cases</NavLink></li>
            <li><NavLink to="/countries-broken">Countries (Broken)</NavLink></li>
            <li><NavLink to="/countries-fixed">Countries (Fixed)</NavLink></li>
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/simple-cases" element={<SimpleCasesPage />} />
            <Route path="/countries-broken" element={<CountriesBrokenPage />} />
            <Route path="/countries-fixed" element={<CountriesFixedPage />} />
            {/* Define other routes here */}
          </Routes>
        </div>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
