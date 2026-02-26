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
    vol: "February 1 · Foundations & Education",
    dates: "1875 — 1950",
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
    vol: "February 2 · Politics & Government",
    dates: "1924 — 2005",
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
    vol: "February 3 · Innovation & Invention",
    dates: "1877 — 1963",
    category: "People",
    barClass: "innovation",
    tags: ["invention", "science", "innovation", "1900s", "1910s", "1920s", "black-firsts", "racism-against", "ohio", "safety"],
    desc: "Inventor of the three-position traffic signal and an early gas mask — and then companies stopped buying his mask when they found out a Black man made it."
  },
  {
    id: "mansa-musa",
    name: "Mansa Musa",
    url: "mansa-musa.html",
    quizDay: "2026-02-04",
    vol: "February 4 · African History & Wealth",
    dates: "c. 1280 — c. 1337",
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
    vol: "February 5 · Civil Rights Law",
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
    vol: "February 6 · Medicine & Science",
    dates: "1856 — 1931",
    category: "People",
    barClass: "",
    tags: ["medicine", "science", "invention", "chicago", "1890s", "black-firsts", "hospital", "racism-against", "infrastructure"],
    desc: "Performed the world's first documented successful open-heart surgery in 1893 — without anesthesia, antibiotics, or X-rays. The patient lived another 50 years."
  },
  {
    id: "tulsa-massacre",
    name: "Tulsa Race Massacre",
    url: "tulsa-massacre.html",
    quizDay: "2026-02-07",
    vol: "February 7 · Erasure & Violence",
    dates: "May 31 — June 1, 1921",
    category: "Events",
    barClass: "erasure",
    tags: ["violence", "erasure", "economics", "black-wealth", "1920s", "oklahoma", "cover-up", "reparations", "resistance", "greenwood"],
    desc: "The destruction of Black Wall Street in Greenwood, Tulsa — the most prosperous Black community in America, burned to the ground in one night."
  },
  {
    id: "cointelpro",
    name: "COINTELPRO",
    url: "cointelpro.html",
    quizDay: "2026-02-08",
    vol: "February 8 · Government & Resistance",
    dates: "1956 — 1971",
    category: "Systems",
    barClass: "systems",
    tags: ["government", "fbi", "surveillance", "resistance", "civil-rights", "1960s", "1970s", "black-panthers", "mlk", "cover-up", "policy"],
    desc: "The FBI's covert program to expose, disrupt, and destroy Black political organizations — confirmed by Senate investigation, not conspiracy theory."
  },
  {
    id: "rosewood-massacre",
    name: "The Rosewood Massacre",
    url: "rosewood-massacre.html",
    quizDay: "2026-02-09",
    vol: "February 9 · Erasure & Violence",
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
    vol: "February 10 · Military History",
    dates: "1941 — 1946",
    category: "People",
    barClass: "politics",
    tags: ["military", "world-war-ii", "1940s", "alabama", "aviation", "black-firsts", "segregation", "civil-rights", "resistance"],
    desc: "The all-Black fighter group that flew 15,000+ combat sorties and never lost a bomber to enemy aircraft — then came home to segregated diners."
  },
  {
    id: "the-blues",
    name: "The Blues",
    url: "the-blues.html",
    quizDay: "2026-02-11",
    vol: "February 11 · Music & Culture",
    dates: "Late 1800s — Present",
    category: "Culture",
    barClass: "culture",
    tags: ["music", "culture", "mississippi", "great-migration", "1900s", "1920s", "art", "expression", "influence", "appropriation"],
    desc: "The root of rock, jazz, R&B, hip-hop, and country — born in the Mississippi Delta from the field hollers and spirituals of enslaved people."
  },
  {
    id: "redlining",
    name: "Redlining",
    url: "redlining.html",
    quizDay: "2026-02-12",
    vol: "February 12 · Economic Policy",
    dates: "1930s — 1968",
    category: "Systems",
    barClass: "systems",
    tags: ["housing", "economics", "wealth", "policy", "1930s", "1940s", "1950s", "1960s", "segregation", "black-wealth", "government", "systemic-racism"],
    desc: "The federal government's policy of marking Black neighborhoods as 'hazardous' and using those maps to deny mortgages — engineering the racial wealth gap."
  },
  {
    id: "enslaved-labor",
    name: "Enslaved Labor & American Infrastructure",
    url: "enslaved-labor.html",
    quizDay: "2026-02-13",
    vol: "February 13 · Labor & Economics",
    dates: "1793 — 1865",
    category: "Systems",
    barClass: "erasure",
    tags: ["slavery", "labor", "economics", "1800s", "infrastructure", "erasure", "universities", "reparations", "systemic-racism"],
    desc: "The U.S. Capitol, the White House, Harvard, Yale, and Princeton — all built or funded by enslaved Black people who never saw a wage."
  },
  {
    id: "loving-v-virginia",
    name: "Loving v. Virginia",
    url: "loving-v-virginia.html",
    quizDay: "2026-02-14",
    vol: "February 14 · Civil Rights Law",
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
    vol: "February 15 · Language & Culture",
    dates: "Origins in slavery — Present",
    category: "Culture",
    barClass: "culture",
    tags: ["language", "culture", "slavery", "expression", "appropriation", "identity", "music", "ongoing"],
    desc: "African American Vernacular English is a fully systematic dialect — not broken English — and the source of words now used globally."
  },
  {
    id: "black-fashion",
    name: "Black Fashion & Cultural Appropriation",
    url: "black-fashion.html",
    quizDay: "2026-02-16",
    vol: "February 16 · Culture & Commerce",
    dates: "Ongoing",
    category: "Culture",
    barClass: "culture",
    tags: ["culture", "fashion", "appropriation", "identity", "ongoing", "economics", "expression"],
    desc: "Cornrows, hoop earrings, baggy clothes — mocked on Black people, criminalized, then repackaged and celebrated when adopted by others."
  },
  {
    id: "melvin-van-peebles",
    name: "Melvin Van Peebles",
    url: "melvin-van-peebles.html",
    quizDay: "2026-02-17",
    vol: "February 17 · Film & Arts",
    dates: "1932 — 2021",
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
    vol: "February 18 · Dance & Movement",
    dates: "Ongoing",
    category: "Culture",
    barClass: "culture",
    tags: ["dance", "culture", "appropriation", "expression", "music", "ongoing", "identity"],
    desc: "From New Orleans Bounce to the griddy to the running man — the origin stories of America's most viral dances trace back to Black communities that rarely got credit."
  },
  {
    id: "black-culinary-history",
    name: "Black Culinary History",
    url: "black-culinary-history.html",
    quizDay: "2026-02-19",
    vol: "February 19 · Food & Culture",
    dates: "Late 1800s — Present",
    category: "Culture",
    barClass: "culture",
    tags: ["food", "culture", "slavery", "expression", "1800s", "appropriation", "identity", "ongoing"],
    desc: "Soul food, Southern food, and Cajun cuisine all share the same roots — created by enslaved people who turned limited ingredients into the foundation of American cooking."
  },
  {
    id: "black-tech-pioneers",
    name: "Black Tech Pioneers",
    url: "black-tech-pioneers.html",
    quizDay: "2026-02-20",
    vol: "February 20 · Technology & Innovation",
    dates: "1969 — Present",
    category: "People",
    barClass: "innovation",
    tags: ["technology", "innovation", "science", "computing", "1960s", "1970s", "black-firsts", "erasure", "ongoing"],
    desc: "Clarence Ellis, Mark Dean, Katherine Johnson — the Black scientists and engineers whose work made modern computing possible, and whose names most people don't know."
  },
  {
    id: "sports-integration",
    name: "Sports Integration Beyond Jackie Robinson",
    url: "sports-integration.html",
    quizDay: "2026-02-21",
    vol: "February 21 · Sports History",
    dates: "1950s — 1960s",
    category: "Events",
    barClass: "politics",
    tags: ["sports", "civil-rights", "integration", "1950s", "1960s", "black-firsts", "segregation", "resistance"],
    desc: "Chuck Cooper, Althea Gibson, and the athletes who integrated every other American sport — at enormous personal cost the celebration usually skips over."
  },
  {
    id: "slave-patrols",
    name: "Slave Patrols & The Origins of American Policing",
    url: "slave-patrols.html",
    quizDay: "2026-02-22",
    vol: "February 22 · Law Enforcement & Justice",
    dates: "1704 — Present",
    category: "Systems",
    barClass: "systems",
    tags: ["policing", "slavery", "1700s", "1800s", "systemic-racism", "law", "ongoing", "government", "policy"],
    desc: "America's first formal police forces were slave patrols, created in 1704. After emancipation, many became local sheriffs enforcing Black Codes. Not reorganized — rebranded."
  },
  {
    id: "voting-rights",
    name: "Voting Rights & Suppression",
    url: "voting-rights.html",
    quizDay: "2026-02-23",
    vol: "February 23 · Democracy & Civil Rights",
    dates: "1870 — Present",
    category: "Systems",
    barClass: "systems",
    tags: ["voting", "democracy", "civil-rights", "1870s", "suppression", "policy", "law", "ongoing", "systemic-racism", "resistance"],
    desc: "The 15th Amendment gave Black men the vote in 1870. Within years: poll taxes, rigged literacy tests, grandfather clauses, and violence. The toolkit never disappeared."
  },
  {
    id: "education-inequality",
    name: "Education Inequality by Design",
    url: "education-inequality.html",
    quizDay: "2026-02-24",
    vol: "February 24 · Education & Policy",
    dates: "Ongoing",
    category: "Systems",
    barClass: "systems",
    tags: ["education", "policy", "systemic-racism", "housing", "economics", "ongoing", "government", "segregation"],
    desc: "There is no federal law requiring equal school funding. Schools are funded by property taxes. The ZIP code you're born into determines your educational opportunities."
  },
  {
    id: "13th-amendment",
    name: "Mass Incarceration & the 13th Amendment",
    url: "13th-amendment.html",
    quizDay: "2026-02-25",
    vol: "February 25 · Justice System",
    dates: "1865 — Present",
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
    vol: "February 26 · Environment & Public Health",
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
    vol: "February 27 · Current History",
    dates: "2013 — Present",
    category: "People",
    barClass: "politics",
    tags: ["civil-rights", "resistance", "2010s", "blm", "voting", "ongoing", "politics", "women", "black-firsts"],
    desc: "Alicia Garza, Patrisse Cullors, Opal Tometi, Bryan Stevenson, Stacey Abrams — the current leaders of a movement that is not a completed chapter."
  },
  {
    id: "mis-education",
    name: "The Mis-Education of the Negro",
    url: "mis-education.html",
    quizDay: "2026-02-28",
    vol: "February 28 · Education & Philosophy",
    dates: "1933 — Present",
    category: "Events",
    barClass: "",
    tags: ["education", "scholarship", "philosophy", "1930s", "erasure", "identity", "black-history", "foundations"],
    desc: "Carter G. Woodson's argument that the greatest enemy was a miseducation that taught Black people to see themselves through white eyes — and why Black History Month exists to correct it."
  },
  {
    id: "barack-obama",
    name: "Barack Obama",
    url: "encyclopedia/barack-obama.html",
    quizDay: "2026-02-29",
    vol: "February 29* · 44th & Forever",
    dates: "1961 — Present",
    category: "People",
    barClass: "politics",
    tags: ["politics", "presidency", "black-firsts", "2000s", "2010s", "civil-rights", "ongoing", "representation"],
    desc: "The 44th President of the United States and the first Black person to hold that office — elected November 4, 2008, serving two full terms."
  },

  // --- SECTION 5 (Days 22–28) ---
  {
    id: "black-press",
    name: "The Black Press & Media",
    url: "encyclopedia/black-press.html",
    quizDay: "2026-02-22",
    vol: "Vol. 1 · Feb 2026",
    dates: "1827 — Present",
    category: "Systems",
    barClass: "systems",
    tags: ["media", "civil-rights", "1800s", "1900s", "1920s", "1940s", "ongoing", "identity", "violence", "politics", "education", "culture"],
    desc: "Freedom's Journal to the Chicago Defender to Black Twitter — the Black press has always provided coverage, context, and community that mainstream media would not."
  },
  {
    id: "black-wall-street",
    name: "Black Wall Street",
    url: "encyclopedia/black-wall-street.html",
    quizDay: "2026-02-23",
    vol: "Vol. 1 · Feb 2026",
    dates: "Circa 1905 — Present",
    category: "Systems",
    barClass: "systems",
    tags: ["economics", "black-business", "violence", "erasure", "1920s", "legal", "ongoing", "segregation", "civil-rights", "community"],
    desc: "Greenwood District — 35 blocks, 600+ businesses, a hospital, a newspaper, a school system. Built in 20 years. Destroyed in one night. Rebuilt anyway."
  },
  {
    id: "harlem-renaissance",
    name: "The Harlem Renaissance",
    url: "encyclopedia/harlem-renaissance.html",
    quizDay: "2026-02-24",
    vol: "Vol. 1 · Feb 2026",
    dates: "Circa 1920 — 1935",
    category: "Events",
    barClass: "culture",
    tags: ["culture", "arts", "music", "1920s", "identity", "literature", "politics", "hip-hop", "migration", "education"],
    desc: "Between 1920 and 1935, Harlem became the capital of Black America — producing the most concentrated outpouring of Black art, music, and literature in history."
  },
  {
    id: "black-women-in-politics",
    name: "Black Women in Politics",
    url: "encyclopedia/black-women-in-politics.html",
    quizDay: "2026-02-25",
    vol: "Vol. 1 · Feb 2026",
    dates: "1868 — Present",
    category: "People",
    barClass: "politics",
    tags: ["politics", "civil-rights", "black-firsts", "1960s", "1970s", "ongoing", "representation", "voting", "identity", "legal"],
    desc: "Ida B. Wells, Fannie Lou Hamer, Shirley Chisholm, Carol Moseley Braun, Kamala Harris — Black women have built American democracy while being systematically excluded from governing it."
  },
  {
    id: "hbcus",
    name: "HBCUs",
    url: "encyclopedia/hbcus.html",
    quizDay: "2026-02-26",
    vol: "Vol. 1 · Feb 2026",
    dates: "1837 — Present",
    category: "Systems",
    barClass: "systems",
    tags: ["education", "black-firsts", "1800s", "civil-rights", "1960s", "ongoing", "economics", "community", "identity", "representation"],
    desc: "3% of colleges. 22% of Black college graduates. 27% of Black STEM graduates. HBCUs were built because every other institution refused Black students — and have outperformed ever since."
  },
  {
    id: "great-migration",
    name: "The Great Migration",
    url: "encyclopedia/great-migration.html",
    quizDay: "2026-02-27",
    vol: "Vol. 1 · Feb 2026",
    dates: "1916 — 1970",
    category: "Events",
    barClass: "politics",
    tags: ["migration", "civil-rights", "1920s", "1940s", "economics", "culture", "politics", "violence", "segregation", "community", "music"],
    desc: "Six million Black Americans left the rural South for Northern cities between 1916 and 1970 — fleeing terror, seeking opportunity, and transforming American culture in the process."
  },
  {
    id: "juneteenth",
    name: "Juneteenth",
    url: "encyclopedia/juneteenth.html",
    quizDay: "2026-02-28",
    vol: "Vol. 1 · Feb 2026",
    dates: "June 19, 1865 — Present",
    category: "Events",
    barClass: "politics",
    tags: ["civil-rights", "slavery", "legal", "1800s", "ongoing", "culture", "identity", "politics", "community", "celebration"],
    desc: "The Emancipation Proclamation was signed in 1863. The last enslaved Texans were told they were free on June 19, 1865 — two and a half years later. Black communities have celebrated that day ever since."
  },

];

// -----------------------------------------------------------------------
// getConnections(currentId, maxResults)
// Returns up to maxResults encyclopedia entries most related to currentId.
// Scoring: 1 point per shared tag. Ties broken by ENCYCLOPEDIA array order.
// The quiz link card is handled separately per-page. This is encyclopedia-only.
// -----------------------------------------------------------------------
function getConnections(currentId, maxResults) {
  maxResults = maxResults || 5;
  const current = ENCYCLOPEDIA.find(e => e.id === currentId);
  if (!current) return [];

  const scored = ENCYCLOPEDIA
    .filter(e => e.id !== currentId)
    .map(e => {
      const shared = e.tags.filter(t => current.tags.includes(t)).length;
      return { entry: e, score: shared };
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, maxResults).map(s => s.entry);
}
