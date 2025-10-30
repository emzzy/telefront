import nurseHeroSec from "../assets/images/nurseHeroSec.png";
import docTeleConsulting from "../assets/images/docTeleConsultingHome.png";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-center gap-y-4 lg:gap-x-36 py-10 lg:pt-24 lg:pb-24 bg-tele-blue-lighter lg:rounded-br-[20em]">
          <div className="flex flex-col items-center lg:items-start w-4/5 md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl lg:text-5xl lg:leading-tight font-bold mb-3">
              Connecting You to Expert Care in Just a Few Clicks!
            </h1>

            <div className="w-full md:w-full lg:w-fit">
              <p className="mb-8 md:text-lg lg:text-lg">
                Get personalized care with just a tap.
                <br />
                Trusted professionals, at your fingertips.
                <br />
                Your path to better health starts here.
              </p>
              <div className="flex justify-center md:mr-8 max-w-1/2 lg:max-w-1/2">
                <button className="p-3 lg:p-4 rounded-2xl bg-tele-blue-light hover:bg-tele-blue-dark text-white font-semibold">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 lg:block lg:w-1/5 relative">
            <img
              src={nurseHeroSec}
              alt="A nurse holding a pad"
              className="relative z-10 lg:w-full"
            />
            <div className="hidden lg:block">
              <div className="absolute -top-5 -left-6 z-1 rounded-[100%] h-80 w-80 bg-[#9eacc4]"></div>
              <div className="absolute top-60 left-60 z-10 rounded-[100%] h-20 w-20 bg-[#6f97d2]"></div>
              <div className="absolute -top-4 -left-0 z-10 rounded-[100%] h-6 w-6 bg-[#6f97d4]"></div>
              <div className="absolute top-0 -left-12 z-10 rounded-[100%] h-14 w-14 bg-[#c9dce7]"></div>
              <div className="absolute top-2 -left-10 z-10 rounded-[100%] h-10 w-10 bg-tele-blue-lighter"></div>
            </div>

            {/* <div className="absolute -top-16 -left-12 -z-1 rounded-[100%] h-96 w-96 bg-[#9eacc4]"></div>
            <div className="absolute top-60 left-60 z-10 rounded-[100%] h-24 w-24 bg-[#6f97d2]"></div>
            <div className="absolute -top-10 -left-12 z-10 rounded-[100%] h-8 w-8 bg-[#6f97d4]"></div>
            <div className="absolute top-0 -left-24 z-10 rounded-[100%] h-16 w-16 bg-[#6f97d4]"></div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:gap-x-10 lg:mt-20">
          <img
            src={docTeleConsulting}
            alt="Doctor on the phone"
            className="rounded-xl w-1/2 md:w-1/3 lg:w-1/5"
          />
          <div className="flex flex-col items-center lg:items-start w-4/5 lg:w-1/3 mt-5 lg:mt-0">
            <h3 className="text-2xl lg:text-3xl font-semibold lg:w-2/3 mb-5">
              Welcome to the online centers
            </h3>
            <ul className="list-disc list-inside space-y-2 lg:space-y-3 font-semibold">
              <li>Instant access to certified professionals</li>
              <li>Book appointments, chat and video call without the hassle</li>
              <li>Secure, private and always available when you need it</li>
              <li>Your path to better health starts here</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
