// Automatically migrated from old_vayu_galaxy/proto.css
export const protoCss = `body {
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
.homesec{
    height: 100vh;
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
    z-index: 1;
    height: 110vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

@media (min-width: 768px) {
    .content h1 {
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 55px;
        font-weight: 700;
        letter-spacing: 2px;
        text-shadow: 8px 8px 15px rgba(0, 0, 0, 0.8);
        margin-top: -70%;
    }
    }

@media (max-width: 768px) {
    .red-section {
        position: relative;
        z-index: 1;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: left;
        justify-content: left;
        text-align: left;
        color: white;
        padding-left: 20px;
    }
    
}

/* Fullscreen Video */
.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

/* Content on top of the video */
.content {
    position: relative;
    z-index: 2;
}

/* Futuristic Font & Styling */
@media (min-width: 768px) {
.content h1 {
    font-family: var(--font-space-grotesk), sans-serif;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 8px 8px 15px rgba(0, 0, 0, 0.8);
    margin-top: -70%;
}
}
@media (max-width: 768px) {
    .content h1 {
        font-size: 42px;
        font-family: var(--font-space-grotesk), sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 8px 8px 15px rgba(0, 0, 0, 0.8);
    }
    
}

.content p {
    font-family: var(--font-space-grotesk), sans-serif;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 10px;
}

/* tech Section */
.tech {
    height: 20vh;
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
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;

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

/* box */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
    min-height: auto;
    background-color: black;
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
}

.about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 10%;
    background-color: rgb(255, 255, 255);
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
    font-size: 26px;
    margin-bottom: 10px;
    font-family: var(--font-space-grotesk), sans-serif;
    text-transform: uppercase;
    font-weight: 650;
    color: rgb(0, 0, 0);
    letter-spacing: 1.5px;
}

.about-content p {
    font-size: 16px;
    color: #000000;
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
    max-width: 60p0px; /* Adjust size */
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


.drone-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    background-color: rgb(0, 0, 0);
    height: 60vh;
}

@media screen and (max-width: 768px) {
    .drone-section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;
        background-color: rgb(0, 0, 0);
        height: 100vh;
    }
}

.drone-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    max-width: 1200px;
    width: 100%;
}

.drone-content {
    flex: 1;
    text-align: left;
}

.drone-content h2 {
    font-size: 28px;
    margin-bottom: 10px;
    font-family: var(--font-space-grotesk), sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
}

.drone-content p {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-family: var(--font-space-grotesk), sans-serif;
    text-align: justify;
}

.drone-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.drone-image img {
    width: 100%;
    max-width: 600px; /* Adjust size */
    height: auto;
    border-radius: 20px;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
    .drone-container {
        flex-direction: column;
        text-align: center;
    }

    .drone-image {
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

.map{
    align-items: center;
   height: auto;
   background-color: black;
}

.map-container img{
    width: 100%;
}

.risk-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 10%;
    background-color: white;
}

.risk-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
}

.risk-image {
    flex: 1;
    display: flex;
    justify-content: flex-start; /* Move image to the left */
}

.risk-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
}

.risk-content {
    flex: 1;
    text-align: left;
}

.risk-content h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-family: var(--font-space-grotesk), sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    
}

.risk-content p {
    font-size: 16px;
    color: #666;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
    .risk-container {
        flex-direction: column;
        text-align: center;
    }

    .risk-image {
        justify-content: center;
    }
}
.read-more {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #000000;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    transition: 0.3s;
}

.read-more:hover {
    background-color: rgb(18, 12, 46);
}
/* Centering the Section */
.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 70px;
    background: rgb(255, 255, 255);
}

@media screen and (max-width:786px) {
    .video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
    background: rgb(255, 255, 255);
}
    
}
/* Video Wrapper */
.video-wrapper {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(255, 0, 0, 0.2);
}

/* Responsive Video */
.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.video-section .container {
    border-radius: 20px;
}

.video-section .container .video-wrapper{
    border-radius: 20px;
}`;
