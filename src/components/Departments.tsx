import { FlaskConical } from "lucide-react";

const Departments = () => {
  const departments = [
    { name: "Emergency" },
    { name: "INTERNAL MEDICINE" },
    { name: "Inpatient Ward" },
    { name: "Gasteroenterology and hepatology" },
    { name: "ICU" },
    { name: "GYNECOLOGY & OBSTETRICS" },
    { name: "SURGERY" },
    { name: "Pediatrics& Child Health" },
    { name: "DENTAL MEDICINE & DENTISTRY" },
    { name: "ENT" },
    { name: "Ophthalmology" },
    { name: "Physiotherapy" },
  ];
  return (
    <div>
      <h1 className="text-3xl my-4 font-semibold flex justify-center">
        Departments
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
          {departments.map((department) => (
            <div className="w-80 p-6 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition hover:animate-fade">
              <FlaskConical className="w-10 h-10" />
              <h1 className="text-xl mt-4 font-semibold">{department.name}</h1>
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

export default Departments;
