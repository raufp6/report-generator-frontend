import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TextEditor from './TextEditor'
import * as yup from 'yup'
import axios from 'axios'
import { errorNotify, sucessNotify } from '../utils/toastUtils'
import AuthContext from '../context/AuthContext'


let reportSchema = yup.object().shape({
  client_name: yup.string().required(),
  physician_name: yup.string().required(),
  patient_first_name: yup.string().required(),
  patient_last_name: yup.string().required(),
  patient_contact: yup
    .string()
    .matches(/^[0-9]+$/, 'Patient Contact Must be only digits')
    .min(10, 'Patient Contact Must be exactly 10 digits')
    .max(13, 'Patient Contact Must be exactly 10 digits')
    .required('Patient Contact number is required'),

  physician_contact: yup
    .string()
    .matches(/^[0-9]+$/, 'Physician Contact Must be only digits')
    .min(10, 'Physician Contact Must be exactly 10 digits')
    .max(13, 'Physician Contact Must be exactly 10 digits')
    .required('Physician Contact number is required'),

  logo: yup
    .mixed()
    .required('Logo field is required')
    .test(
      'fileSize',
      'File size too large',
      (value) => value && value.size <= (1024 * 1024) / 2 // 1 MB
    )
    .test(
      'fileFormat',
      'Unsupported file format',
      (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
  patient_dob: yup
    .date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
})

const Modal = ({ onCloseClickHandle }) => {
  const { authTokens } = useContext(AuthContext)
  const navigate = useNavigate()
  const [chiefComplaint, setChiefComplaint] = useState('')
  const [counsultationNote, setCounsultationNote] = useState('')

  //Report submit
  const CreateReport = async (e) => {
    e.preventDefault()

    //form data object
    let data = {
      client_name: e.target.client_name.value,
      physician_name: e.target.physician_name.value,
      physician_contact: e.target.physician_contact.value,
      patient_first_name: e.target.patient_first_name.value,
      patient_last_name: e.target.patient_last_name.value,
      patient_contact: e.target.patient_contact.value,
      patient_dob: e.target.patient_dob.value,
      logo: e.target.logo.files[0],
      chief_complaint: chiefComplaint,
      consultation_note: counsultationNote,
    }
    //validating form
    try {
      await reportSchema.validate(data, { abortEarly: false })
      const form_data = new FormData()
      // Append each form field to the FormData object
      Object.entries(data).forEach(([key, value]) => {
        form_data.append(key, value)
      })
      const options = {
        method: 'POST',
        url: import.meta.env.VITE_APP_API_URL + 'save_report/',
        params: { 'api-version': '1.0' },
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + String(authTokens.access),
        },
        data: form_data,
      }
      axios
        .request(options)
        .then((res) => {
          
          navigate('/account')
          sucessNotify('Report created succesfully')
          onCloseClickHandle(false)
        })
        .catch((err) => {
          var errors = err.response.data
          Object.keys(errors).forEach((key) => {
            errorNotify(key.toUpperCase() + ' : ' + errors[key][0])
          })
        })
    } catch (errors) {
      
      const errorMessages = errors.inner.map((error) => error.message)

      for (let index = 0; index < errorMessages.length; index++) {
        errorNotify(errorMessages[index])
      }
    }
  }
  const onChangeHandleConsultationNote = (val) => {
    if (val.length > 5000){
      errorNotify(
        'Exceeded maximum allowed character length of Consultation Note'
      )
    } 
    setCounsultationNote(val)
  }
  const onChangeHandleChiefComplaint = (val) => {
    if (val.length > 5000) {
      errorNotify('Exceeded maximum allowed character length of Chief Complaint')
    } 
    setChiefComplaint(val)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
      <div className="relative overflow-y-scroll mx-auto w-full max-w-[54rem] p-8">
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Modal Form</h1>
            <form onSubmit={CreateReport}>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="client_name"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Client Name:
                  </label>
                  <input
                    type="text"
                    id="client_name"
                    name="client_name"
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
                    htmlFor="physician_name"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Physician Name:
                  </label>
                  <input
                    type="text"
                    id="physician_name"
                    name="physician_name"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="physician_contact"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Physician Contact:
                  </label>
                  <input
                    type="text"
                    id="physician_contact"
                    name="physician_contact"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="patient_first_name"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient First Name:
                  </label>
                  <input
                    type="text"
                    id="patient_first_name"
                    name="patient_first_name"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="patient_last_name"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient Last Name:
                  </label>
                  <input
                    type="text"
                    id="patient_last_name"
                    name="patient_last_name"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="patient_dob"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient DOB:
                  </label>
                  <input
                    type="date"
                    id="patient_dob"
                    name="patient_dob"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="patient_contact"
                    className="block text-gray-700 font-bold mb-2 float-left"
                  >
                    Patient Contact:
                  </label>
                  <input
                    type="text"
                    id="patient_contact"
                    name="patient_contact"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col clear-both">
                <div className="mb-1">
                  <h6 className="block mb-2 font-sans text-base font-semibold float-left">
                    Chief Complaint
                  </h6>

                  <TextEditor
                    onChnageHandler={onChangeHandleChiefComplaint}
                    value={chiefComplaint}
                  />
                </div>
              </div>
              <div className="flex flex-col clear-both">
                <div className="mb-1">
                  <h6 className="block mb-2 font-sans text-base font-semibold float-left">
                    Consultation Note
                  </h6>

                  <TextEditor
                    onChnageHandler={onChangeHandleConsultationNote}
                    value={counsultationNote}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
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
