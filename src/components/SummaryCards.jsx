import React from 'react';

const SummaryCards = ({ data }) => {
  const totalAlerts = data.length;
  const uniqueSourceIPs = [...new Set(data.map(alert => alert.src_ip))].length;
  const uniqueDestinationIPs = [...new Set(data.map(alert => alert.dest_ip))].length;

  return (
    <div className="bg-gray-800 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-5 mt-5">
      <div className="bg-gray-700 p-4 rounded shadow-lg w-full md:w-1/3">
        <h3 className="text-lg font-semibold mb-2">Total Alerts</h3>
        <p className="text-2xl">{totalAlerts}</p>
      </div>
      <div className="bg-gray-700 p-4 rounded shadow-lg w-full md:w-1/3">
        <h3 className="text-lg font-semibold mb-2">Unique Source IPs</h3>
        <p className="text-2xl">{uniqueSourceIPs}</p>
      </div>
      <div className="bg-gray-700 p-4 rounded shadow-lg w-full md:w-1/3">
        <h3 className="text-lg font-semibold mb-2">Unique Destination IPs</h3>
        <p className="text-2xl">{uniqueDestinationIPs}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
