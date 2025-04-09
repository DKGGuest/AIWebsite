import React from "react";

const LeadFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-96 text-white">
                <h2 className="text-2xl font-bold mb-4">Get a Free Consultation</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Mobile Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Query</label>
                        <textarea
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Your Query"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-red-500 px-4 py-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeadFormModal;