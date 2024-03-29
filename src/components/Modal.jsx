import React, { useState } from 'react'
import Editor from './Editor'



const Modal = ({onCloseClickHandle}) => {
  const [value, setValue] = useState('')
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
      <div className="relative overflow-y-scroll mx-auto w-full max-w-[54rem] p-8">
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Modal Form</h1>
            <form>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="clientname"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Client Name:
                  </label>
                  <input
                    type="text"
                    id="clientname"
                    name="clientname"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="logo"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Client Logo:
                  </label>
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="PhysicianName"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Physician Name:
                  </label>
                  <input
                    type="text"
                    id="PhysicianName"
                    name="physicianName"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="physicianContact"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Physician Contact:
                  </label>
                  <input
                    type="text"
                    id="physicianContact"
                    name="physicianContact"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="patientFirstName"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient First Name:
                  </label>
                  <input
                    type="text"
                    id="patientFirstName"
                    name="patientFirstName"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="patientLastName"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient First Name:
                  </label>
                  <input
                    type="text"
                    id="patientLastName"
                    name="patientLastName"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="PatientDob"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient DOB:
                  </label>
                  <input
                    type="date"
                    id="PatientDob"
                    name="PatientDob"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="PatientContact"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient Contact:
                  </label>
                  <input
                    type="text"
                    id="PatientContact"
                    name="PatientContact"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col clear-both">
                <div className="mb-1">
                  <h6 className="block mb-2 font-sans text-base font-semibold float-left">
                    Chief Compaint
                  </h6>

                  <Editor />
                </div>
              </div>
              <div className="flex flex-col clear-both">
                <div className="mb-1">
                  <h6 className="block mb-2 font-sans text-base font-semibold float-left">
                    Chief Compaint
                  </h6>

                  <Editor />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={()=>{
                    onCloseClickHandle(false)
                  }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
