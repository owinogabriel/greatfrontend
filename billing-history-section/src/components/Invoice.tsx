import { useEffect, useState } from "react";

// TypeScript interface for invoice data
interface InvoiceProps {
  id: string;
  created_at: string;
  status: string;
  amount: number;
  plan: string;
  downloadUrl: string;
}

const Invoice = () => {
  const [invoices, setInvoices] = useState<InvoiceProps[]>([]); // Invoice data
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("/api/invoice")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
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
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="w-full max-w-4xl text-center p-4">
        <h1 className="text-2xl font-bold text-left text-black">
          Payment History
        </h1>
        <p className="text-sm text-gray-500 mt-2 text-left">
          Please reach out to our friendly team via{" "}
          <span className="text-blue-500">team@codepulse.com</span> if you have
          questions.
        </p>

        {loading ? (
          <p className="mt-4">Loading invoices...</p>
        ) : invoices.length === 0 ? (
          <p className="mt-4">No invoices found</p>
        ) : (
          <div className="mt-6 rounded">
            <table className="w-full text-sm text-left border border-gray-300 mx-auto">
              <thead className="">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Plan</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border border-gray-300 mx-auto"
                  >
                    <td className="px-4 py-2">
                      {new Date(invoice.created_at).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-4 py-6 font-medium  ${
                        invoice.status.toLowerCase() === "paid"
                          ? "text-green-600 bg-green-200 max-w- rounded"
                          : "text-gray-500 bg-gray-200  rounded-sm"
                      }`}
                    >
                      {invoice.status}
                    </td>
                    <td className="px-4 py-2">${invoice.amount.toFixed(2)}</td>
                    <td className="px-4 py-2">{invoice.plan}</td>
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
