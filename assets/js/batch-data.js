/************************************************************
 * Dummy batch DB – 30 unique batches (10 per product)
 * Extracted from NEW ANVESHAK UPDATED/product-search.js
 ************************************************************/
const dummyBatches = {
  /* ========== ASHWAGANDHA (10 unique) ========== */
  "ASHVA-2025-0001": {
    product: "Ashwagandha",
    stages: {
      farmer: "Farmer: Ram Singh, Dewas (MP) • Geo: 22.9634° N, 76.0000° E • Harvest: 05-11-2025",
      collection: "Collector: Indore Aggregator • Pickup: 06-11-2025 09:20 • From: Dewas • To: Indore Hub",
      factory: "Factory: Indore Unit-1 • Process: Root shade-dry & powder • Mfg: 12-11-2025 • Exp: 12-11-2027",
      packaging: "Packaging: 60-cap bottles • 14-11-2025 • Invoice: INV-ASH-001 • Label: AshvaPure",
      logistics: "Logistics: Indore Hub → Mumbai (Road) • Dispatched: 15-11-2025 • ETA: 18-11-2025",
      consumer: "Delivered: 18-11-2025 • 16:10 • Address: Bandra, Mumbai"
    }
  },
  "ASHVA-2025-0002": {
    product: "Ashwagandha",
    stages: {
      farmer: "Farmer: Harish Patel, Ujjain • Geo: 23.1815° N, 75.7840° E • Harvest: 07-11-2025",
      collection: "Collector: UjjainCo • Pickup: 08-11-2025 10:10 • To: Indore Hub",
      factory: "Factory: Indore Unit-1 • Process: Root-clean & low-temp dry • Mfg: 13-11-2025 • Exp: 13-11-2027",
      packaging: "Packaging: 120g powder pouches • 15-11-2025 • Invoice: INV-ASH-002 • Label: AshvaHerb",
      logistics: "Logistics: Indore → Pune (Road) • Dispatched: 16-11-2025 • ETA: 19-11-2025",
      consumer: "Delivered: 19-11-2025 • 10:45 • Address: Kothrud, Pune"
    }
  },
  "ASHVA-2025-0003": {
    product: "Ashwagandha",
    stages: {
      farmer: "Farmer: Sohan Lal, Dhar • Geo: 22.5926° N, 75.1926° E • Harvest: 09-11-2025",
      collection: "Collector: Central Aggregates • Pickup: 10-11-2025 08:55 • From: Dhar • To: Indore Hub",
      factory: "Factory: Indore Unit-1 • Process: Pulverize & sieve (mesh 80) • Mfg: 16-11-2025 • Exp: 16-11-2027",
      packaging: "Packaging: 30-cap travel packs • 18-11-2025 • Invoice: INV-ASH-003",
      logistics: "Logistics: Indore → Delhi (Air) • Dispatched: 17-11-2025 • ETA: 22-11-2025",
      consumer: "Delivered: 22-11-2025 • 09:30 • Address: Rohini, Delhi"
    }
  },
  "ASHVA-2025-0004": {
    product: "Ashwagandha",
    stages: {
      farmer: "Farmer: Mahesh Prajapati, Ratlam • Geo: 22.5780° N, 75.0247° E • Harvest: 10-11-2025",
      collection: "Collector: WesternFarm Co • Pickup: 11-11-2025 11:42 • To: Indore Hub",
      factory: "Factory: Indore Unit-2 • Process: Shade drying & grading • Mfg: 17-11-2025 • Exp: 17-11-2027",
      packaging: "Packaging: 60-cap bottles • 19-11-2025 • Invoice: INV-ASH-004",
      logistics: "Logistics: Indore → Jaipur (Road) • ETA: 23-11-2025",
      consumer: "Delivered: 23-11-2025 • 14:20 • Vaishali Nagar, Jaipur"
    }
  },
  "ASHVA-2025-0005": {
    product: "Ashwagandha",
    stages: {
      farmer: "Farmer: Raghav Yadav, Mandsaur • Geo: 24.0476° N, 75.1234° E • Harvest: 11-11-2025",
      collection: "Collector: MandsaurPickup • Pickup: 12-11-2025 10:30 • To: Indore",
      factory: "Factory: Indore Unit-1 • Process: Sorting & low-temp drying • Mfg: 18-11-2025 • Exp: 18-11-2027",
      packaging: "Packaging: 200g powder jars • 20-11-2025 • Invoice: INV-ASH-005",
      logistics: "Logistics: Indore → Hyderabad (Road) • ETA: 25-11-2025",
      consumer: "Delivered: 25-11-2025 • 11:05 • Hitech City, Hyderabad"
    }
  },
  "ASHVA-2025-0006": { product: "Ashwagandha", stages: { farmer: "Farmer: Karan Solanki, Neemuch • Geo: 24.4731° N, 75.1201° E • Harvest: 13-11-2025", collection: "Collector: NeemuchCollect • Pickup: 14-11-2025 09:15", factory: "Factory: Indore Unit-3 • Process: Low-temp dehydration • Mfg: 19-11-2025 • Exp: 19-11-2027", packaging: "Packaging: 30-cap starter pack • 21-11-2025 • Invoice: INV-ASH-006", logistics: "Logistics: Indore → Ahmedabad (Road) • ETA: 26-11-2025", consumer: "Delivered: 26-11-2025 • 13:40 • SG Highway, Ahmedabad" } },
  "ASHVA-2025-0007": { product: "Ashwagandha", stages: { farmer: "Farmer: Ramesh Chauhan, Burhanpur • Geo: 21.3236° N, 76.2338° E • Harvest: 14-11-2025", collection: "Collector: BurhanpurHub • Pickup: 15-11-2025 08:50", factory: "Factory: Indore Unit-1 • Cleaning & QC checks • Mfg: 21-11-2025 • Exp: 21-11-2027", packaging: "Packaging: 60-cap bottles (organic label) • 23-11-2025 • Invoice: INV-ASH-007", logistics: "Logistics: Indore → Lucknow (Road) • ETA: 28-11-2025", consumer: "Delivered: 28-11-2025 • 10:25 • Gomti Nagar, Lucknow" } },
  "ASHVA-2025-0008": { product: "Ashwagandha", stages: { farmer: "Farmer: Sunil Mehta, Khargone • Geo: 21.8148° N, 75.6100° E • Harvest: 15-11-2025", collection: "Collector: KhargoneAgri • Pickup: 16-11-2025 10:15", factory: "Factory: Indore Unit-2 • Drying & encapsulation • Mfg: 22-11-2025 • Exp: 22-11-2027", packaging: "Packaging: 30-cap travel blister packs • 24-11-2025 • Invoice: INV-ASH-008", logistics: "Logistics: Indore → Kolkata (Rail+Road) • ETA: 30-11-2025", consumer: "Delivered: 30-11-2025 • 15:55 • Salt Lake, Kolkata" } },
  "ASHVA-2025-0009": { product: "Ashwagandha", stages: { farmer: "Farmer: Deepak Verma, Sehore • Geo: 22.1136° N, 77.0910° E • Harvest: 16-11-2025", collection: "Collector: SehoreCollect • Pickup: 17-11-2025 09:05", factory: "Factory: Indore Unit-1 • Root drying & batch QC • Mfg: 23-11-2025 • Exp: 23-11-2027", packaging: "Packaging: 120g powder pouch • 25-11-2025 • Invoice: INV-ASH-009", logistics: "Logistics: Indore → Chennai (Air) • ETA: 01-12-2025", consumer: "Delivered: 01-12-2025 • 12:40 • Velachery, Chennai" } },
  "ASHVA-2025-0010": { product: "Ashwagandha", stages: { farmer: "Farmer: Ravi Joshi, Khandwa • Geo: 21.8339° N, 76.3523° E • Harvest: 17-11-2025", collection: "Collector: KhandwaAgri • Pickup: 18-11-2025 11:10", factory: "Factory: Indore Unit-3 • Sorting & encapsulation • Mfg: 24-11-2025 • Exp: 24-11-2027", packaging: "Packaging: 60-cap bottles • 26-11-2025 • Invoice: INV-ASH-010", logistics: "Logistics: Indore → Bengaluru (Road) • ETA: 02-12-2025", consumer: "Delivered: 02-12-2025 • 10:05 • Whitefield, Bengaluru" } },

  /* ========== TULSI (10 unique) ========== */
  "TULSI-2025-0001": { product: "Tulsi", stages: { farmer: "Farmer: Shyam Patil, Nashik • Geo: 19.9975° N, 73.7898° E • Harvest: 01-10-2025", collection: "Collector: NashikLeaf • Pickup: 02-10-2025 09:30 • To: Pune Hub", factory: "Factory: Pune Unit-2 • Shade-dry & aroma lock • Mfg: 07-10-2025 • Exp: 07-10-2027", packaging: "Packaging: 25 tea bags • 09-10-2025 • Invoice: INV-TUL-001", logistics: "Logistics: Pune → Mumbai • ETA: 11-10-2025", consumer: "Delivered: 11-10-2025 • 11:40 • Borivali, Mumbai" } },
  "TULSI-2025-0002": { product: "Tulsi", stages: { farmer: "Farmer: Anita Gawande, Sangamner • Geo: 19.4969° N, 74.2324° E • Harvest: 02-10-2025", collection: "Collector: SangamFarms • Pickup: 03-10-2025 08:50", factory: "Factory: Pune Unit-2 • Drying & sorting • Mfg: 08-10-2025 • Exp: 08-10-2027", packaging: "Packaging: 50g loose leaf packs • 10-10-2025 • Invoice: INV-TUL-002", logistics: "Logistics: Pune → Nashik • ETA: 12-10-2025", consumer: "Delivered: 12-10-2025 • 09:10 • College Road, Nashik" } },
  "TULSI-2025-0003": { product: "Tulsi", stages: { farmer: "Farmer: Ramesh Shinde, Satara • Geo: 17.6800° N, 73.9500° E • Harvest: 03-10-2025", collection: "Collector: SataraLeaf • Pickup: 04-10-2025 09:45", factory: "Factory: Pune Unit-2 • Leaf drying & aroma preservation • Mfg: 09-10-2025 • Exp: 09-10-2027", packaging: "Packaging: Herbal infusion sachets • 11-10-2025 • Invoice: INV-TUL-003", logistics: "Logistics: Pune → Thane • ETA: 13-10-2025", consumer: "Delivered: 13-10-2025 • 14:30 • Thane West" } },
  "TULSI-2025-0004": { product: "Tulsi", stages: { farmer: "Farmer: Kavita More, Ahmednagar • Geo: 19.0952° N, 74.7496° E • Harvest: 05-10-2025", collection: "Collector: AhmednagarCo • Pickup: 06-10-2025 10:20", factory: "Factory: Pune Unit-3 • Cutting & blend • Mfg: 11-10-2025 • Exp: 11-10-2027", packaging: "Packaging: Wellness tea sachets • 13-10-2025 • Invoice: INV-TUL-004", logistics: "Logistics: Pune → Bengaluru • ETA: 16-10-2025", consumer: "Delivered: 16-10-2025 • 12:00 • Indiranagar, Bengaluru" } },
  "TULSI-2025-0005": { product: "Tulsi", stages: { farmer: "Farmer: Lata Kale, Kolhapur • Geo: 16.7050° N, 74.2433° E • Harvest: 06-10-2025", collection: "Collector: KolhaLeaf • Pickup: 07-10-2025 11:05", factory: "Factory: Pune Unit-2 • Low-temp drying • Mfg: 12-10-2025 • Exp: 12-10-2027", packaging: "Packaging: 100g loose packs • 14-10-2025 • Invoice: INV-TUL-005", logistics: "Logistics: Pune → Hyderabad • ETA: 17-10-2025", consumer: "Delivered: 17-10-2025 • 10:35 • Kukatpally, Hyderabad" } },
  "TULSI-2025-0006": { product: "Tulsi", stages: { farmer: "Farmer: Ajit Pawar, Karjat • Geo: 19.0278° N, 73.2563° E • Harvest: 07-10-2025", collection: "Collector: KarjatCollect • Pickup: 08-10-2025 08:50", factory: "Factory: Pune Unit-2 • Aroma-lock drying • Mfg: 13-10-2025 • Exp: 13-10-2027", packaging: "Packaging: 30 tea bags • 15-10-2025 • Invoice: INV-TUL-006", logistics: "Logistics: Pune → Surat • ETA: 18-10-2025", consumer: "Delivered: 18-10-2025 • 09:20 • Vesu, Surat" } },
  "TULSI-2025-0007": { product: "Tulsi", stages: { farmer: "Farmer: Sarita Nikam, Nagpur • Geo: 21.1458° N, 79.0882° E • Harvest: 08-10-2025", collection: "Collector: NagpurLeafCo • Pickup: 09-10-2025 09:30", factory: "Factory: Pune Unit-2 • Drying & blending • Mfg: 14-10-2025 • Exp: 14-10-2027", packaging: "Packaging: Wellness tea boxes • 16-10-2025 • Invoice: INV-TUL-007", logistics: "Logistics: Pune → Delhi • ETA: 20-10-2025", consumer: "Delivered: 20-10-2025 • 16:00 • Dwarka, Delhi" } },
  "TULSI-2025-0008": { product: "Tulsi", stages: { farmer: "Farmer: Manisha Patil, Solapur • Geo: 17.6599° N, 75.9064° E • Harvest: 09-10-2025", collection: "Collector: SolapurAgri • Pickup: 10-10-2025 10:40", factory: "Factory: Pune Unit-3 • Leaf cutting & pack • Mfg: 15-10-2025 • Exp: 15-10-2027", packaging: "Packaging: 25 sachet packs • 17-10-2025 • Invoice: INV-TUL-008", logistics: "Logistics: Pune → Jaipur • ETA: 21-10-2025", consumer: "Delivered: 21-10-2025 • 11:50 • Mansarovar, Jaipur" } },
  "TULSI-2025-0009": { product: "Tulsi", stages: { farmer: "Farmer: Govind Jadhav, Latur • Geo: 18.4090° N, 76.5697° E • Harvest: 11-10-2025", collection: "Collector: LaturLeaf • Pickup: 12-10-2025 11:20", factory: "Factory: Pune Unit-2 • Drying & grading • Mfg: 17-10-2025 • Exp: 17-10-2027", packaging: "Packaging: 50g herbal packs • 19-10-2025 • Invoice: INV-TUL-009", logistics: "Logistics: Pune → Chennai • ETA: 23-10-2025", consumer: "Delivered: 23-10-2025 • 13:10 • Anna Nagar, Chennai" } },
  "TULSI-2025-0010": { product: "Tulsi", stages: { farmer: "Farmer: Prakash Dhonde, Baramati • Geo: 18.1170° N, 74.6047° E • Harvest: 12-10-2025", collection: "Collector: BaramatiFarms • Pickup: 13-10-2025 08:40", factory: "Factory: Pune Unit-3 • Drying & blending • Mfg: 18-10-2025 • Exp: 18-10-2027", packaging: "Packaging: 100g wellness jars • 20-10-2025 • Invoice: INV-TUL-010", logistics: "Logistics: Pune → Kolkata • ETA: 25-10-2025", consumer: "Delivered: 25-10-2025 • 10:00 • Ballygunge, Kolkata" } },

  /* ========== NEEM (10 unique) ========== */
  "NEEM-2025-0001": { product: "Neem", stages: { farmer: "Farmer: Kavita Rao, Hubli • Geo: 15.3647° N, 75.1234° E • Harvest: 01-09-2025", collection: "Collector: HubliCollect • Pickup: 02-09-2025 08:10", factory: "Factory: Bengaluru Unit • Cold-press extraction • Mfg: 07-09-2025 • Exp: 07-09-2027", packaging: "Packaging: 100ml cold-pressed oil • 09-09-2025 • Invoice: INV-NEEM-001", logistics: "Logistics: Bengaluru → Hyderabad • ETA: 11-09-2025", consumer: "Delivered: 11-09-2025 • 12:30 • Madhapur, Hyderabad" } },
  "NEEM-2025-0002": { product: "Neem", stages: { farmer: "Farmer: Shankar Gowda, Belgaum • Geo: 15.8497° N, 74.4977° E • Harvest: 03-09-2025", collection: "Collector: BelgaumAgri • Pickup: 04-09-2025 10:00", factory: "Factory: Bengaluru Unit • Kernel drying & pressing • Mfg: 09-09-2025 • Exp: 09-09-2027", packaging: "Packaging: 250ml oil bottles • 11-09-2025 • Invoice: INV-NEEM-002", logistics: "Logistics: Bengaluru → Pune • ETA: 13-09-2025", consumer: "Delivered: 13-09-2025 • 15:20 • Shivajinagar, Pune" } },
  "NEEM-2025-0003": { product: "Neem", stages: { farmer: "Farmer: Lakshmi Naik, Mysuru • Geo: 12.2958° N, 76.6394° E • Harvest: 04-09-2025", collection: "Collector: MysoreLeaf • Pickup: 05-09-2025 09:30", factory: "Factory: Bengaluru Unit • Seed drying & cold press • Mfg: 10-09-2025 • Exp: 10-09-2027", packaging: "Packaging: 50ml sample bottles • 12-09-2025 • Invoice: INV-NEEM-003", logistics: "Logistics: Bengaluru → Coimbatore • ETA: 14-09-2025", consumer: "Delivered: 14-09-2025 • 11:15 • Gandhipuram, Coimbatore" } },
  "NEEM-2025-0004": { product: "Neem", stages: { farmer: "Farmer: Bhavika Shetty, Mangalore • Geo: 12.9141° N, 74.8560° E • Harvest: 06-09-2025", collection: "Collector: MangaloreAgri • Pickup: 07-09-2025 10:25", factory: "Factory: Bengaluru Unit • Kernel extraction & filtration • Mfg: 12-09-2025 • Exp: 12-09-2027", packaging: "Packaging: 500ml bulk drums • 14-09-2025 • Invoice: INV-NEEM-004", logistics: "Logistics: Bengaluru → Mumbai • ETA: 17-09-2025", consumer: "Delivered: 17-09-2025 • 09:45 • Andheri East, Mumbai" } },
  "NEEM-2025-0005": { product: "Neem", stages: { farmer: "Farmer: Ravi Krishna, Hassan • Geo: 13.0074° N, 76.0976° E • Harvest: 07-09-2025", collection: "Collector: HassanCollect • Pickup: 08-09-2025 09:40", factory: "Factory: Bengaluru Unit • Oil extraction & QC • Mfg: 13-09-2025 • Exp: 13-09-2027", packaging: "Packaging: 200ml premium bottles • 15-09-2025 • Invoice: INV-NEEM-005", logistics: "Logistics: Bengaluru → Delhi • ETA: 19-09-2025", consumer: "Delivered: 19-09-2025 • 14:55 • Janakpuri, Delhi" } },
  "NEEM-2025-0006": { product: "Neem", stages: { farmer: "Farmer: Meera Kulkarni, Davangere • Geo: 14.4646° N, 75.9211° E • Harvest: 08-09-2025", collection: "Collector: DavangereAgri • Pickup: 09-09-2025 08:55", factory: "Factory: Bengaluru Unit • Seed pressing • Mfg: 14-09-2025 • Exp: 14-09-2027", packaging: "Packaging: 100ml bottles • 16-09-2025 • Invoice: INV-NEEM-006", logistics: "Logistics: Bengaluru → Jaipur • ETA: 20-09-2025", consumer: "Delivered: 20-09-2025 • 12:30 • Malviya Nagar, Jaipur" } },
  "NEEM-2025-0007": { product: "Neem", stages: { farmer: "Farmer: Suraj Reddy, Anantapur • Geo: 14.6810° N, 77.6000° E • Harvest: 10-09-2025", collection: "Collector: AnantapurCollect • Pickup: 11-09-2025 10:15", factory: "Factory: Bengaluru Unit • Cold-pressed extraction • Mfg: 16-09-2025 • Exp: 16-09-2027", packaging: "Packaging: 250ml oil bottles • 18-09-2025 • Invoice: INV-NEEM-007", logistics: "Logistics: Bengaluru → Chennai • ETA: 21-09-2025", consumer: "Delivered: 21-09-2025 • 11:50 • T. Nagar, Chennai" } },
  "NEEM-2025-0008": { product: "Neem", stages: { farmer: "Farmer: Raghav Shekar, Tumkur • Geo: 13.3384° N, 77.1000° E • Harvest: 11-09-2025", collection: "Collector: TumkurAgri • Pickup: 12-09-2025 09:35", factory: "Factory: Bengaluru Unit • Drying & filtration • Mfg: 17-09-2025 • Exp: 17-09-2027", packaging: "Packaging: 50ml sample bottles • 19-09-2025 • Invoice: INV-NEEM-008", logistics: "Logistics: Bengaluru → Kochi • ETA: 22-09-2025", consumer: "Delivered: 22-09-2025 • 13:05 • Edappally, Kochi" } },
  "NEEM-2025-0009": { product: "Neem", stages: { farmer: "Farmer: Dinesh Pai, Udupi • Geo: 13.3409° N, 74.7421° E • Harvest: 13-09-2025", collection: "Collector: UdupiCollect • Pickup: 14-09-2025 11:00", factory: "Factory: Bengaluru Unit • Kernel pressing • Mfg: 18-09-2025 • Exp: 18-09-2027", packaging: "Packaging: 1000ml drums • 20-09-2025 • Invoice: INV-NEEM-009", logistics: "Logistics: Bengaluru → Ahmedabad • ETA: 24-09-2025", consumer: "Delivered: 24-09-2025 • 10:55 • Navrangpura, Ahmedabad" } },
  "NEEM-2025-0010": { product: "Neem", stages: { farmer: "Farmer: Arvind Gowda, Chitradurga • Geo: 14.2331° N, 76.4014° E • Harvest: 14-09-2025", collection: "Collector: ChitradurgaAgri • Pickup: 15-09-2025 10:50", factory: "Factory: Bengaluru Unit • Drying & cold pressing • Mfg: 19-09-2025 • Exp: 19-09-2027", packaging: "Packaging: 250ml premium bottles • 21-09-2025 • Invoice: INV-NEEM-010", logistics: "Logistics: Bengaluru → Kolkata • ETA: 26-09-2025", consumer: "Delivered: 26-09-2025 • 14:10 • Howrah, Kolkata" } }
};
