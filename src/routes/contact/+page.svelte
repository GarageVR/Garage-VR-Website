<title>GarageVR: Contact</title>

<div>
    <h1>Contact</h1>

    <h2>Reach out to us!</h2>

    <div class="contact-links">
        <a href="mailto:hey@garagevr.co" target="_blank">
            <img src="email.png" alt="Email icon" />
        </a>
        <a href="https://discord.com/invite/AWJCPS5HpP" target="_blank">
            <img src="discord.png" alt="Discord icon" />
        </a>
        <a href="https://www.youtube.com/@garageVR" target="_blank">
            <img src="youtube.png" alt="Youtube icon" />
        </a>
        <a href="https://twitter.com/garagevrstudio" target="_blank">
            <img src="twitter.png" alt="Twitter/X icon" />
        </a>
        <a href="https://www.instagram.com/garagevrstudio/" target="_blank">
            <img src="instagram.png" alt="Instagram icon" />
        </a>
        <a href="https://www.tiktok.com/@garagevrstudios" target="_blank">
            <img src="tiktok.png" alt="Tiktok icon" />
        </a>
    </div>
    <div class="iframe-container">
        <iframe
          title="Discord Widget"
          src="https://discord.com/widget?id=1159211624851325048&theme=dark"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
</div>

<style>
    div {
        margin: 0 3rem;
        padding: 0 1rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .contact-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 2rem;
    }

    .contact-links a {
        flex: 0 0 calc(33% - 1.5rem);
        margin: 0 0.75rem;
        margin-top: 2rem;
    }

    .contact-links img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .contact-links img:hover {
        transform: scale(1.2);
        box-shadow: 0.8rem 0.8rem 0.8rem rgba(0, 0, 0, 0.5);
    }

    .iframe-container {
  position: relative;
  overflow: hidden;
  width: 50%; /* Set to 50% of the viewport width */
  margin: 4rem auto 2rem auto; /* Center the iframe */
  padding-top: 75%; /* 4:3 aspect ratio for responsive iframe */
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

    @media (min-width: 800px) {
    /* Apply styles when the window width exceeds 800px */
    .contact-links a {
      max-width: 200px; /* Set the max-width as per your requirement */
    }
}
</style>
