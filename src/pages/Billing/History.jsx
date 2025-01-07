import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const History = () => {
return (
    <section className="">
        <div className="pt-5 pb-20">
            <div className=" bg-darkBrown/70  font-sairaCondensed tracking-widest text-customGrey py-10 px-10 border border-bronze container mx-auto">
                <h1 className="text-3xl uppercase font-bold mb-4">Billing History</h1>
                <div className="w-1/2 flex  mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-bronze w-1/2 bg-customDarkGrey p-2 mr-2 rounded"
                    />
                    <button className="bg-bronze text-white w-1/4 p-2 rounded mr-2">Filter</button>
                    <button className="bg-bronze text-white w-1/4 p-2 rounded">Export</button>
                </div>
                <table className="min-w-full text-left  bg-black text-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-bronze">Invoice Number</th>
                            <th className="py-2 px-4 border-b border-bronze">Purchase Date</th>
                            <th className="py-2 px-4 border-b border-bronze">End Date</th>
                            <th className="py-2 px-4 border-b border-bronze">Amount</th>
                            <th className="py-2 px-4 border-b border-bronze">Status</th>
                            <th className="py-2 px-4 border-b border-bronze">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-black items- hover:bg-customDarkGrey text-white">
                            <td className="py-2 px-4 border-b border-bronze">INV-001</td>
                            <td className="py-2 px-4 border-b border-bronze">2023-01-01</td>
                            <td className="py-2 px-4 border-b border-bronze">2023-12-31</td>
                            <td className="py-2 px-4 border-b border-bronze">$100.00</td>
                            <td className="py-2 px-4 border-b border-bronze">Paid</td>
                            <td className="py-2 px-4 border-b border-bronze">
                                <button className="bg-bronze text-white px-5 py-1 rounded mr-2"><FontAwesomeIcon icon={faDownload} /></button>
                                <button className="bg-bronze text-white px-5 py-1 rounded"><FontAwesomeIcon icon={faEye} /></button>
                            </td>
                        </tr>

                        <tr className="bg-black items- hover:bg-customDarkGrey text-white">
                            <td className="py-2 px-4 border-b border-bronze">INV-002</td>
                            <td className="py-2 px-4 border-b border-bronze">2023-01-01</td>
                            <td className="py-2 px-4 border-b border-bronze">2023-12-31</td>
                            <td className="py-2 px-4 border-b border-bronze">$100.00</td>
                            <td className="py-2 px-4 border-b border-bronze">Paid</td>
                            <td className="py-2 px-4 border-b border-bronze">
                                <button className="bg-bronze text-white px-5 py-1 rounded mr-2"><FontAwesomeIcon icon={faDownload} /></button>
                                <button className="bg-bronze text-white px-5 py-1 rounded"><FontAwesomeIcon icon={faEye} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
)
}

export default History