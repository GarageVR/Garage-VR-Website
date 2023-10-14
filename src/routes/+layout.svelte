<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>

<style>
    :global(html) {
        font-size: 24px;
        background-color: rgb(39, 39, 39);
    }

    :global(*) {
        color: rgb(255, 255, 255);
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
    }

    :global(nav) {
        display: flex;
        justify-content: flex-end; /* Align to the right */
        align-items: center; /* Center items vertically */
        height: 5rem; /* Set a fixed height for the navbar */
        padding: 0 2rem; /* Adjust padding */
        background-color: rgb(106, 106, 106);
        border-radius: 30px;
    }

    :global(nav a) {
        margin-left: 1.5rem;
        text-decoration: none;
        padding: 10px;
        background-color: rgba(255, 0, 0, .1)
    }

    :global(nav a:hover) {
        border-bottom: 2px solid white; /* Optional: Add an underline on hover */
    }
</style>

<slot />
