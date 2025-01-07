import React from 'react'

export const Settings = () => {
    return (
        <section>
            <div className="px-40 pb-40 bg-gradient-to-b from-black to-transparent">
                <div className="text-center text-customGrey font-bold font-sairaCondensed tracking-widest py-10">
                    <h1 className="font-koulen text-bronze text-5xl">Account Settings</h1>
                    <h2 className="text-xl">Manage your personal information, preferences, and security settings.</h2>
                </div>

                <div>
                    <div className="border font-sairaCondensed text-customGrey tracking-widest border-bronze bg-darkBrown/70 p-6 px-10">
                        <h2 className="font-koulen text-2xl mb-4">Personal Information</h2>
                        <div className="flex flex-col mb-4">
                            <span className="text-white text-xl">Profile Picture:</span>
                            <img src="/images/profile-image.jpg" alt="Profile" className="w-40 mt-5 h-40 rounded-full border border-bronze mr-4" />
                        </div>
                        <form className="space-y-5">
                            <div>
                                <label className="block py-3 text-white">Name:</label>
                                <div className="flex space-x-4">
                                    <input type="text" placeholder="First Name" className="w-full border border-bronze bg-transparent p-2 rounded" />
                                    <input type="text" placeholder="Last Name" className="w-full border border-bronze bg-transparent p-2 rounded" />
                                </div>
                            </div>
                            <div>
                                <label className="block py-3 text-white">Email</label>
                                <input type="email" placeholder="Email" className="w-full border border-bronze bg-transparent p-2 rounded" />
                            </div>
                            <div>
                                <label className="block py-3 text-white">Mobile Number</label>
                                <input type="tel" placeholder="Mobile Number" className="w-full border border-bronze bg-transparent p-2 rounded" />
                            </div>
                            <div>
                                <label className="block py-3 text-white">Address:</label>
                                <input type="text" placeholder="Address" className="w-full border border-bronze bg-transparent p-2 rounded" />
                            </div>
                            <div>
                                <label className="block py-3 text-white">Gender</label>
                                <div className="flex items-center">
                                    <input type="radio" id="male" name="gender" value="male" className="mr-2" />
                                    <label htmlFor="male" className="text-white mr-4">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" className="mr-2" />
                                    <label htmlFor="female" className="text-white">Female</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className="border font-sairaCondensed text-customGrey tracking-widest border-bronze bg-darkBrown/70 p-6 px-10 mt-10">
                            <h2 className="font-koulen text-2xl mb-4">Password Management</h2>
                            <form className="space-y-5">
                                <div>
                                    <label className="block py-3 text-white">Current Password:</label>
                                    <input type="password" placeholder="Current Password" className="w-full border border-bronze bg-transparent p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block py-3 text-white">New Password:</label>
                                    <input type="password" placeholder="New Password" className="w-full border border-bronze bg-transparent p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block py-3 text-white">Confirm New Password:</label>
                                    <input type="password" placeholder="Confirm New Password" className="w-full border border-bronze bg-transparent p-2 rounded" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="border font-sairaCondensed text-customGrey tracking-widest border-bronze bg-darkBrown/70 p-6 px-10 mt-10">
                                <h2 className="font-koulen text-2xl mb-4">Notification Preferences (Optional)</h2>
                                <form className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <label className="text-white">Class Reminders</label>
                                        <input type="checkbox" className="bg-bronze text-white size-5 px-4 py-2 rounded-full" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-white">Payment Alerts</label>
                                        <input type="checkbox" className="bg-bronze text-white size-5 px-4 py-2 rounded-full" />
                                    </div>
                                </form>
                            </div>

                            <div>
                                <div className="border font-sairaCondensed text-customGrey tracking-widest border-bronze bg-darkBrown/70 p-6 px-10 mt-10">
                                    <h2 className="font-koulen text-2xl mb-4">Account Management</h2>
                                    <div className="space-y-5">
                                        <div className="border border-bronze bg-darkBrown/70 p-4">
                                            <div className="flex items-center">
                                                <input type="radio" id="deactivate" name="accountAction" value="deactivate" className="mr-2" />
                                                <label htmlFor="deactivate" className="text-white">Deactivate Account</label>
                                            </div>
                                            <p className="text-white text-sm mt-2">Temporarily deactivate your account.</p>
                                           
                                            <p className="py-3">Temporarily disable your account. You can reactivate it anytime by logging in.</p>
                                        </div>
                                        <div className="border border-bronze bg-darkBrown/70 p-4">
                                            <div className="flex items-center">
                                                <input type="radio" id="delete" name="accountAction" value="delete" className="mr-2" />
                                                <label htmlFor="delete" className="text-white">Delete Account</label>
                                            </div>
                                            <p className="text-white text-sm mt-2">Permanently delete your account.</p>
                                            <p className=" py-3">
                                            Permanently delete your account and all associated data. This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full bg-darkBrown/70 p-4 border-t border-bronze  flex justify-end space-x-4">
                <button className="border border-bronze text-bronze px-4 py-2 rounded">Cancel</button>
                <button className="border border-bronze  bg-bronze text-white px-4 py-2 rounded">Save All</button>
            </div>
        </section>
    )
}

export default Settings