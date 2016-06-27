import React from 'react';
import _     from 'lodash';
import            'whatwg-fetch';

const trainers = [{
    "discipline": [
      "Crossfit",
      "Yoga",
      "Fitness"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Ex Lorem culpa ea ut incididunt amet exercitation. Ipsum cillum aute irure ad non tempor ad occaecat excepteur sit qui. Incididunt nisi ut tempor excepteur laborum elit. Occaecat qui consectetur magna do dolor irure adipisicing pariatur. Ut proident voluptate nostrud officia ipsum adipisicing ea amet ea ullamco. Officia nulla duis proident duis enim nisi deserunt duis aliqua enim do.\r\n",
    "guid": "32aa64f0-1a83-4b9b-8717-46abf9b2fc51",
    "name": "Sherry Kinney",
    "gender": "female",
    "age": 27,
    "registered": "2015-08-08T11:52:28 -02:00",
    "longitude": 0.98487899999999995,
    "email": "sherrykinney@zoarere.com",
    "phone": "+1 (839) 449-2180",
    "address": "170 Clifton Place, Bradenville, Virginia, 3974",
    "latitude": -12.324331000000001,
    "balance": "$3,517.35",
    "favoriteDiscipline": "Fitness",
    "company": "ZOARERE",
    "isActive": true
  },
  {
    "discipline": [
      "Power",
      "Core Strength",
      "Bodybuilding"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Nulla occaecat laborum est anim ad in eiusmod eu sint eiusmod sint quis. Deserunt sint culpa nulla tempor. Id commodo pariatur Lorem aute. Consequat veniam duis et quis ea sunt. Eiusmod pariatur non do sit fugiat.\r\n",
    "guid": "b0942595-f034-445c-97c1-ae37aedc4b1f",
    "name": "Ilene Sykes",
    "gender": "female",
    "age": 37,
    "registered": "2014-03-01T01:49:22 -01:00",
    "longitude": -106.73153600000001,
    "email": "ilenesykes@bytrex.com",
    "phone": "+1 (993) 583-3685",
    "address": "710 Dobbin Street, Dunbar, Oregon, 716",
    "latitude": 87.179207000000005,
    "balance": "$2,749.72",
    "favoriteDiscipline": "Balance",
    "company": "BYTREX",
    "isActive": false
  },
  {
    "discipline": [
      "Core",
      "Core",
      "Balance"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Enim elit excepteur adipisicing enim voluptate enim sit. Ea cupidatat culpa occaecat laboris. Pariatur dolore anim magna aliquip eu incididunt adipisicing elit laborum aliquip culpa proident. Est eu laborum proident magna aliqua quis. Irure sunt fugiat tempor sunt ad aliqua elit do ea laboris laborum aute do.\r\n",
    "guid": "152494fe-6f3c-40c7-823a-efc24b72c12a",
    "name": "Lang Roberson",
    "gender": "male",
    "age": 37,
    "registered": "2014-09-13T06:59:44 -02:00",
    "longitude": 63.963813999999999,
    "email": "langroberson@eyewax.com",
    "phone": "+1 (867) 502-2799",
    "address": "437 Boerum Place, Kanauga, Virgin Islands, 2928",
    "latitude": 24.397209,
    "balance": "$3,992.14",
    "favoriteDiscipline": "Power",
    "company": "EYEWAX",
    "isActive": true
  },
  {
    "discipline": [
      "Power",
      "Core Strength",
      "Yoga"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Excepteur incididunt nulla duis elit ut aliquip ut labore id ipsum. In do excepteur nostrud proident fugiat. Duis Lorem velit do cillum laboris ipsum in sint aliqua. Sunt deserunt ex enim non ex aliqua esse consequat sint et nisi deserunt. Non eu et eu ad reprehenderit anim. Cillum elit adipisicing do consequat esse.\r\n",
    "guid": "d9dba062-4189-4388-8a61-819b96ccaf9e",
    "name": "Elba Martin",
    "gender": "female",
    "age": 24,
    "registered": "2014-01-06T02:16:52 -01:00",
    "longitude": 4.2253270000000001,
    "email": "elbamartin@luxuria.com",
    "phone": "+1 (853) 429-2192",
    "address": "615 Auburn Place, Brady, Federated States Of Micronesia, 379",
    "latitude": 64.769829000000001,
    "balance": "$3,166.60",
    "favoriteDiscipline": "Crossfit",
    "company": "LUXURIA",
    "isActive": true
  },
  {
    "discipline": [
      "Crossfit",
      "Balance",
      "Core Strength"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Ea proident quis ipsum enim laborum aute culpa culpa elit consectetur. Proident esse duis tempor ut eu. Adipisicing sint est magna sunt Lorem. Laborum dolor culpa mollit commodo magna eu fugiat est culpa tempor est. Dolore quis est cillum aliqua ea laboris elit est pariatur ad anim. Esse ea magna do do exercitation tempor laboris sit non tempor reprehenderit exercitation reprehenderit irure.\r\n",
    "guid": "0f4240f9-be7a-4bb9-a95c-69704732e62c",
    "name": "Dorothea Glass",
    "gender": "female",
    "age": 33,
    "registered": "2015-10-31T08:43:36 -01:00",
    "longitude": -29.227585000000001,
    "email": "dorotheaglass@exodoc.com",
    "phone": "+1 (804) 491-3354",
    "address": "904 Bulwer Place, Gracey, West Virginia, 180",
    "latitude": 64.266057000000004,
    "balance": "$1,946.05",
    "favoriteDiscipline": "Fitness",
    "company": "EXODOC",
    "isActive": false
  },
  {
    "discipline": [
      "Core",
      "Yoga",
      "Fitness"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Et nostrud dolor ullamco exercitation laborum fugiat reprehenderit ut culpa. Mollit velit ea elit eiusmod. Elit labore Lorem sit laborum ullamco nisi culpa ipsum irure et do esse. Mollit eiusmod labore mollit ex.\r\n",
    "guid": "b133216f-6411-40a1-9ed9-1ffafe0338be",
    "name": "Harper Castaneda",
    "gender": "male",
    "age": 32,
    "registered": "2014-01-22T08:30:12 -01:00",
    "longitude": -132.979894,
    "email": "harpercastaneda@rockabye.com",
    "phone": "+1 (861) 577-3873",
    "address": "174 Hyman Court, Osmond, Nebraska, 9156",
    "latitude": -81.180802999999997,
    "balance": "$2,098.63",
    "favoriteDiscipline": "Bodybuilding",
    "company": "ROCKABYE",
    "isActive": false
  },
  {
    "discipline": [
      "Crossfit",
      "Fitness",
      "Bodybuilding"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Nostrud incididunt sunt fugiat exercitation elit adipisicing reprehenderit mollit aliquip consectetur. Proident anim aliqua irure eiusmod nostrud sunt ea dolor eiusmod in aute. Voluptate ut laborum velit aute est eu velit voluptate. Labore incididunt ea veniam cillum excepteur cillum.\r\n",
    "guid": "287bf696-ab1d-493e-9831-c5235003001e",
    "name": "Miriam Lawson",
    "gender": "female",
    "age": 24,
    "registered": "2014-05-20T03:24:12 -02:00",
    "longitude": 161.05689899999999,
    "email": "miriamlawson@poshome.com",
    "phone": "+1 (841) 501-3096",
    "address": "307 Ellery Street, Campo, New York, 1355",
    "latitude": 41.899622000000001,
    "balance": "$2,313.03",
    "favoriteDiscipline": "Core Strength",
    "company": "POSHOME",
    "isActive": false
  },
  {
    "discipline": [
      "Crossfit",
      "Bodybuilding",
      "Core"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Fugiat amet elit consequat duis ea velit amet. Nostrud proident nostrud laboris pariatur adipisicing ipsum ea laboris enim excepteur sit nulla do. Enim aute ullamco tempor est mollit in ea tempor et ad enim duis dolor. Irure pariatur pariatur irure eu do.\r\n",
    "guid": "28330fdc-5b9d-4cfe-8276-ea031c76d48a",
    "name": "Hester Spears",
    "gender": "male",
    "age": 23,
    "registered": "2015-01-20T06:36:52 -01:00",
    "longitude": 131.88651200000001,
    "email": "hesterspears@extro.com",
    "phone": "+1 (884) 568-3155",
    "address": "500 Drew Street, Neahkahnie, Kansas, 4196",
    "latitude": -37.429737000000003,
    "balance": "$2,129.82",
    "favoriteDiscipline": "Yoga",
    "company": "EXTRO",
    "isActive": false
  },
  {
    "discipline": [
      "Core Strength",
      "Bodybuilding",
      "Core Strength"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Id ullamco commodo nulla Lorem ex. Est pariatur sint nulla aliquip aliquip aute qui magna. Sint officia ex ullamco dolor cupidatat ea duis id. Ipsum amet deserunt esse dolor. Velit esse mollit culpa aliqua qui labore occaecat consequat non Lorem anim cillum dolore. Aliquip aute esse amet in duis ex enim excepteur ad occaecat qui.\r\n",
    "guid": "96392dbe-f8ee-481c-ae76-2ee44468bb33",
    "name": "Harrison Lowe",
    "gender": "male",
    "age": 28,
    "registered": "2015-10-27T02:00:33 -01:00",
    "longitude": 115.46745199999999,
    "email": "harrisonlowe@aquoavo.com",
    "phone": "+1 (891) 449-2512",
    "address": "495 Royce Place, Cornucopia, Michigan, 5111",
    "latitude": 73.824838999999997,
    "balance": "$2,807.55",
    "favoriteDiscipline": "Balance",
    "company": "AQUOAVO",
    "isActive": true
  },
  {
    "discipline": [
      "Yoga",
      "Core",
      "Balance"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Sunt irure eu dolore mollit. Amet enim ad duis cillum qui. Sit ex enim nostrud sit pariatur ipsum proident eu elit. Elit eiusmod cupidatat laboris cupidatat tempor reprehenderit. Non occaecat qui non consectetur do elit incididunt ipsum. Ex qui occaecat Lorem qui.\r\n",
    "guid": "37e1da0d-58be-4e27-a424-0154b62bb034",
    "name": "Dale Blankenship",
    "gender": "female",
    "age": 31,
    "registered": "2014-04-28T10:23:07 -02:00",
    "longitude": -0.13005800000000001,
    "email": "daleblankenship@waterbaby.com",
    "phone": "+1 (998) 490-3771",
    "address": "507 Just Court, Stevens, Pennsylvania, 5677",
    "latitude": 12.543786000000001,
    "balance": "$1,759.32",
    "favoriteDiscipline": "Fitness",
    "company": "WATERBABY",
    "isActive": true
  },
  {
    "discipline": [
      "Core",
      "Core Strength",
      "Balance"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Duis tempor aliqua cillum Lorem qui officia sunt do veniam ut. Magna eiusmod id aliqua laboris amet veniam elit voluptate tempor pariatur ex. Esse amet ullamco sint magna ex nostrud. Do quis ea irure duis. Irure aliquip exercitation fugiat irure qui consectetur aute voluptate tempor ipsum consequat voluptate elit nulla.\r\n",
    "guid": "672123ee-c0fa-4f76-af44-0c66b5f25175",
    "name": "Phyllis Knowles",
    "gender": "female",
    "age": 40,
    "registered": "2014-03-21T10:35:14 -01:00",
    "longitude": 7.1966380000000001,
    "email": "phyllisknowles@turnling.com",
    "phone": "+1 (829) 479-2024",
    "address": "439 Hornell Loop, Garfield, North Carolina, 9923",
    "latitude": 61.922376999999997,
    "balance": "$2,461.88",
    "favoriteDiscipline": "Crossfit",
    "company": "TURNLING",
    "isActive": true
  },
  {
    "discipline": [
      "Bodybuilding",
      "Bodybuilding",
      "Bodybuilding"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Do Lorem ex esse proident nulla esse duis. Ad quis occaecat amet est sit cillum culpa fugiat esse id ipsum velit. Veniam dolore nulla consequat labore magna veniam dolor velit incididunt magna sint.\r\n",
    "guid": "5ffbd5a9-61b5-442c-9891-d4d4795dd477",
    "name": "Mable Osborn",
    "gender": "female",
    "age": 31,
    "registered": "2014-12-10T04:57:52 -01:00",
    "longitude": -168.27973499999999,
    "email": "mableosborn@minga.com",
    "phone": "+1 (809) 556-3742",
    "address": "645 Fenimore Street, Dante, New Mexico, 4755",
    "latitude": 23.72073,
    "balance": "$2,679.66",
    "favoriteDiscipline": "Crossfit",
    "company": "MINGA",
    "isActive": false
  },
  {
    "discipline": [
      "Fitness",
      "Core Strength",
      "Power"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Et eu labore consequat adipisicing velit culpa nostrud nulla. Aliquip qui qui non exercitation aliquip culpa dolor consectetur. Anim dolore aliqua elit ipsum sunt labore aliqua occaecat magna eiusmod reprehenderit ad adipisicing. Aliquip id incididunt mollit aute non qui ea laborum.\r\n",
    "guid": "2fbf3df8-a4b4-4c82-8913-69b3e9994c44",
    "name": "Randolph Nelson",
    "gender": "male",
    "age": 38,
    "registered": "2015-07-06T11:14:12 -02:00",
    "longitude": 9.3447980000000008,
    "email": "randolphnelson@hydrocom.com",
    "phone": "+1 (898) 486-2769",
    "address": "408 Micieli Place, Wacissa, Mississippi, 9575",
    "latitude": -6.7442739999999999,
    "balance": "$2,430.76",
    "favoriteDiscipline": "Core",
    "company": "HYDROCOM",
    "isActive": false
  },
  {
    "discipline": [
      "Core Strength",
      "Balance",
      "Power"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Quis minim laboris elit labore elit cillum dolore Lorem aliquip nisi ullamco culpa. Duis mollit esse labore aliquip sint incididunt. Consectetur voluptate duis cupidatat tempor ullamco quis adipisicing sit commodo. Do nostrud culpa culpa voluptate.\r\n",
    "guid": "d9f76660-56b2-4ea5-a519-99b82abc5d10",
    "name": "Guzman Cameron",
    "gender": "male",
    "age": 37,
    "registered": "2014-07-21T09:27:05 -02:00",
    "longitude": -21.478922000000001,
    "email": "guzmancameron@zilidium.com",
    "phone": "+1 (852) 406-2914",
    "address": "734 Durland Place, Hillsboro, Iowa, 218",
    "latitude": 12.753572,
    "balance": "$1,324.25",
    "favoriteDiscipline": "Core",
    "company": "ZILIDIUM",
    "isActive": true
  },
  {
    "discipline": [
      "Yoga",
      "Bodybuilding",
      "Core Strength"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Dolore aliqua sit occaecat exercitation nostrud quis eu ipsum adipisicing aliquip. Consectetur officia anim laborum proident aute non ex voluptate culpa et. Ad consequat commodo amet pariatur magna. Non consectetur non nisi reprehenderit et Lorem adipisicing aliqua enim irure eiusmod dolor. Pariatur ea ad velit est dolore est pariatur culpa ad dolore. Aliquip irure Lorem est nostrud sunt non nisi minim amet voluptate ad. Adipisicing aliqua officia ex ad.\r\n",
    "guid": "f1302811-5f8f-4405-90b7-51e15b96271f",
    "name": "Tameka Rowe",
    "gender": "female",
    "age": 23,
    "registered": "2015-12-03T11:22:52 -01:00",
    "longitude": 105.835138,
    "email": "tamekarowe@xth.com",
    "phone": "+1 (861) 477-2458",
    "address": "298 Maple Street, Glendale, California, 7188",
    "latitude": 23.706427999999999,
    "balance": "$3,813.66",
    "favoriteDiscipline": "Balance",
    "company": "XTH",
    "isActive": true
  },
  {
    "discipline": [
      "Power",
      "Bodybuilding",
      "Core"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Ex ullamco amet officia id. Aliqua sint ipsum deserunt tempor amet veniam amet dolor nostrud. Eiusmod ullamco aute exercitation id commodo officia eu adipisicing. Officia nostrud non anim esse ut sint aliqua dolore dolore.\r\n",
    "guid": "5d270ef3-1b8b-460d-b156-75e5d2e620f7",
    "name": "Aguirre Mendoza",
    "gender": "male",
    "age": 35,
    "registered": "2014-01-09T07:54:21 -01:00",
    "longitude": 24.295994,
    "email": "aguirremendoza@biflex.com",
    "phone": "+1 (946) 437-2331",
    "address": "200 Herkimer Street, Denio, District Of Columbia, 6753",
    "latitude": 88.559978000000001,
    "balance": "$3,819.09",
    "favoriteDiscipline": "Balance",
    "company": "BIFLEX",
    "isActive": true
  },
  {
    "discipline": [
      "Crossfit",
      "Fitness",
      "Crossfit"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Aliqua dolor dolor laboris laborum ipsum cupidatat et. Enim fugiat esse minim est aliqua ullamco aliquip sit ipsum nostrud mollit. Ullamco mollit elit amet laboris tempor ad proident. Pariatur nostrud esse dolor ipsum minim. Laborum dolor esse sint ut ad eu laboris pariatur enim. Nostrud magna esse occaecat ipsum ex labore velit velit ad ad.\r\n",
    "guid": "9f8ddb2a-52d6-4557-8c8c-b2b2f7d31a51",
    "name": "Vivian Emerson",
    "gender": "female",
    "age": 27,
    "registered": "2014-06-10T01:20:35 -02:00",
    "longitude": 20.150755,
    "email": "vivianemerson@tubalum.com",
    "phone": "+1 (959) 501-2638",
    "address": "899 Banker Street, Vivian, Arizona, 6183",
    "latitude": 16.458003000000001,
    "balance": "$3,750.80",
    "favoriteDiscipline": "Crossfit",
    "company": "TUBALUM",
    "isActive": false
  },
  {
    "discipline": [
      "Fitness",
      "Core",
      "Yoga"
    ],
    "picture": "http://placehold.it/100x100?text=Spoort",
    "about": "Ex ex occaecat adipisicing ullamco irure dolore laborum occaecat cillum minim nulla. Pariatur deserunt magna enim adipisicing dolore enim exercitation commodo reprehenderit id ad. Veniam ut exercitation ipsum deserunt nulla occaecat veniam veniam amet non. Dolore nisi cupidatat minim consectetur velit est aliqua magna exercitation incididunt tempor velit eiusmod. Velit eiusmod incididunt voluptate fugiat consectetur adipisicing tempor enim et enim officia consectetur fugiat esse.\r\n",
    "guid": "547c8654-03da-4ba4-8394-79985310f05f",
    "name": "Lilly Berry",
    "gender": "female",
    "age": 24,
    "registered": "2015-02-10T04:59:46 -01:00",
    "longitude": -87.651165000000006,
    "email": "lillyberry@elemantra.com",
    "phone": "+1 (873) 581-2657",
    "address": "207 Polar Street, Boyd, Vermont, 5757",
    "latitude": -13.574506,
    "balance": "$1,503.70",
    "favoriteDiscipline": "Balance",
    "company": "ELEMANTRA",
    "isActive": false
  }];


class Trainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trainers
    }
  }

  filterPeople() {
    const search = {};
    return _.filter(this.state.trainers, search);
	}

  render() {
    const selectedPeople = this.filterPeople();
    const peopleElements = selectedPeople.map((trainer) => {
      return(
        <div className='card--outer' key={trainer.guid}>
          <div className='card--inner'>
            <img src={trainer.picture} className='avatar'></img>
            <div className='information'>
              <p className='fullname'>{trainer.name}</p>
              <p className='discipline'>{trainer.discipline}</p>
              <div className='details'>
                <span className='cost'>
                  <i className='fa fa-usd'></i>
                  <span>25</span>
                </span>
                <span className='time'>
                  <i className='fa fa-clock-o'></i>
                  <span>0:45</span>
                </span>
              </div>
            </div>
            <div className='btn btn--primary'>View details</div>
          </div>
        </div>
      )
    })
    return(
      <div>
        {peopleElements}
      </div>
    )
  }
}

export default Trainer;
