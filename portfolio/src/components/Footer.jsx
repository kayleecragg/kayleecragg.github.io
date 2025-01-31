export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/kayleecragg" target="_blank" rel="noreferrer">
          {/* <img src="/images/github.svg" alt="GitHub" /> */}
          <img src={process.env.PUBLIC_URL + "/images/github.svg"}/>

        </a>
        <a href="https://www.linkedin.com/in/kayleecragg/" target="_blank" rel="noreferrer">          {/* <img src="/images/github.svg" alt="GitHub" /> */}
          {/* <img src="/images/linkedin.svg" alt="linkedin" /> */}
          <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"}/>
        </a>
      </div>
    </footer>
  );
}