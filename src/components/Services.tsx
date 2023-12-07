import { FlaskConical } from "lucide-react";

const Services = () => {
  const services = [
    { name: "General Surgery" },
    { name: "Neuro Surgery" },
    { name: "Pediatric Oncology" },
    { name: "Outpatient medical service" },
    { name: "Video Endoscopy and Colonoscopy with Biopsy cry therapy" },
    { name: "Emergency and Critical care" },
    { name: "Pediatric Surgery" },
    { name: "Dental Service" },
    { name: "ENT Surgery" },
    { name: "COVID-19 testing" },
    { name: "Ophthalmology" },
    { name: "CT Scan" },
    { name: "X-RAY" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center my-4">
        Services
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-y-5 gap-x-8">
          {services.map((service) => (
            <div className="w-80 p-6 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition hover:animate-fade">
              <FlaskConical className="w-10 h-10" />
              <h1 className="text-xl mt-4 font-semibold">{service.name}</h1>
              <p className="text-base mt-3">
                Your health doesn't keep office hours, and neither do we. Our
                24/7 hospital is committed to delivering continuous,
                compassionate care whenever you need it most.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
