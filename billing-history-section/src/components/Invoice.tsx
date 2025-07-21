import { useEffect, useState } from "react";

// TypeScript interface for invoice data
interface InvoiceProps {
  id: string;
  created_at: string;
  status: string;
  amount: number;
  plan: string;
  invoice_url: string;
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
        // Show this if loading is true
          <p className="mt-4">Loading invoices...</p>
        // If not loading, and no invoices found
        ) : invoices.length === 0 ? (
          <p className="mt-4">No invoices found</p>
       // If not loading, and there ARE invoices
        ) : (
          <div className="mt-6 rounded overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-300 min-w-max">
              <thead className="">
                <tr>
                  <th className="px-4 py-2 whitespace-nowrap">Date</th>
                  <th className="px-4 py-2 whitespace-nowrap">Status</th>
                  <th className="px-4 py-2 whitespace-nowrap">Amount</th>
                  <th className="px-4 py-2 whitespace-nowrap">Plan</th>
                  <th className="px-4 py-2 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-300">
                    <td className="px-4 py-2 whitespace-nowrap">
                      {new Date(invoice.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded whitespace-nowrap
                ${
                  invoice.status.toLowerCase() === "paid"
                    ? "bg-green-200 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      ${invoice.amount.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {invoice.plan}
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={invoice.invoice_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:cursor-pointer bg-blue-200 rounded py-1 px-2 text-xs whitespace-nowrap inline-block"
                      >
                        Download
                      </a>
                    </td>
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
