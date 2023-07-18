

export const Footer = () => {
  return (    
    <footer className="w-full bg-gradient-to-bl from-gray-700 to-black mt-auto">
      <hr />
        <div className=" flex justify-center py-5 gap-5 content-center">            
            <a href="https://github.com/icplana" target="_blank">
              <img src="./assets/images/footerGithub2.png" width="50" alt="" />
            </a>

            <a href="https://www.linkedin.com/in/ignasicasanovasplana/" target="_blank">
              <img src="./assets/images/footerLinkedin.svg" width="55" alt="" />     
            </a>

            <a href="https://www.wa.link/blnbrl" target="_blank">
              <img src="./assets/images/FooterWhatsapp.png" width="55" alt="" />     
            </a>

            <a href="mailto:ignasi.casanovasplana@gmail.com" target="_blank">
              <img src="./assets/images/FooterMail.png" width="55" alt="" />     
            </a>

            <a href="./assets/CV - Ignasi Casanovas Plana.pdf" download className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5ZM7.52746 17H16.4725C16.2238 14.75 14.3163 13 12 13C9.68372 13 7.77619 14.75 7.52746 17Z" fill="rgba(255,255,255,1)">
                </path>
              </svg>
                  <p className="text-white" >CV</p>
            </a>

            <a href="https://github.com/icplana/MyFirstPortfolio" target="_blank" alt='tst' >
              <svg
                className="mx-auto" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="40" 
                height="40"
                alt='jaja'
              >
                <path d="M23 11.9998L15.9289 19.0708L14.5147 17.6566L20.1716 11.9998L14.5147 6.34292L15.9289 4.92871L23 11.9998ZM3.82843 11.9998L9.48528 17.6566L8.07107 19.0708L1 11.9998L8.07107 4.92871L9.48528 6.34292L3.82843 11.9998Z" fill="rgba(255,255,255,1)">
                </path>
              </svg>
              <p className="text-white text-xs">Portfolio</p>
            </a>
        </div>  
    </footer>    
  )
}
