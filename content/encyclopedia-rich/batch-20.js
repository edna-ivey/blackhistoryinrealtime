const RESEARCH_DATE = '2026-08-17';

const ENTRIES = [
  {
    encyclopediaSlug: 'ruby-bridges-integration',
    fullDate: '2026-08-12',
    dailyDateLabel: 'August 12',
    subject: 'Ruby Bridges and the Cost of School Integration',
    category: 'Education',
    type: 'Event',
    dates: '1960 - present memory',
    tags: ['education', 'civil-rights', 'youth', 'women', 'segregation'],
    summary: `Ruby Bridges is often remembered through a single image: a small Black girl escorted by federal marshals into a New Orleans school. That image is true, but it can make the adult decisions around her disappear. School integration was not simply a child being brave. It was federal courts confronting local resistance, Black parents taking enormous risks, white parents pulling children out, teachers refusing to teach, neighbors punishing a family, and a six-year-old spending much of first grade alone. This page focuses on the cost of integration because the policy story is incomplete without the people asked to carry it. Brown v. Board changed constitutional law. Ruby Bridges showed what enforcement demanded from a child.`,
    timeline: [
      { date: 'May 17, 1954', event: 'Brown v. Board of Education declares segregated public schools unconstitutional.' },
      { date: 'Sept 8, 1954', event: 'Ruby Nell Bridges is born in Mississippi.' },
      { date: '1958', event: 'The Bridges family moves to New Orleans.' },
      { date: '1960', event: 'Ruby is selected after testing to integrate William Frantz Elementary School.' },
      { date: 'Nov 14, 1960', event: 'Federal marshals escort Ruby into William Frantz Elementary.' },
      { date: '1960-1961', event: 'Barbara Henry teaches Ruby alone while many white families boycott the school.' },
      { date: '1964', event: 'Norman Rockwell paints The Problem We All Live With.' },
      { date: '1999', event: 'Ruby Bridges establishes a foundation focused on children and racial understanding.' },
      { date: '2011', event: 'Rockwell\'s painting is displayed at the White House, where Bridges views it with President Barack Obama.' },
      { date: 'Present', event: 'Ruby Bridges continues to speak about children, education, and racism.' }
    ],
    fullStory: [
      `The legal story began before Ruby Bridges entered a classroom. Brown v. Board of Education said segregated public schools violated the Constitution, but the ruling did not integrate schools by itself. Southern districts delayed, resisted, litigated, and dared the federal government to enforce the promise. New Orleans was one of the cities where the gap between law and lived experience became painfully visible.`,
      `Ruby's parents, Lucille and Abon Bridges, faced a decision no parent should have to make. Integration could offer their daughter access to the school system white officials had tried to reserve for white children. It could also place her in direct danger. Lucille Bridges supported the effort because she believed Ruby and other Black children deserved a better education. That choice required courage from adults before it required courage from a child.`,
      `On November 14, 1960, federal marshals escorted six-year-old Ruby into William Frantz Elementary. The marshals were not ceremonial. They were necessary because white mobs gathered outside the school, yelling threats and slurs. Some protesters carried objects meant to frighten a child. The public school door had become a national test of whether federal authority would protect Black citizenship against local white resistance.`,
      `Inside the building, the cost continued. Many white parents withdrew their children rather than allow them to learn beside Ruby. Some teachers refused to teach her. Barbara Henry, a teacher from Boston, became Ruby's teacher for the year. For months, Ruby was often the only child in her classroom. That isolation is easy to glide over when the story is told as triumph. But it was part of the punishment. White resistance did not only scream outside. It emptied the room.`,
      `The Bridges family also paid. Abon Bridges lost work. Stores and neighbors could punish the family in ordinary ways that made life harder. Supporters helped, but the message from segregationists was clear: if Black parents pursued equal education, the whole family could be made to suffer. Integration placed private family life inside public retaliation.`,
      `Ruby herself became a subject of adult study. Psychiatrist Robert Coles met with her and wrote about her experience. His work helped document the psychological pressure of school desegregation, but it also raises a painful point. Adults were impressed by Ruby's resilience because adults had created a situation that demanded impossible resilience from a first grader.`,
      `Ruby was not the only child integrating New Orleans schools that day. Leona Tate, Tessie Prevost, and Gail Etienne entered McDonogh 19. Remembering them matters because public memory often chooses one child to stand for a whole struggle. Ruby's story is powerful enough without isolating it from the other children and families who faced the same system.`,
      `The famous Rockwell painting made Ruby's walk unforgettable. The Problem We All Live With shows a small child in a white dress, federal marshals, a racial slur on the wall, and a smashed tomato. The title puts the burden where it belongs. Ruby was not the problem. The society that required marshals to escort a child to school was the problem.`,
      `The cost of school integration did not end when Ruby grew up. Many districts found new ways to maintain racial isolation through housing patterns, school boundaries, private academies, funding systems, and political opposition. The language changed, but the battle over who gets safe, well-resourced schools did not vanish.`,
      `Ruby Bridges's story should not make readers satisfied that a brave child solved segregation. It should make readers ask why bravery was required at all, who benefited from making a child carry the burden, and what equal education still requires when law and practice separate again.`
    ],
    quote: {
      text: 'Racism is a grown-up disease and we must stop using our children to spread it.',
      cite: 'Ruby Bridges, public statement on children and racism'
    },
    costImpact: [
      `The cost was carried by a child, a family, a teacher, and a community. Ruby Bridges endured public threats and months of isolation. Her parents faced economic retaliation and social pressure. Barbara Henry risked professional and social backlash by teaching her. Other Black children in New Orleans carried similar burdens with less national memory attached.`,
      `The impact was national because Ruby's experience made enforcement visible. Brown had already declared segregation unconstitutional, but Ruby's walk showed that a ruling without protection could leave children alone against adult hatred.`
    ],
    whyItMattersToday: [
      `This history matters today because school inequality did not end with formal desegregation. District lines, housing segregation, resource gaps, discipline disparities, and political fights over curriculum still decide what kind of education children receive. Ruby Bridges helps readers see that law is only one part of equality.`,
      `Her story also challenges the habit of praising children for surviving what adults should have prevented. Courage is real, but celebration without responsibility becomes sentimental. The better lesson is that adults created the danger and adults had the power to remove it.`,
      `The fuller story of Ruby Bridges is not simply inspiration. It is a demand that education be protected without asking children to become shields first.`
    ],
    connected: [
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'The companion biography that follows Ruby Bridges beyond the first school year.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'The ruling whose enforcement shaped Ruby Bridges\'s childhood.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects desegregation history to continuing school inequality.' },
      { href: '@root/encyclopedia/claudette-colvin.html', title: 'Claudette Colvin', description: 'Another young person whose courage exposed adult systems of segregation.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Ruby Bridges', url: 'https://www.nps.gov/people/rubybridges.htm' },
      { source: 'National Women\'s History Museum', title: 'Ruby Bridges', url: 'https://www.womenshistory.org/education-resources/biographies/ruby-bridges' },
      { source: 'Official Ruby Bridges Website', title: 'Ruby Bridges', url: 'https://www.rubybridges.com/' },
      { source: 'Norman Rockwell Museum', title: 'The Problem We All Live With', url: 'https://www.nrm.org/thinglink/text/Problem_live_with.html' },
      { source: 'National Museum of American History', title: 'Ruby Bridges and School Desegregation', url: 'https://americanhistory.si.edu/brown/history/5-decision/ruby-bridges.html' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/rubybridges.htm', 'https://www.womenshistory.org/education-resources/biographies/ruby-bridges', 'https://www.rubybridges.com/'],
      supportingSources: ['https://www.nrm.org/thinglink/text/Problem_live_with.html', 'https://americanhistory.si.edu/brown/history/5-decision/ruby-bridges.html'],
      verifiedQuoteSource: 'Short quotation traced to Ruby Bridges public materials and cross-checked against institutional sources.',
      sensitiveClaimsReviewed: 'Age, federal marshals, family retaliation, other New Orleans children, classroom isolation, and present-day school inequality framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a distinct systems-and-cost page that does not duplicate the Ruby Bridges biography.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short quotation, child-centered integration claim review.'
    }
  },
  {
    encyclopediaSlug: 'sam-cooke',
    fullDate: '2026-05-28',
    dailyDateLabel: 'May 28',
    subject: 'Sam Cooke',
    category: 'Music',
    type: 'People',
    dates: '1931 - 1964',
    tags: ['music', 'civil-rights', 'art', 'self-determination', 'economics'],
    summary: `Sam Cooke made smoothness sound like power. He came out of gospel music with the Soul Stirrers, crossed into pop stardom, helped define soul, built business control through publishing and label work, and wrote "A Change Is Gonna Come," one of the great civil rights songs of the twentieth century. The song is often treated as prophecy, but Cooke's life was also about labor: who owns the song, who reaches the audience, who controls the voice, and what it costs a Black artist to move from sacred music into the pop marketplace. His page matters because Cooke was not only a beautiful singer. He was an architect of Black musical modernity.`,
    timeline: [
      { date: 'Jan 22, 1931', event: 'Born Samuel Cook in Clarksdale, Mississippi.' },
      { date: '1933', event: 'Moves with his family to Chicago.' },
      { date: '1950', event: 'Joins the Soul Stirrers and becomes a major gospel singer.' },
      { date: '1957', event: 'Releases "You Send Me," which becomes a pop and R&B hit.' },
      { date: '1959', event: 'Founds SAR Records with J. W. Alexander and Roy Crain.' },
      { date: '1963', event: 'Experiences a racist refusal at a motel in Shreveport, Louisiana.' },
      { date: '1964', event: 'Records "A Change Is Gonna Come."' },
      { date: 'Dec 11, 1964', event: 'Is shot and killed in Los Angeles.' },
      { date: 'Dec 22, 1964', event: '"A Change Is Gonna Come" is released as a single after his death.' },
      { date: '1986', event: 'Is inducted into the Rock & Roll Hall of Fame in its first class.' }
    ],
    fullStory: [
      `Sam Cooke was born in Mississippi and raised in Chicago, a migration path that placed Southern Black church sound inside an urban music marketplace. His father was a minister, and Cooke's early training came through gospel. With the Soul Stirrers, he became one of the most admired voices in the genre: light, controlled, intimate, and thrilling without needing to shout. He learned how to make listeners lean toward him.`,
      `Crossing from gospel into secular pop was risky. Gospel audiences could see secular music as betrayal, and the pop industry could take Black sound while denying Black control. Cooke crossed anyway. "You Send Me" made him a star in 1957. The song's ease can hide the calculation behind it. Cooke understood melody, phrasing, charm, radio, and the power of sounding effortless.`,
      `He also understood business. Cooke founded SAR Records and managed publishing interests at a time when many Black artists lost control of the songs that made companies rich. He supported and recorded other artists, including the Valentinos and Bobby Womack. That business work matters because soul music was not only feeling. It was contracts, studios, ownership, and infrastructure.`,
      `"A Change Is Gonna Come" came from a different register of Cooke's life. He was influenced by Bob Dylan's "Blowin' in the Wind," by civil rights struggle, and by his own experiences with racism. In 1963, Cooke and his party were turned away from a Shreveport motel. The incident did not single-handedly create the song, but it sharpened the world the song answered. Cooke wrote from hope that was not naive. The song carries exhaustion, danger, longing, and belief in the same breath.`,
      `The record was not an easy pop single. Its orchestration is stately, almost cinematic. Cooke's voice moves as if it is holding back tears and still refusing defeat. The song mentions being born by the river, fear of death, asking a brother for help, and the conviction that change will come. It became larger after Cooke's death, when listeners heard it through grief and movement memory.`,
      `Cooke's death remains part of his story and must be treated with care. He was shot by a motel manager in Los Angeles in December 1964. The official ruling was justifiable homicide, but many details have been questioned by family members, writers, and fans. An encyclopedia page should not pretend to solve what the record does not settle. It can say that his death was sudden, violent, and disputed in public memory without inventing a conspiracy as fact.`,
      `The tragedy of his death sometimes overshadows the breadth of his work. Cooke's catalog includes pop romance, dance records, gospel memory, civil rights yearning, and business ambition. He helped build a model for Black artists who wanted crossover success without surrendering all control. Later soul singers, R&B artists, and socially conscious musicians inherited both the sound and the business lesson.`,
      `Cooke also makes the line between sacred and secular more complicated than a simple break. Gospel technique stayed in the phrasing, the call, the lift, and the ache of his pop records. When he moved into secular music, he did not leave the Black church behind as much as carry some of its emotional grammar into new rooms. That movement unsettled people because it showed how closely pleasure, longing, faith, and commerce could sit together in Black sound.`,
      `Cooke's polish was not apolitical. In a segregated market, a Black man presenting elegance, desire, control, and business intelligence to mass audiences was itself a challenge. He did not always sound like protest. Sometimes he sounded like pleasure, sophistication, and confidence, and those sounds mattered too.`,
      `Sam Cooke matters because he made transition into art: South to North, gospel to pop, singer to owner, romance to protest, voice to institution. "A Change Is Gonna Come" is the song many people remember, but the deeper history is the life that made such a song possible.`
    ],
    costImpact: [
      `Cooke paid the cost of crossing boundaries. Gospel audiences could view his secular career as betrayal, while the white-dominated music industry still tried to control Black artistry and profit. His death at thirty-three cut short a business and artistic project that was still expanding.`,
      `His impact was wide: soul music, Black artist ownership, gospel-pop vocal style, and civil rights sound all carry his imprint. "A Change Is Gonna Come" gave the movement a language of wounded confidence that still feels alive.`
    ],
    whyItMattersToday: [
      `Sam Cooke matters today because Black music history is also ownership history. A voice can move millions and still be vulnerable if publishing, masters, labels, and contracts are controlled elsewhere. Cooke saw that early and tried to build power around the sound.`,
      `His story also shows that protest music does not have to abandon beauty. "A Change Is Gonna Come" works because it is musically disciplined, emotionally restrained, and spiritually open. It does not shout its seriousness. It earns it.`,
      `The fuller lesson is that style can be strategy. Cooke's smoothness was not softness. It was control.`
    ],
    connected: [
      { href: '@root/encyclopedia/nina-simone.html', title: 'Nina Simone', description: 'Connects civil rights music, performance control, and artistic risk.' },
      { href: '@root/generated/pages/prince.html', title: 'Prince', description: 'Links Cooke\'s ownership work to later battles over masters and control.' },
      { href: '@root/generated/pages/james-brown.html', title: 'James Brown', description: 'Another artist who joined musical innovation to business and public power.' },
      { href: '@root/generated/pages/black-church.html', title: 'The Black Church', description: 'Places Cooke\'s gospel foundation inside a larger Black sacred tradition.' }
    ],
    externalLinks: [
      { source: 'Rock & Roll Hall of Fame', title: 'Sam Cooke', url: 'https://www.rockhall.com/inductees/sam-cooke' },
      { source: 'Library of Congress', title: 'National Recording Registry: A Change Is Gonna Come', url: 'https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/' },
      { source: 'Songwriters Hall of Fame', title: 'Sam Cooke', url: 'https://www.songhall.org/profiles/sam-cooke' },
      { source: 'Library of Congress', title: 'A Change Is Gonna Come', url: 'https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/' },
      { source: 'Encyclopaedia Britannica', title: 'Sam Cooke', url: 'https://www.britannica.com/biography/Sam-Cooke' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.rockhall.com/inductees/sam-cooke', 'https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/', 'https://www.songhall.org/profiles/sam-cooke'],
      supportingSources: ['https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/', 'https://www.britannica.com/biography/Sam-Cooke'],
      verifiedQuoteSource: 'No song lyric quoted beyond title. Death circumstances and civil rights song claims were summarized from institutional sources.',
      sensitiveClaimsReviewed: 'Death circumstances, motel refusal, gospel-to-pop criticism, publishing/business claims, and posthumous song release reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond one anthem into gospel roots, business control, soul style, civil rights context, and careful death framing.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, death and ownership claim review.'
    }
  },
  {
    encyclopediaSlug: 'sarah-rector',
    outputPath: 'encyclopedia/sarah-rector.html',
    fullDate: '2026-03-10',
    dailyDateLabel: 'March 10',
    subject: 'Sarah Rector',
    category: 'Economics',
    type: 'People',
    dates: '1902 - 1967',
    tags: ['economics', 'women', 'youth', 'law', 'self-determination'],
    summary: `Sarah Rector was not a fairy-tale child millionaire. She was a Black Creek Freedman girl whose land allotment in Oklahoma became oil-rich, then immediately drew the attention of courts, guardians, newspapers, speculators, and reformers. Her wealth was real. So was the system that tried to manage it for her. Rector's story sits at the crossing of Black history, Native history, federal land policy, oil capitalism, guardianship law, and the public appetite for spectacle. This page matters because Black wealth is often remembered only when it is destroyed. Rector forces a sharper question: what happens when a Black child owns valuable land in a society determined to decide whether she is allowed to control it?`,
    timeline: [
      { date: 'Mar 3, 1902', event: 'Born near Taft in Indian Territory, now Oklahoma.' },
      { date: '1900s', event: 'Receives a 160-acre allotment as a Creek Freedman under federal allotment policy.' },
      { date: '1907', event: 'Oklahoma becomes a state, bringing new courts and guardianship systems over many Native and Freedmen allottees.' },
      { date: '1911', event: 'Her father leases parts of her land for oil exploration.' },
      { date: '1913', event: 'A producing oil well on her allotment begins generating major income.' },
      { date: '1913-1914', event: 'National newspapers report on Rector as one of the wealthiest Black children in the country.' },
      { date: '1914', event: 'Booker T. Washington and W. E. B. Du Bois receive information about her guardianship and education.' },
      { date: '1920', event: 'Reaches legal adulthood and gains greater control over her estate.' },
      { date: '1920s', event: 'Lives in Kansas City and invests in property.' },
      { date: 'July 22, 1967', event: 'Dies in Kansas City, Missouri.' }
    ],
    fullStory: [
      `Sarah Rector's story begins with land policy, not oil. She was born into the world of Creek Freedmen, descendants of Black people enslaved by members of the Muscogee Creek Nation and later recognized in treaty arrangements after the Civil War. Federal allotment policy broke up communally held tribal lands and assigned parcels to individual citizens, including some Freedmen. The policy was promoted as modernization, but it also opened Native land to white settlement, speculation, and loss.`,
      `As a child, Rector received 160 acres. The land was not chosen because anyone expected it to make her rich. Some accounts describe it as rocky or not especially useful for farming. But land value changed when oil exploration expanded in Oklahoma. A parcel dismissed as poor agricultural land could become enormously valuable if it sat above oil.`,
      `When oil was discovered on Rector's allotment, money began arriving in sums that startled the public. Newspapers described her as the richest Black girl in America, often with a tone that mixed fascination, racism, and disbelief. The phrasing made her sound like a curiosity instead of a person living inside complicated legal and family pressures.`,
      `Because she was a minor, a guardian was appointed to manage her estate. Guardianship was common for minors, but in Oklahoma it also became one of the mechanisms through which Native and Freedmen wealth could be controlled, skimmed, mismanaged, or redirected. Rector's guardian, T. J. Porter, was a white man. Reports about her living conditions, education, and finances drew scrutiny from Black leaders and national organizations.`,
      `The historical record is more complicated than the most sensational versions suggest. Rector was not simply kidnapped from her wealth, but she was also not simply free to enjoy it. Her family, guardian, courts, reporters, and reformers all had different interests in her story. Some press coverage exaggerated. Some concern was justified. The point is not to turn Rector into a helpless victim or a carefree heiress. The point is to see how little privacy and autonomy a Black girl had once her land became valuable.`,
      `Booker T. Washington's network and W. E. B. Du Bois's circle both became aware of concerns around Rector. The case attracted attention because it seemed to reveal a pattern: Black and Native wealth under guardianship could be vulnerable to white-controlled legal systems. Rector's specific circumstances mattered, but so did the larger system of allotment, oil, and guardianship in Oklahoma.`,
      `When Rector reached adulthood, she gained more direct control. She moved in Black elite circles in Kansas City, invested in property, married, raised children, and lived a more private life than the newspapers had allowed in childhood. Her later years did not match the fantasy of endless riches. Wealth can be gained, managed, spent, contested, and diminished. That complexity makes the story more human, not less important.`,
      `Rector's history also sits near the story of Tulsa, Black Wall Street, and Oklahoma's broader Black towns. Oklahoma was not simply a place of frontier opportunity. It was a place where Black, Native, and white claims to land, labor, oil, law, and citizenship collided. Creek Freedmen history makes the collision impossible to simplify.`,
      `Sarah Rector matters because she exposes a hidden side of wealth: not only how it is made, but who is believed capable of controlling it. A Black child's property became a public question because racism made her ownership seem strange and because law gave others tools to intervene. Her life asks readers to look at Black wealth without myth, pity, or surprise. It existed. It was watched. It was contested. It deserves to be understood in full.`
    ],
    costImpact: [
      `The cost of Rector's wealth was exposure and control. Courts, guardians, journalists, reformers, and speculators all treated her private life as public business. Her childhood became a national story because a Black girl with valuable property unsettled white expectations about ownership and competence.`,
      `The impact of her story is that it links Black wealth to federal Indian policy, guardianship law, and oil capitalism. It reminds readers that wealth alone does not guarantee autonomy when the legal system decides someone else should manage it.`
    ],
    whyItMattersToday: [
      `Sarah Rector matters today because conversations about the racial wealth gap often begin with absence: what Black families did not have, could not buy, or were denied. Rector shows another part of the story. Black wealth existed, but it was often made vulnerable through law, violence, extraction, and erasure.`,
      `Her story also asks readers to understand Creek Freedmen history as Black history and Native history at the same time. Those histories are not always comfortable together. They include enslavement within Native nations, federal coercion against Native sovereignty, and the later fight over Freedmen citizenship and land rights.`,
      `The fuller lesson is that ownership is not only a deed or a bank balance. Ownership requires the power to control, protect, inherit, and narrate what is yours.`
    ],
    connected: [
      { href: '@root/encyclopedia/black-wall-street.html', title: 'Black Wall Street', description: 'Places Rector near Oklahoma histories of Black wealth, land, and white extraction.' },
      { href: '@root/encyclopedia/redlining.html', title: 'Redlining', description: 'Connects Black wealth to later systems that controlled housing and investment.' },
      { href: '@root/encyclopedia/madam-cj-walker.html', title: 'Madam C.J. Walker', description: 'Shows another Black woman whose wealth drew public fascination and scrutiny.' },
      { href: '@root/encyclopedia/rosewood-massacre.html', title: 'The Rosewood Massacre', description: 'Links Black prosperity to the danger of white surveillance and violence.' }
    ],
    externalLinks: [
      { source: 'Oklahoma Historical Society', title: 'Sarah Rector', url: 'https://www.okhistory.org/publications/enc/entry?entry=RE017' },
      { source: 'KGOU', title: 'How Did Sarah Rector Become Known as the Richest Black Girl in America?', url: 'https://www.kgou.org/show/how-curious/2023-06-27/which-young-oklahoman-was-known-as-the-richest-colored-girl-in-america' },
      { source: 'National Archives', title: 'Dawes Act', url: 'https://www.archives.gov/milestone-documents/dawes-act' },
      { source: 'BlackPast', title: 'Sarah Rector', url: 'https://www.blackpast.org/african-american-history/rector-sarah-1902-1967/' },
      { source: 'National Park Service', title: 'Muscogee Creek Freedmen and Indian Territory', url: 'https://www.nps.gov/subjects/africanamericanheritage/index.htm' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.okhistory.org/publications/enc/entry?entry=RE017', 'https://www.archives.gov/milestone-documents/dawes-act', 'https://www.kgou.org/show/how-curious/2023-06-27/which-young-oklahoman-was-known-as-the-richest-colored-girl-in-america'],
      supportingSources: ['https://www.blackpast.org/african-american-history/rector-sarah-1902-1967/', 'https://www.nps.gov/subjects/africanamericanheritage/index.htm'],
      verifiedQuoteSource: 'No quotation included. Sensational newspaper language was summarized rather than reused as a pull quote.',
      sensitiveClaimsReviewed: 'Creek Freedmen status, allotment law, guardian control, wealth estimates, press exaggeration, and living-condition claims reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond child-millionaire framing into allotment policy, guardianship, oil, Black-Native history, and autonomy.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, wealth and guardianship claim review.'
    }
  },
  {
    encyclopediaSlug: 'septima-clark',
    outputPath: 'encyclopedia/septima-clark.html',
    fullDate: '2026-03-08',
    dailyDateLabel: 'March 8',
    subject: 'Septima Clark',
    category: 'Education',
    type: 'People',
    dates: '1898 - 1987',
    tags: ['education', 'civil-rights', 'women', 'voting-rights', 'leadership'],
    summary: `Septima Clark built one of the civil rights movement's most important engines: citizenship education. She understood that voting rights meant little when registrars used literacy tests, intimidation, and arbitrary power to keep Black adults from registering. Her citizenship schools taught reading, writing, civic knowledge, and confidence, often in community spaces where people already trusted one another. Clark lost her teaching job and pension because she refused to leave the NAACP. She received less public credit than male leaders who used the program she helped build. Her page matters because movements do not run on speeches alone. They run on teachers, lesson plans, local trust, and people who know how power actually blocks the door.`,
    timeline: [
      { date: 'May 3, 1898', event: 'Born Septima Poinsette in Charleston, South Carolina.' },
      { date: '1916', event: 'Begins teaching on Johns Island.' },
      { date: '1919', event: 'Works on a petition campaign for Black teachers in Charleston public schools.' },
      { date: '1945', event: 'Helps win equal pay for Black and white teachers in Charleston.' },
      { date: '1956', event: 'Is fired from teaching because she refuses to resign from the NAACP.' },
      { date: '1957', event: 'Works with Highlander Folk School and helps develop citizenship education.' },
      { date: '1961', event: 'The Southern Christian Leadership Conference takes over the citizenship school program.' },
      { date: '1960s', event: 'Citizenship schools train thousands of teachers and help register Black voters across the South.' },
      { date: '1976', event: 'South Carolina restores her pension.' },
      { date: 'Dec 15, 1987', event: 'Dies in Charleston, South Carolina.' }
    ],
    fullStory: [
      `Septima Poinsette Clark was born in Charleston in 1898, in a state determined to limit Black citizenship after Reconstruction. Her father had been born enslaved. Her mother came from a free Black Haitian background. That family history gave Clark a close view of freedom's uneven meanings: education mattered, but education did not automatically open institutions that law and custom had closed.`,
      `Clark became a teacher, first on Johns Island, where many Black adults worked in agricultural labor and faced political exclusion. She quickly learned that literacy was never just literacy. In South Carolina, voter registration systems used literacy tests and constitutional interpretation questions to block Black people from voting. The rules could be changed, interpreted, or weaponized by registrars who had no intention of being fair.`,
      `Clark spent decades teaching and organizing before the national civil rights movement made her famous to insiders. She worked for Black teacher employment in Charleston, fought for equal pay, and joined the NAACP. These were not side projects. They were part of her understanding that education, labor, and citizenship belonged together.`,
      `In 1956, South Carolina required public employees to leave civil rights organizations. Clark refused to resign from the NAACP. She was fired after decades of teaching and lost her pension. The punishment was economic and political. The state used her job to force obedience, and Clark chose the movement anyway.`,
      `Highlander Folk School in Tennessee became the next base for her work. Highlander brought together labor and civil rights organizers, including Rosa Parks, Esau Jenkins, Myles Horton, and Bernice Robinson. Clark helped shape citizenship schools that taught adults how to read, write, sign their names, understand government, and prepare for registration tests. The first programs grew from local trust, especially on Johns Island.`,
      `The model worked because it respected adults. Citizenship schools were not charity lessons handed down from experts. They used local teachers, practical materials, and questions people needed answered immediately. How do you fill out a money order? What does the Constitution say? How do you speak to a registrar? How do you help someone else learn after you do?`,
      `When Tennessee attacked Highlander, the citizenship school program moved under the Southern Christian Leadership Conference. Clark became director of education and teaching. The program spread across the South and helped train thousands of teachers. It helped many Black adults register to vote and become local leaders. Fannie Lou Hamer was among those shaped by citizenship education networks.`,
      `The curriculum's genius was its closeness to daily life. A lesson could include reading a newspaper, writing a check, understanding a ballot, or practicing the exact language a registrar might use. Clark knew that people who had been deliberately denied schooling did not need pity. They needed tools, respect, and teachers who understood that adult learners brought intelligence even when institutions had denied them credentials.`,
      `Clark's relationship with SCLC also revealed gendered limits inside the movement. She later wrote about being undervalued and treated as less acceptable because she was a woman. Male leaders could praise her privately while still centering men publicly. That contradiction is not incidental. It is part of how movement memory often works.`,
      `Clark's work was not glamorous, which is why it was so powerful. She built capacity. She taught people to read the system while reading the page. She made education a tool for collective action, not a credential for escape from the community. The citizenship school model helped turn private frustration into public participation.`,
      `Septima Clark matters because she understood democracy as a learned practice. People do not become voters simply because a law says they may. They need safety, information, confidence, transportation, documents, and teachers who believe they can lead. Clark built that machinery, and the movement moved because of it.`
    ],
    costImpact: [
      `Clark's work cost her a job, a pension, and years of public under-recognition. She accepted economic punishment rather than surrender her NAACP membership. Inside movement institutions, she also faced sexism that narrowed how her leadership was described and remembered.`,
      `Her impact was structural. Citizenship schools helped Black adults register, teach others, and build local leadership. The program gave voting rights campaigns practical infrastructure, especially in places where official systems were designed to humiliate and reject Black applicants.`
    ],
    whyItMattersToday: [
      `Septima Clark matters today because voter suppression is often administrative. Forms, deadlines, ID rules, polling locations, language access, transportation, and intimidation can decide whether a right is usable. Clark understood that democracy requires education aimed at real obstacles.`,
      `Her story also corrects movement memory. The civil rights movement needed speakers, but it also needed teachers. It needed people who could sit at tables with adults after work and turn fear into skill. That labor is easy to miss because it does not always produce famous photographs.`,
      `The fuller lesson is that education becomes radical when it helps people act together. Clark did not teach literacy as self-improvement alone. She taught it as citizenship, power, and collective survival.`
    ],
    connected: [
      { href: '@root/encyclopedia/fannie-lou-hamer.html', title: 'Fannie Lou Hamer', description: 'Connects citizenship education to voting-rights organizing in Mississippi.' },
      { href: '@root/generated/pages/rosa-parks.html', title: 'Rosa Parks', description: 'Links Highlander training, organizing, and disciplined civil rights strategy.' },
      { href: '@root/encyclopedia/voting-rights.html', title: 'Voting Rights and Suppression', description: 'Places citizenship schools inside the fight against voter exclusion.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects education access to political power.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Septima Poinsette Clark', url: 'https://www.nps.gov/people/septimapoinsetteclark.htm' },
      { source: 'King Institute', title: 'Septima Poinsette Clark', url: 'https://kinginstitute.stanford.edu/clark-septima-poinsette' },
      { source: 'SNCC Digital Gateway', title: 'Septima Clark', url: 'https://snccdigital.org/people/septima-clark/' },
      { source: 'College of Charleston Lowcountry Digital Library', title: 'Septima P. Clark Papers', url: 'https://lcdl.library.cofc.edu/content/septima-p-clark-papers-ca-1910-ca-1990' },
      { source: 'South Carolina Encyclopedia', title: 'Septima Poinsette Clark', url: 'https://www.scencyclopedia.org/sce/entries/clark-septima-poinsette/' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/septimapoinsetteclark.htm', 'https://kinginstitute.stanford.edu/clark-septima-poinsette', 'https://snccdigital.org/people/septima-clark/'],
      supportingSources: ['https://lcdl.library.cofc.edu/content/septima-p-clark-papers-ca-1910-ca-1990', 'https://www.scencyclopedia.org/sce/entries/clark-septima-poinsette/'],
      verifiedQuoteSource: 'No quotation included. Citizenship education claims were summarized rather than quoted because the exact short phrasing needs tighter source verification.',
      sensitiveClaimsReviewed: 'Firing and pension loss, citizenship-school origins, SCLC transfer, Fannie Lou Hamer connection, gendered movement erasure, and death date reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond teacher shorthand into citizenship-school infrastructure, voter suppression mechanics, Highlander/SCLC transition, and gendered credit.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, citizenship-school and gendered-credit claim review.'
    }
  },
  {
    encyclopediaSlug: 'shirley-chisholm',
    outputPath: 'encyclopedia/shirley-chisholm.html',
    fullDate: '2026-02-02',
    dailyDateLabel: 'February 2',
    subject: 'Shirley Chisholm',
    category: 'Politics',
    type: 'People',
    dates: '1924 - 2005',
    tags: ['politics', 'women', 'election', 'civil-rights', 'leadership'],
    summary: `Shirley Chisholm was the first Black woman elected to Congress and the first Black major-party candidate to seek the presidency, but firsts alone do not explain her. She was a Brooklyn educator, organizer, legislator, coalition-builder, and sharp critic of a political system that expected Black women to wait their turn. Her 1972 presidential campaign was underfunded, dismissed, and sometimes attacked from inside the movements it helped open. She ran anyway, not because she expected the country to be ready, but because she believed people had to see a different kind of candidacy before it could become possible. Her page matters because representation without independence was never enough for Chisholm.`,
    timeline: [
      { date: 'Nov 30, 1924', event: 'Born Shirley Anita St. Hill in Brooklyn, New York.' },
      { date: '1928-1934', event: 'Lives with her grandmother in Barbados, an experience she later credited with shaping her education.' },
      { date: '1946', event: 'Graduates from Brooklyn College.' },
      { date: '1952', event: 'Earns a master\'s degree in early childhood education from Columbia University.' },
      { date: '1964', event: 'Is elected to the New York State Assembly.' },
      { date: '1968', event: 'Is elected to Congress from New York\'s 12th District.' },
      { date: '1969', event: 'Helps found the Congressional Black Caucus.' },
      { date: '1972', event: 'Runs for the Democratic presidential nomination.' },
      { date: '1983', event: 'Leaves Congress after seven terms.' },
      { date: 'Jan 1, 2005', event: 'Dies in Ormond Beach, Florida.' }
    ],
    fullStory: [
      `Shirley Chisholm was born in Brooklyn to Caribbean immigrant parents and spent part of her childhood in Barbados. She later said the strict schooling she received there shaped her confidence and command. Back in New York, she became an educator and child-care administrator before electoral politics became her main arena. That background matters. Chisholm's politics began with children, families, labor, and neighborhood institutions, not with celebrity.`,
      `In Brooklyn Democratic politics, Chisholm had to move through party structures that were often male, white, and suspicious of independent Black women. She built support through civic organizations, local networks, and direct contact with voters. In 1964, she won a seat in the New York State Assembly, where she worked on education, unemployment insurance, and domestic workers' rights.`,
      `Her 1968 congressional campaign used the slogan "Unbought and Unbossed." It was not branding pasted onto a safe career. It was a declaration of political posture. Chisholm entered Congress as the first Black woman to serve there. The institution did not know what to do with her. She was assigned to the House Agriculture Committee, a poor fit for her urban Brooklyn district. She protested and eventually moved to committees more relevant to her constituents.`,
      `In Congress, Chisholm advocated for poor people, women, children, workers, immigrants, and communities excluded from power. She helped found the Congressional Black Caucus and later the National Women's Political Caucus. She also challenged sexism inside Black politics and racism inside feminist politics. Her position was often lonely because she refused to belong to only one lane.`,
      `The 1972 presidential campaign made that loneliness public. Chisholm announced a run for the Democratic nomination at a time when no Black woman had ever mounted such a campaign in a major party. She faced racism, sexism, media ridicule, limited money, ballot-access barriers, and skepticism from some Black male leaders who preferred other strategic choices. Some feminists also hesitated to support her fully. The campaign exposed the gap between movements' ideals and their willingness to follow a Black woman.`,
      `Chisholm did not present herself as a symbolic candidate only for Black voters or women voters. She argued that her candidacy belonged to people left out of politics: poor people, young people, Spanish-speaking voters, Native people, women, and workers. That was both visionary and difficult. Coalition politics sounds elegant after the fact, but in real time it means asking groups with different wounds and priorities to trust one another.`,
      `She also made controversial choices. When segregationist Alabama governor George Wallace was shot during the campaign, Chisholm visited him in the hospital. Many supporters were angry. Chisholm later said she acted out of humanity, and Wallace later supported some legislation she cared about. The visit does not erase Wallace's racism or make Chisholm naive. It shows a politician willing to make a moral choice that did not fit easy campaign logic.`,
      `Chisholm won delegates but not the nomination. The campaign still changed the field of imagination. Later candidates, including Jesse Jackson, Carol Moseley Braun, Barack Obama, Hillary Clinton, Kamala Harris, and many others, campaigned in a world Chisholm had helped widen. That does not mean every later campaign shared her politics. It means she broke a visual and institutional barrier.`,
      `After Congress, Chisholm taught, wrote, and remained a symbol of principled independence. But the slogan can become too neat. "Unbought and Unbossed" was not just attitude. It was a governing philosophy rooted in social services, anti-poverty policy, democratic participation, and a refusal to let party leaders decide what a Black woman could ask for.`,
      `Chisholm matters because she did not wait for permission to make politics larger. She entered rooms that were not built for her, argued with people who claimed to be allies, and insisted that democracy had to make space for those treated as marginal. She did not simply represent possibility. She disciplined it into a campaign.`
    ],
    quote: {
      text: 'Unbought and unbossed.',
      cite: 'Shirley Chisholm campaign slogan and 1970 autobiography title'
    },
    costImpact: [
      `Chisholm paid with isolation, ridicule, underfunding, and resistance from people who should have been natural allies. Her presidential campaign exposed not only white racism and sexism, but also tensions inside Black political leadership and feminist politics. She had to fight to be understood as more than a symbol.`,
      `Her impact was institutional and imaginative. She widened Congress, helped build caucus politics, and made a national campaign by a Black woman visible before the political system had language for it. She also kept poverty, child care, and working families at the center of her politics.`
    ],
    whyItMattersToday: [
      `Shirley Chisholm matters today because representation can become shallow when it is separated from power and policy. Chisholm did not want to be praised simply for entering the room. She wanted to change what the room did and whom it served.`,
      `Her story also helps readers understand coalition politics as work, not a slogan. She believed excluded people could build power together, but she also saw how racism, sexism, party control, and strategic fear could fracture that possibility.`,
      `The fuller lesson is that being first can be both achievement and burden. Chisholm carried the burden without pretending gratitude was the price of admission.`
    ],
    connected: [
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Places Chisholm inside a longer history of Black women building public power.' },
      { href: '@root/encyclopedia/barbara-jordan.html', title: 'Barbara Jordan', description: 'Connects two pathbreaking Black women in national politics and public speech.' },
      { href: '@root/encyclopedia/barack-obama.html', title: 'Barack Obama', description: 'Shows a later presidential breakthrough shaped by earlier campaigns.' },
      { href: '@root/generated/pages/john-lewis.html', title: 'John Lewis', description: 'Connects congressional service to movement roots and voting-rights politics.' }
    ],
    externalLinks: [
      { source: 'U.S. House of Representatives', title: 'Shirley Anita Chisholm', url: 'https://history.house.gov/People/Listing/C/CHISHOLM,-Shirley-Anita-(C000371)/' },
      { source: 'National Park Service', title: 'Shirley Chisholm', url: 'https://www.nps.gov/people/shirley-chisholm.htm' },
      { source: 'National Women\'s History Museum', title: 'Shirley Chisholm', url: 'https://www.womenshistory.org/education-resources/biographies/shirley-chisholm' },
      { source: 'Brooklyn Museum', title: 'Shirley Chisholm', url: 'https://www.brooklynmuseum.org/eascfa/feminist_art_base/shirley-chisholm' },
      { source: 'Library of Congress', title: 'Shirley Chisholm Presidential Campaign Materials', url: 'https://www.loc.gov/item/2016648550/' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://history.house.gov/People/Listing/C/CHISHOLM,-Shirley-Anita-(C000371)/', 'https://www.nps.gov/people/shirley-chisholm.htm', 'https://www.loc.gov/item/2016648550/'],
      supportingSources: ['https://www.womenshistory.org/education-resources/biographies/shirley-chisholm', 'https://www.brooklynmuseum.org/eascfa/feminist_art_base/shirley-chisholm'],
      verifiedQuoteSource: 'Short phrase is Chisholm\'s campaign slogan and book title, verified through House/NPS biographical materials.',
      sensitiveClaimsReviewed: 'First Black woman in Congress, first Black major-party presidential candidate framing, Wallace hospital visit, campaign opposition, and coalition politics reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond firsts into education work, Brooklyn organizing, Congress, presidential campaign, coalition tensions, and policy commitments.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified short slogan quote, first-claim and campaign claim review.'
    }
  },
  {
    encyclopediaSlug: 'slave-patrols',
    outputPath: 'encyclopedia/slave-patrols.html',
    fullDate: '2026-02-22',
    dailyDateLabel: 'February 22',
    subject: 'Slave Patrols and the Origins of American Policing',
    category: 'Systems',
    type: 'System',
    dates: '1700s - present debates',
    tags: ['enslavement', 'law', 'government', 'resistance', 'civil-rights'],
    summary: `Slave patrols were organized systems of racial surveillance created to protect slavery. They searched quarters, checked passes, broke up gatherings, chased people who fled, and enforced the idea that Black movement required white permission. They were not the only origin of American policing, and Northern cities developed police departments through different labor, immigration, and urban-control pressures. But in the South, slave patrols were a direct ancestor of law enforcement practices built around controlling Black life. This page matters because history should be precise. The point is not that every modern police institution is identical to a patrol. The point is that racial control sits deep in the roots of American law enforcement and public order.`,
    timeline: [
      { date: 'Late 1600s', event: 'Colonies pass slave codes restricting Black movement, assembly, weapons, and testimony.' },
      { date: '1704', event: 'South Carolina develops one of the earliest formal slave patrol systems in British North America.' },
      { date: '1700s', event: 'Patrol systems spread across slaveholding colonies and states.' },
      { date: '1793', event: 'The federal Fugitive Slave Act strengthens legal requirements to return people who escaped slavery.' },
      { date: '1850', event: 'A harsher Fugitive Slave Act expands federal enforcement and threatens free Black communities.' },
      { date: '1865', event: 'The Thirteenth Amendment abolishes slavery except as punishment for crime.' },
      { date: '1865-1870s', event: 'Black Codes, vagrancy laws, and local law enforcement help control freedpeople\'s labor and movement.' },
      { date: 'Jim Crow era', event: 'Police, sheriffs, and courts enforce segregation and racial hierarchy.' },
      { date: '1960s', event: 'Civil rights activists expose police violence against demonstrators and communities.' },
      { date: 'Present', event: 'Debates over policing, abolition, reform, and accountability continue.' }
    ],
    fullStory: [
      `Slave patrols grew from the central fear of slave societies: that enslaved people would run, gather, resist, revolt, or simply move beyond white control. In colonies where enslaved labor created wealth, lawmakers built rules around every part of Black life. Movement required passes. Meetings could be criminalized. Weapons were restricted. Literacy, worship, work, and travel were all watched because slavery depended on surveillance as much as labor extraction.`,
      `Patrols were organized groups of white men empowered to search, stop, question, whip, and capture. Their duties varied by colony and state, but the core logic was consistent. They enforced slavery outside the plantation house and across roads, woods, towns, and neighborhoods. They made white authority mobile. If an enslaved person left without permission, the patrol made that movement dangerous.`,
      `South Carolina is often cited for early formal patrol law, but the broader system spread across slaveholding colonies and states. Patrols could be required service for white men, paid work, militia-connected duty, or local obligation. They were part of government, but they also operated through community custom. That combination made racial control ordinary. A white neighbor could become an arm of the state when Black movement was the thing being policed.`,
      `It is important to be precise about policing origins. Modern police departments in Northern cities developed in the nineteenth century around urbanization, labor conflict, immigration, disorder control, and property protection. Southern policing has a different direct lineage through slave patrols and later Black Codes. These histories overlap, but they are not identical. Precision makes the argument stronger: American policing has multiple origins, and racial control is one of the most important among them.`,
      `After the Civil War, slavery formally ended, but systems of control adapted quickly. Black Codes criminalized unemployment, movement, contract disputes, and everyday independence. Sheriffs, constables, local police, courts, and private violence worked together to push freedpeople back into coerced labor. In many places, the people enforcing the new rules came from the same white communities that had enforced the old ones.`,
      `The Thirteenth Amendment's punishment exception gave states another pathway. Convict leasing and chain gangs turned criminal punishment into labor extraction. Police and courts became entry points into systems that could force Black people back into work under brutal conditions. The patrol did not simply become the modern police department. But the habit of treating Black freedom as a problem for law enforcement survived emancipation.`,
      `During Jim Crow, police enforced segregation in public spaces, protected white mobs or failed to stop them, arrested civil rights activists, and often ignored violence against Black people. The civil rights movement made some of that violence visible through television and photography: Birmingham police dogs, fire hoses, arrests, beatings, and jail cells. Those images shocked many white viewers, but Black communities had long known policing as a system of control as well as occasional protection.`,
      `This history does not mean every police officer today is personally responsible for slave patrols. It means institutions carry inherited practices, assumptions, and legal powers. Stops, surveillance, discretion, force, and the presumption of suspicion have histories. When Black communities describe fear of police encounters, they are speaking from memory reinforced across generations, not from abstraction.`,
      `The present debate over reform and abolition often turns into slogans because the history is flattened. A richer account asks what policing was built to do in different places, how racial control shaped its tools, what changed, what persisted, and what safety might mean for people who have been over-policed and under-protected at the same time.`,
      `Slave patrol history matters because it makes the architecture visible. Slavery was not maintained only by plantations. It required roads, passes, courts, armed men, local law, and public permission to treat Black movement as danger. Understanding that system is not the end of the conversation about policing. It is the beginning of an honest one.`
    ],
    costImpact: [
      `The cost of slave patrols was daily terror and restricted movement. Enslaved people could be stopped, searched, whipped, jailed, or returned to enslavers for trying to visit family, worship, trade, flee, or gather. Free Black people could also be harassed because white authorities often treated Black presence itself as suspect.`,
      `The impact continued after emancipation through Black Codes, convict leasing, Jim Crow policing, and modern debates over stops, surveillance, and use of force. The continuity is not one unbroken institution, but a recurring logic: Black freedom treated as something to monitor and contain.`
    ],
    whyItMattersToday: [
      `Slave patrols matter today because conversations about policing often begin in the present tense, as if distrust appeared suddenly. The history shows why many Black communities understand policing through both protection and threat. Institutions that claim neutrality can carry older assumptions about who looks dangerous and who deserves control.`,
      `The page also matters because precision protects truth. Saying slave patrols were the only origin of American policing is too simple. Ignoring them is dishonest. The responsible lesson is that racial control was one foundational stream in American law enforcement, especially in the South, and its effects did not vanish with emancipation.`,
      `The fuller question is what safety means when the system built to produce order has often produced fear. That question belongs to history and to the present.`
    ],
    connected: [
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'Connects emancipation to the punishment exception and postwar labor control.' },
      { href: '@root/generated/pages/black-codes.html', title: 'Black Codes', description: 'Shows how Southern law adapted racial control after slavery.' },
      { href: '@root/encyclopedia/cointelpro.html', title: 'COINTELPRO', description: 'Links state surveillance to later campaigns against Black political movements.' },
      { href: '@root/generated/pages/george-floyd.html', title: 'George Floyd', description: 'Connects policing history to modern protest and accountability debates.' }
    ],
    externalLinks: [
      { source: 'NCpedia', title: 'Slave Patrols', url: 'https://www.ncpedia.org/slave-patrols' },
      { source: 'National Law Enforcement Museum', title: 'Slave Patrols: An Early Form of American Policing', url: 'https://nleomf.org/slave-patrols-an-early-form-of-american-policing/' },
      { source: 'Equal Justice Initiative', title: 'Slavery in America', url: 'https://eji.org/report/slavery-in-america/' },
      { source: 'Library of Congress', title: 'Slave Code for the District of Columbia', url: 'https://www.loc.gov/collections/slavery-and-the-judiciary-from-1740-to-1860/articles-and-essays/slave-code-for-the-district-of-columbia/' },
      { source: 'National Archives', title: 'The 13th Amendment', url: 'https://www.archives.gov/milestone-documents/13th-amendment' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.ncpedia.org/slave-patrols', 'https://nleomf.org/slave-patrols-an-early-form-of-american-policing/', 'https://www.loc.gov/collections/slavery-and-the-judiciary-from-1740-to-1860/articles-and-essays/slave-code-for-the-district-of-columbia/'],
      supportingSources: ['https://eji.org/report/slavery-in-america/', 'https://www.archives.gov/milestone-documents/13th-amendment'],
      verifiedQuoteSource: 'No quotation included. Policing-origin claims were summarized with careful qualification.',
      sensitiveClaimsReviewed: 'Origins of policing claim, Southern versus Northern policing histories, slave-code enforcement, Black Codes, punishment exception, and present-day policing connections reviewed.',
      materialCorrections: 'Rebuilt legacy page to avoid overbroad first-police-force language while preserving the documented slave-patrol lineage of racial control.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, policing-origin claim review.'
    }
  },
  {
    encyclopediaSlug: 'sojourner-truth',
    fullDate: '2026-06-01',
    dailyDateLabel: 'June 1',
    subject: 'Sojourner Truth',
    category: 'Freedom',
    type: 'People',
    dates: 'c. 1797 - 1883',
    tags: ['abolition', 'women', 'religion', 'activism', 'enslavement'],
    summary: `Sojourner Truth was born Isabella Baumfree in slavery in New York, walked away from bondage, fought in court for the return of her son, renamed herself for a religious mission, and became one of the most powerful abolitionist and women's rights speakers of the nineteenth century. She is often reduced to a single speech, usually in a version she almost certainly did not deliver in that wording. The real Truth is more interesting: Dutch-speaking in childhood, deeply religious, legally strategic, physically imposing, funny, sharp, and politically mobile. Her page matters because she shows freedom as motion: walking away, speaking publicly, suing successfully, selling her own narrative, and refusing the small place the country assigned to Black women.`,
    timeline: [
      { date: 'c. 1797', event: 'Born Isabella Baumfree in Ulster County, New York.' },
      { date: '1826', event: 'Walks away from slavery with her infant daughter before New York slavery fully ends.' },
      { date: '1828', event: 'Wins the return of her son Peter through legal action after he is illegally sold south.' },
      { date: 'June 1, 1843', event: 'Takes the name Sojourner Truth and begins traveling as a preacher.' },
      { date: '1850', event: 'Publishes Narrative of Sojourner Truth with Olive Gilbert.' },
      { date: '1851', event: 'Speaks at a women\'s rights convention in Akron, Ohio.' },
      { date: '1864', event: 'Meets President Abraham Lincoln while working for Black soldiers and freedpeople.' },
      { date: '1860s', event: 'Advocates for land and aid for formerly enslaved people after the Civil War.' },
      { date: 'Nov 26, 1883', event: 'Dies in Battle Creek, Michigan.' },
      { date: 'Present', event: 'Her image and speeches remain central to abolitionist and Black feminist memory.' }
    ],
    fullStory: [
      `Sojourner Truth was born Isabella Baumfree in Ulster County, New York, around 1797. New York slavery did not look identical to plantation slavery in the Deep South, but it was slavery. She was sold away from family, forced to work, and denied control over her body and future. Her first language was Dutch, a detail often lost when later versions make her sound like a Southern caricature.`,
      `In 1826, before New York's gradual abolition fully took effect, Isabella walked away with her infant daughter. She later said she did not run off, because she believed she had walked away by daylight. That distinction mattered to her. She was claiming moral authority over an unjust system, not asking permission from it.`,
      `Her legal fight for her son Peter was extraordinary. Peter had been illegally sold into slavery in Alabama. Isabella used the courts to secure his return, making her one of the first Black women known to win such a case against a white man in the United States. The victory did not mean the legal system was fair. It meant she forced a hostile system to recognize a claim it preferred to ignore.`,
      `Religion shaped the rest of her public life. In 1843, she took the name Sojourner Truth, a name that described movement and mission. She traveled as a preacher, abolitionist, and reform speaker. Her authority came from scripture, personal survival, wit, and a commanding public presence. She did not need formal schooling to expose the moral failures of educated audiences.`,
      `Truth's Narrative, first published in 1850 with Olive Gilbert, helped support her work financially and politically. Like many formerly enslaved speakers, she had to turn her life into evidence for audiences who should not have needed proof that slavery was brutal. She sold photographs and books, controlled parts of her public image, and used print culture as well as speech.`,
      `The famous Akron speech has a complicated history. The version most people know, with repeated "Ain't I a Woman?" phrasing, was published years later by Frances Dana Gage and used a Southern dialect that did not match Truth's Dutch-speaking New York background. A shorter earlier version recorded by Marius Robinson is considered closer by many scholars. The point is not to discard the speech's power, but to recognize how later editors reshaped Black women's words for audiences.`,
      `Truth connected abolition and women's rights, but not always in ways that made white reformers comfortable. She challenged the idea that womanhood meant delicacy, dependence, or whiteness. Her own body, labor, motherhood, and survival contradicted the narrow gender ideals often used in women's rights spaces. She made people confront the fact that Black women had been excluded from both the category of citizen and the protected category of woman.`,
      `During and after the Civil War, Truth supported Black soldiers, assisted formerly enslaved people, and advocated for land. She understood that emancipation without resources left people vulnerable. Freedom needed land, wages, family stability, and protection. Her later activism was not a footnote to her speeches. It was part of the same lifelong insistence that freedom had to become material.`,
      `Truth's memory has often been softened into inspiration. The fuller story is stranger and stronger. She was religious and politically practical, humorous and severe, famous and financially precarious, celebrated and misquoted. She made a life out of movement because the world kept trying to fix her in place.`,
      `Sojourner Truth matters because she understood the power of naming. She renamed herself, named injustice in public, and forced the country to hear a Black woman as witness, theologian, mother, litigant, and political thinker.`
    ],
    costImpact: [
      `Truth paid the costs of slavery, family separation, public exposure, poverty, and constant travel. Even after becoming famous, she had to sell books and photographs to support herself. Her words were also reshaped by others, showing how Black women's authority could be celebrated and distorted at the same time.`,
      `Her impact was enormous across abolition, women's rights, Black religious speech, and public memory. She linked legal action, testimony, faith, and gender critique in ways later movements would continue to draw from.`
    ],
    whyItMattersToday: [
      `Sojourner Truth matters today because her most famous words teach a lesson about memory as well as justice. If the popular version of a speech is partly a later reconstruction, responsible history has to ask why that version became useful and what it changed about her voice.`,
      `Her life also shows that Black feminism did not begin in universities or in the twentieth century. Truth challenged racism inside women's rights and sexism inside public life long before the language people use now existed.`,
      `The fuller lesson is that freedom is not one act. It is escape, law, speech, income, faith, family, land, and the right to define yourself in public.`
    ],
    connected: [
      { href: '@root/encyclopedia/harriet-tubman.html', title: 'Harriet Tubman', description: 'Connects self-liberation, faith, public memory, and the fight against slavery.' },
      { href: '@root/generated/pages/frances-harper.html', title: 'Frances E.W. Harper', description: 'Links abolition, women\'s rights, literature, and Black women\'s public speech.' },
      { href: '@root/generated/pages/solomon-northup.html', title: 'Solomon Northup', description: 'Another narrative of slavery, law, family separation, and public testimony.' },
      { href: '@root/generated/pages/douglass-fourth-of-july.html', title: 'Frederick Douglass\'s Fourth of July Speech', description: 'Connects abolitionist speech to the moral indictment of American democracy.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Sojourner Truth', url: 'https://www.nps.gov/people/sojourner-truth.htm' },
      { source: 'National Women\'s History Museum', title: 'Sojourner Truth', url: 'https://www.womenshistory.org/education-resources/biographies/sojourner-truth' },
      { source: 'Library of Congress', title: 'Narrative of Sojourner Truth', url: 'https://www.loc.gov/item/11012984/' },
      { source: 'Sojourner Truth Project', title: 'Compare the Speeches', url: 'https://www.thesojournertruthproject.com/compare-the-speeches/' },
      { source: 'National Abolition Hall of Fame', title: 'Sojourner Truth', url: 'https://www.nationalabolitionhalloffameandmuseum.org/sojourner-truth.html' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/sojourner-truth.htm', 'https://www.loc.gov/item/11012984/', 'https://www.thesojournertruthproject.com/compare-the-speeches/'],
      supportingSources: ['https://www.womenshistory.org/education-resources/biographies/sojourner-truth', 'https://www.nationalabolitionhalloffameandmuseum.org/sojourner-truth.html'],
      verifiedQuoteSource: 'No quotation included because the most famous speech wording is textually disputed.',
      sensitiveClaimsReviewed: 'Birth year uncertainty, Dutch-speaking background, son Peter court case, Akron speech versions, and abolition/women\'s rights framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond rename and escape into legal action, religious mission, narrative publication, disputed speech memory, and land advocacy.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, disputed-speech and legal-claim review.'
    }
  },
  {
    encyclopediaSlug: 'solomon-northup',
    fullDate: '2026-06-09',
    dailyDateLabel: 'June 9',
    subject: 'Solomon Northup',
    category: 'Witness',
    type: 'People',
    dates: '1808 - after 1857',
    tags: ['enslavement', 'literature', 'law', 'family', 'resistance'],
    summary: `Solomon Northup was born free in New York, kidnapped in Washington, D.C., sold into slavery in Louisiana, and held for twelve years before allies helped prove his identity and secure his release. His memoir, Twelve Years a Slave, did more than tell a personal story. It exposed how slavery threatened free Black life across state lines, how law could fail when documents were stripped away, and how testimony became political evidence. His page matters because Northup's freedom was not stolen by accident alone. It was stolen by a system where Black personhood could be doubted, traded, renamed, and forced to prove itself.`,
    timeline: [
      { date: 'July 10, 1808', event: 'Born free in Minerva, New York.' },
      { date: '1829', event: 'Marries Anne Hampton.' },
      { date: '1841', event: 'Travels to Washington, D.C., for work and is kidnapped.' },
      { date: '1841', event: 'Is sold into slavery in Louisiana under the name Platt.' },
      { date: '1840s', event: 'Is forced to labor on plantations in the Red River region.' },
      { date: '1852', event: 'Canadian carpenter Samuel Bass helps send letters to Northup\'s contacts in New York.' },
      { date: 'Jan 1853', event: 'Is legally restored to freedom with help from Henry B. Northup.' },
      { date: '1853', event: 'Publishes Twelve Years a Slave.' },
      { date: '1850s', event: 'Speaks publicly for abolition and seeks legal accountability.' },
      { date: 'After 1857', event: 'His later life and death remain uncertain in the historical record.' }
    ],
    fullStory: [
      `Solomon Northup was born free in New York, into a family that knew slavery's shadow but not legal enslavement as his own status. He worked, played violin, married Anne Hampton, and raised children. His freedom was ordinary in the way all freedom should be ordinary: a daily condition, not a miracle.`,
      `In 1841, Northup accepted an offer from two men who said they wanted him to perform as a musician. He traveled to Washington, D.C., where slavery was legal. There he was drugged, kidnapped, beaten, and sold. His free papers were gone. His name was changed to Platt. The system did not need to prove he was enslaved. It required him to prove he was free, while denying him the tools to do so.`,
      `Northup was transported to Louisiana and forced into plantation labor. Twelve Years a Slave names places, people, tools, crops, punishments, and routines with painful precision. That precision is one reason historians value the narrative. It is not only a memory of suffering. It is a map of how slavery worked: labor discipline, surveillance, sale, violence, skill, fear, and small acts of survival.`,
      `His enslavers differed in temperament, but the system remained violent under all of them. Northup described Ford with some complexity and Edwin Epps as brutal, but no enslaver could be made benevolent by comparison. The central crime was ownership itself. Northup's narrative is clear that forced labor, family separation, and legal power made cruelty ordinary.`,
      `Northup's violin also matters. Music brought moments of movement and income, but it did not make him free. Skill could be exploited under slavery just as physical labor was exploited. The same talent that had supported him in freedom could be used inside bondage for someone else's benefit.`,
      `His return depended on communication. Samuel Bass, a white Canadian carpenter, helped send letters to people in New York. Henry B. Northup, whose family had once enslaved Solomon's father and later had ties to his family, traveled south with legal authority to identify and retrieve him. Northup's freedom required documentation, witnesses, state action, and risk from people willing to challenge local slaveholding power.`,
      `After release, Northup published Twelve Years a Slave with David Wilson. The book became part of abolitionist literature, offering Northern readers an account of kidnapping and plantation slavery by someone who had known freedom first. It showed that the boundary between free state and slave state was fragile for Black people. A trip could become disappearance.`,
      `The narrative also had to persuade readers who were trained by racism to doubt Black testimony. Northup named white witnesses, locations, dates, and legal actors partly because credibility was a political battlefield. His book carries pain, but it also carries documentation. He wrote as a man trying to restore not only his own name, but the record of what had been done to him.`,
      `Northup tried to seek justice against his kidnappers, but legal barriers and racism limited accountability. Black testimony restrictions and jurisdictional complications made prosecution difficult. His story therefore exposes a second theft: the law could help restore him, yet fail to punish the people who stole twelve years from him.`,
      `The end of Northup's life is uncertain. Records after the late 1850s are fragmentary, and claims about his death should be treated carefully. That uncertainty is part of the historical wound. A man who wrote one of the clearest accounts of American slavery still disappears partly from the record.`,
      `Solomon Northup matters because his life breaks the false border between slavery and freedom. Slavery did not stay politely where free Black people could avoid it. It reached, kidnapped, renamed, and sold. His narrative made that reach visible and gave abolitionists evidence that freedom without protection was dangerously fragile.`
    ],
    costImpact: [
      `The cost to Northup was twelve stolen years, separation from his wife and children, physical violence, forced labor, renamed identity, and the psychological terror of knowing he was free while being treated as property. His family also lost a husband and father for more than a decade.`,
      `The impact of his testimony was immediate and lasting. Twelve Years a Slave gave abolitionists detailed evidence and gives historians one of the most important first-person accounts of slavery in the United States. It also documents how kidnapping made free Black life vulnerable.`
    ],
    whyItMattersToday: [
      `Solomon Northup matters today because rights are fragile when a system can demand proof from the person it has already stripped of documents, witnesses, and credibility. His kidnapping shows how law can fail when racism decides whose word counts.`,
      `His story also teaches readers to value testimony as evidence. Northup named people and places because he wanted the record to withstand denial. The detail was not literary decoration. It was a survival strategy turned into public history.`,
      `The fuller lesson is that freedom must be protected by more than geography. Northup was free in New York, but slavery's power crossed borders.`
    ],
    connected: [
      { href: '@root/generated/pages/sojourner-truth.html', title: 'Sojourner Truth', description: 'Connects slavery, legal action, family separation, and public testimony.' },
      { href: '@root/encyclopedia/enslaved-labor.html', title: 'Enslaved Labor', description: 'Places Northup\'s forced labor inside slavery\'s economic system.' },
      { href: '@root/generated/pages/frederick-douglass.html', title: 'Frederick Douglass', description: 'Another formerly enslaved writer who used narrative as abolitionist evidence.' },
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'Connects slavery\'s formal end to the constitutional language that followed.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Twelve Years a Slave', url: 'https://www.loc.gov/item/10034857/' },
      { source: 'National Park Service', title: 'Commemorate the Life of Solomon Northup', url: 'https://www.nps.gov/wori/learn/news/commemorate-the-life-of-solomon-northup.htm' },
      { source: 'EDSITEment', title: 'Twelve Years a Slave: Analyzing Slave Narratives', url: 'https://edsitement.neh.gov/lesson-plans/twelve-years-slave-analyzing-slave-narratives' },
      { source: 'Documenting the American South', title: 'Twelve Years a Slave', url: 'https://docsouth.unc.edu/fpn/northup/northup.html' },
      { source: 'Encyclopaedia Britannica', title: 'Solomon Northup', url: 'https://www.britannica.com/biography/Solomon-Northup' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.loc.gov/item/10034857/', 'https://docsouth.unc.edu/fpn/northup/northup.html', 'https://www.nps.gov/wori/learn/news/commemorate-the-life-of-solomon-northup.htm'],
      supportingSources: ['https://edsitement.neh.gov/lesson-plans/twelve-years-slave-analyzing-slave-narratives', 'https://www.britannica.com/biography/Solomon-Northup'],
      verifiedQuoteSource: 'No quotation included. Narrative claims were summarized from digitized editions and institutional context.',
      sensitiveClaimsReviewed: 'Kidnapping, drugging, sale, enslaver descriptions, restoration to freedom, failed prosecution, and uncertain death date reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond kidnapping summary into free Black vulnerability, legal proof, plantation labor detail, publication, and archival uncertainty.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, kidnapping/legal-testimony claim review.'
    }
  },
  {
    encyclopediaSlug: 'sports-integration',
    outputPath: 'encyclopedia/sports-integration.html',
    fullDate: '2026-02-21',
    dailyDateLabel: 'February 21',
    subject: 'Sports Integration Beyond Jackie Robinson',
    category: 'Sports',
    type: 'Movement',
    dates: '1940s - 1960s',
    tags: ['sports', 'civil-rights', 'segregation', 'self-determination', 'labor'],
    summary: `Jackie Robinson's 1947 debut with the Brooklyn Dodgers matters, but sports integration was never one door opening once. The NFL had Black players early, then shut them out for years before Kenny Washington and Woody Strode returned in 1946. The NBA integrated in 1950 through Chuck Cooper, Nat Clifton, and Earl Lloyd. Althea Gibson broke tennis barriers. Charlie Sifford forced golf to confront its Caucasians-only clause. Each sport had its own gatekeepers, timelines, costs, and myths. This page matters because the simplified Jackie-only story can make integration look cleaner than it was. The fuller history is sport by sport, contract by contract, trip by trip, and insult by insult.`,
    timeline: [
      { date: '1920s', event: 'Fritz Pollard plays and coaches in early professional football before the NFL shuts out Black players.' },
      { date: '1933', event: 'NFL owners begin an informal exclusion of Black players.' },
      { date: '1946', event: 'Kenny Washington and Woody Strode reintegrate the NFL with the Los Angeles Rams.' },
      { date: 'Apr 15, 1947', event: 'Jackie Robinson debuts with the Brooklyn Dodgers.' },
      { date: '1950', event: 'Chuck Cooper, Nat Clifton, and Earl Lloyd integrate the NBA in different firsts.' },
      { date: '1950', event: 'Althea Gibson becomes the first Black player admitted to the U.S. National Championships.' },
      { date: '1957-1958', event: 'Gibson wins Wimbledon and U.S. National titles in consecutive years.' },
      { date: '1958', event: 'Willie O\'Ree becomes the first Black player in the National Hockey League.' },
      { date: '1961', event: 'The PGA removes its Caucasians-only clause after pressure and legal threats.' },
      { date: '1967', event: 'Charlie Sifford wins the Greater Hartford Open, becoming the first Black golfer to win a PGA Tour event.' }
    ],
    fullStory: [
      `The Jackie Robinson story is essential, but it can become too neat when it stands alone. Baseball's integration did not automatically integrate American sports. Each sport had its own owners, commissioners, clubs, sponsors, fans, hotels, locker rooms, and unwritten rules. Black athletes had to fight through each system separately.`,
      `Professional football shows how progress can move backward. Black players such as Fritz Pollard played in the early NFL, and Pollard coached in the 1920s. Then the league entered an informal period of exclusion beginning in the 1930s. It was not always written as a rule, which made it easier for owners to deny. Kenny Washington and Woody Strode reintegrated the league with the Los Angeles Rams in 1946, partly because the team wanted to use the publicly owned Los Angeles Memorial Coliseum and faced pressure to integrate.`,
      `Basketball integrated in 1950 through three different firsts. Chuck Cooper became the first Black player drafted by an NBA team. Nat "Sweetwater" Clifton became the first Black player to sign an NBA contract. Earl Lloyd became the first Black player to appear in a regular-season NBA game. The fact that the first has to be divided into three parts tells readers something about how institutions record change. Integration was not one clean ceremony. It was a sequence of transactions and appearances inside a hostile society.`,
      `Tennis had its own gate. Althea Gibson was admitted to the U.S. National Championships in 1950 after pressure from allies, including Alice Marble. Gibson did not want to be reduced to a symbol, but she carried symbolic weight anyway. She became a champion at the highest level, winning major titles and proving that exclusion had never been about ability. Her later move into professional golf showed how barriers could follow an athlete even after triumph in another sport.`,
      `Golf resisted through explicit language. The PGA's Caucasians-only clause made exclusion official until 1961. Charlie Sifford challenged that world through persistence, legal pressure, and excellence on the United Golf Association circuit and then the PGA Tour. He faced threats, insults, and isolation. When he finally won PGA Tour events, the victories represented more than trophies. They were breaches in a sport built around private clubs, sponsorship, and racial gatekeeping.`,
      `Hockey's story is also part of this map. Willie O'Ree debuted for the Boston Bruins in 1958, becoming the first Black player in the NHL. He faced racial abuse and played with vision loss in one eye, a fact he kept quiet to protect his chance. His later work as an ambassador helped the sport confront how long its barriers had lasted.`,
      `The costs across sports were practical and intimate. Black athletes dealt with segregated hotels, restaurants that refused service, hostile crowds, exclusion from endorsements, limited roster spots, and the pressure to be flawless. A white rookie could struggle and still be treated as an individual. A Black barrier breaker could be made to represent everyone and blamed if integration made white people uncomfortable.`,
      `Sports integration also had limits. Letting Black athletes play did not immediately produce Black coaches, executives, owners, athletic directors, agents, or decision-makers. Talent on the field or court could be welcomed while power off it remained white. That pattern continues to shape debates over coaching pipelines, ownership, media treatment, and labor power.`,
      `The fuller sports integration story does not diminish Jackie Robinson. It gives him company and context. It shows that Robinson's courage belonged to a wider generation of athletes who forced institutions to change in different ways. Some were famous. Some remain footnotes. All of them changed the business of American sport by making exclusion harder to defend.`,
      `This history matters because sports are often sold as meritocracy. The record says otherwise. Talent was never enough when the gatekeepers had decided the gate was white. Integration required pressure, law, public facilities, allies, lawsuits, and athletes willing to play under conditions designed to break them.`
    ],
    costImpact: [
      `The cost to Black athletes included threats, isolation, unequal pay, limited chances, blocked endorsements, segregated travel, and the burden of representing more than themselves. Many had prime years stolen by exclusion before they ever got access to major leagues or tournaments.`,
      `The impact was cultural and economic. Integrated sports changed fan bases, styles of play, business models, and public imagination. But access to play did not automatically create access to ownership or leadership, which is why the story remains unfinished.`
    ],
    whyItMattersToday: [
      `Sports integration matters today because sports still like to tell themselves they are pure meritocracies. History shows that institutions excluded Black athletes even when talent was obvious. If gatekeepers could deny greatness then, readers should be skeptical when current inequalities are explained as natural pipelines or personal preference.`,
      `The story also helps separate visibility from power. Black athletes can dominate competition while ownership, coaching, media, and governance remain unequal. Integration opened fields and courts. It did not finish the struggle over who controls the game.`,
      `The fuller lesson is that symbolic firsts are beginnings. The harder work is changing the structure that made the first necessary.`
    ],
    connected: [
      { href: '@root/encyclopedia/jackie-robinson.html', title: 'Jackie Robinson', description: 'The baseball breakthrough often used as the starting point for sports integration memory.' },
      { href: '@root/encyclopedia/althea-gibson.html', title: 'Althea Gibson', description: 'The tennis champion who broke barriers beyond baseball\'s timeline.' },
      { href: '@root/generated/pages/larry-doby.html', title: 'Larry Doby', description: 'The American League barrier breaker whose story is often overshadowed.' },
      { href: '@root/encyclopedia/kareem-abdul-jabbar.html', title: 'Kareem Abdul-Jabbar', description: 'Connects athletic greatness to public voice and power beyond the court.' }
    ],
    externalLinks: [
      { source: 'National Museum of African American History and Culture', title: 'Sports: Leveling the Playing Field', url: 'https://nmaahc.si.edu/explore/exhibitions/sports' },
      { source: 'NFL', title: 'Kenny Washington Belongs in the Hall of Fame', url: 'https://www.nfl.com/news/kenny-washington-belongs-in-the-hall-of-fame-0ap2000000341520' },
      { source: 'NBA History', title: 'NBA Pioneers', url: 'https://www.nba.com/news/history-nba-legend-earl-lloyd' },
      { source: 'International Tennis Hall of Fame', title: 'Althea Gibson', url: 'https://www.tennisfame.com/hall-of-famers/inductees/althea-gibson/' },
      { source: 'PGA Tour', title: 'Charles Sifford Player Profile', url: 'https://www.pgatour.com/player/02091/charles-sifford' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://nmaahc.si.edu/explore/exhibitions/sports', 'https://www.nfl.com/news/kenny-washington-belongs-in-the-hall-of-fame-0ap2000000341520', 'https://www.nba.com/news/history-nba-legend-earl-lloyd'],
      supportingSources: ['https://www.tennisfame.com/hall-of-famers/inductees/althea-gibson/', 'https://www.pgatour.com/player/02091/charles-sifford'],
      verifiedQuoteSource: 'No quotation included. First-claim and integration chronology are summarized from institutional sports-history sources.',
      sensitiveClaimsReviewed: 'NFL informal exclusion, three NBA firsts, Gibson admission, O\'Ree debut, PGA Caucasians-only clause, and leadership-versus-player-access distinction reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond Jackie-only contrast into sport-specific timelines, legal/economic pressure, athlete costs, and unfinished leadership access.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, sports-integration first-claim review.'
    }
  },
  {
    encyclopediaSlug: 'stokely-carmichael',
    fullDate: '2026-06-29',
    dailyDateLabel: 'June 29',
    subject: 'Stokely Carmichael / Kwame Ture',
    category: 'Political Power',
    type: 'People',
    dates: '1941 - 1998',
    tags: ['civil-rights', 'politics', 'self-determination', 'activism', 'protest'],
    summary: `Stokely Carmichael, later Kwame Ture, did not simply shout "Black Power" and walk away from the civil rights movement. He was a disciplined SNCC organizer shaped by jail, Mississippi, Lowndes County, the March Against Fear, antiwar politics, Pan-Africanism, and frustration with liberal promises that left Black communities exposed. The phrase "Black Power" made him famous and feared, but his life before and after the slogan is the real education. His page matters because movements change when conditions change. Carmichael's shift from integrationist student activism to Black self-determination and global Pan-African politics shows a generation arguing over what freedom required after courage alone had proved insufficient.`,
    timeline: [
      { date: 'June 29, 1941', event: 'Born in Port of Spain, Trinidad.' },
      { date: '1952', event: 'Moves to New York City to join his parents.' },
      { date: '1960', event: 'Enters Howard University and becomes active in student protest.' },
      { date: '1961', event: 'Joins the Freedom Rides and is jailed in Mississippi.' },
      { date: '1964', event: 'Organizes in Mississippi during Freedom Summer.' },
      { date: '1965', event: 'Works in Lowndes County, Alabama, helping build the Lowndes County Freedom Organization.' },
      { date: '1966', event: 'Becomes chair of SNCC and popularizes "Black Power" during the March Against Fear.' },
      { date: '1967', event: 'Publishes Black Power with Charles V. Hamilton.' },
      { date: '1969', event: 'Moves to Guinea and deepens Pan-African political work.' },
      { date: 'Nov 15, 1998', event: 'Dies in Conakry, Guinea.' }
    ],
    fullStory: [
      `Stokely Carmichael was born in Trinidad and moved to New York as a child. He came of age in the Bronx and then at Howard University, where student activism was reshaping the meaning of Black education. Howard gave him ideas, networks, and a political home, but the movement gave him a field education that no classroom could contain.`,
      `He joined the Freedom Rides in 1961 and was jailed in Mississippi's Parchman prison. Jail was not symbolic. It was cold, humiliating, dangerous, and meant to break people. For Carmichael and many SNCC organizers, jail also became a place where fear was tested and solidarity deepened. Nonviolence was not an abstract philosophy there. It was a discipline practiced under threat.`,
      `Carmichael worked in Mississippi and Alabama, where the gap between federal promises and local terror was impossible to ignore. SNCC organizers faced beatings, arrests, shootings, and economic retaliation while trying to register voters and build local power. They learned that national sympathy could fade quickly and that Black communities needed institutions they controlled.`,
      `Lowndes County, Alabama, became central to Carmichael's politics. The county was majority Black but controlled by white political power. Carmichael helped build the Lowndes County Freedom Organization, an independent Black political organization whose black panther symbol later influenced the Black Panther Party. The work was not only rhetorical. It involved canvassing, political education, party building, and protection in a county where participation could be deadly.`,
      `During the 1966 March Against Fear, after James Meredith was shot, Carmichael used the phrase "Black Power" publicly in a way that electrified supporters and alarmed critics. Some white liberals heard rejection. Some civil rights leaders worried it would invite repression or alienate allies. Many younger Black activists heard honesty: a demand for self-definition, political control, economic power, and freedom from begging white institutions for recognition.`,
      `The phrase did not mean only one thing. For Carmichael and Charles V. Hamilton, Black Power included political organization, community control, coalition from a position of strength, and institutional change. For others, it became cultural pride, armed self-defense, separatism, electoral power, or revolutionary nationalism. The phrase's power came partly from that range. It named a feeling the older civil rights vocabulary did not hold.`,
      `Carmichael's politics kept moving. He criticized the Vietnam War, connected Black freedom to anti-colonial struggles, and eventually left the United States for Guinea. He took the name Kwame Ture in honor of Kwame Nkrumah and Sekou Toure. His Pan-Africanism was not a late-life hobby. It reflected a belief that Black liberation in the United States was tied to Africa, the Caribbean, and global struggles against imperialism.`,
      `His life also included tensions. Carmichael's rhetoric could be sharp enough to alienate potential allies. His relationship to gender politics and movement sexism has been criticized, including the often-cited SNCC joke about women's position in the movement. Some lines attributed to him require careful context, but the broader issue is real: Black Power spaces, like earlier civil rights spaces, could reproduce sexism even while fighting racism.`,
      `The state watched him closely. Surveillance, informants, and repression shaped the world around Black radical politics. Carmichael was not feared only because of a slogan. He was feared because he helped people think about power in ways that did not leave white institutions in charge of the timetable.`,
      `Kwame Ture matters because he forces readers to study movement evolution without treating it as betrayal. The civil rights movement did not simply become more radical because young people were impatient. It changed because organizers had learned from violence, broken promises, local courage, and the limits of symbolic victories. Black Power was a demand that freedom include control.`
    ],
    costImpact: [
      `Carmichael paid with arrests, surveillance, public vilification, exile, and the narrowing of how many Americans were willing to hear him. The phrase that made him famous also made it easier for critics to flatten his organizing into militancy alone. He carried the cost of becoming a symbol before the public understood the work underneath.`,
      `His impact was enormous. Black Power changed civil rights language, influenced independent political organizing, shaped the Black Panther Party, strengthened cultural pride, and connected U.S. Black freedom to global anti-colonial politics. It also forced older movement organizations to confront questions they could not avoid forever.`
    ],
    whyItMattersToday: [
      `Stokely Carmichael and Kwame Ture matter today because movements still debate reform, self-determination, coalition, electoral power, protest, and global solidarity. His life shows that those debates are not distractions from freedom work. They are part of freedom work.`,
      `His story also warns against reducing radical politics to tone. Many critics focused on how "Black Power" sounded. Carmichael was asking who had power, who controlled institutions, who set strategy, and why Black communities should remain dependent on white approval. Those are structural questions, not merely rhetorical ones.`,
      `The fuller lesson is that movements evolve because people learn from experience. Carmichael's evolution was shaped by the ground under his feet: buses, jails, counties, ballots, bullets, and borders.`
    ],
    connected: [
      { href: '@root/generated/pages/freedom-riders.html', title: 'Freedom Riders', description: 'Connects Carmichael\'s early activism to jail, discipline, and interstate protest.' },
      { href: '@root/generated/pages/mississippi-freedom-summer.html', title: 'Mississippi Freedom Summer', description: 'Places SNCC organizing inside local Black struggle and white terror.' },
      { href: '@root/encyclopedia/black-power-salute.html', title: '1968 Olympic Black Power Salute', description: 'Shows how Black Power language moved through global sport and protest.' },
      { href: '@root/generated/pages/black-panther-party.html', title: 'The Black Panther Party', description: 'Connects Lowndes County symbolism and self-defense politics to later organizing.' }
    ],
    externalLinks: [
      { source: 'SNCC Digital Gateway', title: 'Stokely Carmichael', url: 'https://snccdigital.org/people/stokely-carmichael/' },
      { source: 'King Institute', title: 'Stokely Carmichael', url: 'https://kinginstitute.stanford.edu/carmichael-stokely' },
      { source: 'National Archives', title: 'Black Power', url: 'https://www.archives.gov/research/african-americans/black-power' },
      { source: 'Encyclopaedia Britannica', title: 'Stokely Carmichael', url: 'https://www.britannica.com/biography/Stokely-Carmichael' },
      { source: 'BlackPast', title: 'Stokely Carmichael / Kwame Ture', url: 'https://www.blackpast.org/african-american-history/carmichael-stokely-kwame-ture-1941-1998/' }
    ],
    research: {
      status: 'batch-20-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://snccdigital.org/people/stokely-carmichael/', 'https://kinginstitute.stanford.edu/carmichael-stokely', 'https://www.archives.gov/research/african-americans/black-power'],
      supportingSources: ['https://www.britannica.com/biography/Stokely-Carmichael', 'https://www.blackpast.org/african-american-history/carmichael-stokely-kwame-ture-1941-1998/'],
      verifiedQuoteSource: 'No quotation included. Black Power explanations were summarized rather than quoted because exact short wording varies by source.',
      sensitiveClaimsReviewed: 'Black Power phrase, Lowndes County role, Pan-African name change, surveillance, sexism criticism, and exile framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond slogan into SNCC organizing, Lowndes County, movement debates, Pan-Africanism, and state surveillance.',
      finalStatus: 'Batch 20 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, movement-evolution claim review.'
    }
  }
];

module.exports = {
  ENTRIES,
};
