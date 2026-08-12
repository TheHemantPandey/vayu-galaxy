export const aboutCss = `body {
    margin: 0;
    font-family: var(--font-space-grotesk), sans-serif;
    background-color: #f4f4f4;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000000; /* Same as mobile-nav */
    z-index: 1000; /* Ensures it's always above content */
    padding: 10px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-left: auto;
    padding: 0 50px;
}
.nav-links li {
    display: inline;
}
.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    padding-right: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.nav-links a:hover{
    font-weight: bold;
}
.logo {
    font-size: 26px;
    font-weight: bold;
    font-family: var(--font-space-grotesk), sans-serif;
    text-transform: uppercase;
}
.menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 1100; /* Ensure it's above other elements */
    color: white;
}

.mobile-nav {
    position: fixed;
    top: 0;
    right: -100%; /* Ensure it's fully hidden initially */
    width: 100vw; /* Make it full width */
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95); /* Semi-transparent black */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease-in-out;
    z-index: 1000; /* Ensure it's above content */
}

.mobile-nav.active {
    right: 0; /* Make it fully visible when active */
}

.mobile-nav a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin: 15px 0;
}

/* Adjustments for mobile */
@media screen and (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .menu-icon {
        display: block;
    }
}

/* For desktop, hide the mobile nav */
@media screen and (min-width: 769px) {
    .nav-links {
        display: flex;
    }
    
    .mobile-nav {
        display: none;
    }
}


.red-section {
    position: relative;
    height: 40vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-image: url('assets/aboutheader.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


/* Content on top of the video */
.content {
    position: relative;
    z-index: 2;
}

/* Futuristic Font & Styling */
.content h1 {
    font-family: var(--font-space-grotesk), sans-serif;
    font-size: 55px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
    padding-top: 60px;
}



.about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10%;
    background-color: black;
}

.about-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
}

.about-content {
    flex: 1;
    text-align: left;
}

.about-content h2 {
    font-size: 28px;
    margin-bottom: 10px;
    font-family: var(--font-space-grotesk), sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
}

.about-content p {
    font-size: 16px;
    color: #666;
    font-family: var(--font-space-grotesk), sans-serif;
    text-align: justify;
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.about-image img {
    width: 100%;
    max-width: 550px; /* Adjust size */
    height: auto;
    border-radius: 20px;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
    .about-container {
        flex-direction: column;
        text-align: center;
    }

    .about-image {
        justify-content: center;
    }
}

.founder-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background: black;
}

.founder-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.founder-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.founder-info {
    flex: 1;
    padding: 20px;
    background: white;
    border-radius: 8px;
}

.founder-info h2 {
    font-family: var(--font-space-grotesk), sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    
}

.founder-info h4 {
    font-family: var(--font-space-grotesk), sans-serif;
    font-weight: 600;
    margin-top: -10px;
    color: rgb(42, 28, 90);
}

.social-icons {
    margin-top: 20px;
}

.social-icons a {
    font-size: 20px;
    margin-right: 10px;
    color: gray;
    transition: 0.3s;
}

.social-icons a:hover {
    color: rgb(42, 28, 90);
}

@media screen and (max-width: 768px) {
    .founder-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .founder-image {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .founder-image img {
        width: 300px; /* Adjust size if needed */
        height: 300px;
       
        object-fit: cover;
    }

    .founder-info {
        width: 90%;
        padding: 20px;
    }

    .social-icons {
        justify-content: center;
    }
}

.bottom{
    background-color: rgb(29, 29, 29);
}

.footer {
    max-width: 1600px;
    margin: auto;
    padding: 40px;
}
.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    border-bottom: 1px solid rgb(88, 88, 88);
    padding-bottom: 20px;
}
.footer h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: rgb(255, 255, 255);
}
.footer ul {
    list-style: none;
    padding: 0;
    letter-spacing: 1.5PX;
    line-height: 20PX;
    
    
}
.footer ul li a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 16px;
    
}
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}
.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons .icon {
    font-size: 20px;
    color: #ffffff; /* Change to your preferred color */
    text-decoration: none;
    transition: 0.3s;
}

.icon:hover {
    color:rgb(18, 12, 46);
}

/* copyright Section */
.copyright {
    height: 6vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.copyright p {
    font-family: var(--font-space-grotesk), sans-serif;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;

}

/* tech Section */
.tech {
    height: 10vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.tech h1 {
    font-family: var(--font-space-grotesk), sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 6px;
    

}

/* box */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
    min-height: auto;
    background-color: white;
}

.box {
    position: relative;
    height: 600px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out;
}



@media (min-width:1000px) {
    .box:hover {
        transform: scale(1.05);
        z-index: 2; /* Ensures the hovered box stays on top */
    }
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    font-size: 18px;
    align-items: center;
    text-align: center;
}

.box:hover .overlay {
    opacity: 1;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        width: 100%;
    }
}`;
