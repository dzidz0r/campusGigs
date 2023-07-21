import {search, click_here, deal} from "../assets"

export const howCards = [
   {
    id: "search",
    pic: search,
    label: "Search"
   },
   {
    id: "apply",
    pic: click_here,
    label: "Click Apply"
   },
   {
    id: "deal",
    pic: deal,
    label: "Connect with your prospective employer"
   }
]

export const jobData = [{
   id: 1,
   job_title: "Library Assistant",
   company: "Law School Library",
   location: "Law School",
   est_salary: 7,
   details: ["Part-time", "Scheduled shifts during library hours" ],
   requirements: [
    "Current college student with good organizational skills",
    "Familiarity with library resources and databases",
    "Ability to assist library users and handle inquiries",
     ],
   benefits: [
    "Develop research and information management skills",
    "Access to a wide range of academic resources", 
    "Quiet and conducive work environment"
  ],
   contact: 'mailto:contact@lawschoollibrary.com'
 }, {
  id: 2,
  job_title: "Peer Tutor",
  company: "Academic Support Center",
  location: "UG Registry",
  est_salary: 14,
  details: ["Part-time", "Scheduled tutoring sessions during peak hours"],
  requirements: [
    "Current college student with excellent grades in subject area",
    "Strong communication and teaching skills",
    "Ability to help students with various academic challenges",
  ],
  benefits: ["Enhance teaching and mentoring abilities", "Make a positive impact on fellow students' academic success", "Flexible tutoring schedule"],
  contact: 'mailto:contact@academicsupport.com'
 }, {
   id: 3,
   job_title: "Research Assistant",
   company: "Department of Biology",
   location: "Department of Animal Biology and Consevation Science",
   est_salary: 18,
   details: ["Part-time", "Flexible, based on research project needs"],
   requirements: [
      "Current college student majoring in Biology or related field",
      "Strong research and analytical skills",
      "Ability to assist in lab experiments and data analysis",
    ],
    benefits: ["Gain valuable research experience", "Collaborate with professors and researchers", "Opportunity for academic publications"],
    contact: 'mailto:contact@biologydept.com'
 }, {
   id: 4,
   job_title: "Sales Associate",
   company: "Abena Inc",
   location: "Commonwealth Hall",
   est_salary: 5,
   details: ["Part-time", "Flexible, based on agreed upon work hours" ],
   requirements: [
    "Current college student", 
    "Have strong communication and interpersonal skills", 
    "Knowledge of Office 360", 
    ],
   benefits: ["Flexible work schedule"],
   contact: 'mailto:contact@abenainc.com'
 }, {
   id: 5,
   job_title: "Student Library Assistant",
   company: "Balme Library",
   location: "Balme Library",
   est_salary: 12,
   details: ["Part-time", "Flexible, based on agreed upon work hours", "Assisting with circulation and shelving books" ],
   requirements: [
    "Current college student with excellent organizational skills",
    "Familiarity with library systems and resources",
    "Ability to provide excellent customer service to library patrons",
  ],
  benefits: ["Access to extensive library resources", "Flexible work hours", "Opportunity to work in a quiet and academic environment"],
  contact: 'mailto:contact@universitylibrary.com'
 }, {
   id: 6,
   job_title: "Fitness Center Attendant",
   company: "JY Gym",
   location: "Jean Nelson Hall",
   est_salary: 15,
   details: ["Part-time", "Overseeing gym equipment and assisting members"],
   requirements: [
     "Current college student with a passion for fitness and wellness",
     "CPR and First Aid certification (or willingness to obtain)",
     "Excellent interpersonal and communication skills",
   ],
   benefits: ["Access to campus fitness facilities", "Opportunity to promote healthy living on campus", "Flexible work schedule"],
   contact: 'mailto:contact@campusrec.com'
 }, {
   id: 7,
   job_title: "Lab Assistant",
   company: "Department of Chemistry",
   location: "Chemistry Building",
   est_salary: 9,
   details: ["Part-time", "Assisting with lab preparations and safety protocols"],
   requirements: [
      "Current student in Chemistry Department",
      "Understanding of lab safety procedures",
      "Ability to assist in lab experiments and data recording",
    ],
    benefits: ["Gain practical lab experience", "Work alongside experienced faculty members", "Opportunity to contribute to cutting-edge research"],
    contact: 'mailto:contact@chemistrydept.com'
 }, {
   id: 8,
   job_title: "Editorial Assistant",
   company: "ABC Publishing",
   location: "RIPS Building",
   est_salary: 7,
   details: ["Part-time", "Assisting in editing and proofreading articles", "Helping with content planning and editorial meetings" ],
   requirements: [
    "Current college student with excellent writing and editing skills",
    "Strong attention to detail and ability to meet deadlines",
    "Knowledge of AP Style and journalistic standards",
  ],
  benefits: ["Hands-on experience in the field of journalism", "Opportunity to work with talented writers and editors", "Flexible work hours"],
  contact: 'mailto:contact@campusnewspaper.com'
 }, {
   "id": 9,
   job_title: "Sales Assistant",
   company: "University Bookshop",
   location: "UG Bookshop",
   est_salary: 8,
   details: ["Part-time", "Assisting customers with purchases", "Operating cash registers and handling transactions" ],
   requirements: [
    "Current college student with strong communication and interpersonal skills",
    "Knowledge of bookstore inventory and college merchandise",
    "Ability to provide excellent customer service to students and faculty",
  ],
  benefits: ["Discounts on textbooks and college apparel", "Opportunity to work with the campus community", "Flexible work hours"],
  contact: 'mailto:contact@campusbookstore.com'
 }, {
   id: 10,
   job_title: "Research Assistant",
   company: "Psychology Department",
   location: "NB",
   est_salary: 15,
   details: ["Part-time", "Assisting professors with research projects", "Collecting and analyzing data", "Preparing research reports"],
   requirements: [
    "Current university student majoring in psychology or related field",
    "Strong organizational and analytical skills",
    "Familiarity with research methods and statistical software",
  ],
   benefits: ["Valuable experience in academic research", "Networking opportunities with professors", "Flexible work schedule"],
   contact: 'mailto:research@psychologydept.com'
 },
 {
  id: 11,
  job_title: "IT Support Assistant",
  company: "Campus IT Services",
  location: "UGCS",
  est_salary: 15,
  details: ["Part-time", "Providing technical support to students and staff", "Troubleshooting computer and software issues", "Assisting with campus network and hardware maintenance"],
  requirements: [
    "Basic knowledge of computer hardware and software",
    "Strong problem-solving and customer service skills",
    "Enrollment in a technology-related program is a plus",
  ],
  benefits: ["Hands-on experience in IT support and troubleshooting", "Opportunity to work with cutting-edge technology", "Flexible work schedule"],
  contact: 'mailto:ithelp@campusservices.com'
},
{
  id: 12,
  job_title: "Campus Tour Guide",
  company: "Admissions Office",
  location: "Academic Affairs Office",
  est_salary: 10,
  details: ["Part-time", "Leading campus tours for prospective students and families", "Providing information about campus facilities and programs"],
  requirements: [
    "Energetic and outgoing personality",
    "Excellent communication and public speaking skills",
    "Familiarity with campus facilities and academic programs",
  ],
  benefits: ["Opportunity to share your passion for the campus with others", "Enhanced public speaking and communication skills", "Flexible tour schedules"],
  contact: 'mailto:tours@admissionsdept.com'
},
{
  id: 13,
  job_title: "Waiter/Waitress",
  company: "XYZ Cafe",
  location: "Pentagon Hall",
  est_salary: 8,
  details: ["Part-time", "Taking orders and serving food to students and faculty", "Ensuring a clean and welcoming dining environment", "Assisting with food preparation and handling cash transactions"],
  requirements: [
    "Excellent customer service and communication skills",
    "Ability to work in a fast-paced environment",
    "Basic knowledge of food safety and hygiene",
  ],
  benefits: ["Experience in the food service industry", "Opportunity to work in a diverse and inclusive environment", "Flexible shifts that fit with your class schedule"],
  contact: 'mailto:cafejobs@campuscafe.com'
},
{
  id: 14,
  job_title: "Coffee Shop Barista",
  company: "Bliss Coffee Co.",
  location: "Volta Hall",
  est_salary: 13,
  details: ["Part-time", "Preparing and serving a variety of coffee beverages", "Taking orders and handling cash transactions", "Maintaining a clean and organized coffee shop environment"],
  requirements: [
    "Passion for coffee and knowledge of different coffee brewing methods",
    "Friendly and customer-oriented personality",
    "Ability to work in a fast-paced environment",
    "Basic math skills for cash handling",
  ],
  benefits: ["Develop barista skills and expertise", "Interact with a diverse community of students and staff", "Flexible hours that fit around your class schedule"],
  contact: 'mailto:careers@brewedbliss.com'
},
{
  id: 15,
  job_title: "Gardener / Landscaper",
  company: "Green Thumb Lawn Services",
  location: "University of Ghana Guest Centre",
  est_salary: 9,
  details: ["Part-time", "Maintaining campus gardens and green spaces", "Planting and caring for flowers, shrubs, and trees", "Mowing lawns and trimming hedges", "Watering and fertilizing plants"],
  requirements: [
    "Interest in gardening and landscape maintenance",
    "Physical fitness for outdoor tasks",
    "Ability to work independently and as part of a team",
    "Attention to detail in maintaining campus aesthetics",
  ],
  benefits: ["Enjoy working outdoors in a beautiful campus environment", "Learn about horticulture and gardening techniques", "Flexible hours that accommodate your class schedule"],
  contact: 'mailto:campusjobs@greenthumb.com'
}


]

