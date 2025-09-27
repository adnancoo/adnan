<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سوبر ماركت - تسوق بسهولة</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #4361ee;
            --primary-light: #4895ef;
            --primary-dark: #3a0ca3;
            --secondary: #f72585;
            --accent: #4cc9f0;
            --success: #4ade80;
            --warning: #f59e0b;
            --error: #ef4444;
            --text: #1f2937;
            --text-light: #6b7280;
            --light: #f8fafc;
            --white: #ffffff;
            --gray: #e5e7eb;
            --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            --gradient: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
            --gradient-light: linear-gradient(135deg, #4895ef 0%, #4361ee 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* رأس الصفحة */
        header {
            background: var(--gradient);
            color: var(--white);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.8rem;
            font-weight: 800;
        }

        .logo i {
            color: var(--accent);
            font-size: 2rem;
        }

        .search-cart-container {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .search-box {
            position: relative;
            width: 400px;
        }

        .search-box input {
            width: 100%;
            padding: 0.8rem 1rem 0.8rem 3rem;
            border: none;
            border-radius: 50px;
            outline: none;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            color: var(--white);
            font-size: 1rem;
            transition: all 0.3s;
        }

        .search-box input::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .search-box input:focus {
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 0 2px var(--accent);
        }

        .search-box i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--white);
        }

        .cart-icon {
            position: relative;
            cursor: pointer;
            font-size: 1.5rem;
            background: rgba(255, 255, 255, 0.2);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        .cart-icon:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .cart-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: var(--secondary);
            color: var(--white);
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
        }

        /* قسم التنقل */
        nav {
            background: var(--white);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-items {
            display: flex;
            gap: 2rem;
        }

        .nav-item {
            color: var(--text);
            text-decoration: none;
            padding: 1rem 0;
            position: relative;
            font-weight: 600;
            transition: color 0.3s;
        }

        .nav-item:hover {
            color: var(--primary);
        }

        .nav-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0;
            height: 3px;
            background: var(--primary);
            transition: width 0.3s;
            border-radius: 3px;
        }

        .nav-item:hover::after {
            width: 100%;
        }

        .user-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary);
            font-weight: 600;
        }

        .btn {
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-primary {
            background: var(--primary);
            color: var(--white);
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .btn-outline {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: var(--secondary);
            color: var(--white);
        }

        .btn-secondary:hover {
            background: #e11473;
            transform: translateY(-2px);
        }

        /* المحتوى الرئيسي */
        main {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .hero {
            background: var(--gradient-light);
            color: var(--white);
            border-radius: 20px;
            padding: 3rem;
            margin-bottom: 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--shadow);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 400px;
            height: 400px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }

        .hero-content {
            max-width: 600px;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .hero-image {
            z-index: 1;
        }

        .hero-image i {
            font-size: 12rem;
            opacity: 0.8;
        }

        .section-title {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .section-title h2 {
            font-size: 2rem;
            color: var(--primary-dark);
            position: relative;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            right: 0;
            width: 50px;
            height: 4px;
            background: var(--accent);
            border-radius: 2px;
        }

        /* عرض المنتجات */
        .categories {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            overflow-x: auto;
            padding-bottom: 1rem;
        }

        .category-btn {
            background: var(--white);
            border: 2px solid var(--gray);
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .category-btn.active {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .category-btn:hover:not(.active) {
            border-color: var(--primary);
            color: var(--primary);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: all 0.3s;
            position: relative;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .product-badge {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: var(--secondary);
            color: var(--white);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
        }

        .product-image {
            height: 200px;
            background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }

        .product-info {
            padding: 1.5rem;
        }

        .product-name {
            font-weight: 700;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        .product-description {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .product-price {
            color: var(--primary);
            font-weight: 800;
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        .add-to-cart {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 0.8rem;
            width: 100%;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .add-to-cart:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
        }

        .add-to-cart:disabled {
            background: var(--gray);
            cursor: not-allowed;
            transform: none;
        }

        /* سلة التسوق */
        .cart-sidebar {
            position: fixed;
            top: 0;
            right: -450px;
            width: 450px;
            height: 100vh;
            background: var(--white);
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 2000;
            display: flex;
            flex-direction: column;
        }

        .cart-sidebar.active {
            right: 0;
        }

        .cart-header {
            padding: 1.5rem;
            background: var(--gradient);
            color: var(--white);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .close-cart {
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
        }

        .close-cart:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .cart-items {
            flex: 1;
            padding: 1.5rem;
            overflow-y: auto;
        }

        .cart-item {
            display: flex;
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--gray);
        }

        .cart-item-image {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
            margin-left: 1rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .cart-item-details {
            flex: 1;
        }

        .cart-item-name {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .cart-item-price {
            color: var(--primary);
            font-weight: 600;
        }

        .cart-item-quantity {
            display: flex;
            align-items: center;
            margin-top: 0.5rem;
        }

        .quantity-btn {
            width: 32px;
            height: 32px;
            background: var(--gray);
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
        }

        .quantity-btn:hover {
            background: var(--primary);
            color: var(--white);
        }

        .quantity-input {
            width: 50px;
            height: 32px;
            text-align: center;
            border: 1px solid var(--gray);
            border-radius: 6px;
            margin: 0 5px;
        }

        .remove-item {
            color: var(--error);
            background: none;
            border: none;
            cursor: pointer;
            margin-top: 0.5rem;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

        .cart-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--gray);
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;
            font-weight: 700;
            font-size: 1.3rem;
        }

        .checkout-btn {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 1rem;
            width: 100%;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .checkout-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .checkout-btn:disabled {
            background: var(--gray);
            cursor: not-allowed;
            transform: none;
        }

        /* نموذج الطلب */
        .order-form {
            background: var(--white);
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: var(--shadow);
            margin-top: 3rem;
            display: none;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .form-group input {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--gray);
            border-radius: 10px;
            font-size: 1rem;
            transition: border 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--primary);
        }

        .submit-order {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .submit-order:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        /* صفحة إدارة الطلبات */
        .orders-section {
            display: none;
        }

        .admin-panel {
            background: var(--white);
            border-radius: 15px;
            padding: 2rem;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
        }

        .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .orders-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .orders-table th, .orders-table td {
            padding: 1.2rem;
            text-align: right;
            border-bottom: 1px solid var(--gray);
        }

        .orders-table th {
            background: var(--gradient-light);
            color: var(--white);
            font-weight: 600;
        }

        .order-status {
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .status-pending {
            background: #fef3c7;
            color: #d97706;
        }

        .status-completed {
            background: #d1fae5;
            color: #065f46;
        }

        .action-btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
        }

        .complete-btn {
            background: var(--success);
            color: white;
        }

        .complete-btn:hover {
            background: #22c55e;
        }

        /* نموذج تسجيل الدخول */
        .login-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }

        .login-modal.active {
            display: flex;
        }

        .login-form {
            background: var(--white);
            padding: 2.5rem;
            border-radius: 20px;
            width: 90%;
            max-width: 450px;
            box-shadow: var(--shadow-lg);
        }

        .login-form h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .form-group input {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--gray);
            border-radius: 10px;
            font-size: 1rem;
            transition: border 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--primary);
        }

        .login-btn {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 1rem;
            width: 100%;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .login-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
        }

        .login-error {
            color: var(--error);
            text-align: center;
            margin-top: 1rem;
            display: none;
            font-weight: 600;
        }

        /* طبقة التعتيم */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 1999;
            display: none;
        }

        .overlay.active {
            display: block;
        }

        /* قسم التنبيهات */
        .alert {
            padding: 1rem 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 10px;
            display: none;
            align-items: center;
            gap: 1rem;
        }

        .alert-success {
            background: #d1fae5;
            color: #065f46;
            border: 1px solid #a7f3d0;
        }

        .alert-error {
            background: #fee2e2;
            color: #991b1b;
            border: 1px solid #fecaca;
        }

        /* التصميم المتجاوب */
        @media (max-width: 1024px) {
            .hero {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-content {
                margin-bottom: 2rem;
            }
            
            .search-box {
                width: 300px;
            }
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            .search-box {
                width: 100%;
            }
            
            .nav-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-items {
                gap: 1rem;
            }
            
            .cart-sidebar {
                width: 100%;
                right: -100%;
            }
            
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .hero-image i {
                font-size: 8rem;
            }
        }

        @media (max-width: 480px) {
            .products-grid {
                grid-template-columns: 1fr;
            }
            
            .hero {
                padding: 2rem;
            }
            
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .section-title h2 {
                font-size: 1.5rem;
            }
            
            .admin-header {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }
        }

        /* تأثيرات للعناصر */
        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .user-pending-order {
            background: #fffbf0;
            border: 2px solid #fef3c7;
            border-radius: 10px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .user-pending-order h3 {
            color: #d97706;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    </style>
</head>
<body>
    <!-- رأس الصفحة -->
    <header>
        <div class="header-container">
            <div class="logo">
                <i class="fas fa-shopping-basket"></i>
                <span>سوبر ماركت</span>
            </div>
            <div class="search-cart-container">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" id="search-input" placeholder="ابحث عن منتج...">
                </div>
                <div class="cart-icon" id="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count" id="cart-count">0</span>
                </div>
            </div>
        </div>
    </header>
    
    <!-- قسم التنقل -->
    <nav>
        <div class="nav-container">
            <div class="nav-items">
                <a href="#" class="nav-item" data-section="home">
                    <i class="fas fa-home"></i> الرئيسية
                </a>
                <a href="#" class="nav-item admin-only" data-section="orders" style="display: none;">
                    <i class="fas fa-clipboard-list"></i> إدارة الطلبات
                </a>
            </div>
            <div class="user-actions">
                <div class="user-info" id="user-info" style="display: none;">
                    <i class="fas fa-user"></i>
                    <span id="username-display"></span>
                </div>
                <button class="btn btn-outline" id="login-btn">
                    <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                </button>
                <button class="btn btn-secondary" id="logout-btn" style="display: none;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        </div>
    </nav>
    
    <!-- المحتوى الرئيسي -->
    <main>
        <!-- قسم التنبيهات -->
        <div class="alert" id="alert"></div>
        
        <!-- الصفحة الرئيسية -->
        <section id="home-section">
            <!-- قسم البطل -->
            <div class="hero">
                <div class="hero-content">
                    <h1>تسوق بسهولة من سوبر ماركتنا</h1>
                    <p>اكتشف تشكيلتنا الواسعة من المنتجات الطازجة والعروض المميزة. تسوق الآن واحصل على توصيل سريع إلى باب منزلك!</p>
                    <button class="btn btn-primary" id="start-shopping-btn">
                        <i class="fas fa-shopping-bag"></i> ابدأ التسوق
                    </button>
                </div>
                <div class="hero-image">
                    <i class="fas fa-shopping-basket pulse"></i>
                </div>
            </div>
            
            <!-- تنبيه إذا كان هناك طلب قيد الانتظار -->
            <div class="user-pending-order" id="pending-order-alert" style="display: none;">
                <h3><i class="fas fa-exclamation-triangle"></i> لديك طلب قيد الانتظار</h3>
                <p>لا يمكنك تقديم طلب جديد حتى يتم توصيل طلبك الحالي. سنقوم بالاتصال بك قريباً!</p>
            </div>
            
            <div class="section-title">
                <i class="fas fa-tags"></i>
                <h2>منتجاتنا المميزة</h2>
            </div>
            
            <!-- فئات المنتجات -->
            <div class="categories">
                <button class="category-btn active" data-category="all">
                    <i class="fas fa-th-large"></i> الكل
                </button>
                <button class="category-btn" data-category="fruits">
                    <i class="fas fa-apple-alt"></i> فواكه
                </button>
                <button class="category-btn" data-category="vegetables">
                    <i class="fas fa-carrot"></i> خضروات
                </button>
                <button class="category-btn" data-category="dairy">
                    <i class="fas fa-cheese"></i> منتجات ألبان
                </button>
                <button class="category-btn" data-category="meat">
                    <i class="fas fa-drumstick-bite"></i> لحوم
                </button>
                <button class="category-btn" data-category="beverages">
                    <i class="fas fa-wine-bottle"></i> مشروبات
                </button>
            </div>
            
            <!-- عرض المنتجات -->
            <div class="products-grid" id="products-container">
                <!-- سيتم ملء هذا القسم بالمنتجات عبر JavaScript -->
            </div>
            
            <!-- نموذج الطلب -->
            <div class="order-form" id="order-form">
                <div class="section-title">
                    <i class="fas fa-clipboard-check"></i>
                    <h2>إتمام الطلب</h2>
                </div>
                <form id="checkout-form">
                    <div class="form-group">
                        <label for="phone"><i class="fas fa-phone"></i> رقم الهاتف *</label>
                        <input type="tel" id="phone" required placeholder="أدخل رقم هاتفك">
                    </div>
                    <div class="form-group">
                        <label for="address"><i class="fas fa-map-marker-alt"></i> العنوان (اختياري)</label>
                        <input type="text" id="address" placeholder="أدخل عنوانك">
                    </div>
                    <div class="form-group">
                        <label for="notes"><i class="fas fa-sticky-note"></i> ملاحظات (اختياري)</label>
                        <input type="text" id="notes" placeholder="ملاحظات إضافية">
                    </div>
                    <button type="submit" class="submit-order">
                        <i class="fas fa-paper-plane"></i> تأكيد الطلب
                    </button>
                </form>
            </div>
        </section>
        
        <!-- صفحة إدارة الطلبات -->
        <section id="orders-section" class="orders-section">
            <div class="admin-panel">
                <div class="admin-header">
                    <div class="section-title">
                        <i class="fas fa-clipboard-list"></i>
                        <h2>إدارة الطلبات</h2>
                    </div>
                    <div class="user-info">
                        <i class="fas fa-user-shield"></i>
                        <span>وضع المسؤول</span>
                    </div>
                </div>
                <table class="orders-table">
                    <thead>
                        <tr>
                            <th>رقم الطلب</th>
                            <th>رقم الهاتف</th>
                            <th>المنتجات</th>
                            <th>المجموع</th>
                            <th>الحالة</th>
                            <th>التاريخ</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody id="orders-table-body">
                        <!-- سيتم ملء هذا القسم بالطلبات عبر JavaScript -->
                    </tbody>
                </table>
            </div>
        </section>
    </main>
    
    <!-- سلة التسوق -->
    <div class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header">
            <h2><i class="fas fa-shopping-cart"></i> سلة التسوق</h2>
            <button class="close-cart" id="close-cart">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cart-items">
            <!-- سيتم ملء هذا القسم بالمنتجات المضافة عبر JavaScript -->
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>المجموع:</span>
                <span id="cart-total">0.00 ر.س</span>
            </div>
            <button class="checkout-btn" id="checkout-btn">
                <i class="fas fa-credit-card"></i> إتمام الطلب
            </button>
        </div>
    </div>
    
    <!-- نموذج تسجيل الدخول -->
    <div class="login-modal" id="login-modal">
        <div class="login-form">
            <h2><i class="fas fa-lock"></i> تسجيل الدخول</h2>
            <form id="admin-login-form">
                <div class="form-group">
                    <label for="admin-username">اسم المستخدم</label>
                    <input type="text" id="admin-username" required placeholder="أدخل اسم المستخدم">
                </div>
                <div class="form-group">
                    <label for="admin-password">كلمة المرور</label>
                    <input type="password" id="admin-password" required placeholder="أدخل كلمة المرور">
                </div>
                <button type="submit" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i> دخول
                </button>
            </form>
            <div class="login-error" id="login-error">اسم المستخدم أو كلمة المرور غير صحيحة!</div>
        </div>
    </div>
    
    <!-- طبقة التعتيم -->
    <div class="overlay" id="overlay"></div>

    <script>
        // بيانات المنتجات مع وصف تفصيلي
        const products = [
            { id: 1, name: "تفاح أحمر", price: 15.00, category: "fruits", image: "🍎", description: "تفاح طازج ومقرمش، مثالي للوجبات الخفيفة الصحية" },
            { id: 2, name: "موز", price: 12.00, category: "fruits", image: "🍌", description: "موز ناضج وحلو، غني بالبوتاسيوم والطاقة" },
            { id: 3, name: "برتقال", price: 10.00, category: "fruits", image: "🍊", description: "برتقال عصيري غني بفيتامين سي، طازج من المزرعة" },
            { id: 4, name: "طماطم", price: 8.00, category: "vegetables", image: "🍅", description: "طماطم حمراء ناضجة، مثالية للسلطات والطبخ" },
            { id: 5, name: "خيار", price: 6.00, category: "vegetables", image: "🥒", description: "خيار طازج ومقرمش، مثالي للسلطات والعصائر" },
            { id: 6, name: "جزر", price: 7.00, category: "vegetables", image: "🥕", description: "جزر حلو ومقرمش، غني بفيتامين أ ومضادات الأكسدة" },
            { id: 7, name: "حليب طازج", price: 18.00, category: "dairy", image: "🥛", description: "حليب طازج كامل الدسم، غني بالكالسيوم والبروتين" },
            { id: 8, name: "جبنة شيدر", price: 25.00, category: "dairy", image: "🧀", description: "جبنة شيدر لذيذة، مثالية للسندويشات والطبخ" },
            { id: 9, name: "زبادي طبيعي", price: 5.00, category: "dairy", image: "🍶", description: "زبادي كريمي طبيعي، غني بالبروبيوتيك والبروتين" },
            { id: 10, name: "لحم بقري", price: 80.00, category: "meat", image: "🥩", description: "لحم بقري عالي الجودة، طازج ومقطع حسب الطلب" },
            { id: 11, name: "دجاج", price: 35.00, category: "meat", image: "🍗", description: "دجاج طازج من مزارع محلية، مثالي للشوي والطبخ" },
            { id: 12, name: "ماء معدني", price: 3.00, category: "beverages", image: "💧", description: "ماء معدني نقي، معبأ في زجاجات صديقة للبيئة" },
            { id: 13, name: "عصير برتقال", price: 12.00, category: "beverages", image: "🧃", description: "عصير برتقال طبيعي 100٪، بدون إضافات أو سكريات" },
            { id: 14, name: "قهوة عربية", price: 20.00, category: "beverages", image: "☕", description: "قهوة عربية أصيلة، محمصة حديثاً وذات نكهة غنية" }
        ];

        // بيانات المسؤول
        const adminCredentials = {
            username: "admin",
            password: "1234"
        };

        // بيانات الطلبات (لتخزين محلي)
        let orders = JSON.parse(localStorage.getItem('supermarketOrders')) || [];
        
        // بيانات المستخدم الحالي
        let currentUser = JSON.parse(localStorage.getItem('supermarketCurrentUser')) || null;
        let isAdmin = false;

        // عناصر DOM
        const productsContainer = document.getElementById('products-container');
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart = document.getElementById('close-cart');
        const overlay = document.getElementById('overlay');
        const checkoutBtn = document.getElementById('checkout-btn');
        const orderForm = document.getElementById('order-form');
        const checkoutForm = document.getElementById('checkout-form');
        const searchInput = document.getElementById('search-input');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const homeSection = document.getElementById('home-section');
        const ordersSection = document.getElementById('orders-section');
        const navItems = document.querySelectorAll('.nav-item');
        const ordersTableBody = document.getElementById('orders-table-body');
        const alertDiv = document.getElementById('alert');
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const userInfo = document.getElementById('user-info');
        const usernameDisplay = document.getElementById('username-display');
        const loginModal = document.getElementById('login-modal');
        const adminLoginForm = document.getElementById('admin-login-form');
        const loginError = document.getElementById('login-error');
        const adminOnlyElements = document.querySelectorAll('.admin-only');
        const pendingOrderAlert = document.getElementById('pending-order-alert');
        const startShoppingBtn = document.getElementById('start-shopping-btn');

        // سلة التسوق
        let cart = JSON.parse(localStorage.getItem('supermarketCart')) || [];

        // تهيئة التطبيق
        function init() {
            // التحقق من تسجيل الدخول التلقائي
            checkAutoLogin();
            
            displayProducts(products);
            updateCart();
            updateUI();
            
            // أحداث المستخدم
            cartIcon.addEventListener('click', openCart);
            closeCart.addEventListener('click', closeCartSidebar);
            overlay.addEventListener('click', closeCartSidebar);
            checkoutBtn.addEventListener('click', showOrderForm);
            checkoutForm.addEventListener('submit', submitOrder);
            searchInput.addEventListener('input', searchProducts);
            loginBtn.addEventListener('click', showLoginModal);
            logoutBtn.addEventListener('click', handleLogout);
            adminLoginForm.addEventListener('submit', handleAdminLogin);
            startShoppingBtn.addEventListener('click', scrollToProducts);
            
            // أحداث التنقل
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const section = item.getAttribute('data-section');
                    
                    if (section === 'orders' && !isAdmin) {
                        showLoginModal();
                    } else {
                        showSection(section);
                    }
                });
            });
            
            // أحداث الفئات
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterProductsByCategory(btn.getAttribute('data-category'));
                });
            });
        }

        // التحقق من تسجيل الدخول التلقائي
        function checkAutoLogin() {
            // تسجيل الدخول التلقائي كعميل برقم هاتف عشوائي
            if (!currentUser) {
                const randomPhone = '05' + Math.floor(10000000 + Math.random() * 90000000);
                currentUser = {
                    phone: randomPhone,
                    type: 'customer',
                    hasPendingOrder: false
                };
                localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
            }
            
            // تحديث حالة الطلب المعلق للمستخدم
            updateUserOrderStatus();
            updateUI();
        }

        // تحديث حالة طلب المستخدم
        function updateUserOrderStatus() {
            if (currentUser && currentUser.type === 'customer') {
                const pendingOrder = orders.find(order => 
                    order.phone === currentUser.phone && order.status === 'pending'
                );
                currentUser.hasPendingOrder = !!pendingOrder;
                localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
            }
        }

        // تحديث واجهة المستخدم بناءً على حالة الدخول
        function updateUI() {
            if (isAdmin) {
                // وضع المسؤول
                loginBtn.style.display = 'none';
                logoutBtn.style.display = 'flex';
                userInfo.style.display = 'flex';
                usernameDisplay.textContent = 'المسؤول';
                
                // إظهار عناصر المسؤول فقط
                adminOnlyElements.forEach(el => {
                    el.style.display = 'flex';
                });
                
                // تعطيل إضافة المنتجات للسلة للمسؤول
                document.querySelectorAll('.add-to-cart').forEach(btn => {
                    btn.disabled = true;
                });
                checkoutBtn.disabled = true;
                
            } else {
                // وضع العميل
                loginBtn.style.display = 'flex';
                logoutBtn.style.display = 'none';
                userInfo.style.display = 'flex';
                usernameDisplay.textContent = `عميل (${currentUser.phone})`;
                
                // إخفاء عناصر المسؤول فقط
                adminOnlyElements.forEach(el => {
                    el.style.display = 'none';
                });
                
                // التحقق من وجود طلب معلق
                if (currentUser.hasPendingOrder) {
                    pendingOrderAlert.style.display = 'block';
                    document.querySelectorAll('.add-to-cart').forEach(btn => {
                        btn.disabled = true;
                    });
                    checkoutBtn.disabled = true;
                } else {
                    pendingOrderAlert.style.display = 'none';
                    document.querySelectorAll('.add-to-cart').forEach(btn => {
                        btn.disabled = false;
                    });
                    checkoutBtn.disabled = cart.length === 0;
                }
            }
        }

        // عرض نموذج تسجيل الدخول
        function showLoginModal() {
            loginModal.classList.add('active');
            overlay.classList.add('active');
            document.getElementById('admin-username').focus();
        }

        // إخفاء نموذج تسجيل الدخول
        function hideLoginModal() {
            loginModal.classList.remove('active');
            overlay.classList.remove('active');
            loginError.style.display = 'none';
            adminLoginForm.reset();
        }

        // معالجة تسجيل الدخول
        function handleAdminLogin(e) {
            e.preventDefault();
            
            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
            
            if (username === adminCredentials.username && password === adminCredentials.password) {
                // تسجيل الدخول ناجح
                isAdmin = true;
                currentUser = {
                    username: username,
                    type: 'admin'
                };
                localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
                hideLoginModal();
                showSection('orders');
                updateUI();
                showAlert('تم تسجيل الدخول كمسؤول بنجاح!', 'success');
            } else {
                // تسجيل الدخول فاشل
                loginError.style.display = 'block';
            }
        }

        // معالجة تسجيل الخروج
        function handleLogout() {
            isAdmin = false;
            currentUser = {
                phone: '05' + Math.floor(10000000 + Math.random() * 90000000),
                type: 'customer',
                hasPendingOrder: false
            };
            localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
            updateUserOrderStatus();
            showSection('home');
            updateUI();
            showAlert('تم تسجيل الخروج والعودة كعميل', 'success');
        }

        // التمرير إلى قسم المنتجات
        function scrollToProducts() {
            document.querySelector('.categories').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // عرض المنتجات
        function displayProducts(productsToShow) {
            productsContainer.innerHTML = '';
            
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card fade-in';
                productCard.innerHTML = `
                    <div class="product-badge">جديد</div>
                    <div class="product-image">${product.image}</div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-price">${product.price.toFixed(2)} ر.س</div>
                        <button class="add-to-cart" data-id="${product.id}" ${isAdmin || currentUser.hasPendingOrder ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i> إضافة إلى السلة
                        </button>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
            
            // إضافة أحداث لأزرار إضافة إلى السلة
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    if (!isAdmin && !currentUser.hasPendingOrder) {
                        const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
                        addToCart(productId);
                    }
                });
            });
        }

        // إضافة منتج إلى السلة
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCart();
            showAlert(`تم إضافة ${product.name} إلى السلة`, 'success');
            
            // تأثير اهتزاز للسلة
            cartIcon.classList.add('pulse');
            setTimeout(() => {
                cartIcon.classList.remove('pulse');
            }, 1000);
        }

        // تحديث السلة
        function updateCart() {
            // حفظ السلة في التخزين المحلي
            localStorage.setItem('supermarketCart', JSON.stringify(cart));
            
            // تحديث عدد العناصر
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // تحديث العناصر في السلة
            cartItems.innerHTML = '';
            let total = 0;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--text-light);">
                        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>سلة التسوق فارغة</p>
                    </div>
                `;
                checkoutBtn.disabled = true;
            } else {
                checkoutBtn.disabled = isAdmin || currentUser.hasPendingOrder;
                
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-image">${item.image}</div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${item.price.toFixed(2)} ر.س</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> إزالة
                            </button>
                        </div>
                    `;
                    cartItems.appendChild(cartItem);
                });
            }
            
            // تحديث المجموع
            cartTotal.textContent = `${total.toFixed(2)} ر.س`;
            
            // إضافة الأحداث لأزرار الكمية والإزالة
            document.querySelectorAll('.decrease').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.getAttribute('data-id'));
                    updateQuantity(id, -1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.getAttribute('data-id'));
                    updateQuantity(id, 1);
                });
            });
            
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const id = parseInt(e.target.getAttribute('data-id'));
                    const newQuantity = parseInt(e.target.value);
                    if (newQuantity > 0) {
                        setQuantity(id, newQuantity);
                    } else {
                        removeFromCart(id);
                    }
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.getAttribute('data-id'));
                    removeFromCart(id);
                });
            });
        }

        // تحديث كمية المنتج
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity < 1) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // تعيين كمية محددة للمنتج
        function setQuantity(productId, quantity) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                updateCart();
            }
        }

        // إزالة منتج من السلة
        function removeFromCart(productId) {
            const product = products.find(p => p.id === productId);
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showAlert(`تم إزالة ${product.name} من السلة`, 'success');
        }

        // فتح سلة التسوق
        function openCart() {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // إغلاق سلة التسوق
        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // عرض نموذج الطلب
        function showOrderForm() {
            if (cart.length === 0) {
                showAlert('السلة فارغة. أضف منتجات أولاً.', 'error');
                return;
            }
            
            if (isAdmin) {
                showAlert('المسؤول لا يمكنه تقديم طلبات.', 'error');
                return;
            }
            
            if (currentUser.hasPendingOrder) {
                showAlert('لديك طلب قيد الانتظار. لا يمكنك تقديم طلب جديد.', 'error');
                return;
            }
            
            orderForm.style.display = 'block';
            closeCartSidebar();
            
            // التمرير إلى نموذج الطلب
            orderForm.scrollIntoView({ behavior: 'smooth' });
        }

        // تقديم الطلب
        function submitOrder(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const notes = document.getElementById('notes').value;
            
            // التحقق من رقم الهاتف
            if (!phone) {
                showAlert('رقم الهاتف مطلوب', 'error');
                return;
            }
            
            // إنشاء طلب جديد
            const newOrder = {
                id: Date.now(),
                phone: phone,
                address: address,
                notes: notes,
                items: [...cart],
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                status: 'pending',
                date: new Date().toLocaleString('ar-SA')
            };
            
            // إضافة الطلب إلى القائمة
            orders.unshift(newOrder);
            localStorage.setItem('supermarketOrders', JSON.stringify(orders));
            
            // تحديث حالة المستخدم
            currentUser.phone = phone;
            currentUser.hasPendingOrder = true;
            localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
            
            // تفريغ السلة
            cart = [];
            updateCart();
            
            // إخفاء النموذج وإظهار رسالة نجاح
            orderForm.style.display = 'none';
            checkoutForm.reset();
            showAlert('تم تقديم طلبك بنجاح! سنتصل بك قريباً.', 'success');
            
            // تحديث واجهة المستخدم
            updateUI();
            
            // تحديث قائمة الطلبات إذا كانت مفتوحة
            if (isAdmin) {
                displayOrders();
            }
        }

        // البحث عن المنتجات
        function searchProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        }

        // تصفية المنتجات حسب الفئة
        function filterProductsByCategory(category) {
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => 
                    product.category === category
                );
                displayProducts(filteredProducts);
            }
        }

        // عرض القسم المطلوب
        function showSection(section) {
            if (section === 'home') {
                homeSection.style.display = 'block';
                ordersSection.style.display = 'none';
            } else if (section === 'orders') {
                if (isAdmin) {
                    homeSection.style.display = 'none';
                    ordersSection.style.display = 'block';
                    displayOrders();
                } else {
                    showLoginModal();
                }
            }
        }

        // عرض الطلبات
        function displayOrders() {
            ordersTableBody.innerHTML = '';
            
            if (orders.length === 0) {
                ordersTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">لا توجد طلبات</td></tr>';
                return;
            }
            
            orders.forEach(order => {
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>#${order.id}</td>
                    <td>${order.phone}</td>
                    <td>${order.items.map(item => `${item.name} (${item.quantity})`).join(', ')}</td>
                    <td>${order.total.toFixed(2)} ر.س</td>
                    <td><span class="order-status status-${order.status}">${order.status === 'pending' ? 'قيد الانتظار' : 'مكتمل'}</span></td>
                    <td>${order.date}</td>
                    <td>
                        ${order.status === 'pending' ? 
                            `<button class="action-btn complete-btn" data-id="${order.id}">تم التوصيل</button>` : 
                            '<span>مكتمل</span>'
                        }
                    </td>
                `;
                ordersTableBody.appendChild(orderRow);
            });
            
            // إضافة أحداث لأزرار تغيير الحالة
            document.querySelectorAll('.complete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const orderId = parseInt(e.target.getAttribute('data-id'));
                    completeOrder(orderId);
                });
            });
        }

        // إكمال الطلب (تم التوصيل)
        function completeOrder(orderId) {
            const order = orders.find(o => o.id === orderId);
            if (order) {
                order.status = 'completed';
                localStorage.setItem('supermarketOrders', JSON.stringify(orders));
                
                // تحديث حالة المستخدم إذا كان له طلب معلق
                if (currentUser && currentUser.phone === order.phone) {
                    currentUser.hasPendingOrder = false;
                    localStorage.setItem('supermarketCurrentUser', JSON.stringify(currentUser));
                }
                
                displayOrders();
                showAlert('تم تحديث حالة الطلب إلى "مكتمل"', 'success');
            }
        }

        // عرض التنبيهات
        function showAlert(message, type) {
            alertDiv.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
                <span>${message}</span>
            `;
            alertDiv.className = `alert alert-${type} fade-in`;
            alertDiv.style.display = 'flex';
            
            setTimeout(() => {
                alertDiv.style.display = 'none';
            }, 3000);
        }

        // تهيئة التطبيق عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
