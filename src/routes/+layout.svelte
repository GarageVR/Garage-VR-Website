<nav>
    <a href="/">
        <img class="navbar-logo" src="garagevrLogo.png" alt="company logo" />
    </a>
    <div>
        <a class="navbar-link" href="/">HOME</a>
        <a class="navbar-link" href="/about">ABOUT</a>
        <a class="navbar-link" href="/contact">CONTACT</a>
    </div>
</nav>

<slot />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    :global(html) {
        font-size: 1rem;
        background-color: rgb(220, 220, 220);
    }

    :global(*) {
        color: rgb(28, 28, 28);
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
    }

    :global(nav) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
        padding: 1rem 2rem;
        background-color: rgb(28, 28, 28);
    }

    :global(nav div) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 5rem;
        padding: 0 2rem;
        border-radius: 30px;
    }

    :global(.navbar-link) {
        color: rgb(246, 246, 246);
        margin-left: 2rem;
        text-decoration: none;
        padding: 0.65rem;
        font-weight: bolder;
        font-size: 1.5rem;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
        border-radius: 30px;
    }

    :global(.navbar-link:hover) {
        background-color: rgb(70, 70, 70);
    }

    :global(.navbar-logo) {
        height: 4.5rem;
        width: auto;
    }

    @media (max-width: 768px) {
        :global(html) {
            font-size: 16px; /* Adjust font size for smaller screens */
        }

        :global(nav) {
            margin: 0;
            padding: 0;
        }

        :global(.navbar-logo) {
            margin-left: 1rem;
            height: 3rem;
        }

        :global(nav a) {
            margin: 0 0.2rem;
        }

        :global(.navbar-link) {
            margin-left: 0.5rem;
            padding: 0.2rem;
            font-size: 1.2rem;
        }
    }
</style>
