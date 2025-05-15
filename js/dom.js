let elHeader = document.createElement ("header")
document.body.appendChild(elHeader)
elHeader.className = "py-[22px]"
elHeader.innerHTML = `
    <div class="containers sm:flex sm:justify-between items-center block">
            <div class="flex justify-between ">
                <img src="./images/logo.svg" alt="photo">
                <img class="block sm:hidden" src="./images/menu.svg" alt="photo">
            </div>
            <nav class="sm:flex sm:gap-[30px] hidden">
                <a class="text-[14px] font-normal text-[rgba(149,151,165,1)] hover:text-[rgba(45,49,77,1)] duration-300" href="/">About</a>
                <a class="text-[14px] font-normal text-[rgba(149,151,165,1)] hover:text-[rgba(45,49,77,1)] duration-300" href="/">Contact</a>
                <a class="text-[14px] font-normal text-[rgba(149,151,165,1)] hover:text-[rgba(45,49,77,1)] duration-300" href="/">Blog</a>
                <a class="text-[14px] font-normal text-[rgba(149,151,165,1)] hover:text-[rgba(45,49,77,1)] duration-300" href="/">Careers</a>
            </nav>
            <button class="sm:flex font-medium hidden py-[8px] px-[35px] rounded-[22px]  header-btn text-white text-[14px] leading-[28px]">Request Invite</button>
        </div>
`
//Hero part
let elMain = document.createElement ("main")
document.body.appendChild(elMain)
let elHeroSection = document.createElement ("section")
elMain.appendChild (elHeroSection)

elHeroSection.innerHTML = `
            <div class="containers sm:flex sm:flex-row-reverse sm:items-center ">
                <div class="sm:justify-start flex justify-center ">
                    <img class="sm:hidden block" src="./images/phones-mobile-lg.png" alt="photo">
                    <img class="hidden sm:block ml-[50px]" src="./images/phones-mobile@2x.png" alt="photo">
                </div>
                <div class="max-w-[327px] sm:max-w-[447px] mx-auto mt-[40px] mx-[24px] pb-[88px]">
                    <h2 class="text-center text-[40px]  sm:text-[56px] mb-[24px] sm:leading-64px font-thin text-[rgba(45,49,77,1)]">Next generation
                    digital banking</h2>
                    <p class="text-center mb-[36px] text-[18px] leading-[28px] text-[rgba(149,151,165,1)]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                   <div class="flex justify-center">
                     <button class=" font-medium  py-[8px] px-[35px] rounded-[22px]  header-btn text-white text-[14px] leading-[28px]">Request Invite </button>
                   </div>
                </div>
            </div>
`

//Why choose Easybank 
let elEasybankSection = document.createElement("section")
elMain.appendChild(elEasybankSection)

elEasybankSection.innerHTML = `
<div class="containers">
            <div class="max-w-[327px] mb-[56px] sm:mb-[76px] mx-auto text-center sm:text-start sm:max-w-[635px] sm:mx-0">
              <h2 class="mb-[14px] font-thin text-[32px] text-[rgba(45,49,77,1)] ">Why choose Easybank?</h2>
              <p class=" font-normal text-[15px] leading-[25px] text-[rgba(149,151,165,1)] ">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div>
              <ul class="sm:flex sm:justify-between sm:mb-[94px]">
                <li class="mb-[32px] max-w-[327px] mx-auto text-center sm:text-start sm:max-w-[255px]">
                 <div class="sm:block flex justify-center mb-[24px]"><img src="./images/easybank-img1.svg" alt="photo"> </div>
                  <strong class="font-thin text-[20px] leading-[28px] text-[rgba(45,49,77,1)] mb-[16px]">Online Banking </strong>
                  <p class="font-normal text-[15px] leading-[25px] text-[rgba(149,151,165,1)]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </p>
                </li>
                 <li class="mb-[32px] max-w-[327px] mx-auto text-center sm:text-start sm:max-w-[255px]">
                 <div class="sm:block flex justify-center mb-[24px]"><img src="./images/easybank-img2.svg" alt="photo"> </div>
                  <strong class="font-thin text-[20px] leading-[28px] text-[rgba(45,49,77,1)] mb-[16px]"> Simple Budgeting</strong>
                  <p class="font-normal text-[15px] leading-[25px] text-[rgba(149,151,165,1)]">See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits. </p>
                </li>
                 <li class="mb-[32px] max-w-[327px] mx-auto text-center sm:text-start sm:max-w-[255px]">
                 <div class="sm:block flex justify-center mb-[24px]"><img src="./images/easybank-img3.svg" alt="photo"> </div>
                  <strong class="font-thin text-[20px] leading-[28px] text-[rgba(45,49,77,1)] mb-[16px]"> Fast Onboarding</strong>
                  <p class="font-normal text-[15px] leading-[25px] text-[rgba(149,151,165,1)]">We don’t do branches. Open your account in minutes online and start taking control of your finances right away. </p>
                </li>
                 <li class="mb-[32px] max-w-[327px] mx-auto text-center sm:text-start sm:max-w-[255px]">
                 <div class="sm:block flex justify-center mb-[24px]"><img src="./images/easybank-img4.svg" alt="photo"> </div>
                  <strong class="font-thin text-[20px] leading-[28px] text-[rgba(45,49,77,1)] mb-[16px]">Open API </strong>
                  <p class="font-normal text-[15px] leading-[25px] text-[rgba(149,151,165,1)]">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. </p>
                </li>
              </ul>
            </div>
          </div>
`
//Latest Articles
let elLatestSection = document.createElement("section")
elMain.appendChild(elLatestSection)

elLatestSection.innerHTML =`
<div class="containers">
              <h2 class="sm:mb-[40px] sm:text-start font-thin text-[32px] text-[rgba(45,49,77,1)] text-center mb-[31px]">Latest Articles</h2>
              <ul class="sm:flex sm:justify-between mb-[80px]">
                <li class="mb-[24px]">
                  <img class="mx-auto mb-[25px] rounded-[5px] sm:w-[255px]" src="./images/latest-img1.png" alt="photo">
                 <div class="sm:max-w-[207px] max-w-[265px] mx-auto">
                   <p class="font-normal text-[10px] leading-[18px] text-[rgba(149,151,165,1)] mb-[8px]">By Claire Robinson </p>
                  <p class="font-thin text-[rgba(45,49,77,1)] text-[16px] leading-[20px] mb-[8px]">Receive money in any currency with no fees  </p>
                  <p class="font-normal text-[13px] leading-[18px] text-[rgba(149,151,165,1)] mb-[24px]"> The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                 </div>
                </li>
                 <li class="mb-[24px] ">
                  <img class="mx-auto mb-[25px] rounded-[5px] sm:w-[255px]"   src="./images/latest-img2.png" alt="photo">
                 <div class="sm:max-w-[207px] max-w-[265px] mx-auto">
                   <p class="font-normal text-[10px] leading-[18px] text-[rgba(149,151,165,1)] mb-[8px]"> By Wilson Hutton</p>
                  <p class="font-thin text-[rgba(45,49,77,1)] text-[16px] leading-[20px] mb-[8px]"> Treat yourself without worrying about money </p>
                  <p class="font-normal text-[13px] leading-[18px] text-[rgba(149,151,165,1)] mb-[24px]">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
                 </div>
                </li>
                 <li class="mb-[24px]">
                  <img class="mx-auto mb-[25px] rounded-[5px] sm:w-[255px]" src="./images/latest-img3.png" alt="photo">
                 <div class="sm:max-w-[207px] max-w-[265px] mx-auto">
                   <p class="font-normal text-[10px] leading-[18px] text-[rgba(149,151,165,1)] mb-[8px]">By Wilson Hutton </p>
                  <p class="font-thin text-[rgba(45,49,77,1)] text-[16px] leading-[20px] mb-[8px]"> Take your Easybank card wherever you go </p>
                  <p class="font-normal text-[13px] leading-[18px] text-[rgba(149,151,165,1)] mb-[24px]"> We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                 </div>
                </li>
                 <li class="mb-[24px]">
                  <img class="mx-auto mb-[25px] rounded-[5px] sm:w-[255px]" src="./images/latest-img4.png" alt="photo">
                 <div class="sm:max-w-[207px] max-w-[265px] mx-auto">
                   <p class="font-normal text-[10px] leading-[18px] text-[rgba(149,151,165,1)] mb-[8px]">By Claire Robinson </p>
                  <p class="font-thin  text-[rgba(45,49,77,1)] text-[16px] leading-[20px] mb-[8px]"> Our invite-only Beta accounts are now live! </p>
                  <p class="font-normal text-[13px] leading-[18px] text-[rgba(149,151,165,1)] mb-[24px]">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... </p>
                 </div>
                </li>
              </ul>
            </div>
`

//Footer part
let elFooter = document.createElement("footer")
document.body.appendChild(elFooter)
elFooter.className = "bg-[rgba(45,49,77,1)]"
elFooter.innerHTML =`
 <div class="containers sm:flex sm:items-center">
  <div>
      <div class="flex justify-center pt-[40px] mb-[32px] ">
      <a href="#"><img src="\./images/footer-loho.svg" alt="photo"></a>
    </div>
    <div class="w-[185px] flex gap-[16px] mx-auto mb-[32px] sm:m-[40px] text-white hover:text-rgba(48,200,143,1)">
      <a  href="https://www.facebook.com" target="_blank">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="currentColor"/>
</svg>
</a>
<a href="https://www.youtube.com" target="_blank">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM16.441 16.892C14.339 17.036 9.657 17.036 7.558 16.892C5.282 16.736 5.017 15.622 5 12C5.017 8.371 5.285 7.264 7.558 7.108C9.657 6.964 14.34 6.964 16.441 7.108C18.718 7.264 18.982 8.378 19 12C18.982 15.629 18.715 16.736 16.441 16.892ZM14.917 11.996L10 9.658V14.342L14.917 11.996Z" fill="white"/>
</svg>
</a>
<a href="https://twitter.com" target="_blank">
 <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z" fill="white"/>
</svg>
</a>
<a href="https://www.pinterest.com" target="_blank">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z" fill="white"/>
</svg>
</a>
<a href="https://www.instagram.com" target="_blank">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z" fill="white"/>
</svg>
</a>
    </div>
  </div>
    <div class="mx-auto text-center sm:flex sm:gap-[70px] sm:text-start">
     <div> <p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px]  hover:text-[rgba(48,200,143,1)] duration-300"> About Us</p>
      <p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px] hover:text-[rgba(48,200,143,1)] duration-300 ">Contact</p>
      <p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px] hover:text-[rgba(48,200,143,1)] duration-300 ">Blog</p></div>
     <div><p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px] hover:text-[rgba(48,200,143,1)] duration-300 "> Careers</p>
      <p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px] "> Support</p>
      <p class="font-normal text-[15px] leading-[26px] text-[rgba(255,255,255,1)] mb-[8px]  hover:text-[rgba(48,200,143,1)] duration-300"> Privacy Policy</p></div>
    </div>
 <div><div class="flex justify-center my-[35px] sm:flex sm:justify-end"><button class="py-[8px] px-[35px] rounded-[22px] text-center text-white header-btn">Request Invite</button></div>
  <p class="font-normal text-[15px] leading-[26px] text-[rgba(2550,255,255,1)] text-center pb-[40px]">© Easybank. All Rights Reserved</p>
  </div></div>
`