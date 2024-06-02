import React, { useState } from 'react';

const AlertsList = ({ data }) => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  const closeModal = () => {
    setSelectedAlert(null);
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Alerts List</h2>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {data.map((alert, index) => (
          <li
            key={index}
            className="bg-gray-700 p-3 rounded cursor-pointer"
            onClick={() => handleAlertClick(alert)}
          >
            <p><strong>Timestamp:</strong> {alert.timestamp}</p>
            <p><strong>Source IP:</strong> {alert.src_ip}</p>
            <p><strong>Destination IP:</strong> {alert.dest_ip}</p>
            <p><strong>Event Type:</strong> {alert.event_type}</p>
          </li>
        ))}
      </ul>

      {selectedAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-4 rounded shadow-lg md:w-1/2 w-10/12">
            <h2 className="text-xl font-semibold mb-4">Alert Details</h2>
            <p><strong>Timestamp:</strong> {selectedAlert.timestamp}</p>
            <p><strong>Source IP:</strong> {selectedAlert.src_ip}</p>
            <p><strong>Destination IP:</strong> {selectedAlert.dest_ip}</p>
            <p><strong>Source Port:</strong> {selectedAlert.src_port}</p>
            <p><strong>Destination Port:</strong> {selectedAlert.dest_port}</p>
            <p><strong>Protocol:</strong> {selectedAlert.proto}</p>
            <p><strong>Event Type:</strong> {selectedAlert.event_type}</p>
            {selectedAlert.alert && (
              <>
                <p><strong>Alert Action:</strong> {selectedAlert.alert.action}</p>
                <p><strong>Alert Signature:</strong> {selectedAlert.alert.signature}</p>
                <p><strong>Alert Category:</strong> {selectedAlert.alert.category}</p>
                <p><strong>Alert Severity:</strong> {selectedAlert.alert.severity}</p>
              </>
            )}
            <button onClick={closeModal} className="bg-sky-900 text-white px-4 py-2 rounded mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsList;
