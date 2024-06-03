import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
      <strong>Error:</strong> {message}
    </div>
  );
};

export default Error;
