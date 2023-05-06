const Game = require('../models/Game')

const gameData = [
  
    {
      "title": "Elden Ring",
      "description": "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      "release_date": "Feb 24, 2022",
      "price": "$59.99"
    },
    {
      "title": "Cyberpunk 2077",
      "description": "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
      "release_date": "Dec 9, 2020",
      "price": "$59.99"
    },
    {
      "title": "The Elder Scrolls V: Skyrim",
      "description": "EPIC FANTASY REBORN The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore",
      "release_date": "Nov 10, 2011",
      "price": "$19.99"
    },
    {
      "title": "Factorio",
      "description": "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.",
      "release_date": "Aug 14, 2020",
      "price": "$35.00"
    },
    {
      "title": "Among Us",
      "description": "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
      "release_date": "Nov 16, 2018",
      "price": "$4.99"
    },
    {
      "title": "Doom (1993)",
      "description": "You’re a marine—one of Earth’s best—recently assigned to the Union Aerospace Corporation (UAC) research facility on Mars. When an experiment malfunctions and creates a portal to Hell, the base is overrun by blood-thirsty demons. You must shoot your way out to survive.",
      "release_date": "Dec 10, 1993",
      "price": "$4.99"
    },
    {
      "title": "Grand Theft Auto V",
      "description": "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
      "release_date": "Apr 14, 2015",
      "price": "$29.99"
    },
    {
      "title": "Halo: Combat Evolved",
      "description": "Super-soldier John-117, Master Chief of the United Nations Space Command, must battle a genocidal alien race known as the Covenant following his violent crash-landing on Halo, an ancient and mysterious ring-world",
      "release_date": "Nov 15, 2001",
      "price": "$14.99"
    },
    {
      "title": "Halo: Reach",
      "description": "A highly-trained branch of the UNSC known as the Noble Team must defend the planet of Reach from a massive Covenant invasion",
      "release_date": "Sep 14, 2010",
      "price": "$4.99"
    },
    {
      "title": "Mass Effect™ Legendary Edition",
      "description": "The Mass Effect™ Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors, and packs — remastered and optimized for 4K Ultra HD.",
      "release_date": "May 14, 2021",
      "price": "$59.99"
    },
    {
      "title": "No Man's Sky",
      "description": "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe",
      "release_date": "Aug 12, 2016",
      "price": "$59.99"
    },
    {
      "title": "Portal",
      "description": "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
      "release_date": "Oct 10, 2007",
      "price": "$9.99"
    },
    {
      "title": "Portal 2",
      "description": "The 'Perpetual Testing Initiative' has been expanded to allow you to design co-op puzzles for you and your friends!",
      "release_date": "Apr 19, 2011",
      "price": "$9.99"
    },
    {
      "title": "Half-Life 2",
      "description": "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide.",
      "release_date": "Nov 16, 2004",
      "price": "$9.99"
    },
    {
      "title": "Sonic Adventure 2",
      "description": "Sonic is arrested after being falsely accused of crimes committed by another hedgehog named Shadow, meanwhile Eggman threatens to destroy the world in 24 hours with a planet destroying weapon if the world doesn't surrender to his rule",
      "release_date": "June 19, 2001",
      "price": "$4.99"
    },
    {
      "title": "Sid Meier's Civilization® V",
      "description": "Create, discover, and download new player-created maps, scenarios, interfaces, and more!",
      "release_date": "Sep 21, 2010",
      "price": "$29.99"
    },
    {
      "title": "Street Fighter V",
      "description": "Warriors from across the globe must join forces in order to stop Shadaloo from plunging the world into crisis.",
      "release_date": "Feb 16, 2016",
      "price": "$4.99"
    },
    {
      "title": "Terraria",
      "description": "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
      "release_date": "May 16, 2011",
      "price": "$9.99"
    },
    {
      "title": "SOULCALIBUR VI",
      "description": "Bring more than your fists to the fight! Featuring all-new battle mechanics and characters, SOULCALIBUR VI marks a new era of the historic franchise. Welcome back to the stage of history!",
      "release_date": "Oct 18, 2018",
      "price": "$59.99"
    },
    {
      "title": "Star Wars: Battlefront 2 (Classic, 2005)",
      "description": "Join the rise of Darth Vader’s elite 501st Legion of Stormtroopers as you fight through an all new story-based saga where every action you take impacts the battlefront and, ultimately, the fate of the Star Wars galaxy.",
      "release_date": "Nov 1, 2005",
      "price": "$9.99"
    },
    {
      "title": "Tomb Raider I",
      "description": "Adventurer Lara Croft has been hired to recover the pieces of an ancient artifact known as the Scion. With her fearless acrobatic style she runs, jumps, swims and climbs her way towards the truth of its origin and powers - leaving only a trail of empty tombs and gun-cartridges in her wake.",
      "release_date": "Oct 25, 1996",
      "price": "$6.99"
    },
    {
      "title": "Valheim",
      "description": "A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin’s patronage!",
      "release_date": "Feb 2, 2021",
      "price": "$19.99"
    },
    {
      "title": "The Witcher® 3: Wild Hunt",
      "description": "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
      "release_date": "May 18, 2015",
      "price": "$39.99"
    },
    {
      "title": "Sonic the Hedgehog (1991)",
      "description": "A blue hedgehog with supersonic speed must rescue animals from being turned into robots by a mad scientist. Doctor Robotnik is an evil and mad scientist who only had one destiny, taking over the whole world and to do this he needs to collect all six chaos emeralds which are located on the South Island.",
      "release_date": "June 23, 1991",
      "price": "$4.99"
    },
    {
      "title": "The Legend of Zelda: Breath of the Wild",
      "description": "After a 100-year slumber, Link wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever. Armed only with what he can scavenge, Link sets out to find answers and the resources needed to survive.",
      "release_date": "Mar 3, 2017",
      "price": "$39.99"
    },
    {
      "title": "Super Mario 64",
      "description": "When the evil Bowser steals 120 power stars and traps Princess Peach within the walls of her own castle, it's up to Mario to save her once again.",
      "release_date": "June 23, 1996",
      "price": "$24.99"
    },
    {
      "title": "Super Mario Bros.",
      "description": "A plumber named Mario and his brother Luigi travel through the Mushroom Kingdom to save the princess from the evil Bowser.",
      "release_date": "Sep 13, 1985",
      "price": "$4.99"
    },
    {
      "title": "Undertale",
      "description": "Undertale is the story of a human child who falls into the underground, which has become the home and prison of the monster race ever since humans drove them from the surface. Monsters have set up a life in this new place, but long to return to the surface.",
      "release_date": "Sep 15, 2015",
      "price": "$9.99"
    },
    {
      "title": "Minecraft",
      "description": "In Minecraft, players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain and may discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.",
      "release_date": "18 November 2011",
      "price": "$29.99"
    },
    {
      "title": "The Legend of Zelda: Ocarina of Time",
      "description": "A young Kokiri boy discovers that his destiny is to free the Seven Sages and save the land of Hyrule from the treacherous sorcerer Ganondorf.",
      "release_date": "Nov 21, 1998",
      "price": "$14.99"
    },
    {
      "title": "Pokémon Yellow Version: Special Pikachu Edition",
      "description": "Become the champion of the Indigo League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four.",
      "release_date": "Sep 12, 1998",
      "price": "$4.99"
    },
    {
      "title": "Pokémon Platinum",
      "description": "Pokémon Platinum features a new story full of adventure, never-before-seen forms of powerful Pokémon – including the legendary Giratina's Origin Forme – and the Distortion World, a mysterious new world that suddenly appears in the Sinnoh region.",
      "release_date": "Sep 13, 2008",
      "price": "$19.99"
    },
    {
      "title": "Fallout 3",
      "description": "In a post apocalyptic world, a man/woman leaves the protection of the vault he/she was raised in to search for his/her missing father. He/She finds a world quite different from the one he/she experienced in the vault. His/Her experiences grow him/her physically, mentally, psychologically and morally.",
      "release_date": "Oct 28, 2008",
      "price": "$4.99"
    },
    {
      "title": "GoldenEye 007 (1997)",
      "description": "GoldenEye 007 is a first-person shooter where the player takes the role of Secret Intelligence Service agent James Bond through a series of levels. In each level, the player must complete a set of objectives while computer-controlled opponents try to hinder the player's progress.",
      "release_date": "Aug 23, 1997",
      "price": "$14.99"
    },
    {
      "title": "DARK SOULS™: REMASTERED",
      "description": "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
      "release_date": "May 23, 2018",
      "price": "$39.99"
    }
  ]
const seedGames = () => Game.bulkCreate(gameData)

module.exports = seedGames