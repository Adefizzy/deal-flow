import colors from '../../utils/colors';


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
export const services = [ 'Design Service',  'Web Development','Social Media', 'Branding' ]
export const webdevData = [
    {title: 'Web Development', value: 920, isGain: false},
    {title: 'Frontend', value: 920, isGain: true},
    {title: 'Backend', value: 920, isGain: false},
    {title: 'Maintenance', value: 920, isGain: true},
    {title: 'Debug', value: 920, isGain: true},
]

export const brandData = [
    {title: 'Logo', value: 920},
    {title: 'Concept', value: 920},
    {title: 'Marketing', value: 920},
    {title: 'Consultation', value: 920},
    {title: 'Identity', value: 920},
]

export const designServiceData = [
    {title: 'Web Template', value: 920},
    {title: 'Icons', value: 920},
    {title: 'Mockup', value: 920},
    {title: 'App Design', value: 920},
    {title: 'Illustration', value: 920},
]
export const data = [
    {
      name: 'Jan',
      date:'Jan 21th, 2020',
      uv: 4000,
      pv: 2400,

    },
    {
      name: 'Feb',
      date:'Feb 8th, 2020',
      uv: 3000,
      pv: 1398,


    },
    {
      name: 'Mar',
      date:'March 1st, 2020',
      uv: 2000,
      pv: 9800,

    },
    {
      name: 'Apr',
      date:'April 1st, 2020',
      uv: 2780,
      pv: 3908,

    },
    {
      name: 'May',
      date:'May 13th, 2020',
      uv: 1890,
      pv: 4800,

    },
    {
      name: 'Jun',
      date:'June 29th, 2020',
      uv: 2390,
      pv: 3800,
  
    },
    {
      name: 'Jul',
      date:'July 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Aug',
      date:'Aug 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Sept',
      date:'Sept 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Oct',
      date:'Oct 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Nov',
      date:'Nov 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Dec',
      date:'Dec 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
  ];

  export const transactionData =  Array.from({length: 12}, () => ({
    name: labels[Math.floor(Math.random() * 12)],
    'Design Service': Math.floor(Math.random() * 11)+ 1,
    'Web Development': Math.floor(Math.random() * 11)+ 1,
    'Social Media': Math.floor(Math.random() * 11)+ 1,
    'Branding': Math.floor(Math.random() * 11)+ 1,
  })).map((data, index) => {data.name = labels[index]; return data})


  export const brandingData = {
    datasets: [
      {
        label: 'Marketing',
        data: Array.from({ length: 5 }, () => ({
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          r: Math.floor(Math.random() * 20) + 5,
        })),
        backgroundColor: colors.purple,
      },
      {
        label: 'Consultation',
        data: Array.from({ length: 5 }, () => ({
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          r: Math.floor(Math.random() * 20) + 5
        })),
        backgroundColor: colors.yellow,
      },
      {
          label: 'Concept',
          data: Array.from({ length: 5 }, () => ({
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
            r: Math.floor(Math.random() * 20) + 5
          })),
          backgroundColor: colors.red,
        },
    ],
  };