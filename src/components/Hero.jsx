import React from 'react';

Hero.defaultProps={
    hero:'defaultHero'
}

function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

export default Hero;
