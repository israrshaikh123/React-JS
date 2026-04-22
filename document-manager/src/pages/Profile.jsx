import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { updateProfile, updatePassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await updateProfile(user, { displayName: name });
      setMessage("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await updatePassword(user, newPassword);
      setMessage("Password updated successfully!");
      setNewPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-blue-600 px-6 py-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

        {/* User Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">User Info</h2>
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Name:</span> {user?.displayName}
          </p>
        </div>

        {/* Update Name */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Update Name</h2>
          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded-lg p-3 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold"
            >
              Update Name
            </button>
          </form>
        </div>

        {/* Update Password */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Change Password
          </h2>
          <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-200 rounded-lg p-3 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold"
            >
              Update Password
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Profile;