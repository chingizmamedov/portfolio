import Container from "./Container";

export default function Footer() {
  return (
    <div className="w-full rounded-t-xl bg-slate-200 px-5 pt-8">
      <Container>
        <div className="flex flex-col w-full">
          <h3 className="text-4xl text-purple-900 font-bold mb-4">
            Contact me
          </h3>
          <div className="flex">
            <div className="items-center justify-between space-y-4 sm:flex w-full flex-col sm:space-y-0 sm:space-x-4">
              <div className="flex gap-3 w-full  flex-col lg:flex-row">
                <a
                  href="https://www.instagram.com/chingiz_dev/"
                  className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full p-3 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="instagram"
                    className="fill-white w-4 h-4 mr-2"
                  >
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white">Me on instagram</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/chingiz-mamedov/"
                  className="w-full h-full bg-gradient-to-br bg-blue-500 rounded-full p-3 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="linkedin"
                    className="fill-white w-4 h-4 mr-2"
                  >
                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white">
                      Let&apos;s talk on linkedIn
                    </div>
                  </div>
                </a>
                {/* Write for phone number */}
                <a
                  href="tel:+994558849335"
                  className="w-full h-full bg-gradient-to-br bg-blue-500 rounded-full p-3 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <div className="text-left">
                    <div className="text-xs text-white">Call me</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs text-black text-center p-1 mt-3">
              © 2021 Chingiz Mamedov
              <div className="text-xs text-black text-center">
                <a
                  href="https://www.linkedin.com/in/chingiz-mamedov/"
                  className="text-black"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://www.instagram.com/chingizmamedov/"
                  className="text-black"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
