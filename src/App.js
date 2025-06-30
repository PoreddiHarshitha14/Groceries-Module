// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('#market');

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      {sidebarVisible && (
        <aside className="sidebar">
          <div className="sidebar-logo-container">
            <div className="sidebar-logo">
              <img src="astrolite-logo.png" alt="Astrolite Logo" />
            </div>
            <div className="logo-underline"></div>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a 
                  href="#market" 
                  className={activeNavItem === '#market' ? 'active' : ''}
                  onClick={() => handleNavClick('#market')}
                >
                  <i className="fas fa-store"></i> Market
                </a>
              </li>
              <li>
                <a 
                  href="#categories" 
                  className={activeNavItem === '#categories' ? 'active' : ''}
                  onClick={() => handleNavClick('#categories')}
                >
                  <i className="fas fa-th-large"></i> Categories
                </a>
              </li>
              <li>
                <a 
                  href="#order" 
                  className={activeNavItem === '#order' ? 'active' : ''}
                  onClick={() => handleNavClick('#order')}
                >
                  <i className="fas fa-clipboard-list"></i> Order
                </a>
              </li>
              <li>
                <a 
                  href="#favourite" 
                  className={activeNavItem === '#favourite' ? 'active' : ''}
                  onClick={() => handleNavClick('#favourite')}
                >
                  <i className="fas fa-heart"></i> Favourite
                </a>
              </li>
              <li>
                <a 
                  href="#cart" 
                  className={activeNavItem === '#cart' ? 'active' : ''}
                  onClick={() => handleNavClick('#cart')}
                >
                  <i className="fas fa-shopping-cart"></i> Cart <span className="notification-badge">8</span>
                </a>
              </li>
              <li>
                <a 
                  href="#message" 
                  className={activeNavItem === '#message' ? 'active' : ''}
                  onClick={() => handleNavClick('#message')}
                >
                  <i className="fas fa-comment-alt"></i> Message <span className="notification-badge">3</span>
                </a>
              </li>
              <li>
                <a 
                  href="#feedback" 
                  className={activeNavItem === '#feedback' ? 'active' : ''}
                  onClick={() => handleNavClick('#feedback')}
                >
                  <i className="fas fa-star"></i> Feedback
                </a>
              </li>
              <li>
                <a 
                  href="#help" 
                  className={activeNavItem === '#help' ? 'active' : ''}
                  onClick={() => handleNavClick('#help')}
                >
                  <i className="fas fa-question-circle"></i> Help
                </a>
              </li>
              <li>
                <a 
                  href="#settings" 
                  className={activeNavItem === '#settings' ? 'active' : ''}
                  onClick={() => handleNavClick('#settings')}
                >
                  <i className="fas fa-cog"></i> Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className={`main-content ${!sidebarVisible ? 'expanded' : ''}`}>
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </button>
            <div className="navbar-buttons">
              <button>BUY</button>
              <button>SELL</button>
            </div>
            <div className="social-icons-container">
              <div className="social-icon whatsapp">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="social-icon mail">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
          </div>
          
          <div className="navbar-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search product, category, shop here" />
          </div>
          
          <div className="navbar-right">
            <div className="navbar-icons">
              <div className="icon-wrapper" onClick={toggleDarkMode}>
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
              </div>
              <div className="icon-wrapper notification-icon">
                <i className="fas fa-bell"></i>
                <span className="notification-badge">3</span>
              </div>
              <div className="user-profile">
                <img src="user-profile.png" alt="User Profile" />
                <span>Harshitha</span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <section className="dashboard-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Discount Banner */}
            <div className="discount-banner card">
              <div className="discount-text">
                <h2>Get special discounts up to 45%</h2>
                <p>Enjoy our vegetables at a discount price</p>
              </div>
              <div className="discount-image">
                <img src="vegetables-banner.png" alt="Vegetables Discount" />
              </div>
              <button>Use Now</button>
            </div>

            {/* Popular Categories */}
            <div className="card">
              <div className="card-header">
                <h3>Popular Categories</h3>
                <a href="#view-all" className="view-all">View All</a>
              </div>
              <div className="categories-grid">
                <div className="category-item">
                  <img src="category-vegetables.png" alt="Vegetables" />
                  <span>Vegetables</span>
                </div>
                <div className="category-item">
                  <img src="category-fashion.png" alt="Fashion" />
                  <span>Fashion</span>
                </div>
                <div className="category-item">
                  <img src="category-mobiles.png" alt="Mobiles" />
                  <span>Mobiles</span>
                </div>
                <div className="category-item">
                  <img src="category-fruit.png" alt="Fruits" />
                  <span>Fruits</span>
                </div>
                <div className="category-item">
                  <img src="computers.png" alt="Computers" />
                  <span>Computers</span>
                </div>
              </div>
            </div>

            {/* Categories and Stock */}
            <div className="card">
              <div className="card-header">
                <h3>Categories and Stock</h3>
                <button className="filter-button"><i className="fas fa-filter"></i> Filter</button>
              </div>
              <div className="stock-grid">
                <div className="stock-item vegetables">
                  <div className="stock-icon"><i className="fas fa-leaf"></i></div>
                  <div className="stock-value">1,890 stock</div>
                  <div className="stock-label">Vegetables</div>
                </div>
                <div className="stock-item tubers">
                  <div className="stock-icon"><i className="fas fa-seedling"></i></div>
                  <div className="stock-value">2,040 stock</div>
                  <div className="stock-label">Tubers</div>
                </div>
                <div className="stock-item fish">
                  <div className="stock-icon"><i className="fas fa-fish"></i></div>
                  <div className="stock-value">549 stock</div>
                  <div className="stock-label">Fish</div>
                </div>
                <div className="stock-item fruits">
                  <div className="stock-icon"><i className="fas fa-apple-alt"></i></div>
                  <div className="stock-value">309 stock</div>
                  <div className="stock-label">Fruits</div>
                </div>
                <div className="stock-item meat">
                  <div className="stock-icon"><i className="fas fa-drumstick-bite"></i></div>
                  <div className="stock-value">236 stock</div>
                  <div className="stock-label">Meat</div>
                </div>
              </div>
            </div>

            {/* Popular Product */}
            <div className="card">
              <div className="card-header">
                <h3>Popular Product</h3>
                <a href="#see-all" className="view-all">See All</a>
              </div>
              <div className="products-grid">
                <div className="product-item">
                  <img src="product-cabbage.png" alt="Cabbage" />
                  <div className="product-name">Cabbage</div>
                  <div className="product-price">$15.30</div>
                  <div className="product-info">239 orders</div>
                  <button className="add-to-cart"><i className="fas fa-plus"></i></button>
                </div>
                <div className="product-item">
                  <img src="product-kale.png" alt="Kale Vegetables" />
                  <div className="product-name">Kale Vegetables</div>
                  <div className="product-price">$8.36</div>
                  <div className="product-info">200 orders</div>
                  <button className="add-to-cart"><i className="fas fa-plus"></i></button>
                </div>
                <div className="product-item">
                  <img src="product-broccoli.png" alt="Broccoli" />
                  <div className="product-name">Broccoli</div>
                  <div className="product-price">$5.50</div>
                  <div className="product-info">180 orders</div>
                  <button className="add-to-cart"><i className="fas fa-plus"></i></button>
                </div>
                <div className="product-item">
                  <img src="product-caroot.png" alt="Carrot" />
                  <div className="product-name">Carrot</div>
                  <div className="product-price">$4.80</div>
                  <div className="product-info">150 orders</div>
                  <button className="add-to-cart"><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Income Card */}
            <div className="card">
              <div className="card-header">
                <h3>Income</h3>
              </div>
              <div className="income-card">
                <div className="income-item">
                  <div className="income-icon"><i className="fas fa-wallet"></i></div>
                  <div className="income-value">$129.80</div>
                  <div className="income-label">Daily</div>
                </div>
                <div className="income-item">
                  <div className="income-icon"><i className="fas fa-dollar-sign"></i></div>
                  <div className="income-value">$347.52</div>
                  <div className="income-label">Weekly</div>
                </div>
                <div className="income-item">
                  <div className="income-icon"><i className="fas fa-chart-line"></i></div>
                  <div className="income-value">$897.66</div>
                  <div className="income-label">Monthly</div>
                </div>
              </div>
            </div>

            {/* Notification */}
            <div className="card notification-card">
              <div className="card-header">
                <h3>Notification</h3>
              </div>
              <div className="notification-list">
                <ul>
                  <li>
                    <div className="notification-text">The fruit is almost finished, refill</div>
                    <div className="notification-time">11 May, 10:00 AM</div>
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>
                    <div className="notification-text">Vegetable stock have been filled</div>
                    <div className="notification-time">11 May, 09:00 AM</div>
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>
                    <div className="notification-text">Fish stock has been reordered</div>
                    <div className="notification-time">10 May, 05:00 AM</div>
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>
                    <div className="notification-text">Fish orders have been refilled</div>
                    <div className="notification-time">10 May, 10:00 AM</div>
                    <i className="fas fa-chevron-right"></i>
                  </li>
                  <li>
                    <div className="notification-text">Dresses Stock have been filled</div>
                    <div className="notification-time">10 May, 08:00 AM</div>
                    <i className="fas fa-chevron-right"></i>
                  </li>
                </ul>
              </div>
            </div>

            {/* Latest Order */}
            <div className="card latest-order-card">
              <div className="card-header">
                <h3>Latest Order</h3>
              </div>
              <table className="latest-order-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Goods</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Harshitha</td>
                    <td className="order-item">Carrot (S)</td>
                    <td className="order-status"><button>Accept</button></td>
                  </tr>
                  <tr>
                    <td>Saishma</td>
                    <td className="order-item">Fruits</td>
                    <td className="order-status"><button>Accept</button></td>
                  </tr>
                  <tr>
                    <td>Deepika</td>
                    <td className="order-item">Tablet 4*4</td>
                    <td className="order-status"><button>Accept</button></td>
                  </tr>
                  <tr>
                    <td>Arpitha</td>
                    <td className="order-item">Pure Ghee</td>
                    <td className="order-status"><button>Accept</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;