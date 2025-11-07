import nurseHeroSec from "../assets/images/nurseHeroSec.png";
import docTeleConsulting from "../assets/images/docTeleConsultingHome.png";
import glovedDoc from "../assets/images/glovedDoc.jpg";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-center gap-y-4 lg:gap-x-36 py-10 lg:pt-24 lg:pb-24 bg-tele-blue-lighter lg:rounded-br-[20em]">
          <div className="flex flex-col items-center w-4/5 lg:items-start md:w-1/2 lg:w-1/3">
            <h1 className="mb-3 text-3xl font-bold lg:text-5xl lg:leading-tight">
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
                <button className="p-3 font-semibold text-white lg:p-4 rounded-2xl bg-tele-blue-light hover:bg-tele-blue-dark">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-1/3 lg:block lg:w-1/5">
            <img
              src={nurseHeroSec}
              alt="A nurse holding a pad"
              className="relative z-10 lg:w-full"
            />
            <div className="hidden md:block lg:block">
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
        <div className="flex flex-col items-center justify-center py-10 lg:flex-row lg:gap-x-10 lg:mt-20">
          <img
            src={docTeleConsulting}
            alt="Doctor on the phone"
            className="w-1/2 rounded-xl md:w-1/3 lg:w-1/5"
          />
          <div className="flex flex-col items-center w-4/5 mt-5 lg:items-start lg:w-1/3 lg:mt-0">
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl lg:w-2/3">
              Welcome to the online centers
            </h3>
            <ul className="space-y-2 font-semibold list-disc list-inside lg:space-y-3">
              <li>Instant access to certified professionals</li>
              <li>Book appointments, chat and video call without the hassle</li>
              <li>Secure, private and always available when you need it</li>
              <li>Your path to better health starts here</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-section bg-[#eff8fa] py-10">
        <h1 className="py-8 text-3xl font-bold text-center text-tele-blue lg:text-5xl lg:py-10">
          Our Services
        </h1>
        <div className="flex flex-col items-center justify-center w-1/2 gap-10 mx-auto services-container md:w-full lg:w-full md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap lg:py-8 lg:space-y-0 lg:gap-12 lg:px-0">
          <div className="flex flex-col items-center w-full px-3 py-4 space-y-2 bg-white rounded-lg search-card md:w-1/3 lg:w-1/4 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-user"></i>
            </div>
            <div className="lg:px-8">
              <h4 className="mb-4 text-xl font-semibold text-center">
                Search doctor
              </h4>
              <p className="text-gray-600">
                Choose your doctor from thousands of specialist, general and
                trusted hospitals.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full px-3 py-4 space-y-2 bg-white rounded-lg video-card card md:w-1/3 lg:w-1/4 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-video"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="mb-4 text-xl font-semibold text-center">
                {" "}
                Video consultation
              </h4>
              <p className="text-gray-600">
                Connect instantly with certified doctors via secure high-quality
                video calls — anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full px-3 py-4 space-y-2 bg-white rounded-lg appointment-card md:w-1/3 lg:w-1/4 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-calendar-plus"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="mb-4 text-xl font-semibold text-center">
                Appointment
              </h4>
              <p className="text-gray-600">
                Schedule visits with your preferred doctor at your convenience,
                all from one place.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full px-3 py-4 space-y-2 bg-white rounded-lg emergency-card md:w-1/3 lg:w-1/4 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-ambulance"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="mb-4 text-xl font-semibold text-center">
                Emergency alerts
              </h4>
              <p className="text-gray-600">
                Get quick access to emergency help and send instant alerts to
                nearby hospitals or responders.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full px-3 py-4 space-y-2 bg-white rounded-lg first-aid-card md:w-1/3 lg:w-1/4 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-medkit"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="mb-4 text-xl font-semibold text-center">
                First aid guidance
              </h4>
              <p className="text-gray-600">
                Receive step-by-step first aid tips and instructions for common
                emergencies before help arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors-cards-section bg-[#c6d7da] py-10">
        <div>
          <div className="flex items-center justify-end mb-10 ml-10 mr-4 gap-x-10 md:gap-x-24 md:w-2/3 md:mx-auto lg:w-1/2 lg:justify-center lg:gap-x-24 lg:ml-96">
            <h1 className="text-3xl font-bold text-center lg:text-5xl">
              Our Doctors
            </h1>
            <a href="">
              <p className="text-sm font-bold text-tele-blue lg:text-lg">
                See more
              </p>
            </a>
          </div>

          {/* <div class="w-1/2 flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-center w-full lg:w-auto">
              Our Doctors
            </h2>
            <a
              href="#"
              class="text-blue-600 font-semibold hover:underline text-sm lg:text-base"
            >
              See more
            </a>
          </div> */}
          <div className="flex flex-col items-center justify-center doc-cards-container gap-y-6 md:flex-row lg:flex-row md:gap-x-8 lg:gap-x-8">
            <div className="w-2/4 space-y-2 bg-white md:w-1/4 lg:w-1/6 rounded-xl">
              <div className="w-48 mx-auto overflow-hidden h-36 rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="object-cover object-top w-full h-full mt-2"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="mb-2 text-xs text-end lg:text-sm">104 reviews</p>
                <p className="text-sm font-semibold lg:text-base lg:mb-2">
                  Dr Priscillia Oko
                </p>
                <div className="flex space-x-2 text-xs text-gray-600 lg:text-sm">
                  <i className="pt-1 fas fa-map-marker-alt"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="p-2 px-6 mt-4 text-sm text-white rounded lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark lg:text-base">
                    Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="w-2/4 space-y-2 bg-white md:w-1/4 lg:w-1/6 rounded-xl">
              <div className="w-48 mx-auto overflow-hidden h-36 rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="object-cover object-top w-full h-full mt-2"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="mb-2 text-xs text-end lg:text-sm">104 reviews</p>
                <p className="text-sm font-semibold lg:text-base lg:mb-2">
                  Dr Cynthia Apunwa
                </p>
                <div className="flex space-x-2 text-xs text-gray-600 lg:text-sm">
                  <i className="pt-1 fas fa-map-marker-alt"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="p-2 px-6 mt-4 text-sm text-white rounded lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark lg:text-base">
                    Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="w-2/4 space-y-2 bg-white md:w-1/4 lg:w-1/6 rounded-xl">
              <div className="w-48 mx-auto overflow-hidden h-36 rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="object-cover object-top w-full h-full mt-2"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="mb-2 text-xs text-end lg:text-sm">104 reviews</p>
                <p className="text-sm font-semibold lg:text-base lg:mb-2">
                  Pharm Mike Uke
                </p>
                <div className="flex space-x-2 text-xs text-gray-600 lg:text-sm">
                  <i className="pt-1 fas fa-map-marker-alt"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="p-2 px-6 mt-4 text-sm text-white rounded lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark lg:text-base">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 appointment-section lg:py-28">
        <h1 className="mb-8 text-3xl font-bold text-center lg:text-5xl text-tele-blue lg:mb-24">
          Book Appointment
        </h1>
        <div className="justify-center appointment-container lg:flex gap-x-16">
          <div className="max-w-xs p-2 mx-auto md:max-w-fit lg:max-w-fit lg:mx-0">
            <form onSubmit="" className="flex flex-col w-full">
              <div className="md:flex lg:flex gap-x-4">
                <input
                  className="w-full p-3 mb-5 border-2 rounded-lg lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                  type="name"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}
                  placeholder="name"
                />
                <input
                  className="w-full p-3 mb-5 border-2 rounded-lg lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="md:flex lg:flex gap-x-4">
                <input
                  className="w-full p-3 mb-5 border-2 rounded-lg lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                  type="phoneNumber"
                  // value={phoneNumber}
                  // onChange={(e) => setphoneNumber(e.target.value)}
                  placeholder="Phone Number"
                />
                <input
                  className="w-full p-3 mb-5 border-2 rounded-lg lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                  type="subject"
                  // value={subject}
                  // onChange={(e) => setsubject(e.target.value)}
                  placeholder="Subject"
                />
              </div>

              <input
                className="p-3 mb-5 border-2 rounded-lg lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                type="dateAndTime"
                // value={dateAndTime}
                // onChange={(e) => setdateAndTime(e.target.value)}
                placeholder="Date & Time"
              />
              <textarea
                className="p-3 mb-5 border-2 rounded-lg h-36 lg:p-4 focus:border-tele-blue-dark focus:outline-none"
                name="text"
                id="note"
                placeholder="Add Note"
              ></textarea>
              <button
                className="p-3 font-semibold text-white md:w-1/3 lg:w-1/3 lg:p-4 rounded-xl bg-tele-blue-light hover:bg-tele-blue-dark"
                type="submit"
              >
                Book Appointment{" "}
              </button>
            </form>
          </div>
          <img
            src={glovedDoc}
            alt="A doctor wearing her gloves"
            className="hidden object-cover w-1/3 p-2 lg:block h-fit rounded-xl"
          />
        </div>
      </section>

      <footer>
        <div className="flex justify-center p-4 text-white lg:justify-around gap-x-6 bg-gradient-to-t from-blue-600 to-tele-blue-light md:p-14 lg:py-28">
          <div className="w-1/2 lg:w-1/4">
            <div className="flex items-center justify-center mb-4 md:justify-start lg:justify-start gap-x-2">
              <div className="flex justify-center items-center bg-white w-6 h-6 rounded-[100%]">
                <p className="text-tele-blue">TM</p>
              </div>{" "}
              <p className="text-sm font-semibold lg:text-base">
                Tele Medicine
              </p>{" "}
            </div>

            <p className="text-xs text-left lg:text-sm">
              Telemedicine provides progressive and affordable healthcare,
              accessible on mobile and any device for everyone.
            </p>
          </div>

          <div className="w-1/4 px-6">
            <h3 className="mb-4 text-sm font-semibold lg:text-base">Company</h3>
            <ul className="space-y-2 text-xs lg:text-sm">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Find a doctor</a>
              </li>
              <li>
                <a href="">Apps</a>
              </li>
            </ul>
          </div>

          <div className="w-1/4 px-6">
            <h3 className="mb-4 text-sm font-semibold lg:text-base">Help</h3>
            <ul className="space-y-2 text-xs lg:text-sm">
              <li>
                <a href="">Help center</a>
              </li>
              <li>
                <a href="">Contact support</a>
              </li>
              <li>
                <a href="">Instructions</a>
              </li>
              <li>
                <a href="">How it works</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
