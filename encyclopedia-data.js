// encyclopedia-data.js
// Single source of truth for all encyclopedia entries.
// Add new entries here and connections auto-update across every page.
// Tags drive the relevance engine — more shared tags = higher connection score.

const ENCYCLOPEDIA = [
  {
    id: "carter-woodson",
    name: "Carter G. Woodson",
    url: "carter-woodson.html",
    quizDay: "2026-02-01",
    vol: "February 1 \u00b7 Foundations & Education",
    dates: "1875 \u2014 1950",
    category: "People",
    barClass: "",
    tags: ["education", "scholarship", "foundations", "black-history", "publishing", "1920s", "1930s", "1940s", "civil-rights", "resistance"],
    desc: "The Father of Black History, who created what became Black History Month in 1926 to correct the systematic erasure of Black Americans from textbooks."
  },
  {
    id: "shirley-chisholm",
    name: "Shirley Chisholm",
    url: "shirley-chisholm.html",
    quizDay: "2026-02-02",
    vol: "February 2 \u00b7 Politics & Government",
    dates: "1924 \u2014 2005",
    category: "People",
    barClass: "politics",
    tags: ["politics", "congress", "presidency", "women", "representation", "civil-rights", "1960s", "1970s", "black-firsts", "resistance"],
    desc: "First Black woman elected to Congress and first Black woman to run for President of the United States, in 1972. She ran to win."
  },
  {
    id: "garrett-morgan",
    name: "Garrett Morgan",
    url: "garrett-morgan.html",
    quizDay: "2026-02-03",
    vol: "February 3 \u00b7 Innovation & Invention",
    dates: "1877 \u2014 1963",
    category: "People",
    barClass: "innovation",
    tags: ["invention", "science", "innovation", "1900s", "1910s", "1920s", "black-firsts", "racism-against", "ohio", "safety"],
    desc: "Inventor of the three-position traffic signal and an early gas mask \u2014 and then companies stopped buying his mask when they found out a Black man made it."
  },
  {
    id: "mansa-musa",
    name: "Mansa Musa",
    url: "mansa-musa.html",
    quizDay: "2026-02-04",
    vol: "February 4 \u00b7 African History & Wealth",
    dates: "c. 1280 \u2014 c. 1337",
    category: "People",
    barClass: "innovation",
    tags: ["africa", "wealth", "empire", "mali", "medieval", "economics", "erasure", "timbuktu", "1300s"],
    desc: "Emperor of the Mali Empire and the wealthiest person in recorded human history, estimated at $400 billion in modern terms."
  },
  {
    id: "brown-v-board",
    name: "Brown v. Board of Education",
    url: "brown-v-board.html",
    quizDay: "2026-02-05",
    vol: "February 5 \u00b7 Civil Rights Law",
    dates: "1954",
    category: "Events",
    barClass: "politics",
    tags: ["law", "civil-rights", "education", "segregation", "supreme-court", "1950s", "thurgood-marshall", "resistance", "policy"],
    desc: "The Supreme Court ruling that struck down school segregation, argued by Thurgood Marshall and named for a 7-year-old girl in Topeka, Kansas."
  },
  {
    id: "daniel-hale-williams",
    name: "Daniel Hale Williams",
    url: "daniel-hale-williams.html",
    quizDay: "2026-02-06",
    vol: "February 6 \u00b7 Medicine & Science",
    dates: "1856 \u2014 1931",
    category: "People",
    barClass: "",
    tags: ["medicine", "science", "invention", "chicago", "1890s", "black-firsts", "hospital", "racism-against", "infrastructure"],
    desc: "Performed the world's first documented successful open-heart surgery in 1893 \u2014 without anesthesia, antibiotics, or X-rays. The patient lived another 50 years."
  },
  {
    id: "tulsa-massacre",
    name: "Tulsa Race Massacre",
    url: "tulsa-massacre.html",
    quizDay: "2026-02-07",
    vol: "February 7 \u00b7 Erasure & Violence",
    dates: "May 31 \u2014 June 1, 1921",
    category: "Events",
    barClass: "erasure",
    tags: ["violence", "erasure", "economics", "black-wealth", "1920s", "oklahoma", "cover-up", "reparations", "resistance", "greenwood"],
    desc: "The destruction of Black Wall Street in Greenwood, Tulsa \u2014 the most prosperous Black community in America, burned to the ground in one night."
  },
  {
    id: "cointelpro",
    name: "COINTELPRO",
    url: "cointelpro.html",
    quizDay: "2026-02-08",
    vol: "February 8 \u00b7 Government & Resistance",
    dates: "1956 \u2014 1971",
    category: "Systems",
    barClass: "systems",
    tags: ["government", "fbi", "surveillance", "resistance", "civil-rights", "1960s", "1970s", "black-panthers", "mlk", "cover-up", "policy"],
    desc: "The FBI's covert program to expose, disrupt, and destroy Black political organizations \u2014 confirmed by Senate investigation, not conspiracy theory."
  },
  {
    id: "rosewood-massacre",
    name: "The Rosewood Massacre",
    url: "rosewood-massacre.html",
    quizDay: "2026-02-09",
    vol: "February 9 \u00b7 Erasure & Violence",
    dates: "January 1923",
    category: "Events",
    barClass: "erasure",
    tags: ["violence", "erasure", "florida", "1920s", "cover-up", "reparations", "black-community", "racism-against"],
    desc: "A white mob burned the thriving all-Black town of Rosewood, Florida to the ground after a false accusation. The town was never rebuilt."
  },
  {
    id: "tuskegee-airmen",
    name: "The Tuskegee Airmen",
    url: "tuskegee-airmen.html",
    quizDay: "2026-02-10",
    vol: "February 10 \u00b7 Military History",
    dates: "1941 \u2014 1946",
    category: "People",
    barClass: "politics",
    tags: ["military", "world-war-ii", "1940s", "alabama", "aviation", "black-firsts", "segregation", "civil-rights", "resistance"],
    desc: "The all-Black fighter group that flew 15,000+ combat sorties and never lost a bomber to enemy aircraft \u2014 then came home to segregated diners."
  },
  {
    id: "the-blues",
    name: "The Blues",
    url: "the-blues.html",
    quizDay: "2026-02-11",
    vol: "February 11 \u00b7 Music & Culture",
    dates: "Late 1800s \u2014 Present",
    category: "Culture",
    barClass: "culture",
    tags: ["music", "culture", "mississippi", "great-migration", "1900s", "1920s", "art", "expression", "influence", "appropriation"],
    desc: "The root of rock, jazz, R&B, hip-hop, and country \u2014 born in the Mississippi Delta from the field hollers and spirituals of enslaved people."
  },
  {
    id: "redlining",
    name: "Redlining",
    url: "redlining.html",
    quizDay: "2026-02-12",
    vol: "February 12 \u00b7 Economic Policy",
    dates: "1930s \u2014 1968",
    category: "Systems",
    barClass: "systems",
    tags: ["housing", "economics", "wealth", "policy", "1930s", "1940s", "1950s", "1960s", "segregation", "black-wealth", "government", "systemic-racism"],
    desc: "The federal government's policy of marking Black neighborhoods as 'hazardous' and using those maps to deny mortgages \u2014 engineering the racial wealth gap."
  },
  {
    id: "enslaved-labor",
    name: "Enslaved Labor & American Infrastructure",
    url: "enslaved-labor.html",
    quizDay: "2026-02-13",
    vol: "February 13 \u00b7 Labor & Economics",
    dates: "1793 \u2014 1865",
    category: "Systems",
    barClass: "erasure",
    tags: ["slavery", "labor", "economics", "1800s", "infrastructure", "erasure", "universities", "reparations", "systemic-racism"],
    desc: "The U.S. Capitol, the White House, Harvard, Yale, and Princeton \u2014 all built or funded by enslaved Black people who never saw a wage."
  },
  {
    id: "loving-v-virginia",
    name: "Loving v. Virginia",
    url: "loving-v-virginia.html",
    quizDay: "2026-02-14",
    vol: "February 14 \u00b7 Civil Rights Law",
    dates: "1967",
    category: "Events",
    barClass: "politics",
    tags: ["law", "civil-rights", "marriage", "supreme-court", "1960s", "segregation", "resistance", "love"],
    desc: "Mildred and Richard Loving were arrested in their bedroom for being married. Their Supreme Court case struck down all bans on interracial marriage in 1967."
  },
  {
    id: "aave",
    name: "AAVE & Linguistic Culture",
    url: "aave.html",
    quizDay: "2026-02-15",
    vol: "February 15 \u00b7 Language & Culture",
    dates: "Origins in slavery \u2014 Present",
    category: "Culture",
    barClass: "culture",
    tags: ["language", "culture", "slavery", "expression", "appropriation", "identity", "music", "ongoing"],
    desc: "African American Vernacular English is a fully systematic dialect \u2014 not broken English \u2014 and the source of words now used globally."
  },
  {
    id: "black-fashion",
    name: "Black Fashion & Cultural Appropriation",
    url: "black-fashion.html",
    quizDay: "2026-02-16",
    vol: "February 16 \u00b7 Culture & Commerce",
    dates: "Ongoing",
    category: "Culture",
    barClass: "culture",
    tags: ["culture", "fashion", "appropriation", "identity", "ongoing", "economics", "expression"],
    desc: "Cornrows, hoop earrings, baggy clothes \u2014 mocked on Black people, criminalized, then repackaged and celebrated when adopted by others."
  },
  {
    id: "melvin-van-peebles",
    name: "Melvin Van Peebles",
    url: "melvin-van-peebles.html",
    quizDay: "2026-02-17",
    vol: "February 17 \u00b7 Film & Arts",
    dates: "1932 \u2014 2021",
    category: "People",
    barClass: "culture",
    tags: ["film", "art", "culture", "1970s", "black-firsts", "independence", "expression", "hollywood", "resistance"],
    desc: "Made Sweet Sweetback's Baadasssss Song outside Hollywood for $150K, grossed $15M, and proved a Black audience existed that the industry had been ignoring."
  },
  {
    id: "black-dance",
    name: "Black Dance Culture",
    url: "black-dance.html",
    quizDay: "2026-02-18",
    vol: "February 18 \u00b7 Dance & Movement",
    dates: "Ongoing",
    category: "Culture",
    barClass: "culture",
    tags: ["dance", "culture", "appropriation", "expression", "music", "ongoing", "identity"],
    desc: "From New Orleans Bounce to the griddy to the running man \u2014 the origin stories of America's most viral dances trace back to Black communities that rarely got credit."
  },
  {
    id: "black-culinary-history",
    name: "Black Culinary History",
    url: "black-culinary-history.html",
    quizDay: "2026-02-19",
    vol: "February 19 \u00b7 Food & Culture",
    dates: "Late 1800s \u2014 Present",
    category: "Culture",
    barClass: "culture",
    tags: ["food", "culture", "slavery", "expression", "1800s", "appropriation", "identity", "ongoing"],
    desc: "Soul food, Southern food, and Cajun cuisine all share the same roots \u2014 created by enslaved people who turned limited ingredients into the foundation of American cooking."
  },
  {
    id: "black-tech-pioneers",
    name: "Black Tech Pioneers",
    url: "black-tech-pioneers.html",
    quizDay: "2026-02-20",
    vol: "February 20 \u00b7 Technology & Innovation",
    dates: "1969 \u2014 Present",
    category: "People",
    barClass: "innovation",
    tags: ["technology", "innovation", "science", "computing", "1960s", "1970s", "black-firsts", "erasure", "ongoing"],
    desc: "Clarence Ellis, Mark Dean, Katherine Johnson \u2014 the Black scientists and engineers whose work made modern computing possible, and whose names most people don't know."
  },
  {
    id: "sports-integration",
    name: "Sports Integration Beyond Jackie Robinson",
    url: "sports-integration.html",
    quizDay: "2026-02-21",
    vol: "February 21 \u00b7 Sports History",
    dates: "1950s \u2014 1960s",
    category: "Events",
    barClass: "politics",
    tags: ["sports", "civil-rights", "integration", "1950s", "1960s", "black-firsts", "segregation", "resistance"],
    desc: "Chuck Cooper, Althea Gibson, and the athletes who integrated every other American sport \u2014 at enormous personal cost the celebration usually skips over."
  },
  {
    id: "slave-patrols",
    name: "Slave Patrols & The Origins of American Policing",
    url: "slave-patrols.html",
    quizDay: "2026-02-22",
    vol: "February 22 \u00b7 Law Enforcement & Justice",
    dates: "1704 \u2014 Present",
    category: "Systems",
    barClass: "systems",
    tags: ["policing", "slavery", "1700s", "1800s", "systemic-racism", "law", "ongoing", "government", "policy"],
    desc: "America's first formal police forces were slave patrols, created in 1704. After emancipation, many became local sheriffs enforcing Black Codes. Not reorganized \u2014 rebranded."
  },
  {
    id: "voting-rights",
    name: "Voting Rights & Suppression",
    url: "voting-rights.html",
    quizDay: "2026-02-23",
    vol: "February 23 \u00b7 Democracy & Civil Rights",
    dates: "1870 \u2014 Present",
    category: "Systems",
    barClass: "systems",
    tags: ["voting", "democracy", "civil-rights", "1870s", "suppression", "policy", "law", "ongoing", "systemic-racism", "resistance", "fannie-lou-hamer", "septima-clark"],
    desc: "The 15th Amendment gave Black men the vote in 1870. Within years: poll taxes, rigged literacy tests, grandfather clauses, and violence. The toolkit never disappeared."
  },
  {
    id: "education-inequality",
    name: "Education Inequality by Design",
    url: "education-inequality.html",
    quizDay: "2026-02-24",
    vol: "February 24 \u00b7 Education & Policy",
    dates: "Ongoing",
    category: "Systems",
    barClass: "systems",
    tags: ["education", "policy", "systemic-racism", "housing", "economics", "ongoing", "government", "segregation", "ruby-bridges", "septima-clark"],
    desc: "There is no federal law requiring equal school funding. Schools are funded by property taxes. The ZIP code you're born into determines your educational opportunities."
  },
  {
    id: "13th-amendment",
    name: "Mass Incarceration & the 13th Amendment",
    url: "13th-amendment.html",
    quizDay: "2026-02-25",
    vol: "February 25 \u00b7 Justice System",
    dates: "1865 \u2014 Present",
    category: "Systems",
    barClass: "systems",
    tags: ["law", "incarceration", "slavery", "1860s", "systemic-racism", "policy", "ongoing", "government", "labor"],
    desc: "The 13th Amendment abolished slavery 'except as punishment for crime.' That exception was immediately exploited. It still is."
  },
  {
    id: "environmental-racism",
    name: "Environmental Racism",
    url: "environmental-racism.html",
    quizDay: "2026-02-26",
    vol: "February 26 \u00b7 Environment & Public Health",
    dates: "Ongoing",
    category: "Systems",
    barClass: "systems",
    tags: ["environment", "health", "policy", "systemic-racism", "ongoing", "housing", "economics", "government"],
    desc: "Cancer Alley, Flint, Michigan, and hundreds of communities where race is a stronger predictor of living near a polluting facility than income."
  },
  {
    id: "modern-civil-rights",
    name: "Modern Civil Rights Leaders",
    url: "modern-civil-rights.html",
    quizDay: "2026-02-27",
    vol: "February 27 \u00b7 Current History",
    dates: "2013 \u2014 Present",
    category: "People",
    barClass: "politics",
    tags: ["civil-rights", "resistance", "2010s", "blm", "voting", "ongoing", "politics", "women", "black-firsts"],
    desc: "Alicia Garza, Patrisse Cullors, Opal Tometi, Bryan Stevenson, Stacey Abrams \u2014 the current leaders of a movement that is not a completed chapter."
  },
  {
    id: "mis-education",
    name: "The Mis-Education of the Negro",
    url: "mis-education.html",
    quizDay: "2026-02-28",
    vol: "February 28 \u00b7 Education & Philosophy",
    dates: "1933 \u2014 Present",
    category: "Events",
    barClass: "",
    tags: ["education", "scholarship", "philosophy", "1930s", "erasure", "identity", "black-history", "foundations"],
    desc: "Carter G. Woodson's argument that the greatest enemy was a miseducation that taught Black people to see themselves through white eyes \u2014 and why Black History Month exists to correct it."
  },
  {
    id: "barack-obama",
    name: "Barack Obama",
    url: "barack-obama.html",
    quizDay: "2026-02-29",
    vol: "February 29\u2605 \u00b7 44th & Forever",
    dates: "1961 \u2014 Present",
    category: "People",
    barClass: "politics",
    tags: ["politics", "presidency", "black-firsts", "2000s", "2010s", "civil-rights", "ongoing", "representation"],
    desc: "The 44th President of the United States and the first Black person to hold that office \u2014 elected November 4, 2008, serving two full terms."
  },

  // ---- MARCH ENTRIES ----

  {
    id: "henrietta-lacks",
    name: "Henrietta Lacks",
    url: "henrietta-lacks.html",
    quizDay: "2026-03-01",
    vol: "March 1 \u00b7 Medicine & Justice",
    dates: "1920 \u2014 1951",
    category: "People",
    barClass: "",
    tags: ["medicine", "science", "ethics", "women", "consent", "black-body", "1950s", "racism-against", "erasure", "healthcare", "black-firsts", "virginia"],
    desc: "Her cancer cells were taken without her consent in 1951 and became the foundation of modern medical research. She died at 31. Her family received nothing."
  },
  {
    id: "ida-b-wells",
    name: "Ida B. Wells",
    url: "ida-b-wells.html",
    quizDay: "2026-03-02",
    vol: "March 2 \u00b7 Journalism & Courage",
    dates: "1862 \u2014 1931",
    category: "People",
    barClass: "",
    tags: ["journalism", "civil-rights", "women", "resistance", "violence", "erasure", "1890s", "1900s", "lynching", "memphis", "chicago", "black-press", "black-firsts"],
    desc: "Documented lynching across the South when no newspaper would. A mob burned her press. She published from exile and never stopped."
  },
  {
    id: "fannie-lou-hamer",
    name: "Fannie Lou Hamer",
    url: "fannie-lou-hamer.html",
    quizDay: "2026-03-03",
    vol: "March 3 \u00b7 Voting Rights",
    dates: "1917 \u2014 1977",
    category: "People",
    barClass: "politics",
    tags: ["voting", "civil-rights", "women", "resistance", "mississippi", "1960s", "violence", "democracy", "suppression", "fannie-lou-hamer", "sncc", "testimony"],
    desc: "Beaten in a Mississippi jail for registering to vote. Testified before the 1964 Democratic National Convention. Carried permanent injuries for the rest of her life."
  },
  {
    id: "madam-cj-walker",
    name: "Madam C.J. Walker",
    url: "madam-cj-walker.html",
    quizDay: "2026-03-04",
    vol: "March 4 \u00b7 Economic Power",
    dates: "1867 \u2014 1919",
    category: "People",
    barClass: "innovation",
    tags: ["economics", "black-wealth", "women", "entrepreneurship", "1900s", "1910s", "black-firsts", "louisiana", "indiana", "beauty", "resistance", "naacp"],
    desc: "Born to freed slaves. Widowed at 20. Built a national haircare empire and became one of the first self-made female millionaires in American history."
  },
  {
    id: "mae-jemison",
    name: "Mae Jemison",
    url: "mae-jemison.html",
    quizDay: "2026-03-05",
    vol: "March 5 \u00b7 Science & Space",
    dates: "1956 \u2014 present",
    category: "People",
    barClass: "innovation",
    tags: ["science", "space", "nasa", "women", "black-firsts", "1990s", "technology", "medicine", "engineering", "chicago", "representation"],
    desc: "Chemical engineer, physician, Peace Corps doctor, astronaut. In 1992 she became the first Black woman in space, carrying a photo of Bessie Coleman into orbit."
  },
  {
    id: "claudette-colvin",
    name: "Claudette Colvin",
    url: "claudette-colvin.html",
    quizDay: "2026-03-06",
    vol: "March 6 \u00b7 Hidden History",
    dates: "1939 \u2014 present",
    category: "People",
    barClass: "erasure",
    tags: ["civil-rights", "resistance", "women", "1950s", "montgomery", "alabama", "bus-boycott", "erasure", "black-firsts", "hidden-history", "law", "segregation"],
    desc: "Refused her bus seat nine months before Rosa Parks. Was a plaintiff in the case that ended bus segregation. Then was quietly erased from the story."
  },
  {
    id: "ruby-bridges",
    name: "Ruby Bridges",
    url: "ruby-bridges.html",
    quizDay: "2026-03-07",
    vol: "March 7 \u00b7 Civil Rights",
    dates: "1954 \u2014 present",
    category: "People",
    barClass: "politics",
    tags: ["civil-rights", "integration", "education", "women", "children", "1960s", "new-orleans", "louisiana", "segregation", "resistance", "courage", "black-firsts"],
    desc: "At six years old, walked through a screaming mob of adults to integrate William Frantz Elementary School in New Orleans. For months, she was the only student in her class."
  },
  {
    id: "septima-clark",
    name: "Septima Clark",
    url: "septima-clark.html",
    quizDay: "2026-03-08",
    vol: "March 8 \u00b7 Education & Strategy",
    dates: "1898 \u2014 1987",
    category: "People",
    barClass: "",
    tags: ["education", "civil-rights", "women", "resistance", "voting", "1950s", "1960s", "south-carolina", "literacy", "strategy", "sclc", "septima-clark", "fannie-lou-hamer"],
    desc: "Built citizenship schools across the South to teach Black adults the literacy skills needed to pass discriminatory voter registration tests. MLK called her the Mother of the Movement."
  },
  {
    id: "diane-nash",
    name: "Diane Nash",
    url: "diane-nash.html",
    quizDay: "2026-03-09",
    vol: "March 9 \u00b7 Resistance & Leadership",
    dates: "1938 \u2014 present",
    category: "People",
    barClass: "politics",
    tags: ["civil-rights", "resistance", "women", "sncc", "1960s", "nashville", "sit-ins", "freedom-rides", "nonviolence", "strategy", "tennessee", "black-firsts"],
    desc: "Co-founded SNCC. Organized the Nashville sit-ins that desegregated downtown businesses. Kept the Freedom Rides going when violence tried to stop them."
  },
  {
    id: "sarah-rector",
    name: "Sarah Rector",
    url: "sarah-rector.html",
    quizDay: "2026-03-10",
    vol: "March 10 \u00b7 Hidden Wealth",
    dates: "1902 \u2014 1967",
    category: "People",
    barClass: "innovation",
    tags: ["economics", "black-wealth", "women", "oklahoma", "1910s", "oil", "hidden-history", "children", "erasure", "creek-freedman", "racism-against", "legal"],
    desc: "At eleven years old, oil was discovered on her land and she became one of the wealthiest Black children in America. The system immediately moved to control what was hers."
  },

  // ---- SUPPLEMENTAL ENTRIES ----

  {
    id: "black-press",
    name: "The Black Press & Media",
    url: "black-press.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Media & Culture",
    dates: "1827 \u2014 Present",
    category: "Culture",
    barClass: "culture",
    tags: ["media", "civil-rights", "1800s", "1900s", "1920s", "1940s", "ongoing", "identity", "violence", "politics", "education", "culture", "journalism", "ida-b-wells"],
    desc: "Freedom's Journal to the Chicago Defender to Black Twitter \u2014 the Black press has always provided coverage, context, and community that mainstream media would not."
  },
  {
    id: "black-wall-street",
    name: "Black Wall Street",
    url: "black-wall-street.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Economics & Erasure",
    dates: "c. 1905 \u2014 Present",
    category: "Events",
    barClass: "erasure",
    tags: ["economics", "black-business", "black-wealth", "violence", "erasure", "1920s", "legal", "ongoing", "segregation", "civil-rights", "community", "greenwood", "tulsa-massacre"],
    desc: "Greenwood District \u2014 35 blocks, 600+ businesses, a hospital, a newspaper, a school system. Built in 20 years. Destroyed in one night. Rebuilt anyway."
  },
  {
    id: "harlem-renaissance",
    name: "The Harlem Renaissance",
    url: "harlem-renaissance.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Arts & Identity",
    dates: "c. 1920 \u2014 1935",
    category: "Events",
    barClass: "culture",
    tags: ["culture", "arts", "music", "1920s", "identity", "literature", "politics", "migration", "education", "new-york"],
    desc: "Between 1920 and 1935, Harlem became the capital of Black America \u2014 producing the most concentrated outpouring of Black art, music, and literature in history."
  },
  {
    id: "black-women-in-politics",
    name: "Black Women in Politics",
    url: "black-women-in-politics.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Power & Representation",
    dates: "1868 \u2014 Present",
    category: "People",
    barClass: "politics",
    tags: ["politics", "civil-rights", "black-firsts", "1960s", "1970s", "ongoing", "representation", "voting", "identity", "legal", "women", "fannie-lou-hamer", "diane-nash", "shirley-chisholm"],
    desc: "From Ida B. Wells to Fannie Lou Hamer to Shirley Chisholm to Kamala Harris \u2014 Black women built American democracy while being systematically excluded from governing it."
  },
  {
    id: "hbcus",
    name: "HBCUs",
    url: "hbcus.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Education & Power",
    dates: "1837 \u2014 Present",
    category: "Systems",
    barClass: "systems",
    tags: ["education", "black-firsts", "1800s", "civil-rights", "1960s", "ongoing", "economics", "community", "identity", "representation", "segregation"],
    desc: "3% of colleges. 22% of Black college graduates. 27% of Black STEM graduates. HBCUs were built because every other institution refused Black students."
  },
  {
    id: "great-migration",
    name: "The Great Migration",
    url: "great-migration.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Movement & Identity",
    dates: "1916 \u2014 1970",
    category: "Events",
    barClass: "politics",
    tags: ["migration", "civil-rights", "1920s", "1940s", "economics", "culture", "politics", "violence", "segregation", "community", "music", "chicago"],
    desc: "Six million Black Americans left the rural South for Northern cities between 1916 and 1970 \u2014 fleeing terror, seeking opportunity, and transforming American culture."
  },
  {
    id: "juneteenth",
    name: "Juneteenth",
    url: "juneteenth.html",
    quizDay: null,
    vol: "Supplemental \u00b7 Freedom & Memory",
    dates: "June 19, 1865 \u2014 Present",
    category: "Events",
    barClass: "politics",
    tags: ["civil-rights", "slavery", "legal", "1800s", "ongoing", "culture", "identity", "politics", "community", "celebration", "texas"],
    desc: "The Emancipation Proclamation was signed in 1863. The last enslaved Texans were told they were free on June 19, 1865 \u2014 two and a half years later."
  }
];

// -----------------------------------------------------------------------
// getConnections(currentId, maxResults)
// Returns up to maxResults encyclopedia entries most related to currentId.
// Scoring: 1 point per shared tag. Ties broken by ENCYCLOPEDIA array order.
// -----------------------------------------------------------------------
function getConnections(currentId, maxResults) {
  maxResults = maxResults || 5;
  const current = ENCYCLOPEDIA.find(e => e.id === currentId);
  if (!current) return [];

  const seen = {};
  const unique = ENCYCLOPEDIA.filter(e => {
    if (seen[e.id]) return false;
    seen[e.id] = true;
    return true;
  });

  const scored = unique
    .filter(e => e.id !== currentId)
    .map(e => {
      const shared = e.tags.filter(t => current.tags.includes(t)).length;
      return { entry: e, score: shared };
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, maxResults).map(s => s.entry);
}
