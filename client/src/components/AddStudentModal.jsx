import "../styles/addStudentModal.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

const AddStudentModal = ({ setIsOpenStudentModal }) => {
  return (
    <div className="modalOverlay">
      <div className="addStudentModal px-4">
        <header className="studentModalHdr">
          <button className="closeModalBtn" onClick={() => setIsOpenStudentModal(false)}>
            <FaArrowLeftLong size={20} />
          </button>

          <h2>Add Student</h2>
        </header>

        <form action="#" className="studentRegisterForm">
          {/* Student Profile Pic Container */}
          <div className="studentProfilePicCont">
            <div className="profilePicImageCont">
              <img src="/assets/no-profile-image.jpg" alt="" className="profileImage" />

              <div className="fileChooseProfilePic">
                <label htmlFor="profilePic" className="chooseFileLabel">
                  <FaCamera size={18} color="#fff" />
                </label>
                <input type="file" className="fileInput" id="profilePic" />
              </div>
            </div>
          </div>

          {/* Student Fields Area */}
          <div className="fieldsArea flex flex-col gap-3 py-1">
            {/* For First Name and Last Name */}
            <div className="flex items-center justify-between w-full">
              <div className="formField">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="Firstname" id="firstname" />
              </div>

              <div className="formField">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="Lastname" id="lastname" />
              </div>
            </div>

            {/* For ID and Trainer */}
            <div className="flex items-center justify-between w-full">
              <div className="formField">
                <label htmlFor="studentId">Student ID</label>
                <input type="number" name="StudentId" id="studentId" />
              </div>

              <div className="formField">
                <label htmlFor="trainer">Trainer</label>
                <select name="Batch_No" id="batch_No">
                  <option value="">Select</option>
                  <option value="Sir Sufiyan">Sir Sufiyan</option>
                  <option value="Sir Ghous">Sir Ghous</option>
                  <option value="Sir Inzamam">Sir Inzamam</option>
                  <option value="Sir Jaffer">Sir Jaffer</option>
                  <option value="Sir Farukh">Sir Farukh</option>
                </select>
              </div>
            </div>

            {/* For Course and Batch */}
            <div className="flex items-center justify-between w-full">
              <div className="formField">
                <label htmlFor="course">Course</label>
                <select name="Course" id="course">
                  <option value="">Select</option>
                  <option value="Web & Mobile" className="font-semibold">
                    Web & Mobile
                  </option>
                  <option value="Graphic Designing" className="font-semibold">
                    Graphic Designing
                  </option>
                  <option value="Flutter" className="font-semibold">
                    Flutter
                  </option>
                  <option value="Python" className="font-semibold">
                    Python
                  </option>
                  <option value="CCNA" className="font-semibold">
                    CCNA
                  </option>
                  <option value="CCO" className="font-semibold">
                    CCO
                  </option>
                  <option value="CCA" className="font-semibold">
                    CCA
                  </option>
                </select>
              </div>

              <div className="formField">
                <label htmlFor="batch_No">Batch No</label>
                <select name="Batch_No" id="batch_No">
                  <option value="">Select</option>
                  <option value="Batch-01">Batch-01</option>
                  <option value="Batch-02">Batch-02</option>
                  <option value="Batch-03">Batch-03</option>
                  <option value="Batch-04">Batch-04</option>
                  <option value="Batch-05">Batch-05</option>
                </select>
              </div>
            </div>

            {/* For Email and Phone Number */}
            <div className="flex items-center justify-between w-full">
              <div className="formField">
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" id="email" />
              </div>

              <div className="formField">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="number" name="Phone_Number" id="phoneNumber" />
              </div>
            </div>

            <div className="addStudentBtn py-2 flex items-center justify-end">
              <button
                className="addStudentBtn py-[6px] px-10 bg-[#8ac642] text-white text-lg font-bold rounded-md active:scale-[0.98] active:text-[18px] transition-all"
                onClick={() => setIsOpenStudentModal(false)}
              >
                Add
              </button>
            </div>
          </div>
        </form>

        <div className="studentModalMidCont"></div>
      </div>
    </div>
  );
};

export default AddStudentModal;
