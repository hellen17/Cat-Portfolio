const vetData = [
    {
        "id": 1,
        "name": ["Dr. Benjamin Oundo"],
        "city": "Nairobi",
        "location": "Mlolongo Jempark Building",
        "clinicName": "Paws & Claws Veterinary Clinic",
        "phone": ["+254 727 340992"],
        "email": "benjaminoundo@outlook.com",     
    },
    {
        "id": 2,
        "name": ["Dr. Samuel Apiyo","Dr. Chris Shikuku"],
        "city": "Nairobi",
        "location": "Muthaiga Mini Market, Limuru Road",
        "clinicName": "Pets Center, Muthaiga",
        "phone": ["+254 722 815882"],
        "email": ""
    },
    {
        "id": 3,
        "name": ["Dr. Dennis Maube","Dr. Gabriel Ouma"],
        "city": "Nairobi",
        "location": "Ongata Rongai, Magadi Rd",
        "clinicName": "Small Five Vet Clinic,Riverside Business Complex (Hashi)",
        "phone": ["0720044038", "0702624945"],
        "email": "info@vetclinic.co.ke"
    },
    {
        "id": 4,
        "name": ["Dr. Obadiah Singoei"],
        "city": "Nairobi",
        "location": "Ambulatory (mobile)",
        "clinicName": "",
        "phone": ["+254 715 805661"],
        "email": "osingoei@yahoo.com "
    },
    {
        "id": 5,
        "name": ["Dr. Allan Elavula"],
        "city": "Nairobi",
        "location": "Ruaka",
        "clinicName": "Ela veterinary clinic",
        "phone": ["+254 790 878333", "+254 723 790766"],
        "email": "elavetclinics@gmail.com"
    },
    {
        "id": 6,
        "name": ["Dr. Ndurumo M. Stephen"],
        "city": "Nairobi",
        "location": "Kongoni Road, Hardy, Karen",
        "clinicName": "Hardy Veterinary Clinic",
        "phone": ["0728962833", "0768015191"],
        "email": "dr.nsteve@gmail.com"
    },
    {
        "id": 7,
        "name": ["Dr. Andrew Gitari"],
        "city": "Nairobi",
        "location": "Ngong’ Road",
        "clinicName": "The Andys Veterinary Hospital",
        "phone": ["0722752182", "0708622831", "0722245352"],
        "email": "andysvetclinic@gmail.com"

    },
    {
        "id": 8,
        "name": ["Dr. Cohen Onsoti"],
        "city": "Nairobi",
        "location": "Ambulatory & house calls",
        "clinicName": "Cohen's Petcare",
        "phone": ["+254 713139852"],
        "email": "cohenspetcare@gmail.com"
    },
    {
        "id": 9,
        "name": ["Dr. Griffins Mwendwa Mulonzi"],
        "city": "Nairobi",
        "location": "Exit 10, Kahawa Sukari, Off Thika Road",
        "clinicName": "The Noble Veterinary Surgeons",
        "phone": ["+254722657719"],
        "email": "info@thenoblevet.com"
    },
    {
        "id": 10,
        "name": ["Dr. Omosa Ochwang’"],
        "city": "Nairobi",
        "location": "James Gichuru Road, Lavington",
        "clinicName": "St. Austin’s Veterinary Clinic, & University of Nairobi",
        "phone": [""],
        "email": "0723-759997"

    },
    {
        "id": 11,
        "name": ["Prof. Susan Mbugua"],
        "city": "Nairobi",
        "location": "James Gichuru Road, Lavington",
        "clinicName": "St. Austin’s Veterinary Clinic",
        "phone": ["0722-746020"],
        "email": ""
    },
    {
        "id": 12,
        "name": ["Dr. Eng. Cynthia Njeri"],
        "city": "Nairobi",
        "location": "James Gichuru Road, Lavington",
        "clinicName": "St. Austin’s Veterinary Clinic",
        "phone": ["0726-749374"],
        "email": ""
    },
    {
        "id": 13,
        "name": ["Dr. Joyce Gakombe"],
        "city": "Nairobi",
        "location": "James Gichuru Road, Lavington",
        "clinicName": "St. Austin’s Veterinary Clinic",
        "phone": ["0722-552673"],
        "email": ""
    },
    {
        "id": 14,
        "name": ["Dr. Henry Emonje"],
        "city": "Nairobi",
        "location": "Kabete",
        "clinicName": "Vet on call",
        "phone": ["+254712113175"],
        "email": "henrymukabwa@gmail.com"
    },
    {
        "id": 15,
        "name": ["Dr. Willy Mwangi Edwin"],
        "city": "Nairobi",
        "location": "Upper Kabete",
        "clinicName": "University of Nairobi Veterinary Teaching and Referral Hospital",
        "phone": ["+254 724 625525"],
        "email": "drwillymwangi@gmail.com"
    },
    {
        "id": 16,
        "name": ["Dr. Desmond Tutu"],
        "city": "Nairobi",
        "location": "Rosslyn Lone Tree Estate, House 17C",
        "clinicName": "TNR Trust",
        "phone": ["+254 701 730974"],
        "email": "Agwaty@gmail.com"
    },
    {
        "id": 17,
        "name": ["Dr. Ombasa Jared"],
        "city": "Nairobi",
        "location": "Ngong Branch - Kony House, Zambia stage, near Ngong",
        "clinicName": "Lynden Vet Clinic",
        "phone": ["(+254) 721274857", "(+254) 721440966"],
        "email": ""
    },
    {
        "id": 18,
        "name": ["Prof. Susan Mbugua"],
        "city": "Nairobi",
        "location": "Lavington, Nairobi",
        "clinicName": "St. Austin’s Vet Clinic",
        "phone": ["0722 646191"],
        "email": ""
    },
    {
        "id": 19,
        "name": ["Dr. Nonee Magre"],
        "city": "Nairobi",
        "location": "Marula Lane, Karen, Nairobi",
        "clinicName": "Nonee Magre Vet Clinic",
        "phone": ["0746 505211"],
        "email": ""
    },
    {
        "id": 20,
        "name": ["Dr Amardeep Sura"],
        "city": "Nairobi",
        "location": "Westlands",
        "clinicName": " Dr. Sura A.S Vet Clinic",
        "phone": ["+254 722 659710", "+254 734 659 710"],
        "email": ""
    },
    {
        "id": 21,
        "name": ["Dr. Humphrey Peter Ng'ang'a"],
        "city": "Nairobi",
        "location": "Kiambu Road, Opposite KIST",
        "clinicName": "NASCAH – Nairobi Small & Companion Animals Hospital",
        "phone": ["0722 356780"],
        "email": "info@nascah.co.ke"
    },
    {
        "id": 22,
        "name": ["Dr. Bodwin Ruheni"],
        "city": "Nairobi",
        "location": "Garden Estate near Mountain Mall, Thika Road.",
        "clinicName": "Alphapet Veterinary Clinic",
        "phone": ["+254 722 987767"],
        "email": ""
    },
    {
        "id": 23,
        "name": ["Dr. Moses Olum", "Dr. Evans Juma"],
        "city": "Nairobi",
        "location": "Rhapta Road, Westlands,",
        "clinicName": "Jacaranda Vet Clinic",
        "phone": ["+254 729 939374", "+254720486797"],
        "email": "info@javarandavetclinic.co.ke"
    },
    {
        "id": 24,
        "name": ["Dr Sanjay"],
        "city": "Nairobi",
        "location": "Miotoni Road, Karen",
        "clinicName": "Rottcher Vets Clinic",
        "phone": ["0714 831248"],
        "email": ""
    },
    {
        "id": 25,
        "name": ["Dr. Henry Isadiah"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Nairobi Petvets",
        "phone": ["0715950701"],
        "email": ""
    },
    {
        "id": 26,
        "name": ["Dr Cynthia Njer"],
        "city": "Nairobi",
        "location": "09 Mayfair Maisonattes A5, Mpaka Road",
        "clinicName": "Westlands Veterinary Clinic",
        "phone": ["0726749374"],
        "email": "drcynthianjeri@gmail.com"
    },
    {
        "id": 27,
        "name": ["Dr. Japheth"],
        "city": "Nairobi",
        "location": "Muthaiga North Parkside",
        "clinicName": "",
        "phone": ["+254718034580"],
        "email": "Mairojapheth11@gmail.com  "
    },
    {
        "id": 28,
        "name": ["Cecilia Njoroge"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Ambulatory clinic",
        "phone": ["0722951495"],
        "email": "cecil4874@gmail.com"
    },
    {
        "id": 29,
        "name": ["Dr. Wallace Waweru"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Vetwall Services",
        "phone": ["0723278168"],
        "email": " wallacewaweru91@gmail.com"
    },
    {
        "id": 30,
        "name": ["Dr. Daniel Wambua Wanja"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "PharmVet & Agro Supplies",
        "phone": ["0728393274 "],
        "email": "wanjadanie@gmail.com"
    },
    {
        "id": 31,
        "name": ["Dr. Rose Nyokabi"],
        "city": "Nairobi",
        "location": "Kikuyu",
        "clinicName": "",
        "phone": ["0728495887"],
        "email": "rozievalen@gmail.com"
    },
    {
        "id": 32,
        "name": ["Mary Mugwe"],
        "city": "Nairobi",
        "location": "Kikuyu",
        "clinicName": "",
        "phone": ["0729212584"],
        "email": "marymugwew@gmail.com"
    },
    {
        "id": 33,
        "name": ["Dr. Edward Njenga Njoroge"],
        "city": "Nairobi",
        "location": "Kikuyu",
        "clinicName": "A+ Vet Services",
        "phone": ["+254726142005"],
        "email": "edwarq32@gmail.com"
    },
    {
        "id": 34,
        "name": ["Dr. Linus Mwirigi James"],
        "city": "Nairobi",
        "location": "Kikuyu",
        "clinicName": "VetHeal Veterinary Services",
        "phone": ["0720906533"],
        "email": "vethealclinic@gmail.com"
    },
    {
        "id": 35,
        "name": ["Dr. Kisianan Kenana"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "",
        "phone": ["0723431291 "],
        "email": "jkisianan@gmail.com"
    },
    {
        "id": 36,
        "name": ["Dr. Nickson K. Lang’at"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Fahari Veterinary Services – Ambulatory",
        "phone": ["0727426449","0732029355","0796140226 "],
        "email": "nickklangat@gmail.com"
    },
    {
        "id": 37,
        "name": ["Dr. Mercy Barasa"],
        "city": "Nairobi",
        "location": "Ngumo",
        "clinicName": "Petville Clinic",
        "phone": ["0716074674"],
        "email": ""
    },
    {
        "id": 38,
        "name": ["Dr. Mwikali Mugachia"],
        "city": "Nairobi",
        "location": "Thika Road",
        "clinicName": "Garden Vet Clini",
        "phone": ["+254722526897"],
        "email": ""
    },
    {
        "id": 39,
        "name": ["Dr. Krishna Kesari"],
        "city": "Nairobi",
        "location": "Ambulatory",
        "clinicName": "Westlands",
        "phone": ["0731064693"],
        "email": "Krishnamkesharia@gmail.com"
    },
    {
        "id": 40,
        "name": ["Dr. Lilyan Mathai"],
        "city": "Nairobi",
        "location": "Kabete",
        "clinicName": "University of Nairobi, Small Animal Clinic ",
        "phone": ["0720737646"],
        "email": "drlilyanmathai@gmail.com"
    },
    {
        "id": 41,
        "name": ["Dr. Dominic King'ori"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Fauna Veterinary Services",
        "phone": ["0714225998"],
        "email": "faunavet540@gmail.com"
    },
    {
        "id": 42,
        "name": ["Dr Boscoh Kimathi"],
        "city": "Nairobi",
        "location": "Eastlands",
        "clinicName": "",
        "phone": ["0723670941"],
        "email": "Kimathibos@gmail.com"
    },
    {
        "id": 43,
        "name": ["Dr. Vivian Saina"],
        "city": "Nairobi",
        "location": "Embakasi ",
        "clinicName": "Animal's Choice Mobile Vets",
        "phone": ["0706101225"],
        "email": ""
    },
    {
        "id": 44,
        "name": ["Dr. Martin M. Nyaga"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Vet on Call Healthcare",
        "phone": ["0721470028"],
        "email": "Vetoncal@gmail.com"
    },
    {
        "id": 45,
        "name": ["Dr. Kennedy O. Ogolla"],
        "city": "Nairobi",
        "location": "Zambezi-Kikuyu-Kinoo",
        "clinicName": "",
        "phone": ["0710143604"],
        "email": "kokothogola2008@gmail.com"
    },
    {
        "id": 46,
        "name": ["Dr. Mwendwa Mulonzi "],
        "city": "Nairobi",
        "location": "South B, Along Plainsview Rd.",
        "clinicName": "Griffins Veterinary Clinic	",
        "phone": ["0722608446"],
        "email": "griffinsvetclinic@gmail.com"
    },
    {
        "id": 47,
        "name": ["Kanjau Morris"],
        "city": "Nairobi",
        "location": "Ambulatory, Kahawa, Thika Road",
        "clinicName": "",
        "phone": ["0717459729"],
        "email": "morriskanjau159@gmail.com"
    },
    {
        "id": 48,
        "name": ["Dr. Jackson Ngure Mugo"],
        "city": "Nairobi",
        "location": "Thika road & environs",
        "clinicName": "Nene Veterinary Clinic",
        "phone": ["0724-240822"],
        "email": ""
    },
    {
        "id": 49,
        "name": ["Dr. Tiffany Naomi Kung'u"],
        "city": "Nairobi",
        "location": "Ambulatory Services",
        "clinicName": "Mobile",
        "phone": ["0722586383"],
        "email": "naomikungu@gmail.com"
    },
    {
        "id": 50,
        "name": ["Dr. Oloo Vincen"],
        "city": "Nairobi",
        "location": "Lang’ata",
        "clinicName": "Amazing Vet Services",
        "phone": ["0728371686"],
        "email": "Vinnyoloo@yahoo.com"
    },
    {
        "id": 51,
        "name": ["Dr. Nchagwa Chacha"],
        "city": "Nairobi",
        "location": "Mai Mahiu Road, Nairobi West",
        "clinicName": "Poseidon veterinary clinic ",
        "phone": ["0721797097"],
        "email": "info@poseidonvet.com"
    },
    {
        "id": 52,
        "name": ["Dr. Esther Macharia"],
        "city": "Nairobi",
        "location": "Upper Kabete",
        "clinicName": "University of Nairob",
        "phone": ["0728878717"],
        "email": ""
    },
    {
        "id": 53,
        "name": ["Dr. Maureen Kanana Murithi"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Happy Pet Animal Consulting Services",
        "phone": ["072563294"],
        "email": ""
    },
    {
        "id": 54,
        "name": ["Dr. Marsden Onsare"],
        "city": "Kisumu",
        "location": "Tom Mboya Estate, along Kisumu - Kakamega highway, opposite Kondele police station",
        "clinicName": "Aniworld Veterinary Clinic",
        "phone": ["+254 572 029971", "+254 708 192291", "+254 732 395125"],
        "email": "info@aniworldvetclinic.co.ke"
    },
    {
        "id": 55,
        "name": ["Dr. Eric Nyamwaya"],
        "city": "Kisumu",
        "location": "Kisumu, Homabay, Siaya, Migori, Kisii",
        "clinicName": "Tingle Veterinary Services",
        "phone": ["0711447193"],
        "email": "ericnyamwaya@gmail.com"
    },
    {
        "id": 56,
        "name": ["Dr. Lewis Macharia"],
        "city": "Nairobi",
        "location": "Juja / Ruiru",
        "clinicName": "",
        "phone": ["+254 726933577"],
        "email": "lewisndegwa@yahoo.com"
    },
    {
        "id": 57,
        "name": ["Dr. Emily Ouma"],
        "city": "Nairobi",
        "location": "",
        "clinicName": "Briggits veterinary clinic and services",
        "phone": ["0770546921", "0700063292"],
        "email": "briggitsvetclinic@gmail.com"
    },
    {
        "id": 58,
        "name": ["Dr. Alexander Onyango"],
        "city": "Busia",
        "location": "Busia",
        "clinicName": "Busia County Government Vet",
        "phone": ["+254 726 478709"],
        "email": ""
    },
    {
        "id": 59,
        "name": ["Dr. Edwin Okoth Ochieng"],
        "city": "Busia",
        "location": "Busia",
        "clinicName": "Edga Veterinary Services",
        "phone": ["+254 711 112122"],
        "email": "edudvm14@gmail.com"
    },
    {
        "id": 60,
        "name": ["Dr. D. W.Lubakhwa"],
        "city": "Kitale",
        "location": "Kiminini, Kitale",
        "clinicName": "Crown Royale Agrovet & Clinic",
        "phone": ["0700305180"],
        "email": "Crownroyaleagrovets@gmail.com "
    },

]

module.exports = vetData;