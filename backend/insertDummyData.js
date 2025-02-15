const mongoose = require('mongoose');
const Place = require('./models/placeModel');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const insertDummyData = async () => {
  await connectDB();

  const places = [
    {
      name: "Eiffel Tower",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.",
      activities: ["Sightseeing", "Photography", "Dining"],
      views: 1200,
    },
    {
      name: "Berlin Wall",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Berlin_Wall_2013.jpg",
      description: "The Berlin Wall was a guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989.",
      activities: ["Sightseeing", "History Tours", "Photography"],
      views: 900,
    },
    {
      name: "Taj Mahal",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1500,
    },
    {
      name: "Statue of Liberty",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
      description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
      activities: ["Sightseeing", "Photography", "Boat Tours"],
      views: 1300,
    },
    {
      name: "Great Wall of China",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/GreatWall_2004_Summer_4.jpg",
      description: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of China.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 2000,
    },
    {
      name: "Colosseum",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
      description: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1100,
    },
    {
      name: "Machu Picchu",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
      description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1400,
    },
    {
      name: "Christ the Redeemer",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
      description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1250,
    },
    {
      name: "Sydney Opera House",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg",
      description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia.",
      activities: ["Sightseeing", "Photography", "Performances"],
      views: 1350,
    },
    {
      name: "Santorini",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Santorini_Thira.jpg",
      description: "Santorini is one of the Cyclades islands in the Aegean Sea, known for its whitewashed buildings and stunning sunsets.",
      activities: ["Sightseeing", "Photography", "Dining"],
      views: 1450,
    },
    {
      name: "Grand Canyon",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Grand_Canyon_view_from_Pima_Point_2010.jpg",
      description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1600,
    },
    {
      name: "Niagara Falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Niagara_Falls_from_Canada.jpg",
      description: "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between Ontario, Canada, and New York, United States.",
      activities: ["Sightseeing", "Photography", "Boat Tours"],
      views: 1500,
    },
    {
      name: "Petra",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Petra_Jordan_BW_21.JPG",
      description: "Petra is a historical and archaeological city in southern Jordan, famous for its rock-cut architecture and water conduit system.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1300,
    },
    {
      name: "Mount Fuji",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Hakone.jpg",
      description: "Mount Fuji is an active stratovolcano and the highest mountain in Japan, located on Honshu Island.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1400,
    },
    {
      name: "Pyramids of Giza",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      description: "The Pyramids of Giza are ancient pyramid structures located in Giza, Egypt.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1700,
    },
    {
      name: "Angkor Wat",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Angkor_Wat_temple.jpg",
      description: "Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1200,
    },
    {
      name: "Banff National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Moraine_Lake_17092005.jpg",
      description: "Banff National Park is Canada's oldest national park, located in the Rocky Mountains.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1100,
    },
    {
      name: "Yellowstone National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Yellowstone_river_in_Hayden_valley.jpg",
      description: "Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot in Wyoming, Montana, and Idaho.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1300,
    },
    {
      name: "Galápagos Islands",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Galapagos_Islands.jpg",
      description: "The Galápagos Islands are an archipelago of volcanic islands distributed on either side of the equator in the Pacific Ocean.",
      activities: ["Sightseeing", "Photography", "Wildlife Watching"],
      views: 1400,
    },
    {
      name: "Victoria Falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Victoria_Falls_%28Zambia%29.jpg",
      description: "Victoria Falls is a waterfall on the Zambezi River in southern Africa, which provides habitat for several unique species of plants and animals.",
      activities: ["Sightseeing", "Photography", "Boat Tours"],
      views: 1500,
    },
    {
      name: "Great Barrier Reef",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Great_Barrier_Reef.jpg",
      description: "The Great Barrier Reef is the world's largest coral reef system located in the Coral Sea, off the coast of Queensland, Australia.",
      activities: ["Snorkeling", "Diving", "Sightseeing"],
      views: 1600,
    },
    {
      name: "Serengeti National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Serengeti_Landscape.jpg",
      description: "Serengeti National Park is a Tanzanian national park in the Serengeti ecosystem in the Mara and Simiyu regions.",
      activities: ["Wildlife Watching", "Photography", "Sightseeing"],
      views: 1200,
    },
    {
      name: "Iguazu Falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Iguazu_Falls.jpg",
      description: "Iguazu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.",
      activities: ["Sightseeing", "Photography", "Boat Tours"],
      views: 1300,
    },
    {
      name: "Antelope Canyon",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Antelope_Canyon_478.jpg",
      description: "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona.",
      activities: ["Hiking", "Photography", "Sightseeing"],
      views: 1400,
    },
    {
      name: "Plitvice Lakes National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Plitvice_Lakes_National_Park%2C_Croatia.jpg",
      description: "Plitvice Lakes National Park is a 295-sq.-km forest reserve in central Croatia, known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1200,
    },
    {
      name: "Cinque Terre",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Cinque_Terre.jpg",
      description: "Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1300,
    },
    {
      name: "Bora Bora",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bora_Bora.jpg",
      description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia, surrounded by sand-fringed motus and a turquoise lagoon protected by a coral reef.",
      activities: ["Snorkeling", "Diving", "Sightseeing"],
      views: 1400,
    },
    {
      name: "Mount Kilimanjaro",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mount_Kilimanjaro.jpg",
      description: "Mount Kilimanjaro is a dormant volcano in Tanzania and the highest mountain in Africa.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1500,
    },
    {
      name: "Salar de Uyuni",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Salar_de_Uyuni%2C_Bolivia.jpg",
      description: "Salar de Uyuni is the world's largest salt flat, located in southwest Bolivia.",
      activities: ["Sightseeing", "Photography", "Tours"],
      views: 1200,
    },
    {
      name: "Blue Lagoon",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Blue_Lagoon%2C_Iceland.jpg",
      description: "The Blue Lagoon is a geothermal spa in southwestern Iceland.",
      activities: ["Swimming", "Sightseeing", "Relaxation"],
      views: 1300,
    },
    {
      name: "Ha Long Bay",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ha_Long_Bay.jpg",
      description: "Ha Long Bay is a UNESCO World Heritage Site and popular travel destination in Quang Ninh Province, Vietnam.",
      activities: ["Boat Tours", "Sightseeing", "Photography"],
      views: 1400,
    },
    {
      name: "Bagan",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bagan%2C_Myanmar.jpg",
      description: "Bagan is an ancient city and a UNESCO World Heritage Site located in the Mandalay Region of Myanmar.",
      activities: ["Sightseeing", "Photography", "History Tours"],
      views: 1500,
    },
    {
      name: "Mount Everest",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
      description: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1600,
    },
    {
      name: "Uluru",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Uluru_Ayers_Rock.jpg",
      description: "Uluru, also known as Ayers Rock, is a large sandstone rock formation in the southern part of the Northern Territory in central Australia.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1200,
    },
    {
      name: "Lake Bled",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lake_Bled.jpg",
      description: "Lake Bled is a lake in the Julian Alps of the Upper Carniolan region of northwestern Slovenia.",
      activities: ["Boat Tours", "Sightseeing", "Photography"],
      views: 1300,
    },
    {
      name: "Pamukkale",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pamukkale_Travertines.jpg",
      description: "Pamukkale is a natural site in Denizli Province in southwestern Turkey, known for its thermal waters and travertine terraces.",
      activities: ["Swimming", "Sightseeing", "Photography"],
      views: 1400,
    },
    {
      name: "Table Mountain",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Table_Mountain.jpg",
      description: "Table Mountain is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1500,
    },
    {
      name: "Yosemite National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yosemite_National_Park.jpg",
      description: "Yosemite National Park is in California’s Sierra Nevada mountains, known for its giant, ancient sequoias, and the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1600,
    },
    {
      name: "Zion National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Zion_National_Park.jpg",
      description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1200,
    },
    {
      name: "Bryce Canyon National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bryce_Canyon_National_Park.jpg",
      description: "Bryce Canyon National Park is a sprawling reserve in southern Utah, known for its crimson-colored hoodoos, which are spire-shaped rock formations.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1300,
    },
    {
      name: "Arches National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Arches_National_Park.jpg",
      description: "Arches National Park lies north of Moab in the state of Utah. Bordered by the Colorado River in the southeast, it’s known as the site of more than 2,000 natural sandstone arches.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1400,
    },
    {
      name: "Glacier National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Glacier_National_Park.jpg",
      description: "Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana's Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border.",
      activities: ["Hiking", "Sightseeing", "Photography"],
      views: 1500,
    },
  ];

  try {
    await Place.insertMany(places);
    console.log('Dummy data inserted');
    process.exit();
  } catch (error) {
    console.error('Failed to insert dummy data:', error.message);
    process.exit(1);
  }
};

insertDummyData();