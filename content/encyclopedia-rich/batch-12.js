const RESEARCH_DATE = '2026-08-15';

const ENTRIES = [
  {
    encyclopediaSlug: 'garrett-morgan',
    outputPath: 'encyclopedia/garrett-morgan.html',
    subject: 'Garrett Morgan',
    category: 'Innovation',
    type: 'People',
    dates: '1877 - 1963',
    tags: ['invention', 'public-safety', 'cleveland', 'entrepreneurship', 'traffic'],
    summary: `Garrett Morgan is often introduced through two inventions: the safety hood, an early breathing device, and the three-position traffic signal. That is true, but the fuller story is about a Black inventor who kept solving public safety problems while racism tried to shrink the market for his work. Morgan left Kentucky as a teenager, taught himself machinery in Cincinnati and Cleveland, built repair and garment businesses, marketed hair-care products, helped found a Black newspaper, and turned observation into patents. He did not invent traffic safety alone, and he did not invent the modern gas mask in its final form. What he did was design practical safety devices that saved lives, then fight for credit, customers, and civic respect in a country that wanted Black genius without Black authority.`,
    timeline: [
      { date: 'Mar 4, 1877', event: 'Born Garrett Augustus Morgan in Paris, Kentucky.' },
      { date: '1891', event: 'Leaves Kentucky as a teenager and moves to Cincinnati in search of work and education.' },
      { date: '1895', event: 'Moves to Cleveland, where he learns and repairs sewing machines.' },
      { date: '1907', event: 'Opens a sewing-machine repair business and later expands into garment manufacturing.' },
      { date: '1912', event: 'Files for a patent on a safety hood and smoke protector.' },
      { date: '1914', event: 'Receives U.S. Patent No. 1,090,936 for the safety hood.' },
      { date: 'Jul 25, 1916', event: 'Uses the breathing device during rescue work after the Cleveland Waterworks tunnel explosion.' },
      { date: '1920', event: 'Helps found the Cleveland Call, a Black weekly newspaper.' },
      { date: 'Nov 20, 1923', event: 'Receives U.S. Patent No. 1,475,024 for a three-position traffic signal.' },
      { date: '1923', event: 'Sells traffic-signal patent rights to General Electric.' },
      { date: '2005', event: 'Inducted into the National Inventors Hall of Fame.' }
    ],
    fullStory: [
      `Garrett Morgan's life starts in the years after Reconstruction, when legal freedom had arrived but opportunity was still rationed by race, class, region, and schooling. He was born in Paris, Kentucky, in 1877, the son of formerly enslaved parents according to several institutional accounts. He received limited formal education, then left Kentucky as a teenager. That move mattered. Morgan did not enter invention through a university laboratory. He entered through work: sweeping floors, repairing machines, watching systems fail, and figuring out how to make them work better.`,
      `Cincinnati gave him wages and a chance to hire a tutor. Cleveland gave him machinery. By the late 1890s, the city was growing into a manufacturing center, and Morgan learned the mechanics of sewing machines while working in the garment trade. He opened his own repair shop in 1907, then built a garment business with dozens of employees. That business experience shaped his inventions. He understood patents, manufacturing, demonstration, sales, and the way buyers made decisions before he ever became famous.`,
      `His safety hood came from the dangers of industrial cities. Firefighters, tunnel workers, miners, and rescue crews faced smoke and toxic gases with little protection. Morgan's device used a hood and tubes designed to draw cleaner air from near the floor, where smoke and some heated gases were less concentrated. He filed in 1912 and received a patent in 1914. The device won safety-exposition recognition, but its most dramatic test came before dawn on July 25, 1916, after an explosion in a Cleveland waterworks tunnel under Lake Erie trapped workers and rescuers in poison gas.`,
      `Morgan and others entered the tunnel wearing safety hoods. Accounts differ on exact numbers rescued and recovered, which is why this page avoids inflated claims. What is clear from the National Park Service, USPTO, Cleveland Historical, and National Inventors Hall of Fame accounts is that the device worked in a crisis and that Morgan personally joined the rescue. The public should have recognized him immediately as an inventor whose device had saved lives.`,
      `Instead, race distorted the response. White officials and customers were willing to use the invention, but many were reluctant to buy from a Black inventor. Morgan marketed under names and demonstrations that obscured his identity, including the use of white representatives. That strategy was not a funny anecdote. It was a business adaptation to racism. The marketplace rewarded the product while punishing the person who created it.`,
      `Morgan's traffic signal grew from another kind of public danger. Early twentieth-century streets were crowded with pedestrians, streetcars, bicycles, horse-drawn vehicles, and automobiles. Two-position signals often moved directly from stop to go, leaving no protected interval for clearing an intersection. Morgan patented a T-shaped signal with a third position, an all-direction stop or caution interval, in 1923. It was not the modern automatic yellow-light system by itself, and other traffic-control experiments existed. But Morgan's patent addressed a real safety problem and became part of the development path toward modern traffic control.`,
      `He was more than a patent holder. Morgan helped build Black civic infrastructure in Cleveland. Case Western Reserve's Encyclopedia of Cleveland History credits him with helping found the Cleveland Call around 1920, a newspaper that later merged into the Call & Post. He also supported Black organizations, built businesses, and used public visibility to claim space in a city where Black residents were growing in number but still excluded from many institutions.`,
      `The old version of Morgan's story can make him sound like a lone genius who simply invented two useful things. The more honest version is richer. He was a mechanic, employer, marketer, publisher, safety thinker, and civic actor. His inventions were public devices, made for people he would never meet: firefighters entering smoke, soldiers facing gas, drivers and pedestrians crossing streets. The tragedy is not that Morgan was unknown everywhere. Black newspapers documented him. The tragedy is that mainstream recognition came filtered through racism, and many people still use technologies shaped by his imagination without knowing whose problem-solving sits inside them.`
    ],
    quote: {
      text: `I have a Ph.D. from the school of hard knocks and cruel treatment.`,
      cite: 'Garrett Morgan, letter quoted by the USPTO Journeys of Innovation series'
    },
    costImpact: [
      `Morgan paid the cost of racism in the marketplace. Buyers who needed safety equipment hesitated when they learned the inventor was Black. He had to use racial disguise, intermediaries, and careful branding to sell a lifesaving device. That cost was not only emotional. It limited recognition, sales, institutional trust, and the wealth that could have followed public adoption.`,
      `His impact is visible in infrastructure. The safety hood sits in the lineage of respiratory protection for firefighters, soldiers, industrial workers, and rescue crews. The three-position traffic signal helped formalize the idea that intersections need a protected pause, not simply a command to stop or go. Morgan turned danger into design.`
    ],
    whyItMattersToday: [
      `Morgan matters because innovation is not only a flash of invention. It is also production, marketing, patent protection, public trust, and the right to be seen as the author of your own work. Racism attacked him at each of those points.`,
      `His story also corrects the lonely-genius myth. Morgan learned from labor, built businesses, watched accidents, read the street, and responded to practical danger. The lesson is not that formal education does not matter. It is that intelligence grows in workshops, routes, factories, newspapers, and civic life too.`,
      `When a traffic signal pauses before sending cars into an intersection, or when emergency workers depend on breathing protection, Morgan belongs in the conversation. Not as trivia, but as a reminder that Black public safety work has been built into ordinary life for more than a century.`
    ],
    connected: [
      { href: '@root/generated/pages/granville-woods.html', title: 'Granville T. Woods', description: 'Connects Morgan to another Black inventor who fought for patents and credit in electrical technology.' },
      { href: '@root/generated/pages/elijah-mccoy.html', title: 'Elijah McCoy', description: 'Shows how Black mechanical invention changed transportation and industrial safety.' },
      { href: '@root/generated/pages/lewis-howard-latimer.html', title: 'Lewis Howard Latimer', description: 'Links Morgan to patent drafting, electrical innovation, and the hidden labor behind famous technologies.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Places Morgan inside a broader history of Black invention, engineering, and erasure.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Garrett Morgan: An Uncommon Inventor', url: 'https://www.nps.gov/brvb/learn/news/garrettmorgan.htm' },
      { source: 'USPTO', title: 'Of Courage and Caution', url: 'https://www.uspto.gov/learning-and-resources/journeys-innovation/historical-stories/courage-and-caution' },
      { source: 'Federal Highway Administration', title: "Safer Stop and Go: Garrett Morgan's Traffic Signal Legacy", url: 'https://highways.dot.gov/highway-history/general-highway-history/safer-stop-and-go-garrett-morgans-traffic-signal-legacy' },
      { source: 'National Inventors Hall of Fame', title: 'Garrett Morgan', url: 'https://www.invent.org/inductees/garrett-morgan' },
      { source: 'Encyclopedia of Cleveland History', title: 'Morgan, Garrett A.', url: 'https://case.edu/ech/articles/m/morgan-garrett-a/' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/brvb/learn/news/garrettmorgan.htm', 'https://www.uspto.gov/learning-and-resources/journeys-innovation/historical-stories/courage-and-caution', 'https://highways.dot.gov/highway-history/general-highway-history/safer-stop-and-go-garrett-morgans-traffic-signal-legacy'],
      supportingSources: ['https://www.invent.org/inductees/garrett-morgan', 'https://case.edu/ech/articles/m/morgan-garrett-a/'],
      verifiedQuoteSource: 'USPTO Journeys of Innovation article quotes Morgan letter after the Cleveland tunnel rescue.',
      sensitiveClaimsReviewed: 'Formerly enslaved parent claim, safety hood patent date, tunnel-rescue scope, traffic-signal novelty, General Electric sale, Cleveland Call role, and racist sales barriers reviewed.',
      materialCorrections: 'Removed legacy invented pull-quote framing, corrected overbroad yellow-light language, and removed nonexistent daily challenge card because no generated daily entry exists for this slug.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, invention-first claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'george-floyd',
    fullDate: '2026-05-25',
    dailyDateLabel: 'May 25',
    subject: 'George Floyd',
    category: 'Justice',
    type: 'People',
    dates: '1973 - 2020',
    tags: ['policing', 'protest', 'minneapolis', 'criminal-justice', 'black-lives-matter'],
    summary: `George Floyd was a man before he became a global symbol: a father, son, brother, friend, athlete, worker, and Houston native whose life included faith, music, struggle, movement, and family. On May 25, 2020, Minneapolis police officer Derek Chauvin murdered him during an arrest outside Cup Foods while other officers failed to stop the force or provide the aid Floyd needed. The video forced millions of people to witness what Black communities had been naming for generations: police violence is not only an individual act, but a system of power, training, silence, and accountability. Floyd matters because the world saw him denied breath, and the aftermath made institutions answer questions they had spent years avoiding.`,
    timeline: [
      { date: 'Oct 14, 1973', event: 'Born George Perry Floyd Jr. in Fayetteville, North Carolina.' },
      { date: '1970s-1990s', event: 'Grows up in Houston, especially the Third Ward area, where friends know him as Perry.' },
      { date: '1990s', event: 'Plays football and basketball at Jack Yates High School and later attends South Florida Community College and Texas A&M University-Kingsville.' },
      { date: '2014', event: 'Moves to Minnesota, joining friends and seeking work and a new start.' },
      { date: 'May 25, 2020', event: 'Killed by Minneapolis police during an arrest outside Cup Foods.' },
      { date: 'May-Jun 2020', event: 'Video of the killing sparks protests across the United States and around the world.' },
      { date: 'Apr 20, 2021', event: 'Derek Chauvin is convicted in Minnesota state court of murder and manslaughter.' },
      { date: 'Jun 25, 2021', event: 'Chauvin is sentenced in state court to 270 months in prison.' },
      { date: 'Dec 15, 2021', event: 'Chauvin pleads guilty in federal court to violating Floyd\'s civil rights.' },
      { date: 'Feb 24, 2022', event: 'Three other former Minneapolis officers are convicted in federal court of civil-rights violations connected to Floyd\'s death.' },
      { date: 'May 1, 2023', event: 'Tou Thao becomes the last of the four former officers to be convicted in state proceedings.' }
    ],
    fullStory: [
      `The danger in writing about George Floyd is that the video can swallow the person. Floyd was born in North Carolina in 1973 and grew up in Houston. Friends and relatives knew him as Perry. He was tall, athletic, and visible in his neighborhood, a young man whose body made coaches notice him and whose presence made younger people remember him. He played sports at Jack Yates High School, then moved through college, work, music circles, ministry relationships, and the instability that marks many working-class lives in America.`,
      `None of that makes his death more or less worthy of outrage. It makes the story human. Floyd was not required to be perfect to deserve breath, safety, medical aid, or dignity. The need to say that plainly reveals one of the moral traps around police violence: victims are often put on trial in public memory, while the systems that killed them ask for patience and context.`,
      `On May 25, 2020, officers responded to a call from Cup Foods in Minneapolis about an alleged counterfeit $20 bill. Derek Chauvin, J. Alexander Kueng, Thomas Lane, and Tou Thao were among the officers involved. Floyd was handcuffed and restrained on the ground. Chauvin pressed his knee across Floyd's neck, back, and shoulder area while Floyd repeatedly said he could not breathe and while bystanders pleaded for officers to check him. The Justice Department later stated that Chauvin admitted in federal court that he continued using force even after Floyd had stopped resisting, talking, moving, and after he had lost consciousness and a pulse.`,
      `The video circulated quickly because bystanders recorded what official language might otherwise have softened. It showed duration, pleas, indifference, and public helplessness. It also showed community witness: people on the sidewalk naming what they saw, warning officers, and refusing to let the event disappear into a routine report. Their witness mattered.`,
      `The protests that followed were vast. People marched in Minneapolis, then in cities across the United States and beyond. The protests were not only about one officer or one city. They carried the names of Breonna Taylor, Ahmaud Arbery, Eric Garner, Philando Castile, Tamir Rice, Sandra Bland, and many others. They unfolded during the COVID-19 pandemic, when racial disparities in health, labor, housing, and risk were already painfully visible. Floyd's death became a rupture because it concentrated many existing truths into one public record.`,
      `The legal aftermath was unusual in the history of police violence. Chauvin was convicted in state court on April 20, 2021, then sentenced to 270 months in prison. He also pleaded guilty in federal court to civil-rights violations. The other three former officers were convicted in federal court; state proceedings against them ended with convictions or pleas. Those outcomes were not inevitable. They followed video evidence, protest pressure, local prosecution, federal civil-rights action, and sustained public attention.`,
      `Accountability did not settle the larger questions. What policies encourage officers to intervene when another officer uses unlawful force? What training matters if police culture punishes intervention? Why did bystanders recognize Floyd's medical crisis more urgently than sworn officers did? Why have Black communities had to produce video proof before institutions believe patterns they have described for decades?`,
      `Floyd's murder also changed memory work. Murals, street names, museum collecting, public art, and community memorials marked his life and the movement that followed. The Smithsonian's National Museum of African American History and Culture documented protest materials because the institution understood that people were making history in public space. That record matters, but it must not turn Floyd into an abstraction. He was a man killed by state power while people watched and pleaded.`,
      `To tell this history responsibly is to hold both truths: George Floyd's life cannot be reduced to his death, and his death cannot be separated from the systems that made it possible. His page belongs in an encyclopedia because the event changed law, protest, institutional speech, public memory, and the world's vocabulary for police accountability. But the center remains a human being whose breath was treated as negotiable.`
    ],
    costImpact: [
      `The cost begins with Floyd's life and the grief of his family, including his children and siblings. It includes the trauma carried by bystanders who witnessed the killing, the Minneapolis community around Cup Foods, and people who watched the video knowing it echoed older histories of Black death made public.`,
      `The impact was global protest, criminal accountability for four former officers, renewed scrutiny of policing, and institutional commitments whose depth varied widely. Some reforms were real, some were symbolic, and some were resisted or rolled back. Floyd's murder made denial harder, but it did not make justice automatic.`
    ],
    whyItMattersToday: [
      `Floyd matters today because video evidence changed what many people were willing to acknowledge, but Black communities should never have needed video to be believed. His story exposes the distance between public proof and lived knowledge.`,
      `The legal cases also show that accountability can happen when pressure, evidence, prosecution, and federal civil-rights enforcement align. That alignment is rare. The rarity is part of the lesson.`,
      `The most responsible memory of Floyd keeps his personhood and the policy questions together. Mourning without systems analysis becomes sentiment. Systems analysis without his humanity becomes cold. BHIRT has to hold both.`
    ],
    connected: [
      { href: '@root/generated/pages/black-lives-matter.html', title: 'Black Lives Matter', description: 'Places the protests after Floyd\'s murder inside a larger organizing framework against anti-Black violence.' },
      { href: '@root/generated/pages/emmett-till.html', title: 'Emmett Till', description: 'Connects public witness, grief, and national reckoning across generations.' },
      { href: '@root/generated/pages/fred-hampton.html', title: 'Fred Hampton', description: 'Links state violence, official narratives, and the fight over public memory.' },
      { href: '@root/encyclopedia/cointelpro.html', title: 'COINTELPRO', description: 'Shows a different federal history of state power, surveillance, and Black resistance.' }
    ],
    externalLinks: [
      { source: 'U.S. Department of Justice', title: 'Derek Chauvin Pleads Guilty in Federal Civil Rights Case', url: 'https://www.justice.gov/archives/opa/pr/former-minneapolis-police-officer-derek-chauvin-pleads-guilty-federal-court-depriving-george' },
      { source: 'U.S. Department of Justice', title: 'Three Former Minneapolis Police Officers Convicted of Federal Civil Rights Violations', url: 'https://www.justice.gov/archives/opa/pr/three-former-minneapolis-police-officers-convicted-federal-civil-rights-violations-death' },
      { source: 'Minnesota Attorney General', title: 'Tou Thao Convicted of 2nd-Degree Manslaughter in Murder of George Floyd', url: 'https://www.ag.state.mn.us/Office/Communications/2023/05/02_Thao.asp' },
      { source: 'Minnesota Attorney General', title: 'George Floyd Case Timeline', url: 'https://www.ag.state.mn.us/Office/Communications/2022/10/24_Floyd.asp' },
      { source: 'National Museum of African American History and Culture', title: 'Remembering George Floyd and the Movement He Sparked', url: 'https://nmaahc.si.edu/about/news/remembering-george-floyd-and-movement-he-sparked-one-year-later' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.justice.gov/archives/opa/pr/former-minneapolis-police-officer-derek-chauvin-pleads-guilty-federal-court-depriving-george', 'https://www.justice.gov/archives/opa/pr/three-former-minneapolis-police-officers-convicted-federal-civil-rights-violations-death', 'https://www.ag.state.mn.us/Office/Communications/2023/05/02_Thao.asp'],
      supportingSources: ['https://www.ag.state.mn.us/Office/Communications/2022/10/24_Floyd.asp', 'https://nmaahc.si.edu/about/news/remembering-george-floyd-and-movement-he-sparked-one-year-later'],
      verifiedQuoteSource: 'No quotation included. The page avoids reproducing last words or courtroom remarks as a pull quote.',
      sensitiveClaimsReviewed: 'Murder language, officer names, legal convictions, federal civil-rights pleas, state sentencing, protest scale, bystander role, and personhood framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a careful human and legal account, avoiding sensational use of video language and avoiding unsupported protest-statistic overclaiming.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, sensitive police-violence claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'gordon-parks',
    outputPath: 'encyclopedia/gordon-parks.html',
    subject: 'Gordon Parks',
    category: 'Arts',
    type: 'People',
    dates: '1912 - 2006',
    tags: ['photography', 'film', 'journalism', 'civil-rights', 'visual-culture'],
    summary: `Gordon Parks made the camera do more than record. He made it argue. Born in segregated Fort Scott, Kansas, Parks became a photographer, writer, composer, and filmmaker whose work moved through federal documentary projects, fashion magazines, Life magazine, novels, Hollywood, and music. He photographed poverty, segregation, civil rights leaders, Harlem families, fashion models, gang leaders, celebrities, and children with the same insistence: people deserved complexity. Parks matters because he widened who could make images and who could be seen inside them. He was not simply the first Black staff photographer at Life or the first Black director of a major Hollywood studio feature. He was a maker who used beauty without letting beauty become an escape from injustice.`,
    timeline: [
      { date: 'Nov 30, 1912', event: 'Born in Fort Scott, Kansas.' },
      { date: '1937', event: 'Buys his first camera after seeing documentary photographs of migrant workers.' },
      { date: '1941', event: 'Receives a Julius Rosenwald Fellowship.' },
      { date: '1942', event: 'Works with the Farm Security Administration in Washington, D.C., producing images including American Gothic.' },
      { date: '1944', event: 'Photographs for Standard Oil\'s documentary project.' },
      { date: '1948', event: 'Becomes the first Black staff photographer at Life magazine.' },
      { date: '1963', event: 'Publishes The Learning Tree, a semiautobiographical novel.' },
      { date: '1969', event: 'Writes and directs the film adaptation of The Learning Tree for Warner Bros.' },
      { date: '1971', event: 'Directs Shaft, a commercially successful film that reshapes Black action cinema.' },
      { date: '1988', event: 'Receives the National Medal of Arts.' },
      { date: '1995', event: 'Donates major archives to the Library of Congress.' },
      { date: 'Mar 7, 2006', event: 'Dies in New York City.' }
    ],
    fullStory: [
      `Gordon Parks entered American visual culture from the edge of what that culture wanted to see. He was born in Fort Scott, Kansas, in 1912, the youngest of 15 children, and grew up under segregation and poverty. After his mother's death, he left home as a teenager and worked a string of jobs: busboy, porter, waiter, piano player, and railroad worker. The instability did not disappear from his art. It gave him an eye for people living inside pressure.`,
      `Parks later said that seeing photographs of migrant workers pushed him toward photography. He bought a camera from a pawnshop and taught himself. That detail is often repeated because it is dramatic, but its meaning is deeper than self-taught genius. Parks learned by looking, by studying magazines, by persuading people to sit for him, and by building a portfolio in a world that did not expect a Black man to become a national image-maker.`,
      `The Julius Rosenwald Fellowship brought him to Washington, D.C., in 1942 to work with the Farm Security Administration. There he met institutional documentary photography and its limits. One of his most famous photographs, American Gothic, Washington, D.C., shows government worker Ella Watson standing with a broom and mop in front of an American flag. The image is not subtle, and that is why it works. Parks used the national symbol to expose the labor and exclusion beneath it.`,
      `He moved through federal and corporate documentary work, then into fashion and magazine photography. In 1948, his photo essay on Harlem gang leader Red Jackson helped him become the first Black staff photographer at Life. That position mattered. Life helped teach mid-century Americans what the world looked like. Parks entered that machinery and brought with him subjects mainstream magazines often flattened: Black neighborhoods, poverty, segregation, artists, athletes, civil rights leaders, and ordinary people fighting for dignity.`,
      `Parks's best work refuses one-note pity. He photographed poverty without reducing people to poverty. He photographed fashion without surrendering to surface. He photographed Malcolm X, Muhammad Ali, Stokely Carmichael, Ingrid Bergman, and families whose names were not famous. The throughline was attention. He understood that a camera could expose injustice, but also that a photograph could steal if the photographer treated people as objects. His strongest images keep the person present.`,
      `Writing became another form of image-making. Parks published memoir, fiction, poetry, and essays. The Learning Tree, his semiautobiographical novel, returned to Kansas and the violence, tenderness, and coming-of-age complications of Black life there. In 1969, he wrote and directed the film adaptation for Warner Bros., becoming the first African American to write and direct a major Hollywood studio feature. Two years later, Shaft made him part of a different conversation about Black cinema, commercial power, masculinity, music, and urban style.`,
      `Parks should not be boxed into respectability or rebellion. He worked inside major institutions, but he did not simply serve them. He used Life, Hollywood, publishing, and museums to make Black life visible on a scale those institutions could not easily ignore. He also made choices shaped by the market. Shaft's success sits alongside debates about blaxploitation, audience hunger, stereotype, and Black creative control. Parks's career is useful because it contains those tensions rather than hiding them.`,
      `In 1995, Parks donated a major archive to the Library of Congress. The gesture mattered because archives decide what later generations can study. His photographs, writings, scripts, music, and papers show a maker refusing to choose one medium or one audience. He kept reaching for forms that could carry what he had seen.`,
      `Gordon Parks called the camera a weapon against poverty, racism, and social wrongs. The word weapon can sound harsh until you remember what he faced. He did not mean a weapon for harm. He meant a tool sharp enough to cut through denial. His art insists that seeing is never neutral. Someone chooses the frame. Parks changed who held it.`
    ],
    quote: {
      text: `I saw that the camera could be a weapon against poverty, against racism, against all sorts of social wrongs.`,
      cite: 'Gordon Parks, quoted by the Gordon Parks Foundation'
    },
    costImpact: [
      `Parks paid the cost of being a Black professional inside overwhelmingly white media institutions. He had to persuade editors, audiences, and funders that his eye was authoritative while covering subjects distorted by racism. He also carried the ethical cost of photographing suffering: how to reveal injustice without turning people into exhibits.`,
      `His impact changed photography, journalism, and film. Parks opened doors for Black photographers and directors, but more than that, he changed the record. His archive gives future readers and viewers evidence of Black life, American poverty, style, rebellion, grace, and contradiction from inside the twentieth century.`
    ],
    whyItMattersToday: [
      `Parks matters today because images still shape policy, memory, empathy, and fear. The question is not only what an image shows. It is who made it, who controls it, and what the viewer is asked to do after seeing it.`,
      `His career also helps explain why representation behind the camera matters. A Black photographer at Life did not guarantee justice, but it changed the angle of national storytelling. Parks brought lived knowledge into rooms where Black people were often topics, not authors.`,
      `He leaves readers with a standard: beauty should not soften truth into decoration. In Parks's hands, beauty could make truth harder to dismiss.`
    ],
    connected: [
      { href: '@root/encyclopedia/james-baldwin.html', title: 'James Baldwin', description: 'Connects Parks to mid-century Black artists who used form, witness, and critique together.' },
      { href: '@root/encyclopedia/aave.html', title: 'AAVE and Linguistic Culture', description: 'Links visual authorship to the broader question of who gets to define Black expression.' },
      { href: '@root/encyclopedia/black-fashion.html', title: 'Black Fashion and Cultural Appropriation', description: 'Extends Parks\'s fashion and style work into questions of image, ownership, and culture.' },
      { href: '@root/generated/pages/alma-thomas.html', title: 'Alma Thomas', description: 'Places Parks beside another artist who expanded what American art could look like.' }
    ],
    externalLinks: [
      { source: 'Gordon Parks Foundation', title: 'Biography', url: 'https://www.gordonparksfoundation.org/gordon-parks/biography' },
      { source: 'Library of Congress', title: 'Gordon Parks Papers', url: 'https://findingaids.loc.gov/repositories/19/resources/2525' },
      { source: 'Library of Congress', title: 'Renaissance Man: Gordon Parks Donates His Archives', url: 'https://www.loc.gov/loc/lcib/9516/parks.html' },
      { source: 'Library of Congress', title: 'Photography: African American Artists Collection Connections', url: 'https://guides.loc.gov/african-american-artists/photography' },
      { source: 'Gordon Parks Museum', title: 'Gordon Parks Biography and Timeline', url: 'https://www.gordonparkscenter.org/gordon-parks' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.gordonparksfoundation.org/gordon-parks/biography', 'https://findingaids.loc.gov/repositories/19/resources/2525', 'https://www.loc.gov/loc/lcib/9516/parks.html'],
      supportingSources: ['https://guides.loc.gov/african-american-artists/photography', 'https://www.gordonparkscenter.org/gordon-parks'],
      verifiedQuoteSource: 'Gordon Parks Foundation biography quotes Parks on the camera as a weapon against poverty and racism.',
      sensitiveClaimsReviewed: 'First Black Life staff photographer framing, first major-studio feature director framing, FSA/OWI chronology, Shaft interpretation, archive donation, and death date reviewed.',
      materialCorrections: 'Expanded thin legacy page into full visual-culture, journalism, film, and archive account with verified source links.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, film/photography first-claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'granville-woods',
    fullDate: '2026-07-11',
    dailyDateLabel: 'July 11',
    subject: 'Granville T. Woods',
    category: 'Innovation',
    type: 'People',
    dates: '1856 - 1910',
    tags: ['invention', 'railroads', 'electricity', 'patents', 'labor'],
    summary: `Granville T. Woods was called the "Black Edison," but that nickname can hide more than it reveals. Woods was not valuable because he resembled Thomas Edison. He was valuable because he saw the dangerous new world of railroads and electricity from inside labor, then invented communication systems to make it safer. Born in Columbus, Ohio, with limited formal schooling, Woods worked as a machinist, railroad worker, engineer, and inventor. His railway telegraph and induction-telegraph work helped trains communicate while moving, a serious safety problem in an expanding rail economy. Woods matters because invention did not end when he received a patent. He had to defend priority, raise money, build companies, and survive legal fights in a field where race shaped who was believed.`,
    timeline: [
      { date: 'Apr 23, 1856', event: 'Born in Columbus, Ohio.' },
      { date: 'c. 1860s', event: 'Leaves formal schooling around age 10 and begins apprenticeships and labor in mechanical trades.' },
      { date: '1870s', event: 'Works in railroad and engineering jobs, gaining practical knowledge of trains and electrical systems.' },
      { date: '1876-1878', event: 'Studies electrical and mechanical engineering in New York, according to National Inventors Hall of Fame summary.' },
      { date: '1884', event: 'Receives an early patent for a steam boiler furnace.' },
      { date: '1885', event: 'Develops telegraphony, combining telephone and telegraph features.' },
      { date: 'Nov 15, 1887', event: 'Receives U.S. Patent No. 373,383 for railway telegraphy.' },
      { date: 'Nov 29, 1887', event: 'Receives U.S. Patent No. 373,915 for an induction telegraph system.' },
      { date: '1890s', event: 'Continues inventing and litigating patent claims involving railway and electrical technology.' },
      { date: 'Jan 30, 1910', event: 'Dies in New York City.' },
      { date: '2006', event: 'Inducted into the National Inventors Hall of Fame.' }
    ],
    fullStory: [
      `Granville T. Woods belongs to the history of invention, but also to the history of rail labor. He was born in Columbus, Ohio, in 1856 and received limited formal education. Like many mechanically gifted Black workers of the nineteenth century, he learned through apprenticeships, shops, ships, railroads, and private study. That path matters because his inventions came from close contact with the systems that failed.`,
      `Railroads remade American space in the nineteenth century. They moved people, freight, mail, troops, and capital across long distances. They also produced danger. Trains moving on shared tracks needed reliable communication with stations and with one another. A failure of timing or information could mean collision, injury, and death. Woods understood that communication was not a luxury. It was safety infrastructure.`,
      `His work in telegraphy and railway communication used electricity to address that problem. The National Inventors Hall of Fame credits him with railway telegraphy that allowed moving trains to communicate with rail stations and with each other. Patent records show his work in railway telegraphy and induction telegraph systems in November 1887. The details are technical, but the human point is clear: a train rushing through distance needed a way to speak before disaster arrived.`,
      `Woods's inventions also sat inside a brutal patent culture. A patent could protect an inventor, but it could also invite litigation from better-funded rivals. The American Physical Society's historical account notes that Woods became involved in patent-interference fights, including disputes around induction telegraphy. In a first-to-invent system, records, witnesses, models, and legal stamina mattered. For a Black inventor with limited access to capital, defending priority could be as hard as inventing the device.`,
      `The patent drawings and descriptions show how specific the problem was. Woods was not making a vague claim about better trains. He was trying to make electrical contact and communication possible between a moving train and lines along the track. In an era before radio dispatch and computerized control, that was a practical attempt to reduce uncertainty. Railroads depended on schedules, signals, telegraph offices, and human judgment. When any part failed, workers and passengers paid. Woods's technical imagination belonged to that world of risk, speed, and imperfect information.`,
      `Capital was the other track beneath the story. Inventors needed money for models, patent filings, legal defense, manufacturing, and sales. Woods formed companies and sold or licensed rights, but he did not control the industrial giants that could scale electrical systems across the country. That gap helps explain why Black invention can be visible in patent records while the profits and public memory flow elsewhere. The idea may begin with the inventor. The power to make it unavoidable often sits with institutions.`,
      `The nickname "Black Edison" is understandable, but it can be lazy. It measures Woods through a white inventor's fame instead of through Woods's own field, methods, and struggles. Woods was building in the world of railroads, electrical systems, telegraphy, and urban transit. Some of his ideas were purchased or contested by major companies. He was not a side note to Edison. He was part of the electrical age on his own terms.`,
      `Woods also complicates the myth that patents automatically create wealth. He received many patents, but repeated legal fights and the cost of commercialization limited the security that might have followed. Black inventors often had to persuade investors, fight infringement, and navigate a marketplace where white buyers questioned their credibility. Legal ownership did not erase racial hierarchy.`,
      `His work also reminds readers that invention is often collective and incremental. Woods did not singlehandedly create modern rail communication. He solved specific problems in a fast-moving technological landscape. His induction telegraph, telegraphony work, and railway electrical patents formed part of a larger movement toward safer, more connected transportation systems.`,
      `Granville Woods should be remembered as a thinker of motion. He understood machines that moved, signals that moved, electricity that moved, and information that needed to move faster than danger. He turned that understanding into patents, companies, lawsuits, and devices. His life teaches that Black innovation was not outside industrial America. It was inside the engine room, on the tracks, in the patent office, and in the courtroom fighting to be recognized.`
    ],
    costImpact: [
      `Woods paid the cost of inventing without the cushion enjoyed by better-funded white competitors. Litigation consumed money and time. Racism shaped investor confidence and public recognition. His limited formal schooling was used by some to underestimate him, even as his practical knowledge made his inventions possible.`,
      `His impact sits in transportation safety and electrical communication. Moving trains could become less isolated. Dispatchers and operators gained better ways to understand where trains were and how to communicate with them. Woods's work helped make railroads smarter before digital systems made that expectation ordinary.`
    ],
    whyItMattersToday: [
      `Woods matters today because infrastructure is full of invisible inventors. People notice the train, the signal, the wire, or the app. They rarely notice the person who solved a failure point generations earlier.`,
      `His story also helps readers understand patents as contested terrain. A patent is not magic. It must be defended, financed, manufactured, and believed. Woods's career shows how racial inequality can shape every stage after the idea.`,
      `Replacing "Black Edison" with Granville Woods's actual story gives him back his field: railroads, electricity, communication, and safety. That is more interesting than the nickname.`
    ],
    connected: [
      { href: '@root/encyclopedia/garrett-morgan.html', title: 'Garrett Morgan', description: 'Connects Woods to public-safety invention and the fight for credit in transportation technology.' },
      { href: '@root/generated/pages/elijah-mccoy.html', title: 'Elijah McCoy', description: 'Links rail technology to Black mechanical invention in the nineteenth century.' },
      { href: '@root/generated/pages/lewis-howard-latimer.html', title: 'Lewis Howard Latimer', description: 'Places Woods beside another Black inventor working inside the electrical age.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Broadens the story to Black engineers, inventors, and technologists across eras.' }
    ],
    externalLinks: [
      { source: 'U.S. Energy Information Administration', title: 'Woods (1856)', url: 'https://www.eia.gov/kids/history-of-energy/famous-people/woods.php' },
      { source: 'National Inventors Hall of Fame', title: 'Granville Woods', url: 'https://www.invent.org/inductees/granville-woods' },
      { source: 'Google Patents', title: 'US373383A: Railway Telegraphy', url: 'https://patents.google.com/patent/US373383A/en' },
      { source: 'Google Patents', title: 'US373915A: Induction Telegraph System', url: 'https://patents.google.com/patent/US373915A/en' },
      { source: 'American Physical Society', title: 'Granville Woods Patents the Induction Telegraph', url: 'https://www.aps.org/apsnews/2023/10/granville-woods-patents-induction-telegraph' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.eia.gov/kids/history-of-energy/famous-people/woods.php', 'https://patents.google.com/patent/US373383A/en', 'https://patents.google.com/patent/US373915A/en'],
      supportingSources: ['https://www.invent.org/inductees/granville-woods', 'https://www.aps.org/apsnews/2023/10/granville-woods-patents-induction-telegraph'],
      verifiedQuoteSource: 'No quotation included. Patent text is used as evidence, not as a pull quote.',
      sensitiveClaimsReviewed: 'Black Edison nickname, formal education limits, railway telegraph claims, patent numbers and dates, patent-interference disputes, and induction-telegraph priority reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a full account of railroad communication, patent defense, labor knowledge, and invention ownership.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, patent-first claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'gwendolyn-brooks',
    outputPath: 'encyclopedia/gwendolyn-brooks.html',
    subject: 'Gwendolyn Brooks',
    category: 'Literature',
    type: 'People',
    dates: '1917 - 2000',
    tags: ['poetry', 'chicago', 'pulitzer', 'black-arts-movement', 'publishing'],
    summary: `Gwendolyn Brooks made ordinary Black city life impossible to dismiss. She wrote kitchenette apartments, pool halls, mothers, school-skipping boys, beauty shops, riots, grief, jokes, and ambition with technical control and emotional nerve. In 1950, Annie Allen made her the first Black writer to win a Pulitzer Prize. But Brooks should not be frozen at the prize. In the late 1960s, she turned toward Black-owned presses, community workshops, prison readings, young poets, and a sharper public commitment to Black audiences. Brooks matters because she joined craft and community without treating either as decoration. Her poems were built, not poured, and they carried the South Side of Chicago into American literature on its own terms.`,
    timeline: [
      { date: 'Jun 7, 1917', event: 'Born in Topeka, Kansas.' },
      { date: '1917', event: 'Family moves to Chicago when Brooks is an infant.' },
      { date: '1936', event: 'Graduates from Wilson Junior College in Chicago.' },
      { date: '1945', event: 'Publishes A Street in Bronzeville.' },
      { date: '1949', event: 'Publishes Annie Allen.' },
      { date: 'May 1, 1950', event: 'Wins the Pulitzer Prize for Poetry for Annie Allen.' },
      { date: '1953', event: 'Publishes Maud Martha, her only novel.' },
      { date: '1960', event: 'Publishes The Bean Eaters, including We Real Cool.' },
      { date: '1967', event: 'Attends the Fisk University Writers\' Conference and deepens ties with Black Arts Movement writers.' },
      { date: '1968', event: 'Named Poet Laureate of Illinois.' },
      { date: '1969', event: 'Publishes Riot with Broadside Press.' },
      { date: '1985', event: 'Serves as Consultant in Poetry to the Library of Congress.' },
      { date: 'Dec 3, 2000', event: 'Dies in Chicago.' }
    ],
    fullStory: [
      `Gwendolyn Brooks was born in Kansas, but Chicago became her ground. Her family moved there when she was very young, and the South Side gave her a world dense enough for a lifetime of poems. She did not need exotic subjects. She had kitchenette buildings, street corners, schoolrooms, church people, beauty rituals, family pressure, private shame, public talk, and children becoming themselves under conditions adults had not chosen.`,
      `Brooks began writing early. Her parents encouraged her, but encouragement did not erase the racial and gendered limits around publishing. She studied craft seriously, read widely, and learned how tight form could hold complicated life. By the time A Street in Bronzeville appeared in 1945, she was not offering sociology disguised as poetry. She was making art from specific Black urban life, with meter, irony, dialogue, compression, and a deep ear for speech.`,
      `Annie Allen, published in 1949, won the Pulitzer Prize for Poetry in 1950. The Pulitzer site records the award plainly, but the meaning was not plain. Brooks became the first Black writer to win a Pulitzer Prize. That achievement mattered because it forced one of American literature's most visible institutions to recognize a Black woman writing Black life as major art. Still, prizes can flatten people. Brooks did not become important because she won. She won because the work was already important.`,
      `Her poems often refuse easy uplift. We Real Cool is brief enough to memorize and sharp enough to misread. Its speakers are stylish, endangered, funny, defiant, and young. Maud Martha, her 1953 novel, looks closely at an ordinary Black woman's interior life, where colorism, marriage, motherhood, beauty, disappointment, and pleasure move through small scenes. Brooks understood that the ordinary was not small. It was where systems landed.`,
      `The late 1960s changed her public direction. At the 1967 Fisk University Writers' Conference, Brooks encountered younger Black Arts Movement writers who pressed art toward Black audiences, Black ownership, and political urgency. She did not abandon craft. She reconsidered where the craft should live. She began publishing with Broadside Press and later Third World Press, Black-owned institutions that changed the economics and community of her work.`,
      `That publishing decision had material meaning. A writer with national recognition could have stayed comfortably with major New York publishers. Brooks chose instead to help build Black literary infrastructure. Pulitzer reporting notes that she donated royalties from Riot to Broadside Press, helping strengthen a Black-owned press that published other writers. That is not a footnote. It shows Brooks thinking about the life of a poem after publication: who prints it, who sells it, who profits, and who feels invited to read it.`,
      `Brooks also taught and mentored with unusual generosity. She visited schools, prisons, libraries, and community spaces. As Illinois Poet Laureate, she treated poetry as public practice, not private decoration. Her support for young writers helped create an ecosystem where emerging poets could imagine themselves as part of a lineage. She was exacting, but not distant.`,
      `Her quote about art hurting and urging voyages captures the seriousness of her view. Art was not a comfortable old shoe. It asked something of the maker and the reader. Brooks made that demand without losing humor, tenderness, or music. She could be miniature and vast in the same poem.`,
      `By the time she died in 2000, Brooks had received major honors, including service as Consultant in Poetry to the Library of Congress and the National Medal of Arts. But the best measure of her work is not the list of honors. It is the fact that she changed what counted as poetic subject matter and who could be imagined as poetry's central audience. She made Black Chicago speak in lines that still snap shut like a door and open like a window.`
    ],
    quote: {
      text: `Art hurts. Art urges voyages.`,
      cite: 'Gwendolyn Brooks, in a 1969 interview discussed by the Poetry Foundation'
    },
    costImpact: [
      `Brooks's turn toward Black presses likely cost her some mainstream publishing ease, but it gave material support to institutions aligned with her audience and politics. She accepted the burden of being both major poet and community worker, a role that required time, travel, teaching, and emotional labor not always counted by literary prestige.`,
      `Her impact is visible in classrooms, workshops, Black-owned publishing, Chicago poetry, and the long afterlife of poems that made Black working-class life central. She showed that technical excellence and community accountability are not opposites.`
    ],
    whyItMattersToday: [
      `Brooks matters today because publishing still asks who controls Black stories, who profits from them, and who is treated as the imagined reader. Brooks answered with choices, not only statements.`,
      `She also matters because her work resists the flattening of Black life into either damage or triumph. Her poems hold style, hunger, jokes, desire, boredom, danger, and tenderness. That range is part of the education.`,
      `For readers, Brooks offers a way to understand place as more than setting. The South Side is not background in her work. It is pressure, language, music, architecture, and memory.`
    ],
    connected: [
      { href: '@root/encyclopedia/zora-neale-hurston.html', title: 'Zora Neale Hurston', description: 'Connects Brooks to Black women writers who made community speech and ordinary life literary ground.' },
      { href: '@root/encyclopedia/toni-morrison.html', title: 'Toni Morrison', description: 'Links Brooks to another writer who centered Black readers and interior life.' },
      { href: '@root/encyclopedia/aave.html', title: 'AAVE and Linguistic Culture', description: 'Places Brooks\'s ear for speech inside the larger history of Black language.' },
      { href: '@root/generated/pages/frances-harper.html', title: 'Frances E.W. Harper', description: 'Shows a longer lineage of Black women using literature as public work.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Gwendolyn Brooks', url: 'https://www.loc.gov/programs/poetry-and-literature/poet-laureate/poets-laureate/item/n50041281/gwendolyn-brooks/' },
      { source: 'Pulitzer Prizes', title: 'Gwendolyn Brooks, 1950 Poetry Winner', url: 'https://www.pulitzer.org/winners/gwendolyn-brooks' },
      { source: 'Pulitzer Prizes', title: 'Gwendolyn Brooks: A Poet\'s Work in Community', url: 'https://www.pulitzer.org/news/gwendolyn-brooks-poets-work-community-opens-morgan-library' },
      { source: 'Poetry Foundation', title: 'Gwendolyn Brooks at 100', url: 'https://www.poetryfoundation.org/articles/92827/gwendolyn-brooks-at-100' },
      { source: 'Poetry Foundation', title: "Brooks to Picasso: 'Art Hurts'", url: 'https://www.poetryfoundation.org/poetry-news/77892/brooks-to-picasso-art-hurts' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.loc.gov/programs/poetry-and-literature/poet-laureate/poets-laureate/item/n50041281/gwendolyn-brooks/', 'https://www.pulitzer.org/winners/gwendolyn-brooks'],
      supportingSources: ['https://www.pulitzer.org/news/gwendolyn-brooks-poets-work-community-opens-morgan-library', 'https://www.poetryfoundation.org/articles/92827/gwendolyn-brooks-at-100', 'https://www.poetryfoundation.org/poetry-news/77892/brooks-to-picasso-art-hurts'],
      verifiedQuoteSource: 'Poetry Foundation discussion of Brooks\'s 1969 interview about art and the Chicago Picasso poem.',
      sensitiveClaimsReviewed: 'First Black Pulitzer winner claim, Consultant in Poetry title, Fisk conference influence, Black-owned press shift, royalties to Broadside Press, and death date reviewed.',
      materialCorrections: 'Rebuilt legacy page through rich renderer, corrected stale quiz-card behavior by removing nonexistent daily challenge link, and replaced weak external sources with direct literary institutions.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, literary first-claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'hank-aaron',
    outputPath: 'encyclopedia/hank-aaron.html',
    subject: 'Hank Aaron',
    category: 'Sports',
    type: 'People',
    dates: '1934 - 2021',
    tags: ['baseball', 'sports', 'racism', 'atlanta', 'records'],
    summary: `Hank Aaron's 715th home run is one of the clearest scenes in American sports: a Black man rounding the bases in Atlanta after passing Babe Ruth. But the single swing can hide the full career. Aaron was not only a record breaker. He was one of baseball's most consistent hitters, a Negro League alumnus, a Milwaukee and Atlanta Braves star, a World Series champion, a front-office executive, and a public figure who endured racist hate while doing his job with almost unbearable steadiness. Aaron matters because excellence did not protect him from racism. It exposed racism more clearly. His home-run chase showed what happens when a Black athlete threatens a white national myth by being better than the myth can tolerate.`,
    timeline: [
      { date: 'Feb 5, 1934', event: 'Born Henry Louis Aaron in Mobile, Alabama.' },
      { date: '1952', event: 'Plays briefly for the Indianapolis Clowns of the Negro American League.' },
      { date: '1954', event: 'Makes his major league debut with the Milwaukee Braves.' },
      { date: '1957', event: 'Wins the National League MVP Award and helps Milwaukee win the World Series.' },
      { date: '1966', event: 'Moves with the Braves franchise to Atlanta.' },
      { date: 'Apr 27, 1971', event: 'Hits his 600th career home run.' },
      { date: 'Apr 4, 1974', event: 'Hits career home run No. 714, tying Babe Ruth.' },
      { date: 'Apr 8, 1974', event: 'Hits home run No. 715 off Al Downing at Atlanta-Fulton County Stadium.' },
      { date: 'Jul 20, 1976', event: 'Hits his 755th and final major league home run.' },
      { date: '1982', event: 'Inducted into the National Baseball Hall of Fame.' },
      { date: '1994', event: 'Establishes the Chasing the Dream Foundation.' },
      { date: 'Jan 22, 2021', event: 'Dies in Atlanta, Georgia.' }
    ],
    fullStory: [
      `Hank Aaron's greatness was never just one swing. He was born in Mobile, Alabama, in 1934, in a segregated city where opportunity and humiliation lived side by side. He grew up loving baseball, hit with a cross-handed grip as a boy, and made his way from sandlots to the Negro American League's Indianapolis Clowns. That brief Negro League stop matters because Aaron's career sits near the transition between segregated Black baseball and an integrated major league system that still carried racism in its hotels, stands, clubhouses, and front offices.`,
      `Aaron reached the Milwaukee Braves in 1954. He was not theatrical in the way some stars are remembered. He was relentless. The Baseball Hall of Fame record is almost absurd in its steadiness: 25 All-Star selections, a .305 career average, 3,771 hits, 755 home runs, 2,297 RBI, and 6,856 total bases. Even if every home run disappeared from his record, he would still have more than 3,000 hits. That is not a fluke. It is discipline repeated for more than two decades.`,
      `In 1957, Aaron won the National League MVP Award and helped Milwaukee win the World Series. When the Braves moved to Atlanta in 1966, Aaron became a Black superstar in the Deep South at a time when civil rights law had changed faster than white attitudes. He kept producing. He hit line drives, home runs, doubles, and records with a swing that looked calm until the ball was gone.`,
      `The chase of Babe Ruth's record changed the atmosphere around him. Ruth was more than a baseball player in white American memory. He was mythology: power, appetite, nostalgia, whiteness, and old baseball glory. As Aaron closed in, some people celebrated him. Others treated the record as if it belonged racially to them. Aaron received racist hate mail and death threats. The Hall of Fame and MLB accounts describe security concerns, police protection, and the emotional toll on Aaron and his family.`,
      `On April 8, 1974, Aaron hit No. 715 off Los Angeles Dodgers pitcher Al Downing. Vin Scully's broadcast named the racial meaning directly: a Black man receiving a standing ovation in the Deep South for breaking the record of a white baseball idol. The moment was beautiful, but it did not erase what came before it. Aaron rounded the bases carrying joy, danger, exhaustion, and history at once.`,
      `The record chase can make Aaron seem like an unwilling symbol, and in some ways he was. He wanted to play baseball. But he also understood what the hate revealed. In later interviews, he spoke honestly about racism in the sport and the country. He did not allow the public to turn his dignity into silence.`,
      `Aaron finished with 755 home runs, a record that stood until Barry Bonds passed it in 2007. But his RBI and total-base records still help show why reducing him to home runs is too small. He was one of the most complete offensive players in baseball history. He was also one of the early Black figures to move into upper-level baseball management after retiring, working with the Braves in player development and executive roles.`,
      `His Chasing the Dream Foundation, founded in the 1990s, connected his career to scholarships and youth opportunity. That part of the story matters because Aaron did not treat his success as isolated from the children watching from places like Mobile. He knew what it meant to dream from a segregated childhood and to need someone to take that dream seriously.`,
      `Hank Aaron's page belongs in Black history because sports are never only games. Stadiums are public theaters where a nation rehearses its values. Aaron's record chase revealed both the beauty of collective applause and the ugliness of racist entitlement. He met both with a swing that did not flinch.`
    ],
    costImpact: [
      `Aaron paid with privacy, safety, and peace. The hate mail and threats around the home-run chase forced security measures and placed his family under fear. The emotional cost did not end when the ball cleared the fence. Racism carved itself into what should have been a purely joyful professional achievement.`,
      `His impact stretched beyond baseball statistics. He changed the record book, challenged racial mythology, became a model for consistency under pressure, and used later influence for youth scholarships and baseball leadership. His career made it harder to separate athletic greatness from the social conditions in which greatness is received.`
    ],
    whyItMattersToday: [
      `Aaron matters today because Black excellence is still often asked to be grateful, quiet, and nonthreatening. His pursuit of Ruth showed that even excellence performed with restraint can provoke rage when it changes who owns a symbol.`,
      `His career also complicates how sports remember racism. The standing ovation is part of the story. So are the letters, threats, police protection, and family fear. Telling only the triumphant version lets the country congratulate itself too easily.`,
      `Aaron's lesson is not simply perseverance. It is evidence: achievement can reveal the system around it. The swing mattered because the backlash told the truth.`
    ],
    connected: [
      { href: '@root/generated/pages/frank-robinson.html', title: 'Frank Robinson', description: 'Places Aaron beside another baseball great who forced MLB to confront leadership barriers.' },
      { href: '@root/encyclopedia/jackie-robinson.html', title: 'Jackie Robinson', description: 'Connects Aaron\'s career to the integration of modern Major League Baseball.' },
      { href: '@root/encyclopedia/althea-gibson.html', title: 'Althea Gibson', description: 'Shows another Black athlete whose excellence met segregated sports institutions.' },
      { href: '@root/generated/pages/joe-louis.html', title: 'Joe Louis', description: 'Links Aaron to Black athletes asked to carry national symbolism under racial pressure.' }
    ],
    externalLinks: [
      { source: 'National Baseball Hall of Fame', title: 'Hank Aaron', url: 'https://baseballhall.org/hall-of-famers/aaron-hank' },
      { source: 'National Baseball Hall of Fame', title: 'Henry Aaron Hits Home Run No. 715', url: 'https://baseballhall.org/discover-more/stories/inside-pitch/henry-aaron-hits-home-run-number-715' },
      { source: 'National Baseball Hall of Fame', title: 'Fifty Years Ago, Hank Aaron Became King', url: 'https://baseballhall.org/discover/fifty-years-ago-hank-aaron-became-king' },
      { source: 'MLB', title: 'Hank Aaron Overcame Racism, Hate Throughout Life', url: 'https://www.mlb.com/news/hank-aaron-overcame-racism-hate-throughout-life' },
      { source: 'Encyclopedia of Alabama', title: 'Henry "Hank" Aaron', url: 'https://encyclopediaofalabama.org/article/henry-hank-aaron/' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://baseballhall.org/hall-of-famers/aaron-hank', 'https://baseballhall.org/discover-more/stories/inside-pitch/henry-aaron-hits-home-run-number-715', 'https://baseballhall.org/discover/fifty-years-ago-hank-aaron-became-king'],
      supportingSources: ['https://www.mlb.com/news/hank-aaron-overcame-racism-hate-throughout-life', 'https://encyclopediaofalabama.org/article/henry-hank-aaron/'],
      verifiedQuoteSource: 'No quotation included. Broadcast and interview language was used as context but not reproduced as a pull quote.',
      sensitiveClaimsReviewed: 'Death date, Negro League stop, 715 date and pitcher, hate mail/death-threat claims, record totals, foundation work, and post-playing executive role reviewed.',
      materialCorrections: 'Expanded thin legacy page into full career and racial-context account; removed no-longer-current NPS present-date framing.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, sports-record and racism-claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'harold-washington',
    fullDate: '2026-08-16',
    dailyDateLabel: 'August 16',
    subject: 'Harold Washington',
    category: 'Politics',
    type: 'People',
    dates: '1922 - 1987',
    tags: ['chicago', 'mayor', 'politics', 'coalition', 'machine-politics'],
    summary: `Harold Washington's election as Chicago's first Black mayor in 1983 was not a feel-good milestone. It was a confrontation with a political machine that had long treated Black voters as useful but not central. Washington built a multiracial coalition of Black communities, Latinos, reform-minded white voters, labor, and neighborhood activists. Then he entered City Hall and met the Council Wars, a governing blockade led by white aldermen determined to limit his power. Washington matters because winning office did not end the fight. His mayoralty shows how democracy can be both expanded and sabotaged, and how old power can defend itself through rules, committees, maps, and budgets as much as through speeches.`,
    timeline: [
      { date: 'Apr 15, 1922', event: 'Born in Chicago.' },
      { date: '1943-1946', event: 'Serves in the U.S. Army during World War II.' },
      { date: '1949', event: 'Graduates from Roosevelt College.' },
      { date: '1952', event: 'Graduates from Northwestern University School of Law.' },
      { date: '1965', event: 'Begins service in the Illinois House of Representatives.' },
      { date: '1977', event: 'Begins service in the Illinois Senate.' },
      { date: '1981', event: 'Takes office in the U.S. House of Representatives.' },
      { date: 'Feb 22, 1983', event: 'Wins the Democratic mayoral primary against Jane Byrne and Richard M. Daley.' },
      { date: 'Apr 12, 1983', event: 'Elected Chicago\'s first Black mayor.' },
      { date: 'Apr 29, 1983', event: 'Inaugurated as Chicago\'s 51st mayor.' },
      { date: 'May 1986', event: 'Court-ordered ward elections help end the Council Wars stalemate.' },
      { date: 'Apr 7, 1987', event: 'Wins reelection to a second term.' },
      { date: 'Nov 25, 1987', event: 'Dies in office.' }
    ],
    fullStory: [
      `Harold Washington's story begins in Chicago's political world, not outside it. He was born in 1922, served in World War II, graduated from Roosevelt College and Northwestern law, and moved through legal and political work before becoming a national figure. His father had been active in ward politics, and Washington understood the machine from the inside. That knowledge helped him challenge it more effectively.`,
      `Chicago politics had long been shaped by patronage, ward power, racial segregation, and the Democratic organization built under Richard J. Daley. Black voters were essential to Democratic victories but often excluded from proportional power. By the early 1980s, frustration had sharpened. Jane Byrne's mayoralty had disappointed many reformers, Richard M. Daley represented machine continuity, and activists pushed Washington to run.`,
      `The 1983 campaign was electric and ugly. Washington won the Democratic primary on February 22, defeating Byrne and Daley. In most Chicago elections, the Democratic primary winner was nearly guaranteed the mayor's office. Not this time. Many white Democratic regulars supported Republican Bernard Epton in the general election. Epton's slogan, "Before it's too late," was widely read as playing to racial fear. The campaign made visible what polite Chicago language often concealed.`,
      `Washington won on April 12, 1983, with a coalition that remade the city's political map. Black turnout surged. Latino and progressive white voters mattered. Neighborhood organizations, reformers, and people tired of machine politics saw a chance to open City Hall. On April 29, he was inaugurated as Chicago's first African American mayor.`,
      `Then the governing fight began. The Encyclopedia of Chicago describes the Council Wars as a conflict between Washington and the "Vrdolyak 29," an all-white bloc led by Edward Vrdolyak and Edward Burke. Because Chicago's council structure gave aldermen substantial power, the bloc could block appointments, control committees, and frustrate the mayor's agenda. The obstruction was procedural, but the racial meaning was plain. Washington had won the office. His opponents tried to keep him from governing.`,
      `Washington responded with executive action, public pressure, legal fights, budget work, and coalition maintenance. Chicago Public Library's summary credits his administration with creating an Ethics Commission, opening government through a Freedom of Information executive order, broadening opportunities in contracts and city employment, pushing ward redistricting, opening the budget process, and seeking more balanced development between downtown and neighborhoods. Those reforms were not glamorous in the way campaign rallies are. They were about who gets access to the machinery of the city.`,
      `The Council Wars did not fully end until court-ordered special ward elections in 1986 changed the balance of power. Washington gained a working council majority through his tie-breaking vote. That gave his second term a different promise. He won reelection in 1987, but died in office on November 25 of that year. The brevity of his mayoralty is part of its ache. He had spent so much of the first term fighting for the right to govern that the next phase barely began.`,
      `Washington's importance is not that he was perfect. He was a politician, coalition builder, lawyer, veteran, legislator, and sometimes combative public figure. His legacy is more useful when it stays political rather than saintly. He showed that representation matters, but representation alone cannot transform a city if budgets, maps, committees, contracts, and appointments remain controlled by old power.`,
      `Chicago still argues over Washington because he represented a different idea of the city: one where neighborhoods outside downtown, Black and Latino voters, reformers, and ordinary residents could claim City Hall as theirs. His election was a victory. The Council Wars showed why the victory was only the opening move.`
    ],
    costImpact: [
      `Washington paid the cost of governing under racialized obstruction. His first term was consumed by council warfare, public attacks, procedural sabotage, and the pressure of holding a fragile coalition together. The city paid too: delays, distrust, and political bitterness slowed reforms that voters had chosen.`,
      `His impact was structural. Ethics rules, open-government commitments, minority contracting, neighborhood development, cultural planning, and ward representation all carried his imprint. He also changed the expectations of who could lead Chicago and whose votes could define the city.`
    ],
    whyItMattersToday: [
      `Washington matters today because elections do not automatically transfer power. Institutions can resist democratic change through procedure. Committee assignments, maps, budget rules, and appointments can become weapons when old coalitions lose at the ballot box.`,
      `His mayoralty also teaches that multiracial coalitions require policy, not just symbolism. Washington's base was held together by the promise that government could be opened and redistributed in practical ways.`,
      `For modern readers, the lesson is bracing: representation is necessary, but the real fight is often over governing authority after the celebration ends.`
    ],
    connected: [
      { href: '@root/generated/pages/carl-stokes.html', title: 'Carl Stokes', description: 'Connects Washington to earlier Black mayoral breakthroughs and city-governance battles.' },
      { href: '@root/generated/pages/david-dinkins.html', title: 'David Dinkins', description: 'Links Chicago\'s first Black mayor to New York\'s first Black mayor and coalition politics.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Broadens the story to Black political leadership and the institutions that resist it.' },
      { href: '@root/generated/pages/voting-rights-act.html', title: 'Voting Rights Act', description: 'Connects Washington\'s coalition to the voting rights infrastructure that made representation fights possible.' }
    ],
    externalLinks: [
      { source: 'Chicago Public Library', title: 'Mayor Harold Washington Biography', url: 'https://www.chipublib.org/mayor-harold-washington-biography/' },
      { source: 'Chicago History Museum', title: 'Harold Washington and the 1983 Chicago Mayoral Election', url: 'https://www.chicagohistory.org/exhibition/harold-washington-1983-chicago-mayoral-election/' },
      { source: 'Chicago Public Library', title: 'Harold Washington in His Own Words', url: 'https://www.chipublib.org/blogs/post/harold-washington-in-his-own-words/' },
      { source: 'Illinois Digital Heritage Hub', title: 'Harold Washington Sources', url: 'https://omeka-s.library.illinois.edu/s/idhh/page/chicago-mayor-washington-sources' },
      { source: 'Chicago Public Library', title: 'Harold Washington Archives and Collections', url: 'https://www.chipublib.org/fa-harold-washington-archives-and-collections-mayoral-records-public-safetyregulatory-sub-cabinet-records/' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.chipublib.org/mayor-harold-washington-biography/', 'https://www.chicagohistory.org/exhibition/harold-washington-1983-chicago-mayoral-election/', 'https://www.chipublib.org/blogs/post/harold-washington-in-his-own-words/'],
      supportingSources: ['https://omeka-s.library.illinois.edu/s/idhh/page/chicago-mayor-washington-sources', 'https://www.chipublib.org/fa-harold-washington-archives-and-collections-mayoral-records-public-safetyregulatory-sub-cabinet-records/'],
      verifiedQuoteSource: 'No quotation included. Campaign slogan discussed as historical context but not styled as Washington quotation.',
      sensitiveClaimsReviewed: 'First Black mayor claim, election dates, Epton slogan interpretation, Vrdolyak 29 racial composition, Council Wars end, reform accomplishments, reelection, and death in office reviewed.',
      materialCorrections: 'Expanded scheduled fallback into full coalition, machine-politics, Council Wars, and governance account.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, political-conflict claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'harriet-jacobs',
    fullDate: '2026-06-27',
    dailyDateLabel: 'June 27',
    subject: 'Harriet Jacobs',
    category: 'Witness',
    type: 'People',
    dates: '1813 - 1897',
    tags: ['enslavement', 'literature', 'women', 'abolition', 'sexual-violence'],
    summary: `Harriet Jacobs wrote what slavery tried hardest to silence: the interior life of an enslaved Black woman confronting sexual coercion, motherhood under property law, and the impossible choices forced by bondage. Born in Edenton, North Carolina, Jacobs escaped her enslaver's control by hiding for nearly seven years in a cramped attic space in her grandmother's house, close enough to hear her children but unable to live with them openly. In 1861, using the name Linda Brent, she published Incidents in the Life of a Slave Girl. The book mattered because it spoke directly to Northern women and refused to let antislavery politics avoid sexual violence. Jacobs was not asking readers for pity. She was giving testimony.`,
    timeline: [
      { date: 'Feb 11, 1813', event: 'Born Harriet Ann Jacobs in Edenton, North Carolina.' },
      { date: '1825', event: 'After her first enslaver dies, Jacobs comes under the control of Dr. James Norcom, represented as Dr. Flint in her narrative.' },
      { date: '1835', event: 'Escapes Norcom\'s household and begins hiding in Edenton.' },
      { date: '1835-1842', event: 'Lives hidden for nearly seven years in a small attic crawlspace above her grandmother\'s storeroom.' },
      { date: '1842', event: 'Escapes by boat to the North.' },
      { date: '1844-1849', event: 'Lives at times in Boston, including at 87 Charter Street, while evading capture.' },
      { date: '1852', event: 'Her legal freedom is purchased by Cornelia Grinnell Willis, a painful compromise Jacobs later described.' },
      { date: '1861', event: 'Publishes Incidents in the Life of a Slave Girl under the pseudonym Linda Brent.' },
      { date: '1860s', event: 'Works in relief and education efforts for freed people during and after the Civil War.' },
      { date: 'Mar 7, 1897', event: 'Dies in Washington, D.C.' }
    ],
    fullStory: [
      `Harriet Jacobs was born into slavery in Edenton, North Carolina, in 1813. Her early childhood was not free, but she later remembered it as less openly brutal than what followed. The death of her enslaver changed everything. As a child, Jacobs came under the control of Dr. James Norcom, the man she would disguise as Dr. Flint in Incidents in the Life of a Slave Girl. That pseudonym protected people and shaped the narrative, but it did not make the story fiction.`,
      `Jacobs's book forced readers to face what many antislavery texts only implied: enslaved Black women lived under sexual threat from men who legally owned or controlled them. Norcom harassed Jacobs from adolescence, and his power was not only physical. He controlled movement, labor, punishment, and the future of her children. Jacobs wrote for Northern women partly because she wanted them to understand that conventional ideas of virtue were cruelly inadequate under slavery. The system created the danger, then judged women for surviving it.`,
      `Her relationship with Samuel Sawyer, a white lawyer, and the birth of her children, Joseph and Louisa, have often been discussed through respectability politics. Jacobs herself knew readers might condemn her. That is part of the courage of the book. She did not pretend that slavery allowed clean choices. She explained that her decisions were made under coercion, surveillance, and fear, and that motherhood sharpened every risk.`,
      `In 1835, Jacobs escaped Norcom's immediate control, but not slavery itself. Instead of fleeing directly north, she hid locally. For nearly seven years, she lived in a tiny crawlspace above a storeroom in her grandmother Molly Horniblow's house. The space was so cramped she could not stand upright. She bored a small hole that allowed her to watch her children outside. That detail is unforgettable, but it should not be romanticized. The attic was not freedom. It was a strategy against sale, rape, separation, and capture.`,
      `Jacobs finally escaped north by boat in 1842. Freedom remained unstable because the Fugitive Slave Act and the power of slave catchers meant that Northern cities could still be dangerous. The National Park Service documents her time in Boston, where she stayed with her brother John and worked as a dressmaker. She also lived in New York and worked for the Willis family. Her legal freedom was purchased in 1852 by Cornelia Grinnell Willis. Jacobs was grateful for safety but angry that anyone had the legal power to buy what should never have been owned.`,
      `Publishing Incidents was difficult. Harriet Beecher Stowe declined to help in the way Jacobs hoped. Lydia Maria Child eventually edited the book, and it was published in Boston in 1861 under Jacobs's pseudonym, Linda Brent. The timing was hard: the Civil War began, and the book did not receive the attention it deserved. For much of the twentieth century, some scholars doubted its authorship and factual basis. Jean Fagan Yellin's archival research later restored Jacobs to her own text and documented her life through letters and records.`,
      `The book's power lies in its direct address. Jacobs tells readers that the narrative is no fiction. She withholds some names, but not the truth of the system. She describes family separation, sexual coercion, jealousy in the enslaver's household, Northern racism, fugitive fear, and the price of motherhood under slavery. She refuses the idea that enslaved women were merely victims without strategy. She calculates, hides, negotiates, writes, escapes, and testifies.`,
      `After publication, Jacobs worked in relief and education efforts connected to freed people during and after the Civil War. Her life did not end at escape or publication. She remained part of Black reform networks, with her brother John and daughter Louisa also active in antislavery and relief work.`,
      `Harriet Jacobs matters because she changed what testimony could include. She made sexual violence, maternal grief, and moral judgment central to the indictment of slavery. Her work asks readers not simply to admire survival, but to understand the system that made survival require such impossible choices.`
    ],
    quote: {
      text: `Reader, be assured this narrative is no fiction.`,
      cite: 'Harriet Jacobs, preface to Incidents in the Life of a Slave Girl'
    },
    costImpact: [
      `Jacobs paid with years of confinement, separation from her children, physical pain, fear of discovery, public vulnerability, and the later burden of telling truths many readers did not want from a Black woman. Even legal freedom came through purchase, a final insult from a system that treated her personhood as transferable property.`,
      `Her impact is literary, historical, and political. Incidents gave antislavery readers a direct account of gendered violence under slavery and later gave scholars a crucial text for understanding enslaved women's authorship, motherhood, and resistance.`
    ],
    whyItMattersToday: [
      `Jacobs matters today because public history still struggles with sexual violence, especially when the victims are Black women. Her narrative refuses silence without turning pain into spectacle.`,
      `She also matters because she shows that resistance can look like hiding, waiting, writing, protecting children, changing names, and telling the truth when respectability would prefer quiet.`,
      `Reading Jacobs changes the meaning of freedom. It was not only reaching the North. It was reclaiming body, children, story, and name from a system built to own all four.`
    ],
    connected: [
      { href: '@root/encyclopedia/harriet-tubman.html', title: 'Harriet Tubman', description: 'Connects Jacobs to self-emancipation, fugitive danger, and Black women\'s freedom strategies.' },
      { href: '@root/encyclopedia/enslaved-labor.html', title: 'Enslaved Labor and American Infrastructure', description: 'Places Jacobs\'s personal testimony inside the larger system of slavery as economics and law.' },
      { href: '@root/generated/pages/frances-harper.html', title: 'Frances E.W. Harper', description: 'Links Jacobs to Black women\'s antislavery writing and public moral argument.' },
      { href: '@root/generated/pages/frederick-douglass.html', title: 'Frederick Douglass', description: 'Connects Jacobs to the broader tradition of formerly enslaved authors using narrative as testimony.' }
    ],
    externalLinks: [
      { source: 'Documenting the American South', title: 'Incidents in the Life of a Slave Girl', url: 'https://docsouth.unc.edu/fpn/jacobs/jacobs.html' },
      { source: 'National Park Service', title: "Site of Harriet Jacobs' Charter Street Home", url: 'https://www.nps.gov/places/harriet-jacobs-home-charter-street.htm' },
      { source: 'National Museum of African American History and Culture', title: 'Incidents in the Life of a Slave Girl: Written By Herself', url: 'https://nmaahc.si.edu/object/nmaahc_2015.97.6' },
      { source: 'National Archives', title: 'The Harriet Jacobs Family Papers', url: 'https://www.archives.gov/nhprc/projects/catalog/harriet-jacobs' },
      { source: 'UNC Press', title: 'The Harriet Jacobs Family Papers', url: 'https://uncpress.org/9780807831311/the-harriet-jacobs-family-papers/' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://docsouth.unc.edu/fpn/jacobs/jacobs.html', 'https://nmaahc.si.edu/object/nmaahc_2015.97.6', 'https://www.archives.gov/nhprc/projects/catalog/harriet-jacobs'],
      supportingSources: ['https://www.nps.gov/places/harriet-jacobs-home-charter-street.htm', 'https://uncpress.org/9780807831311/the-harriet-jacobs-family-papers/'],
      verifiedQuoteSource: 'Preface to Incidents in the Life of a Slave Girl in the Documenting the American South text.',
      sensitiveClaimsReviewed: 'Sexual harassment and coercion, pseudonyms, attic confinement duration, legal freedom purchase, publication authorship, Yellin verification, and Civil War relief work reviewed.',
      materialCorrections: 'Expanded scheduled fallback into full gendered-slavery, authorship, hiding, publication, and reform-work account.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified quotation, sensitive sexual-violence claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'harriet-tubman',
    outputPath: 'encyclopedia/harriet-tubman.html',
    subject: 'Harriet Tubman',
    category: 'Resistance',
    type: 'People',
    dates: 'c. 1822 - 1913',
    tags: ['underground-railroad', 'civil-war', 'self-emancipation', 'women', 'military'],
    summary: `Harriet Tubman is famous enough to become myth, which makes accuracy even more important. She was born Araminta Ross on Maryland's Eastern Shore, survived slavery and a traumatic head injury, escaped in 1849, then repeatedly returned to guide family and others to freedom. National Park Service accounts credit her with about 13 trips into Maryland and the liberation of roughly 70 people, plus instructions that helped others escape. During the Civil War she served as a nurse, scout, spy, and military guide, helping plan the Combahee River Raid that freed more than 700 people. Tubman matters because she was not magic. She was disciplined, strategic, disabled, devout, tired, underpaid, and brilliant at turning landscape, trust, and intelligence into freedom.`,
    timeline: [
      { date: 'Mar 1822', event: 'Born Araminta Ross in Dorchester County, Maryland, according to National Park Service dating.' },
      { date: 'c. 1835', event: 'Suffers a severe head injury after an overseer throws a weight that strikes her.' },
      { date: '1844', event: 'Marries John Tubman and takes the name Harriet Tubman.' },
      { date: 'Sept 1849', event: 'Escapes slavery after learning she may be sold.' },
      { date: '1850-1860', event: 'Returns to Maryland about 13 times, leading roughly 70 people to freedom.' },
      { date: '1859', event: 'Purchases property in Auburn, New York, from William H. Seward.' },
      { date: '1862', event: 'Travels to South Carolina to support Union efforts as nurse, scout, and spy.' },
      { date: 'Jun 1-2, 1863', event: 'Helps lead the Combahee River Raid, freeing more than 700 enslaved people.' },
      { date: '1896', event: 'Speaks at a women\'s suffrage convention and describes her Underground Railroad work.' },
      { date: '1890s', event: 'Establishes the Harriet Tubman Home for the Aged in Auburn.' },
      { date: 'Mar 10, 1913', event: 'Dies in Auburn, New York, and is buried with military honors.' }
    ],
    fullStory: [
      `Harriet Tubman's life has been told so often that some details harden into legend. The responsible version is no less powerful. She was born Araminta Ross in Dorchester County, Maryland, probably in March 1822, to enslaved parents Ben Ross and Harriet "Rit" Green. The Eastern Shore shaped her. Marshes, waterways, timber, fields, and networks of free and enslaved Black people became part of what she knew before she ever became known as Moses.`,
      `As a child and young woman, Tubman was hired out and forced into hard labor. Around adolescence, she suffered a severe head injury when an overseer threw a weight at another enslaved person and struck her instead. She experienced seizures, pain, and visions afterward. Tubman understood some of these experiences through her Christian faith. Modern readers should be careful here. Her injury was real, her disability mattered, and her spiritual interpretation was part of how she made meaning and decisions.`,
      `In 1844, she married John Tubman, a free Black man, and took the name Harriet. Five years later, after the death of her enslaver increased the threat of sale, she escaped. The first attempt with her brothers failed when they turned back. Tubman left again alone and reached Philadelphia. Freedom was not simple relief. It separated her from family and community. She later said that she was free, and they should be free too.`,
      `Between 1850 and 1860, Tubman returned to Maryland about 13 times. NPS accounts credit her with leading roughly 70 people to freedom and giving instructions to dozens more. She relied on timing, trust, coded communication, the natural landscape, and networks of Black and white abolitionists. She did not operate like a fairy-tale figure floating above danger. She operated like a field commander: gathering information, choosing routes, managing fear, and understanding that one betrayal could destroy many lives.`,
      `The Fugitive Slave Act of 1850 made the work even more dangerous. Freedom seekers could be seized in Northern states and returned to slavery. Tubman helped guide people not only to free states but sometimes onward to Canada. She carried a pistol, according to many accounts, not as spectacle but as a sign of the stakes. People turning back could endanger the whole group.`,
      `During the Civil War, Tubman moved into another kind of freedom work. In South Carolina, she served as nurse, cook, scout, spy, and guide for Union forces. Her knowledge of marshland movement and her ability to build trust with local Black communities made her valuable. The Combahee River Raid of June 1-2, 1863, was planned with intelligence gathered through Tubman's networks and local Black pilots and informants. U.S. forces destroyed Confederate property and freed more than 700 enslaved people. Many later joined the Union Army.`,
      `The raid matters because it places Tubman inside military history, not only Underground Railroad memory. She helped turn information into an armed liberation operation. NPS accounts describe her as the first woman to plan and lead such a military raid in U.S. history. The wording should be handled carefully, but the significance is clear: Tubman's Civil War service was strategic and public, even if the government later failed to pay her properly for it.`,
      `After the war, Tubman lived in Auburn, New York, cared for family and community members, supported women's suffrage, and worked to establish the Harriet Tubman Home for the Aged. Her later years were marked by poverty and underpayment despite her service. That fact should disturb anyone tempted to turn her into a symbol while ignoring what the nation owed her materially.`,
      `Harriet Tubman's life teaches strategy, not miracle. Her courage was not the absence of fear. It was repeated decision-making under threat. She read landscapes, people, laws, weather, rumors, and war. She made freedom operational.`
    ],
    quote: {
      text: `I never ran my train off the track and I never lost a passenger.`,
      cite: 'Harriet Tubman, 1896 suffrage convention statement quoted by the National Park Service'
    },
    costImpact: [
      `Tubman paid with injury, chronic pain, danger, poverty, separation, and the repeated risk of capture or death. She returned to slave territory while legally considered property and later served the Union without receiving the full pay and recognition her work deserved.`,
      `Her impact includes the people she guided, the intelligence she supplied, the more than 700 people freed at Combahee, the suffrage work she supported, and the care institution she built in Auburn. She changed lives one route at a time and then helped turn war into liberation.`
    ],
    whyItMattersToday: [
      `Tubman matters today because she is often admired in ways that make her less human. The real Tubman was more instructive than the myth: disabled, tactical, spiritually grounded, politically alert, and willing to do slow work.`,
      `Her story also teaches that liberation depends on networks. Safe houses, boat pilots, informants, family members, soldiers, nurses, abolitionists, and freedom seekers all mattered. Tubman was extraordinary, but she was not alone.`,
      `Remembering her accurately protects the power of the story. She did not need exaggeration. The documented record is already astonishing.`,
      `Accuracy also honors the people around her. Family members, local guides, Black boatmen, Union soldiers, abolitionists, and freedom seekers helped make the work possible. Naming Tubman's strategy clearly lets readers see both her singular courage and the collective infrastructure freedom required.`
    ],
    connected: [
      { href: '@root/generated/pages/harriet-jacobs.html', title: 'Harriet Jacobs', description: 'Connects Tubman to another Black woman who used strategy and secrecy to escape slavery.' },
      { href: '@root/encyclopedia/enslaved-labor.html', title: 'Enslaved Labor and American Infrastructure', description: 'Places Tubman\'s liberation work inside the system of slavery she fought.' },
      { href: '@root/generated/pages/frederick-douglass.html', title: 'Frederick Douglass', description: 'Links Tubman to abolitionist networks, public memory, and Civil War freedom politics.' },
      { href: '@root/generated/pages/frances-harper.html', title: 'Frances E.W. Harper', description: 'Connects Tubman to Black women\'s antislavery and women\'s rights activism.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Harriet Tubman', url: 'https://www.nps.gov/people/harriet-tubman.htm' },
      { source: 'National Park Service', title: 'Harriet Tubman Underground Railroad National Historical Park History', url: 'https://www.nps.gov/hatu/learn/historyculture/htubman.htm' },
      { source: 'National Park Service', title: 'Harriet Tubman and the Underground Railroad', url: 'https://home.nps.gov/articles/harriet-tubman-and-the-underground-railroad.htm' },
      { source: 'National Park Service', title: 'Combahee River Ferry and Harriet Tubman Bridge', url: 'https://www.nps.gov/places/combahee-river-ferry-harriet-tubman-bridge.htm' },
      { source: 'National Park Service', title: 'We Called Ourselves Combee', url: 'https://www.nps.gov/articles/000/we-called-ourselves-combee.htm' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/harriet-tubman.htm', 'https://www.nps.gov/hatu/learn/historyculture/htubman.htm', 'https://home.nps.gov/articles/harriet-tubman-and-the-underground-railroad.htm'],
      supportingSources: ['https://www.nps.gov/places/combahee-river-ferry-harriet-tubman-bridge.htm', 'https://www.nps.gov/articles/000/we-called-ourselves-combee.htm'],
      verifiedQuoteSource: 'NPS Harriet Tubman and the Underground Railroad article quotes Tubman\'s 1896 suffrage convention statement.',
      sensitiveClaimsReviewed: 'Birth-year uncertainty, head injury/disability language, 13 trips and 70-person claim, Combahee date and number freed, first-woman military raid framing, pension/underpayment, and death date reviewed.',
      materialCorrections: 'Rebuilt legacy page, removed stale non-date daily challenge link, and softened mythic language into documented strategic history.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, sensitive enslavement/disability/military-first claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'hbcus',
    outputPath: 'encyclopedia/hbcus.html',
    fullDate: '2026-05-30',
    dailyDateLabel: 'May 30',
    subject: 'Historically Black Colleges and Universities',
    category: 'Education',
    type: 'Systems',
    dates: '1837 - Present',
    tags: ['education', 'institutions', 'higher-education', 'land-grant', 'community'],
    summary: `Historically Black Colleges and Universities were not created because Black students wanted separation. They were created because white institutions, state governments, and private power denied Black people access to higher education, then underfunded the institutions Black communities built anyway. HBCUs trained teachers, ministers, doctors, lawyers, scientists, artists, organizers, and public servants when education itself was a freedom claim. They were classrooms, churches, laboratories, marching grounds, debate halls, choirs, newspapers, and homecomings. HBCUs matter because they show Black institution-building under exclusion and the continuing fight over public investment. They are not relics of segregation. They are living institutions shaped by history, pride, research, debt, underfunding, and possibility.`,
    timeline: [
      { date: '1837', event: 'Institute for Colored Youth is founded in Pennsylvania, later becoming Cheyney University.' },
      { date: '1854', event: 'Ashmun Institute is chartered, later becoming Lincoln University, the first degree-granting HBCU.' },
      { date: '1862', event: 'First Morrill Act creates land-grant college system while many Black students remain excluded.' },
      { date: '1865', event: 'Shaw University is founded in Raleigh after the Civil War.' },
      { date: '1867', event: 'Howard University is founded in Washington, D.C.; Augusta Institute, later Morehouse College, is founded in Georgia.' },
      { date: '1890', event: 'Second Morrill Act requires separate land-grant institutions for Black students or nondiscriminatory admission.' },
      { date: '1965', event: 'Higher Education Act defines HBCUs for federal policy purposes.' },
      { date: '1960s', event: 'HBCU students and alumni help power sit-ins, Freedom Rides, voting-rights campaigns, and civil-rights organizing.' },
      { date: '2021-2022', event: 'NCES reports HBCUs confer 48,800 degrees in the academic year.' },
      { date: '2025', event: 'Carnegie research classifications identify Howard as R1 and multiple HBCUs as R2 or research colleges.' }
    ],
    fullStory: [
      `HBCUs begin with denial and imagination. For much of U.S. history, Black people were excluded from formal education by law, custom, violence, and funding choices. Under slavery, literacy itself could be treated as a threat. After emancipation, education became one of the clearest demands of freedom. Black communities wanted schools not as charity, but as infrastructure for citizenship, work, leadership, and self-definition.`,
      `The earliest HBCU roots predate the Civil War. The Institute for Colored Youth was founded in Pennsylvania in 1837 and later became Cheyney University. Ashmun Institute, later Lincoln University, was chartered in 1854 and identifies itself as the nation's first degree-granting HBCU. These institutions emerged from Black aspiration and allies, including religious and philanthropic networks, in a country still committed to slavery or racial exclusion.`,
      `After the Civil War, the need became urgent. Freed people sought education for children and adults. Black churches, the Freedmen's Bureau, missionary organizations, benevolent societies, and Black leaders helped create schools across the South. NMAAHC notes that more than 90 institutions of higher learning were established between 1861 and 1900. Many began with fragile resources: church basements, borrowed buildings, small staffs, and students whose families were building lives after enslavement.`,
      `The land-grant story reveals both opportunity and inequality. The 1862 Morrill Act helped states create public colleges, but Black students were often excluded. The 1890 Morrill Act required states, especially former Confederate states, to either admit Black students without racial restriction or establish separate land-grant institutions for them. That helped create and support public Black colleges, but it also embedded separate and unequal funding patterns into higher education. The National Archives notes that the second act sought to address discrimination, but the later federal code explicitly recognizes discriminatory allocation of land and financial resources against Black institutions.`,
      `HBCUs trained teachers because Black children needed schools. They trained ministers because churches were central institutions. They trained doctors and nurses because segregated health care endangered Black patients. They trained lawyers because civil rights battles needed legal minds. They trained artists because Black culture needed stages, studios, presses, and audiences. Their mission was never narrow.`,
      `They were also movement spaces. Students from HBCUs helped lead sit-ins, Freedom Rides, voter registration drives, legal campaigns, and local organizing. Fisk, Howard, North Carolina A&T, Tougaloo, Florida A&M, Alabama State, and many others were not just campuses near the movement. They were part of the movement's human infrastructure. The classroom and the street were connected.`,
      `HBCUs have also been sites of class tension, gender politics, respectability pressure, protest, joy, and experimentation. Homecoming is not just a party. It is a ritual of return to institutions built against exclusion. Marching bands, fraternities and sororities, debate teams, laboratories, campus newspapers, and alumni networks all carry culture as well as credentials.`,
      `The present-day numbers matter, but they need careful use. HBCUs are a small share of U.S. higher education, yet NCES data show they continue to confer tens of thousands of degrees, with particular significance for Black graduates. In 2025, federal HBCU materials also noted research classifications that recognized Howard University as R1 and multiple HBCUs as R2 or research colleges. That challenges the idea that HBCUs only preserve the past. Many are research institutions, health institutions, public-policy centers, and engines of social mobility.`,
      `The central tension remains funding. HBCUs are celebrated during campaign seasons, homecomings, and Black History Month, but many still fight for equitable public investment, facilities, endowments, research dollars, and debt relief. The praise can be loud while the checks are late. Understanding HBCUs means holding the beauty and the bill together.`,
      `HBCUs matter because they are evidence that exclusion did not stop Black education. It forced Black people to build institutions that changed the country. The question now is not whether they still matter. The question is whether the nation will finally fund them as if it believes its own praise.`
    ],
    costImpact: [
      `The cost of HBCUs was borne by Black communities, students, churches, faculty, and families who built institutions under hostile conditions and chronic underfunding. Separate education often meant inadequate facilities, unequal state support, limited research funding, and the burden of doing more with less while proving excellence to institutions that had excluded them.`,
      `Their impact is enormous: educators, physicians, scientists, judges, artists, civil-rights organizers, elected officials, entrepreneurs, and cultural leaders moved through HBCUs. They created professional pathways and community networks while preserving spaces where Black students could learn without being treated as exceptions to someone else's norm.`
    ],
    whyItMattersToday: [
      `HBCUs matter today because access is not the same as belonging, and admission is not the same as investment. Predominantly white institutions may now admit Black students, but HBCUs still offer histories, networks, and missions built around Black educational possibility rather than Black tolerance.`,
      `They also matter because public funding choices reveal values. When states and federal systems celebrate HBCUs while leaving facilities, endowments, and research capacity underfunded, they repeat an old pattern in modern language.`,
      `A serious understanding of HBCUs should include joy and critique: homecoming and debt, marching bands and laboratories, legacy and innovation, pride and policy. The story is not nostalgia. It is unfinished infrastructure.`
    ],
    connected: [
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects HBCUs to the policy choices that shaped unequal schools and funding.' },
      { href: '@root/generated/pages/booker-t-washington.html', title: 'Booker T. Washington', description: 'Places Tuskegee and industrial education debates inside HBCU history.' },
      { href: '@root/generated/pages/ed-temple.html', title: 'Ed Temple', description: 'Shows HBCU athletics, coaching, and Black women\'s excellence at Tennessee State.' },
      { href: '@root/generated/pages/dorothy-vaughan.html', title: 'Dorothy Vaughan', description: 'Connects Black education pathways to science, mathematics, and federal technical work.' }
    ],
    externalLinks: [
      { source: 'U.S. Department of Education', title: 'What Is an HBCU?', url: 'https://sites.ed.gov/whhbcu/one-hundred-and-five-historically-black-colleges-and-universities/' },
      { source: 'National Museum of African American History and Culture', title: 'Homecoming: A Celebration of HBCUs and Their Legacies', url: 'https://nmaahc.si.edu/explore/moments/homecoming-celebration-hbcus-and-their-legacies' },
      { source: 'National Museum of African American History and Culture', title: "Consecrated Ground: Churches and the Founding of America's HBCUs", url: 'https://nmaahc.si.edu/explore/stories/consecrated-ground-churches-and-founding-americas-historically-black-colleges-and' },
      { source: 'National Archives', title: 'Morrill Act (1862)', url: 'https://www.archives.gov/milestone-documents/morrill-act' },
      { source: 'NCES', title: 'Fast Facts: Historically Black Colleges and Universities', url: 'https://nces.ed.gov/fastfacts/display.asp?id=667' },
      { source: 'U.S. Code', title: 'Strengthening Historically Black Colleges and Universities', url: 'https://uscode.house.gov/view.xhtml?edition=prelim&path=%2Fprelim%40title20%2Fchapter28%2Fsubchapter3%2FpartB' }
    ],
    research: {
      status: 'batch-12-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://sites.ed.gov/whhbcu/one-hundred-and-five-historically-black-colleges-and-universities/', 'https://www.archives.gov/milestone-documents/morrill-act', 'https://uscode.house.gov/view.xhtml?edition=prelim&path=%2Fprelim%40title20%2Fchapter28%2Fsubchapter3%2FpartB'],
      supportingSources: ['https://nmaahc.si.edu/explore/moments/homecoming-celebration-hbcus-and-their-legacies', 'https://nmaahc.si.edu/explore/stories/consecrated-ground-churches-and-founding-americas-historically-black-colleges-and', 'https://nces.ed.gov/fastfacts/display.asp?id=667'],
      verifiedQuoteSource: 'No quotation included. Legal definition and findings were used as evidence but not as a pull quote.',
      sensitiveClaimsReviewed: 'Oldest and first degree-granting HBCU claims, 1890 Morrill Act framing, Higher Education Act definition, more than 90 institutions claim, NCES degree statistics, current research classification claims, and chronic underfunding framing reviewed.',
      materialCorrections: 'Rebuilt legacy systems page, removed unsupported inspirational quote, replaced weak source mix with federal, Smithsonian, NCES, and statutory sources.',
      finalStatus: 'Batch 12 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 6 external links, no unsupported quote, education/statistical/legal claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = {
  ENTRIES,
};
