const RESEARCH_DATE = '2026-08-17';

const ENTRIES = [
  {
    encyclopediaSlug: 'buffalo-soldiers',
    fullDate: '2026-05-22',
    dailyDateLabel: 'May 22',
    subject: 'The Buffalo Soldiers',
    category: 'Military',
    type: 'Military Unit',
    dates: '1866 - 1944',
    tags: ['military', 'reconstruction', 'jim-crow', 'citizenship', 'west'],
    summary: `The Buffalo Soldiers wore the uniform of a country that still argued over whether Black citizenship was real. Formed after the Civil War, Black cavalry and infantry regiments served in the West, guarded mail routes, built roads, protected national parks, fought in U.S. wars, and lived under discrimination inside the Army and outside it. Their history carries pride and contradiction at the same time. Military service gave some Black men wages, status, travel, and a claim on citizenship. It also placed them inside U.S. expansion that harmed Native nations. This page matters because Black military history deserves honesty. The Buffalo Soldiers were disciplined soldiers and full human beings, not symbols that can be used to avoid the harder story of empire, race, labor, and belonging.`,
    timeline: [
      { date: '1866', event: 'Congress creates six Black Regular Army regiments after the Civil War.' },
      { date: '1869', event: 'Army reorganization consolidates Black cavalry into the 9th and 10th Cavalry and Black infantry into the 24th and 25th Infantry.' },
      { date: '1870s-1880s', event: 'Buffalo Soldiers serve across western posts, campaigns, road construction, escort duty, and mail protection.' },
      { date: '1890', event: 'Some Buffalo Soldiers are present during the Pine Ridge campaign around the Wounded Knee period.' },
      { date: '1898', event: 'Buffalo Soldiers fight in the Spanish-American War, including in Cuba.' },
      { date: '1903', event: 'Black cavalry soldiers serve as some of the first park rangers in Yosemite and Sequoia.' },
      { date: '1916', event: 'The 10th Cavalry serves during the Punitive Expedition into Mexico.' },
      { date: '1917', event: 'The Houston rebellion follows racist policing and abuse of Black soldiers in Texas.' },
      { date: '1944', event: 'The 9th and 10th Cavalry are effectively inactivated as horse cavalry in World War II reorganization.' },
      { date: '1992', event: 'Congress designates July 28 as Buffalo Soldiers Day.' }
    ],
    fullStory: [
      `The Buffalo Soldiers came out of Reconstruction, when Black citizenship was being written into law and attacked on the ground. After the Civil War, the U.S. Army created Black Regular Army regiments. Many soldiers were formerly enslaved men or free Black men who saw military service as wages, protection, travel, and a way to claim public manhood in a country still trying to deny it.`,
      `The nickname Buffalo Soldiers is usually attributed to Native people, though the exact origin is debated. The name became attached especially to the 9th and 10th Cavalry and later to Black soldiers more broadly. It is often used today with honor, but the history behind it sits inside conflict. These soldiers served the U.S. government during campaigns that helped enforce westward expansion and Native dispossession.`,
      `That contradiction cannot be skipped. Buffalo Soldiers faced racism from white officers, white civilians, and the larger military system. They also participated in military actions against Native nations whose lands were being taken by the same government that denied Black people equality. A serious page does not resolve that tension with a slogan. It asks readers to hold both truths: Black soldiers pursued dignity and survival, and the Army used their labor in imperial projects.`,
      `Life at western posts was hard. Soldiers built roads, repaired telegraph lines, escorted stagecoaches and mail, guarded forts, and patrolled long distances. The work was often tedious, dangerous, and physically demanding. Pay was steady compared with many civilian opportunities available to Black men, but racism followed them into towns, saloons, courts, and barracks. Uniforms did not erase white hostility.`,
      `Buffalo Soldiers also served outside the continental West. In the Spanish-American War, Black regiments fought in Cuba, including around San Juan Heights. Their battlefield performance challenged racist assumptions, but praise did not translate into equal treatment. Black soldiers returned to Jim Crow America, where voting rights were being crushed and racial violence was rising.`,
      `Some Buffalo Soldiers played an overlooked role in early national park history. In 1903, units of Black cavalry served in Yosemite and Sequoia, protecting park resources, building roads and trails, and enforcing rules before the National Park Service existed. That history complicates the image of conservation as an all-white story and places Black soldiers inside the making of public lands, even as those lands carried their own histories of Native removal.`,
      `Their daily work also involved skilled labor the word soldier can hide. They cared for horses, mapped terrain, repaired equipment, navigated deserts and mountains, managed supply lines, and communicated across isolated posts. The western Army depended on their discipline in places where weather, distance, disease, and poor provisions could be as dangerous as combat. The labor was military, but it was also infrastructure work for a growing state.`,
      `The story also includes rebellion and repression. In 1917, Black soldiers stationed in Houston faced racist abuse and police violence. A confrontation escalated into armed revolt, deaths, courts-martial, and executions. The Houston rebellion shows the breaking point created when men trained to serve the country were treated as targets by the country's own racial order.`,
      `Buffalo Soldiers have become symbols of perseverance, but symbol can flatten them. They were not simply patriotic proof that Black people deserved rights. They were workers, veterans, husbands, sons, migrants, disciplined professionals, and sometimes men caught inside military orders they did not choose. Their service gave them leverage in arguments over citizenship, but it also showed how often Black loyalty was demanded without Black equality.`,
      `Their history belongs with other Black military stories, from the 54th Massachusetts to the Harlem Hellfighters to the 6888th. In each case, Black service exposed a national contradiction. The country needed Black labor, skill, courage, and discipline, then resisted the claims those qualities made.`
    ],
    costImpact: [
      `The cost included isolation, danger, racism, low status within the Army, violence from white civilians, and moral entanglement in U.S. campaigns against Native nations. Black soldiers could serve with distinction and still be denied equal protection, voting rights, and basic dignity outside the uniform.`,
      `The impact was lasting. Buffalo Soldiers helped define Black regular military service after the Civil War, shaped national park and western military history, and gave later generations a powerful but complicated example of service as both opportunity and contradiction.`
    ],
    whyItMattersToday: [
      `The Buffalo Soldiers matter today because public memory often wants Black military history to be uncomplicated pride. Pride is earned, but honesty is necessary. These soldiers fought racism while serving a government that expanded through conquest and removal. That is not a reason to erase them. It is a reason to study them more carefully.`,
      `Their history also helps readers separate citizenship claims from blind nationalism. Black soldiers used service to demand rights, but the demand was not that the nation was already just. It was that the nation owed justice to the people it asked to serve.`,
      `The fuller lesson is that Black history can hold contradiction without collapsing. The Buffalo Soldiers were brave, exploited, disciplined, ambitious, constrained, and historically important all at once.`
    ],
    connected: [
      { href: '@root/generated/pages/54th-massachusetts-infantry.html', title: 'The 54th Massachusetts Infantry', description: 'Connects Civil War service to later Black Regular Army regiments.' },
      { href: '@root/generated/pages/6888th-battalion.html', title: 'The 6888th Battalion', description: 'Shows Black military service through women\'s wartime logistics and leadership.' },
      { href: '@root/generated/pages/harlem-hellfighters.html', title: 'The Harlem Hellfighters', description: 'Another Black regiment whose service exposed Jim Crow contradictions.' },
      { href: '@root/generated/pages/14th-amendment.html', title: 'The 14th Amendment', description: 'Links Black military service to citizenship claims after the Civil War.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Buffalo Soldiers', url: 'https://www.nps.gov/subjects/buffalosoldiers/index.htm' },
      { source: 'National Park Service', title: 'Buffalo Soldiers at Fort Davis', url: 'https://www.nps.gov/foda/learn/historyculture/buffalo-soldiers.htm' },
      { source: 'National Museum of African American History and Culture', title: 'Buffalo Soldiers', url: 'https://nmaahc.si.edu/explore/stories/buffalo-soldiers' },
      { source: 'National Museum of the United States Army', title: 'Buffalo Soldiers', url: 'https://www.thenmusa.org/biographies/buffalo-soldiers/' },
      { source: 'U.S. Army', title: 'Buffalo Soldiers', url: 'https://www.army.mil/article/177403/buffalo_soldiers' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/subjects/buffalosoldiers/index.htm', 'https://www.nps.gov/foda/learn/historyculture/buffalo-soldiers.htm', 'https://www.army.mil/article/177403/buffalo_soldiers'],
      supportingSources: ['https://nmaahc.si.edu/explore/stories/buffalo-soldiers', 'https://www.thenmusa.org/biographies/buffalo-soldiers/'],
      verifiedQuoteSource: 'No quotation included. Nickname origin treated as attributed and debated rather than certain.',
      sensitiveClaimsReviewed: 'Nickname origin, Native dispossession, Spanish-American War service, national park service, Houston rebellion, and military reorganization reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a morally complex account of service, racism, western expansion, citizenship, and memory.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, military-service complexity review.'
    }
  },
  {
    encyclopediaSlug: 'convict-leasing',
    fullDate: '2026-07-09',
    dailyDateLabel: 'July 9',
    subject: 'The Convict Leasing System',
    category: 'Labor',
    type: 'System',
    dates: '1860s - 1940s',
    tags: ['labor', 'law', 'reconstruction', 'incarceration', 'economics'],
    summary: `Convict leasing was one of the ways slavery survived emancipation in practice. After the Civil War, Southern states criminalized ordinary Black life, arrested Black people under discriminatory laws, and leased imprisoned people to mines, farms, railroads, brick yards, and factories. States earned money. Companies got workers they could abuse, replace, and work to death. The system was not identical to slavery, but it used the 13th Amendment's punishment exception and white-controlled courts to turn Black freedom into forced labor again. This page matters because the end of slavery did not end the fight over Black labor. Convict leasing shows how law, profit, racism, and punishment can combine to make exploitation look legal.`,
    timeline: [
      { date: '1865', event: 'The 13th Amendment abolishes slavery except as punishment for crime.' },
      { date: '1865-1866', event: 'Southern Black Codes criminalize unemployment, movement, labor resistance, and other parts of Black freedom.' },
      { date: '1868', event: 'Georgia begins leasing convicts to private businesses in a system that other states also use.' },
      { date: '1870s-1890s', event: 'Convict leasing expands across the South in mines, railroads, plantations, and industrial work.' },
      { date: '1880s-1900s', event: 'Investigations expose brutal conditions and high death rates in leased labor camps.' },
      { date: '1890s', event: 'Alabama becomes heavily dependent on convict leasing revenue.' },
      { date: '1908', event: 'Georgia abolishes convict leasing but continues chain gangs and other forced prison labor systems.' },
      { date: '1928', event: 'Alabama ends state convict leasing, among the last states to do so.' },
      { date: '1941', event: 'Federal action against peonage and forced labor intensifies during World War II.' },
      { date: 'Present', event: 'Prison labor and punishment-clause debates continue.' }
    ],
    fullStory: [
      `Emancipation ended legal ownership of people, but it did not end the hunger for Black labor. Southern planters, industrialists, and state governments wanted workers who could be controlled. The 13th Amendment included an exception for punishment after conviction. That exception became one of the openings through which forced labor returned under another name.`,
      `Black Codes and later vagrancy laws made freedom precarious. A Black person could be arrested for not having proof of employment, for changing jobs, for speaking back, for being in the wrong place, or for offenses enforced differently by race. Courts imposed fines and fees people could not pay. Once imprisoned, they could be leased to private employers. The law converted poverty and racist policing into labor supply.`,
      `Convict leasing was profitable because private companies had little incentive to keep workers alive. Enslavers had treated human beings as property with resale value. Lessees often treated prisoners as disposable. Mines, turpentine camps, railroads, plantations, and factories could push people under deadly conditions, then receive more prisoners. Death rates in some camps were horrific.`,
      `The system made money for states. Leasing fees helped fund budgets without taxing white citizens at the same level. That financial incentive made cruelty durable. Officials could claim they were managing prisons while actually selling labor. Companies could claim they were hiring through legal contracts while benefiting from violence backed by the state.`,
      `Black men were the main targets, but women and children were not untouched by the carceral labor system. Families lost wages, parents, spouses, and children to arrests and forced labor. Communities lived under the threat that any encounter with white authority could become a sentence to a mine or camp.`,
      `The legal process itself became part of the extraction. Sheriffs, judges, local officials, and employers could benefit from arrests, fees, and labor contracts. People convicted of minor or manufactured charges might owe fines they could never pay, then be sent into labor arrangements that looked official on paper. The courtroom gave the system a language of legality while racism shaped who was arrested and who profited.`,
      `Convict leasing also fed industrial development. Coal mines, railroads, and factories in the New South used leased labor to build wealth. The phrase New South can sound modernizing, but much of that modernization rested on coerced Black labor. Industrial progress and racial terror were not opposites. They worked together.`,
      `The system also shaped political power. If Black people could be arrested, leased, and disenfranchised, then white officials could control labor and elections at the same time. Punishment removed people from communities, intimidated those who remained, and made resistance costly. Convict leasing was not only an economic system. It was a governing strategy.`,
      `Reformers, journalists, Black communities, and some officials exposed abuses. States eventually ended formal leasing, but the end of leasing did not end forced prison labor. Chain gangs, prison farms, debt peonage, and other systems continued to discipline Black labor. The shape changed when public scandal made one form too visible.`,
      `The system's legacy reaches into present debates over prison labor, felony disenfranchisement, policing, court debt, and the punishment clause. It does not mean every modern prison practice is identical to convict leasing. It means the history of punishment and labor in the United States cannot be separated from Reconstruction backlash and racial capitalism.`,
      `Convict leasing matters because it shows how freedom can be undermined without being openly repealed. A society can write emancipation into law and then build courts, policing, fees, contracts, and prisons that pull Black people back into forced labor. The lesson is not only historical. It is structural: watch the systems that turn punishment into profit.`
    ],
    costImpact: [
      `The cost was death, injury, family separation, stolen wages, criminal records, terror, and generational harm. Leased prisoners worked in mines, camps, and fields where private employers could brutalize them with little accountability. Families often had no meaningful way to challenge the convictions or recover the lost labor of loved ones.`,
      `The impact was economic and political. States and companies built wealth through coerced labor while Black communities were stripped of workers, safety, and legal protection. Convict leasing also helped establish a longer connection between incarceration, racial control, and profit.`
    ],
    whyItMattersToday: [
      `Convict leasing matters today because it breaks the myth that emancipation created a clean line between slavery and freedom. The line existed in law, but systems were built to cross it. Punishment became one of the places where forced labor could hide in plain sight.`,
      `The history also helps readers understand why prison labor, court fines, parole fees, felony disenfranchisement, and policing cannot be discussed as race-neutral abstractions. They developed inside a long struggle over Black labor and civic power.`,
      `The point is not to collapse every present practice into the past. It is to recognize the design pattern: criminalize, extract, profit, and call it order.`
    ],
    connected: [
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'Explains the punishment exception that made post-emancipation forced labor possible.' },
      { href: '@root/generated/pages/black-codes.html', title: 'Black Codes', description: 'Shows the legal restrictions that helped funnel Black people into coerced labor.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Places convict leasing inside the rollback of Black freedom after the Civil War.' },
      { href: '@root/encyclopedia/slave-patrols.html', title: 'Slave Patrols & Policing', description: 'Connects punishment, surveillance, and racial control across eras.' }
    ],
    externalLinks: [
      { source: 'PBS', title: 'Convict Leasing', url: 'https://www.pbs.org/tpt/slavery-by-another-name/themes/convict-leasing/' },
      { source: 'Equal Justice Initiative', title: 'Convict Leasing', url: 'https://eji.org/news/history-racial-injustice-convict-leasing/' },
      { source: 'National Archives', title: '13th Amendment', url: 'https://www.archives.gov/milestone-documents/13th-amendment' },
      { source: 'Digital Library of Georgia', title: 'Convict Leasing System', url: 'https://www.georgiaencyclopedia.org/articles/history-archaeology/convict-lease-system/' },
      { source: 'Equal Justice Initiative', title: 'Racial Injustice Calendar: Convict Leasing', url: 'https://calendar.eji.org/racial-injustice/jan/01' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.pbs.org/tpt/slavery-by-another-name/themes/convict-leasing/', 'https://eji.org/news/history-racial-injustice-convict-leasing/', 'https://www.archives.gov/milestone-documents/13th-amendment'],
      supportingSources: ['https://www.georgiaencyclopedia.org/articles/history-archaeology/convict-lease-system/', 'https://calendar.eji.org/racial-injustice/jan/01'],
      verifiedQuoteSource: 'No quotation included. Punishment-clause language summarized through National Archives constitutional text.',
      sensitiveClaimsReviewed: '13th Amendment punishment exception, Black Codes, death-rate framing, state profit, company use, and modern-prison-labor connection reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a systems history of law, profit, policing, forced labor, and post-leasing continuities.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, forced-labor claim review.'
    }
  },
  {
    encyclopediaSlug: 'freedmens-bureau',
    fullDate: '2026-06-24',
    dailyDateLabel: 'June 24',
    subject: 'The Freedmen\'s Bureau',
    category: 'Reconstruction',
    type: 'Government Agency',
    dates: '1865 - 1872',
    tags: ['reconstruction', 'education', 'labor', 'government', 'archives'],
    summary: `The Freedmen's Bureau was asked to help build freedom in the ruins of slavery and war. Its formal name was the Bureau of Refugees, Freedmen, and Abandoned Lands, and its job was almost impossibly broad: food, schools, labor contracts, medical aid, legal complaints, marriages, family searches, and abandoned land. It served formerly enslaved people and white refugees, but its deepest historical importance is the record it left of Black Reconstruction life. The Bureau was underfunded, attacked by white Southerners, and shut down before freedom had the protection it needed. This page matters because emancipation was not a door people simply walked through. Freedom needed offices, teachers, records, wages, land, courts, and power, and the Bureau showed both how necessary and how fragile that infrastructure was.`,
    timeline: [
      { date: 'Mar 3, 1865', event: 'Congress creates the Freedmen\'s Bureau.' },
      { date: '1865', event: 'The Bureau begins relief, labor, education, and records work across the former Confederacy.' },
      { date: '1865-1866', event: 'Bureau agents help formalize marriages and labor contracts for formerly enslaved people.' },
      { date: '1866', event: 'Congress extends the Bureau over President Andrew Johnson\'s veto.' },
      { date: '1866', event: 'White supremacist violence in Memphis and New Orleans shows the danger freedpeople faced.' },
      { date: '1867-1868', event: 'Bureau schools expand with help from Black communities and northern aid societies.' },
      { date: '1868', event: 'Most Bureau functions are curtailed, though education work continues temporarily.' },
      { date: '1872', event: 'The Freedmen\'s Bureau closes.' },
      { date: '2000s-present', event: 'Digitization projects make Bureau records more accessible for family and community history.' }
    ],
    fullStory: [
      `The Freedmen's Bureau was created because emancipation produced practical questions that speeches could not answer. Four million people had been legally freed after generations of forced labor, family separation, blocked education, and violence. They needed food, shelter, wages, land, schools, legal recognition, medical care, and protection. Freedom had to become daily life.`,
      `The Bureau's full name revealed its wide charge: refugees, freedmen, and abandoned lands. The Civil War had displaced both Black and white Southerners. Plantations had been abandoned or seized. The federal government had to decide whether former enslavers would regain land, whether freedpeople would receive any of it, and who would mediate labor after slavery. Those decisions shaped Reconstruction's future.`,
      `Many freedpeople wanted land because land meant autonomy. General Sherman's Special Field Orders No. 15 had raised hopes for land redistribution along parts of the South Carolina, Georgia, and Florida coast. But President Andrew Johnson restored much land to former Confederates. The Bureau often ended up supervising labor contracts instead of distributing land. That shift narrowed freedom. Wages mattered, but landlessness left many families dependent on white landowners.`,
      `Education became one of the Bureau's most lasting areas of work. Black communities wanted schools with extraordinary urgency. They raised money, donated labor, found teachers, protected buildings, and pushed children and adults into classrooms. Northern aid societies and Bureau officials helped, but Black demand drove the project. The growth of schools after slavery was one of Reconstruction's great achievements.`,
      `The Bureau also recorded marriages. Under slavery, families formed marriages and kinship networks without legal protection from sale. After emancipation, many couples sought official recognition. Bureau marriage records are not just paperwork. They are evidence of people claiming family rights that slavery had denied.`,
      `Family searches were another part of the freedom project. People placed notices, wrote letters, asked Bureau agents for help, and traveled in search of children, spouses, parents, and siblings sold away during slavery. The Bureau could not reunite every family, but its records show the scale of the searching. Freedom included the right to ask where your people were and to have that question treated as official business.`,
      `Labor was a battlefield. Bureau agents negotiated contracts, heard complaints, and sometimes protected freedpeople from wage theft. But agents could also pressure Black workers into contracts that favored planters, and the Bureau never had enough staff or power to enforce justice consistently. Former enslavers wanted labor discipline restored. Freedpeople wanted wages, mobility, and respect. The Bureau stood in the middle, often uneasily.`,
      `White resistance was fierce. Bureau schools were burned. Teachers were threatened. Agents were attacked. Freedpeople who asserted rights faced violence from former Confederates, local officials, employers, and terror groups. The Bureau's weakness was not only administrative. It was political. The federal government was unwilling to sustain protection long enough to defeat white supremacist counterrevolution.`,
      `The Bureau closed in 1872, far too early for the scale of the work. Its end left Black communities more exposed as Reconstruction weakened. Still, its records remain one of the richest archives of Black life after slavery: labor contracts, letters, school reports, hospital records, marriage registers, complaints, rations, and family searches. The documents show people not as abstractions, but as parents, workers, students, teachers, veterans, and citizens insisting that freedom become real.`,
      `The Freedmen's Bureau matters because it shows that rights need infrastructure. Emancipation without land, schools, courts, and protection left people vulnerable. The Bureau was flawed, limited, and sometimes paternalistic, but it also reveals the size of the freedom project and the determination of Black communities to build lives the law had never protected before.`
    ],
    costImpact: [
      `The Bureau's limits cost freedpeople land, safety, wages, and time. When federal commitment weakened, Black families were left to face white employers, violent mobs, and hostile courts with too little protection. Teachers, students, agents, and community leaders risked attack simply for building schools or asserting rights.`,
      `Its impact remains enormous through schools, legal records, family history, and the archive of Reconstruction. The Bureau's records help descendants find marriages, labor, kin, military service, and community life that slavery tried to erase.`
    ],
    whyItMattersToday: [
      `The Freedmen's Bureau matters today because policy debates often pretend that legal freedom is enough. The Bureau shows that a society built on theft requires repair: schools, records, wages, health care, land policy, courts, and protection from violence. Without those structures, freedom can be formally granted and practically undermined.`,
      `Its records also matter because archives are a form of power. Names, marriages, complaints, contracts, and school reports help reconstruct lives that enslavers tried to keep undocumented or controlled. To read the Bureau records is to see Black people building family, work, education, and citizenship under pressure.`,
      `The lesson is not that the Bureau solved Reconstruction. It did not. The lesson is that freedom work requires institutions strong enough to last longer than the first national mood of sympathy.`
    ],
    connected: [
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Places the Bureau inside the larger fight to define freedom after slavery.' },
      { href: '@root/generated/pages/14th-amendment.html', title: 'The 14th Amendment', description: 'Connects Bureau work to constitutional citizenship and equal protection.' },
      { href: '@root/encyclopedia/hbcus.html', title: 'HBCUs', description: 'Shows how Black education grew through Reconstruction-era institution-building.' },
      { href: '@root/encyclopedia/mary-mcleod-bethune.html', title: 'Mary McLeod Bethune', description: 'Connects Reconstruction education dreams to later Black institution-building.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Freedmen\'s Bureau Records', url: 'https://www.archives.gov/research/african-americans/freedmens-bureau' },
      { source: 'Library of Congress', title: 'Freedmen\'s Bureau Records', url: 'https://www.loc.gov/collections/freedmens-bureau-records/about-this-collection/' },
      { source: 'National Museum of African American History and Culture', title: 'Freedmen\'s Bureau Records', url: 'https://nmaahc.si.edu/explore/initiatives/freedmens-bureau-records' },
      { source: 'National Archives', title: 'African American Records: Freedmen\'s Bureau', url: 'https://www.archives.gov/research/african-americans/freedmens-bureau' },
      { source: 'Facing History & Ourselves', title: 'The Freedmen\'s Bureau', url: 'https://www.facinghistory.org/resource-library/freedmens-bureau' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/research/african-americans/freedmens-bureau', 'https://www.loc.gov/collections/freedmens-bureau-records/about-this-collection/', 'https://nmaahc.si.edu/explore/initiatives/freedmens-bureau-records'],
      supportingSources: ['https://www.facinghistory.org/resource-library/freedmens-bureau'],
      verifiedQuoteSource: 'No quotation included. Bureau scope and records claims summarized from archival sources.',
      sensitiveClaimsReviewed: 'Land redistribution limits, labor contracts, schools, marriage records, white violence, and Bureau closure reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a fuller account of freedom infrastructure, land failure, education, records, and federal retreat.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 4 external link sources, Bureau archive review.'
    }
  },
  {
    encyclopediaSlug: 'great-migration',
    outputPath: 'encyclopedia/great-migration.html',
    fullDate: '2026-05-27',
    dailyDateLabel: 'May 27',
    subject: 'The Great Migration',
    category: 'Community',
    type: 'Movement',
    dates: '1910 - 1970',
    tags: ['migration', 'labor', 'housing', 'music', 'politics'],
    summary: `The Great Migration was six million decisions, and each decision had a reason. Black Southerners left because Jim Crow was violent, wages were low, schools were underfunded, voting was blocked, and white power tried to make the future small. They moved toward Chicago, Detroit, New York, Philadelphia, Los Angeles, Oakland, Cleveland, and dozens of other places where jobs, relatives, newspapers, rail lines, and rumor pointed toward possibility. The move did not end racism. It changed its geography. This page matters because the Great Migration remade American cities, music, labor, housing, politics, family life, and Black imagination. It was not escape from history. It was one of the ways Black people made history move.`,
    timeline: [
      { date: '1910', event: 'About 90 percent of Black Americans still live in the South.' },
      { date: '1916-1919', event: 'World War I labor demand and Southern violence accelerate the first major migration wave.' },
      { date: '1917', event: 'The East St. Louis massacre reveals the violence Black migrants could face outside the South.' },
      { date: '1919', event: 'Red Summer violence strikes Black communities across the country.' },
      { date: '1920s', event: 'Chicago, Detroit, New York, Philadelphia, and other cities grow as Black migration centers.' },
      { date: '1930s', event: 'The Great Depression slows but does not end migration.' },
      { date: '1940s', event: 'World War II defense jobs fuel a second migration wave to northern and western cities.' },
      { date: '1950s-1960s', event: 'Black migration reshapes western cities including Los Angeles and Oakland.' },
      { date: '1970', event: 'The Great Migration\'s major period ends after roughly six million Black Southerners have moved.' },
      { date: 'Late 20th century', event: 'A reverse migration grows as some Black families move back to the South.' }
    ],
    fullStory: [
      `The Great Migration was not one event, and it was not simply people chasing jobs. It was a mass reordering of Black life under pressure. In the South, Black families faced lynching, disfranchisement, exploitative farm labor, debt peonage, segregated schools, and daily humiliation. Leaving became one strategy for refusing the future Jim Crow assigned them.`,
      `World War I opened industrial jobs as immigration slowed and factories needed workers. Rail lines made movement possible. Black newspapers, especially the Chicago Defender, published stories, job information, letters, and arguments for leaving. Copies traveled by train and hand, sometimes into places where white officials tried to suppress them. Information became a migration tool.`,
      `The journey was rarely simple. Families saved money, sent one person ahead, stayed with relatives, or moved in stages. Some left at night to avoid white employers who tried to block labor from leaving. Migrants carried quilts, photographs, church letters, recipes, skills, grief, and ambitions. The Great Migration was economic, but it was also emotional and cultural.`,
      `Northern and western cities offered wages and danger. Black migrants found factory work, domestic work, port jobs, meatpacking plants, auto plants, shipyards, and service jobs. They also faced segregated housing, overcrowding, white neighborhood violence, police hostility, school inequality, and job discrimination. Racism had changed address, not disappeared.`,
      `Housing shaped the migration's consequences. Restrictive covenants, real estate steering, redlining, and mob violence confined many Black families to overcrowded neighborhoods while landlords charged high rents. Those constraints helped create dense Black urban communities full of churches, clubs, businesses, newspapers, and political organizations, but they also concentrated inequality by design.`,
      `Work changed too. Migrants entered meatpacking plants, steel mills, auto factories, shipyards, laundries, hospitals, kitchens, railroads, and domestic service. Some joined unions that did not always welcome them. Others fought for promotion inside workplaces that used Black labor while preserving white seniority and management power. Migration expanded opportunity, but it did not remove the racial rules around work.`,
      `The cultural effects were enormous. Jazz, blues, gospel, literature, visual art, and later R&B and hip-hop were all shaped by movement from South to city. Harlem, Chicago's South Side, Detroit's Black Bottom and Paradise Valley, Los Angeles's Central Avenue, and many other neighborhoods became creative engines. Migration carried Southern memory into new forms.`,
      `Migration also changed the South. When people left, Southern employers, politicians, and newspapers noticed. Some tried to stop departures because Black labor had been treated as a resource white power could command. The act of leaving became a labor action, a family strategy, and a political refusal. A train ticket could say no in a way local law could not easily silence.`,
      `The political effects were just as important. Outside the South, Black voters could sometimes exercise more electoral power, even while facing discrimination. Migrants changed city politics, labor unions, civil rights organizations, and national elections. Politicians had to court Black voters in ways the one-party Jim Crow South had blocked.`,
      `The migration also created family complexity. Leaving could mean safety, but also separation from grandparents, land, burial grounds, and familiar community. Children grew up with Southern parents and urban streets. Letters, visits, food, church conventions, and funerals kept regional ties alive. The South was not simply abandoned. It remained home, memory, and warning.`,
      `Artists such as Jacob Lawrence later turned the migration into visual history, reminding viewers that each panel was a human decision inside a collective movement. Isabel Wilkerson called the migrants' choices an expression of agency, not just reaction. That distinction matters. Black Southerners were not only pushed. They planned, imagined, and moved.`,
      `The Great Migration matters because it changed America from below. It remade cities, labor markets, political coalitions, music, literature, housing policy, and family maps. It shows that Black people did not wait passively for freedom. They boarded trains, drove cars, sent letters, opened businesses, made neighborhoods, and forced the country to follow them.`
    ],
    costImpact: [
      `The cost included family separation, dangerous travel, exploitation in new labor markets, racist housing restrictions, urban violence, and the pain of leaving home under pressure. Migrants often exchanged one racial system for another, less formal in some places but still powerful.`,
      `The impact was national. The Great Migration transformed Black political power, city life, music, literature, labor, religion, and electoral politics. It helped create the conditions for modern civil rights organizing and reshaped what America sounded like, looked like, and argued about.`
    ],
    whyItMattersToday: [
      `The Great Migration matters today because many present-day maps of inequality were shaped by where Black families were allowed to live after they moved. Redlining, school boundaries, highway construction, and policing turned migration destinations into new battlegrounds over space and power.`,
      `It also matters because migration is an act of imagination. People left not because they knew the North or West would be fair, but because staying had been made unbearable and movement created possibility. That kind of agency is central to Black history.`,
      `The fuller story helps readers see cities as archives of movement. A neighborhood, a music scene, a church, or a family recipe can carry the history of a train ticket north.`
    ],
    connected: [
      { href: '@root/encyclopedia/black-press.html', title: 'The Black Press', description: 'Shows how newspapers helped carry migration information and possibility.' },
      { href: '@root/encyclopedia/the-blues.html', title: 'The Blues', description: 'Connects Southern sound to northern and western urban music.' },
      { href: '@root/encyclopedia/gwendolyn-brooks.html', title: 'Gwendolyn Brooks', description: 'Places Chicago literary life inside migration-shaped Black neighborhoods.' },
      { href: '@root/generated/pages/jacob-lawrence.html', title: 'Jacob Lawrence', description: 'Shows the Great Migration translated into visual narrative.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'The Great Migration', url: 'https://www.archives.gov/research/african-americans/migrations/great-migration' },
      { source: 'National Museum of African American History and Culture', title: 'The Great Migration', url: 'https://nmaahc.si.edu/explore/stories/great-migration' },
      { source: 'In Motion: The African-American Migration Experience', title: 'The Great Migration', url: 'https://www.inmotionaame.org/migrations/topic.cfm?migration=8&topic=1' },
      { source: 'The Phillips Collection', title: 'Jacob Lawrence: The Migration Series', url: 'https://www.phillipscollection.org/collection/migration-series' },
      { source: 'BlackPast', title: 'The Great Migration', url: 'https://www.blackpast.org/african-american-history/great-migration-1915-1960/' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/research/african-americans/migrations/great-migration', 'https://nmaahc.si.edu/explore/stories/great-migration', 'https://www.inmotionaame.org/migrations/topic.cfm?migration=8&topic=1'],
      supportingSources: ['https://www.phillipscollection.org/collection/migration-series', 'https://www.blackpast.org/african-american-history/great-migration-1915-1960/'],
      verifiedQuoteSource: 'No quotation included. Six-million framing and periodization cross-checked against institutional sources.',
      sensitiveClaimsReviewed: 'Migration counts, push-pull causes, housing discrimination, political effects, cultural effects, and reverse migration framing reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond short migration summary into labor, housing, politics, culture, family, and agency.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, migration claim review.'
    }
  },
  {
    encyclopediaSlug: 'greensboro-four',
    fullDate: '2026-08-08',
    dailyDateLabel: 'August 8',
    subject: 'The Greensboro Four',
    category: 'Youth',
    type: 'Event',
    dates: '1960',
    tags: ['youth', 'civil-rights', 'education', 'segregation', 'protest'],
    summary: `The Greensboro Four made sitting still into a public confrontation. On February 1, 1960, Ezell Blair Jr. (later Jibreel Khazan), David Richmond, Franklin McCain, and Joseph McNeil, students at North Carolina A&T, sat at a segregated Woolworth's lunch counter and asked to be served. They were refused. They stayed. Then they came back, and more students came with them. This page matters because the sit-in was not spontaneous magic. It grew from student courage, local organizing, careful discipline, Black college life, and a long frustration with everyday segregation. The four seats in Greensboro helped energize a student-led phase of the civil rights movement because they turned ordinary consumption into a test of dignity, law, and power.`,
    timeline: [
      { date: '1954', event: 'Brown v. Board intensifies challenges to segregation, though public accommodations remain segregated in many places.' },
      { date: '1959', event: 'The four students discuss nonviolent protest and civil rights action at North Carolina A&T.' },
      { date: 'Feb 1, 1960', event: 'The Greensboro Four sit at the Woolworth\'s lunch counter and are refused service.' },
      { date: 'Feb 2, 1960', event: 'More students join the sit-in.' },
      { date: 'Feb 5, 1960', event: 'Hundreds of students are involved, and the protest gains national attention.' },
      { date: 'Spring 1960', event: 'Sit-ins spread to dozens of Southern cities.' },
      { date: 'Apr 1960', event: 'Student activists gather at Shaw University, helping create SNCC.' },
      { date: 'July 25, 1960', event: 'The Greensboro Woolworth\'s lunch counter begins serving Black customers.' },
      { date: '1993', event: 'A section of the Woolworth\'s lunch counter enters the Smithsonian collection.' },
      { date: '2010', event: 'The International Civil Rights Center & Museum opens in the former Woolworth\'s building.' }
    ],
    fullStory: [
      `The Greensboro sit-in happened at a lunch counter, but it was about more than lunch. Segregated public accommodations told Black people where they could sit, eat, spend money, use restrooms, and exist without humiliation. A store could take Black customers' money at one counter and deny them a sandwich at another. That contradiction was the point the students forced into public view.`,
      `The four students were freshmen at North Carolina A&T State University, a historically Black college that gave them a community of ideas, debate, and expectation. They were not celebrities. They were young men talking late into the night about what they could do. Their youth matters, but youth did not mean carelessness. They studied the risk and chose a form of protest that demanded discipline.`,
      `On February 1, 1960, they entered the downtown Greensboro Woolworth's, bought items in the store, then sat at the whites-only lunch counter. When staff refused service, the students remained until closing. They did not win service that day. They won visibility. The next day, more students came. Soon the protest grew larger than four people.`,
      `The tactic worked because it exposed the absurdity and cruelty of segregation in a setting everyone understood. Lunch counters were ordinary. That ordinariness made the denial harder to defend. The students were neatly dressed, calm, and prepared for abuse. Their discipline made white hostility visible as hostility, not order.`,
      `Women students, local organizers, ministers, teachers, and community members helped sustain the movement that followed. Public memory often centers the four names, but the sit-ins spread because networks formed around them. Students monitored behavior, contacted press, raised money, and planned next steps. Protest became infrastructure.`,
      `The discipline mattered because segregationists tried to provoke scenes that could be blamed on the students. Sit-in participants practiced how to respond to insults, food thrown on them, and physical intimidation. Nonviolence was not passivity. It was a tactic that required control under pressure and exposed who was defending order and who was defending humiliation.`,
      `The sit-in movement spread quickly across the South. Students in Nashville, Durham, Raleigh, Atlanta, and many other cities adapted the tactic. Some were trained in nonviolence. Some were arrested. Some were beaten. The movement helped create the Student Nonviolent Coordinating Committee, which would become one of the most important organizations in the Black freedom struggle.`,
      `The sit-ins also created economic pressure. Stores that depended on Black shoppers had to face boycotts, pickets, and national embarrassment. Segregation was not only a social custom. It was a business model that accepted Black money while denying Black dignity. The students made that contradiction expensive.`,
      `The Greensboro Woolworth's desegregated its lunch counter in July 1960, months after the first sit-in. That victory mattered, but the broader effect mattered more. The sit-ins showed that young people could force national attention without waiting for established leaders to approve every step. They also showed that direct action could turn local custom into public crisis.`,
      `The preserved lunch counter now sits in museum memory, but it should not become a harmless artifact. Its power comes from what it witnessed: a group of students refusing to let an ordinary piece of furniture enforce racial hierarchy. The counter was not neutral. It was a line. The students crossed it by sitting down.`,
      `The Greensboro Four matter because they changed the movement's tempo. They did not invent sit-ins, and they were not alone. But their action caught fire at a moment when students were ready to move. Four seats became a national question: how long should Black people keep paying for citizenship with patience?`
    ],
    costImpact: [
      `The cost included threat, arrest risk, public abuse, academic pressure, and the possibility of violence. Students who joined sit-ins faced food thrown at them, insults, beatings, jail, and retaliation. Families worried. Colleges could face political pressure.`,
      `The impact was movement-wide. The Greensboro action helped spread sit-ins, pushed public accommodations desegregation, strengthened student leadership, and contributed to the creation of SNCC. It proved that disciplined local action could move faster than cautious institutions.`
    ],
    whyItMattersToday: [
      `The Greensboro Four matter today because protest is often judged by whether it is convenient. Sit-ins were designed to interrupt business as usual because business as usual was the problem. The students understood that politeness without pressure could leave segregation untouched.`,
      `The story also reminds readers that young people are not the future only. They are actors in the present. College students brought strategy, risk, and moral clarity to a movement that needed all three.`,
      `The fuller lesson is that ordinary spaces carry political meaning. A lunch counter, bus seat, classroom, voting office, or street corner can become a place where a system is forced to reveal itself.`
    ],
    connected: [
      { href: '@root/encyclopedia/diane-nash.html', title: 'Diane Nash', description: 'Connects sit-in discipline to student leadership in Nashville.' },
      { href: '@root/generated/pages/freedom-riders.html', title: 'Freedom Riders', description: 'Shows student direct action moving from lunch counters to interstate travel.' },
      { href: '@root/encyclopedia/modern-civil-rights.html', title: 'Modern Civil Rights Leaders', description: 'Links student-led direct action to later organizing traditions.' },
      { href: '@root/generated/pages/little-rock-nine.html', title: 'The Little Rock Nine', description: 'Another youth-centered confrontation with segregation and state power.' }
    ],
    externalLinks: [
      { source: 'International Civil Rights Center & Museum', title: 'Greensboro Sit-In History', url: 'https://www.sitinmovement.org/history/greensboro-chronology.asp' },
      { source: 'National Museum of American History', title: 'Greensboro Lunch Counter', url: 'https://americanhistory.si.edu/collections/object-groups/greensboro-lunch-counter' },
      { source: 'BlackPast', title: 'Greensboro Sit-Ins', url: 'https://www.blackpast.org/african-american-history/greensboro-sit-ins-1960/' },
      { source: 'SNCC Digital Gateway', title: 'Greensboro Sit-Ins', url: 'https://snccdigital.org/events/greensboro-sit-ins/' },
      { source: 'NCpedia', title: 'Greensboro Sit-Ins', url: 'https://www.ncpedia.org/greensboro-sit-ins' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.sitinmovement.org/history/greensboro-chronology.asp', 'https://americanhistory.si.edu/collections/object-groups/greensboro-lunch-counter', 'https://www.blackpast.org/african-american-history/greensboro-sit-ins-1960/'],
      supportingSources: ['https://snccdigital.org/events/greensboro-sit-ins/', 'https://www.ncpedia.org/greensboro-sit-ins'],
      verifiedQuoteSource: 'No quotation included. Names, dates, and desegregation timeline cross-checked against museum and university sources.',
      sensitiveClaimsReviewed: 'Names, date, Woolworth timeline, SNCC relationship, women/community support, and movement spread reviewed.',
      materialCorrections: 'Expanded scheduled fallback into student organizing, direct-action discipline, HBCU context, movement spread, and public memory.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, sit-in claim review.'
    }
  },
  {
    encyclopediaSlug: 'harlem-hellfighters',
    fullDate: '2026-07-31',
    dailyDateLabel: 'July 31',
    subject: 'The Harlem Hellfighters',
    category: 'Military',
    type: 'Military Unit',
    dates: '1917 - 1919',
    tags: ['military', 'world-war-i', 'music', 'jim-crow', 'citizenship'],
    summary: `The Harlem Hellfighters fought for democracy in Europe while Jim Crow followed them from home. Officially the 369th Infantry Regiment, the unit served under French command during World War I because many white American commanders resisted sending Black troops into combat alongside white U.S. units. They spent extraordinary time near the front, earned French honors, suffered casualties, and returned to parades in New York while racism remained firmly in place. Their regimental band, led by James Reese Europe, helped carry jazz and Black military music across the Atlantic. This page matters because the Hellfighters expose a familiar contradiction: Black soldiers were asked to represent American freedom abroad while being denied the full protection of that freedom at home.`,
    timeline: [
      { date: '1913', event: 'The 15th New York National Guard Regiment is authorized as a Black unit.' },
      { date: '1916', event: 'William Hayward becomes commander of the regiment.' },
      { date: '1917', event: 'The United States enters World War I.' },
      { date: 'Dec 1917', event: 'The regiment sails for France.' },
      { date: '1918', event: 'The unit is assigned to fight with the French Army and renamed the 369th Infantry.' },
      { date: 'May 1918', event: 'Henry Johnson and Needham Roberts fight off a German raid and become famous for bravery.' },
      { date: 'Sept 1918', event: 'The 369th fights in the Meuse-Argonne campaign.' },
      { date: '1918', event: 'The regiment receives the French Croix de Guerre.' },
      { date: 'Feb 1919', event: 'The Hellfighters return to a major parade in New York City.' },
      { date: '1919', event: 'Red Summer violence shows that Black military service did not end racial terror at home.' }
    ],
    fullStory: [
      `The Harlem Hellfighters were born from Black New Yorkers' demand to serve in a military that did not want them as equals. The 15th New York National Guard Regiment drew men from Harlem and beyond, including workers, musicians, students, immigrants, and veterans. Their service began before the United States had any intention of treating Black soldiers as full citizens.`,
      `World War I created a contradiction the country could not hide. President Woodrow Wilson spoke of democracy abroad while segregation, lynching, disfranchisement, and racist violence shaped life at home. Black leaders debated military service. Some argued that serving would strengthen claims to citizenship. Others warned that loyalty had been demanded before without justice in return. The men of the 369th entered that argument in uniform.`,
      `In the United States, the regiment faced racist treatment and limited roles. In France, the unit was assigned to the French Army, whose commanders were more willing to place them in combat. The arrangement reflected American racism, but it also gave the regiment a combat record that became legendary. They spent long periods near the front and fought in brutal conditions.`,
      `Henry Johnson and Needham Roberts became famous after a German raid in 1918. Wounded and outnumbered, they fought back and prevented capture. Johnson's heroism was celebrated in the Black press, but full U.S. recognition came painfully late. That delay is part of the story. Black bravery was often acknowledged only after generations of pressure.`,
      `The regiment's band, led by James Reese Europe, mattered too. Music traveled with the soldiers. The band performed ragtime and early jazz-inflected music for European audiences, military events, and civilians. The Hellfighters did not simply carry rifles. They carried Black sound into a war zone and helped reshape how Europe heard American music.`,
      `The name Hellfighters came from the regiment's reputation in combat, but names can simplify. The men were not only fierce fighters. They were clerks, porters, musicians, laborers, students, sons of migrants, and members of a Harlem community that was becoming a center of Black political and cultural life. Their regiment carried neighborhood pride overseas, then brought wartime experience back into that same changing city.`,
      `The return home was triumphant and bitter. New York welcomed the regiment with a parade. Black communities celebrated the men as proof of courage and discipline. Yet 1919 also brought Red Summer, a wave of anti-Black violence across the United States. Uniforms did not protect Black veterans from white mobs, police hostility, or job discrimination. In some places, military service made Black men more threatening to white supremacists because it signaled confidence and training.`,
      `The French honors mattered because they came from a country allied with the United States but less invested in the same military segregation structure. That did not make France free of racism or empire, but it gave the soldiers a different public reception. The contrast sharpened the insult of returning to a nation that praised them in uniform and restricted them in civilian life.`,
      `The Hellfighters' memory has often focused on heroism, and heroism is real. But the fuller history includes labor, music, racism inside the Army, French command, delayed medals, and the gap between ceremonial praise and civil rights. Their story belongs with the Buffalo Soldiers, the 54th Massachusetts, and later Black service members who exposed the hypocrisy of fighting for freedom while being denied it.`,
      `The Harlem Hellfighters matter because they changed the record of World War I and Black military history. They made it impossible to claim Black soldiers lacked courage. They also made it impossible, if we tell the story honestly, to pretend courage was enough to secure justice.`
    ],
    costImpact: [
      `The cost included combat deaths, wounds, racism from white U.S. military structures, delayed recognition, and a return to racial violence at home. Families and neighborhoods celebrated the regiment while also absorbing grief and the frustration of unequal citizenship.`,
      `The impact was military, cultural, and political. The Hellfighters became symbols of Black valor, helped spread Black music abroad, and strengthened arguments that Black service demanded Black rights. Their delayed recognition also shows how long public memory can take to catch up with evidence.`
    ],
    whyItMattersToday: [
      `The Harlem Hellfighters matter today because military honors often arrive more easily than structural justice. A parade can celebrate service without changing housing, voting, policing, or employment. The regiment's story asks readers to notice that gap.`,
      `Their music also matters. Black cultural history traveled through war, migration, and performance, not only through concert halls. James Reese Europe's band reminds us that sound can be part of diplomacy, morale, and memory.`,
      `The fuller lesson is that Black patriotism has often been conditional, strategic, and demanding. The Hellfighters served, and their service asked the country what democracy was supposed to mean.`
    ],
    connected: [
      { href: '@root/generated/pages/buffalo-soldiers.html', title: 'The Buffalo Soldiers', description: 'Connects the Hellfighters to earlier Black regular military service.' },
      { href: '@root/generated/pages/54th-massachusetts-infantry.html', title: 'The 54th Massachusetts Infantry', description: 'Shows the Civil War roots of Black military service as citizenship claim.' },
      { href: '@root/encyclopedia/the-blues.html', title: 'The Blues', description: 'Places military music inside larger Black sound traditions.' },
      { href: '@root/encyclopedia/great-migration.html', title: 'The Great Migration', description: 'Connects Harlem, Black urban life, labor, and wartime movement.' }
    ],
    externalLinks: [
      { source: 'National Guard', title: 'Harlem Hellfighters', url: 'https://www.nationalguard.mil/Resources/Image-Gallery/Historical-Paintings/Heritage-Series/Harlem-Hellfighters/' },
      { source: 'U.S. Army', title: 'Harlem Hellfighters', url: 'https://www.army.mil/article/255716/harlem_hellfighters' },
      { source: 'National Museum of African American History and Culture', title: 'Harlem Hellfighters', url: 'https://nmaahc.si.edu/explore/stories/harlem-hellfighters' },
      { source: 'Smithsonian Magazine', title: 'The Harlem Hellfighters', url: 'https://www.smithsonianmag.com/history/remembering-harlem-hellfighters-180967355/' },
      { source: 'National Museum of the United States Army', title: 'Harlem Hellfighters', url: 'https://www.thenmusa.org/biographies/harlem-hellfighters/' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nationalguard.mil/Resources/Image-Gallery/Historical-Paintings/Heritage-Series/Harlem-Hellfighters/', 'https://www.army.mil/article/255716/harlem_hellfighters', 'https://nmaahc.si.edu/explore/stories/harlem-hellfighters'],
      supportingSources: ['https://www.smithsonianmag.com/history/remembering-harlem-hellfighters-180967355/', 'https://www.thenmusa.org/biographies/harlem-hellfighters/'],
      verifiedQuoteSource: 'No quotation included. Honors, dates, and James Reese Europe claims cross-checked against military and museum sources.',
      sensitiveClaimsReviewed: 'French command, combat duration, Henry Johnson recognition, Red Summer context, and jazz spread claims reviewed.',
      materialCorrections: 'Expanded scheduled fallback into Jim Crow military structure, combat, music, delayed recognition, and return-home contradiction.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, WWI service review.'
    }
  },
  {
    encyclopediaSlug: 'harlem-renaissance',
    outputPath: 'encyclopedia/harlem-renaissance.html',
    subject: 'The Harlem Renaissance',
    category: 'Culture',
    type: 'Movement',
    dates: '1918 - mid-1930s',
    tags: ['literature', 'art', 'music', 'migration', 'new-york'],
    summary: `The Harlem Renaissance was not a sudden flowering from nowhere. It grew from migration, Black newspapers, publishing networks, cabarets, churches, salons, colleges, political debate, and a neighborhood where Black artists found one another at scale. Harlem became a symbol, but the movement reached beyond Harlem into Washington, Chicago, Philadelphia, Paris, and the rural South that many artists carried in memory. This page matters because the Renaissance was both breakthrough and constraint. Black artists gained visibility, but white patrons, publishers, club owners, and critics still shaped access. The deeper story is not simply genius finally noticed. It is Black artists arguing over audience, folk culture, respectability, modernism, money, sexuality, and the right to make art from the fullness of Black life.`,
    timeline: [
      { date: '1910s', event: 'The Great Migration helps transform Harlem into a major Black urban center.' },
      { date: '1919', event: 'Claude McKay writes If We Must Die during Red Summer.' },
      { date: '1921', event: 'Shuffle Along opens on Broadway and helps energize Black musical theater.' },
      { date: '1925', event: 'The New Negro anthology, edited by Alain Locke, gives the movement a defining text.' },
      { date: '1926', event: 'Langston Hughes publishes The Negro Artist and the Racial Mountain.' },
      { date: '1920s', event: 'Artists including Aaron Douglas, Augusta Savage, Zora Neale Hurston, Duke Ellington, and Bessie Smith shape the movement.' },
      { date: '1929', event: 'The stock market crash begins the Great Depression, weakening patronage and publishing opportunities.' },
      { date: '1935', event: 'The Harlem riot signals deep economic strain in the neighborhood.' },
      { date: '1937', event: 'Zora Neale Hurston publishes Their Eyes Were Watching God.' },
      { date: '1970s-present', event: 'Renewed scholarship restores many Harlem Renaissance figures, especially Black women, to wider attention.' }
    ],
    fullStory: [
      `The Harlem Renaissance grew from movement. Black Southerners came north carrying skills, stories, church traditions, blues feeling, political anger, and ambitions that Jim Crow had tried to contain. Harlem's housing market, shaped by speculation and racial transition, became one place where Black New Yorkers built density. Density mattered. Artists, editors, musicians, teachers, and organizers could find each other.`,
      `The movement was literary, musical, visual, theatrical, political, and social. Writers such as Langston Hughes, Zora Neale Hurston, Claude McKay, Countee Cullen, Jessie Fauset, Nella Larsen, and Jean Toomer did not write the same way. Some used vernacular speech and blues rhythm. Some used formal poetry. Some explored passing, sexuality, migration, colorism, class, and the interior lives of Black women. The variety is the point.`,
      `Alain Locke's The New Negro helped frame the movement as a new stage in Black self-representation. But the phrase New Negro did not belong to one editor alone. It named a wider demand that Black people be seen as modern, self-aware, politically assertive, and artistically serious. That demand was shaped by veterans, migrants, students, workers, clubgoers, and readers as much as by elite intellectuals.`,
      `Music made Harlem famous to many outsiders. Duke Ellington, Fletcher Henderson, Bessie Smith, Ethel Waters, Fats Waller, and many others shaped the sound of the era. The Cotton Club showcased extraordinary Black performers while often excluding Black patrons. The Savoy Ballroom was more open and became a legendary dance space. Harlem nightlife created opportunity and exploitation at the same time.`,
      `Visual artists built a modern Black image world. Aaron Douglas used silhouette, African diasporic design, and modernist composition to depict migration, labor, and history. Augusta Savage fought racism and sexism in sculpture and arts education. James Van Der Zee photographed Harlem's families, clubs, funerals, weddings, and public life, leaving a visual archive of Black urban aspiration and style.`,
      `The Renaissance also depended on editors and organizers who made other people's work possible. Jessie Fauset at The Crisis and Charles S. Johnson at Opportunity published, encouraged, and connected writers. Literary prizes, dinners, magazines, and salons helped create a scene. Movements need stages, but they also need people arranging the chairs, printing the programs, and persuading readers to pay attention.`,
      `Patronage shaped the movement. White publishers, philanthropists, collectors, club owners, and critics could open doors, but they also imposed expectations. Some wanted exoticized primitivism. Some wanted respectable uplift. Black artists argued with those demands and with each other. The question was not only whether Black art would be seen, but what kind of Black life would be allowed to count as art.`,
      `Women were central and often undervalued. Jessie Fauset edited, mentored, and published major writers. Zora Neale Hurston documented folklore and wrote fiction that later generations recognized as foundational. Nella Larsen explored passing, desire, and social constraint. Augusta Savage trained artists while fighting institutional exclusion. Their work makes the Renaissance less male, less tidy, and more interesting.`,
      `The Great Depression weakened the movement's institutions, but it did not erase its influence. Some artists left Harlem. Some changed forms. Some fell out of print. Later Black feminist scholarship, museum work, and community memory restored figures who had been neglected. The Renaissance continues through Black Studies, the Black Arts Movement, jazz history, literature, visual art, and debates over audience and authenticity.`,
      `The Harlem Renaissance matters because it gave Black modernity a public stage, then revealed the cost of that stage. Artists built beauty inside constraint. They made work that refused both racist caricature and narrow uplift. Their arguments about who Black art is for have never really ended.`
    ],
    costImpact: [
      `The cost included poverty, patron control, racist publishing markets, segregated performance venues, gender exclusion, and the pressure to represent a whole race. Many artists who shaped the movement struggled financially or were forgotten for decades.`,
      `The impact was a transformed Black cultural canon. The Renaissance changed American literature, music, visual art, theater, criticism, and the idea that Black artists could speak from Black life without apology. Its influence runs through later movements, including Black Arts, Black feminism, jazz studies, and contemporary literature.`
    ],
    whyItMattersToday: [
      `The Harlem Renaissance matters today because every debate about Black representation still touches its central question: should Black artists create for white approval, racial uplift, market demand, community truth, or artistic freedom? The answer has never been singular.`,
      `It also matters because visibility is not the same as control. Harlem artists became visible, but publishers, patrons, club owners, and critics still shaped the terms. That tension remains in modern culture industries.`,
      `The fuller story makes the Renaissance richer than a list of famous names. It was a network, a marketplace, a neighborhood, an argument, and a rehearsal for later Black cultural power.`
    ],
    connected: [
      { href: '@root/generated/pages/langston-hughes.html', title: 'Langston Hughes', description: 'Shows the Renaissance through poetry, vernacular, jazz, and audience debate.' },
      { href: '@root/encyclopedia/zora-neale-hurston.html', title: 'Zora Neale Hurston', description: 'Connects folklore, fiction, Black women\'s interior life, and later recovery.' },
      { href: '@root/generated/pages/augusta-savage.html', title: 'Augusta Savage', description: 'Places visual art, teaching, and gender barriers inside the movement.' },
      { href: '@root/generated/pages/black-arts-movement.html', title: 'The Black Arts Movement', description: 'Shows a later movement that inherited and challenged Harlem Renaissance questions.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Harlem Renaissance', url: 'https://www.loc.gov/classroom-materials/harlem-renaissance/' },
      { source: 'National Gallery of Art', title: 'Harlem Renaissance', url: 'https://www.nga.gov/learn/teachers/lessons-activities/african-american-art/harlem-renaissance.html' },
      { source: 'Poetry Foundation', title: 'An Introduction to the Harlem Renaissance', url: 'https://www.poetryfoundation.org/collections/145704/an-introduction-to-the-harlem-renaissance' },
      { source: 'National Museum of African American History and Culture', title: 'Harlem Renaissance', url: 'https://nmaahc.si.edu/explore/stories/harlem-renaissance' },
      { source: 'The Metropolitan Museum of Art', title: 'The Harlem Renaissance and Transatlantic Modernism', url: 'https://www.metmuseum.org/exhibitions/the-harlem-renaissance-and-transatlantic-modernism' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.loc.gov/classroom-materials/harlem-renaissance/', 'https://www.nga.gov/learn/teachers/lessons-activities/african-american-art/harlem-renaissance.html', 'https://nmaahc.si.edu/explore/stories/harlem-renaissance'],
      supportingSources: ['https://www.poetryfoundation.org/collections/145704/an-introduction-to-the-harlem-renaissance', 'https://www.metmuseum.org/exhibitions/the-harlem-renaissance-and-transatlantic-modernism'],
      verifiedQuoteSource: 'No quotation included. Movement dates, figures, and patronage claims cross-checked against institutional sources.',
      sensitiveClaimsReviewed: 'Movement periodization, Cotton Club segregation, patronage, women\'s roles, sexuality/class themes, and Depression-era decline reviewed.',
      materialCorrections: 'Rebuilt legacy page with fuller movement context, institutions, women, patronage, visual art, music, and continuing influence.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, movement claim review.'
    }
  },
  {
    encyclopediaSlug: 'little-rock-nine',
    fullDate: '2026-08-10',
    dailyDateLabel: 'August 10',
    subject: 'The Little Rock Nine',
    category: 'Civil Rights',
    type: 'Event',
    dates: '1957 - 1958',
    tags: ['education', 'civil-rights', 'youth', 'segregation', 'federal-power'],
    summary: `The Little Rock Nine were teenagers, not symbols made of stone. In 1957, Melba Pattillo, Minnijean Brown, Elizabeth Eckford, Ernest Green, Thelma Mothershed, Gloria Ray, Terrence Roberts, Jefferson Thomas, and Carlotta Walls tried to attend Central High School in Little Rock, Arkansas. Governor Orval Faubus used the National Guard to block them. White mobs threatened them. President Dwight Eisenhower eventually sent federal troops to escort them. This page matters because Brown v. Board did not integrate schools by itself. Children had to walk through crowds, soldiers, insults, and daily harassment to make a Supreme Court ruling visible. The story is about courage, but it is also about adult failure, federal enforcement, and the long cost of doing what the law already promised.`,
    timeline: [
      { date: 'May 17, 1954', event: 'Brown v. Board of Education declares school segregation unconstitutional.' },
      { date: 'Sept 1957', event: 'Nine Black students attempt to enter Little Rock Central High School.' },
      { date: 'Sept 4, 1957', event: 'Arkansas Governor Orval Faubus uses the National Guard to block the students.' },
      { date: 'Sept 23, 1957', event: 'A white mob forces the students to leave after entering the school.' },
      { date: 'Sept 24, 1957', event: 'President Eisenhower federalizes the Arkansas National Guard and sends the 101st Airborne.' },
      { date: 'Sept 25, 1957', event: 'The students enter Central High under federal troop protection.' },
      { date: 'May 1958', event: 'Ernest Green becomes the first Black student to graduate from Central High.' },
      { date: '1958-1959', event: 'Little Rock public high schools close during the Lost Year rather than integrate.' },
      { date: '1999', event: 'The Little Rock Nine receive the Congressional Gold Medal.' },
      { date: 'Present', event: 'Central High is preserved as a National Historic Site and active school.' }
    ],
    fullStory: [
      `The Little Rock Nine entered history because adults refused to obey the law. Brown v. Board had already declared segregated public schools unconstitutional, but many Southern officials pursued delay, resistance, and open defiance. Little Rock's school board adopted a limited integration plan. Even that cautious plan became a flashpoint when Governor Orval Faubus chose political resistance over student safety.`,
      `The nine students were selected because they had the grades, discipline, and willingness to endure pressure. That selection already reveals an unfair standard. Black children had to be exceptional to receive access to what white children received automatically. They were asked to represent a race while still being children with nerves, families, homework, and fear.`,
      `On September 4, 1957, Elizabeth Eckford arrived alone because she had not received word of a changed meeting plan. Photographs show her walking through a hostile crowd as white adults and students screamed behind her. The image is famous, but fame should not dull the horror. A child was left to face a mob because a state chose segregation over protection.`,
      `Faubus used the Arkansas National Guard to block the students, claiming he was preventing disorder. In reality, the state was rewarding the threat of white violence. Federal courts ordered integration to proceed. When the students entered on September 23, mob violence outside the school escalated. They were removed for safety.`,
      `President Eisenhower, not known as an eager civil rights crusader, finally acted to enforce federal authority. He federalized the Arkansas National Guard and sent troops from the 101st Airborne Division. On September 25, soldiers escorted the students into Central High. The scene made the stakes clear: a federal army was needed to let children attend school.`,
      `Inside the school, the crisis did not end. The students faced harassment, threats, spitting, shoving, and isolation. Adults often failed to stop abuse. Minnijean Brown was expelled after incidents involving white student harassment and her responses to it. Ernest Green graduated in 1958, a major milestone, but the cost to all nine students was deep.`,
      `The students' families also lived inside the crisis. Parents weighed safety against principle, handled threats, and watched children become national symbols before they were old enough to choose that role freely. Daisy Bates and the Arkansas NAACP helped coordinate support, communication, and strategy. The story was not only nine students against a mob. It was a network of adults trying, unevenly and under pressure, to keep children moving toward a school door.`,
      `White resistance continued through the Lost Year, when Little Rock closed public high schools rather than integrate. That decision harmed Black and white students alike, but it was driven by a determination to preserve white supremacy. It showed that segregationists were willing to damage public education itself to avoid Black equality.`,
      `The Lost Year also revealed that public education could be used as a weapon by the people sworn to manage it. Closing schools punished students for the federal courts' insistence on equality. It made clear that massive resistance was not only about where Black children sat. It was about who controlled the future and who could be made to pay for change.`,
      `The Little Rock Nine later built lives in law, education, social work, journalism, government, business, and public service. Their later recognition, including the Congressional Gold Medal, matters. But recognition should not make the original burden seem acceptable. The country honored them after asking them to survive what adults should have prevented.`,
      `The Little Rock Nine matter because they show the difference between a right declared and a right enforced. Brown was necessary, but without federal action and student courage, the ruling could be stalled into meaninglessness. The nine students turned constitutional law into a walk through a hostile doorway.`
    ],
    costImpact: [
      `The cost included fear, harassment, interrupted education, family stress, public exposure, and long-term emotional harm. The students had to carry the pressure of a national legal battle while adults debated whether their safety mattered.`,
      `The impact was national. Little Rock forced the federal government to confront massive resistance, showed the limits of court rulings without enforcement, and made school desegregation's human cost impossible to ignore. The crisis became a central image of civil rights history.`
    ],
    whyItMattersToday: [
      `The Little Rock Nine matter today because school equality still depends on enforcement, not sentiment. Segregation can survive through housing patterns, district boundaries, funding systems, discipline practices, and political pressure even after explicit segregation is illegal.`,
      `Their story also warns against praising children while excusing adults. The students were brave, but bravery was demanded because officials chose cowardice or cruelty. The better question is not only how they endured, but why they had to.`,
      `The fuller lesson is that law needs protection at the point of contact. A constitutional principle becomes real or unreal in hallways, classrooms, buses, and front doors.`
    ],
    connected: [
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'The Supreme Court ruling Little Rock tested in public.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects desegregation history to continuing school inequality.' },
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'Another child whose school day required federal protection.' },
      { href: '@root/generated/pages/mcdonogh-three.html', title: 'The McDonogh Three', description: 'Shows New Orleans school integration beyond the best-known single name.' }
    ],
    externalLinks: [
      { source: 'National Park Service', title: 'Little Rock Central High School National Historic Site', url: 'https://www.nps.gov/chsc/index.htm' },
      { source: 'Library of Congress', title: 'Brown v. Board Aftermath: Little Rock', url: 'https://www.loc.gov/exhibits/brown/brown-aftermath.html' },
      { source: 'Eisenhower Presidential Library', title: 'Little Rock Crisis', url: 'https://www.eisenhowerlibrary.gov/research/online-documents/civil-rights-little-rock-school-integration-crisis' },
      { source: 'National Museum of African American History and Culture', title: 'Little Rock Nine', url: 'https://nmaahc.si.edu/explore/stories/little-rock-nine' },
      { source: 'National Archives', title: 'Documents Related to Brown v. Board and Little Rock', url: 'https://www.archives.gov/education/lessons/brown-v-board' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nps.gov/chsc/index.htm', 'https://www.loc.gov/exhibits/brown/brown-aftermath.html', 'https://www.eisenhowerlibrary.gov/research/online-documents/civil-rights-little-rock-school-integration-crisis'],
      supportingSources: ['https://nmaahc.si.edu/explore/stories/little-rock-nine', 'https://www.archives.gov/education/lessons/brown-v-board'],
      verifiedQuoteSource: 'No quotation included. Names, dates, troop deployment, graduation, and Lost Year claims cross-checked against NPS and Eisenhower Library sources.',
      sensitiveClaimsReviewed: 'Student names, Elizabeth Eckford isolation, Minnijean Brown expulsion, federalization, Lost Year, and child-harm framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a full account of state resistance, federal enforcement, daily harassment, and post-crisis cost.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, school-integration claim review.'
    }
  },
  {
    encyclopediaSlug: 'mcdonogh-three',
    fullDate: '2026-08-11',
    dailyDateLabel: 'August 11',
    subject: 'The McDonogh Three',
    category: 'Education',
    type: 'Event',
    dates: '1960',
    tags: ['education', 'civil-rights', 'youth', 'women', 'new-orleans'],
    summary: `The McDonogh Three remind us what famous history can leave out. On November 14, 1960, Leona Tate, Tessie Prevost, and Gail Etienne entered McDonogh 19 Elementary School in New Orleans under federal protection, while Ruby Bridges integrated William Frantz Elementary the same morning. The girls were first graders. White families emptied the school. Federal marshals guarded the door. For too long, public memory narrowed New Orleans school integration to one child in one building. Ruby Bridges deserves remembrance, and so do the girls who walked into McDonogh 19 together. This page matters because integration was a group burden carried by children, parents, teachers, lawyers, and communities, and the archive should not make some children easier to see than others.`,
    timeline: [
      { date: '1954', event: 'Brown v. Board declares public school segregation unconstitutional.' },
      { date: '1956', event: 'Federal Judge J. Skelly Wright orders New Orleans school desegregation to proceed.' },
      { date: '1960', event: 'A small number of Black children are selected for first-grade integration in New Orleans.' },
      { date: 'Nov 14, 1960', event: 'Leona Tate, Tessie Prevost, and Gail Etienne enter McDonogh 19 Elementary.' },
      { date: 'Nov 14, 1960', event: 'Ruby Bridges enters William Frantz Elementary the same morning.' },
      { date: '1960-1961', event: 'White families boycott and the girls spend much of the year isolated inside McDonogh 19.' },
      { date: '1962', event: 'The girls later attend T. J. Semmes Elementary as desegregation continues slowly.' },
      { date: '2009', event: 'The Leona Tate Foundation for Change is established.' },
      { date: '2022', event: 'The former McDonogh 19 building reopens as the Tate, Etienne, and Prevost Center.' },
      { date: 'Present', event: 'The McDonogh Three continue to be restored to public memory of school desegregation.' }
    ],
    fullStory: [
      `New Orleans school integration is often remembered through Ruby Bridges, and that memory is important. But on the same morning Ruby entered William Frantz Elementary, Leona Tate, Tessie Prevost, and Gail Etienne entered McDonogh 19. They were six-year-old girls carrying a burden created by adults who refused to obey constitutional law.`,
      `The legal battle had been unfolding for years. Brown v. Board declared segregated schools unconstitutional in 1954, but New Orleans officials delayed. Federal Judge J. Skelly Wright pushed desegregation forward despite local resistance. The plan that finally moved was tiny compared with the scale of the system: a few first graders chosen to enter formerly white schools.`,
      `The girls arrived under federal marshal protection because white mobs gathered outside. Protesters screamed at children. White parents pulled their children from the school rather than allow them to learn beside Black classmates. The school building became a stage where segregationists tried to make a lesson out of cruelty.`,
      `Inside McDonogh 19, the girls experienced isolation. They were together, unlike Ruby, who was often alone in her classroom, but together did not mean normal. Much of the school had been emptied. Their education unfolded under guard, in a building surrounded by the knowledge that adults outside wanted them gone. Childhood became a constitutional confrontation.`,
      `Their parents made decisions under pressure. Sending a child into a hostile school could mean danger, job loss, neighborhood retaliation, and emotional strain. The choice was not between safety and politics. It was between accepting an inferior system or forcing the system to reveal how far it would go to preserve exclusion.`,
      `McDonogh 19 itself became part of the story. Buildings remember what communities ask of them. A school meant for children became a site guarded by federal marshals because white adults chose exclusion. Decades later, restoring that building as a civil rights site created a different kind of lesson: the place that once isolated children could teach future visitors why isolation happened and who resisted it.`,
      `The McDonogh Three were not footnotes. They were part of the same desegregation action that made Ruby Bridges famous. Public memory narrowed partly because one image, Norman Rockwell's painting inspired by Ruby, became iconic. Images can preserve history, but they can also make the frame too small. The fuller frame includes Leona, Tessie, and Gail walking together.`,
      `Their story also changes how we talk about companionship. The three girls had one another, but companionship did not erase fear. It did, however, create a different kind of memory from Ruby Bridges's isolation. New Orleans integration included both loneliness and togetherness, both one child in one school and three girls in another, all under the same hostile city sky.`,
      `The later preservation of the McDonogh 19 building matters because place can correct memory. The Tate, Etienne, and Prevost Center turns a site of exclusion into a site of education, civil rights interpretation, housing, and community use. That transformation does not erase what happened. It insists that the building tell the truth.`,
      `The McDonogh Three matter because they teach readers to ask who is missing from the famous version. Their story is not a correction against Ruby Bridges. It is a completion of the New Orleans story. Integration was not one child. It was multiple children, multiple families, and a community of adults who either protected them, abandoned them, or attacked them.`,
      `Remembering them well means refusing to make children into simple inspiration. Leona Tate, Tessie Prevost, and Gail Etienne were brave, but they should not have needed to be. Their courage exposes the adult choices that made first grade dangerous.`
    ],
    costImpact: [
      `The cost included threats, isolation, public hostility, family stress, and a distorted childhood. The girls had to learn under federal protection while white families and officials made ordinary schooling impossible. Their parents carried fear and retaliation risks that public memory often underplays.`,
      `The impact is corrective and educational. Restoring the McDonogh Three changes the New Orleans integration story from a single-child memory into a fuller account of shared burden, gender, family decision-making, and public erasure.`
    ],
    whyItMattersToday: [
      `The McDonogh Three matter today because historical memory often narrows collective struggle into one name. That can make a story easier to teach, but it can also erase people whose courage was no less real. A learning site has to widen the frame.`,
      `Their story also matters because school integration remains a question of systems, not sentiment. The backlash these girls faced shows that legal equality can still require protection from adults invested in inequality.`,
      `The fuller lesson is that archives need repair. When public memory forgets children, buildings, parents, and local organizers, the work is not only to add names. It is to understand why some names were missing.`
    ],
    connected: [
      { href: '@root/encyclopedia/ruby-bridges.html', title: 'Ruby Bridges', description: 'The better-known New Orleans integration story that unfolded the same morning.' },
      { href: '@root/generated/pages/ruby-bridges-integration.html', title: 'The Cost of School Integration', description: 'Connects the children\'s experiences to the adult systems around them.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'The ruling New Orleans resisted for years.' },
      { href: '@root/generated/pages/little-rock-nine.html', title: 'The Little Rock Nine', description: 'Another child-centered school integration crisis requiring federal protection.' }
    ],
    externalLinks: [
      { source: 'Leona Tate Foundation for Change', title: 'The McDonogh Three', url: 'https://www.leonatatefoundation.org/history' },
      { source: 'New Orleans Historical', title: 'McDonogh 19 Elementary School', url: 'https://neworleanshistorical.org/items/show/1353' },
      { source: 'Louisiana Travel', title: 'The McDonogh Three and Ruby Bridges', url: 'https://www.louisianatravel.com/articles/mcdonogh-three-and-ruby-bridges' },
      { source: 'Preservation Resource Center of New Orleans', title: 'Tate, Etienne and Prevost Center Opens', url: 'https://prcno.org/tate-etienne-prevost-center-opens-inside-former-mcdonogh-19/' },
      { source: 'Smithsonian Magazine', title: 'The Forgotten Girls of School Desegregation', url: 'https://www.smithsonianmag.com/history/forgotten-girls-school-desegregation-180977991/' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.leonatatefoundation.org/history', 'https://neworleanshistorical.org/items/show/1353', 'https://www.louisianatravel.com/articles/mcdonogh-three-and-ruby-bridges'],
      supportingSources: ['https://prcno.org/tate-etienne-prevost-center-opens-inside-former-mcdonogh-19/', 'https://www.smithsonianmag.com/history/forgotten-girls-school-desegregation-180977991/'],
      verifiedQuoteSource: 'No quotation included. Names, date, school, and building afterlife cross-checked against foundation, state encyclopedia, and NPS sources.',
      sensitiveClaimsReviewed: 'Children\'s ages, same-day Ruby Bridges framing, school isolation, white boycott, and memory erasure reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a fuller account of legal context, family risk, erased memory, and McDonogh 19 afterlife.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, New Orleans integration claim review.'
    }
  },
  {
    encyclopediaSlug: 'mis-education',
    outputPath: 'encyclopedia/mis-education.html',
    fullDate: '2026-02-28',
    dailyDateLabel: 'February 28',
    subject: 'The Mis-Education of the Negro',
    category: 'Education',
    type: 'Book',
    dates: '1933 - present',
    tags: ['education', 'scholarship', 'black-history', 'carter-woodson', 'memory'],
    summary: `The Mis-Education of the Negro is not a dusty old complaint about schools. Carter G. Woodson's 1933 book argues that education can train Black people to distrust their own history, imitate the values of the people who exclude them, and measure success by proximity to systems designed against them. Woodson was not rejecting learning. He was attacking a curriculum that made Black life invisible or inferior. This page matters because Black History Month and Black history education are often treated as celebration alone. Woodson's deeper challenge is sharper: what happens when a people are taught facts that make them strangers to themselves, and what kind of education would help them think freely instead?`,
    timeline: [
      { date: '1875', event: 'Carter G. Woodson is born in Virginia.' },
      { date: '1912', event: 'Woodson earns a Ph.D. from Harvard University.' },
      { date: '1915', event: 'Woodson helps found the Association for the Study of Negro Life and History.' },
      { date: '1916', event: 'The Journal of Negro History begins publication.' },
      { date: '1926', event: 'Woodson launches Negro History Week.' },
      { date: '1933', event: 'The Mis-Education of the Negro is published.' },
      { date: '1950', event: 'Woodson dies in Washington, D.C.' },
      { date: '1976', event: 'Black History Month is nationally recognized during the U.S. bicentennial era.' },
      { date: 'Present', event: 'The book remains central to debates over curriculum, identity, and educational power.' }
    ],
    fullStory: [
      `Carter G. Woodson wrote The Mis-Education of the Negro after decades of building Black history as a field. He was a scholar, editor, organizer, teacher, and institution builder. He knew that exclusion from textbooks was not accidental. If a school system taught Black children that civilization, intelligence, beauty, and leadership belonged elsewhere, it was training them to look away from themselves.`,
      `Woodson's argument was not anti-education. It was anti-miseducation. He believed education should help people understand their conditions and act with self-respect. Instead, he saw schools producing imitation: Black students trained to value European history while knowing little about Africa, slavery resistance, Reconstruction, Black institutions, and Black achievement. The problem was not that students learned about others. The problem was that they were taught to disappear from the story.`,
      `The book also criticizes elite education. Woodson argued that degrees could become tools of dependency if they trained Black professionals to serve existing systems without questioning them. He worried that some educated Black people measured success by distance from Black communities. His critique can sound harsh because it was meant to be. He was arguing with people who had access to education but not necessarily liberation.`,
      `The Mis-Education of the Negro sits inside Woodson's larger project. In 1915, he helped found what is now ASALH, the Association for the Study of African American Life and History. He edited the Journal of Negro History, supported researchers, preserved documents, and created Negro History Week in 1926. The book was not a standalone rant. It came from years of building the tools needed to correct the record.`,
      `Woodson's language reflects its time and should be read historically. Some terms and assumptions do not match how educators and communities speak now. But the central question remains powerful: who controls curriculum, and what does that curriculum teach people to believe about themselves?`,
      `The book also speaks to economics. Woodson worried that education could train people to chase credentials without building institutions, businesses, farms, schools, and cooperative power in Black communities. He was not romanticizing poverty or rejecting professional achievement. He was asking whether education served freedom or simply produced people ready to fit into somebody else's hierarchy.`,
      `The book is often quoted in debates over Black History Month, ethnic studies, book bans, and curriculum laws. But quoting Woodson without reading him can make his work too simple. He was not asking for trivia or token heroes. He wanted a reorientation of knowledge, one that connected history to power, economics, institutions, and self-determination.`,
      `That is why the book still unsettles people. Woodson was not only asking schools to add Black facts. He was asking readers to question the purpose of education itself. If education teaches a student to admire power without examining how power was built, then the student may become successful inside a system they do not understand. Woodson wanted understanding sharp enough to change behavior.`,
      `The book also pushes against shallow celebration. Woodson would not have been satisfied with a calendar of famous names if the underlying education still trained people to accept inequality. Black history, for him, was not decoration. It was evidence that Black people had shaped the world and therefore had a right to shape the future.`,
      `The Mis-Education of the Negro matters because it names education as a site of struggle. A classroom can liberate curiosity or narrow it. A textbook can open a world or make a child invisible. Woodson understood that the battle over history is never only about the past. It is about what people believe they are allowed to become.`
    ],
    costImpact: [
      `The cost Woodson identified was internal and institutional. Miseducation could produce shame, dependency, distorted ambition, and disconnection from community. It also justified underfunded schools and narrow curricula by treating Black history as optional rather than foundational.`,
      `The impact of the book has been long-lasting. It continues to shape Black studies, curriculum debates, Black History Month criticism, independent schools, community education, and arguments over how history should be taught. Its force comes from asking readers to examine not only what they know, but who benefited from the gaps.`
    ],
    whyItMattersToday: [
      `The Mis-Education of the Negro matters today because curriculum fights are not side issues. They decide what children are allowed to know about power, race, labor, resistance, culture, and themselves. Woodson helps readers see erasure as design, not oversight.`,
      `It also matters because representation alone is not enough. Adding a few names without changing the questions can leave the same hierarchy intact. Woodson wanted education that produced independent thought and community responsibility, not decorative inclusion.`,
      `The fuller lesson is that Black history education should sharpen the mind, not soothe the institution. It should make people harder to mislead because they know the record.`
    ],
    connected: [
      { href: '@root/encyclopedia/carter-woodson.html', title: 'Carter G. Woodson', description: 'The scholar and organizer whose work built Black history as public education.' },
      { href: '@root/encyclopedia/education-inequality.html', title: 'Education Inequality by Design', description: 'Connects curriculum to broader systems of unequal schooling.' },
      { href: '@root/encyclopedia/black-press.html', title: 'The Black Press', description: 'Another institution that corrected public records controlled by others.' },
      { href: '@root/encyclopedia/hbcus.html', title: 'HBCUs', description: 'Places Woodson\'s critique inside Black institution-building and higher education.' }
    ],
    externalLinks: [
      { source: 'Project Gutenberg', title: 'The Mis-Education of the Negro', url: 'https://www.gutenberg.org/ebooks/26890' },
      { source: 'ASALH', title: 'Origins of Black History Month', url: 'https://asalh.org/about-us/origins-of-black-history-month/' },
      { source: 'National Park Service', title: 'Carter G. Woodson Home', url: 'https://www.nps.gov/cawo/index.htm' },
      { source: 'Library of Congress', title: 'Carter G. Woodson Papers', url: 'https://www.loc.gov/collections/carter-godwin-woodson-papers/about-this-collection/' },
      { source: 'National Museum of African American History and Culture', title: 'Carter G. Woodson', url: 'https://nmaahc.si.edu/explore/stories/carter-g-woodson' }
    ],
    research: {
      status: 'batch-22-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.gutenberg.org/ebooks/26890', 'https://asalh.org/about-us/origins-of-black-history-month/', 'https://www.loc.gov/collections/carter-godwin-woodson-papers/about-this-collection/'],
      supportingSources: ['https://www.nps.gov/cawo/index.htm', 'https://nmaahc.si.edu/explore/stories/carter-g-woodson'],
      verifiedQuoteSource: 'No quotation included. Woodson\'s argument summarized from the book and ASALH/NPS/LOC institutional sources.',
      sensitiveClaimsReviewed: 'Book argument, Black History Month relationship, Woodson biography, terminology, and curriculum-politics framing reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond final-day prompt into a fuller account of Woodson\'s critique, institution-building, curriculum, and present-day relevance.',
      finalStatus: 'Batch 22 complete pending final verification: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, education claim review.'
    }
  }
];

module.exports = {
  ENTRIES,
};
