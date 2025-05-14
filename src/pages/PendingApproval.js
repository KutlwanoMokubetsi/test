import React from 'react';

const PendingApproval = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
      <h2 className="text-xl font-semibold mb-2">Pending Approval</h2>
      <p>Your account has been created and is awaiting approval by a superadmin.</p>
      <p>You will receive admin access once your role has been granted.</p>
    </div>
  );
};

export default PendingApproval;
