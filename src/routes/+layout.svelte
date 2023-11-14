<nav>
    <img src="garagevrLogo.png" alt="company logo">
    <div>
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
    </div>
</nav>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
    
    :global(html) {
        font-size: 1rem;
        background-color: rgb(246, 246, 246);
    }

    :global(*) {
        color: rgb(246, 246, 246);
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
    }

    :global(nav) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
        padding: 0 2rem;
        background-color: rgb(28, 28, 28);
    }

    :global(nav a) {
        margin-left: 2rem;
        text-decoration: none;
        padding: 0.65rem;
        font-weight: bolder;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
        border-radius: 30px;
    }

    :global(nav a:hover) {
        background-color:  rgb(20, 20, 20);
    }

    :global(nav img) {
        height: 70%;
        width: auto;
    }

    @media (max-width: 768px) {
        :global(html) {
        font-size: 16px; /* Adjust font size for smaller screens */
    }
        :global(nav a) {
            margin: 0 0.2rem;
        }

        :global(nav) {
            padding: 0 0.5rem;
        }
    }
</style>

<slot />
