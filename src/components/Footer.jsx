

export const Footer = () => {
  return (    
    <footer className="w-full bg-gradient-to-bl from-gray-700 to-black mt-auto">
      <hr />
        <div className=" flex justify-center py-5 gap-5 content-center">            
            <a href="https://github.com/icplana" target="_blank">
              <img src="./assets/images/footerGithub2.png" width="50" alt="Github" />
            </a>

            <a href="https://www.linkedin.com/in/ignasicasanovasplana/" target="_blank">
              <img src="./assets/images/footerLinkedin.svg" width="55" alt="Linkedin" />     
            </a>

            <a href="https://www.wa.link/blnbrl" target="_blank">
              <img src="./assets/images/FooterWhatsapp.png" width="55" alt="WhatsApp" />     
            </a>

            <a href="mailto:ignasi.casanovasplana@gmail.com" target="_blank">
              <img src="./assets/images/FooterMail.png" width="55" alt="Mail" />     
            </a>

            <a href="./assets/CV - Ignasi Casanovas Plana.pdf" download className="flex max-[330px]:hidden">
              <img src="./assets/images/FooterCV.svg" width="55" alt="CV" />
                  <p className="text-white max-[460px]:hidden max-[460px]:h-0" >CV</p>
            </a>

            <a href="https://github.com/icplana/MyFirstPortfolio" target="_blank" alt='Portfolio code' className="max-[330px]:hidden">
              <svg
                className="mx-auto max-[460px]:self-center" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="40" 
                height="40"
                alt='jaja'
              >
                <path d="M23 11.9998L15.9289 19.0708L14.5147 17.6566L20.1716 11.9998L14.5147 6.34292L15.9289 4.92871L23 11.9998ZM3.82843 11.9998L9.48528 17.6566L8.07107 19.0708L1 11.9998L8.07107 4.92871L9.48528 6.34292L3.82843 11.9998Z" fill="rgba(255,255,255,1)">
                </path>
              </svg>
              <p className="text-white text-xs max-[460px]:hidden">Portfolio</p>
            </a>
        </div>  
    </footer>    
  )
}
