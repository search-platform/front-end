import {Bank} from "../banks";

export const DUMMY_BANKS: Bank[] = [
  {
    id: 1,
    name: "Bank of America",
    logo: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg",
    favicon: "https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-global-favicon-favicon-32x32-CSX704d6b21.png",
    address: "100 N Tryon St, Charlotte, NC 28202",
    url: "https://www.bankofamerica.com/",
    contacts: [
      {
        id: 1,
        value: "1-800-432-1000",
        type: "phone",
        description: "Customer Service",
      },
      {
        id: 2,
        value: "qwe@qwe.qwe",
        type: "email",
        description: "Customer Service",
      },
    ]
  },
  {
    id: 2,
    name: "Ballantyne Bank",
    logo: "https://local.ubs.com/charlotte-nc-ballantyne/mediahandler/media/321450/UBS_Logo_Semibold.svg",
    favicon: "https://localfirstbank.com/app/themes/first_bank/images/favicons/site_favicon.ico?x65779&v=1.0",
    address: "100 N Tryon St, Charlotte, NC 28202",
    url: "https://www.ballantynebank.com/",
    contacts: [
      {
        id: 3,
        value: "1-800-432-1000",
        type: "phone",
        description: "Customer Service",
      },
      {
        id: 4,
        value: "test@test.com",
        type: "email",
        description: "Customer Service",
      },
    ]
  }
];
