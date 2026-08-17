const RESEARCH_DATE = '2026-08-17';

const ENTRIES = [
  {
    encyclopediaSlug: 'plessy-v-ferguson',
    fullDate: '2026-05-18',
    dailyDateLabel: 'May 18',
    subject: 'Plessy v. Ferguson',
    category: 'Law',
    type: 'Case',
    dates: '1896',
    tags: ['law', 'segregation', 'jim-crow', 'civil-rights', 'government'],
    summary: `Plessy v. Ferguson did not invent segregation, but it gave segregation a constitutional shield. The case began with a planned challenge to Louisiana's Separate Car Act and ended with the Supreme Court saying racial separation did not violate the Fourteenth Amendment as long as the facilities were supposedly equal. That word, equal, did enormous damage. It let states call exclusion fairness, let white officials decide what equality meant, and helped Jim Crow spread through schools, trains, parks, hospitals, voting, housing, and daily public life. This page matters because Plessy shows how a legal sentence can turn a racial order into public policy. It also shows that dissent existed inside the decision from the start.`,
    timeline: [
      { date: '1868', event: 'The Fourteenth Amendment is ratified, promising equal protection of the laws.' },
      { date: '1890', event: 'Louisiana passes the Separate Car Act requiring separate railway cars for Black and white passengers.' },
      { date: 'June 7, 1892', event: 'Homer Plessy boards a white-only railroad car in New Orleans as part of a planned legal challenge.' },
      { date: '1892', event: 'Judge John Howard Ferguson rules against Plessy in state court.' },
      { date: 'May 18, 1896', event: 'The U.S. Supreme Court upholds segregation in Plessy v. Ferguson.' },
      { date: '1896', event: 'Justice John Marshall Harlan files the lone dissent.' },
      { date: '1896-1954', event: 'The decision helps states defend Jim Crow segregation for more than half a century.' },
      { date: '1954', event: 'Brown v. Board of Education rejects separate public schools as inherently unequal.' },
      { date: '2009', event: 'Descendants of Homer Plessy and Judge Ferguson create a foundation for historical education.' },
      { date: '2022', event: 'Louisiana posthumously pardons Homer Plessy.' }
    ],
    fullStory: [
      `Plessy v. Ferguson began in New Orleans, a city where race, law, ancestry, class, and public space had long collided. After Reconstruction, Louisiana and other Southern states moved to reassert white control through law. The Separate Car Act of 1890 required railroads to provide separate passenger cars for white and Black riders. It was part of a larger counterrevolution against Black citizenship, not an isolated transportation rule.`,
      `The challenge was organized. A group of Black and Creole activists in New Orleans, often known as the Citizens' Committee, chose Homer Plessy to test the law. Plessy was a shoemaker and a man of mixed ancestry who was legally classified as Black under Louisiana law. On June 7, 1892, he bought a first-class ticket, sat in a white-only car, identified himself as Black, and was arrested. The arrest was not a surprise. It was the point.`,
      `The case asked whether Louisiana could force racial separation on a common carrier without violating the Thirteenth and Fourteenth Amendments. Plessy's lawyers argued that the law marked Black people with a badge of inferiority and denied equal citizenship. Louisiana argued that separation was a reasonable exercise of state police power and that the law treated both races equally because each was assigned a separate space.`,
      `The Supreme Court accepted Louisiana's logic. Justice Henry Billings Brown wrote for the majority that enforced separation did not necessarily stamp Black people as inferior. If Black people felt inferior because of segregation, the Court suggested, that was their interpretation rather than the law's meaning. That move was brutal because it made racism look like a feeling instead of a structure. The state could command separation, but Black people were blamed for noticing what separation meant.`,
      `The phrase "separate but equal" became the shorthand, though equality was never the lived reality. Black facilities were routinely underfunded, inferior, inconvenient, or missing altogether. More than that, equality could not survive a law whose purpose was to protect white space from Black presence. Separation was not neutral organization. It was racial hierarchy with a legal vocabulary.`,
      `Justice John Marshall Harlan dissented. Harlan had his own racial assumptions, and his dissent should not be romanticized as modern antiracism. Still, he saw clearly that the ruling would become infamous and that the Constitution should not tolerate caste. His dissent gave later civil rights lawyers language to use against the majority, but it did not protect Black travelers, students, patients, voters, workers, or families in the decades that followed.`,
      `Plessy helped authorize a world of daily humiliations. Segregated railroad cars were one scene. The same logic supported segregated schools, parks, waiting rooms, water fountains, theaters, hospitals, cemeteries, and courtrooms. The decision also encouraged officials to pretend that equal treatment existed on paper while inequality was arranged through budgets, policing, intimidation, and custom.`,
      `The case also matters because it exposes the limits of courts when the justices are willing to defer to racial power. The Fourteenth Amendment had been written after slavery to protect citizenship and equal protection. By 1896, the Court narrowed that promise until states could build a caste system under it. Black communities did not misunderstand the decision. They lived its consequences.`,
      `Civil rights lawyers spent decades attacking the structure Plessy protected. Charles Hamilton Houston, Thurgood Marshall, the NAACP Legal Defense Fund, local plaintiffs, teachers, parents, students, and communities built the record that led to Brown v. Board of Education in 1954. Brown did not erase Plessy from daily life overnight, but it rejected the central lie that state-enforced separation could be equal.`,
      `Plessy is not only a bad court case in a textbook. It is a warning about legal language. A society can place injustice behind calm words and ask everyone to call it order. The case teaches readers to ask who defines equality, who benefits from separation, and what happens when courts treat racial domination as reasonable administration.`
    ],
    quote: {
      text: 'Our Constitution is color-blind.',
      cite: 'Justice John Marshall Harlan, dissenting in Plessy v. Ferguson'
    },
    costImpact: [
      `The cost of Plessy was measured in generations of public humiliation, underfunded services, restricted movement, legal exclusion, and state-backed violence. Black people did not simply sit in different spaces. They were told by law that their presence could contaminate white public life. That message shaped schooling, travel, medical care, voting, and work.`,
      `The impact was national even when Jim Crow looked regional. Plessy gave segregationists constitutional language. It also forced civil rights lawyers and communities to spend decades proving what Black people already knew: separation was designed to produce inequality.`
    ],
    whyItMattersToday: [
      `Plessy matters today because inequality is still often defended through neutral-sounding language. Choice, tradition, local control, safety, efficiency, and order can all hide who is being excluded and who is being protected. The lesson is not that every separate thing is automatically Plessy. The lesson is to inspect the power underneath the arrangement.`,
      `The case also teaches that a constitutional promise can be weakened by interpretation. The Fourteenth Amendment did not disappear in 1896. The Court read it narrowly enough to let Jim Crow breathe. Rights on paper need institutions willing to enforce them, and communities willing to insist that the words mean something in real life.`,
      `Learning Plessy well changes the famous phrase. "Separate but equal" was not a compromise that failed. It was a lie that worked exactly as designed.`
    ],
    connected: [
      { href: '@root/generated/pages/dred-scott.html', title: 'Dred Scott v. Sandford', description: 'Shows an earlier Supreme Court decision that narrowed Black rights through constitutional interpretation.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'Connects the legal campaign that finally rejected separate schools as inherently unequal.' },
      { href: '@root/generated/pages/charles-hamilton-houston.html', title: 'Charles Hamilton Houston', description: 'Traces the strategy that trained lawyers to dismantle Jim Crow in court.' },
      { href: '@root/encyclopedia/redlining.html', title: 'Redlining', description: 'Shows how racial separation later moved through maps, mortgages, and wealth.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Plessy v. Ferguson', url: 'https://www.archives.gov/milestone-documents/plessy-v-ferguson' },
      { source: 'Oyez', title: 'Plessy v. Ferguson', url: 'https://www.oyez.org/cases/1850-1900/163us537' },
      { source: 'Justia U.S. Supreme Court', title: 'Plessy v. Ferguson, 163 U.S. 537', url: 'https://supreme.justia.com/cases/federal/us/163/537/' },
      { source: 'Federal Judicial Center', title: 'Plessy v. Ferguson', url: 'https://www.fjc.gov/history/cases/famous-federal-trials/plessy-v-ferguson' },
      { source: 'PBS', title: 'Landmark Cases: Plessy v. Ferguson', url: 'https://www.pbs.org/wnet/supremecourt/antebellum/landmark_plessy.html' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/milestone-documents/plessy-v-ferguson', 'https://www.oyez.org/cases/1850-1900/163us537', 'https://supreme.justia.com/cases/federal/us/163/537/'],
      supportingSources: ['https://www.fjc.gov/history/cases/famous-federal-trials/plessy-v-ferguson', 'https://www.pbs.org/wnet/supremecourt/antebellum/landmark_plessy.html'],
      verifiedQuoteSource: 'Short dissent quotation traced to the Supreme Court text via Justia and the National Archives.',
      sensitiveClaimsReviewed: 'Homer Plessy racial classification, planned test case, Separate Car Act, Fourteenth Amendment reasoning, Harlan dissent limits, Brown relationship, and 2022 pardon reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond the case result into organized test-case strategy, legal reasoning, dissent complexity, Jim Crow effects, and later civil rights law.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short court quotation, constitutional and Jim Crow claim review.'
    }
  },
  {
    encyclopediaSlug: 'prince',
    fullDate: '2026-06-07',
    dailyDateLabel: 'June 7',
    subject: 'Prince',
    category: 'Music',
    type: 'People',
    dates: '1958 - 2016',
    tags: ['music', 'self-determination', 'art', 'economics', 'technology'],
    summary: `Prince Rogers Nelson was not only a dazzling performer in purple light. He was a songwriter, producer, arranger, multi-instrumentalist, bandleader, studio obsessive, business strategist, and public critic of music-industry control. The famous story says he changed his name to a symbol and wrote "slave" on his face. That is true, but it is only the doorway. Prince was arguing that art is labor and that ownership decides who profits from genius. His page matters because Black musical brilliance has often been celebrated while contracts, masters, publishing, and corporate power stayed hidden in the shadows. Prince dragged those shadows onto the stage.`,
    timeline: [
      { date: 'June 7, 1958', event: 'Born Prince Rogers Nelson in Minneapolis, Minnesota.' },
      { date: '1978', event: 'Releases his debut album For You, performing and producing much of the record himself.' },
      { date: '1982', event: '1999 brings Prince major crossover attention.' },
      { date: '1984', event: 'Purple Rain becomes a landmark album and film.' },
      { date: '1987', event: 'Releases Sign o\' the Times, widely regarded as one of his major artistic statements.' },
      { date: '1993', event: 'Changes his public name to an unpronounceable symbol during conflict with Warner Bros.' },
      { date: '1990s', event: 'Writes "slave" on his face to protest contract limits and control over his output.' },
      { date: '2004', event: 'Is inducted into the Rock & Roll Hall of Fame.' },
      { date: '2014', event: 'Regains ownership of his Warner Bros. master recordings as part of a new agreement.' },
      { date: 'Apr 21, 2016', event: 'Dies at Paisley Park in Chanhassen, Minnesota.' }
    ],
    fullStory: [
      `Prince grew out of Minneapolis, a city not usually treated as a capital of Black popular music. That distance helped him build a sound that did not ask one genre for permission. Funk, rock, R&B, pop, gospel, new wave, soul, jazz harmony, and electronic textures all moved through his work. He was small in physical frame and enormous in musical command. The guitar could scream, the drum machine could snap, the falsetto could turn vulnerable or dangerous, and the stage could become church, nightclub, and theater in the same breath.`,
      `From early in his career, Prince insisted on unusual control. On For You, he was marketed as a young artist who could write, arrange, produce, and perform much of the music himself. That was not only ego. It was a claim to authorship. Black musicians had long watched record companies profit from their sound while limiting their control. Prince understood the studio as a site of power.`,
      `The breakthrough years made him unavoidable. 1999 pushed him into wider attention. Purple Rain turned him into a global figure, partly because the music, film, band image, sexuality, fashion, and myth all reinforced one another. The Revolution mattered too. Prince's bands placed women, queer-coded performance, racial mixture, and virtuosity in front of audiences that might have expected a simpler pop star. He turned ambiguity into mass appeal without making it safe.`,
      `His catalog moved quickly because he moved quickly. That speed became part of the conflict. Prince wanted to release music at a pace that did not fit the record-company calendar. Warner Bros. wanted to manage product, promotion, and market saturation. Prince saw a vault of songs and a life too short for delay. The company saw contracts and brand strategy. The clash was artistic, financial, and philosophical.`,
      `In 1993, Prince changed his name to a symbol. Journalists called him "the artist formerly known as Prince" because the symbol could not be pronounced. The gesture was easy to mock, and many people did. But inside the conflict, it made a point: if a company controlled the name Prince as a marketable asset, he would move outside the name. Writing "slave" on his face sharpened the argument. He was not saying his fame was the same as chattel slavery. He was using shocking language to accuse a contract system of claiming ownership over his labor and future output.`,
      `The comparison was controversial, and it should be handled carefully. Prince was wealthy, powerful, and famous. He also belonged to a long history of Black artists fighting companies over masters, publishing, royalties, and control. The word on his face forced audiences to talk about ownership, but it also risked flattening slavery into metaphor. A responsible account can say both things: the protest was strategically loud, and the historical analogy carried weight that should not be used casually.`,
      `Prince's independence was not only symbolic. He used alternative distribution, web experiments, direct fan relationships, and later renegotiations to test how artists might move around record-industry gatekeepers. Some experiments worked better than others. His public fights helped younger musicians speak more plainly about masters and contracts decades later.`,
      `The music itself must stay at the center. Prince was not important because he had a business dispute. He was important because the work made the dispute matter. He could write a tight radio hook, a political jam, a slow seduction, a guitar showcase, a spiritual plea, and a dance-floor command. He also wrote for other artists, shaped the Minneapolis sound, and left behind a vast archive that showed how much labor sits behind what looks effortless.`,
      `His death in 2016 at Paisley Park made the vault, the estate, and the ownership questions even more visible. What happens to a lifetime of work after an artist dies? Who decides what gets released, how it is framed, and who benefits? Prince had spent years asking those questions in public. After his death, the questions became part of his own legacy.`,
      `Prince matters because he made freedom sound glamorous without letting glamour hide the paperwork. His page belongs in Black history because ownership, credit, experimentation, and refusal are Black history too. The purple myth is real, but underneath it is a working musician demanding that genius not be separated from control.`
    ],
    costImpact: [
      `Prince's fight cost him public misunderstanding, industry friction, delayed releases, and years of being treated as difficult rather than strategic. Some audiences saw the name change as eccentric branding and missed the labor argument underneath. Corporate conflict also shaped how and when his music reached listeners.`,
      `The impact was larger than one contract. Prince helped make ownership talk part of mainstream music conversation. Later artists could point to masters, publishing, streaming, and rights with a vocabulary he helped popularize. His example did not solve exploitation, but it made silence harder.`
    ],
    whyItMattersToday: [
      `Prince matters today because music now moves through platforms, catalogs, licensing deals, estates, and data systems that can feel even farther from the person who made the sound. Ownership still decides whose labor becomes long-term wealth. Prince understood that visibility without control can be another kind of trap.`,
      `His story also complicates the idea of artistic freedom. Freedom is not only the right to dress boldly or cross genres. It is the power to decide what happens to the work, when it appears, and who profits from it. That is why the contract fight belongs beside the guitar solos.`,
      `The fuller lesson is that Black creativity should not be treated as a natural resource for companies to mine. Prince made pleasure, mystery, and control part of the same argument.`
    ],
    connected: [
      { href: '@root/generated/pages/james-brown.html', title: 'James Brown', description: 'Connects Black musical innovation, business power, bandleading, and control.' },
      { href: '@root/encyclopedia/nina-simone.html', title: 'Nina Simone', description: 'Shows another artist who refused to separate music from power and self-definition.' },
      { href: '@root/generated/pages/miles-davis.html', title: 'Miles Davis', description: 'Links genre-breaking sound, reinvention, and complicated artistic authority.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Connects Prince\'s platform experiments to Black control of technology and distribution.' }
    ],
    externalLinks: [
      { source: 'Rock & Roll Hall of Fame', title: 'Prince', url: 'https://www.rockhall.com/inductees/prince' },
      { source: 'Official Prince Site', title: 'Prince', url: 'https://prince.com/' },
      { source: 'GRAMMY.com', title: 'Prince Artist Profile', url: 'https://www.grammy.com/artists/prince/5675' },
      { source: 'Paisley Park', title: 'About Paisley Park', url: 'https://www.paisleypark.com/' },
      { source: 'Encyclopaedia Britannica', title: 'Prince', url: 'https://www.britannica.com/biography/Prince-singer-and-songwriter' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.rockhall.com/inductees/prince', 'https://prince.com/', 'https://www.grammy.com/artists/prince/5675'],
      supportingSources: ['https://www.paisleypark.com/', 'https://www.britannica.com/biography/Prince-singer-and-songwriter'],
      verifiedQuoteSource: 'No quotation included. Ownership claims were summarized from artist, industry, and institutional sources rather than a weakly traceable pull quote.',
      sensitiveClaimsReviewed: 'Name-change chronology, Warner Bros. conflict, master-recording ownership, 2014 agreement, slavery metaphor limits, death date/location, and multi-instrumentalist framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond the name-change anecdote into authorship, contracts, masters, genre control, distribution, and estate questions.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, quotation/source sensitivity noted, music ownership and metaphor claim review.'
    }
  },
  {
    encyclopediaSlug: 'rachel-robinson',
    outputPath: 'encyclopedia/rachel-robinson.html',
    dailyDateLabel: 'Encyclopedia',
    subject: 'Rachel Robinson',
    category: 'Civil Rights',
    type: 'People',
    dates: '1922 - present',
    tags: ['civil-rights', 'sports', 'women', 'education', 'family'],
    summary: `Rachel Robinson is often introduced as Jackie Robinson's wife, but that phrase is far too small for her life. She was a trained nurse, educator, mother, strategist, public witness, preservationist, and founder of the Jackie Robinson Foundation. She helped carry the pressure of baseball integration in real time, then spent decades turning memory into scholarships, leadership development, archives, and public education. Her page matters because integration stories often place women in the background as patient supporters. Rachel Robinson was not background. She was part of the emotional, practical, and institutional work that helped one breakthrough become a durable public legacy.`,
    timeline: [
      { date: 'July 19, 1922', event: 'Born Rachel Annetta Isum in Los Angeles, California.' },
      { date: '1940', event: 'Meets Jackie Robinson while both are students at UCLA.' },
      { date: '1945', event: 'Graduates from UCLA with a nursing degree.' },
      { date: 'Feb 10, 1946', event: 'Marries Jackie Robinson.' },
      { date: '1946', event: 'Accompanies Jackie during his season with the Montreal Royals.' },
      { date: 'Apr 15, 1947', event: 'Jackie Robinson breaks Major League Baseball\'s modern color line with the Brooklyn Dodgers.' },
      { date: '1950s-1960s', event: 'Builds a professional career in nursing and mental health while raising a family.' },
      { date: '1972', event: 'Jackie Robinson dies at age 53.' },
      { date: '1973', event: 'Establishes the Jackie Robinson Foundation.' },
      { date: '2007', event: 'Receives the Buck O\'Neil Lifetime Achievement Award from the Baseball Hall of Fame.' }
    ],
    fullStory: [
      `Rachel Isum grew up in Los Angeles, a city with its own racial boundaries and opportunities. At UCLA, she entered a world where Black students could achieve and still be sharply visible in mostly white institutions. She studied nursing, met Jackie Robinson, and built a relationship before baseball made them national symbols. That order matters. She was not recruited into a legend. She knew the person before the public story hardened around him.`,
      `When Branch Rickey and the Brooklyn Dodgers chose Jackie Robinson to break Major League Baseball's modern color line, the decision entered the Robinson household, not only the Dodgers' front office. Rachel married Jackie in February 1946 and soon joined him in Montreal, where he played for the Royals. Montreal was not free of racism, but the experience gave the couple a measure of public support before the harsher pressure of Brooklyn and the National League.`,
      `In 1947, Jackie Robinson walked into a level of hatred that required discipline almost beyond imagination. The popular story often focuses on his restraint, but restraint is not an individual trait floating in the air. It is supported, repaired, and tested in private life. Rachel Robinson became one of the people who helped him survive the daily pressure: slurs, threats, hotel exclusions, isolation, scrutiny, and the demand that he absorb abuse without publicly striking back.`,
      `That support should not be sentimentalized. It cost her. She carried pregnancy and motherhood while living inside a national experiment. She had to decide when to speak, when to protect, when to advise, and how to maintain ordinary family life when ordinary life had become almost impossible. The first Black family in modern Major League Baseball was watched in ways white baseball families were not.`,
      `Rachel Robinson's own professional life continued. She worked in nursing and psychiatric care and later became an assistant professor at Yale School of Nursing. That career matters because it resists the flattening of her into devotion alone. She knew health, trauma, family systems, and care as professional fields, not only as household responsibilities.`,
      `After Jackie retired from baseball, the Robinsons remained engaged in civil rights, business, and public life. Jackie spoke sharply about racism in and beyond sports. Rachel continued balancing family, work, and the demands placed on a couple whose name had become shorthand for courage. The family also endured private grief, including the death of their son Jackie Robinson Jr. in 1971, followed by Jackie's death in 1972.`,
      `In 1973, Rachel Robinson founded the Jackie Robinson Foundation. This was not a memorial plaque in nonprofit form. It became a scholarship and leadership-development institution designed to help students move through college and into public life. The foundation turned a sports breakthrough into educational infrastructure. That choice tells us how Rachel understood legacy: not as nostalgia, but as investment.`,
      `She also helped shape the public memory of Jackie Robinson with care. Memory can become shallow very quickly. A number, a day, a statue, or a first can replace the politics and pressure that made the achievement matter. Rachel Robinson protected the story from becoming only baseball celebration. She insisted on education, civil rights, and young people's futures as part of the legacy.`,
      `Rachel Robinson's life teaches that historic breakthroughs require systems of care. Jackie Robinson's courage was real. So was the labor around him. Rachel's work moved through marriage, nursing, motherhood, grief, foundation leadership, and public memory. She turned proximity to a famous life into an independent form of institution-building.`,
      `Her story is not an argument that women behind famous men should be praised only for support. It is an argument to see the full work. Rachel Robinson was partner, professional, founder, and guardian of a legacy that continues to fund students long after the first pitch, first season, and first headlines.`
    ],
    costImpact: [
      `The cost to Rachel Robinson included private life lived under public pressure. Baseball integration brought danger, scrutiny, travel strain, family stress, and the expectation that she would help absorb hostility without becoming the story. The deaths of her son and husband added grief to work that was already emotionally heavy.`,
      `Her impact was institutional. The Jackie Robinson Foundation has supported generations of students while keeping the civil rights meaning of Robinson's baseball career alive. Rachel Robinson helped turn a symbolic first into scholarships, leadership, archives, and long-term public education.`
    ],
    whyItMattersToday: [
      `Rachel Robinson matters today because public memory still likes solitary heroes. That habit hides care work, planning, emotional labor, and institution-building. The Robinson breakthrough did not happen to one man alone. It happened to a family and then became work carried by people who survived the first wave of attention.`,
      `Her life also asks what legacy should do. A legacy can become merchandise, ritual, or a comfortable annual celebration. Rachel Robinson pushed it toward education. She made the memory of baseball integration answer a practical question: who gets support to lead next?`,
      `The fuller lesson is that Black history is sustained by builders who know how to protect a story without freezing it. Rachel Robinson did that work for more than half a century.`
    ],
    connected: [
      { href: '@root/encyclopedia/jackie-robinson.html', title: 'Jackie Robinson', description: 'Connects Rachel Robinson to the baseball integration story they lived as a family.' },
      { href: '@root/encyclopedia/mamie-till-mobley.html', title: 'Mamie Till-Mobley', description: 'Shows another woman who transformed family grief and public memory into education.' },
      { href: '@root/encyclopedia/myrlie-evers-williams.html', title: 'Myrlie Evers-Williams', description: 'Connects legacy protection, witness, and institutional leadership after violence.' },
      { href: '@root/encyclopedia/althea-gibson.html', title: 'Althea Gibson', description: 'Places Robinson near another sports barrier breaker whose achievement carried racial pressure.' }
    ],
    externalLinks: [
      { source: 'Jackie Robinson Foundation', title: 'Rachel Robinson', url: 'https://jackierobinson.org/people/rachel-robinson/' },
      { source: 'National Baseball Hall of Fame', title: '2017 Buck O\'Neil Award Winner Rachel Robinson', url: 'https://baseballhall.org/discover-more/awards/oneil/rachel-robinson' },
      { source: 'Jackie Robinson Museum', title: 'Rachel Robinson', url: 'https://www.jackierobinsonmuseum.org/about/rachel-robinson/' },
      { source: 'Britannica', title: 'Rachel Robinson', url: 'https://www.britannica.com/biography/Rachel-Robinson' },
      { source: 'Jackie Robinson Foundation', title: 'About the Foundation', url: 'https://jackierobinson.org/about/' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://jackierobinson.org/people/rachel-robinson/', 'https://jackierobinson.org/about/', 'https://baseballhall.org/discover-more/awards/oneil/rachel-robinson'],
      supportingSources: ['https://www.jackierobinsonmuseum.org/about/rachel-robinson/', 'https://www.britannica.com/biography/Rachel-Robinson'],
      verifiedQuoteSource: 'No quotation included. Living-person claims were summarized from institutional profiles rather than excerpted.',
      sensitiveClaimsReviewed: 'Living status, nursing education and career, marriage and family grief, 1946 Montreal context, 1947 integration pressure, and foundation founding reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond spouse framing into nursing, integration-era care work, foundation leadership, memory, and education infrastructure.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, living-person and family-history claim review.'
    }
  },
  {
    encyclopediaSlug: 'rebecca-lee-crumpler',
    fullDate: '2026-07-13',
    dailyDateLabel: 'July 13',
    subject: 'Rebecca Lee Crumpler',
    category: 'Medicine',
    type: 'People',
    dates: '1831 - 1895',
    tags: ['medicine', 'women', 'health', 'education', 'reconstruction'],
    summary: `Rebecca Lee Crumpler became the first Black woman in the United States known to earn a medical degree, but the achievement matters for more than a first. She entered medicine when white male institutions barely admitted women, Black people were excluded from most formal training, and the Civil War had torn open questions of health, freedom, and citizenship. After graduating in 1864, she treated formerly enslaved people in Richmond and later wrote a medical book for women and children. Her page matters because medical history is not only discoveries and famous hospitals. It is access: who gets trained, who gets believed, who receives care, and who writes knowledge down for families shut out of formal systems.`,
    timeline: [
      { date: 'Feb 8, 1831', event: 'Born Rebecca Davis in Delaware.' },
      { date: '1852-1860', event: 'Works as a nurse in Charlestown, Massachusetts, according to her later account.' },
      { date: '1860', event: 'Is admitted to New England Female Medical College.' },
      { date: '1864', event: 'Earns a medical degree, becoming the first known Black woman physician in the United States.' },
      { date: '1865', event: 'The Civil War ends, and Reconstruction begins amid massive health needs among freedpeople.' },
      { date: '1865-1869', event: 'Practices medicine in Richmond, Virginia, serving formerly enslaved people and poor patients.' },
      { date: '1869', event: 'Returns to Boston and continues medical work.' },
      { date: '1883', event: 'Publishes A Book of Medical Discourses.' },
      { date: 'Mar 9, 1895', event: 'Dies in Hyde Park, Massachusetts.' },
      { date: '1989', event: 'The Rebecca Lee Society is founded to support Black women physicians.' }
    ],
    fullStory: [
      `Rebecca Davis, later Rebecca Lee Crumpler, was born in Delaware in 1831. Much of her early life is sparsely documented, which is itself a reminder of how archives treat Black women's intellectual work. Crumpler later wrote that she was raised by an aunt in Pennsylvania who cared for sick neighbors. That model of community care helped shape her idea of medicine before any school admitted her.`,
      `Before becoming a physician, Crumpler worked as a nurse in Massachusetts. Nursing in the mid-nineteenth century was not the credentialed profession it would later become, but it demanded observation, stamina, and trust. Physicians who knew her work encouraged her to apply to New England Female Medical College in Boston. The school existed because women were largely excluded from traditional medical colleges. Even there, Crumpler's presence as a Black woman was extraordinary.`,
      `In 1864, during the Civil War, she earned her medical degree. That date matters. The United States was still fighting over slavery, Black citizenship, and the future of the nation. A Black woman becoming a physician in that moment was not a decorative first. It was a direct challenge to assumptions about intelligence, authority, gender, race, and who could practice science.`,
      `After the war, Crumpler went to Richmond, Virginia. The city had been the Confederate capital. It was also a place where formerly enslaved people urgently needed medical care, food, housing, family reunification, wages, and protection. Working through or near the Freedmen's Bureau environment, Crumpler treated people who had been denied care under slavery and then faced poverty, disease, and white hostility in freedom.`,
      `Her Richmond work shows how medicine and Reconstruction belonged together. Freedom was not only a legal status. It required bodies that could heal, children who could survive, mothers who could receive care, and communities that could access professional knowledge. Crumpler wrote that some people dismissed Black physicians and that poor patients were often neglected. Her practice answered both problems.`,
      `Crumpler later returned to Boston, where she continued caring for women and children. In 1883, she published A Book of Medical Discourses. It was one of the first medical texts published by an African American and was addressed especially to mothers and nurses. The book drew from her practice and focused on maternal and child health, diet, illness, and household care.`,
      `The book matters because it placed medical instruction where many families actually needed it. Crumpler did not write only for elite doctors. She wrote for people responsible for care in homes, especially women whose knowledge had often been dismissed as informal. In doing so, she joined professional medicine to community education.`,
      `Her career also exposes how easily Black women pioneers can be made almost invisible. There are no known photographs of her that scholars accept as confirmed. Some details of her life are reconstructed from directories, census records, marriage records, school records, and her own published writing. That does not make her achievement less real. It reminds readers that recognition often depends on who gets archived, cited, and institutionalized.`,
      `Crumpler's story connects directly to later Black women in medicine: Mary Eliza Mahoney in nursing, Helen Octavia Dickens in obstetrics and gynecology, Patricia Bath in ophthalmology, and many others. They did not inherit an open road. They inherited a profession that had to be entered, challenged, and widened again and again.`,
      `Rebecca Lee Crumpler matters because she made medical authority visible in a Black woman's hands at a time when law, custom, and professional culture tried to deny that possibility. She treated patients, wrote for families, and left a record that still asks medicine who it trains and who it serves.`
    ],
    quote: {
      text: 'I early conceived a liking for, and sought every opportunity to relieve the sufferings of others.',
      cite: 'Rebecca Lee Crumpler, A Book of Medical Discourses'
    },
    costImpact: [
      `Crumpler faced the cost of entering a profession that questioned both women and Black practitioners. She worked without the institutional support, income security, and professional respect more available to white male physicians. In Richmond, she served communities facing poverty, disease, and postwar instability while racism shaped who was valued as a patient and as a doctor.`,
      `Her impact was practical and symbolic. She delivered care, wrote medical guidance for families, and proved that Black women belonged inside professional medicine. Later generations could point to her not as myth, but as precedent.`
    ],
    whyItMattersToday: [
      `Rebecca Lee Crumpler matters today because health equity is not only about hospitals after people are sick. It is also about who becomes a clinician, whose knowledge counts, and whether medical information reaches families in forms they can use. Crumpler understood that access to the profession and access to care were linked.`,
      `Her story also asks readers to respect partial archives. Black women's records were often scattered or neglected, but careful history can still recover enough to teach responsibly. The missing photograph is part of the lesson. Visibility was not simply absent. It was withheld by systems that did not preserve Black women as authorities.`,
      `The fuller lesson is that firsts should open a door, not close a story. Crumpler's first matters because it leads to Reconstruction health, maternal care, medical publishing, and the unfinished work of making medicine accountable to people it once excluded.`
    ],
    connected: [
      { href: '@root/generated/pages/mary-eliza-mahoney.html', title: 'Mary Eliza Mahoney', description: 'Connects Crumpler to Black women\'s fight for professional nursing credentials.' },
      { href: '@root/encyclopedia/helen-octavia-dickens.html', title: 'Helen Octavia Dickens', description: 'Extends the lineage of Black women physicians into twentieth-century medicine.' },
      { href: '@root/generated/pages/patricia-bath.html', title: 'Patricia Bath', description: 'Shows a later physician-inventor who also joined medical innovation to access.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Places Crumpler\'s Richmond work inside the broader rebuilding of Black life after slavery.' }
    ],
    externalLinks: [
      { source: 'National Library of Medicine', title: 'Dr. Rebecca Lee Crumpler', url: 'https://www.nlm.nih.gov/changingthefaceofmedicine/physicians/biography_73.html' },
      { source: 'National Women\'s History Museum', title: 'Rebecca Lee Crumpler', url: 'https://www.womenshistory.org/education-resources/biographies/rebecca-lee-crumpler' },
      { source: 'NIH MedlinePlus Magazine', title: 'Dr. Rebecca Lee Crumpler: A Medical Pioneer', url: 'https://magazine.medlineplus.gov/article/dr-rebecca-lee-crumpler-a-medical-pioneer' },
      { source: 'Boston Women\'s Heritage Trail', title: 'Rebecca Lee Crumpler', url: 'https://bwht.org/rebecca-lee-crumpler/' },
      { source: 'NLM Digital Collections', title: 'A Book of Medical Discourses', url: 'https://resource.nlm.nih.gov/67521160R' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nlm.nih.gov/changingthefaceofmedicine/physicians/biography_73.html', 'https://resource.nlm.nih.gov/67521160R', 'https://magazine.medlineplus.gov/article/dr-rebecca-lee-crumpler-a-medical-pioneer'],
      supportingSources: ['https://www.womenshistory.org/education-resources/biographies/rebecca-lee-crumpler', 'https://bwht.org/rebecca-lee-crumpler/'],
      verifiedQuoteSource: 'Short quotation traced to Crumpler\'s A Book of Medical Discourses via digitized National Library of Medicine copy.',
      sensitiveClaimsReviewed: 'First known Black woman physician claim, birth/death dates, no confirmed photograph, Richmond/Freedmen\'s Bureau context, and medical-book significance reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond first-physician framing into nursing, medical education, Reconstruction care, women and children\'s health, and archival limits.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short quotation, first-claim and archival-evidence review.'
    }
  },
  {
    encyclopediaSlug: 'reconstruction',
    fullDate: '2026-05-29',
    dailyDateLabel: 'May 29',
    subject: 'Reconstruction',
    category: 'Reconstruction',
    type: 'Era',
    dates: '1865 - 1877',
    tags: ['reconstruction', 'government', 'voting-rights', 'education', 'emancipation'],
    summary: `Reconstruction was the country's best chance to build democracy after slavery, and one of its clearest examples of political abandonment. Between 1865 and 1877, formerly enslaved people reunited families, built schools, negotiated labor, voted, held office, bought land when they could, founded churches, demanded protection, and helped rewrite state constitutions. White supremacists answered with terror, and federal commitment weakened. This page matters because Reconstruction was not a failure of Black citizenship. It was a struggle over whether the United States would defend Black freedom after emancipation. The answer changed the next century of American life.`,
    timeline: [
      { date: 'Jan 1, 1863', event: 'The Emancipation Proclamation changes the Civil War into a war against slavery in rebelling states.' },
      { date: 'Apr 1865', event: 'The Civil War ends and President Abraham Lincoln is assassinated.' },
      { date: 'Dec 1865', event: 'The Thirteenth Amendment abolishes slavery except as punishment for crime.' },
      { date: '1865', event: 'Southern states pass Black Codes to control freedpeople\'s labor and movement.' },
      { date: '1866', event: 'Congress passes the Civil Rights Act of 1866 over President Andrew Johnson\'s veto.' },
      { date: '1868', event: 'The Fourteenth Amendment defines birthright citizenship and equal protection.' },
      { date: '1870', event: 'The Fifteenth Amendment prohibits denying the vote because of race, color, or previous servitude.' },
      { date: '1870s', event: 'Black officeholding, public education, and biracial governments face violent white supremacist backlash.' },
      { date: '1877', event: 'Federal troops withdraw from the South after a disputed presidential election and political compromise.' },
      { date: '1890s', event: 'Southern states build disfranchisement and Jim Crow systems that reverse many Reconstruction gains.' }
    ],
    fullStory: [
      `Reconstruction did not begin with politicians in Washington. It began with Black people moving. During and after the Civil War, formerly enslaved people searched for relatives, legalized marriages, left plantations, negotiated wages, founded schools, built churches, claimed surnames, gathered in political meetings, and tested what freedom could mean in daily life. Freedom was not an abstract word. It meant control over family, labor, movement, education, worship, safety, and the body.`,
      `The federal government entered this world unevenly. The Freedmen's Bureau provided some food, schools, labor mediation, and legal assistance, but it was underfunded, temporary, and often caught between freedpeople's demands and white planters' pressure. President Andrew Johnson favored rapid restoration of Southern states and offered former Confederates broad leniency. Many Southern governments responded by passing Black Codes, laws designed to force Black labor back into controlled conditions and criminalize independence.`,
      `Congressional Republicans pushed back. The Civil Rights Act of 1866, Reconstruction Acts, and constitutional amendments tried to define freedom nationally. The Fourteenth Amendment made birthright citizenship and equal protection central constitutional principles. The Fifteenth Amendment addressed voting rights for Black men. These were enormous changes, but they were not gifts from above. Black testimony, military service, organizing, conventions, petitions, and local demands helped make them politically unavoidable.`,
      `Reconstruction governments did real work. Black men voted and held office at local, state, and federal levels. South Carolina, Louisiana, Mississippi, Alabama, Georgia, Florida, and other states saw Black legislators help write constitutions, expand public education, protect civil rights, and rebuild public institutions. Public school systems across the South owe much to Reconstruction. The period also produced Black newspapers, mutual aid, churches, colleges, and political networks that outlasted formal federal occupation.`,
      `The achievements existed alongside intense conflict. Land was the unresolved heart of freedom. Many freedpeople wanted land because land meant independence from former enslavers. The federal government mostly refused land redistribution and returned much confiscated land to former Confederates. Without land, many Black families entered sharecropping or labor contracts under deeply unequal conditions. Freedom came without the economic foundation many had been promised or had reasonably expected.`,
      `White supremacist violence tried to destroy Reconstruction from the ground up. The Ku Klux Klan and other groups used murder, whipping, rape, arson, economic intimidation, and election terror. Their targets were not random. They attacked Black voters, officeholders, teachers, labor organizers, and white allies. Violence was political strategy. It aimed to make democracy too dangerous for Black communities to practice.`,
      `The federal government sometimes responded. Enforcement Acts and federal prosecutions weakened the Klan in some areas for a time. But commitment faded. Northern voters tired of Southern conflict, economic panic changed political priorities, racism crossed regional lines, and many white Americans treated Black rights as negotiable. The Supreme Court narrowed federal civil rights protections in key decisions. The country began to retreat from its own Reconstruction promises.`,
      `The disputed election of 1876 and the political settlement that followed marked a turning point. In 1877, federal troops withdrew from the South. Reconstruction did not end in one single day everywhere, and historians debate periodization, but 1877 symbolizes federal abandonment. White Democratic rule, often called "Redeemer" government by its supporters, used fraud, violence, and law to undo Black political power.`,
      `What followed was not inevitable. Jim Crow was built. Disfranchisement laws, segregation statutes, convict leasing, racial terror, and public memory campaigns worked to make Reconstruction look corrupt and illegitimate. The false "Lost Cause" and racist histories portrayed Black citizenship as chaos and white rule as redemption. Those lies shaped textbooks, monuments, films, and courtrooms for generations.`,
      `Reconstruction matters because it shows that the United States once moved closer to multiracial democracy and then chose not to defend it long enough. The tragedy is not that Black political participation failed. The tragedy is that it was attacked and abandoned. The era's institutions, amendments, and dreams still structure American debates over voting, citizenship, education, federal power, and repair.`
    ],
    quote: {
      text: 'The slave went free; stood a brief moment in the sun.',
      cite: 'W. E. B. Du Bois, Black Reconstruction in America'
    },
    costImpact: [
      `The cost of Reconstruction's defeat was enormous. Black communities faced disfranchisement, land loss, segregated schools, convict leasing, debt peonage, racial terror, and political exclusion. White violence did not merely punish individuals. It broke institutions and warned communities that exercising citizenship could cost them their lives.`,
      `The impact of Reconstruction's achievements was also enormous. The Thirteenth, Fourteenth, and Fifteenth Amendments became legal foundations for later freedom struggles. Public education, Black officeholding, mutual aid, and civil rights organizing created models that later movements would inherit, even after formal gains were attacked.`
    ],
    whyItMattersToday: [
      `Reconstruction matters today because American democracy still lives with its unfinished questions. Who protects voting rights when states restrict them? What does citizenship require beyond formal freedom? Can political rights survive without economic power, safety, and education? Reconstruction asked those questions in the 1860s and 1870s. They did not stay there.`,
      `The era also warns against blaming oppressed people for the backlash against their freedom. Black political participation did not cause Reconstruction's collapse. White supremacist violence and national retreat did. That distinction matters whenever progress is described as going "too far" because powerful people respond with force.`,
      `The fuller lesson is that democracy is not self-executing. It has to be defended, funded, taught, and protected from people who benefit when equality remains only a promise.`
    ],
    connected: [
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'Connects emancipation to the punishment exception and postwar labor control.' },
      { href: '@root/generated/pages/black-codes.html', title: 'Black Codes', description: 'Shows how Southern states tried to narrow freedom immediately after slavery.' },
      { href: '@root/generated/pages/robert-smalls.html', title: 'Robert Smalls', description: 'Follows one Reconstruction-era leader from escape to public office.' },
      { href: '@root/generated/pages/plessy-v-ferguson.html', title: 'Plessy v. Ferguson', description: 'Shows how the Court later helped bury Reconstruction\'s equal citizenship promise.' }
    ],
    externalLinks: [
      { source: 'U.S. House of Representatives', title: 'Reconstruction and Black Political Activism', url: 'https://history.house.gov/Exhibitions-and-Publications/BAIC/Historical-Essays/Fifteenth-Amendment/Reconstruction/' },
      { source: 'Library of Congress', title: 'Reconstruction and Rights', url: 'https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-1877/reconstruction-and-rights/' },
      { source: 'Smithsonian Institution', title: 'Make Good the Promises: Reconstruction and Its Legacies', url: 'https://www.si.edu/exhibitions/make-good-promises-reconstruction-and-its-legacies%3Aevent-exhib-6538' },
      { source: 'National Constitution Center', title: 'Reconstruction Amendments', url: 'https://constitutioncenter.org/the-constitution/amendments/amendment-xiii' },
      { source: 'Facing History & Ourselves', title: 'The Reconstruction Era and the Fragility of Democracy', url: 'https://www.facinghistory.org/resource-library/reconstruction-era-fragility-democracy' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://history.house.gov/Exhibitions-and-Publications/BAIC/Historical-Essays/Fifteenth-Amendment/Reconstruction/', 'https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-1877/reconstruction-and-rights/', 'https://www.si.edu/exhibitions/make-good-promises-reconstruction-and-its-legacies%3Aevent-exhib-6538'],
      supportingSources: ['https://constitutioncenter.org/the-constitution/amendments/amendment-xiii', 'https://www.facinghistory.org/resource-library/reconstruction-era-fragility-democracy'],
      verifiedQuoteSource: 'Short Du Bois quotation traced to Black Reconstruction in America and used as interpretive framing.',
      sensitiveClaimsReviewed: 'Periodization, federal withdrawal, Black Codes, land redistribution limits, white supremacist violence, Lost Cause memory, and constitutional-amendment chronology reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond promise-and-abandonment summary into Black agency, federal policy, land, violence, public education, amendments, and memory politics.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short quotation, chronology and backlash claim review.'
    }
  },
  {
    encyclopediaSlug: 'redlining',
    outputPath: 'encyclopedia/redlining.html',
    dailyDateLabel: 'Encyclopedia',
    subject: 'Redlining',
    category: 'Systems',
    type: 'System',
    dates: '1930s - present effects',
    tags: ['housing', 'economics', 'jim-crow', 'law', 'government'],
    summary: `Redlining was not a rumor about banks being unfair. It was a mapped system of public and private decisions that marked many Black neighborhoods as risky, denied or restricted mortgage credit, and helped make homeownership a major engine of white wealth while Black families were blocked from the same terms. The famous red areas on Home Owners' Loan Corporation maps were only one part of the story, but they make the logic visible: race was treated as a financial hazard. This page matters because the racial wealth gap is not just the result of individual choices. It was built into maps, appraisals, lending rules, insurance, zoning, and public policy.`,
    timeline: [
      { date: '1917', event: 'The Supreme Court strikes down explicit residential racial zoning in Buchanan v. Warley, pushing segregation into other tools.' },
      { date: '1933', event: 'The Home Owners\' Loan Corporation is created during the New Deal mortgage crisis.' },
      { date: '1934', event: 'The Federal Housing Administration is created and shapes national mortgage standards.' },
      { date: '1935-1940', event: 'HOLC residential security maps grade neighborhoods, often marking Black neighborhoods as hazardous.' },
      { date: '1944', event: 'The GI Bill expands access to education and home loans, but discrimination limits Black veterans\' benefits in practice.' },
      { date: '1948', event: 'Shelley v. Kraemer bars court enforcement of racially restrictive covenants, though segregation continues through other means.' },
      { date: '1968', event: 'The Fair Housing Act prohibits discrimination in housing after decades of exclusion.' },
      { date: '1977', event: 'The Community Reinvestment Act addresses lending obligations in communities banks serve.' },
      { date: '2000s', event: 'Predatory lending and subprime targeting hit many Black and Latino communities before the foreclosure crisis.' },
      { date: 'Present', event: 'Researchers continue to connect historic redlining to wealth, health, heat, pollution, and investment disparities.' }
    ],
    fullStory: [
      `Redlining is often introduced through the color red on government maps, but the system was broader than any single map. It grew from a housing market where race shaped property value, appraisals, bank decisions, insurance, zoning, and neighborhood politics. Long before the maps, white communities used violence, covenants, zoning, and real estate practices to keep Black families out of many neighborhoods. Federal policy then helped standardize and legitimize those patterns.`,
      `During the Great Depression, the federal government created the Home Owners' Loan Corporation to refinance troubled mortgages and the Federal Housing Administration to stabilize and expand mortgage lending. These programs helped build the modern American homeownership system. But that system was not race-neutral. Appraisal standards often treated Black residents, immigrants, mixed neighborhoods, or older urban areas as threats to value. Whiteness became a financial credential.`,
      `HOLC maps graded neighborhoods from A to D. The D areas were colored red and described as hazardous. Black presence, or even the possibility of Black movement into a neighborhood, often lowered a grade. The maps did not single-handedly create discrimination, and historians debate exactly how lenders used them in every market. But they captured and reinforced a racial logic already operating in real estate and finance. They made segregation appear technical.`,
      `The FHA's underwriting standards and lender practices favored new suburban development and racial homogeneity. White families could often buy homes with federally backed mortgages on favorable terms. Black families were denied loans, offered worse terms, forced into exploitative contract sales, or confined to overcrowded neighborhoods where demand was high and credit was scarce. In many places, Black people paid more for worse housing because exclusion made markets predatory.`,
      `Redlining was also tied to public investment. Neighborhoods denied credit were less able to repair homes, build equity, attract services, or resist disinvestment. Then the visible effects of disinvestment were used as evidence that the neighborhoods had been risky all along. It was a self-confirming system. The state and market helped create decline, then blamed the community for the decline.`,
      `The Fair Housing Act of 1968 made housing discrimination illegal, but law did not erase accumulated damage. Families who bought homes with affordable mortgages in the 1940s, 1950s, and 1960s often built equity that could fund college, business formation, retirement, and inheritance. Families excluded from that system lost not only a house, but decades of compounding wealth. That gap could not be closed by announcing that discrimination was now prohibited.`,
      `The story also continues after classic redlining. In the late twentieth and early twenty-first centuries, some of the same communities that had been denied fair credit were targeted for predatory loans. This is sometimes called reverse redlining: capital finally arrived, but in exploitative form. The foreclosure crisis stripped wealth from many Black and Latino neighborhoods that had already been denied stable wealth-building opportunities.`,
      `Researchers now connect historic redlining to present-day outcomes in health, heat exposure, pollution, tree canopy, school resources, property values, and life expectancy. Those connections should be described carefully. A red map from the 1930s is not the only cause of every present disparity. But the maps are evidence of a larger system that arranged opportunity unevenly and let those arrangements compound.`,
      `Redlining matters because it turns abstract inequality into something readers can see. Look up a city. Find the old grades. Compare them to present patterns of investment, wealth, and environmental burden. The continuity is not magic. It is policy, market behavior, inheritance, and public choice layered over time.`,
      `The deeper lesson is that wealth did not simply happen to white families and fail to happen to Black families. Government helped decide whose homes would be treated as secure investments and whose neighborhoods would be treated as risks. Those decisions still sit inside the geography of American life.`
    ],
    costImpact: [
      `The cost of redlining was wealth denied across generations. Black families lost access to fair mortgages, home equity, neighborhood investment, school funding tied to property value, and the stabilizing power of ownership. Many paid inflated rents or exploitative contract prices while being told they were bad credit risks.`,
      `The impact extended beyond money. Disinvestment shaped health, infrastructure, policing, heat, pollution, and political power. Redlining helped make inequality look local and natural when it had been produced through coordinated public and private choices.`
    ],
    whyItMattersToday: [
      `Redlining matters today because people still explain racial wealth gaps through individual behavior while ignoring the maps, rules, and markets that structured opportunity. A family cannot build home equity on the same terms if the system denies the loan, devalues the neighborhood, or offers credit only through predatory channels.`,
      `It also teaches readers to look for discrimination that hides inside technical language. Risk, value, stability, market confidence, and neighborhood character can sound neutral. In housing history, those words often carried racial meaning.`,
      `The fuller lesson is not simply that redlining was wrong. It is that repair has to be structural because the harm was structural. A map helped show the wound, but the wound was made by policy, capital, and exclusion working together.`
    ],
    connected: [
      { href: '@root/encyclopedia/fair-housing-act.html', title: 'The Fair Housing Act', description: 'Connects redlining to the law that prohibited housing discrimination after decades of damage.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Shows how housing segregation feeds school inequality.' },
      { href: '@root/encyclopedia/environmental-racism.html', title: 'Environmental Racism', description: 'Links housing policy to pollution, exposure, and neighborhood health.' },
      { href: '@root/encyclopedia/black-wall-street.html', title: 'Black Wall Street', description: 'Places wealth-building and state-backed destruction in a longer history of Black economic life.' }
    ],
    externalLinks: [
      { source: 'Mapping Inequality', title: 'Redlining in New Deal America', url: 'https://dsl.richmond.edu/panorama/redlining/' },
      { source: 'National Community Reinvestment Coalition', title: 'HOLC Redlining Maps', url: 'https://ncrc.org/holc/' },
      { source: 'Federal Reserve History', title: 'Redlining', url: 'https://www.federalreservehistory.org/essays/redlining' },
      { source: 'U.S. House of Representatives', title: 'The Fair Housing Act of 1968', url: 'https://history.house.gov/Historical-Highlights/1951-2000/hh_1968_04_10/' },
      { source: 'Brookings Institution', title: 'Devaluation of Assets in Black Neighborhoods', url: 'https://www.brookings.edu/articles/devaluation-of-assets-in-black-neighborhoods/' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://dsl.richmond.edu/panorama/redlining/', 'https://ncrc.org/holc/', 'https://www.federalreservehistory.org/essays/redlining'],
      supportingSources: ['https://history.house.gov/Historical-Highlights/1951-2000/hh_1968_04_10/', 'https://www.brookings.edu/articles/devaluation-of-assets-in-black-neighborhoods/'],
      verifiedQuoteSource: 'No quotation included. Structural claims rely on mapping, Federal Reserve history, and housing-policy research rather than a pull quote.',
      sensitiveClaimsReviewed: 'HOLC map role, FHA underwriting, racial covenants, GI Bill effects in practice, reverse redlining, present-day correlation versus causation, and wealth-gap claims reviewed.',
      materialCorrections: 'Rebuilt legacy page with careful distinction between HOLC maps as evidence and redlining as a broader public-private housing system.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, housing-system and present-effect claim review.'
    }
  },
  {
    encyclopediaSlug: 'rihanna',
    outputPath: 'encyclopedia/rihanna.html',
    dailyDateLabel: 'Encyclopedia',
    subject: 'Rihanna',
    category: 'Culture',
    type: 'People',
    dates: '1988 - present',
    tags: ['music', 'art', 'economics', 'self-determination', 'community'],
    summary: `Rihanna is a global pop star, but her history is bigger than hits. Born Robyn Rihanna Fenty in Barbados, she became one of the defining recording artists of the 2000s and 2010s, then turned celebrity into a business platform that changed beauty, fashion, and expectations around inclusion. Fenty Beauty's wide foundation range did not invent shade diversity, but it forced a mainstream industry to answer why many brands had treated darker skin as an afterthought. Her page matters because contemporary Black history includes culture, branding, migration, beauty politics, philanthropy, motherhood, and ownership. Rihanna's power is not only that people watched her. It is that she changed what companies had to compete with after they watched.`,
    timeline: [
      { date: 'Feb 20, 1988', event: 'Born Robyn Rihanna Fenty in Saint Michael, Barbados.' },
      { date: '2005', event: 'Releases her debut album Music of the Sun.' },
      { date: '2007', event: 'Good Girl Gone Bad and "Umbrella" make her a global pop force.' },
      { date: '2012', event: 'Founds the Clara Lionel Foundation, named for her grandparents.' },
      { date: '2016', event: 'Releases Anti, an album widely read as a major artistic statement.' },
      { date: '2017', event: 'Launches Fenty Beauty with a widely discussed inclusive foundation range.' },
      { date: '2018', event: 'Launches Savage X Fenty, expanding her business presence in fashion.' },
      { date: '2021', event: 'Barbados names Rihanna a National Hero during its transition to a republic.' },
      { date: '2023', event: 'Headlines the Super Bowl halftime show while visibly pregnant.' },
      { date: 'Present', event: 'Continues as a musician, business leader, philanthropist, and Barbadian cultural figure.' }
    ],
    fullStory: [
      `Rihanna was born in Barbados, not in the American entertainment capitals that later claimed her attention. That Caribbean origin matters. Her accent, style, island references, and relationship to Barbados have remained part of her public identity even as she became a global figure. Migration, diaspora, and pop culture are part of her story from the beginning.`,
      `She entered the music industry as a teenager and quickly became a hitmaker. Early marketing could have flattened her into a pretty voice attached to island flavor, but Rihanna's career did not stay inside that frame. Albums moved through dancehall, R&B, pop, EDM, hip-hop, ballads, and darker electronic textures. "Umbrella" made her unavoidable. Anti later showed an artist more interested in mood, control, and atmosphere than in simply repeating a hit formula.`,
      `Rihanna's public image also changed what pop stardom could look like. She used fashion, hair, tattoos, sexuality, humor, silence, and refusal as tools. She did not always explain herself on demand. That refusal became part of her power. Black women celebrities are often expected to be accessible, grateful, and endlessly legible. Rihanna often made mystery and boundary-setting feel like part of the performance.`,
      `Her business work changed the scale of her influence. Fenty Beauty launched in 2017 with a broad foundation range that included many darker shades often missing from mainstream counters. Black consumers and beauty creators immediately recognized what the launch exposed. The problem had not been technical impossibility. It had been priority. When Fenty succeeded, other companies expanded shade ranges and marketing language, sometimes sincerely and sometimes because the market forced them to.`,
      `The "Fenty Effect" should be described with precision. Rihanna did not invent inclusive beauty, and Black-owned and niche brands had long served deeper skin tones. What Fenty did was make inclusion commercially undeniable at global luxury scale. It shifted expectations for launch ranges, campaign imagery, undertones, and who gets treated as the default customer.`,
      `Savage X Fenty extended that logic into lingerie and fashion presentation. Its runway shows and campaigns emphasized different body types, skin tones, genders, pregnancies, disabilities, and performance styles. As with beauty, the work belonged to a commercial system, not a utopia. But it pressured older brands whose narrow ideals had been sold as natural beauty for decades.`,
      `Rihanna's philanthropy through the Clara Lionel Foundation added another layer, with work connected to education, climate resilience, emergency response, and Caribbean communities. Celebrity philanthropy should always be read carefully because branding and giving can overlap. Still, the foundation demonstrates that Rihanna has used wealth and visibility to support institutions beyond entertainment.`,
      `Her designation as a National Hero of Barbados in 2021 placed her in a national story, not only a celebrity story. Barbados's transition to a republic and the honoring of Rihanna happened in the same public ceremony. That pairing made visible how a small island nation could claim one of the world's most recognizable entertainers as part of its modern identity.`,
      `Rihanna also changed public images of pregnancy and performance. Her 2023 Super Bowl halftime show became a major pop-culture moment partly because she performed while visibly pregnant, controlling the announcement through staging rather than a conventional press cycle. The image mattered because Black motherhood in public is often policed, sentimentalized, or erased. Rihanna made it stylish, powerful, and matter-of-fact.`,
      `Her story is still unfolding, which means an encyclopedia page should avoid pretending to know the final meaning. What can be said now is that Rihanna transformed attention into leverage. She moved from pop star to owner, from brand face to brand architect, from Barbados teenager to global figure who made industries answer to audiences they had underestimated.`
    ],
    costImpact: [
      `The cost of Rihanna's public life includes intense scrutiny, pressure around her body and relationships, and the demand that a living Black woman celebrity turn every private change into public content. Her 2009 assault by Chris Brown is part of the public record, but it should not be used to define her story or turn harm into spectacle.`,
      `Her impact is visible in music, beauty, fashion, and Caribbean representation. Fenty Beauty pushed mainstream brands to expand shade ranges. Her business success also changed how artists think about ownership and diversification, though it exists inside commercial systems that still deserve critique.`
    ],
    whyItMattersToday: [
      `Rihanna matters today because contemporary Black history is not only movement history or distant firsts. It is also the way culture moves markets, the way representation becomes a business demand, and the way a Black Caribbean woman can shape global standards of beauty and celebrity.`,
      `Her story also asks readers to distinguish inclusion from liberation. A broader foundation range matters because people deserve to be seen and served. It does not by itself undo colorism, labor exploitation, or the pressure to buy identity through products. The achievement and the critique can sit together.`,
      `The fuller lesson is that visibility becomes power when it changes decisions. Rihanna made companies, fans, and media institutions adjust to her rather than simply consuming her. That is a kind of cultural authorship.`
    ],
    connected: [
      { href: '@root/encyclopedia/madam-cj-walker.html', title: 'Madam C.J. Walker', description: 'Connects Black beauty enterprise, ownership, marketing, and community impact across eras.' },
      { href: '@root/generated/pages/prince.html', title: 'Prince', description: 'Links music stardom to ownership, branding, and control.' },
      { href: '@root/encyclopedia/black-fashion.html', title: 'Black Fashion', description: 'Places Rihanna inside a longer story of Black style reshaping global aesthetics.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Public Life', description: 'Connects image, scrutiny, public power, and the expectations placed on Black women.' }
    ],
    externalLinks: [
      { source: 'Fenty Beauty', title: 'About Fenty Beauty', url: 'https://fentybeauty.com/pages/about-fenty-beauty' },
      { source: 'Clara Lionel Foundation', title: 'About the Clara Lionel Foundation', url: 'https://claralionelfoundation.org/about/' },
      { source: 'GRAMMY.com', title: 'Rihanna Artist Profile', url: 'https://www.grammy.com/artists/rihanna/5943/' },
      { source: 'Encyclopaedia Britannica', title: 'Rihanna', url: 'https://www.britannica.com/biography/Rihanna' },
      { source: 'Government of Barbados', title: 'Rihanna Named National Hero', url: 'https://gisbarbados.gov.bb/blog/rihanna-is-national-hero/' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://fentybeauty.com/pages/about-fenty-beauty', 'https://claralionelfoundation.org/about/', 'https://gisbarbados.gov.bb/blog/rihanna-is-national-hero/'],
      supportingSources: ['https://www.grammy.com/artists/rihanna/5943/', 'https://www.britannica.com/biography/Rihanna'],
      verifiedQuoteSource: 'No quotation included. Living-person and business claims were summarized from official and institutional sources.',
      sensitiveClaimsReviewed: 'Living status, Barbados National Hero status, Fenty Beauty inclusivity claims, wealth/business framing, 2009 assault mention, pregnancy/public-body framing, and philanthropy scope reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond wealth list framing into music, Caribbean identity, beauty-industry standards, philanthropy, commerce, and careful living-person analysis.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, living-person and business-history claim review.'
    }
  },
  {
    encyclopediaSlug: 'robert-smalls',
    fullDate: '2026-07-01',
    dailyDateLabel: 'July 1',
    subject: 'Robert Smalls',
    category: 'Resistance',
    type: 'People',
    dates: '1839 - 1915',
    tags: ['resistance', 'military', 'politics', 'enslavement', 'reconstruction'],
    summary: `Robert Smalls did something almost cinematic before sunrise on May 13, 1862: he guided the Confederate transport Planter out of Charleston harbor, passed armed checkpoints, picked up family members and other enslaved people, and delivered the ship to Union forces. But the ship escape is only the first act. Smalls became a Union pilot, a political leader, a South Carolina legislator, and a member of Congress during Reconstruction. His page matters because he turned knowledge extracted by slavery into freedom, then turned freedom into lawmaking. He was not only a daring escape story. He was a builder of Black citizenship under fire.`,
    timeline: [
      { date: 'Apr 5, 1839', event: 'Born enslaved in Beaufort, South Carolina.' },
      { date: '1851', event: 'Is sent to Charleston, where he works in hotels, docks, and on vessels.' },
      { date: '1856', event: 'Marries Hannah Jones.' },
      { date: 'May 13, 1862', event: 'Seizes the Confederate transport Planter and sails it to Union lines with enslaved passengers aboard.' },
      { date: '1862-1865', event: 'Serves the Union as a pilot and naval worker during the Civil War.' },
      { date: '1868', event: 'Helps write South Carolina\'s Reconstruction constitution.' },
      { date: '1868-1874', event: 'Serves in the South Carolina legislature.' },
      { date: '1875', event: 'Begins service in the U.S. House of Representatives.' },
      { date: '1877', event: 'Federal retreat from Reconstruction leaves Black political power increasingly exposed.' },
      { date: 'Feb 23, 1915', event: 'Dies in Beaufort, South Carolina.' }
    ],
    fullStory: [
      `Robert Smalls was born enslaved in Beaufort, South Carolina, in 1839. As a child and young man, he was sent to Charleston, where slavery operated through skilled urban labor as well as plantation fields. He learned the harbor, ships, currents, signals, and habits of Confederate movement. Enslavers treated that knowledge as useful labor. Smalls understood it as something more: a map out.`,
      `By 1862, Smalls was working aboard the Planter, a Confederate transport vessel. Charleston harbor was heavily defended, and the risks of escape were extreme. Smalls and other enslaved crew members planned carefully. When the white officers left the ship for the night, Smalls put on the captain's clothing, guided the vessel away, picked up family members and others, and moved past Confederate checkpoints by giving the expected signals.`,
      `The escape was not a solo miracle. It required planning, trust, timing, knowledge, and the courage of the people who boarded knowing that capture could mean death or sale. Smalls carried his wife Hannah, their children, and other enslaved people toward Union lines. When the Planter reached Union forces, Smalls delivered not only people but a valuable ship, artillery, code books, and military intelligence.`,
      `The story electrified the North because it contradicted racist assumptions about Black ability and loyalty. Smalls had navigated one of the Confederacy's important harbors and handed the Union a propaganda victory. Congress awarded prize money, though not at the full value Smalls believed was due. He later served the Union as a pilot and helped recruit Black soldiers.`,
      `Smalls's wartime service also changed his public role. He spoke to officials, gained national attention, and pushed for Black military participation. His life made a direct argument: enslaved people were not passive objects waiting for freedom to be delivered. They were military actors, intelligence sources, navigators, and strategists in their own liberation.`,
      `After the war, Smalls returned to South Carolina and entered politics. Reconstruction opened possibilities that slavery had tried to make unimaginable. He served in the state constitutional convention, helped support public education, held seats in the South Carolina legislature, and represented South Carolina in Congress. His politics were grounded in the belief that citizenship had to be built through schools, voting rights, economic opportunity, and legal protection.`,
      `His career unfolded under constant white backlash. South Carolina's Reconstruction government faced violence, fraud, and national abandonment. Smalls was accused and convicted in a bribery case in 1877, then pardoned. The case sits inside the messy politics of Reconstruction, where corruption charges were sometimes real, sometimes weaponized, and often used by white supremacists to discredit Black governance as a whole. Smalls's public life should not be sanitized, but it also should not be read through the racist assumption that Black political power was inherently corrupt.`,
      `As federal commitment weakened, Black officeholding became more dangerous and more constrained. Smalls continued in public life, including customs service, even as disfranchisement and Jim Crow narrowed the world he had helped open. He lived long enough to see many Reconstruction gains attacked, but his own life remained evidence that the attack was political, not proof of incapacity.`,
      `The Planter escape is famous because it is dramatic. But stopping there misses the deeper story. Smalls's knowledge of ships came from coerced labor. His freedom came through collective action. His citizenship came through politics. His legacy belongs to the Civil War, Reconstruction, maritime history, and the long fight over whether Black competence would be recognized when it challenged white power.`,
      `Robert Smalls matters because he did not only steal himself and others out of slavery. He stole the argument that slavery had made about Black people. Then he spent decades writing a different argument into law.`
    ],
    costImpact: [
      `The cost of Smalls's escape could have been death for him, his family, and the other people aboard. The plan placed loved ones directly inside the danger because freedom for one person was not enough. His later political career also carried the cost of white retaliation, contested charges, and the rollback of Reconstruction democracy.`,
      `The impact was military and political. Smalls delivered intelligence and a vessel to the Union, helped challenge racist doubts about Black service, and became one of the Black officeholders who tried to turn emancipation into public institutions.`
    ],
    whyItMattersToday: [
      `Robert Smalls matters today because his story joins escape to governance. Many freedom stories end when the person reaches Union lines or crosses a border. Smalls's story asks what freedom is for after escape: schools, voting, officeholding, law, and public responsibility.`,
      `He also teaches that expertise can be born inside oppression without belonging to the oppressor. The harbor knowledge slavery demanded from Smalls became the tool that broke slavery's claim over him. Skill is never neutral when power tries to own the skilled person.`,
      `The fuller lesson is that Black resistance was strategic. Smalls read systems, used timing, protected family, served in war, and entered politics. That is more than bravery. It is leadership.`
    ],
    connected: [
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Places Smalls\'s political career inside the era of Black officeholding and backlash.' },
      { href: '@root/generated/pages/frederick-douglass.html', title: 'Frederick Douglass', description: 'Connects Black wartime advocacy, citizenship, and Union military service.' },
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'Shows the constitutional change Smalls helped turn into lived citizenship.' },
      { href: '@root/encyclopedia/hbcus.html', title: 'HBCUs', description: 'Connects Reconstruction institution-building to education and Black public life.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Robert Smalls', url: 'https://www.nps.gov/people/robert-smalls.htm' },
      { source: 'U.S. House of Representatives', title: 'Robert Smalls', url: 'https://history.house.gov/People/Listing/S/SMALLS,-Robert-(S000502)/' },
      { source: 'National Archives', title: 'Facial Hair Friday: Robert Smalls', url: 'https://prologue.blogs.archives.gov/2022/02/04/facial-hair-friday-robert-smalls/' },
      { source: 'Smithsonian Magazine', title: 'The Thrilling Tale of How Robert Smalls Seized a Confederate Ship and Sailed It to Freedom', url: 'https://www.smithsonianmag.com/history/thrilling-tale-how-robert-smalls-heroically-sailed-stolen-confederate-ship-freedom-180963689/' },
      { source: 'South Carolina Encyclopedia', title: 'Smalls, Robert', url: 'https://www.scencyclopedia.org/sce/entries/smalls-robert/' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/robert-smalls.htm', 'https://history.house.gov/People/Listing/S/SMALLS,-Robert-(S000502)/', 'https://prologue.blogs.archives.gov/2022/02/04/facial-hair-friday-robert-smalls/'],
      supportingSources: ['https://www.smithsonianmag.com/history/thrilling-tale-how-robert-smalls-heroically-sailed-stolen-confederate-ship-freedom-180963689/', 'https://www.scencyclopedia.org/sce/entries/smalls-robert/'],
      verifiedQuoteSource: 'No quotation included. Escape and officeholding claims were supported through NPS, House, and National Archives records.',
      sensitiveClaimsReviewed: 'Planter escape details, collective participation, prize money, congressional service, bribery conviction and pardon, Reconstruction backlash, and death date reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond escape anecdote into maritime expertise, Union service, Reconstruction politics, legal controversy, and citizenship building.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, Civil War and Reconstruction claim review.'
    }
  },
  {
    encyclopediaSlug: 'rosa-parks',
    fullDate: '2026-06-05',
    dailyDateLabel: 'June 5',
    subject: 'Rosa Parks',
    category: 'Civil Rights',
    type: 'People',
    dates: '1913 - 2005',
    tags: ['civil-rights', 'women', 'activism', 'segregation', 'voting-rights'],
    summary: `Rosa Parks was not a tired seamstress who accidentally started a movement. She was a trained organizer, NAACP secretary, investigator of racial violence, Highlander Folk School participant, and a woman who made a deliberate choice on a Montgomery bus on December 1, 1955. The tired myth is comforting because it makes movements look spontaneous and harmless. The real Parks is more powerful. She knew the law, knew the danger, and knew that Black Montgomery had networks ready to act. Her page matters because it restores strategy to a story too often reduced to politeness and fatigue.`,
    timeline: [
      { date: 'Feb 4, 1913', event: 'Born Rosa Louise McCauley in Tuskegee, Alabama.' },
      { date: '1932', event: 'Marries Raymond Parks, a barber and activist.' },
      { date: '1943', event: 'Becomes secretary of the Montgomery NAACP branch.' },
      { date: '1944', event: 'Investigates the sexual assault of Recy Taylor as part of NAACP work.' },
      { date: 'Summer 1955', event: 'Attends Highlander Folk School, a training center for labor and civil rights organizers.' },
      { date: 'Dec 1, 1955', event: 'Refuses to give up her bus seat in Montgomery and is arrested.' },
      { date: 'Dec 5, 1955', event: 'The Montgomery Bus Boycott begins.' },
      { date: 'Nov 1956', event: 'The Supreme Court affirms a ruling against Montgomery bus segregation.' },
      { date: '1957', event: 'Moves to Detroit after job loss, threats, and economic pressure.' },
      { date: 'Oct 24, 2005', event: 'Dies in Detroit, Michigan.' }
    ],
    fullStory: [
      `Rosa Louise McCauley grew up in Alabama under Jim Crow, where racial rules were enforced through law, custom, and violence. Her grandparents and mother shaped her sense of dignity and danger. The Ku Klux Klan was not distant folklore. It was a living threat. Parks later remembered watching her grandfather sit with a gun to protect the family home. That atmosphere matters because her courage was not naive. She knew what white supremacy could do.`,
      `In 1932, she married Raymond Parks, an activist who supported efforts to defend the Scottsboro Boys, nine Black teenagers falsely accused of raping two white women. Through Raymond and through her own convictions, Rosa Parks became involved in civil rights work before the bus made her famous. She joined the Montgomery NAACP and became branch secretary in 1943. Secretarial work sounds small only if one misunderstands movements. Records, correspondence, minutes, membership, testimony, and case files are infrastructure.`,
      `Parks investigated racial violence, including the 1944 case of Recy Taylor, a Black woman kidnapped and raped by white men in Abbeville, Alabama. The campaign for Taylor did not win convictions, but it built organizing networks and demonstrated Parks's willingness to confront sexual violence, a subject often pushed out of simplified civil rights memory. Parks was not only interested in buses. She was interested in Black bodily safety, voting rights, legal accountability, and dignity.`,
      `By 1955, Montgomery's buses were a daily theater of racial control. Black riders paid fares, were ordered to the back, could be forced to stand, and were humiliated by drivers with police power behind them. Claudette Colvin and other Black women had already resisted bus segregation that year. Jo Ann Robinson and the Women's Political Council had long considered a boycott. The city was not waiting for a random spark. It was full of pressure.`,
      `Parks attended Highlander Folk School in the summer of 1955, where organizers studied labor, civil rights, and collective action. When she refused to give up her seat on December 1, she was physically tired from work, but that was not the reason history should remember. She refused because she was tired of giving in. That distinction matters. The simplified version makes her passive. The real version shows a prepared person acting inside a prepared community.`,
      `Her arrest became the case organizers chose to rally around. The Women's Political Council moved quickly to print and distribute boycott leaflets. Black ministers, including the young Martin Luther King Jr., helped form the Montgomery Improvement Association. Thousands of Black residents walked, carpooled, organized rides, and endured weather, harassment, arrests, and economic pressure for more than a year.`,
      `Parks and her husband paid heavily. They lost work and faced threats. In 1957, they moved to Detroit, where Parks continued organizing around housing, policing, prisoners, labor, anti-apartheid activism, and political campaigns. The national image of Parks as quiet and harmless often erased this later radicalism. Detroit Parks was not a statue. She was still politically alive.`,
      `The Montgomery Bus Boycott ended after federal courts struck down bus segregation, but the victory was collective. Parks's action mattered because it met a community ready to move. That does not diminish her. It makes the story richer. Movements need individuals with courage and networks with capacity. Parks was both person and organizer.`,
      `The tired myth survives because it is easy to teach and easy to domesticate. A tired woman asks only for a seat. An organizer asks for a different society. Rosa Parks deserves the second story. She spent decades doing the work that made the bus action possible and continued doing work after the familiar photograph was taken.`,
      `Her page should leave readers with a more demanding Rosa Parks: precise, disciplined, politically aware, and unwilling to let comfort rewrite what happened. She did not stumble into history. She was already walking there.`
    ],
    quote: {
      text: 'I was tired of giving in.',
      cite: 'Rosa Parks, describing her refusal on the Montgomery bus'
    },
    costImpact: [
      `Parks paid with arrest, job loss, threats, surveillance, and economic instability. The public honor came much later. In the immediate years after Montgomery, she and Raymond Parks struggled financially and had to leave Alabama. The movement used her image, but the country did not immediately provide security in return.`,
      `Her impact was massive because her action helped catalyze a disciplined mass boycott. The boycott elevated new leadership, proved the power of sustained Black collective action, and attacked segregation through both community pressure and federal litigation.`
    ],
    whyItMattersToday: [
      `Rosa Parks matters today because the way people tell her story reveals what kind of activism they are willing to respect. If she is only tired, then protest can be innocent, accidental, and nonthreatening. If she is an organizer, then protest is planned, informed, and connected to other struggles. The second version is historically true and politically more honest.`,
      `Her life also teaches that women often hold movements together through work that later gets called support. Parks recorded cases, answered letters, investigated violence, attended trainings, and took risks before and after the bus. That labor made the famous moment possible.`,
      `The fuller lesson is that dignity is not politeness. Parks was dignified, but she was not passive. She refused, organized, endured, and kept going.`
    ],
    connected: [
      { href: '@root/encyclopedia/claudette-colvin.html', title: 'Claudette Colvin', description: 'Connects Parks to a younger Montgomery resister whose case is often left out.' },
      { href: '@root/encyclopedia/diane-nash.html', title: 'Diane Nash', description: 'Shows another disciplined strategist often flattened into a single moment.' },
      { href: '@root/encyclopedia/fannie-lou-hamer.html', title: 'Fannie Lou Hamer', description: 'Links women\'s organizing, testimony, voting rights, and the cost of public courage.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'Links Montgomery\'s bus victory to the broader legal attack on segregation.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Rosa Parks Papers', url: 'https://www.loc.gov/collections/rosa-parks-papers/about-this-collection/' },
      { source: 'National Park Service', title: 'Rosa Parks', url: 'https://www.nps.gov/people/rosa-parks.htm' },
      { source: 'National Archives', title: 'The Arrest Records of Rosa Parks', url: 'https://www.archives.gov/education/lessons/rosa-parks' },
      { source: 'Library of Congress', title: 'Highlander Folk School', url: 'https://www.loc.gov/exhibitions/rosa-parks-in-her-own-words/about-this-exhibition/the-bus-boycott/highlander-folk-school/' },
      { source: 'Rosa Parks Museum', title: 'About Rosa Parks', url: 'https://www.troy.edu/student-life-resources/arts-culture/rosa-parks-museum/about/index.html' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.loc.gov/collections/rosa-parks-papers/about-this-collection/', 'https://www.nps.gov/people/rosa-parks.htm', 'https://www.archives.gov/education/lessons/rosa-parks'],
      supportingSources: ['https://www.loc.gov/exhibitions/rosa-parks-in-her-own-words/about-this-exhibition/the-bus-boycott/highlander-folk-school/', 'https://www.troy.edu/student-life-resources/arts-culture/rosa-parks-museum/about/index.html'],
      verifiedQuoteSource: 'Short quotation traced to Rosa Parks accounts and cross-checked through institutional biographies.',
      sensitiveClaimsReviewed: 'Recy Taylor investigation, Highlander attendance, tired myth correction, job loss/threats, Detroit activism, and collective boycott role reviewed.',
      materialCorrections: 'Expanded scheduled fallback beyond bus refusal into NAACP work, sexual-violence investigation, organizer training, boycott infrastructure, and later Detroit activism.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short quotation, organizer-role and sensitive-violence claim review.'
    }
  },
  {
    encyclopediaSlug: 'ruby-bridges',
    outputPath: 'encyclopedia/ruby-bridges.html',
    dailyDateLabel: 'Encyclopedia',
    subject: 'Ruby Bridges',
    category: 'Education',
    type: 'People',
    dates: '1954 - present',
    tags: ['education', 'civil-rights', 'youth', 'women', 'segregation'],
    summary: `Ruby Bridges was six years old when federal marshals escorted her into William Frantz Elementary School in New Orleans in 1960. The image is famous because a child looks small against the machinery of adult hatred. But the fuller story includes Black parents making hard decisions, federal courts forcing local compliance, white parents withdrawing children, a teacher who stayed, a family paying economic costs, and a little girl spending much of first grade in a classroom by herself. Her page matters because school integration was not carried by policy alone. It was carried by children and families asked to absorb what adults refused to fix.`,
    timeline: [
      { date: 'Sept 8, 1954', event: 'Born Ruby Nell Bridges in Tylertown, Mississippi.' },
      { date: '1958', event: 'Moves with her family to New Orleans, Louisiana.' },
      { date: '1954', event: 'Brown v. Board of Education declares segregated public schools unconstitutional.' },
      { date: '1960', event: 'Ruby is one of several Black children selected to integrate New Orleans elementary schools.' },
      { date: 'Nov 14, 1960', event: 'Federal marshals escort Ruby Bridges into William Frantz Elementary School.' },
      { date: '1960-1961', event: 'Barbara Henry teaches Ruby alone after white parents withdraw many children.' },
      { date: '1960s', event: 'The Bridges family faces economic retaliation and community pressure.' },
      { date: '1964', event: 'Norman Rockwell paints The Problem We All Live With, inspired by Ruby\'s walk.' },
      { date: '1999', event: 'Ruby Bridges establishes the Ruby Bridges Foundation.' },
      { date: '2011', event: 'Visits the White House to view Rockwell\'s painting with President Barack Obama.' }
    ],
    fullStory: [
      `Ruby Bridges was born in Mississippi in 1954, the same year the Supreme Court decided Brown v. Board of Education. That pairing can feel symbolic, but symbols do not walk through crowds. Children do. Ruby's family moved to New Orleans, where school desegregation became a direct test of whether federal law would mean anything when local white resistance refused it.`,
      `By 1960, six years after Brown, New Orleans had still not peacefully integrated its schools. Federal courts ordered action. Ruby was one of a small group of Black children selected after testing to enter previously white schools. Her parents, Lucille and Abon Bridges, faced a terrible decision. Integration promised possibility, but it also meant exposing their daughter to danger. Lucille Bridges supported the step. The choice was not made lightly.`,
      `On November 14, 1960, federal marshals escorted Ruby into William Frantz Elementary. Crowds outside screamed. Some carried signs. Some threatened violence. The marshals were there because a six-year-old child needed federal protection to enter a public school. That fact should never become normal through repetition. It is one of the clearest images of adult failure in civil rights history.`,
      `Inside the school, white parents pulled their children out. Many teachers refused to teach Ruby. Barbara Henry, a white teacher from Boston, taught her alone for much of the year. Ruby ate lunch alone and played alone. The story is sometimes told as if her bravery made everything bearable. A fuller account has to say what isolation does. Integration asked a child not only to be brave at the doorway, but to endure loneliness after the cameras left.`,
      `The Bridges family paid costs too. Abon Bridges reportedly lost work. Grocery stores and neighbors could become hostile. The family needed support from Black and white allies. Their sacrifice shows that school integration did not ask one child to be courageous while everyone else watched. It pulled a family into economic and social retaliation.`,
      `Psychologist Robert Coles met with Ruby and later wrote about her experience. His accounts helped shape public memory, but they also remind us that adults studied Ruby's resilience because adults had placed her in a situation that required it. Children should not have to become symbols of moral clarity because institutions refuse ordinary justice.`,
      `Norman Rockwell's 1964 painting The Problem We All Live With made Ruby's walk part of American visual memory. The painting shows a small Black girl in a white dress escorted by marshals, with a racial slur and a thrown tomato on the wall. The title is important. The problem is not Ruby. The problem is the society around her.`,
      `Ruby Bridges grew up, raised a family, and later became a public speaker and founder of the Ruby Bridges Foundation. Her adult work has emphasized tolerance, education, and children's capacity to lead. That public role matters because it allowed her to speak back to an image that had circulated for decades. She was not frozen at age six.`,
      `Her story also needs to be connected to the other New Orleans children who integrated schools that day and to the broader legal struggle after Brown. Ruby was singular in the William Frantz story, but she was not alone in history. Leona Tate, Tessie Prevost, and Gail Etienne integrated McDonogh 19 the same day. Remembering them keeps the story from making one child's image carry a collective battle by itself.`,
      `Ruby Bridges matters because she makes the cost of school desegregation impossible to hide. Policy can sound clean. Court orders can sound finished. But the actual enforcement of Brown placed children at the front line of adult racism. Learning Ruby's story well means honoring her courage while refusing to praise a country for needing that courage from a first grader.`
    ],
    quote: {
      text: 'Racism is a grown-up disease and we must stop using our children to spread it.',
      cite: 'Ruby Bridges, public statement quoted by the Ruby Bridges Foundation'
    },
    costImpact: [
      `The cost to Ruby Bridges was childhood isolation, public danger, and the burden of becoming a symbol before she could understand the full politics around her. The cost to her family included economic retaliation, fear, and the knowledge that their daughter's ordinary school day required armed federal protection.`,
      `The impact was national because Ruby's walk exposed the violence behind polite defenses of segregation. Her story helped make school integration visible as a human demand, not just a court order. It also continues to shape how children learn about courage, racism, and adult responsibility.`
    ],
    whyItMattersToday: [
      `Ruby Bridges matters today because schools remain one of the main places Americans argue about equality while asking children to live with adult decisions. Segregation has changed forms, but unequal resources, district boundaries, discipline, curriculum fights, and racial isolation still shape education.`,
      `Her story also warns against sentimentalizing children in civil rights history. Calling Ruby brave is true, but it is not enough. The harder question is why bravery was required from a six-year-old to receive a public education.`,
      `The fuller lesson is that integration was not a photograph. It was policy, backlash, family sacrifice, classroom loneliness, and long memory. Ruby Bridges helps readers keep all of that in view.`
    ],
    connected: [
      { href: '@root/generated/pages/ruby-bridges-integration.html', title: 'Ruby Bridges and the Cost of School Integration', description: 'Connects Ruby\'s biography to the broader daily-entry focus on the burden placed on children.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'Places Ruby\'s walk inside the Supreme Court decision and enforcement fight.' },
      { href: '@root/encyclopedia/claudette-colvin.html', title: 'Claudette Colvin', description: 'Shows another young person whose courage revealed adult systems of segregation.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects legal desegregation to continuing school inequality.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Ruby Bridges', url: 'https://www.nps.gov/people/rubybridges.htm' },
      { source: 'National Women\'s History Museum', title: 'Ruby Bridges', url: 'https://www.womenshistory.org/education-resources/biographies/ruby-bridges' },
      { source: 'Official Ruby Bridges Website', title: 'Ruby Bridges', url: 'https://www.rubybridges.com/' },
      { source: 'Norman Rockwell Museum', title: 'The Problem We All Live With', url: 'https://www.nrm.org/thinglink/text/Problem_live_with.html' },
      { source: 'National Museum of American History', title: 'Ruby Bridges and School Desegregation', url: 'https://americanhistory.si.edu/brown/history/5-decision/ruby-bridges.html' }
    ],
    research: {
      status: 'batch-19-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/rubybridges.htm', 'https://www.womenshistory.org/education-resources/biographies/ruby-bridges', 'https://www.rubybridges.com/'],
      supportingSources: ['https://www.nrm.org/thinglink/text/Problem_live_with.html', 'https://americanhistory.si.edu/brown/history/5-decision/ruby-bridges.html'],
      verifiedQuoteSource: 'Short quotation traced to Ruby Bridges\' official website and cross-checked against institutional biographies.',
      sensitiveClaimsReviewed: 'Age, date of integration, marshals, family retaliation, classroom isolation, Barbara Henry role, other New Orleans children, living status, and Rockwell painting reviewed.',
      materialCorrections: 'Rebuilt legacy page with fuller attention to family decision-making, federal enforcement, classroom isolation, other New Orleans children, and adult responsibility.',
      finalStatus: 'Batch 19 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified short quotation, child-centered and living-person claim review.'
    }
  }
];

module.exports = {
  ENTRIES,
};
