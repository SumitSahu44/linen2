import React from 'react';

const Career = () => {
  const jobs = [
    { title: "Textile Designer", location: "Kolkata Factory", type: "Full Time" },
    { title: "Export Sales Manager", location: "Remote/Field", type: "Commission Based" },
    { title: "Quality Control Inspector", location: "Howrah Unit", type: "Full Time" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black text-blue-900 mb-4 text-center underline decoration-blue-200">Join Parekh Linen</h1>
        <p className="text-gray-600 text-center mb-16 text-lg">Work with India's fastest growing linen manufacturers.</p>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 transition-all group">
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition">{job.title}</h3>
                <p className="text-gray-500 text-sm italic">{job.location} • {job.type}</p>
              </div>
              <button className="mt-4 md:mt-0 bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 p-10 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Didn't find a matching role?</h2>
          <p className="text-gray-600 mb-6">Drop your CV at <span className="font-bold text-blue-900">careers@parekhlinen.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Career;