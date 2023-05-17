

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-bl from-gray-700 to-black ">
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
        </div>  
    </footer>
  )
}
