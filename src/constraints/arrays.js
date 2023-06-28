

let location = ["Amaravati", "Anantapur", "Chandragiri", "Chittoor", "Dowlaiswaram", "Eluru", "Guntur", "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Nagarjunako", "Rajahmundry", "Srikakulam",
  "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram", "Yemmiganur", "Itanagar", "Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia", "Ara", "Barauni",
  "Begusarai", "Bettiah", "Bhagalpur", "Bihar Sharif", "Bodh Gaya", "Buxar", "Chapra", "Darbhanga", "Dehri", "Dinapur Nizamat", "Gaya", "Hajipur", "Jamalpur", "Katihar", "Madhubani", "Motihari", "Munger", "Muzaffarpur",
  "Patna", "Purnia", "Pusa", "Saharsa", "Samastipur", "Sasaram", "Sitamarhi", "Siwan", "Chandigarh", "Ambikapur", "Bhilai", "Bilaspur", "Dhamtari", "Durg", "Jagdalpur", "Raipur", "Rajnandgaon", "Daman", "Diu", "Silvassa",
  "Delhi", "New Delhi", "Madgaon", "Panaji", "Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh", "Kandla", "Khambhat", "Kheda", "Mahesana", "Morbi", "Nadiad",
  "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad", "Veraval", "Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur", "Jhirka", "Gurugram", "Hansi", "Hisar",
  "Jind", "Kaithal", "Karnal", "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Bilaspur", "Chamba", "Dalhousie", "Dharmshala", "Hamirpur", "Kangra", "Kullu", "Mandi", "Nahan", "Shimla", "Una",
  "Anantnag", "Baramula", "Doda", "Gulmarg", "Jammu", "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur", "Bokaro", "Chaibasa", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribag", "Jamshedpur", "Jharia", "Rajmahal",
  "Ranchi", "Saraikela", "Badami", "Ballari", "Bengaluru", "Belagavi", "Bhadravati", "Bidar", "Chikkamagaluru", "Chitradurga", "Davangere", "Halebid", "Hassan", "Hubballi Dharwad", "Kalaburagi", "Kolar", "Madikeri",
  "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Shravanabelagola", "Shrirangapattana", "Tumakuru", "Vijayapura", "Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode",
  "Mattancheri", "Palakkad", "Thalassery", "Thiruvananthapuram", "Thrissur", "Kargil", "Leh", "Balaghat", "Barwani", "Betul", "Bharhut", "Bhind", "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh",
  "Datia", "Dewas", "Dhar", "Mhow", "Guna", "Gwalior", "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone", "Maheshwar", "Mandla", "Mandsaur", "Morena", "Murwara", "Narsimhapur",
  "Narsinghgarh", "Narwar", "Neemuch", "Nowgong", "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Sarangpur", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Ujjain", "Vidisha",
  "Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bhusawal", "Bid", "Buldhana", "Chandrapur", "Daulatabad", "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur", "Mahabaleshwar", "Malegaon", "Matheran",
  "Mumbai", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani", "Pune", "Ratnagiri", "Sangli", "Satara", "Sevagram", "Solapur", "Thane", "Ulhasnagar", "Vasai Virar", "Wardha", "Yavatmal", "Imphal",
  "Cherrapunji", "Shillong", "Aizawl", "Lunglei", "Kohima", "Mon", "Phek", "Wokha", "Zunheboto", "Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", "Cuttack", "Dhenkanal", "Kendujhar", "Konark", "Koraput",
  "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri", "Karaikal", "Mahe", "Puducherry", "Yanam", "Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala",
  "Ludhiana", "Nabha", "Patiala", "Rupnagar", "Sangrur", "Abu", "Ajmer", "Alwar", "Amer", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar",
  "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Kishangarh", "Kota", "Merta", "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi",
  "Tonk", "Udaipur", "Gangtok", "Gyalshing", "Lachung", "Mangan", "Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari",
  "Kodaikanal", "Kumbakonam", "Madurai", "Mamallapuram", "Nagappattinam", "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Thanjavur", "Tiruchchirappalli", "Tirunelveli", "Tiruppur",
  "Thoothukudi", "Udhagamandalam", "Vellore", "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal", "Agartala", "Agra", "Aligarh", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia",
  "Banda", "Bara Banki", "Bareilly", "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad cum Fatehgarh", "Fatehpur", "Fatehpur Sikri", "Ghaziabad", "Ghazipur",
  "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Lakhimpur", "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut", "Mirzapur Vindhyachal", "Moradabad", "Muzaffarnagar",
  "Partapgarh", "Pilibhit", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Shahjahanpur", "Sitapur", "Sultanpur", "Tehri", "Varanasi", "Almora", "Dehra Dun", "Haridwar", "Mussoorie", "Nainital", "Pithoragarh",
  "Alipore", "Alipur Duar", "Asansol", "Baharampur", "Bally", "Balurghat", "Bankura", "Baranagar", "Barasat", "Barrackpore", "Basirhat", "Bhatpara", "Bishnupur", "Budge Budge", "Burdwan", "Chandernagore", "Darjeeling",
  "Diamond Harbour", "Dum Dum", "Durgapur", "Halisahar", "Haora", "Hugli", "Ingraj Bazar", "Jalpaiguri", "Kalimpong", "Kamarhati", "Kanchrapara", "Kharagpur", "Cooch Behar", "Kolkata", "Krishnanagar", "Malda", "Midnapore",
  "Murshidabad", "Nabadwip", "Palashi", "Panihati", "Purulia", "Raiganj", "Santipur", "Shantiniketan", "Shrirampur", "Siliguri", "Siuri", "Tamluk", "Titagarh"]


// let jobRoles = ["Software Engineer", "Frontend", "Backend", "Fullstack Developer", "Director of Ethical Hacking", "Data Analyst", "Blockchain", "Web Devloper", "Android Developer", "Devops Developer", "UI/UX Design", "Digital Marketing", "CRM Specialist", "Business Analyst", "Financial Analyst", "Marketing Manager", "Marketing Director", "Graphic Designer", "Marketing Research Analyst", "Marketing Communications Manager", "Marketing Consultant", -"Store Manager", "Account Executive",
//   "Account Manager", "Area Sales Manager", "Direct Salesperson", "Director of Inside Sales", "Outside Sales Manager", "Sales Analyst", "Market Development Manager", "B2B Sales Specialist", "Sales Engineer",
//   "Merchandising Associate", "CEO", "Proprietor", "Principal", "Owner", "President", "Founder", "Administrator", "Director", "Managing Partner", "Managing Member", "Board of Directors", "Shareholders", "Managers",
//   "Supervisors", "Front Line Employees", "Quality Control", "Human Resources", "Accounting Staff", "Marketing Staff", "Purchasing Staff", "Shipping and Receiving Staff", "Office Manager", "Receptionist", "Virtual Assistant",
//   "Customer Service", "Customer Support", "Concierge", "Help Desk", "Customer Service Manager", "Technical Support Specialist", "Account Representative", "Client Service Specialist", "Customer Care Associate", "Operations Manager",
//   "Operations Assistant", "Operations Coordinator", "Oper", "Operations Director", "Vice President of Operations", "Operations Professional", "Scrum Master", "Continuous Improvement Lead", "Continuous Improvement Consultant",
//   "Credit Authorizer", "Benefits Manager", "Credit Counselor", "Accountant", "Bookkeeper", "Accounting Analyst", "Accounting Director", "Accounts Payable Receivable Clerk", "Auditor", "Budget Analyst", "Controller",
//   "Financial Analyst", "Finance Manager", "Economist", "Payroll Manager", "Payroll Clerk", "Financial Planner", "Financial Services Representative", "Finance Director", "Commercial Loan Office", "Engineer", "Mechanical Engineer",
//   "Civil Engineer", "Electrical Engineer", "Assistant Engineer", "Chemical Engineer", "Chief Engineer", "Drafter", "Engineering Technician", "Geological Engineer", "Biological Engineer", "Maintenance Engineer", "Mining Engineer",
//   "Nuclear Engineer", "Petroleum Engineer", "Plant Engineer", "Production Engineer", "Quality Engineer", "Safety Engineer", "Sales Engineer", "Chief People Officer", "VP of Miscellaneous Stuff", "Chief Robot Whisperer",
//   "Director of First Impressions", "Culture Operations Manager", "Director of Bean Counting", "Digital Overlord", "Director of Storytelling", "Researcher",
//   "Research Assistant", "Biostatistician", "Title Researcher", "Market Researcher", "Title Analyst", "Medical Researcher", "Mentor", "Online Tutor", "Teacher",
//   "Teaching Assistant", "Substitute Teacher", "Preschool Teacher", "Test Scorer", "Online ESL Instructor", "Professor", "Assistant Professor"]


let primarySkills = ["C", "Java", "Java Script", "Perl", "PHP", "Python", "Swift", "Go", "SQL", "R", "Ruby", "Google Suite", "Trello", "Slack", "Zapier", "Zoom", "JIRA", "Salesforce", "Budget planning", "Risk management",
  "Project planning", "PM tools", "Task management", "SCRUM methodology", "Agile methodology", "Product roadmaps", "User experience design", "Programming skills", "Product lifecycle management", "QA testingng",
  "Requirements gathering", "Coding", "Debugging", "Implementation", "Testing", "Design", "Configuration", "Applications", "Android", "Security", "Algorithms", "Modeling", "Documentation", "IOS", "Adobe creative ",
  "HTML", "Interactive media", "Wireframing", "UX research", "Prototyping", "Color theory", "Responsive design", "Photoshop", "Sketch", "User modeling", "Search Engine Optimization ", "Digital media",
  "Social media platforms", "Automated marketing software", "Content Management Systems ", "Copywriting",
  "Content creation",
  "Google Analytics",
  "Marketing analytics tools",
  "Accounting",
  "Word processing",
  "Spreadsheet building",
  "Coding",
  "Programming",
  "Operating equipment",
  "Engineering",
  "Experimenting",
  "Testing",
  // "Constructing",
  // "Restoring",
  // "Product developing",
  // "Quality controlling",
  // "Blueprint drafting",
  // "Repairing",
  // "Translating",
  // "Speaking",
  // "Writing",
  // "Conversing",
  // "Reinterpreting",
  // "Public speaking",
  // "Following etiquette",
  // "Explaining",
  // "Respecting",
  // "Signaling",
  // "Proofreading",
  // "Introducing",
  // "Representing",
  // "Rephrasing",
  // "Code switching",
  // "Graphic designing",
  // "Illustrating",
  // "Sketching",
  // "Architecture",
  // "User experience development",
  // "User interface development",
  // "Typography",
  // "Layout development",
  // "Web designing",
  // "Interior designing",
  // "Data visualizing",
  // "Hierarchical arranging",
  // "Aligning",
  // "Photo and video editing",
  // "Wireframing",
  // "Researching",
  // "Interpreting",
  // "Information processing",
  // "Organizing",
  // "Processing",
  // "Graphing",
  // "Computing",
  // "Calculating",
  // "Modeling",
  // "Extrapolating",
  // "Predicting",
  // "Forecasting",
  // "Investigating",
  // "Surveying",
  // "Statistical analysis"
];


let secondarySkills = [
  "Storytelling",
  "Written communication",
  "Editing",
  "Teaching",
  "Negotiating",
  "Open mindedness",
  "Inquiring",
  "Body language",
  "Customer service",
  "Presenting",
  "Summarizing",
  "Nonverbal communication",
  "Documenting",
  "Reporting",
  "Patience",
  "Positivity",
  "Conflict management",
  "Coaching",
  "Mediating",
  "Motivating",
  "Compassion",
  "Caring",
  "Networking",
  "Inspiring",
  "Flexibility",
  "Collaboration",
  "Sourcing feedback",
  "Reliability",
  "Empathy",
  "Observing",
  "Problem solving",
  "Inferring",
  "Simplifying",
  "Conceptual thinking",
  "Evaluating",
  "Streamlining",
  "Creative thinking",
  "Brainstorming",
  "Cost benefit analyzing",
  "Deductive reasoning",
  "Inductive reasoning",
  "Assessing",
  "Evidence collecting",
  "Troubleshooting",
  "Mentoring",
  "Envisioning",
  "Goal setting",
  "Employee development",
  "Performance reviewing",
  "Managing",
  "Planning",
  "Delegating",
  "Directing",
  "Supervising",
  "Training",
  "Earning trust",
  "Influencing",
  "Adapting",
  "Crisis managing"
];

let sectors = [
  "Fishing industry",
  "Horticulture industry",
  "Wood industry",
  "Mechanical Manufacturing",
  "Aerospace industry",
  "Automotive industry",
  "Chemical industry",
  "Pharmaceutical industry",
  "Construction industry",
  "Defense industry",
  "Arms industry",
  "Electric power industry",
  "Electronics industry",
  "Computer industry",
  "Semiconductor industry",
  "Energy industry",
  "Food industry",
  "Industrial robot industry",
  "Low technology industry",
  "Mining Industry",
  "Petroleum industry",
  "Oil shale",
  "Pulp and paper industry",
  "Steel industry",
  "Shipbuilding industry",
  "Telecommunications industry",
  "Textile industry",
  "Water industry",
  "Creative",
  "Advertising",
  "Fashion",
  "Floral",
  "Cultural industry",
  "Culture industry",
  "Education industry",
  "Entertainment industry",
  "Music industry",
  "Video game industry",
  "Financial services industry",
  "Insurance industry",
  "Healthcare industry",
  "Hospitality industry",
  "Information industry",
  "Leisure industry",
  "Mass media",
  "Broadcasting",
  "Internet",
  "News media",
  "Publishing",
  "Entertainment",
  "Professional services",
  "Real estate industry",
  "Retail industry",
  "Software industry",
  "Sport industry",
  "Transport industry"
];


let educationLevels = [
  'Master of Technology',
  'Master of Business Administration',
  'Bachelor of Technology',
  'Master Degree',
  'Bachelor Degree',
  'Diploma Equavalant to Bachelor degree',
  'Diploma Equavalant to Master degree',
  'Online Degree',
  'Advance Diploma',
  'PhD'
];

let experience = [

  { label: 'Fresher', value: 'Fresher' },
  { label: '1 Year', value: '1 Year' },
  { label: '2 Year', value: '2 Year' },
  { label: '3 Year', value: '3 Year' },
  { label: '4 Year', value: '4 Year' },
  { label: '5 Year', value: '5 Year' },
  { label: '6 Year', value: '6 Year' },
  { label: '7 Year', value: '7 Year' },
  { label: '8 Year', value: '8 Year' },
  { label: '9 Year', value: '9 Year' },
  { label: '10 Year', value: '10 Year' },
  { label: '11 Year', value: '11 Year' },
  { label: '11 to 15 Year', value: '11 to 15 Year' },
  { label: '15 to 20 Year', value: '15 to 20 Year' },
  { label: '20+ Year', value: '20+ Year' }

]

let experiences = [

  "Fresher",
  "1 Year",
  "2 Year",
  "3 Year",
  "4 Year",
  "5 Year",
  "6 Year",
  "7 Year",
  "8 Year",
  "9 Year",
  "10 Year",
  "11 to 15 Year",
  "15 to 20 Year",
  "20+ Year"
]

// let yearofPassouts = [

//   1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982,
//   1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
//   1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
//   2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
//   2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
//   2023
// ]

let yearofPassouts = [
  '2023', '2022', '2021', '2020', "2019" ,"2018" , "2017", "2016" ,"2015"  , "2014" ,"2013" , "2012" , "2011"
]

let authorities = [
  'IIT',
  'IIM',
  'IISc',
  'NIT',
  'Central Govt',
  'State Govt',
  'Demeed University',
  'Private'
]

let experienceTypes = [

  'Job', 'Freelancer', 'Internship'
]

let jobNature = [
  "Full Time",
  "Part Time",
  "WFH" ,
  "Onsite",
  "Remote",
  "Hybrid",
  "Intership",
 

]


let companyTypes = [
  'MNC',
  'Start-Ups',
  'Government',
  'Service-Based',
  'Product-Based'
]

let jobCategory = [
  "Software Developer",
  "Software Management",
  "Software Quality",
  "System Administrator",
  "System Analyst",
  "Information Technology",
  "Business Intelligence",
  "Cyber Security",
  "Data Management",
  "Database Job",
  "Game Development",
  "Geographic IT",
  "Healthcare IT",
  "Help Desk Job",
  "Information Technology Intern",
  "IT Audit",
  "IT Coordinator",
  "IT Executive Job",
  "IT Management",
  "IT Project",
  "IT Specialist",
  "IT Training",
  "Network",
  "Engineering",
  "Automotive Engineering",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Construction Engineers",
  "Design Engineering",
  "Electrical Engineering",
  "Energy Engineers",
  "Environmental Engineering",
  "Industrial Engineering",
  "Manufacturing Engineering",
  "Materials Engineering",
  "Mechanical Engineering",
  "Petroleum Engineering",
  "Project Engineering",
  "Safety Engineers",
  "Engineering Intern"
];

let discipline = [
  "Computer science",
  "Computing in social sciences",
  "Chemical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Educational Technology",
  "Materials Science and Engineering",
  "Mechanical Engineering",
  "Systems science",
  "Mathematics",
  "Agriculture",
  "Astronomy",
  "Physics",
  "Earth science",
  "Chemistry",
  "Biology",
  "Philosophy",
  "Law",
  "Languages and literature",
  "History",
  "Visual arts",
  "Environmental studies and forestry",
  "Languages and literatureHistory",
  "Architecture and design",
  "Agriculture",
  "Anthropology",
  "Archaeology",
  "Economics",
  "Linguistics",
  "Political science",
  "Social work",
  "Sociology",
  "Psychology",
  "Physical geography",
  "Human geography",
  "Cartography"
]

let jobRoles = {
  "Software Developer": [
    "Web Developer",
    "Java Developer",
    "UX Designer",
    "Net Developer",
    "iOS Developer",
    "Android Developer",
    "SharePoint Developer",
    "DevOps Engineer",
    "Solutions Engineer",
    "Ruby on Rails Developer",
    "PHP Developer",
    "Integration Engineer",
    "Release Engineer",
    "Embedded Software Engineer",
    "Oracle Developer",
    "Computer Scientist",
    "JavaScript Developer",
    "Web Analyst",
    "Mainframe Developer",
    "Platform Engineer",
    "User Experience Researcher",
    "Backend Developer",
    "Systems Integration Engineer",
    "Integration Developer",
    "Applications Scientist",
    "COBOL Programmer",
    "Enterprise Engineer",
    "Scientific Programmer",
    "Lotus Notes Developer",
    "Software Technician",
    "Security Developer",
    "Backend Java Developer",
    "Release Specialist",
    "Automation Application Engineer",
    "Object Oriented Programmer",
    "Windows Software Engineer",
    "Client Server Programmer",
    "Engineering Programmer",
    "Analytic Programmer",
    "ASPNet Developer",
    "IT Architecture Analyst",
    "Mule Developer",
    "Report Programmer",
    "SOA Engineer",
    "Software Jobs",
    "Oracle Jobs",
    "Java Jobs",
    "UX Jobs",
    "Software Engineering Jobs",
    "Application Jobs",
    "Rails Jobs",
    "Reporting Jobs",
    "Peoplesoft Jobs",
    "JavaScript Jobs",
    "SharePoint Jobs",
    "Programming Jobs",
    "DevOps Jobs",
    "PHP Jobs",
    "Embedded Software Jobs",
    "COBOL Jobs",
    "Software Configuration Jobs",
    "Lotus Notes Jobs"
  ],
  "Software Management": [
    "Solutions Architect",
    "Data Architect",
    "Application Manager",
    "Enterprise Architect",
    "Systems Architect",
    "Scrum Master",
    "Software Development Manager",
    "Solution Director",
    "Director Software Development",
    "Director Software",
    "Manager Web",
    "Director Systems",
    "Director of User Experience",
    "User Experience Manager",
    "Director Web",
    "Software Product Manager",
    "Enterprise Data Architect",
    "Platform Architect",
    "Delivery Architect",
    "Application Support Manager",
    "Domain Architect",
    "Manager Java",
    "Enterprise Systems Manager",
    "Portal Architect",
    "Program Architect",
    "Director Enterprise Systems",
    "Head Of Digital",
    "Manager Web Application",
    "Scrum Master"
  ],
  "System Analyst": [
    "Business Analyst",
    "Business Systems Analyst",
    "Solution Specialist",
    "Application Analyst",
    "Technical Specialist",
    "Application Support Analyst",
    "Functional Analyst",
    "Requirements Analyst",
    "Financial Systems Analyst",
    "Engineering Systems Analyst",
    "Accounting Systems Analyst"
  ],
  "Software Quality": [
    "Software Test Engineer",
    "Software QA Manager",
    "Functional Tester",
    "UAT Tester",
    "Director Software Quality Assurance",
    "Systems Test Analyst",
    "Software Test Technician"
  ],
  "System Administrator": [
    "Systems Engineer",
    "Systems Administrator",
    "Systems Specialist",
    "Webmaster",
    "Linux System Administrator",
    "Systems Manager",
    "Windows Administrator",
    "Unix Administrator",
    "Storage Engineer",
    "Systems Designer",
    "Exchange Administrator",
    "Business Systems Manager",
    "Backup Administrator",
    "Storage Consultant",
    "AIX Administrator",
    "Financial Systems Administrator",
    "Manager Android",
    "Mainframe Systems Engineer",
    "Siebel Administrator",
    "Linux Jobs",
    "Unix Jobs"
  ],
    "Business Intelligence": [
        "Business Intelligence Developer",
        "Data Scientist",
        "Business Intelligence Analyst",
        "Big Data Engineer",
        "Business Intelligence Manager",
        "Hadoop Developer",
        "Decision Support Analyst",
        "Director Business Intelligence",
        "Master Data Analyst",
        "Decision Support Manager",
        "Microstrategy Architect",
        "Director Decision Support",
        "Big Data",
        "Analytics",
        "Hadoop"
    ],
    "Cyber Security": [
        "Information Security Analyst",
        "Security Engineer",
        "Penetration Tester",
        "Security Architect",
        "Network Security Engineer",
        "CISSP",
        "Information Security Manager",
        "Information Security Officer",
        "Security Administrator",
        "Information Assurance Analyst",
        "Information Assurance Engineer",
        "Computer Forensics Analyst",
        "Director Information Security",
        "Threat Analyst",
        "Security Researcher",
        "Business Continuity Manager",
        "Security Incident Response Engineer",
        "Malware Analyst",
        "Information Assurance Officer",
        "Information Assurance Manager",
        "Business Continuity Analyst",
        "Intrusion Analyst",
        "Cryptographer",
        "Network Security",
        "Information Assurance",
        "Business Continuity",
        "Threat",
        "Computer Forensics"
    ],
    "Data Management": [
        "Data Analyst",
        "Data Manager",
        "Data Collector",
        "Director Data",
        "Data Coordinator",
        "Director Information",
        "Data Reporting Analyst",
        "Information Management Specialist",
        "Data Processor",
        "Data Operations Manager",
        "Director Data Management",
        "Data Assistant",
        "Information Management Officer",
        "Data Management Engineer",
        "Data Processing"
    ],
    "Database": [
        "Database Administrator",
        "Database Developer",
        "SQL Developer",
        "Oracle DBA",
        "Database Analyst",
        "SQL DBA",
        "PL SQL Developer",
        "MySQL DBA",
        "DB2 DBA",
        "DBA Manager",
        "Director Database",
        "Oracle Database Manager",
        "Oracle Database Analyst",
        "Director Oracle Database",
        "SQL",
        "Data Warehouse",
        "Oracle Database",
        "MS SQL"
    ],
    "Game Development": [
        "Game Designer",
        "Game Master",
        "Game Tester",
        "Director Game",
        "Manager Video Games",
        "Game"
    ],
    "Geographic IT": [
        "GIS Analyst",
        "Geospatial Analyst",
        "GIS Manager",
        "GIS Coordinator",
        "GIS Administrator",
        "GIS Database Administrator",
        "GIS Scientist",
        "Geospatial"
    ],
    "Healthcare IT": [
        "Clinical Systems Analyst",
        "Imaging Specialist",
        "Epic Analyst",
        "EMR Specialist",
        "EHR Trainer",
        "Cerner Analyst",
        "Clinical Application Manager",
        "Epic Manager",
        "Director Clinical Applications",
        "Health Systems Analyst",
        "Epic Director",
        "Epic",
        "Cerner",
        "Health Informatics",
        "EMR"
    ]
};

let salary = ["1 Lpa"
  , "2 Lpa",
  "3 Lpa",
  "4 Lpa",
  "5 Lpa",
  "6 Lpa"
  , "7 Lpa",
  "8 Lpa", "9 Lpa", "10 Lpa", "More than 10 Lpa"]

export {
  jobNature,
  location,
  jobRoles,
  primarySkills,
  secondarySkills,
  sectors,
  educationLevels,
  experience,
  yearofPassouts,
  authorities,
  experienceTypes,
  companyTypes,
  experiences,
  jobCategory,
  discipline,
  salary
}