import { useState, useEffect } from 'react'
import { Card, Typography } from '@material-tailwind/react'

import { getData } from '../services/Api'
import { getReportsUrl } from '../services/ApiUrl'
import { errorNotify } from '../utils/toastUtils'

const TABLE_HEAD = ['Client Name', 'Patient Name', 'Created at', '']

function DefaultTable() {
  const [reports, setReports] = useState()
  const fetchAllReports = async (url) => {
    try {
      const reportData = await getData([], url)
      setReports(reportData)
    } catch (error) {
      errorNotify(error)
    }
  }
  useEffect(() => {
    fetchAllReports(getReportsUrl)
  }, [])

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reports?.map(
              (
                {
                  client_name,
                  patient_first_name,
                  patient_last_name,
                  report_pdf_file,
                  created_at,
                },
                index
              ) => {
                const isLast = index === reports.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {client_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {patient_first_name + patient_last_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {created_at}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <a
                          href={
                            import.meta.env.VITE_BACKEND_URL +
                            'uploads/reports/' +
                            report_pdf_file
                          }
                          target="_blank"
                          download
                        >
                          Download
                        </a>
                      </Typography>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  )
}
export default DefaultTable
