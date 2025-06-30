import React from 'react'

const Invoice = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#ffffff]">
      <div className=" w-full text-center">
        <h1 className="text-3xl text-black font-bold">Payment History</h1>
        <p className="text-2xl text-gray-500 mt-2">
          Please reach out to our friendly team via <span className="text-blue-500">team@codepulse.com</span> if you have questions.
        </p>
      
        <div className="overflow-x-auto">
          <table className=" text-sm text-left border">
            <thead className=" text-gray-400">
              <tr>
                <th>Invoice</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Plan</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Invoice
