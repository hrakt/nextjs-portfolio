const Header = () => {
    return (
        <div class="header">
            <img src="/img/favicon.png" alt="Logo" class="logo" />>
            <nav class="navbar">
                <div class="navbar__item">
                    <a href="#about" class="navbar__item-link">
                        About Me
                    </a>
                </div>
                <div class="navbar__item">
                    <a href="#portfolio" class="navbar__item-link">
                        Work
                    </a>
                </div>
                <div class="navbar__item">
                    <a href="#contact" class="navbar__item-link">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};
export default Header;
