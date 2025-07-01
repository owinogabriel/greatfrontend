import React, { useEffect, useState } from "react";

// Define Ts interface for the invoice object
interface invoiceProps {
  id: string;
  date: string;
  status: string;
  amount: number;
  plan: string;
  downloadUrl: string;
}
const Invoice = () => {
  const [invoices, setInvoices] = useState<invoiceProps[]>([]); //State to hold fetched invoices

  // Loading state to show feadack while fetching data
  const [loading, setLoading] = useState(true);

  // Fetch invoice data from API when the components mounts
  useEffect(() => {
    fetch("/api/invoice")
      .then((req) => req.json())
      .then((data) => {
        setInvoices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch invoices", err);
        setLoading(false);
      });
  }, []);

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

        {loading ? (
          <p>Loading invoices...</p>
        ) : invoices.length === 0 ? (
          <p>No invoices found</p>
        ) : (
          // Invoice data
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
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{new Date(invoice.date).toLocaleDateString()}</td>
                    <td
                      className={`px-6 py-4 font-medium ${
                        invoice.status === "paid"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {invoice.status}
                    </td>
                    <td>${invoice.amount.toFixed(2)}</td>
                    <td>{invoice.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
