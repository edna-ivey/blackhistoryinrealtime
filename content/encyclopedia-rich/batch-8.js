const RESEARCH_DATE = '2026-08-14';

const ENTRIES = [
  {
    encyclopediaSlug: 'education-inequality',
    outputPath: 'encyclopedia/education-inequality.html',
    fullDate: '2026-02-24',
    dailyDateLabel: 'February 24',
    subject: 'Education Inequality by Design',
    category: 'Education & Policy',
    type: 'Systems',
    dates: '1954 - present',
    tags: ['education', 'policy', 'housing', 'school-funding', 'segregation'],
    summary: `Education inequality in the United States is not only the afterlife of old segregation signs. It is built into maps, property values, school district boundaries, tax systems, court decisions, discipline policies, and the political habit of calling local control neutral. Brown v. Board said state-imposed segregation had no place in public education. It did not create a federal right to equal school funding, erase residential segregation, or stop communities with wealth from buying educational advantage through local property taxes. This page matters because the daily shorthand, ZIP code shapes opportunity, is true but not deep enough. The fuller story asks who drew the ZIP codes, who protected the tax base, and why children are still asked to overcome systems adults designed.`,
    timeline: [
      { date: 'May 17, 1954', event: 'The Supreme Court decides Brown v. Board of Education, rejecting legally segregated public schools.' },
      { date: 'May 31, 1955', event: 'Brown II orders desegregation with all deliberate speed, language that allows delay and resistance.' },
      { date: '1965', event: 'The Elementary and Secondary Education Act creates Title I aid for schools serving children from low-income families.' },
      { date: 'Mar 21, 1973', event: 'San Antonio Independent School District v. Rodriguez holds that education is not a fundamental right under the federal Constitution.' },
      { date: 'July 25, 1974', event: 'Milliken v. Bradley limits metropolitan desegregation remedies across district lines in the Detroit region.' },
      { date: '1980s-1990s', event: 'State school finance lawsuits challenge unequal funding with mixed results across state courts.' },
      { date: '2001', event: 'No Child Left Behind expands testing and accountability without equalizing school resources.' },
      { date: '2018', event: 'Education Trust reports that districts serving the most students of color receive about $1,800 less per student in state and local funds than districts serving the fewest students of color.' },
      { date: '2022', event: 'Education Law Center documents racialized underfunding in New Jersey under a state formula designed to measure adequacy.' },
      { date: 'Present', event: 'Funding, segregation, discipline, advanced coursework, teacher turnover, and facilities gaps continue to track race and wealth.' }
    ],
    fullStory: [
      `The simple version says American schools are unequal because neighborhoods are unequal. That sounds almost natural, as if school quality just follows geography the way weather follows season. The deeper story is more deliberate. Neighborhoods became unequal through public and private decisions: segregation laws, racially restrictive covenants, federal redlining, highway construction, mortgage discrimination, exclusionary zoning, white flight, and local boundary drawing. Then school systems used those unequal places as the base for funding, enrollment, transportation, and political power.`,
      `Brown v. Board of Education is the necessary starting point, but it is not the whole map. In 1954 the Supreme Court ruled that state-sanctioned school segregation violated the Fourteenth Amendment. The opinion named education as central to citizenship and said separate educational facilities were inherently unequal. That was a monumental legal victory. Black families, lawyers, teachers, students, and local communities had pushed the country to face what Jim Crow schooling did to children.`,
      `The victory came with limits. Brown attacked legal segregation, not every mechanism that produced unequal schools. Brown II, issued in 1955, told districts to desegregate with all deliberate speed. Many white officials heard the phrase as permission to delay. Some closed schools. Some transferred public money to private segregation academies. Some used assignment plans that placed the burden on Black families. Some obeyed in form while preserving inequality through housing patterns, district lines, and selective investment.`,
      `Funding remained a separate battlefield. Public education in the United States is funded through a mix of local, state, and federal money. Local revenue often depends heavily on property taxes. Property wealth is not evenly distributed, and it has never been race-neutral. A district with high-value homes and commercial property can raise large sums with a lower tax rate. A district with a suppressed tax base may tax itself harder and still bring in less. That is why the language of local control can hide a brutal fact: some communities are given more control because they already have more wealth to control.`,
      `The Supreme Court narrowed the federal route for challenging that arrangement in San Antonio Independent School District v. Rodriguez in 1973. Families in the Edgewood district in Texas argued that a property-tax-based finance system created severe spending disparities. The Court ruled 5 to 4 that education is not a fundamental right under the federal Constitution and that the Texas system did not require strict scrutiny. Justice Thurgood Marshall dissented, warning that the majority was treating a central democratic need as if it were ordinary fiscal policy. After Rodriguez, many school funding fights moved to state constitutions and state courts.`,
      `Another door narrowed the next year. In Milliken v. Bradley, the Court rejected a metropolitan desegregation plan that would have included many Detroit-area suburban districts unless a constitutional violation could be shown in each district. The result mattered beyond Detroit. When white families and resources had already moved across district lines, limiting remedies to single districts often meant trying to integrate inside boundaries already shaped by segregation. The law could name discrimination and still leave much of the machinery intact.`,
      `Federal programs have tried to soften the inequity without fully undoing it. Title I, created through the Elementary and Secondary Education Act of 1965, sends additional aid to schools serving children from low-income families. That aid matters. It pays for teachers, materials, interventions, and services. But supplemental funding is not the same as structural equality. If local and state systems keep producing gaps, federal aid can become a patch over a design flaw.`,
      `Modern research keeps showing the pattern. Education Trust reported in 2018 that districts serving the highest concentrations of Black, Latino, or American Indian students received roughly $1,800 less per student in state and local revenue than districts serving the fewest students of color. Education Law Center's state-level work shows how adequacy formulas, state aid shortfalls, local revenue limits, and racial segregation can combine to leave Black and Latino students underfunded even where the law promises a thorough education. The exact numbers vary by state and year, but the pattern is familiar: need rises, wealth falls, and children are told to make up the difference with grit.`,
      `Money is not the only measure. Unequal schooling also appears in buildings with lead or failing ventilation, fewer counselors, fewer experienced teachers, fewer advanced classes, harsher discipline, longer commutes, less arts instruction, and schools closed or reorganized without community control. These are educational facts, but they are also civic messages. Children learn what adults believe they are worth long before anyone gives them a test score.`,
      `Education inequality by design does not mean every person inside the system intends harm. Many teachers, principals, parents, and students fight daily for children inside under-resourced schools. The phrase means the system's results are not random. When the same communities are repeatedly asked to do more with less, year after year, the design has announced itself.`
    ],
    quote: {
      text: `made available to all on equal terms`,
      cite: 'Brown v. Board of Education, U.S. Supreme Court'
    },
    costImpact: [
      `The cost is paid by children first: crowded classrooms, fewer course options, unstable staffing, school buildings that communicate neglect, and discipline systems that treat Black childhood as a problem to manage. Families pay too, spending time and money navigating transfers, fighting for services, fundraising for basics, or moving when they can afford to move.`,
      `The impact reaches beyond school walls. Unequal education shapes college access, wages, health, civic participation, neighborhood stability, and incarceration risk. It also distorts public debate by making achievement gaps look like student failure when many are resource gaps with test scores attached.`
    ],
    whyItMattersToday: [
      `Education inequality matters today because the country still praises education as the great equalizer while accepting school systems that begin from unequal ground. Brown changed constitutional law, but it did not end the policy choices that make opportunity depend on property wealth.`,
      `The popular version often asks why students in underfunded schools do not perform like students in wealthy districts. The better question is why the public keeps comparing children without comparing the resources wrapped around them. A fair analysis has to include tax base, curriculum, facilities, teacher stability, family wealth, neighborhood history, and the power to draw district borders.`,
      `A reader should leave this page understanding that school inequality is not a sad accident. It is a civic decision repeated through budgets, maps, court rulings, and silence. Once that is clear, reform cannot stop at inspiration. It has to reach the machinery.`
    ],
    connected: [
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'The landmark decision that ended legal school segregation but left many equality questions unresolved.' },
      { href: '@root/generated/pages/brown-v-board-plaintiffs.html', title: 'Brown v. Board Plaintiffs', description: 'Centers the families and local cases behind the famous Supreme Court name.' },
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'Shows the human cost of desegregation when policy was carried by children.' },
      { href: '@root/encyclopedia/septima-clark.html', title: 'Septima Clark', description: 'Connects schooling to citizenship education, adult literacy, and movement power.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Brown v. Board of Education', url: 'https://www.archives.gov/milestone-documents/brown-v-board-of-education' },
      { source: 'Oyez', title: 'San Antonio Independent School District v. Rodriguez', url: 'https://www.oyez.org/cases/1972/71-1332' },
      { source: 'Oyez', title: 'Milliken v. Bradley', url: 'https://www.oyez.org/cases/1973/73-434' },
      { source: 'Education Trust', title: 'Funding Gaps 2018', url: 'https://edtrust.org/press-room/nations-history-shortchanging-students-color-low-income-students-continues/' },
      { source: 'Education Law Center', title: 'The Color of Opportunity', url: 'https://edlawcenter.org/research/the-color-of-opportunity/' }
    ],
    research: {
      status: 'batch-8-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/milestone-documents/brown-v-board-of-education', 'https://www.oyez.org/cases/1972/71-1332', 'https://www.oyez.org/cases/1973/73-434'],
      supportingSources: ['https://edtrust.org/press-room/nations-history-shortchanging-students-color-low-income-students-continues/', 'https://edlawcenter.org/research/the-color-of-opportunity/'],
      verifiedQuoteSource: 'National Archives transcript of Brown v. Board of Education opinion.',
      sensitiveClaimsReviewed: 'Federal right to education claim, property-tax funding relationship, Brown and Brown II limits, Rodriguez holding, Milliken metropolitan remedy limits, and school-funding gap statistics reviewed.',
      materialCorrections: 'Removed an unsourced invented-style pull quote and replaced the legacy page with a sourced rich entry, explicit legal chronology, real internal connections, and verified external links.',
      finalStatus: 'Batch 8 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified Supreme Court quotation, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'edward-brooke',
    fullDate: '2026-08-14',
    dailyDateLabel: 'August 14',
    subject: 'Edward Brooke',
    category: 'Politics',
    type: 'People',
    dates: '1919 - 2015',
    tags: ['politics', 'government', 'civil-rights', 'law'],
    summary: `Edward Brooke's story complicates the neat party maps people use to explain Black politics. In 1966, Massachusetts elected him to the United States Senate, making him the first Black senator chosen by popular vote and the first Black senator since Reconstruction. He was a Republican, a World War II veteran, a former Massachusetts attorney general, and the only Black senator serving during some of the civil rights era's hardest national arguments. Brooke mattered because he entered a chamber built for white power and used a moderate, often bipartisan style to press for fair housing, ethics, consumer protection, transit, and voting rights. His career shows both the reach and the limits of being a historic first inside an institution that changes slowly.`,
    timeline: [
      { date: 'Oct 26, 1919', event: 'Born in Washington, D.C.' },
      { date: '1941', event: 'Graduates from Howard University and enters the U.S. Army during World War II.' },
      { date: '1948', event: 'Earns a law degree from Boston University.' },
      { date: '1950', event: 'Begins running for office in Massachusetts after opening a law practice in Roxbury.' },
      { date: '1961', event: 'Becomes chair of the Boston Finance Commission.' },
      { date: '1962', event: 'Elected Massachusetts attorney general, the first African American elected to that office.' },
      { date: 'Nov 8, 1966', event: 'Wins election to the U.S. Senate from Massachusetts.' },
      { date: '1968', event: 'Coauthors fair-housing legislation with Senator Walter Mondale during debate over the Civil Rights Act of 1968.' },
      { date: '1972', event: 'Wins reelection to a second Senate term.' },
      { date: '1978', event: 'Loses a reelection campaign shaped in part by divorce proceedings and ethics scrutiny.' },
      { date: '2004', event: 'Receives the Presidential Medal of Freedom.' },
      { date: 'Jan 3, 2015', event: 'Dies in Florida and is later buried at Arlington National Cemetery.' }
    ],
    fullStory: [
      `Edward Brooke was born into segregated Washington, D.C., not into political inevitability. He attended Dunbar High School, one of the nation's strongest Black public high schools, then Howard University. When the United States entered World War II, Brooke served in the segregated 366th Infantry Regiment. The contradiction was immediate: Black soldiers were asked to fight fascism abroad while the Army and much of the country treated them as second-class citizens.`,
      `Brooke's Army experience shaped his legal mind. He defended Black enlisted men in court-martial proceedings even before he had formal legal training. After the war he went to Boston University Law School, earned law degrees, and opened a practice in Roxbury. He did not rise through a machine built for Black candidates. Massachusetts politics was overwhelmingly white, and the Republican Party he joined had room for moderate reform politics but also required him to appeal across racial and ideological lines.`,
      `His early campaigns failed. That matters because the historic Senate victory can make Brooke look inevitable. He ran for the Massachusetts legislature and lost. He ran for secretary of state in 1960 and lost narrowly in a campaign where race was impossible to miss, including a white opponent named Kevin White. Governor John Volpe then appointed Brooke to lead the Boston Finance Commission, a municipal watchdog body. Brooke used the post to investigate corruption and build a statewide reputation for competence.`,
      `In 1962 he was elected Massachusetts attorney general. The House history office identifies him as the first African American elected as a state's attorney general. He built a public image around clean government, civil rights, and independence. He was not the movement's street organizer, and he sometimes criticized what he called militancy. That made him acceptable to many white voters, but it also placed him in tension with activists who believed pressure, disruption, and grassroots organizing were necessary because polite appeals had failed for generations.`,
      `In 1966 Brooke ran for the U.S. Senate seat being vacated by Leverett Saltonstall. He defeated former governor Endicott Peabody and entered the Senate in January 1967. His election was nationally significant. Hiram Revels and Blanche K. Bruce had served during Reconstruction, but Brooke was the first Black senator elected by popular vote after the Seventeenth Amendment changed Senate elections. He was also the Senate's only Black member during years when Congress debated housing, poverty, war, voting, policing, and the meaning of civil rights after landmark legislation.`,
      `Brooke's most important legislative work included fair housing. He joined Senator Walter Mondale in pushing what became the Fair Housing Act provisions of the Civil Rights Act of 1968. Housing discrimination was not a side issue. It shaped wealth, schooling, health, safety, and political power. The legislation faced strong opposition and compromise. The final law did not end housing discrimination, but it created a federal tool against discrimination in sale, rental, and financing.`,
      `Brooke also worked on consumer protection, minimum wage, mass transit, low-income housing, and government ethics. He was a liberal to moderate Republican in an era before the party realignment hardened into the maps many readers know now. That position gave him room to work across party lines, but it also left him politically exposed as national politics changed. He supported civil rights while distrusting some forms of expansive government. He criticized President Nixon before many Republicans did, and he called for Nixon's resignation during Watergate.`,
      `His career did not end cleanly. Brooke's divorce from Remigia Ferrari-Scacco became public and painful. Allegations about financial disclosures and statements during the proceedings fed ethics scrutiny. The Senate Ethics Committee found issues that damaged him politically even as the judgment was not the sort of grand corruption scandal that sometimes fills political memory. In 1978 he lost to Paul Tsongas.`,
      `Brooke's life after the Senate included law practice, public service, honors, and the long afterlife of being a bridge figure. He received the Presidential Medal of Freedom in 2004 and the Congressional Gold Medal in 2008. His story should not be reduced to the first line in a trivia answer. Brooke shows how Black political power has moved through different parties, regions, temperaments, and strategies. He also shows the pressure placed on a single Black official to represent millions of people inside institutions still built around white assumptions.`
    ],
    quote: {
      text: `unite men who have not been united before`,
      cite: 'Edward Brooke, quoted by the House History office'
    },
    costImpact: [
      `Brooke paid the cost of isolation in a national institution where he was often treated as a symbol before he was treated as a senator. He had to answer white voters' comfort, civil rights activists' urgency, party expectations, and national curiosity all at once. That is a heavy load for one officeholder.`,
      `His impact was real but not magical. The Fair Housing Act gave federal law a new way to challenge discrimination, yet enforcement remained uneven and housing segregation persisted. Brooke's career widened the public imagination of Black elected leadership, but it also showed that representation inside the Senate does not automatically redistribute power outside it.`
    ],
    whyItMattersToday: [
      `Brooke matters today because Black political history is broader than one party label. His career sits in a world before today's partisan alignment was fully settled, when Black voters, Black candidates, and civil rights issues moved through complicated coalitions.`,
      `He also matters because fair housing remains unfinished work. School access, wealth gaps, transit, neighborhood health, and policing are all tied to where people are allowed to live and what public systems follow them there. Brooke understood housing as civil rights infrastructure.`,
      `A reader should leave Brooke's page with a more flexible understanding of power. Firsts open doors, but they do not remove the walls. Brooke used the door he opened, and the institution still asked him to carry more meaning than one person should have to carry.`
    ],
    connected: [
      { href: '@root/generated/pages/voting-rights-act.html', title: 'Voting Rights Act', description: `Places Brooke's Senate election in the national expansion and contest over Black political rights.` },
      { href: '@root/generated/pages/carl-stokes.html', title: 'Carl Stokes', description: 'Another 1960s breakthrough in Black electoral leadership and urban governance.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Expands the story of representation beyond Senate firsts and party labels.' },
      { href: '@root/encyclopedia/barack-obama.html', title: 'Barack Obama', description: 'Connects Brooke to later national Black electoral milestones.' }
    ],
    externalLinks: [
      { source: 'U.S. Senate Historical Office', title: 'Edward Brooke: Featured Biography', url: 'https://www.senate.gov/senators/FeaturedBios/Featured_Bio_Brooke.htm' },
      { source: 'House History, Art & Archives', title: 'Edward William Brooke III', url: 'https://history.house.gov/People/Detail?id=9905' },
      { source: 'U.S. Senate Historical Office', title: 'Edward Brooke of Massachusetts: The Bridge Builder', url: 'https://www.senate.gov/artandhistory/senate-stories/edward-brooke-of-massachusetts-the-bridge-builder.htm' },
      { source: 'HUD Archives', title: 'Brooke-Mondale Auditorium Dedication Remarks', url: 'https://archives.hud.gov/remarks/preston/speeches/2008-09-23.cfm' }
    ],
    research: {
      status: 'batch-8-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.senate.gov/senators/FeaturedBios/Featured_Bio_Brooke.htm', 'https://history.house.gov/People/Detail?id=9905'],
      supportingSources: ['https://www.senate.gov/artandhistory/senate-stories/edward-brooke-of-massachusetts-the-bridge-builder.htm', 'https://archives.hud.gov/remarks/preston/speeches/2008-09-23.cfm'],
      verifiedQuoteSource: 'House History, Art & Archives extended biography quoting Brooke after his 1966 Senate victory.',
      sensitiveClaimsReviewed: 'First popular-election claim, first Black senator since Reconstruction, party alignment, Fair Housing Act coauthorship, divorce/ethics scrutiny, and honors reviewed.',
      materialCorrections: 'Expanded scheduled fallback from a three-sentence milestone note into a fuller political biography with war service, Massachusetts politics, fair housing, party context, and limits of firsts.',
      finalStatus: 'Batch 8 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, verified quotation, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'elijah-mccoy',
    fullDate: '2026-05-02',
    dailyDateLabel: 'May 2',
    subject: 'Elijah McCoy',
    category: 'Innovation',
    type: 'People',
    dates: '1844 - 1929',
    tags: ['invention', 'railroads', 'engineering', 'patents', 'technology'],
    summary: `Elijah McCoy is often introduced through one phrase: the real McCoy. The phrase is memorable, but it can flatten the man. McCoy was born in Canada to parents who had escaped slavery, trained in mechanical engineering in Scotland, returned to the United States, and found that racism could shrink a trained engineer into railroad work below his qualifications. From that position, he designed lubrication systems that helped steam engines run longer without stopping. The stronger story is not just that he invented something useful. It is that Black technical skill kept building modern industry even when industry refused to hire Black engineers as engineers. His page also handles the famous phrase carefully, because its origin is widely repeated but disputed.`,
    timeline: [
      { date: 'May 2, 1844', event: 'Born in Colchester, Ontario, Canada, to George and Mildred McCoy.' },
      { date: 'Late 1840s', event: 'The McCoy family moves to Michigan after living in Canada following escape from slavery.' },
      { date: 'c. 1859', event: 'Sent to Scotland as a teenager for mechanical training, according to institutional biographies.' },
      { date: '1860s', event: 'Returns to Michigan and is unable to secure engineering work because of racial discrimination.' },
      { date: '1872', event: 'Receives U.S. Patent No. 129,843 for an improvement in lubricators for steam engines.' },
      { date: '1870s-1890s', event: 'Continues improving lubricators and related mechanical devices for railroads and industry.' },
      { date: '1892', event: 'Receives Patent No. 470,163 for another lubricator improvement.' },
      { date: '1916', event: 'Receives a patent for a graphite lubricator suited to newer superheated machinery.' },
      { date: '1920', event: 'Forms the Elijah McCoy Manufacturing Company.' },
      { date: '1922', event: 'A car accident kills his wife Mary and leaves McCoy seriously injured.' },
      { date: 'Oct 10, 1929', event: 'Dies in the Detroit area.' },
      { date: '2012', event: 'The USPTO opens its Detroit regional office named for Elijah J. McCoy.' }
    ],
    fullStory: [
      `Elijah McCoy's life sits at the intersection of freedom, machinery, and exclusion. His parents, George and Mildred McCoy, had escaped slavery in Kentucky and made their way to Canada. Elijah was born in Colchester, Ontario, in 1844. Freedom in Canada did not mean easy security, but it gave the family room to imagine a child's future beyond enslavement. When the family later settled in Ypsilanti, Michigan, McCoy grew up close to tools, engines, and the industrial world that was remaking the nineteenth century.`,
      `Institutional biographies from the National Park Service and National Inventors Hall of Fame describe McCoy being sent to Scotland as a teenager for mechanical training. That detail matters because it shows the scale of his family's ambition. They were not simply hoping he would find work. They invested in an advanced technical education for a Black son in a century when the United States routinely denied Black people formal engineering opportunities.`,
      `When McCoy returned to Michigan, the credential did not protect him from racism. He could not get hired as a mechanical engineer. Instead, he worked for the Michigan Central Railroad as a fireman and oilman. The job was hot, hard, and dangerous. Firemen shoveled coal and helped keep locomotives running. Oilmen lubricated moving parts that generated heat and friction. Steam engines needed constant care, and stopping machinery for lubrication cost time and money.`,
      `McCoy's engineering mind went to work on the problem his job put directly in front of him. In 1872 he received U.S. Patent No. 129,843 for an improvement in lubricators for steam engines. The device allowed oil to feed into engine parts while the machinery was running. It was not glamorous in the way people often imagine invention. It was practical, mechanical, and deeply consequential. A good lubricator meant fewer stops, less overheating, smoother motion, and more efficient rail travel and industrial production.`,
      `The patent record shows McCoy thinking about flow, pressure, valves, and regulation. He kept refining the problem across decades. He received patents for additional lubricators, including devices suited to heavier oils and later machinery. National Park Service accounts note that he held more than 57 patents over his lifetime, most connected to lubrication and mechanical systems, with some domestic inventions as well. The number matters, but the pattern matters more. McCoy was not a one-patent wonder. He was a working inventor who kept returning to friction, pressure, reliability, and use.`,
      `The phrase "the real McCoy" follows him everywhere. Many institutional biographies say railroad buyers wanted McCoy's lubricator rather than inferior copies, giving rise to the expression. But phrase historians have raised serious doubts because similar expressions, including "the real MacKay," appear in print before McCoy's invention became famous. The responsible version is careful: McCoy's device was widely imitated, and the phrase became attached to his reputation, but the phrase's origin is disputed. The legend should not be the only reason people remember him.`,
      `McCoy's career also reveals how invention and ownership were not the same thing. Black inventors often needed partners, manufacturers, or assignees to turn patents into products. That could spread an invention, but it could also limit wealth and control. McCoy's work became valuable to railroads and industry, yet he did not become rich in proportion to the usefulness of his ideas. The economy benefited from his precision while racism narrowed his access to capital, employment, and recognition.`,
      `In 1920 McCoy formed the Elijah McCoy Manufacturing Company, a late-career attempt to produce and sell devices under his own name. Two years later, he and his wife Mary were in a serious automobile accident. Mary died, and McCoy was badly injured. He never fully recovered and died in 1929.`,
      `Remembering McCoy well means looking past the souvenir version. He was not simply a name behind an idiom. He was a trained engineer denied engineering work, a railroad worker who transformed a problem from inside the system, and a Black inventor whose technical imagination made modern motion more reliable. His life asks readers to notice the Black expertise built into infrastructure people often treat as anonymous.`
    ],
    quote: {
      text: `the flow of oil may be readily regulated`,
      cite: 'Elijah McCoy, U.S. Patent No. 129,843'
    },
    costImpact: [
      `McCoy paid the cost of racial exclusion from the professional engineering work for which he had trained. That meant beginning in railroad labor that was harder, more dangerous, and less prestigious than the jobs his skill deserved. He also worked inside a patent and manufacturing economy where useful inventions did not guarantee wealth or control for Black inventors.`,
      `His impact moved through railroads, ships, factories, and later patent culture. Lubrication sounds small until a machine seizes, overheats, stops, or fails. McCoy's work helped reduce that failure. The USPTO's Detroit regional office bearing his name is a public acknowledgment that Black invention has long belonged at the center of American technology.`
    ],
    whyItMattersToday: [
      `McCoy matters today because technology history still loves lone-genius myths while overlooking labor, maintenance, and exclusion. His invention came from intimate knowledge of a machine's daily needs. That kind of knowledge often lives with workers, not only executives or laboratories.`,
      `His page also teaches caution. Celebrating him through "the real McCoy" can be joyful, but responsible history has to say when a claim is disputed. The phrase may or may not have begun with him. His importance does not depend on settling that legend in his favor.`,
      `A reader should leave McCoy understanding that Black innovation is not only spectacular breakthrough. Sometimes it is the disciplined removal of friction from a system that everyone else depends on.`
    ],
    connected: [
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Places McCoy within a longer history of Black engineering and invention.' },
      { href: '@root/encyclopedia/garrett-morgan.html', title: 'Garrett Morgan', description: 'Another inventor whose safety devices entered public life while racism limited recognition.' },
      { href: '@root/generated/pages/annie-easley.html', title: 'Annie Easley', description: 'Connects mechanical innovation to later computing, energy, and aerospace work.' },
      { href: '@root/encyclopedia/shirley-ann-jackson.html', title: 'Dr. Shirley Ann Jackson', description: 'Links nineteenth-century invention to twentieth-century physics and technology leadership.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Elijah McCoy: Inventor of The Real McCoy', url: 'https://www.nps.gov/articles/000/elijah-mccoy-inventor-of-the-real-mccoy.htm' },
      { source: 'Google Patents', title: 'U.S. Patent No. 129,843: Improvement in Lubricators for Steam-Engines', url: 'https://patents.google.com/patent/US129843A/en' },
      { source: 'National Inventors Hall of Fame', title: 'Elijah McCoy', url: 'https://www.invent.org/inductees/elijah-mccoy' },
      { source: 'USPTO', title: 'Elijah J. McCoy Midwest Regional Office', url: 'https://www.uspto.gov/about-us/news-updates/derris-banks-appointed-regional-director-usptos-elijah-j-mccoy-midwest' }
    ],
    research: {
      status: 'batch-8-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://patents.google.com/patent/US129843A/en', 'https://www.nps.gov/articles/000/elijah-mccoy-inventor-of-the-real-mccoy.htm'],
      supportingSources: ['https://www.invent.org/inductees/elijah-mccoy', 'https://www.uspto.gov/about-us/news-updates/derris-banks-appointed-regional-director-usptos-elijah-j-mccoy-midwest'],
      verifiedQuoteSource: 'U.S. Patent No. 129,843 text hosted by Google Patents.',
      sensitiveClaimsReviewed: 'Parent escape from slavery, Scotland training, railroad job discrimination, first patent date and number, patent count, 1922 accident, 2012 USPTO office naming, and disputed "real McCoy" phrase origin reviewed.',
      materialCorrections: 'Reframed "real McCoy" attribution as disputed rather than certain, and expanded invention story beyond phrase lore into engineering, labor, patents, and exclusion.',
      finalStatus: 'Batch 8 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, verified patent quotation, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'elizabeth-keckley',
    fullDate: '2026-08-03',
    dailyDateLabel: 'August 3',
    subject: 'Elizabeth Keckley',
    category: 'Fashion',
    type: 'People',
    dates: '1818 - 1907',
    tags: ['women', 'fashion', 'enslavement', 'civil-war', 'labor'],
    summary: `Elizabeth Keckley bought freedom with skilled labor, then used that labor to enter rooms where national power was being dressed, mourned, and remembered. Born enslaved in Virginia, she became a celebrated dressmaker, purchased freedom for herself and her son, built a Washington business serving elite women, became Mary Todd Lincoln's modiste and confidante, organized relief for formerly enslaved people, and published Behind the Scenes in 1868. The easy version calls her Mrs. Lincoln's dressmaker. The fuller story is sharper: Keckley turned sewing into money, testimony, philanthropy, and authorship, then paid heavily when white society decided that a Black woman's memory of the White House was too intimate for print.`,
    timeline: [
      { date: 'Feb 1818', event: 'Born enslaved in Dinwiddie County, Virginia.' },
      { date: '1840s', event: 'Is taken to St. Louis, where her sewing labor supports the household that enslaves her.' },
      { date: '1850', event: 'Marries James Keckley, a marriage she later describes as burdensome.' },
      { date: '1855', event: 'Purchases freedom for herself and her son after raising $1,200, which she insists on repaying as a loan.' },
      { date: '1860', event: 'Moves to Washington, D.C., and builds an elite dressmaking clientele.' },
      { date: '1861', event: `Becomes Mary Todd Lincoln's personal dressmaker and close companion.` },
      { date: '1862', event: 'Helps organize relief work for formerly enslaved people arriving in Washington.' },
      { date: 'Apr 1865', event: `Supports Mary Lincoln after Abraham Lincoln's assassination.` },
      { date: '1868', event: 'Publishes Behind the Scenes, or, Thirty Years a Slave, and Four Years in the White House.' },
      { date: '1892', event: 'Accepts a teaching role at Wilberforce University.' },
      { date: 'May 1907', event: 'Dies in Washington, D.C., after living in the National Home for Destitute Colored Women and Children.' }
    ],
    fullStory: [
      `Elizabeth Keckley understood clothing as more than fabric. In the world she inhabited, a gown could signal class, taste, mourning, ambition, politics, and access. For a Black woman born enslaved in Virginia in 1818, mastering that language became a route to survival and power. Her needle did not free her by itself. Her skill, networks, persistence, patrons, and refusal to accept dependency all mattered.`,
      `Keckley learned to sew from her mother while enslaved. Her labor was valuable long before it was free. When the family that enslaved her moved to St. Louis, Keckley was hired out as a seamstress. Smithsonian accounts describe how her wages helped sustain the household that claimed ownership over her. That fact should stop the reader. The same skill that would later make her respected first enriched people who denied her freedom.`,
      `Keckley negotiated to purchase freedom for herself and her son George. The price was $1,200, a staggering sum. Patrons helped raise it, but Keckley later insisted on treating the money as a loan and repaying it. That insistence was not merely pride. It was a claim to moral and economic independence in a world that had treated her labor as property. In 1855 she became free.`,
      `She moved to Washington, D.C., in 1860. The capital was tense, elite, segregated, and full of women whose public lives depended on clothes. Keckley built a business among socially prominent clients, including Varina Davis before Davis became first lady of the Confederacy. That detail captures the strange geography of her work. Her skill moved through households divided by the coming war, but she was not politically blank. She understood slavery from inside it.`,
      `In 1861 Mary Todd Lincoln hired Keckley as her personal dressmaker. Keckley became modiste, dresser, companion, and confidante. Smithsonian curators note that surviving garments can be difficult to attribute because nineteenth-century clothing often lacked labels and was altered over time, but several objects are linked to Keckley or her shop. The point is not only whether every gown can be proven stitch by stitch. It is that Keckley's business occupied a rare position: a Black woman entrepreneur shaping the public image of the first lady during the Civil War.`,
      `Keckley also organized relief for formerly enslaved people arriving in Washington. The Civil War turned the capital into a place of refuge and crisis. People fleeing slavery needed food, clothing, shelter, medical care, and work. Keckley helped found what became the Contraband Relief Association, later known as the Ladies' Freedmen and Soldier's Relief Association. She used elite networks and Black community networks to gather support. Her memoir records donations from Black communities in the North, evidence that freedom work was carried by ordinary people as well as famous reformers.`,
      `The relationship with Mary Lincoln was close and unequal. Keckley was present during grief after Willie Lincoln's death and after Abraham Lincoln's assassination. She saw the private cost of public life. But closeness across race and class did not mean equality. Mary Lincoln could rely on Keckley emotionally and still inhabit a society that punished Keckley for speaking.`,
      `In 1868 Keckley published Behind the Scenes, or, Thirty Years a Slave, and Four Years in the White House. The book defended Mary Lincoln against public ridicule over her finances and conduct, but it also revealed letters and intimate details. Many white readers treated the publication as a betrayal. Mary Lincoln broke with Keckley. Washington elites pulled away. Her business suffered. The reaction tells us what Keckley had violated: not simply privacy, but the expectation that a Black woman could serve history without authoring it.`,
      `The memoir remains invaluable. It documents enslavement, sexual violence, motherhood, labor, self-purchase, elite Washington, wartime relief work, and the emotional world around the Lincoln White House. It also requires careful reading. Keckley wrote for a public, with purposes and pressures. Like all memoirists, she shaped memory. That does not weaken the source. It makes it human.`,
      `Keckley later taught sewing and domestic science at Wilberforce University. In her final years she lived in the National Home for Destitute Colored Women and Children, an institution connected to the relief world she had once helped build. That ending is painful. A woman who had clothed power, supported refugees, and preserved history died with limited resources. Her page matters because it shows how Black women's labor can be central to a nation and still be treated as disposable once it stops serving someone else's story.`
    ],
    quote: {
      text: `With my needle I kept bread in the mouths of seventeen persons`,
      cite: 'Elizabeth Keckley, Behind the Scenes'
    },
    costImpact: [
      `Keckley paid twice for the same gift. Under slavery, her sewing enriched others. After freedom, her memoir cost her clients, reputation, and Mary Lincoln's friendship. The public wanted her skill, discretion, and emotional labor, but resisted her right to interpret what she had seen.`,
      `Her impact is larger than fashion. She left one of the most important Black women's memoirs of the Civil War era, built a business that employed other women, aided formerly enslaved refugees, and forced historians to look at the White House from the position of a woman who had been enslaved and was not content to remain invisible.`
    ],
    whyItMattersToday: [
      `Keckley matters today because labor history, fashion history, political history, and literary history meet in her life. She reminds readers that clothing is not superficial when it determines who is seen as respectable, powerful, mournful, or fit for public life.`,
      `Her story also asks who is allowed to write from proximity to power. White society treated her memoir as a violation because it exposed that a Black woman had been watching, understanding, and remembering. That anxiety still matters whenever workers, assistants, caregivers, stylists, domestic workers, or staff tell the truth about institutions that prefer them silent.`,
      `A reader should leave Keckley understanding that the needle was not small. In her hands it became income, access, relief work, art, and evidence.`
    ],
    connected: [
      { href: '@root/generated/pages/ann-lowe.html', title: 'Ann Lowe', description: 'Another Black designer whose elite clients benefited from under-credited labor.' },
      { href: '@root/encyclopedia/black-fashion.html', title: 'Black Fashion & Cultural Appropriation', description: `Places Keckley's dressmaking inside a longer history of Black style, labor, and credit.` },
      { href: '@root/generated/pages/edmonia-lewis.html', title: 'Edmonia Lewis', description: 'Connects Civil War era Black women artists navigating white patronage and public reputation.' },
      { href: '@root/encyclopedia/harriet-tubman.html', title: 'Harriet Tubman', description: `Links Keckley's life to Black women's freedom work during and after slavery.` }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Elizabeth Keckly', url: 'https://home.nps.gov/foth/learn/historyculture/elizabeth-keckly.htm' },
      { source: 'Documenting the American South', title: 'Behind the Scenes by Elizabeth Keckley', url: 'https://docsouth.unc.edu/neh/keckley/keckley.html' },
      { source: 'National Museum of American History', title: 'Elizabeth Keckly: Businesswoman and Philanthropist', url: 'https://americanhistory.si.edu/explore/stories/elizabeth-keckly-businesswoman-and-philanthropist' },
      { source: 'Smithsonian Institution', title: `Mary Lincoln's Dress`, url: 'https://www.si.edu/object/mary-lincolns-dress%3Anmah_515922' }
    ],
    research: {
      status: 'batch-8-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://docsouth.unc.edu/neh/keckley/keckley.html', 'https://home.nps.gov/foth/learn/historyculture/elizabeth-keckly.htm'],
      supportingSources: ['https://americanhistory.si.edu/explore/stories/elizabeth-keckly-businesswoman-and-philanthropist', 'https://www.si.edu/object/mary-lincolns-dress%3Anmah_515922'],
      verifiedQuoteSource: 'Public-domain text of Behind the Scenes hosted by Documenting the American South.',
      sensitiveClaimsReviewed: 'Enslavement, self-purchase amount, son George, Mary Lincoln relationship, disputed garment attribution, memoir backlash, relief association work, and final years reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a fuller account of slavery, skilled labor, self-purchase, business, relief work, authorship, backlash, and archival value.',
      finalStatus: 'Batch 8 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, verified memoir quotation, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'ella-baker',
    fullDate: '2026-08-07',
    dailyDateLabel: 'August 7',
    subject: 'Ella Baker',
    category: 'Education',
    type: 'People',
    dates: '1903 - 1986',
    tags: ['civil-rights', 'women', 'organizing', 'sncc', 'leadership'],
    summary: `Ella Baker did not build movements around applause. She built them around people learning to trust their own power. Born in Norfolk and raised in North Carolina, Baker worked through cooperatives, journalism, the NAACP, SCLC, and SNCC, leaving a deep imprint on the Black freedom struggle without chasing the spotlight. The famous line, strong people don't need strong leaders, is not a slogan for leaderlessness. It is a theory of democracy: ordinary people should not have to wait for a charismatic figure to act. Baker matters because she helps readers see organizing as craft, patience, listening, argument, travel, minutes, meetings, and the slow transfer of confidence from famous names to local people.`,
    timeline: [
      { date: 'Dec 13, 1903', event: 'Born Ella Josephine Baker in Norfolk, Virginia.' },
      { date: '1927', event: 'Graduates from Shaw University in Raleigh, North Carolina, as class valedictorian.' },
      { date: '1930', event: 'Helps build the Young Negroes Cooperative League in New York.' },
      { date: '1940', event: 'Joins the NAACP staff as a field secretary.' },
      { date: '1943-1946', event: 'Serves as NAACP director of branches, traveling widely and building local capacity.' },
      { date: '1955', event: 'Cofounds In Friendship to support southern civil rights work.' },
      { date: '1957', event: 'Helps organize the Southern Christian Leadership Conference after the Montgomery Bus Boycott.' },
      { date: 'Apr 15-17, 1960', event: 'Organizes the Shaw University conference where students create SNCC.' },
      { date: '1964', event: 'Supports Mississippi Freedom Democratic Party organizing and broader grassroots voting-rights work.' },
      { date: '1970s-1980s', event: 'Continues supporting human rights, anti-apartheid, Puerto Rican independence, and community struggles.' },
      { date: 'Dec 13, 1986', event: 'Dies on her eighty-third birthday in New York City.' }
    ],
    fullStory: [
      `Ella Baker's story begins with a different idea of leadership. Many civil rights histories are organized around microphones: the speech, the pulpit, the president, the man at the front of the march. Baker worked in the quieter spaces that made those moments possible. She built networks, trained organizers, challenged hierarchy, asked questions, listened hard, and insisted that local people already had knowledge worth following.`,
      `Baker was born in Norfolk, Virginia, in 1903 and raised in Littleton, North Carolina. Family memory mattered. Accounts of her life often point to her grandmother's stories of slavery and resistance, including punishment for refusing an enslaver's control. Baker grew up hearing that domination could be challenged not only through grand gestures, but through daily refusal. She attended Shaw University and graduated as valedictorian in 1927, already known for challenging rules she considered unfair.`,
      `After college she moved to New York City. During the Depression, Baker worked as a journalist and became involved in cooperatives and radical democratic organizing. With George Schuyler and others, she helped develop the Young Negroes Cooperative League, which tried to build Black economic cooperation through collective buying and local initiative. This early work matters because it shows that Baker's politics did not begin with the Montgomery Bus Boycott or the sit-ins. She had long been thinking about power from the bottom up.`,
      `In 1940 Baker joined the NAACP as a field secretary. The job put her on the road across the South, where NAACP membership could cost a person employment, safety, or life itself. From 1943 to 1946 she served as director of branches. She did not treat branches as mailing lists. She treated them as training grounds. She met local people, understood local conflicts, and pushed for participatory work rather than distant control from national offices. That experience gave her a map of southern organizers that younger activists would later need.`,
      `Baker could work with major institutions without worshiping them. She helped create In Friendship in 1955 to raise money for southern civil rights campaigns. After the Montgomery Bus Boycott, she moved to Atlanta to help organize the Southern Christian Leadership Conference. SCLC gave ministers a regional platform, but Baker was frustrated by male clergy leadership that often assumed authority should flow from the pulpit down. Her critique was not personal jealousy. It was political. Movements built around charismatic men could miss the women, youth, workers, and local people who made struggle durable.`,
      `The Greensboro sit-ins in February 1960 gave Baker the opening she had been waiting for. Students were acting with courage across the South, but they needed to meet one another. Baker organized a conference at Shaw University over Easter weekend. Martin Luther King Jr. and SCLC hoped the students might become a youth wing. Baker encouraged something different. She wanted them to think independently and build their own organization. Out of that meeting came the Student Nonviolent Coordinating Committee, SNCC.`,
      `SNCC became one of the most important organizing bodies of the 1960s, especially in the Deep South. It helped sustain sit-ins, Freedom Rides, voter registration, Freedom Summer, the Mississippi Freedom Democratic Party, and local campaigns that did not always make national news. Baker did not control SNCC. She advised, questioned, hosted, connected, and pushed. Young organizers called her Miss Baker and saw her as a political mother, but she did not use motherhood to soften her politics. She could be demanding because she believed they were capable of serious work.`,
      `Her famous idea that strong people do not need strong leaders is often misunderstood. Baker did not mean movements need no discipline, strategy, or leadership. She meant leadership should multiply, not concentrate. A leader's job was to help people develop the confidence and skill to act for themselves. That philosophy shaped participatory democracy inside SNCC, where debate could be messy, slow, and alive. Baker preferred that difficulty to obedience masquerading as unity.`,
      `Baker's later work connected Black freedom to wider human rights struggles, including anti-apartheid organizing and support for Puerto Rican independence. Her politics kept widening because her core question remained steady: how do ordinary people build the power to name and change the conditions of their lives?`,
      `Ella Baker belongs in the encyclopedia because she changes how the reader sees movements. The camera may love the person at the podium. Baker teaches us to look at the meeting before the march, the branch before the headline, the kitchen table before the convention challenge, and the young organizer learning to speak without permission.`
    ],
    quote: {
      text: `strong people don't need strong leaders`,
      cite: 'Ella Baker, quoted by SNCC Digital Gateway'
    },
    costImpact: [
      `Baker paid the cost of a lifetime of travel, under-recognition, and conflict with institutions that wanted her skill more than her critique. Sexism inside civil rights organizations often pushed women into support roles even when they were shaping strategy. Baker refused to disappear, but she also refused to measure success by personal fame.`,
      `Her impact is visible in SNCC's organizing culture, voter registration work, Freedom Summer, the Mississippi Freedom Democratic Party, and later models of participatory democracy. She trained people to lead without needing to imitate the leadership styles that had excluded them.`
    ],
    whyItMattersToday: [
      `Baker matters today because movements still wrestle with the same question: are they building followers, or are they building power? Her work warns against confusing visibility with leadership. The most televised person in a struggle is not always the person doing the deepest organizing.`,
      `Her approach also speaks to schools, unions, campaigns, churches, mutual aid networks, and community groups. People do not become powerful because someone inspires them once. They become powerful through practice, relationships, study, conflict, and responsibility.`,
      `A reader should leave Baker understanding that democracy is a habit before it is a slogan. It has to be rehearsed in meetings, budgets, rides, risk, and the willingness to let new leaders grow beyond the person who first opened the door.`
    ],
    connected: [
      { href: '@root/encyclopedia/diane-nash.html', title: 'Diane Nash', description: `Shows Baker's student-centered philosophy in the Nashville movement and Freedom Rides.` },
      { href: '@root/encyclopedia/fannie-lou-hamer.html', title: 'Fannie Lou Hamer', description: 'Connects grassroots organizing to Mississippi voting rights and national party challenges.' },
      { href: '@root/generated/pages/greensboro-four.html', title: 'The Greensboro Four', description: 'The sit-in wave that led Baker to convene student organizers at Shaw.' },
      { href: '@root/encyclopedia/septima-clark.html', title: 'Septima Clark', description: `Another architect of movement education rooted in ordinary people's leadership.` }
    ],
    externalLinks: [
      { source: 'SNCC Digital Gateway', title: 'Ella Baker', url: 'https://snccdigital.org/people/ella-baker/' },
      { source: 'Library of Congress', title: 'Ella Baker, Director of Branches', url: 'https://www.loc.gov/exhibits/naacp/the-civil-rights-era.html' },
      { source: 'National Park Service', title: 'Women in the African American Civil Rights Movement', url: 'https://home.nps.gov/articles/women-in-the-african-american-civil-rights-movement-an-historic-context.htm' },
      { source: 'National Archives', title: 'The Student Nonviolent Coordinating Committee', url: 'https://www.archives.gov/research/african-americans/black-power/sncc' }
    ],
    research: {
      status: 'batch-8-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://snccdigital.org/people/ella-baker/', 'https://www.loc.gov/exhibits/naacp/the-civil-rights-era.html'],
      supportingSources: ['https://home.nps.gov/articles/women-in-the-african-american-civil-rights-movement-an-historic-context.htm', 'https://www.archives.gov/research/african-americans/black-power/sncc'],
      verifiedQuoteSource: 'SNCC Digital Gateway Ella Baker profile attributes the "strong people" line to Baker.',
      sensitiveClaimsReviewed: 'SNCC founding role, NAACP branch work, SCLC tensions, gendered leadership critique, participatory democracy framing, and later human-rights work reviewed.',
      materialCorrections: `Expanded scheduled fallback into a fuller account of Baker's cooperative politics, NAACP organizing, SCLC critique, SNCC founding, and democratic leadership theory.`,
      finalStatus: 'Batch 8 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, verified quotation, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = {
  ENTRIES,
};
