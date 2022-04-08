import React from "react";
import "../assets/css/loadingSpinner.css";

function ThemedSuspense() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900">
      <div className={`lds-ripple`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ThemedSuspense;
