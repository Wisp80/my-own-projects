const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

let countries = [
    "Saint Helena, Ascension and Tristan da Cunha",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "DRC",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Vatican city",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "St.Vincent and Grenadine",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UAE",
    "United Kingdom",
    "USA",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

function Card(
    x, y, name, hp, attack,
    ability, cardImage,
    isDead, isCapitalist, isInEU, isInNATO, formOfGovernment, hasCoastline, isInArabLeague
) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.ability = ability;
    this.cardImage = cardImage;
    this.isDead = isDead;
    this.isCapitalist = isCapitalist;
    this.isInEU = isInEU;
    this.isInNATO = isInNATO;
    this.formOfGovernment = formOfGovernment;
    this.hasCoastline = hasCoastline;
    this.isInArabLeague = isInArabLeague;
};

let cards = {
    nauru: new Card(20, 20, 'Nauru', 64, 75,
        {
            abilityName: 'Tidal wave',
            isAbilityPassive: true,
            ability: function () {
                if (nauru.isDead === true) {
                    console.log('wipe out 33% of any country with coastline HP');
                };
            }
        },

        {
            cardImage: new Image(100, 120),
            cardImagesrc: './src/nauru-card.png'
        }, false, true, false, false, 'democracy', true, false
    ),

    eu: new Card(20, 20, 'EU', 1800, 0,
        {
            abilityName: 'Treaty of Rome',
            isAbilityPassive: true,
            ability: function () {
                // if (nauru.isDead === true) {
                //     console.log('wipe out 33% of any country with coastline HP');
                // };
            }
        },

        {
            cardImage: new Image(142, 200),
            cardImagesrc: './src/eu-card.png'
        }, false, true, false, false, 'democracy', true, false
    ),

    oman: new Card(20, 20, 'Oman', 333, 47,
        {
            abilityName: 'You want oil?',
            isAbilityPassive: true,
            ability: function () {
                // if (nauru.isDead === true) {
                //     console.log('wipe out 33% of any country with coastline HP');
                // };
            }
        },

        {
            cardImage: new Image(142, 200),
            cardImagesrc: './src/eu-card.png'
        }, false, true, false, false, 'monarchist', true, true
    ),
};

cards.eu.cardImage.cardImage.src = cards.eu.cardImage.cardImagesrc;
cards.eu.cardImage.cardImage.onload = () => {
    ctx.drawImage(cards.eu.cardImage.cardImage, 20, 20, 1420 * 0.18, 2000 * 0.18)
};

let yourHand = [
    cards.eu, cards.nauru
];