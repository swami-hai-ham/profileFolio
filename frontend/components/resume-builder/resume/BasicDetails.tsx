import { useFormContext } from 'react-hook-form';

interface Link {
  network: string;
  url: string;
}

interface PersonalInfo {
  name: string;
  label: string;
  email: string;
  phone: string;
  profiles: Link[];
}

export default function BasicDetails() {
  const { watch } = useFormContext();

  const personalInfo = watch('basics') as PersonalInfo;

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-4xl text-center capitalize ">{personalInfo?.name}</h1>
      <span className="text-center text-sm font-light capitalize">{personalInfo?.label}</span>
      <div className="flex justify-center items-center gap-1">
        <a href={`mailto:${personalInfo?.email}`} className="text-sm">
          {personalInfo?.email}
        </a>
        {personalInfo?.email && personalInfo?.phone && <span>|</span>}
        <p className="text-sm">{personalInfo?.phone}</p>
      </div>
      <div className="flex justify-center gap-1">
        {personalInfo?.profiles?.map((link, index) => (
          <div key={index} className="flex items-center gap-1">
            <a href={link?.url} target="_blank" className="capitalize font-semibold text-base">
              {link?.network}
            </a>
            {index < personalInfo.profiles.length - 1 && <span>|</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
