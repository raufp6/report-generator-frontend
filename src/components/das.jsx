import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
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
      <div class="flex h-screen overflow-hidden w-full">
        <div className="relative  w-full">
          <aside className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white sm:hidden xl:block">
            <Sidebar />
          </aside>
          <div className="body-wrapper flex-1 overflow-x-hidden">
            <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[15px] xl:px-12 xl:pb-12">
              <div className="2xl:flex 2xl:space-x-[48px]">
                <section className="mb-6 2xl:mb-0 2xl:flex-1">
                  <div class="flex gap-2">
                    <Button
                      float="right"
                      size="sm"
                      onClick={() => {
                        onButtonclickhandler()
                      }}
                    >
                      Generate PDF
                    </Button>
                  </div>

                  <DefaultTable />
                </section>
              </div>
            </main>
          </div>

          {isModalOpen && <Modal />}
        </div>
      </div>
    </>
  )
}

export default Dashboard
