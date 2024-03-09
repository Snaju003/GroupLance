import React, {useState} from 'react';
import Select from 'react-select';


  const options = [
  { value: 'General', label: 'General' },
  { value: 'App Development',label: 'App Development'  },
  { value: 'CyberSecurity', label: 'CyberSecurity' },
  { value: 'IOT', label: 'IOT',},
  { value: 'Programming and Development', label: 'Programming and Development', },
  { value: 'Data science and analytics', label: 'Data science and analytics', },
  { value: 'Mobile Development', label: 'Mobile Development', },
  { value: 'Frontend Development', label: 'Frontend Development', },
  { value: 'Backend Development', label: 'Backend Development', },
  { value: 'Cloud Computing',label: 'Cloud Computing', },
  { value: 'Game Development',label: 'Game Development', },
  { value: 'Blockchain and Cryptocurrency', label: 'Blockchain and Cryptocurrency',  },
  { value:  'Artificial Intelligence', label:  'Artificial Intelligence',},
  { value:  'Networking',  label:  'Networking', },
  { value:  'Operating System',label:  'Operating System',},
  { value:  'Virtual Reality and Augmented Reality', label:  'Virtual Reality and Augmented Reality',},
  { value:  'Software Testing', label:  'Software Testing', },
  { value:  'Web Servers',label:  'Web Servers',  },
  { value:  'Databases',label:  'Databases', },
  { value:  'Tech Entrepreneurship',label:  'Tech Entrepreneurship',},
  { value:  'DevOps',label:  'DevOps', },
  ];

  function Jobs() {
   const[selectedOptions, setSelectedOptions] = useState([])
   const handleChange = (selectedOption)=>{setSelectedOptions(selectedOption)};
   console.log(selectedOptions)
  
  
  return(
    <div>
      <h5>Domains</h5>
      <Select 
      options={options}
      text={selectedOptions}
      onChange={handleChange}
      isMulti={true}
      />
    </div>
  );
}

export default Jobs;