export default function RegisterAHealthcareProvider() {
  return (
    <>
      <div className="mb-4">
        <form onSubmit="" className="">
          <fieldset>
            <div className="flex justify-center items-end gap-10 w-full">
              <div className="flex flex-col gap-6 w-full max-w-xs lg:max-w-sm">
                <div className="flex flex-col gap-1 max-w-32">
                  <label htmlFor="title">
                    Title <sup>*</sup>
                  </label>
                  <select
                    id="title"
                    name="title"
                    // value={formData.title}
                    // onChange={handleChange}
                    placeholder="Title"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  >
                    <option value="">Select Title</option>
                    <option value="Dr">Dr</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Prof">Prof</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 max-w-40">
                  <label htmlFor="gender">
                    Gender <sup>*</sup>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    type="text"
                    // value={formData.gender}
                    // onChange={handleChange}
                    placeholder="Gender"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <input type="hidden" name="role" value="" />
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName">
                    First name <sup>*</sup>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    // value={formData.firstName}
                    // onChange={handleChange}
                    placeholder="First name"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName">
                    Last Name <sup>*</sup>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    // value={formData.lastName}
                    // onChange={handleChange}
                    placeholder="Last name"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Email address"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password">
                    Password <sup>*</sup>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // value={formData.password}
                    // onChange={(e) => {
                    //   setPasswordState({ value: e.target.value, isTouched: true });
                    //   handleChange({
                    //     target: { name: "password", value: e.target.value },
                    //   });
                    // }}
                    placeholder="Password"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                  {/* {formData.password.isTouched && password.value.length < 8 ? (
                        <PasswordErrorMessage />
                      ) : null} */}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="confirmPassword">
                    Confirm Password <sup>*</sup>
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    // value={formData.confirmPassword}
                    // onChange={handleChange}
                    placeholder="Confirm Password"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full max-w-xs lg:max-w-sm">
                <div className="flex flex-col gap-1 max-w-52">
                  <label htmlFor="profession">
                    Profession <sup>*</sup>
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    // value={formData.profession}
                    // onChange={handleChange}
                    placeholder="Profession"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  >
                    <option value="">Select Profession</option>
                    <option value="gp">General Practitioner</option>
                    <option value="consultant">Consultant Physician</option>
                    <option value="surgeon">Surgeon</option>
                    <option value="nurse">Registered Nurse</option>
                    <option value="oncologist">Oncologist</option>
                    <option value="therapist">Therapist</option>
                  </select>
                </div>
                <input type="hidden" name="profession" value="" />
                <div className="flex flex-col gap-1">
                  <label htmlFor="yearsOfExperience">
                    Years of Experience <sup>*</sup>
                  </label>
                  <input
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="text"
                    // value={formData.yearsOfExperience}
                    // onChange={handleChange}
                    placeholder="Years of Experience"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label>
                    Medical licence number <sup>*</sup>
                  </label>
                  <input
                    id="medicalLicenceNumber"
                    name="medicalLicenceNumber"
                    type="text"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Medical licence number"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="professional certification">
                    Professional certification <sup>*</sup>
                  </label>
                  <input
                    id="professionalCertification"
                    name="professionalCertification "
                    type="file"
                    // value={formData.professionalCertification}
                    placeholder="Drop your file here to upload"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="location">
                    Location <sup>*</sup>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    // value={formData.location}
                    // onChange={handleChange}
                    placeholder="Location"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="dateOfBirth">
                    Date of Birth <sup>*</sup>
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    // value={formData.dateOfBirth}
                    // onChange={handleChange}
                    placeholder="Date of birth"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center mt-6">
            <button className="w-1/3 lg:w-1/5 py-3 lg:py-4 mb-3 rounded-lg bg-tele-blue-light hover:bg-tele-blue-dark text-white">
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
