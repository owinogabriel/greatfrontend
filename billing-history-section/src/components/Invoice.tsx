import React from "react";

const Invoice = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#ffffff]">
      <div className="w-full max-w-4xl text-center p-4">
        <h1 className="text-2xl text-black font-bold text-left">
          Payment History
        </h1>
        <p className="text-sm text-gray-500 mt-2 text-left">
          Please reach out to our friendly team via{" "}
          <span className="text-blue-500">team@codepulse.com</span> if you have
          questions.
        </p>

        <div className="overflow-x-aut mt-6">
          <table className="w-full md:w-[60rem] text-sm text-left border-slate-950 border mx-auto">
            <thead className="text-black  font-extralight px-4">
              <tr className="text-sm">
                <th className="px-4 py-2">Invoice</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Plan</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
