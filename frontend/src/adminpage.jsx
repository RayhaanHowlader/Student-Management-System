import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
function AdminDashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };





    return (
        <>
            <h2 className='text-gray-900 text-3xl font-bold font-serif'>Admin Dashboard</h2>
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Sidebar */}
                <aside className={`bg-gray-800 text-white p-6 lg:w-64 w-full ${
                    isSidebarOpen ? "block" : "hidden"
                } lg:block`}>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-user-tie"></i>
                        Admin Portal
                    </h2>
                    <hr className="border-gray-600 mb-4"/>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center gap-2">
                            <i class="fa-solid fa-user"></i>
                                Manage Students
                            </a>
                        </li>
                        <li>
                            <a href="/resultpage" className="hover:text-gray-300 flex items-center gap-2">
                            <i class="fa-solid fa-square-poll-horizontal"></i>
                                Display Results
                            </a>
                        </li>
                        <li>
                            <a href="/wallet" className="hover:text-gray-300 flex items-center gap-2">
                            <i class="fa-solid fa-wallet"></i>
                                Wallet Management
                            </a>
                        </li>
                        <li>
                            <a href="/adminverify" className="hover:text-gray-300 flex items-center gap-2">
                            <i class="fa-solid fa-file-signature"></i>
                                Verify Documents
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>

                {/* Main Content */}
                <main className="flex-grow bg-gray-100 p-6">
                    {/* Header with Search and Profile */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <input
                            type="text"
                            placeholder="Search Students or Records..."
                            className="w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex items-center">
                            <img src="/api/placeholder/40/40" alt="Admin profile" className="w-10 h-10 rounded-full mr-2"/>
                            <span className="text-gray-700">admin@school.com</span>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
                            <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
                                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Pending Verifications</p>
                                <p className="text-xl text-gray-700 font-bold">25</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
                            <div className="bg-green-500 text-white rounded-full p-4 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
                                    <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61Z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Wallet Requests</p>
                                <p className="text-xl text-gray-700 font-bold">15</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
                            <div className="bg-yellow-500 text-white rounded-full p-4 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
                                    <path d="M400-400h160v-80H400v80Z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Results Pending</p>
                                <p className="text-xl text-gray-700 font-bold">45</p>
                            </div>
                        </div>
                    </section>

                    {/* Forms Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Results Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Submit Results</h3>
                            <Link to="/results">
                                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                               Edit Student Marks
                                </button>
                                </Link>
                        </div>

                        {/* Wallet Management Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Wallet Management</h3>
                            <Link to="/walletadmin">
                                <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                                   Refill Digital Wallet
                                </button>
                                </Link>
                        
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default AdminDashboard;