import nurseHeroSec from "../assets/images/nurseHeroSec.png";
import docTeleConsulting from "../assets/images/docTeleConsultingHome.png";
import glovedDoc from "../assets/images/glovedDoc.jpg";

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
        <div className="flex flex-col lg:flex-row justify-center items-center py-10 lg:gap-x-10 lg:mt-20">
          <img
            src={docTeleConsulting}
            alt="Doctor on the phone"
            className="rounded-xl w-1/2 md:w-1/3 lg:w-1/5"
          />
          <div className="flex flex-col items-center lg:items-start w-4/5 lg:w-1/3 mt-5 lg:mt-0">
            <h3 className="text-2xl lg:text-3xl font-semibold lg:w-2/3 mb-2">
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

      <section className="services-section bg-[#eff8fa] lg:py-10">
        <h1 className="text-center text-3xl text-tele-blue font-bold py-8 lg:text-5xl lg:py-10">
          Our Services
        </h1>
        <div className="services-container w-2/3 mx-auto space-y-10 lg:py-8 lg:space-y-0 lg:w-full lg:flex flex-wrap justify-center items-center lg:gap-12 lg:px-0">
          <div className="flex flex-col items-center space-y-3 w-full lg:w-1/4 bg-white rounded-lg px-4 py-8 lg:py-14 h-full">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-user"></i>
            </div>
            <div className="lg:px-8">
              <h4 className="text-center text-xl font-semibold mb-4">
                Search doctor
              </h4>
              <p className="text-gray-600">
                Choose your doctor from thousands of specialist, general and
                trusted hospitals.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col items-center space-y-2 w-full bg-white rounded-lg px-4 py-8 lg:py-14 h-full">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-video"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="text-center text-xl font-semibold mb-4">
                {" "}
                Video consultation
              </h4>
              <p className="text-gray-600">
                Connect instantly with certified doctors via secure high-quality
                video calls — anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col items-center space-y-2 w-full bg-white rounded-lg px-4 py-8 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-calendar-plus"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="text-center text-xl font-semibold mb-4">
                Appointment
              </h4>
              <p className="text-gray-600">
                Schedule visits with your preferred doctor at your convenience,
                all from one place.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col items-center space-y-2 w-full bg-white rounded-lg px-4 py-8 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-ambulance"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="text-center text-xl font-semibold mb-4">
                Emergency alerts
              </h4>
              <p className="text-gray-600">
                Get quick access to emergency help and send instant alerts to
                nearby hospitals or responders.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col items-center space-y-2 w-full bg-white rounded-lg px-4 py-8 lg:py-14">
            <div className="flex justify-center items-center bg-tele-blue w-10 h-10 p-4 rounded-[100%] text-white text-xl">
              <i class="fas fa-medkit"></i>{" "}
            </div>
            <div className="lg:px-8">
              <h4 className="text-center text-xl font-semibold mb-4">
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

      <section className="doctors-cards-section bg-[#c6d7da]">
        <div className="py-10">
          <div className="lg:w-1/2 flex justify-end lg:justify-between items-center gap-x-10 lg:gap- ml-10 lg:ml-96 mr-4 mb-10">
            <h1 className="text-center text-3xl lg:text-5xl font-bold">Our Doctors</h1>
            <a href="">
              <p className="text-tele-blue text-sm lg:text-lg font-bold">See more</p>
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
          <div className="doc-cards-container flex flex-col lg:flex-row lg:gap-x-8 items-center gap-y-6 justify-center items-center">
            <div className="bg-white w-2/4 lg:w-1/6 space-y-2 rounded-xl">
              <div className="mx-auto w-48 h-36 overflow-hidden rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="w-full h-full mt-2 object-cover object-top"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="text-end text-xs lg:text-sm mb-2">104 reviews</p>
                <p className="font-semibold text-sm lg:text-base lg:mb-2">
                  Dr Priscillia Oko
                </p>
                <div className="flex text-xs lg:text-sm text-gray-600 space-x-2">
                  <i className="fas fa-map-marker-alt pt-1"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="mt-4 lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark text-sm lg:text-base text-white p-2 px-6 rounded">
                    Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white w-2/4 lg:w-1/6 space-y-2 rounded-xl">
              <div className="mx-auto w-48 h-36 overflow-hidden rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="w-full h-full mt-2 object-cover object-top"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="text-end text-xs lg:text-sm mb-2">104 reviews</p>
                <p className="font-semibold text-sm lg:text-base lg:mb-2">
                  Dr Cynthia Apunwa
                </p>
                <div className="flex text-xs lg:text-sm text-gray-600 space-x-2">
                  <i className="fas fa-map-marker-alt pt-1"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="mt-4 lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark text-sm lg:text-base text-white p-2 px-6 rounded">
                    Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white w-2/4 lg:w-1/6 space-y-2 rounded-xl">
              <div className="mx-auto w-48 h-36 overflow-hidden rounded-xl">
                <img
                  src={nurseHeroSec}
                  alt="A doctor holding a pad"
                  className="w-full h-full mt-2 object-cover object-top"
                />{" "}
              </div>
              <div className="px-4 pt-2 pb-6">
                <p className="text-end text-xs lg:text-sm mb-2">104 reviews</p>
                <p className="font-semibold text-sm lg:text-base lg:mb-2">
                  Pharm Mike Uke
                </p>
                <div className="flex text-xs lg:text-sm text-gray-600 space-x-2">
                  <i className="fas fa-map-marker-alt pt-1"></i>
                  <p>Brookpark Ext, 2705, North Olmsted, 440770</p>
                </div>
                <div className="text-center">
                  <button className="mt-4 lg:mt-8 bg-tele-blue-light hover:bg-tele-blue-dark text-sm lg:text-base text-white p-2 px-6 rounded">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment-section py-10 lg:py-28">
        <h1 className="text-center text-3xl lg:text-5xl font-bold text-tele-blue mb-8 lg:mb-24">
          Book Appointment
        </h1>
        <div className="appointment-container lg:flex justify-center gap-x-16">
          <div className="max-w-xs lg:max-w-fit p-2 mx-auto lg:mx-0">
            <form onSubmit="" className="flex flex-col w-full">
              <div className="md:flex lg:flex gap-x-4">
                <input
                  className="w-full mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                  type="name"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}
                  placeholder="name"
                />
                <input
                  className="w-full mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="md:flex lg:flex gap-x-4">
                <input
                  className="w-full mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                  type="phoneNumber"
                  // value={phoneNumber}
                  // onChange={(e) => setphoneNumber(e.target.value)}
                  placeholder="Phone Number"
                />
                <input
                  className="w-full mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                  type="subject"
                  // value={subject}
                  // onChange={(e) => setsubject(e.target.value)}
                  placeholder="Subject"
                />
              </div>

              <input
                className="mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                type="dateAndTime"
                // value={dateAndTime}
                // onChange={(e) => setdateAndTime(e.target.value)}
                placeholder="Date & Time"
              />
              <textarea
                className="h-36 mb-5 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
                name="text"
                id="note"
                placeholder="Add Note"
              ></textarea>
              <button
                className="lg:w-1/3 p-3 lg:p-4 rounded-xl bg-tele-blue-light hover:bg-tele-blue-dark text-white font-semibold"
                type="submit"
              >
                Book Appointment{" "}
              </button>
            </form>
          </div>
          <img
            src={glovedDoc}
            alt="A doctor wearing her gloves"
            className="hidden lg:block w-1/3 h-fit p-2 rounded-xl object-cover"
          />
        </div>
      </section>

      <footer>
        <div className="flex justify-center lg:justify-around gap-x-6 bg-gradient-to-t from-blue-600 to-tele-blue-light text-white py-6 lg:py-28">
          <div className="w-1/3 lg:w-1/4">
            <div className="flex justify-center lg:justify-start items-center gap-x-2 mb-4">
              <div className="flex justify-center items-center bg-white w-6 h-6 rounded-[100%]">
                <p className="text-tele-blue">TM</p>
              </div>{" "}
              <p className="text-sm lg:text-base font-semibold">Tele Medicine</p>{" "}
            </div>

            <p className="text-xs lg:text-sm text-center lg:text-left">
              Telemedicine provides progressive and affordable healthcare,
              accessible on mobile and any device for everyone.
            </p>
          </div>

          <div className="px-8">
            <h3 className="text-sm lg:text-base font-semibold mb-4">Company</h3>
            <ul className="text-xs lg:text-sm space-y-2">
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

          <div className="px-8">
            <h3 className="text-sm lg:text-base font-semibold mb-4">Help</h3>
            <ul className="text-xs lg:text-sm space-y-2">
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
