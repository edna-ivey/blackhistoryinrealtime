const RESEARCH_DATE = '2026-08-14';

const ENTRIES = [
  {
    encyclopediaSlug: 'brown-v-board',
    outputPath: 'encyclopedia/brown-v-board.html',
    fullDate: '2026-02-05',
    dailyDateLabel: 'February 5',
    subject: 'Brown v. Board of Education',
    category: 'Civil Rights',
    type: 'Court Case',
    dates: '1954 - 1955',
    tags: ['education', 'civil-rights', 'supreme-court', 'segregation', 'law'],
    summary: `Brown v. Board of Education is often remembered as the day school segregation ended. The harder truth is that the decision named a constitutional wrong, then left Black families to fight school boards, governors, mobs, and delay tactics for years. Brown was not one case, one father, or one courtroom victory. It was five cases, dozens of families, student walkouts, local organizing, social science evidence, careful legal strategy, and a Supreme Court trying to speak with one voice. Its promise was enormous. Its enforcement was uneven. The page matters because Brown shows both the power of law and the danger of mistaking a legal ruling for the end of a system.`,
    timeline: [
      { date: '1896', event: 'Plessy v. Ferguson gives constitutional cover to "separate but equal" segregation.' },
      { date: '1930s-1950', event: 'NAACP lawyers attack segregation first through graduate and professional school cases.' },
      { date: '1950-1952', event: 'School cases from South Carolina, Virginia, Kansas, Delaware, and Washington, D.C. move toward the Supreme Court.' },
      { date: 'Dec 1952', event: 'The Supreme Court hears the consolidated school segregation cases.' },
      { date: 'Dec 1953', event: 'The Court orders reargument, including questions about the Fourteenth Amendment.' },
      { date: 'May 17, 1954', event: 'The Court rules unanimously in Brown that segregated public schools are unconstitutional.' },
      { date: 'May 31, 1955', event: 'Brown II orders desegregation with "all deliberate speed."' },
      { date: '1957', event: 'Federal troops enforce integration at Little Rock Central High School.' },
      { date: '1964', event: 'The Civil Rights Act gives the federal government stronger tools against school segregation.' },
      { date: '1970s', event: 'Court-ordered desegregation plans and busing battles expose how deeply segregation had been built into housing and local politics.' }
    ],
    fullStory: [
      `Brown v. Board did not begin with the Supreme Court. It began with Black parents and students who were tired of being told to accept inferior schools as a normal fact of life. It began with children walking past nearby white schools to reach distant Black schools. It began with students in Virginia who went on strike because their school was overcrowded and underfunded. It began with families who knew that education was not only a classroom issue. It was citizenship, safety, childhood, dignity, and future power.`,
      `The legal background was Plessy v. Ferguson, the 1896 decision that allowed states to segregate public facilities if the separate facilities were supposedly equal. In practice, separate was a legal fiction. Black schools often had fewer resources, worse buildings, shorter school terms, and less political protection. Even where physical facilities looked closer to equal, segregation still taught a lesson about caste. The state was telling Black children they were fit to be separated.`,
      `The NAACP legal strategy took years. Charles Hamilton Houston, Thurgood Marshall, Robert Carter, Constance Baker Motley, Jack Greenberg, Spottswood Robinson, Oliver Hill, Louis Redding, James Nabrit, and many others helped build a campaign that first targeted graduate and professional schools. Cases such as Missouri ex rel. Gaines, Sweatt v. Painter, and McLaurin v. Oklahoma showed that states could not easily maintain separate equality in higher education. That strategy tightened the logic around segregation until the question could no longer be avoided at the elementary and secondary school level.`,
      `Brown was actually a group of cases. Briggs v. Elliott came from Clarendon County, South Carolina. Davis v. County School Board came from Prince Edward County, Virginia, where Black students had protested Moton High School's conditions. Brown v. Board came from Topeka, Kansas. Belton and Bulah v. Gebhart came from Delaware. Bolling v. Sharpe came from Washington, D.C., where the constitutional argument had to be framed under the Fifth Amendment because the Fourteenth Amendment applies to states. The cases were different, but together they made school segregation a national question rather than a problem safely confined to the South.`,
      `The families carried risk. Their names appeared in lawsuits that challenged local power. In some communities, that meant job threats, credit pressure, intimidation, and social retaliation. The children carried a quieter cost: the pressure of becoming plaintiffs before they could fully understand the machinery around them. The case name made Oliver Brown famous, but the movement behind Brown was collective. It included named plaintiffs, unnamed organizers, teachers, churches, local NAACP chapters, and young people whose daily walk to school became evidence.`,
      `In 1954, Chief Justice Earl Warren delivered a unanimous opinion. The Court ruled that state-imposed school segregation violated the Equal Protection Clause of the Fourteenth Amendment. Warren's opinion did more than compare buildings or budgets. It said segregation itself damaged public education because it marked Black children as inferior in a way that could affect their hearts and minds. The quoted line most often remembered from the decision is short and direct: separate educational facilities are inherently unequal.`,
      `That ruling mattered. It broke the constitutional foundation of school segregation and gave civil-rights advocates a powerful legal tool. But the next question was enforcement. In 1955, Brown II ordered desegregation with "all deliberate speed." That phrase became a doorway for delay. White officials used pupil placement laws, school-closing threats, private segregation academies, bureaucratic obstruction, and outright violence to slow or block compliance. Prince Edward County, Virginia, closed its public schools rather than integrate them, leaving Black children without public schooling for years.`,
      `The popular version of Brown sometimes makes it sound as if law moved first and society followed. The fuller story is messier. Black organizing pushed the law. Then Black organizing had to push again when the law's victory was resisted. Federal courts, the Department of Justice, presidents, local officials, and communities all shaped how Brown would be applied. Some institutions moved only when forced. Others used delay as policy.`,
      `Brown also exposed the limits of a school-only solution to racial inequality. School lines reflected housing segregation, tax bases, transportation, white flight, district boundaries, and political choices. Even after formal segregation fell, many students remained in racially isolated and unequally funded schools. That does not make Brown a failure. It means Brown was one necessary battle in a larger war over public goods and citizenship.`,
      `To understand Brown well, the reader has to honor both the ruling and the people who made the ruling possible. It was a constitutional milestone, but it was also a record of ordinary families insisting that their children were not experiments in patience. Brown asked whether a democracy could educate children under a badge of inferiority and still call itself equal. The answer was no. The struggle was making the country act like it believed that answer.`
    ],
    quote: {
      text: `Separate educational facilities are inherently unequal.`,
      cite: `Chief Justice Earl Warren, Brown v. Board of Education, 1954`
    },
    costImpact: [
      `The cost of Brown fell heavily on Black families who had already paid for unequal schools through taxes, labor, and stolen opportunity. Plaintiffs risked retaliation from employers, neighbors, banks, and school officials. Children became symbols in fights they did not create. In Virginia's Prince Edward County, public schools were closed for years rather than integrated, and Black students bore the damage of that political choice.`,
      `The impact was still profound. Brown undermined the constitutional legitimacy of Jim Crow, energized civil-rights litigation, and forced the federal government to confront school segregation as a national issue. It also revealed that a court victory without determined enforcement can leave the hardest work to the people already injured by the system.`
    ],
    whyItMattersToday: [
      `Brown matters today because school inequality did not disappear when the Court rejected legal segregation. Segregation now often travels through housing patterns, district lines, school funding, enrollment policies, discipline practices, and access to advanced coursework. The badge may look different, but the question remains: who receives public investment and who is expected to make do?`,
      `The case also teaches readers to be careful with victory stories. Brown was a breakthrough, but its promise was delayed by "all deliberate speed," local defiance, and federal hesitation. That history helps explain why rights on paper and rights in practice are not the same thing.`,
      `A reader should leave Brown with respect for the Court's ruling, but even more respect for the families, lawyers, students, and organizers who forced the country to answer for what segregation did to children.`
    ],
    connected: [
      { href: '@root/generated/pages/brown-v-board-plaintiffs.html', title: 'Brown v. Board Plaintiffs', description: 'Centers the families and students behind the case name.' },
      { href: '@root/generated/pages/charles-hamilton-houston.html', title: 'Charles Hamilton Houston', description: 'Shows the legal strategy that made Brown possible.' },
      { href: '@root/encyclopedia/thurgood-marshall.html', title: 'Thurgood Marshall', description: 'Connects Brown to the lawyer who argued the case and later joined the Court.' },
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'Follows the human cost of enforcement after the ruling.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Brown v. Board of Education', url: 'https://www.archives.gov/education/lessons/brown-v-board' },
      { source: 'National Park Service', title: 'The Five Cases', url: 'https://www.nps.gov/brvb/learn/historyculture/fivecases.htm' },
      { source: 'National Park Service', title: 'Myth or Truth: Brown v. Board', url: 'https://www.nps.gov/brvb/learn/historyculture/mythtruth.htm' },
      { source: 'NAACP Legal Defense Fund', title: 'Brown v. Board of Education', url: 'https://www.naacpldf.org/brown-vs-board/' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/education/lessons/brown-v-board', 'https://www.nps.gov/brvb/learn/historyculture/fivecases.htm'],
      supportingSources: ['https://www.nps.gov/brvb/learn/historyculture/mythtruth.htm', 'https://www.naacpldf.org/brown-vs-board/'],
      verifiedQuoteSource: 'Brown v. Board of Education opinion, quoted by the National Archives and National Park Service.',
      sensitiveClaimsReviewed: 'Five-case consolidation, Brown II enforcement language, retaliation, Prince Edward County school closings, and limits of school desegregation reviewed.',
      materialCorrections: 'Replaced a narrow legal milestone page with a deeper account of collective plaintiffs, strategy, enforcement, backlash, and continuing inequality.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'carl-stokes',
    fullDate: '2026-08-04',
    dailyDateLabel: 'August 4',
    subject: 'Carl Stokes',
    category: 'Politics',
    type: 'People',
    dates: '1927 - 1996',
    tags: ['politics', 'cleveland', 'mayors', 'urban-history', 'voting'],
    summary: `Carl Stokes became mayor of Cleveland in 1967, making him the first Black elected mayor of a major U.S. city. That fact is true, but too small. Stokes came out of public housing, war service, law school, state politics, and a city strained by segregation, police violence, industrial change, and white political fear. His election was a breakthrough, but it was not a magic door. He had to govern a city where Black voters expected overdue change, white voters watched him suspiciously, business leaders measured him against their own interests, and national media treated his mayoralty as a referendum on Black political power. His story is about winning office, then discovering how much power still sat outside City Hall.`,
    timeline: [
      { date: 'Jun 21, 1927', event: 'Born in Cleveland, Ohio.' },
      { date: '1944', event: 'Leaves high school and later serves in the U.S. Army.' },
      { date: '1956', event: 'Earns a law degree from Cleveland-Marshall Law School.' },
      { date: '1962', event: 'Wins election to the Ohio House of Representatives.' },
      { date: '1965', event: 'Makes an unsuccessful first run for mayor of Cleveland.' },
      { date: 'Nov 7, 1967', event: 'Wins the Cleveland mayoral election.' },
      { date: '1968', event: 'Launches Cleveland: NOW!, a public-private program for neighborhoods and economic development.' },
      { date: 'Jul 1968', event: `The Glenville shootout and its aftermath test Stokes's leadership and the city police department.` },
      { date: '1971', event: `Leaves the mayor's office after choosing not to seek another term.` },
      { date: 'Apr 3, 1996', event: 'Dies in Cleveland after serving in law, media, diplomacy, and public life.' }
    ],
    fullStory: [
      `Carl Stokes did not enter politics as a symbol polished for history. He entered from Cleveland's Central neighborhood, from public housing, from a family shaped by poverty after his father died when Stokes was young. His mother, Louise, raised Carl and his brother Louis with little money and a great deal of discipline. Both brothers would become nationally important public servants: Carl as mayor and Louis as a long-serving member of Congress.`,
      `Stokes's route was not smooth. He left high school, served in the Army, returned to complete his education, and eventually earned a law degree. That path mattered politically. He could speak to working-class Black Clevelanders without pretending distance from their lives, but he also knew the language of courts, budgets, and institutions. He was ambitious, talented, impatient, and aware that Black representation alone would not fix city government.`,
      `Cleveland in the 1960s was a city under stress. Black residents faced segregated housing, unequal schools, police abuse, job discrimination, and neighborhoods neglected by public and private investment. White ethnic political machines still held power in many wards. Industry was changing, tax bases were strained, and urban renewal often meant displacement. Nationally, uprisings in Watts, Newark, Detroit, and other cities had made white officials speak constantly about "urban crisis," often without naming the racism built into that crisis.`,
      `Stokes first ran for mayor in 1965 and lost narrowly. The loss showed both the possibility and the wall. Two years later he ran again, this time with a coalition that included Black voters, liberal white voters, some business support, and people who believed the city needed a break from machine politics. His 1967 victory made Cleveland a national headline. He became the first Black elected mayor of a major American city.`,
      `The victory carried joy, but also impossible expectations. Black Clevelanders had reason to expect change in police practices, jobs, housing, and city services. White voters who had supported him often expected moderation and reassurance. National reporters wanted a story about whether a Black mayor could govern a major industrial city. Stokes had to be both mayor and evidence.`,
      `He moved quickly to put Black professionals into city government and to bring attention to neighborhoods that had long been treated as problems rather than communities. Cleveland: NOW!, launched in 1968, tried to raise public and private money for employment, housing, education, recreation, and neighborhood development. It was an ambitious program, but it depended on trust across lines that Cleveland had spent decades hardening.`,
      `Then came Glenville. In July 1968, a shootout between police and Black militants left officers, civilians, and suspects dead. Stokes made the controversial decision to use Black police officers and community leaders to try to calm the neighborhood before bringing white officers back in. Supporters saw a mayor trying to prevent more bloodshed. Critics accused him of losing control. The crisis damaged Cleveland: NOW! when investigators later connected some program funds to people associated with the conflict. For Stokes, Glenville became a test of both policy and public perception.`,
      `Stokes was not a perfect mayor. He clashed with City Council, struggled with police reform, and faced the same fiscal and racial pressures that had trapped other urban administrations. Some Black residents thought change was too slow. Some white residents blamed him for problems that predated his term. The city's structure limited what he could control, and the racial expectations around his leadership made every decision heavier.`,
      `After leaving office in 1971, Stokes worked in broadcasting, law, and diplomacy, including service as U.S. ambassador to the Seychelles. His mayoralty did not transform Cleveland overnight, but that is not the right measure. He opened a door at a moment when Black political leadership was moving from protest outside city hall to power inside it. The lesson is not that representation solves everything. It is that representation changes the arena of struggle.`,
      `Carl Stokes made history by winning. He teaches even more by what came after the win: the budgets, suspicion, competing demands, limited tools, and constant need to turn symbolic power into material change.`
    ],
    quote: {
      text: `My style will be management by being on the street.`,
      cite: `Carl Stokes, quoted by the National Park Service`
    },
    costImpact: [
      `The cost of Stokes's breakthrough was exposure. He governed under national scrutiny that white mayors rarely faced. If Cleveland stumbled, critics could blame Black leadership itself. His decisions around police, neighborhood investment, and Glenville were judged not only as policy choices, but as racial evidence.`,
      `His impact was large because he made major-city Black mayoral leadership visible before it became more common in places such as Los Angeles, Detroit, Atlanta, New Orleans, and Chicago. He also showed that winning office is not the same as holding all the power. Banks, police departments, business leaders, media narratives, and city councils can shape what a mayor can deliver.`
    ],
    whyItMattersToday: [
      `Stokes matters today because cities still ask Black elected officials to solve crises built before they arrived. Housing segregation, environmental burden, police distrust, and uneven investment do not disappear with a historic election. His career helps readers separate the meaning of representation from the mechanics of power.`,
      `His story also complicates the usual celebration of "firsts." A first Black mayor is important, but the deeper question is what institutions do when Black voters help put someone in charge. Do budgets change? Do police practices change? Do neighborhoods receive investment without being displaced? Does the media allow complexity?`,
      `A reader should leave Stokes with admiration for the win and a sharper eye for what comes after the applause.`
    ],
    connected: [
      { href: '@root/encyclopedia/environmental-justice.html', title: 'Environmental Justice', description: 'Connects urban policy to unequal public investment and neighborhood conditions.' },
      { href: '@root/generated/pages/black-lives-matter.html', title: 'Black Lives Matter', description: 'Continues the political argument over policing, local power, and accountability.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Places Stokes inside the longer struggle for Black political representation.' },
      { href: '@root/encyclopedia/great-migration.html', title: 'The Great Migration', description: 'Explains demographic change that shaped northern cities such as Cleveland.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Carl B. Stokes', url: 'https://www.nps.gov/people/carl-b-stokes.htm' },
      { source: 'Encyclopedia of Cleveland History', title: 'Carl B. Stokes', url: 'https://case.edu/ech/articles/s/stokes-carl-b' },
      { source: 'City of Cleveland', title: 'Carl B. Stokes Day', url: 'https://www.clevelandohio.gov/carl-b-stokes-day' },
      { source: 'Congressional Record', title: 'Honoring Louis Stokes and the Stokes family legacy', url: 'https://www.congress.gov/114/crec/2015/09/08/modified/CREC-2015-09-08-pt1-PgH5818.htm' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/people/carl-b-stokes.htm', 'https://case.edu/ech/articles/s/stokes-carl-b'],
      supportingSources: ['https://www.clevelandohio.gov/carl-b-stokes-day', 'https://www.congress.gov/114/crec/2015/09/08/modified/CREC-2015-09-08-pt1-PgH5818.htm'],
      verifiedQuoteSource: 'National Park Service Carl B. Stokes page.',
      sensitiveClaimsReviewed: 'Glenville shootout, Cleveland: NOW! funding controversy, racial expectations of Black mayoral leadership, and "first major city" claim reviewed.',
      materialCorrections: 'Expanded scheduled fallback biography into a fuller account of urban politics, coalition-building, crisis, representation, and structural limits.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'carter-woodson',
    outputPath: 'encyclopedia/carter-woodson.html',
    fullDate: '2026-02-01',
    dailyDateLabel: 'February 1',
    subject: 'Carter G. Woodson',
    category: 'Foundations',
    type: 'People',
    dates: '1875 - 1950',
    tags: ['black-history-month', 'education', 'historians', 'publishing', 'memory'],
    summary: `Carter G. Woodson did not create Black History Month because Black history needed a holiday. He created a movement because American education had trained people to treat Black life as either absent or inferior. Woodson was a coal miner, teacher, scholar, editor, publisher, organizer, and institution-builder. He believed history was not decoration. It shaped what a people believed they could demand. Negro History Week, launched in 1926, was one piece of a larger project: archives, journals, textbooks, teachers, local study clubs, and public memory. The simplified version says he is the father of Black History Month. The deeper story says he built an intellectual infrastructure against erasure.`,
    timeline: [
      { date: 'Dec 19, 1875', event: 'Born in New Canton, Virginia, to formerly enslaved parents.' },
      { date: '1890s', event: 'Works in West Virginia coal mines while pursuing education when possible.' },
      { date: '1903', event: 'Earns a degree from Berea College.' },
      { date: '1912', event: 'Earns a Ph.D. in history from Harvard University.' },
      { date: '1915', event: 'Helps found the Association for the Study of Negro Life and History.' },
      { date: '1916', event: 'Launches The Journal of Negro History.' },
      { date: '1926', event: 'Launches Negro History Week in February.' },
      { date: '1933', event: 'Publishes The Mis-Education of the Negro.' },
      { date: 'Apr 3, 1950', event: 'Dies in Washington, D.C.' },
      { date: '1976', event: 'Black History Month gains national bicentennial-era recognition.' }
    ],
    fullStory: [
      `Carter G. Woodson understood erasure as a system. He knew that schools, textbooks, archives, libraries, publishers, newspapers, museums, churches, and civic groups all helped decide whose past became public knowledge. If Black people appeared only as labor, problem, stereotype, or footnote, then students were being taught more than bad history. They were being taught a political order.`,
      `Woodson was born in Virginia in 1875 to parents who had been enslaved. His early life did not follow the polished path usually associated with elite scholarship. He worked on family farms and in West Virginia coal mines. He attended school when he could, learned from Black workers and Civil War veterans, and developed a hunger for books in places where formal education came late or unevenly. That background mattered. Woodson did not see knowledge as property owned by universities. He saw it as a tool people needed in churches, classrooms, kitchens, newspapers, and community halls.`,
      `He moved through formal education with astonishing speed once he had the opportunity. He graduated from Berea College, studied at the University of Chicago, and in 1912 earned a doctorate in history from Harvard. He was only the second Black person to receive a Harvard Ph.D. in history, after W. E. B. Du Bois. But the credential did not solve the problem he cared most about. Most universities still had little interest in Black history as a serious field. Publishing outlets were narrow. Archives were scattered. Teachers lacked materials. The profession often treated Black people as subjects to be talked about, not as historians of their own lives.`,
      `In 1915, Woodson helped found the Association for the Study of Negro Life and History, now ASALH. The timing mattered. The same year, D. W. Griffith's film The Birth of a Nation spread racist mythology about Reconstruction and the Ku Klux Klan to mass audiences. Woodson's answer was not only protest. It was institution-building. He wanted research, publications, teachers, and public programming strong enough to outlast a single outrage.`,
      `The Journal of Negro History began in 1916. It created a scholarly home for research that the mainstream historical profession often ignored. Woodson also published books, edited materials for schools, supported local branches, and encouraged ordinary people to collect records. He believed history should be rigorous, but not locked away. If the work stayed only in elite circles, it would not change the education of Black children or the assumptions of the country.`,
      `Negro History Week began in 1926. Woodson chose February because it already held public commemorations of Abraham Lincoln and Frederick Douglass. That choice was strategic. He was not trying to confine Black history to seven days. He was using an existing season of memory to push schools and communities toward a fuller curriculum. Teachers asked for materials. Churches held programs. Newspapers printed features. Study groups took up the work. The week became a public doorway into a much larger project.`,
      `Woodson was also willing to criticize Black institutions when he believed they reproduced dependence or narrow ambition. In The Mis-Education of the Negro, published in 1933, he argued that schooling could train Black students away from their own communities and toward imitation of systems that despised them. Some of his language and assumptions belong to his time, and his arguments should be read carefully. But the central warning remains sharp: education can liberate or domesticate depending on what it teaches students to value.`,
      `The popular story often jumps from Negro History Week to Black History Month. That misses the labor. Woodson spent decades writing letters, editing journals, managing funds, building networks, and trying to keep independent Black scholarship alive. He was not wealthy. His work depended on donations, membership, book sales, and relentless administration. He treated history as public infrastructure long before universities fully respected the field.`,
      `After Woodson's death in 1950, ASALH continued the work. During the civil-rights and Black Power eras, calls for Black Studies, community control, and fuller curricula gave Woodson's project new urgency. By 1976, Black History Month received national recognition during the U.S. bicentennial. That recognition mattered, but it also created a new risk: a radical educational project could be softened into trivia, posters, and annual obligation.`,
      `Woodson's deeper lesson is that Black history is not a seasonal supplement. It is a way of telling the truth about the country. He built tools so people could study themselves without waiting for permission.`
    ],
    quote: {
      text: `not Negro History, but the Negro in history`,
      cite: `Carter G. Woodson, explaining the purpose of Negro History Week`
    },
    costImpact: [
      `Woodson paid the cost of institution-building without institutional comfort. He worked in a field that many universities neglected, raised money constantly, managed publishing demands, and spent his life building a scholarly infrastructure that had no guarantee of survival. He also faced the burden of creating materials for teachers and communities while defending Black history as legitimate knowledge.`,
      `His impact is hard to measure because it is everywhere: Black history curricula, archival recovery, public history, community study groups, Black Studies programs, museum work, and the annual national attention of Black History Month. The danger is that the celebration can become thin. Woodson's real impact was not a month. It was a method.`
    ],
    whyItMattersToday: [
      `Woodson matters today because erasure still changes what people think is possible. When Black history is reduced to a few heroes, a few tragedies, or a February routine, students miss the institutions, debates, regions, labor, culture, and ordinary lives that make history usable.`,
      `His work also challenges schools and media to move beyond representation toward interpretation. Adding Black names to a timeline is not enough if the structure of the story stays the same. Woodson wanted Black people placed inside history as makers, thinkers, workers, critics, and witnesses.`,
      `A reader should leave Woodson asking whether Black history is being treated as decoration or as evidence. That question is still the heart of this project.`
    ],
    connected: [
      { href: '@root/encyclopedia/mis-education.html', title: 'The Mis-Education of the Negro', description: `Woodson's sharp critique of schooling and imitation.` },
      { href: '@root/encyclopedia/black-press.html', title: 'The Black Press', description: 'Shows how Black institutions preserved and circulated public memory.' },
      { href: '@root/generated/pages/frederick-douglass.html', title: 'Frederick Douglass', description: 'One of the February anchors Woodson used for public remembrance.' },
      { href: '@root/encyclopedia/mary-mcleod-bethune.html', title: 'Mary McLeod Bethune', description: 'Connects education, institution-building, and political leadership.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Carter G. Woodson Biography', url: 'https://www.nps.gov/cawo/learn/carter-g-woodson-biography.htm' },
      { source: 'National Park Service', title: 'Carter G. Woodson and Negro History Week', url: 'https://www.nps.gov/neri/learn/historyculture/carter-g-woodson.htm' },
      { source: 'Association for the Study of African American Life and History', title: 'About Black History Month', url: 'https://asalh.org/about-us/about-black-history-month/' },
      { source: 'National Museum of African American History and Culture', title: 'The Continuing Importance of Black History Month', url: 'https://nmaahc.si.edu/explore/stories/knowing-past-opens-door-future-continuing-importance-black-history-month' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/cawo/learn/carter-g-woodson-biography.htm', 'https://www.nps.gov/neri/learn/historyculture/carter-g-woodson.htm'],
      supportingSources: ['https://asalh.org/about-us/about-black-history-month/', 'https://nmaahc.si.edu/explore/stories/knowing-past-opens-door-future-continuing-importance-black-history-month'],
      verifiedQuoteSource: 'National Park Service New River Gorge page quoting Woodson on the purpose of Negro History Week.',
      sensitiveClaimsReviewed: 'Harvard Ph.D. first/second framing, Negro History Week date rationale, Black History Month continuity, and critique in The Mis-Education of the Negro reviewed.',
      materialCorrections: 'Deepened duplicate-cleanup-era legacy page into an institutional history of Woodson, ASALH, public history, and anti-erasure work.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'charles-hamilton-houston',
    fullDate: '2026-07-07',
    dailyDateLabel: 'July 7',
    subject: 'Charles Hamilton Houston',
    category: 'Law',
    type: 'People',
    dates: '1895 - 1950',
    tags: ['law', 'civil-rights', 'education', 'naacp', 'howard'],
    summary: `Charles Hamilton Houston is often called the architect of the legal strategy that led to Brown v. Board of Education. That title is useful, but it can make his work sound cleaner than it was. Houston built lawyers, institutions, records, and arguments in a country where law had spent generations defending racial caste. He served in a segregated Army, transformed Howard University School of Law, trained Thurgood Marshall and others, and used graduate-school cases to expose the lie of "separate but equal." He died in 1950, before Brown was decided. His story matters because he shows that landmark victories usually rest on people who prepared the ground and did not live to stand in the spotlight.`,
    timeline: [
      { date: 'Sep 3, 1895', event: 'Born in Washington, D.C.' },
      { date: '1915', event: 'Graduates from Amherst College.' },
      { date: '1917-1919', event: 'Serves as an officer in the segregated U.S. Army during World War I.' },
      { date: '1922', event: 'Graduates from Harvard Law School.' },
      { date: '1924', event: 'Joins the Howard University School of Law faculty.' },
      { date: '1929', event: 'Becomes vice dean of Howard Law and pushes it toward civil-rights training.' },
      { date: '1935', event: 'Joins the NAACP as special counsel.' },
      { date: '1938', event: 'Helps win Missouri ex rel. Gaines v. Canada.' },
      { date: '1950', event: 'Dies before the Supreme Court decides Sweatt, McLaurin, and Brown.' },
      { date: '1954', event: 'Brown v. Board vindicates much of the legal road Houston helped build.' }
    ],
    fullStory: [
      `Charles Hamilton Houston believed law could be a weapon, but he knew it had already been used as a cage. The Constitution, courts, contracts, police power, school boards, and state legislatures had all helped build segregation. Houston's work was not simply asking the legal system to behave better. It was forcing that system to answer for its own promises.`,
      `Houston was born in Washington, D.C., in 1895. His father was a lawyer, and Houston grew up in a Black middle-class world shaped by education, ambition, and the limits imposed by Jim Crow. After graduating from Amherst, he served as an officer in the U.S. Army during World War I. The Army's racism marked him deeply. He later connected that experience to his decision to study law: if Black men could be ordered to fight for democracy while being humiliated by their own country, then the law itself had to be challenged.`,
      `At Harvard Law School, Houston excelled, served on the Harvard Law Review, and studied under Felix Frankfurter. But his brilliance mattered most in what he did with it. He returned to Howard University School of Law and helped turn it into a training ground for civil-rights lawyers. Howard was not simply producing attorneys for private practice. Under Houston's influence, it became a workshop for dismantling segregation.`,
      `His standards were demanding. Students remembered his intensity, discipline, and insistence that a lawyer had to be a social engineer or risk becoming a parasite on society. That phrase has become central to Houston's legacy because it captured his view that legal skill without public responsibility was not enough. He wanted lawyers who could read doctrine, gather facts, understand communities, and fight with strategy rather than slogans alone.`,
      `Houston's strategy against school segregation was patient and exact. Directly attacking elementary-school segregation in the 1930s might have produced a bad Supreme Court ruling that strengthened Plessy. Instead, Houston and his colleagues targeted graduate and professional education, where states had a harder time pretending separate programs were equal. If a state did not provide a Black law school or graduate program, it had to either admit Black students to white institutions or spend heavily to duplicate facilities. Either choice exposed the absurd cost of segregation.`,
      `Missouri ex rel. Gaines v. Canada in 1938 was a key victory. The Supreme Court held that Missouri could not satisfy its constitutional obligation by offering to pay Lloyd Gaines's tuition at an out-of-state law school. The state had to provide equal legal education within its own borders. Gaines himself later disappeared under circumstances that remain unresolved, a reminder that legal cases were carried by people whose lives did not become neat constitutional footnotes.`,
      `Houston also traveled with a camera. He documented school inequality in the South, collecting visual evidence of the gap between white and Black facilities. That work mattered because segregation's defenders liked abstractions. Houston gathered facts: buildings, textbooks, transportation, teacher pay, and daily conditions. He understood that courts could be moved by doctrine, but also by the record placed before them.`,
      `He worked with and trained a generation that included Thurgood Marshall, Spottswood Robinson, Oliver Hill, Robert Carter, James Nabrit, Constance Baker Motley, and others. The public memory often centers Marshall, and Marshall deserves that honor. But Marshall himself stood on Houston's strategy, training, and institutional foundation. Brown was not improvised. It was built over decades.`,
      `Houston died in 1950, before Brown. That year the Supreme Court decided Sweatt v. Painter and McLaurin v. Oklahoma, two higher-education cases that pushed the Court closer to rejecting segregation itself. By the time Brown reached the Court, Houston's legal architecture was visible: force the state to reveal that separate equality was impossible, then attack separation itself.`,
      `The lesson of Houston's life is not only genius. It is preparation. He knew that freedom law needed schools, mentors, research, records, plaintiffs, community trust, and lawyers trained for more than personal advancement. He made the law face Black children by first making it face Black graduate students, Black taxpayers, and Black professionals denied equal institutions. He did not live to hear the Brown decision, but his fingerprints were all over the road to it.`
    ],
    quote: {
      text: `All our struggles must tie in together and support one another.`,
      cite: `Charles Hamilton Houston, quoted by the NAACP`
    },
    costImpact: [
      `Houston paid for his work with health, time, and the strain of building institutions under constant pressure. He carried the racism of military service, the burden of professional excellence in hostile systems, and the demands of travel, teaching, litigation, fundraising, and national strategy. He died at 54, before the most famous victory his work helped make possible.`,
      `His impact was structural. Howard Law became a civil-rights engine. NAACP litigation gained a careful pathway toward Brown. A generation of lawyers learned to treat courtrooms as one part of a wider freedom struggle. Houston's work reminds readers that legal revolutions are planned, staffed, documented, and taught.`
    ],
    whyItMattersToday: [
      `Houston matters today because rights litigation still depends on infrastructure. A lawsuit is not only a complaint filed in court. It needs plaintiffs who trust the strategy, lawyers who understand the doctrine, researchers who build the record, communities willing to absorb risk, and institutions that can sustain the work beyond one case.`,
      `His story also warns against celebrity versions of legal history. Brown did not appear because one brilliant argument changed everything. It came from decades of legal pressure and from Black communities willing to challenge local power. Houston's genius was making the strategy durable enough for others to carry after him.`,
      `A reader should leave Houston understanding that freedom work often looks like preparation before it looks like victory.`
    ],
    connected: [
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: `The school segregation ruling built on Houston's legal strategy.` },
      { href: '@root/encyclopedia/thurgood-marshall.html', title: 'Thurgood Marshall', description: `Houston's student and colleague carried the strategy into Brown.` },
      { href: '@root/generated/pages/constance-baker-motley.html', title: 'Constance Baker Motley', description: 'A later NAACP lawyer shaped by the legal world Houston helped build.' },
      { href: '@root/generated/pages/brown-v-board-plaintiffs.html', title: 'Brown v. Board Plaintiffs', description: `The families whose cases put Houston's strategy into public life.` }
    ],
    externalLinks: [
      { source: 'NAACP', title: 'Charles Hamilton Houston', url: 'https://naacp.org/find-resources/history-explained/civil-rights-leaders/charles-hamilton-houston' },
      { source: 'National Museum of African American History and Culture', title: 'Charles Hamilton Houston', url: 'https://nmaahc.si.edu/explore/stories/charles-hamilton-houston' },
      { source: 'Howard University School of Law', title: 'Charles Hamilton Houston Lecture', url: 'https://law.howard.edu/charles-hamilton-houston-lecture-0' },
      { source: 'Britannica', title: 'Charles Hamilton Houston', url: 'https://www.britannica.com/biography/Charles-Hamilton-Houston' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://naacp.org/find-resources/history-explained/civil-rights-leaders/charles-hamilton-houston', 'https://nmaahc.si.edu/explore/stories/charles-hamilton-houston'],
      supportingSources: ['https://law.howard.edu/charles-hamilton-houston-lecture-0', 'https://www.britannica.com/biography/Charles-Hamilton-Houston'],
      verifiedQuoteSource: 'NAACP Charles Hamilton Houston page.',
      sensitiveClaimsReviewed: 'Military racism, Gaines strategy, unresolved disappearance of Lloyd Gaines, social-engineer framing, and Brown legacy attribution reviewed.',
      materialCorrections: 'Expanded daily fallback into a deeper institutional and legal strategy account with attention to Howard Law and pre-Brown litigation.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'charleston-church-shooting',
    fullDate: '2026-06-17',
    dailyDateLabel: 'June 17',
    subject: 'Charleston Church Shooting',
    category: 'Justice',
    type: 'Event',
    dates: 'June 17, 2015',
    tags: ['racial-violence', 'church', 'charleston', 'hate-crime', 'memory'],
    summary: `The Charleston church shooting was not only a mass murder inside a Bible study. It was an attack on a congregation with roots in Black independence, AME organizing, Denmark Vesey's world, Reconstruction memory, and modern civil-rights life. On June 17, 2015, a white supremacist entered Emanuel AME Church in Charleston, South Carolina, sat with worshipers, and killed nine Black people. The public story quickly moved toward forgiveness, flags, and national grief. Those things matter, but they can also soften what happened. This was racial terror in a sacred space, aimed at Black community life. A serious page has to name the victims, the church's history, the ideology, and the choices institutions made before and after the attack.`,
    timeline: [
      { date: '1791', event: `Black worshipers in Charleston organize religious life that later feeds Emanuel AME's roots.` },
      { date: '1816', event: 'Black members withdraw from a white Methodist church and form a separate congregation under Morris Brown.' },
      { date: '1822', event: 'After the Denmark Vesey conspiracy, authorities suppress Black religious organizing and the church is burned.' },
      { date: '1865', event: 'The congregation formally reorganizes after the Civil War.' },
      { date: '1891', event: 'The current Emanuel AME church building is constructed.' },
      { date: 'Jun 17, 2015', event: 'Nine worshipers are murdered during Bible study at Mother Emanuel.' },
      { date: 'Jul 10, 2015', event: 'South Carolina removes the Confederate battle flag from State House grounds.' },
      { date: 'Dec 15, 2016', event: 'A federal jury convicts the shooter on hate-crime and related charges.' },
      { date: 'Jan 10, 2017', event: 'A federal jury sentences him to death.' },
      { date: 'Jun 2021', event: 'Mother Emanuel AME Church is added to the African American Civil Rights Network.' }
    ],
    fullStory: [
      `Mother Emanuel was not just the setting of the Charleston church shooting. The church was part of the target. Emanuel African Methodist Episcopal Church stands inside a long Black history of worship, organizing, surveillance, and state fear. Its roots reach into a Charleston where Black religious independence was never treated as harmless by white authorities.`,
      `The congregation's history goes back to the late 18th and early 19th centuries, when Black worshipers in Charleston built religious life under the pressures of slavery and racial control. In 1816, Black members left a white Methodist church after disputes that included burial grounds and formed a separate congregation. Morris Brown became a central leader. The church connected to the African Methodist Episcopal denomination, itself founded in Philadelphia as Black Christians rejected racism inside white-controlled churches.`,
      `White authorities understood independent Black churches as dangerous. That fear sharpened after 1822, when Denmark Vesey, a free Black carpenter and one of the church's founders, was accused of planning an uprising. Authorities arrested hundreds and executed Vesey and others. The church was burned, and Black independent worship was later forced underground. That history matters because it shows that Black religious space in Charleston had long been political space. Prayer, literacy, burial, leadership, and gathering all threatened slavery's order.`,
      `After the Civil War, the congregation reorganized. The current building, constructed in 1891, became a visible home for one of the South's oldest AME congregations. Mother Emanuel was a church, but also a place where Black Charleston carried memory. Civil-rights leaders, local families, workers, students, elders, and elected officials all passed through its life. The church represented survival, not as abstraction, but as weekly practice.`,
      `On the evening of June 17, 2015, a white supremacist entered a Bible study at Mother Emanuel. He sat with the group before opening fire. Six women and three men were killed: Rev. Clementa Pinckney, Tywanza Sanders, Cynthia Hurd, Rev. Sharonda Coleman-Singleton, Myra Thompson, Ethel Lance, Rev. Daniel Simmons, Rev. DePayne Middleton-Doctor, and Susie Jackson. Several were elders. Pinckney was both pastor and a South Carolina state senator. The attack was meant to terrorize a Black community and ignite broader racial conflict.`,
      `The public response moved quickly. Family members' statements of grief and forgiveness at a bond hearing became national news. President Barack Obama delivered a eulogy for Clementa Pinckney and sang "Amazing Grace." South Carolina removed the Confederate battle flag from the State House grounds after years of activism and pressure. These moments were powerful, but they also shaped the story in ways that could make the nation more comfortable. Forgiveness received enormous attention. The white supremacist ideology behind the killings, the victims' full lives, and the long history of racial violence against Black churches needed equal attention.`,
      `The legal case named the crime as hate. Federal prosecutors secured convictions on hate-crime, obstruction of religious exercise, and firearm charges. In 2017, the shooter was sentenced to death in federal court. That punishment did not answer all the questions the attack raised. Why had racist symbols been defended for so long as heritage? Why did Black churches remain targets? Why did public mourning sometimes rush toward reconciliation before accountability?`,
      `Black churches have long been more than Sunday buildings. They have been schools, political halls, aid networks, archives, meeting places, shelters, and stages for leadership. That is why they have been attacked, from arson and bombings to surveillance and shootings. Mother Emanuel's history sits beside the bombing of Sixteenth Street Baptist Church, attacks on civil-rights organizers, and later threats against Black religious spaces. The violence is not random when it repeatedly strikes the institutions that sustain Black civic life.`,
      `To tell the Charleston story well, the victims cannot become props for a lesson about national healing. They were people gathered for Bible study. They had families, work, ministries, jokes, habits, and futures. The church was not only historic because something terrible happened there. It was historic before the shooter walked in, because generations had made it a home for faith and Black public life.`,
      `The Charleston church shooting forces readers to hold grief and clarity at the same time. The attack happened in a sacred room, but it came from a political tradition of white supremacy. The aftermath included grace, but grace should not be used to lower the demand for truth.`
    ],
    costImpact: [
      `The cost is first the nine lives taken and the families, survivors, and congregation left to carry the trauma. The attack also forced Black worshipers across the country to confront again that even sacred space can be made vulnerable by racist violence. Public attention to forgiveness sometimes placed emotional labor on grieving families while the country debated symbols and motives it should already have understood.`,
      `The impact included federal hate-crime convictions, renewed attention to security at Black churches, and the removal of the Confederate battle flag from South Carolina State House grounds. It also deepened public awareness of Mother Emanuel's long civil-rights significance and the continuing threat of white supremacist violence.`
    ],
    whyItMattersToday: [
      `Charleston matters today because racial violence often tries to attack institutions, not only individuals. Mother Emanuel represented Black worship, history, leadership, and community memory. The shooter understood enough of that to choose the site. Readers should understand it too.`,
      `The story also challenges the way the country processes Black grief. Forgiveness can be real and sacred when it comes from the harmed. It becomes dangerous when outsiders use it to rush past accountability, policy, symbols, guns, white supremacist organizing, or historical memory.`,
      `A reader should leave knowing the victims' names, the church's history, and the difference between healing and forgetting.`
    ],
    connected: [
      { href: '@root/generated/pages/denmark-vesey.html', title: 'Denmark Vesey', description: `Connects Mother Emanuel to Charleston's earlier Black resistance history.` },
      { href: '@root/generated/pages/black-lives-matter.html', title: 'Black Lives Matter', description: 'Places the attack inside modern organizing against racial violence.' },
      { href: '@root/encyclopedia/mamie-till-mobley.html', title: 'Mamie Till-Mobley', description: 'Another story about public grief, racial terror, and truth-telling.' },
      { href: '@root/generated/pages/fred-hampton.html', title: 'Fred Hampton', description: 'Shows how state and racial violence have targeted Black organizing spaces.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Mother Emanuel AME Church', url: 'https://home.nps.gov/places/south-carolina-mother-emanuel-ame-church.htm' },
      { source: 'Department of Justice', title: 'Federal Jury Sentences Dylann Storm Roof to Death', url: 'https://www.justice.gov/usao-sc/pr/federal-jury-sentences-dylann-storm-roof-death' },
      { source: 'Federal Bureau of Investigation', title: 'Seeking Suspect in Charleston Church Shootings', url: 'https://www.fbi.gov/news/stories/seeking-suspect-in-church-shootings-in-charleston-south-carolina' },
      { source: 'Lowcountry Digital History Initiative', title: 'Mother Emanuel Tribute', url: 'https://ldhi.library.cofc.edu/exhibits/show/mother-emanuel-tribute/overview' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://home.nps.gov/places/south-carolina-mother-emanuel-ame-church.htm', 'https://www.justice.gov/usao-sc/pr/federal-jury-sentences-dylann-storm-roof-death'],
      supportingSources: ['https://www.fbi.gov/news/stories/seeking-suspect-in-church-shootings-in-charleston-south-carolina', 'https://ldhi.library.cofc.edu/exhibits/show/mother-emanuel-tribute/overview'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'Victim names, hate-crime convictions, death sentence, white supremacist motive, Confederate flag aftermath, forgiveness framing, and church history reviewed.',
      materialCorrections: 'Expanded daily fallback into a victim-centered and institution-centered history of Mother Emanuel, racial terror, legal aftermath, and public memory.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'charlotte-ray',
    fullDate: '2026-08-20',
    dailyDateLabel: 'August 20',
    subject: 'Charlotte E. Ray',
    category: 'Law',
    type: 'People',
    dates: '1850 - 1911',
    tags: ['law', 'women', 'suffrage', 'howard', 'firsts'],
    summary: `Charlotte E. Ray is frequently named as the first Black woman lawyer in the United States. That first matters, but the deeper story is about how narrow the doorway was. Ray graduated from Howard University's law program in 1872, was admitted to the District of Columbia bar, and opened a law practice at a time when racism and sexism worked together to make clients, courts, and professional networks difficult to reach. Her career in law appears to have been brief, not because the achievement was small, but because the barriers were so large. Ray's page matters because it asks what a "first" costs when the institution is not ready to let the first person fully work.`,
    timeline: [
      { date: 'Jan 13, 1850', event: 'Born in New York City into a family active in education and abolitionist circles.' },
      { date: '1860s', event: `Works as a teacher at Howard University's Normal and Preparatory Department.` },
      { date: '1872', event: `Graduates from Howard University's law program.` },
      { date: '1872', event: 'Is admitted to the District of Columbia bar.' },
      { date: '1872', event: 'Opens a law practice in Washington, D.C.' },
      { date: '1875', event: 'Argues or files work in Gadley v. Gadley, a divorce case often cited in accounts of her practice.' },
      { date: '1876', event: 'Appears as a delegate at a National Woman Suffrage Association conference.' },
      { date: 'Late 1870s', event: 'Leaves legal practice and returns to teaching.' },
      { date: '1911', event: 'Dies in Woodside, New York.' }
    ],
    fullStory: [
      `Charlotte E. Ray's life is often compressed into a single sentence: first Black woman lawyer in America. The sentence is useful, but it hides the hard part. Ray did not enter a profession waiting to celebrate her. She entered a legal world built around white men, a profession where women were doubted and Black women were often made nearly invisible.`,
      `Ray was born in New York City in 1850. Her father, Charles Bennett Ray, was a minister, abolitionist, newspaper editor, and activist. That family context matters because Ray's achievement did not appear from nowhere. She came from a world that valued education, antislavery politics, and public argument. Black families and institutions built pathways even when the nation tried to deny them.`,
      `By the late 1860s and early 1870s, Howard University in Washington, D.C., was one of the few places where a Black woman could imagine professional education. Ray worked as a teacher at Howard's Normal and Preparatory Department and enrolled in its law program. Sources differ in small details about how she presented her name in school records, and some accounts suggest initials may have helped her avoid gender discrimination. That possibility should be handled carefully. Whether or not initials opened a door, the larger fact is clear: law schools and bars were not structured to welcome women like Ray.`,
      `In 1872, Ray graduated from Howard's law program and was admitted to the District of Columbia bar. She opened a practice in Washington. The achievement was extraordinary, but the market was brutal. A Black woman attorney had to persuade clients to hire her, courts to respect her, and a profession to recognize her authority. Racism and sexism did not operate separately. Together they narrowed access to clients, referrals, credit, reputation, and safety.`,
      `One case associated with Ray is Gadley v. Gadley, a divorce matter in the District of Columbia. The case is often cited because it shows Ray doing substantive legal work in a period when many people would have denied that a Black woman could practice law at all. It also hints at the kinds of clients who may have needed her: people navigating family law, property, violence, abandonment, and marital rights in a legal system not designed around Black women's protection.`,
      `Ray's law practice appears to have been short. By the late 1870s, she had returned to teaching. That turn should not be read as failure of talent. It should be read against the conditions. A first can open the door and still find no hallway on the other side. The profession could point to Ray's admission as proof of possibility while doing little to create a profession in which someone like her could thrive.`,
      `Ray also connected to women's rights politics. She appeared as a delegate at an 1876 National Woman Suffrage Association conference. That connection places her inside a complicated movement. White suffrage leaders often marginalized Black women, and Black women had to fight for political rights across both race and gender. Ray's presence matters because Black women lawyers and activists were not late additions to rights politics. They were there, even when the record treated them as exceptional or inconvenient.`,
      `The archive around Ray is thin compared with what readers might want. That thinness is itself historical evidence. Black women's professional lives were often under-recorded, especially when careers were cut short by barriers rather than ending in public honors. A responsible page should not invent a fuller record than exists. It should explain why the available record is incomplete and what that incompleteness tells us about power.`,
      `Ray's legacy lives in the questions her career raises. What does admission mean without access? What does a license mean without clients? What does a first mean when the profession can celebrate the exception while excluding the many?`,
      `Charlotte E. Ray deserves more than a trivia card because her story reveals the difference between breaking a barrier and changing the institution that built it. She did both as far as one person could, and the limits she faced became part of the history future Black women lawyers had to confront.`
    ],
    costImpact: [
      `Ray's cost was professional isolation. She earned credentials that should have opened a career, but racism and sexism restricted clients, trust, income, and recognition. The available record suggests that legal practice became difficult to sustain, pushing her back toward teaching. That is not a small footnote. It is the story of an institution allowing entry without providing equal conditions.`,
      `Her impact is both symbolic and practical. She made Black women's legal authority visible in the 1870s and created a precedent later generations could claim. Her life also cautions readers to ask what support, networks, and structural changes are necessary after a barrier is technically broken.`
    ],
    whyItMattersToday: [
      `Ray matters today because "first" stories can hide institutional resistance. A profession can admit one person and still remain hostile to the group that person represents. The question is not only who gets through the door. It is whether the workplace, court, school, or bar association changes after they enter.`,
      `Her story also matters for archival honesty. We do not have every detail readers might want about Ray's practice. Instead of filling gaps with legend, we can read the silence as part of the history of Black women in law: under-recorded, underestimated, and often remembered only when someone goes looking.`,
      `A reader should leave Ray with admiration, but also with a sharper understanding of why representation needs structure behind it.`
    ],
    connected: [
      { href: '@root/generated/pages/mary-ann-shadd-cary.html', title: 'Mary Ann Shadd Cary', description: 'Another early Black woman in law, teaching, publishing, and suffrage.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Connects legal access to broader fights over public power.' },
      { href: '@root/generated/pages/constance-baker-motley.html', title: 'Constance Baker Motley', description: 'A later Black woman lawyer who transformed federal civil-rights law.' },
      { href: '@root/encyclopedia/pauli-murray.html', title: 'Pauli Murray', description: 'Links legal thought, gender, race, and constitutional argument.' }
    ],
    externalLinks: [
      { source: 'American Bar Association', title: 'Black Women Lawyers Led as Suffragists', url: 'https://www.americanbar.org/groups/government_public/resources/public-lawyer/2021-winter/black-women-lawyers-led-suffragists/' },
      { source: 'Department of Justice', title: 'First Annual Charlotte E. Ray Lecture remarks', url: 'https://www.justice.gov/archives/opa/speech/assistant-attorney-general-kenneth-polite-jr-delivers-remarks-first-annual-charlotte-e' },
      { source: 'Encyclopedia.com', title: 'Ray, Charlotte E. (1850-1911)', url: 'https://www.encyclopedia.com/women/encyclopedias-almanacs-transcripts-and-maps/ray-charlotte-e-1850-1911' },
      { source: 'History', title: 'Charlotte E. Ray, first Black woman attorney', url: 'https://www.history.com/articles/charlotte-e-ray-first-black-woman-attorney' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.americanbar.org/groups/government_public/resources/public-lawyer/2021-winter/black-women-lawyers-led-suffragists/', 'https://www.justice.gov/archives/opa/speech/assistant-attorney-general-kenneth-polite-jr-delivers-remarks-first-annual-charlotte-e'],
      supportingSources: ['https://www.encyclopedia.com/women/encyclopedias-almanacs-transcripts-and-maps/ray-charlotte-e-1850-1911', 'https://www.history.com/articles/charlotte-e-ray-first-black-woman-attorney'],
      verifiedQuoteSource: 'No quotation included. Brief historical praise sometimes quoted in secondary accounts was omitted to avoid over-weighting a thin record.',
      sensitiveClaimsReviewed: 'First Black woman lawyer claim, possible use of initials, limited law-practice record, Gadley v. Gadley, and suffrage conference participation reviewed with cautious wording.',
      materialCorrections: 'Expanded scheduled fallback into a fuller account of legal access, archival limits, gendered racism, and the difference between admission and professional support.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'christine-darden',
    fullDate: '2026-08-26',
    dailyDateLabel: 'August 26',
    subject: 'Christine Darden',
    category: 'Science',
    type: 'People',
    dates: '1942 - present',
    tags: ['science', 'nasa', 'engineering', 'aerospace', 'women'],
    summary: `Christine Darden's NASA story begins where many simplified science stories end: with brilliance finally recognized. But the deeper history is about what she had to push through before recognition arrived. Darden came to NASA's Langley Research Center in 1967 as a data analyst, one of the women doing technical work in a segregated and gendered institution. She wanted engineering assignments, asked for them directly, and became an aerospace engineer known for sonic boom research. Her career connects mathematics, persistence, management, and institutional change. She matters because she helps readers see that scientific achievement is not only discovery. It is also access to the room where questions get chosen.`,
    timeline: [
      { date: 'Sep 10, 1942', event: 'Born Christine Mann in Monroe, North Carolina.' },
      { date: '1962', event: 'Earns a mathematics degree from Hampton Institute.' },
      { date: '1967', event: 'Joins NASA Langley Research Center as a data analyst.' },
      { date: 'Late 1960s', event: 'Asks why men with similar credentials are moved into engineering while women remain in computing roles.' },
      { date: '1970s', event: 'Begins work as an aerospace engineer focused on sonic boom research.' },
      { date: '1983', event: 'Earns a doctorate in mechanical engineering from George Washington University.' },
      { date: '1989', event: `Becomes technical leader of NASA's Sonic Boom Team.` },
      { date: '1990s-2000s', event: 'Holds senior leadership roles at Langley.' },
      { date: '2007', event: 'Retires from NASA after a 40-year career.' },
      { date: '2019', event: 'Receives the Congressional Gold Medal with Hidden Figures colleagues.' }
    ],
    fullStory: [
      `Christine Darden's career asks a simple question with a complicated history behind it: who gets to be called an engineer? At NASA Langley in the 1960s, women with strong mathematics backgrounds could be hired to compute, analyze, and support research, but the path from that work into engineering was not equally open. Darden noticed the pattern and challenged it.`,
      `She was born Christine Mann in Monroe, North Carolina, in 1942. Her education reflected both family expectation and segregated opportunity. She studied mathematics at Hampton Institute, later earned a master's degree, taught, and built a life around numbers before joining NASA in 1967. By then, Langley had already relied for decades on women mathematicians, including Black women whose work helped make flight research possible. The title "computer" could describe highly skilled technical labor, but it often carried lower status, lower pay, and fewer chances to direct research.`,
      `Darden arrived after some of the most famous early space-race calculations, but NASA's need for mathematical talent had not ended. The agency was studying flight, aerodynamics, supersonic travel, and the future of aircraft design. Darden's early assignment placed her in a computing pool, where she processed data rather than leading experiments. She soon saw men with similar education moved into engineering positions while women stayed in support roles. Instead of quietly accepting the division, she asked a supervisor why.`,
      `That question changed her career. Darden moved into engineering work and began focusing on sonic booms, the explosive sound associated with aircraft flying faster than the speed of sound. Supersonic flight raised technical and public problems. Engineers had to understand shock waves, aircraft shape, pressure signatures, community noise, and whether faster aircraft could be designed without making life on the ground intolerable. Darden's work helped model and reduce sonic boom effects.`,
      `The science was demanding. Sonic boom research required mathematics, wind-tunnel analysis, aircraft design knowledge, data interpretation, and the ability to translate theory into practical questions. Darden earned a doctorate in mechanical engineering from George Washington University in 1983 while continuing her NASA work. That degree was not ornamental. It reflected the depth of her technical authority in a field where women, especially Black women, had long been treated as support staff even when they were doing essential intellectual labor.`,
      `Darden eventually became a leader of NASA's Sonic Boom Team and moved into management. She authored or coauthored technical publications and supervised major research programs. Her career also included work on issues of equity inside the agency, as she became part of the story of women pushing NASA to recognize talent already present in the building.`,
      `The public learned more about Darden after Hidden Figures widened interest in the Black women mathematicians and engineers of NASA. Darden appears in the book's larger history, though the film focuses on Katherine Johnson, Dorothy Vaughan, and Mary Jackson. That distinction matters. Public memory often has room for only a few faces at a time, but the institution depended on many women across generations. Darden's career shows the transition from hand computation to engineering leadership, from being assigned calculations to shaping research agendas.`,
      `Darden's story should not be reduced to perseverance alone. Perseverance is part of it, but institutions also made choices. Supervisors chose who advanced. Job classifications shaped pay and authority. Gender and race shaped assumptions about ambition and technical ability. Darden's talent mattered because she insisted on using it fully, but the barrier was not a lack of talent. It was a gatekeeping system that had to be confronted.`,
      `When Darden retired in 2007 after four decades at NASA, she left behind research, leadership, and a clearer record of what Black women had contributed to aerospace science. In 2019, she was included among women honored with the Congressional Gold Medal connected to the Hidden Figures legacy. Recognition arrived late, but it changed what many readers imagine when they hear "NASA engineer."`,
      `Christine Darden teaches that science is not only what happens at the chalkboard, in the wind tunnel, or inside the computer model. It also happens when someone asks why the same credentials lead to different futures.`
    ],
    costImpact: [
      `Darden's cost included working inside an institution where Black women could be essential and still underestimated. She had to question job assignments that treated women as computational support while men moved into engineering. That kind of barrier wastes talent and asks the excluded person to spend energy proving what should have been recognized.`,
      `Her impact includes major sonic boom research, technical leadership, and a broader public understanding of Black women in aerospace. She helped show that access to engineering titles, research authority, and management power matters because it determines who gets to shape scientific questions, not only who solves them after someone else asks.`
    ],
    whyItMattersToday: [
      `Darden matters today because science and engineering still wrestle with access, credit, and leadership. Programs that encourage young people into STEM are important, but her story points to another question: once talented people arrive, are they allowed to advance into the work they are trained to do?`,
      `Her career also expands the Hidden Figures story beyond a single moment. Black women at NASA were not one generation of calculators who disappeared after the space race. They were mathematicians, engineers, managers, and researchers whose work stretched across decades.`,
      `A reader should leave Darden understanding that brilliance needs opportunity, and opportunity is an institutional decision.`
    ],
    connected: [
      { href: '@root/encyclopedia/katherine-johnson.html', title: 'Katherine Johnson', description: 'Connects Darden to Black women mathematicians at NASA Langley.' },
      { href: '@root/generated/pages/annie-easley.html', title: 'Annie Easley', description: 'Another aerospace and computing pioneer who pushed through institutional limits.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Places Darden in a wider history of Black technical innovation.' },
      { href: '@root/generated/pages/dorothy-vaughan.html', title: 'Dorothy Vaughan', description: `Shows the supervisory and computing world that shaped NASA's hidden labor.` }
    ],
    externalLinks: [
      { source: 'NASA', title: 'Christine M. Darden', url: 'https://www.nasa.gov/image-article/christine-m-darden/' },
      { source: 'Congressional Record', title: 'Recognizing Christine Darden and Hidden Figures honorees', url: 'https://www.congress.gov/116/crec/2019/09/19/modified/CREC-2019-09-19-pt1-PgH7812.htm' },
      { source: 'HistoryMakers', title: 'Christine Darden biography', url: 'https://www.thehistorymakers.org/biography/christine-darden' },
      { source: 'NCpedia', title: 'Darden, Christine Voncil Mann', url: 'https://www.ncpedia.org/biography/darden-christine' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nasa.gov/image-article/christine-m-darden/', 'https://www.congress.gov/116/crec/2019/09/19/modified/CREC-2019-09-19-pt1-PgH7812.htm'],
      supportingSources: ['https://www.thehistorymakers.org/biography/christine-darden', 'https://www.ncpedia.org/biography/darden-christine'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'Current living status, sonic boom role, doctoral degree date, NASA job-title shift, and Hidden Figures recognition reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a deeper account of engineering access, sonic boom research, and NASA institutional gender/race barriers.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'claudette-colvin',
    outputPath: 'encyclopedia/claudette-colvin.html',
    fullDate: '2026-03-06',
    dailyDateLabel: 'March 6',
    subject: 'Claudette Colvin',
    category: 'Hidden History',
    type: 'People',
    dates: '1939 - 2026',
    tags: ['civil-rights', 'montgomery', 'bus-boycott', 'youth', 'women'],
    summary: `Claudette Colvin was 15 years old when she refused to give up her bus seat in Montgomery, Alabama, on March 2, 1955. That was nine months before Rosa Parks. The familiar version often asks why Colvin was not made the face of the bus boycott. The better question is what her story reveals about youth, respectability, gender, class, colorism, legal strategy, and public memory. Colvin was not a rehearsal for Parks. She was a teenager who acted from what she had been learning about Black history and citizenship, then lived with the consequences of being too young, too dark, too working-class, and later too complicated for the image movement leaders believed the moment required.`,
    timeline: [
      { date: 'Sep 5, 1939', event: 'Born in Montgomery, Alabama.' },
      { date: 'Mar 2, 1955', event: 'Refuses to give up her seat on a Montgomery bus and is arrested at age 15.' },
      { date: 'Mar 1955', event: 'Local leaders investigate whether her case can challenge bus segregation.' },
      { date: 'Dec 1, 1955', event: 'Rosa Parks is arrested, helping launch the Montgomery Bus Boycott.' },
      { date: 'Feb 1, 1956', event: 'Browder v. Gayle is filed in federal court.' },
      { date: 'Jun 5, 1956', event: 'A federal court rules Montgomery bus segregation unconstitutional.' },
      { date: 'Nov 13, 1956', event: 'The Supreme Court affirms the ruling.' },
      { date: 'Dec 20, 1956', event: 'The boycott ends after the mandate reaches Montgomery.' },
      { date: 'Dec 16, 2022', event: `A judge grants Colvin's petition to expunge the juvenile record connected to her arrest.` },
      { date: 'Jan 13, 2026', event: 'Dies in Alabama at age 86.' }
    ],
    fullStory: [
      `Claudette Colvin's story begins before the bus. It begins in Montgomery classrooms, churches, neighborhoods, and conversations where Black children learned both the official rules of Jim Crow and the moral truth underneath them. Colvin was a student at Booker T. Washington High School. She had been learning about Harriet Tubman, Sojourner Truth, and the Constitution. When the bus driver demanded that she give up her seat on March 2, 1955, she later remembered feeling that history was sitting with her.`,
      `Montgomery buses were daily theaters of power. Black riders paid fares, entered through the back, stood while seats were available, and endured drivers who could humiliate or threaten them. The rules were not merely about seating. They trained people to accept public insult as routine. For Black women and girls, the bus also carried the threat of physical handling by police and drivers who expected obedience.`,
      `Colvin refused to move. Police dragged her from the bus, arrested her, and charged her. She was 15. She was not protected by fame, age, money, or political position. She was a teenager facing adults with badges and a city system designed to make her small. Her refusal was not accidental. It was a decision made in a moment when fear and principle collided.`,
      `Local civil-rights leaders did consider her case. Jo Ann Robinson, E. D. Nixon, Rosa Parks, ministers, and lawyers were already watching for a case that could challenge bus segregation. Colvin's courage was real, but movement strategy is rarely built on courage alone. Leaders worried about her age, class background, complexion, and later her pregnancy. Those concerns reflected strategic calculation, but also the respectability politics, colorism, and gendered judgment inside Black freedom movements. Naming that does not diminish Rosa Parks. It makes the movement more honest.`,
      `Parks was not simply "chosen" because she was respectable. She was a trained organizer, NAACP secretary, investigator of racial violence, and longtime activist. The problem with the simplified Colvin-versus-Parks story is that it turns two women into rivals for a spotlight. The fuller story shows a movement making strategic choices under hostile conditions, sometimes in ways that protected the campaign while sidelining people who had already paid a price.`,
      `Colvin did not disappear from the legal struggle. She became one of the plaintiffs in Browder v. Gayle, the federal case that directly challenged Montgomery's bus segregation. The plaintiffs included Aurelia Browder, Susie McDonald, Claudette Colvin, and Mary Louise Smith. The legal strategy avoided relying only on Parks's criminal case and instead attacked the constitutionality of segregation itself. In June 1956, a federal court ruled against Montgomery's bus segregation. The Supreme Court affirmed that result later that year.`,
      `The boycott was sustained by thousands of Black residents, many of them working women who walked, carpooled, organized rides, raised money, and endured retaliation. Colvin's action helped make that legal road possible, but public memory narrowed around a cleaner story. Parks became the symbol, and Colvin became the hidden predecessor. That hiding was not total, but it was powerful enough that many people learned her name only decades later.`,
      `Colvin eventually moved to New York and worked for years as a nurse's aide. She lived with the long shadow of a juvenile record connected to the arrest. In 2021, she petitioned to have that record expunged, and in 2022 a judge granted the request. The expungement was symbolic and practical. It recognized that the city had punished a child for resisting an unconstitutional system.`,
      `Colvin died in January 2026. Her death changed the dates on the page, but not the central lesson. She was not simply "before Rosa Parks." She was part of the same struggle, part of the same legal chain, and part of the same complicated politics of visibility. She teaches that movements need symbols, but history needs the people who were edited out of the symbol.`,
      `To tell Colvin's story well is to refuse both erasure and simplification. She was brave, young, judged, useful to the law, inconvenient to public relations, and fully human. That is exactly why she belongs in the encyclopedia.`
    ],
    quote: {
      text: `It's my constitutional right.`,
      cite: `Claudette Colvin, recalling her refusal to move`
    },
    costImpact: [
      `Colvin's cost was immediate and long-lasting. She was arrested as a child, physically handled by police, judged by adults inside and outside the movement, and left with a record tied to an unconstitutional system. Her pregnancy and class background became reasons some leaders doubted her usefulness as a public face, showing how respectability could wound people who had already shown courage.`,
      `Her impact was legal and historical. As a Browder v. Gayle plaintiff, she helped produce the federal ruling that ended Montgomery bus segregation. Her later recovery in public memory has pushed readers to see the boycott as collective, strategic, gendered, and more complicated than one perfect moment.`
    ],
    whyItMattersToday: [
      `Colvin matters today because movements still make choices about who becomes visible. Those choices can be strategic and understandable, but they can also reproduce colorism, class bias, age bias, sexism, and discomfort with people whose lives do not fit a clean public image.`,
      `Her story also changes how readers understand youth activism. Teenagers are often treated as symbols after adults approve them, but Colvin acted before she was safe to celebrate. She was not waiting to become respectable enough for history.`,
      `A reader should leave Colvin with a fuller Montgomery story: Parks was a serious organizer, Colvin was a serious resister, and the boycott was the work of a community whose legal victory depended on people public memory did not always protect.`
    ],
    connected: [
      { href: '@root/encyclopedia/diane-nash.html', title: 'Diane Nash', description: 'Another young organizer whose discipline shaped civil-rights strategy.' },
      { href: '@root/encyclopedia/mamie-till-mobley.html', title: 'Mamie Till-Mobley', description: 'Connects public memory, grief, and the politics of visibility.' },
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'Shows the costs placed on Black children in civil-rights battles.' },
      { href: '@root/generated/pages/brown-v-board-plaintiffs.html', title: 'Brown v. Board Plaintiffs', description: 'Centers families and young people behind legal milestones.' }
    ],
    externalLinks: [
      { source: 'National Women\'s History Museum', title: 'The Girl Who Acted Before Rosa Parks', url: 'https://www.womenshistory.org/articles/girl-who-acted-rosa-parks' },
      { source: 'National Park Service', title: 'Montgomery Bus Boycott', url: 'https://home.nps.gov/articles/montgomery-bus-boycott.htm' },
      { source: 'Encyclopedia of Alabama', title: 'Claudette Colvin', url: 'https://encyclopediaofalabama.org/article/claudette-colvin/' },
      { source: 'Claudette Colvin Foundation', title: 'About Claudette Colvin', url: 'https://www.claudettecolvinfoundation.com/about' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.womenshistory.org/articles/girl-who-acted-rosa-parks', 'https://home.nps.gov/articles/montgomery-bus-boycott.htm'],
      supportingSources: ['https://encyclopediaofalabama.org/article/claudette-colvin/', 'https://www.claudettecolvinfoundation.com/about'],
      verifiedQuoteSource: 'National Women\'s History Museum account of Colvin recalling her refusal to move.',
      sensitiveClaimsReviewed: 'Pregnancy, age, colorism/respectability framing, juvenile record expungement, death date, and Colvin-versus-Parks simplification reviewed.',
      materialCorrections: 'Updated dates from 1939-present to 1939-2026 and rebuilt the reference page content while preserving Claudette-style presentation.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'cointelpro',
    outputPath: 'encyclopedia/cointelpro.html',
    fullDate: '2026-02-08',
    dailyDateLabel: 'February 8',
    subject: 'COINTELPRO',
    category: 'Power & Resistance',
    type: 'System',
    dates: '1956 - 1971',
    tags: ['surveillance', 'fbi', 'black-power', 'civil-rights', 'state-power'],
    summary: `COINTELPRO was not a rumor about government surveillance. It was a set of FBI counterintelligence programs that targeted political groups inside the United States, including Black freedom organizations and leaders. From 1956 to 1971, the Bureau used infiltration, informants, forged letters, media manipulation, harassment, and disruption to weaken movements it labeled threats. Black activists were among the most aggressively targeted. The program matters because it reveals how the state can treat dissent as danger, especially when Black communities organize against racism, police violence, war, and poverty. The story is not paranoia. It is documented history.`,
    timeline: [
      { date: '1956', event: 'The FBI begins COINTELPRO against the Communist Party USA.' },
      { date: '1960s', event: 'The Bureau expands domestic programs targeting civil-rights, antiwar, Black nationalist, and other political groups.' },
      { date: '1963', event: 'FBI surveillance and harassment of Martin Luther King Jr. intensifies.' },
      { date: '1967', event: 'A COINTELPRO program against Black nationalist and Black freedom groups begins.' },
      { date: 'Dec 4, 1969', event: 'Chicago Black Panther leader Fred Hampton is killed in a police raid shaped by informant intelligence.' },
      { date: 'Mar 8, 1971', event: 'Activists break into an FBI office in Media, Pennsylvania, and expose secret files.' },
      { date: 'Apr 1971', event: 'FBI Director J. Edgar Hoover formally ends COINTELPRO programs.' },
      { date: '1975', event: 'The Church Committee begins investigating intelligence abuses.' },
      { date: 'Apr 29, 1976', event: 'The Church Committee final report documents domestic intelligence abuses.' },
      { date: '1978', event: 'The Foreign Intelligence Surveillance Act creates a new warrant process for some surveillance.' }
    ],
    fullStory: [
      `COINTELPRO is one of those histories that sounds like an exaggeration until the records appear. The FBI used the name for counterintelligence programs aimed at domestic political organizations. The programs began in 1956 against the Communist Party USA and expanded across the 1960s to include civil-rights activists, Black nationalist organizations, the Black Panther Party, antiwar groups, Puerto Rican independence activists, socialist groups, and others.`,
      `For Black freedom movements, the danger was especially sharp. The FBI treated demands for civil rights, self-defense, anti-poverty programs, antiwar organizing, and Black political education as potential threats to national security. The Bureau's language often collapsed legitimate protest into subversion. That framing gave agents permission to watch, infiltrate, disrupt, and discredit people whose real offense was organizing outside the boundaries authorities found acceptable.`,
      `The tactics varied. Informants entered organizations and reported on members. Anonymous letters tried to create suspicion between allies. Fake communications were used to deepen conflict. Press contacts helped spread damaging stories. Leaders were harassed through surveillance, arrests, and pressure. The goal was not only to gather information. It was to interfere with political work.`,
      `Martin Luther King Jr. was one of the most famous targets of FBI surveillance and harassment. The Bureau wiretapped, tracked, and tried to damage him personally. That targeting shows that COINTELPRO cannot be dismissed as a response only to armed groups or revolutionary rhetoric. King was a minister, Nobel Peace Prize winner, and advocate of nonviolent direct action. The Bureau still treated him as a threat.`,
      `The Black Panther Party became another major target. Founded in Oakland in 1966, the Panthers combined armed self-defense, political education, opposition to police brutality, and community programs such as free breakfast for children and health clinics. The FBI portrayed the Panthers as a severe internal threat. Local police departments and federal agents operated in a climate shaped by that framing. Informants and intelligence played roles in conflicts that damaged the organization and endangered members.`,
      `Fred Hampton's death in Chicago in 1969 remains one of the most contested and consequential examples of state violence tied to this era. Hampton, a charismatic young Panther leader, was killed during a police raid. An FBI informant had provided information to law enforcement. Later litigation and public investigation deepened scrutiny of how the raid was planned and justified. The details matter because they show the overlap between surveillance, local policing, and lethal force.`,
      `COINTELPRO came to public attention in 1971 after activists broke into an FBI office in Media, Pennsylvania, and sent documents to journalists. The files showed secret domestic operations that the Bureau had not disclosed. J. Edgar Hoover soon ended the formal COINTELPRO programs, but ending the name did not erase the practices or the questions they raised.`,
      `The Church Committee, a Senate investigation launched in 1975, documented serious intelligence abuses by the FBI, CIA, NSA, and IRS. Its findings described covert action designed to disrupt and discredit groups and individuals deemed threatening. The committee's work helped lead to reforms, including oversight changes and the Foreign Intelligence Surveillance Act. Those reforms mattered, but they did not settle the tension between security claims and political freedom.`,
      `COINTELPRO's history is not an invitation to see every government action as identical. It is a demand for evidence and accountability. The evidence shows that federal power was used to weaken Black organizing, shape public narratives, and invade private life. The state did not merely observe movements. It tried to change what they could become.`,
      `The deeper lesson is that democracy depends on the right to dissent without being secretly sabotaged by the government. When Black communities organize against racism, the question should not be whether the state feels comfortable. The question should be whether constitutional rights survive when the people using them are unpopular, radical, young, poor, or Black.`
    ],
    quote: {
      text: `disrupt and discredit`,
      cite: `Church Committee history describing COINTELPRO's covert action goals`
    },
    costImpact: [
      `The cost of COINTELPRO included broken trust, damaged organizations, prison exposure, psychological stress, public smear campaigns, and violence. Informants and forged communications made organizers question one another. Surveillance invaded private life. Families and communities absorbed the consequences when leaders were harassed, jailed, or killed.`,
      `The impact was also institutional. COINTELPRO exposed the need for oversight of domestic intelligence and helped shape later reforms. But its deeper impact lives in communities that learned, through documents rather than rumor, that the government had actively tried to weaken Black freedom work.`
    ],
    whyItMattersToday: [
      `COINTELPRO matters today because surveillance is not only about watching. It can shape behavior, chill speech, fracture trust, and change what movements dare to do. New technologies make monitoring easier, but the central democratic question is old: who defines dissent as danger?`,
      `The program also helps readers understand why some Black activists distrust official narratives about security and extremism. That distrust did not appear from nowhere. It came from documented state conduct, including conduct later investigated by Congress.`,
      `A reader should leave COINTELPRO with a commitment to evidence, not conspiracy. The record is already serious enough.`
    ],
    connected: [
      { href: '@root/generated/pages/black-panther-party.html', title: 'The Black Panther Party', description: 'One of the major Black organizations targeted by FBI disruption.' },
      { href: '@root/generated/pages/fred-hampton.html', title: 'Fred Hampton', description: 'Shows the lethal stakes of surveillance, informants, and policing.' },
      { href: '@root/generated/pages/angela-davis.html', title: 'Angela Davis', description: 'Connects radical politics, state scrutiny, and public campaigns.' },
      { href: '@root/encyclopedia/kathleen-cleaver.html', title: 'Kathleen Cleaver', description: 'Places COINTELPRO inside Black Panther organizing and gendered leadership.' }
    ],
    externalLinks: [
      { source: 'U.S. Senate', title: 'The Church Committee', url: 'https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm' },
      { source: 'FBI Vault', title: 'COINTELPRO Black Extremist files', url: 'https://vault.fbi.gov/cointel-pro/cointel-pro-black-extremists/' },
      { source: 'National Archives', title: 'Black Panther Party selected records', url: 'https://www.archives.gov/research/african-americans/black-power/black-panthers' },
      { source: 'National Archives', title: 'Selected Committee report on Martin Luther King Jr. and COINTELPRO', url: 'https://www.archives.gov/research/jfk/select-committee-report/part-2d.html' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm', 'https://vault.fbi.gov/cointel-pro/cointel-pro-black-extremists/'],
      supportingSources: ['https://www.archives.gov/research/african-americans/black-power/black-panthers', 'https://www.archives.gov/research/jfk/select-committee-report/part-2d.html'],
      verifiedQuoteSource: 'U.S. Senate Church Committee history describing FBI covert action.',
      sensitiveClaimsReviewed: 'FBI program scope, King surveillance, Black Panther targeting, Fred Hampton connection, Media break-in, and reform claims reviewed.',
      materialCorrections: 'Expanded legacy surveillance summary into a documented account of tactics, targets, exposure, oversight, and democratic consequences.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'constance-baker-motley',
    fullDate: '2026-08-18',
    dailyDateLabel: 'August 18',
    subject: 'Constance Baker Motley',
    category: 'Law',
    type: 'People',
    dates: '1921 - 2005',
    tags: ['law', 'civil-rights', 'courts', 'women', 'federal-judiciary'],
    summary: `Constance Baker Motley argued civil-rights cases, wrote legal briefs, represented students and protesters, entered politics, and became the first Black woman appointed to the federal judiciary. Yet she is still too often treated as a supporting character in other people's stories. Motley helped write the first Brown v. Board complaint, represented James Meredith, defended Freedom Riders and sit-in activists, and won case after case against segregation. Her career shows what legal courage looks like when it is not theatrical: preparation, stamina, precision, and the willingness to walk into hostile courts with Black clients whose futures depended on the record she built.`,
    timeline: [
      { date: 'Sep 14, 1921', event: 'Born in New Haven, Connecticut.' },
      { date: '1943', event: 'Graduates from New York University.' },
      { date: '1946', event: 'Earns a law degree from Columbia Law School.' },
      { date: '1946', event: 'Joins the NAACP Legal Defense and Educational Fund.' },
      { date: '1950', event: 'Helps draft the first complaint in what becomes Brown v. Board of Education.' },
      { date: '1962', event: 'Represents James Meredith in the fight to integrate the University of Mississippi.' },
      { date: '1964', event: 'Becomes the first Black woman elected to the New York State Senate.' },
      { date: '1965', event: 'Becomes Manhattan borough president.' },
      { date: '1966', event: 'Confirmed as a federal judge for the Southern District of New York.' },
      { date: 'Sep 28, 2005', event: 'Dies in New York City.' }
    ],
    fullStory: [
      `Constance Baker Motley belongs at the center of civil-rights legal history, not in the margins. She was one of the lawyers who made constitutional promises move through hostile courts. She did not have the luxury of abstract debate. Her clients were students, workers, activists, and families facing segregation backed by sheriffs, governors, school boards, and mobs.`,
      `Motley was born in New Haven, Connecticut, in 1921, the daughter of immigrants from Nevis. Her family did not have wealth, but she had ambition and talent that local supporters noticed. Philanthropist Clarence Blakeslee helped fund her education, making it possible for her to attend New York University and then Columbia Law School. That support mattered because brilliance alone did not pay tuition or open doors for a Black woman in the 1940s legal profession.`,
      `After graduating from Columbia in 1946, Motley joined the NAACP Legal Defense and Educational Fund. The office was small, intense, and historically consequential. Thurgood Marshall led a team that was attacking segregation through litigation across the country. Motley became a key lawyer in that work, drafting briefs, preparing records, and traveling into places where Black lawyers and clients faced open danger.`,
      `She helped draft the first complaint in the litigation that became Brown v. Board of Education. That fact alone should change how readers picture Brown. The case was not only argued by famous men in front of the Supreme Court. It was built by lawyers, including a Black woman, doing the painstaking work of complaint drafting, research, strategy, and client support.`,
      `Motley later represented James Meredith in his fight to enroll at the University of Mississippi. The case required federal court orders and federal enforcement. When Meredith finally enrolled in 1962, violence erupted on campus. Motley was not physically at the center of the riot, but her legal work helped force the institution to do what it had refused to do voluntarily. The danger surrounding the case shows that civil-rights law was never just paperwork.`,
      `Her docket stretched across the movement. She represented Freedom Riders, sit-in demonstrators, and students challenging segregated education. She won major cases involving universities in Georgia, Alabama, and Mississippi. She understood that segregation defended itself through delay, procedure, and local custom as much as through explicit racial language. Her job was to make courts see the constitutional injury underneath the evasions.`,
      `Motley's work also carried gendered burdens. Courtrooms that reluctantly tolerated Black male civil-rights lawyers could still underestimate or disrespect a Black woman lawyer. She had to be exact because opponents were eager to read any mistake as proof that she did not belong. Her style was disciplined rather than loud. That discipline should not be mistaken for softness. It was a strategy of survival and power.`,
      `In the 1960s, Motley moved into electoral politics in New York. She became the first Black woman elected to the New York State Senate and later Manhattan borough president. Those roles connected courtroom civil rights to urban governance: housing, budgets, public institutions, and political representation. Then, in 1966, President Lyndon Johnson appointed her to the U.S. District Court for the Southern District of New York. She became the first Black woman federal judge.`,
      `Her judicial career lasted decades. As a judge, she handled a wide range of cases beyond civil rights, including major matters in employment, institutional reform, and public law. Her presence on the bench mattered, but her legal mind mattered more. She had moved from challenging courts to becoming part of the judiciary, carrying with her the knowledge of what courts could do and what they had refused to do until forced.`,
      `Motley died in 2005. Her life teaches that civil-rights law was collective, gendered, and deeply practical. She was not only in the room. She wrote the papers, made the arguments, represented the clients, won the orders, entered public office, and sat on the bench. If her name feels less familiar than it should, that is not because her work was small. It is because public memory has often been too small to hold her.`
    ],
    quote: {
      text: `I was the kind of person who would not be put down.`,
      cite: `Constance Baker Motley, quoted by U.S. Courts`
    },
    costImpact: [
      `Motley's cost included danger, isolation, and the constant demand to be impeccable. She traveled for cases where white resistance could become violent. She worked in a profession that doubted Black women and in courts where opposing officials used delay and intimidation as strategy. The personal cost also included years of carrying clients' futures inside hostile legal systems.`,
      `Her impact was extraordinary. She helped build Brown, represented James Meredith, defended movement activists, won desegregation cases, entered New York politics, and became the first Black woman federal judge. She expanded what legal authority could look like and helped force institutions to obey constitutional principles they had long evaded.`
    ],
    whyItMattersToday: [
      `Motley matters today because civil-rights victories are often remembered through a narrow cast. Her career makes the story wider and more accurate. Black women were not only witnesses, plaintiffs, or moral voices. They were legal strategists, litigators, judges, and public officials.`,
      `Her life also shows that courts are shaped by who has the power to argue, decide, and be believed. Representation on the bench matters, but so does the lived knowledge a judge brings about how law works on people outside elite comfort.`,
      `A reader should leave Motley understanding that legal change is made by people who can combine courage with craft. She had both.`
    ],
    connected: [
      { href: '@root/generated/pages/james-meredith.html', title: 'James Meredith', description: `One of Motley's major clients in the fight to integrate higher education.` },
      { href: '@root/generated/pages/charles-hamilton-houston.html', title: 'Charles Hamilton Houston', description: `The legal strategist whose institutional work shaped Motley's field.` },
      { href: '@root/encyclopedia/thurgood-marshall.html', title: 'Thurgood Marshall', description: `Motley's colleague and leader at the NAACP Legal Defense Fund.` },
      { href: '@root/encyclopedia/barbara-jordan.html', title: 'Barbara Jordan', description: 'Another Black woman whose public voice changed law and politics.' }
    ],
    externalLinks: [
      { source: 'U.S. Courts', title: 'Constance Baker Motley: Judiciary\'s Unsung Rights Hero', url: 'https://www.uscourts.gov/data-news/judiciary-news/2020/02/20/constance-baker-motley-judiciarys-unsung-rights-hero' },
      { source: 'Federal Judicial Center', title: 'Motley, Constance Baker', url: 'https://www.fjc.gov/history/judges/Motley-Constance-Baker' },
      { source: 'Columbia University', title: 'Constance Baker Motley', url: 'https://blackhistory.news.columbia.edu/people/constance-baker-motley' },
      { source: 'Supreme Court Historical Society', title: 'Constance Baker Motley', url: 'https://civics.supremecourthistory.org/article/constance-baker-motley/' }
    ],
    research: {
      status: 'batch-5-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.uscourts.gov/data-news/judiciary-news/2020/02/20/constance-baker-motley-judiciarys-unsung-rights-hero', 'https://www.fjc.gov/history/judges/Motley-Constance-Baker'],
      supportingSources: ['https://blackhistory.news.columbia.edu/people/constance-baker-motley', 'https://civics.supremecourthistory.org/article/constance-baker-motley/'],
      verifiedQuoteSource: 'U.S. Courts article quoting Motley.',
      sensitiveClaimsReviewed: 'First Black woman federal judge claim, Brown complaint role, James Meredith litigation, electoral offices, and gendered professional barriers reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a deeper account of litigation craft, movement law, political office, and judicial service.',
      finalStatus: 'Batch 5 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = {
  ENTRIES,
};
