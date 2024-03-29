import React, { useState } from 'react'
import DefaultTable from '../components/Table'
import { Button } from '@material-tailwind/react'
import Modal from '../components/Modal'
const Dashboard = () => {
  const [isModalOpen, setisModalOpen] = useState(false)

  const onButtonclickhandler = () => {
    setisModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className="flex w-full">
        <div className="relative w-full">
          <div className="body-wrapper flex-1 ">
            <div className="flex gap-2 float-right mb-5">
              <Button color="red" float="right" size="sm">
                Log Out
              </Button>
              <Button
                float="right"
                size="sm"
                color="green"
                onClick={() => {
                  onButtonclickhandler()
                }}
              >
                Generate PDF
              </Button>
            </div>

            <DefaultTable />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onCloseClickHandle={setisModalOpen} />}
    </>
  )
}

export default Dashboard
