import React, { useState, useEffect } from 'react';
import data from '../components/data/data.json';
import AlertsByTime from './AlertsByTime';
import AlertsBySourceIP from './AlertsBySourceIP';
import AlertsBySeverity from './AlertsBySeverity';
import AlertsByProtocol from './AlertsByProtocol';
import AlertsList from './AlertsList';
import SummaryCards from './SummaryCards';
import SwitchButton from './SwitchButton';
import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  const [selectedGraph, setSelectedGraph] = useState('All');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedAlert, setSelectedAlert] = useState(null);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const graphComponents = {
    'Time': <AlertsByTime data={filteredData} />,
    'Source IP': <AlertsBySourceIP data={filteredData} />,
    'Severity': <AlertsBySeverity data={filteredData} />,
    'Protocol': <AlertsByProtocol data={filteredData} />,
    All: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AlertsByTime data={filteredData} />
          <AlertsBySourceIP data={filteredData} />
          <AlertsBySeverity data={filteredData} />
          <AlertsByProtocol data={filteredData} />
        </div>
      </>
    ),
  };

  const graphOptions = Object.keys(graphComponents);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 pb-16">
      <Header />
      <div className="container mx-auto p-4">
        <SwitchButton
          options={graphOptions}
          selectedOption={selectedGraph}
          onSelectOption={setSelectedGraph}
        />
        {graphComponents[selectedGraph]}
        <SummaryCards data={filteredData} />
        <AlertsList data={filteredData} onSelectAlert={setSelectedAlert} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
