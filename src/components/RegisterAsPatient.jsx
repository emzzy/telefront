export default function RegisterAsPatient() {
  return (
    <>
      <div className="mb-4">
        <form onSubmit="" className="">
          <fieldset>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-10 w-full">
              <div className="flex flex-col gap-6 w-full max-w-xs lg:max-w-sm">
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
                  </select>{" "}
                  <input type="hidden" name="role" value="" />
                </div>
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
                <div className="flex flex-col gap-1">
                  <label>
                    Medical Information <sup>*</sup>
                  </label>
                  <input
                    id="medicalInformation"
                    name="medicalInformation"
                    type="file"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Drop your file here to upload"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="emergencyContact">
                    Emergency contact information <sup>*</sup>
                  </label>
                  <input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="text"
                    // value={formData.emergencyContact}
                    // onChange={handleChange}
                    placeholder="Emergency Contact Information"
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
                  <label htmlFor="phoneNumber">
                    Phone Number <sup>*</sup>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    // value={formData.phoneNumber}
                    // onChange={handleChange}
                    placeholder="Phone Number"
                    className="border-2 p-3 lg:p-4 rounded-lg rounded focus:border-tele-blue-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="age">
                    Age <sup>*</sup>
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    // value={formData.location}
                    // onChange={handleChange}
                    placeholder="Age"
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
