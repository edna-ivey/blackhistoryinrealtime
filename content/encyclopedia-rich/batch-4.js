const RESEARCH_DATE = '2026-08-14';

const ENTRIES = [
  {
    encyclopediaSlug: 'billie-holiday',
    outputPath: 'encyclopedia/billie-holiday.html',
    fullDate: '2026-04-07',
    dailyDateLabel: 'April 7',
    subject: 'Billie Holiday',
    category: 'Music',
    type: 'People',
    dates: '1915 - 1959',
    tags: ['music', 'jazz', 'protest', 'lynching', 'women'],
    summary: `Billie Holiday's voice made time bend. She could sing slightly behind the beat, turn a familiar lyric into confession, and make restraint feel more devastating than force. But the public memory of Holiday often traps her between two simplifications: tragic addict or brave protest singer. She was both more fragile and more strategic than either version allows. Her 1939 performance and recording of "Strange Fruit" turned a club song into a national confrontation with lynching. At the same time, the state punished her drug use more fiercely than it protected Black people from racial terror. Holiday's page has to hold the artistry, the surveillance, the pain, and the control she fought to keep over her own sound.`,
    timeline: [
      { date: 'Apr 7, 1915', event: 'Born Eleanora Fagan in Philadelphia.' },
      { date: '1920s', event: 'Grows up between Baltimore and Harlem under poverty, instability, and early exploitation.' },
      { date: '1933', event: 'Records early sides with Benny Goodman.' },
      { date: '1935-1937', event: 'Records influential sessions with Teddy Wilson and performs with Count Basie.' },
      { date: '1938', event: 'Joins Artie Shaw, becoming one of the first Black women to sing with a white orchestra.' },
      { date: '1939', event: 'Begins performing "Strange Fruit" at Cafe Society and records it for Commodore.' },
      { date: '1947', event: 'Is convicted on narcotics charges and loses her New York cabaret card after release.' },
      { date: 'Mar 27, 1948', event: 'Performs a major Carnegie Hall concert after prison.' },
      { date: '1956', event: 'Publishes Lady Sings the Blues with William Dufty.' },
      { date: 'Jul 17, 1959', event: 'Dies in New York City at age 44.' }
    ],
    fullStory: [
      `Billie Holiday did not have the biggest voice in jazz. That was never the point. Her genius was phrasing, timing, emotional pressure, and the ability to make a song sound as if it were happening in the room for the first time. She listened to instrumentalists, especially Louis Armstrong, and treated her voice like a horn: bending notes, delaying entrances, and opening space inside a melody. The result was intimate but never small.`,
      `Holiday was born Eleanora Fagan in 1915. Her childhood was marked by poverty, unstable housing, and sexual violence. Those facts matter, but they should not be used to turn her into a sad origin story. She entered music as a worker and an artist in Harlem's club world, a place of possibility and exploitation at once. By the early 1930s she was recording with Benny Goodman and then with Teddy Wilson, building a body of work that changed how popular song could feel.`,
      `Her partnership with saxophonist Lester Young became one of jazz's great artistic friendships. Young gave her the nickname Lady Day, and she called him Prez. Their recordings carry a kind of conversational freedom: voice and horn answering each other, teasing the beat, making elegance out of survival. Holiday also sang with Count Basie and Artie Shaw. In 1938, touring with Shaw's white orchestra, she faced segregation in hotels, restaurants, and performance spaces while serving as a featured attraction.`,
      `Then came "Strange Fruit." The song began as a poem by Abel Meeropol, a Jewish schoolteacher from the Bronx who wrote under the name Lewis Allan after seeing images of lynching. Cafe Society, an integrated New York nightclub, became the place where Holiday turned the song into ritual. Accounts describe the room going dark, service stopping, and Holiday closing her set with the song. It was not background music. It was a demand that listeners sit with the image of Black bodies murdered and displayed.`,
      `Columbia, her regular label, would not record it. Holiday recorded "Strange Fruit" for Commodore Records in 1939. The record sold widely and became one of the most powerful protest songs in American culture. But it also made Holiday vulnerable. Federal Bureau of Narcotics commissioner Harry Anslinger targeted jazz musicians and drug users, and Holiday's drug addiction became a point of state control. The government did not invent her pain, but it weaponized it.`,
      `Holiday was arrested and convicted on narcotics charges in 1947. After serving time, she lost her cabaret card, the license required to perform in New York venues that served alcohol. That punishment directly damaged her livelihood. A singer whose work depended on clubs was barred from many of the rooms where she could earn a living. She could still perform at concert halls, including Carnegie Hall, but the legal system had narrowed her professional life while claiming to police morality.`,
      `Her later years are often described as decline, and there is truth in the damage: addiction, abusive relationships, health problems, and a voice that grew rougher. But the late recordings should not be dismissed as ruins. They carry a different authority. Holiday's sound thinned, but the phrasing remained exact. She made age, injury, and memory audible before she was even old.`,
      `When Holiday died in 1959, she was only 44. The simplified story says she sang a protest song and was destroyed by drugs. The fuller story says she changed American singing, forced white audiences to hear an anti-lynching indictment, and was punished by a state more interested in controlling a Black woman's body than protecting Black life. Her art was not separate from that pressure. It was made inside it.`
    ],
    costImpact: [
      `Holiday paid for her art in public scrutiny, economic restriction, and state punishment. Racism followed her on the road. The cabaret-card system kept her from many New York club stages after her conviction. Addiction and abusive relationships injured her body and narrowed her choices, while law enforcement treated punishment as care.`,
      `Her impact is enormous. She changed jazz singing by proving that phrasing could carry as much power as range. "Strange Fruit" gave American popular music one of its clearest anti-lynching statements and showed that a nightclub performance could become political testimony.`
    ],
    whyItMattersToday: [
      `Holiday matters today because her life shows how easily the public consumes Black pain while ignoring the systems around it. "Strange Fruit" is rightly remembered as courageous, but the song's power also came from the world that made it necessary: lynching, spectacle, denial, and indifference.`,
      `Her story also changes how we discuss addiction and criminalization. Holiday needed care, safety, and control over her work. Instead, the state used her addiction to police her. That history still matters in conversations about drugs, punishment, gender, and race.`,
      `A reader should leave hearing Holiday not as a symbol of tragedy, but as an artist of extraordinary intelligence who made beauty carry evidence.`
    ],
    connected: [
      { href: '@root/encyclopedia/ida-b-wells.html', title: 'Ida B. Wells', description: 'Connects "Strange Fruit" to anti-lynching documentation and protest.' },
      { href: '@root/encyclopedia/james-baldwin.html', title: 'James Baldwin', description: 'Another artist who made American denial impossible to hide.' },
      { href: '@root/encyclopedia/the-blues.html', title: 'The Blues', description: 'Places Holiday inside Black musical traditions of witness and feeling.' },
      { href: '@root/encyclopedia/nina-simone.html', title: 'Nina Simone', description: 'A later musician whose performances made protest and artistry inseparable.' }
    ],
    externalLinks: [
      { source: 'Smithsonian Institution', title: 'Lady Day: Billie Holiday', url: 'https://www.si.edu/spotlight/billie-holiday' },
      { source: 'National Museum of African American History and Culture', title: 'Billie Holiday', url: 'https://nmaahc.si.edu/billie-holiday' },
      { source: 'National Museum of American History', title: 'Billie Holiday and Strange Fruit', url: 'https://americanhistory.si.edu/press/releases/jazz-appreciation-month-2026' },
      { source: 'Library of Congress', title: 'Today in History: Billie Holiday', url: 'https://www.loc.gov/item/today-in-history/april-07' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.si.edu/spotlight/billie-holiday', 'https://nmaahc.si.edu/billie-holiday'],
      supportingSources: ['https://americanhistory.si.edu/press/releases/jazz-appreciation-month-2026', 'https://www.loc.gov/item/today-in-history/april-07'],
      verifiedQuoteSource: 'No quotation included. Lyric quotation avoided because the historical argument does not require reproducing copyrighted lyrics.',
      sensitiveClaimsReviewed: 'Childhood trauma, sexuality, addiction, narcotics prosecution, cabaret card consequences, and "Strange Fruit" recording context reviewed with careful wording.',
      materialCorrections: 'Expanded legacy protest-song summary into a full account of artistry, club labor, anti-lynching performance, criminalization, and late-career complexity.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-codes',
    fullDate: '2026-07-08',
    dailyDateLabel: 'July 8',
    subject: 'Black Codes',
    category: 'Justice',
    type: 'Systems',
    dates: '1865 - 1866',
    tags: ['reconstruction', 'law', 'labor', 'citizenship', 'black-codes'],
    summary: `The Black Codes were not confusion after slavery. They were strategy. In 1865 and 1866, Southern lawmakers tried to define freedom so narrowly that Black people could be free in name while trapped by labor contracts, vagrancy laws, apprenticeship rules, movement restrictions, and court systems that denied equal rights. The laws showed how quickly slavery's defenders adapted to emancipation. They also provoked a federal response that helped produce the Civil Rights Act of 1866, the Reconstruction Acts, and the Fourteenth Amendment. The Black Codes matter because they reveal a pattern that returns across U.S. history: when Black freedom expands, law can be used either to protect it or to cage it again.`,
    timeline: [
      { date: 'Jan 1, 1863', event: 'The Emancipation Proclamation declares freedom for enslaved people in rebelling areas.' },
      { date: 'Apr 1865', event: 'The Civil War ends, leaving more than four million newly freed people to claim freedom in hostile states.' },
      { date: 'Dec 6, 1865', event: 'The Thirteenth Amendment is ratified, abolishing slavery except as punishment for crime.' },
      { date: '1865', event: 'Mississippi and South Carolina pass some of the earliest and most notorious Black Codes.' },
      { date: '1865-1866', event: 'Other former Confederate states pass laws restricting Black labor, mobility, testimony, property, and family authority.' },
      { date: 'Apr 9, 1866', event: 'Congress overrides Andrew Johnson\'s veto of the Civil Rights Act of 1866.' },
      { date: '1867', event: 'Reconstruction Acts place former Confederate states under military districts with conditions for readmission.' },
      { date: 'Jul 9, 1868', event: 'The Fourteenth Amendment is ratified, establishing birthright citizenship and equal protection.' },
      { date: 'Late 1800s', event: 'Jim Crow laws and convict leasing extend many Black Code goals under new legal forms.' }
    ],
    fullStory: [
      `The Black Codes came after emancipation, but they carried slavery's logic forward. Former Confederates understood that the Thirteenth Amendment had ended legal ownership of human beings. They also understood that controlling Black labor, movement, family life, and legal standing could preserve much of the old order without using the old word.`,
      `The immediate context was Reconstruction's opening uncertainty. Black people searched for family members, legalized marriages, built schools and churches, negotiated wages, moved to test freedom, and demanded the right to testify, own property, and protect their children. Former enslavers saw that mobility as disorder. Their answer was law. Black Codes tried to force freedpeople into annual labor contracts, punish unemployment as vagrancy, limit movement, restrict occupations, and bind Black children through apprenticeship laws that could return them to white control.`,
      `Mississippi's 1865 laws became especially infamous. They required Black workers to show written evidence of employment, punished those who left contracts, and allowed children to be apprenticed in ways that resembled coercive labor. South Carolina's code restricted occupations and imposed special rules on Black workers. The details varied by state, but the purpose was recognizable: make freedom dependent, supervised, and cheap.`,
      `These laws also attacked legal personhood. In some states Black people could not testify equally against white people, serve on juries, or move through public life with the same rights as citizens. That mattered because rights without enforcement are fragile. If a person cannot testify, cannot leave an abusive labor arrangement, cannot claim wages, and cannot protect family members from coercive apprenticeship, freedom becomes a word without shelter.`,
      `Black people resisted. They held conventions, petitioned, left plantations, negotiated contracts, created mutual aid, and used the Freedmen's Bureau where they could. The Bureau was imperfect and often underpowered, but its records show freedpeople insisting that marriage, wages, children, education, and bodily safety were not favors. They were claims of freedom.`,
      `The codes also exposed the danger in President Andrew Johnson's version of Reconstruction. Johnson quickly restored political authority to many former Confederates and expected Southern states to manage the transition themselves. Former Confederates used that opening to send old elites back into power and write freedom into a corner. Black testimony from the period, congressional investigations, and Freedmen's Bureau records made clear that local law could not be trusted to protect people local power wanted to control.`,
      `The Black Codes also changed national politics. Many Northerners who had hoped for quick reconciliation saw that Presidential Reconstruction under Andrew Johnson was allowing former Confederates to rebuild racial control. Congress responded with the Civil Rights Act of 1866, which declared people born in the United States citizens and promised equal benefit of the law. When Johnson vetoed it, Congress overrode him. That conflict helped push the country toward the Fourteenth Amendment and Congressional Reconstruction.`,
      `That federal turn did not come from benevolence alone. It came because Black freedom made claims the old order could not absorb, and because Southern repression made the contradiction visible. The codes forced the nation to answer whether emancipation meant citizenship or merely the absence of an auction block.`,
      `The codes did not survive unchanged, but their goals did. Vagrancy laws, convict leasing, sharecropping contracts, debt peonage, Jim Crow segregation, and discriminatory policing all drew from the same impulse: convert Black freedom into controlled labor and second-class citizenship. The line from Black Codes to Jim Crow is not perfectly straight, but it is historically real.`,
      `The Black Codes teach that emancipation was not a single legal event. It was a struggle over the meaning of freedom. The end of slavery opened a door. Southern lawmakers immediately tried to narrow the doorway until Black people could pass through only on terms set by those who had enslaved them.`
    ],
    quote: {
      text: `some other name`,
      cite: `Frederick Douglass, describing laws that tried to replace slavery after emancipation`
    },
    costImpact: [
      `The cost of the Black Codes fell on newly freed people trying to build lives after slavery. Families faced apprenticeship laws that threatened children. Workers faced coerced contracts and criminal punishment for leaving exploitative labor. Communities faced courts that could deny equal testimony and protection.`,
      `The impact was national. The codes helped convince Congress that freedom needed federal citizenship and enforcement. They shaped the path toward the Civil Rights Act of 1866, the Reconstruction Acts, and the Fourteenth Amendment. They also left a template for later systems that used criminal law and labor control to restrict Black life.`
    ],
    whyItMattersToday: [
      `The Black Codes matter today because they show that backlash can be written in legal language. A law can sound administrative while reorganizing power. That is why the details matter: contracts, fines, movement, testimony, apprenticeship, and policing were all tools for deciding what freedom would actually mean.`,
      `They also sharpen how we read Reconstruction. The era was not a failed gift handed down from Washington. It was a struggle in which Black people claimed citizenship and former Confederates tried to rebuild domination. Federal action came partly because Black resistance and Southern repression made the stakes visible.`,
      `A reader should leave understanding that freedom requires more than the end of one institution. It requires legal power strong enough to stop that institution from returning under another name.`
    ],
    connected: [
      { href: '@root/encyclopedia/13th-amendment.html', title: 'The 13th Amendment', description: 'The constitutional end of slavery, with an exception that mattered deeply.' },
      { href: '@root/generated/pages/14th-amendment.html', title: 'The 14th Amendment', description: 'A federal answer to Black Codes and citizenship denial.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'The larger fight over freedom after the Civil War.' },
      { href: '@root/generated/pages/convict-leasing.html', title: 'The Convict Leasing System', description: 'A later labor-control system rooted in criminalization.' }
    ],
    externalLinks: [
      { source: 'National Constitution Center', title: 'The Black Codes and the Fourteenth Amendment', url: 'https://constitutioncenter.org/education/videos/14th-amendment-discussion-starter-the-black-codes' },
      { source: 'Library of Congress', title: 'Reconstruction and Rights', url: 'https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-1877/reconstruction-and-rights/' },
      { source: 'National Archives', title: 'Endings and Beginnings: Black Codes', url: 'https://www.archives.gov/exhibits/civil-war/preview/endings-and-beginnings/' },
      { source: 'Smithsonian Institution', title: 'Make Good the Promises: Reconstruction and Its Legacies', url: 'https://www.si.edu/exhibitions/make-good-promises-reconstruction-and-its-legacies%3Aevent-exhib-6538' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://constitutioncenter.org/education/videos/14th-amendment-discussion-starter-the-black-codes', 'https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-1877/reconstruction-and-rights/'],
      supportingSources: ['https://www.archives.gov/exhibits/civil-war/preview/endings-and-beginnings/', 'https://www.si.edu/exhibitions/make-good-promises-reconstruction-and-its-legacies%3Aevent-exhib-6538'],
      verifiedQuoteSource: 'National Constitution Center background attributes the "some other name" critique to Frederick Douglass.',
      sensitiveClaimsReviewed: 'State variation, labor-contract rules, apprenticeship rules, legal testimony restrictions, and federal response chronology reviewed.',
      materialCorrections: 'Expanded daily summary into a legal and political account connecting Black Codes to federal Reconstruction and later labor-criminalization systems.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-culinary-history',
    outputPath: 'encyclopedia/black-culinary-history.html',
    fullDate: '2026-02-19',
    dailyDateLabel: 'February 19',
    subject: 'Black Culinary History',
    category: 'Culture',
    type: 'Culture',
    dates: '1600s - present',
    tags: ['food', 'foodways', 'culture', 'slavery', 'southern-food'],
    summary: `Black culinary history is not a sidebar to American food. It is one of the main kitchens. Enslaved Africans and their descendants carried agricultural knowledge, cooking techniques, taste memories, and survival strategies into a violent new world. They shaped rice cultivation, greens, okra, gumbo, barbecue, oyster work, street vending, church meals, restaurant labor, and the language of hospitality, often while white households and businesses took the credit. The point is not to claim every Southern dish as a simple African inheritance. The point is richer: American cuisine came from forced migration, Native knowledge, European ingredients, Black skill, scarcity, creativity, commerce, memory, and the politics of who gets named as a chef.`,
    timeline: [
      { date: '1600s', event: 'Africans forced into the Americas bring food knowledge, crops, techniques, and regional memories.' },
      { date: '1700s', event: 'Enslaved cooks become central to plantation households and elite dining in colonies such as Virginia and South Carolina.' },
      { date: '1700s-1800s', event: 'Rice, okra, greens, peppers, peanuts, and stews circulate through African, Native, and European foodways.' },
      { date: '1800s', event: 'Black oyster workers, street vendors, caterers, and cooks build urban and coastal food economies.' },
      { date: '1865', event: 'Emancipation changes labor relations but Black cooks remain central to domestic and commercial food work.' },
      { date: 'Late 1800s-1900s', event: 'Aunt Jemima and similar advertising figures romanticize Black domestic labor while hiding exploitation.' },
      { date: '1960s-1970s', event: 'Soul food becomes a language of Black identity, migration, and political pride.' },
      { date: '2000s-present', event: 'Chefs, scholars, and museums publicly recover Black foodways as American history.' }
    ],
    fullStory: [
      `Food history can look comforting until the labor comes into focus. Black culinary history contains pleasure, skill, family, celebration, and invention. It also contains slavery, hunger, theft of credit, forced service, and the long habit of praising Southern hospitality without naming the Black cooks who made it possible. A serious encyclopedia page has to hold both.`,
      `Africans brought to the Americas did not arrive empty-handed. They carried knowledge of rice, okra, leafy greens, peppers, field work, preservation, stews, fermentation, and communal eating. In the Americas, those memories met Indigenous foods and European ingredients under conditions of coercion. That mix produced new foodways, not as a romantic fusion, but as a forced adaptation made by people trying to feed themselves and survive.`,
      `On plantations, enslaved cooks worked under brutal conditions. Smithsonian writing on enslaved chefs emphasizes that cooks often lived close to the fire, rose before dawn, prepared meals for enslavers and guests, and carried the reputation of white households on their labor. Skilled cooks such as Hercules at Washington's household and James Hemings in Jefferson's world became known for excellence, but even their recognized skill existed inside bondage or coercive dependence.`,
      `The archive is uneven because many cooks were not allowed to leave records in their own names. Their work appears in plantation account books, household letters, archaeology, kitchen tools, cookbooks written by white women, and oral tradition. That absence is not evidence that Black cooks were marginal. It is evidence of how power recorded labor while erasing the laborer.`,
      `Gender shaped that erasure. Black women cooked in private kitchens, laundries, boardinghouses, churches, schools, and white homes, often under expectations that made expertise look like obligation. Black men worked as caterers, chefs, waiters, butchers, oyster workers, porters, and entrepreneurs, but the public language of "service" still made skill easier to exploit. The question is not only who made the food. It is whose work was treated as knowledge and whose was treated as duty.`,
      `Black foodways were never limited to plantations. Along the Atlantic coast, Black oyster workers harvested, shucked, sold, and served oysters. In cities, hucksters and street vendors sold food and built small economies. In churches and mutual aid spaces, meals became part of institution-building. After emancipation, Black cooks, caterers, Pullman dining-car workers, restaurant owners, domestic workers, and home cooks carried food traditions through migration and new markets.`,
      `Cookbooks became part of that archive too. Some preserved Black expertise directly, while others filtered it through white authorship and household management. Reading them carefully means noticing recipes, but also noticing who is named, who is only implied, and what kinds of labor are treated as background.`,
      `The phrase "soul food" emerged in the 20th century with special power during the Black freedom era. It named food as memory and identity, especially as Black Southerners moved north and west. But soul food is not the whole story. Black culinary history includes Gullah Geechee rice traditions, Creole and Cajun intersections, barbecue, vegan and health reform movements, fine dining, lunch counters, cookbooks, school cafeterias, food justice, and global African diaspora exchange.`,
      `Appropriation is part of the story too. Dishes, techniques, and aesthetics associated with Black cooks have often been marketed as broadly Southern, American, or trendy once detached from Black labor. Advertising figures such as Aunt Jemima turned Black domestic service into a smiling myth. Restaurants and food media have long celebrated "comfort" while avoiding the discomfort of who cooked, who owned, who profited, and who was expected to serve.`,
      `The fuller story is not only about giving credit. It is about understanding food as history: land, labor, migration, trade, gender, memory, business, and power on a plate. Black cooks did not just make American food taste better. They helped make American food American.`
    ],
    costImpact: [
      `The cost of Black culinary history includes forced labor, burns, surveillance, hunger, unpaid skill, stolen credit, and generations of domestic work treated as natural service rather than expertise. Enslaved and later underpaid cooks built reputations for households, restaurants, and regions that did not name them.`,
      `The impact is everywhere. American rice dishes, greens, gumbo, barbecue traditions, oysters, church suppers, lunch counters, street vending, and fine dining all carry Black food knowledge. The story also supports contemporary food justice work by showing that access to land, wages, credit, and public recognition have always shaped what communities can eat and preserve.`
    ],
    whyItMattersToday: [
      `Black culinary history matters because food is one of the easiest places to enjoy Black culture without confronting Black labor. A dish can be loved while its makers are unnamed. A restaurant can borrow tradition while the community that created it faces displacement, low wages, or food insecurity.`,
      `It also gives readers a better language for heritage. Food traditions are not frozen recipes. They change through migration, money, health, religion, climate, taste, and political need. Black food history includes making do, but it should not be reduced to scraps. It includes mastery, business, pleasure, science, and imagination.`,
      `A reader should leave asking not only what is on the table, but who planted it, cooked it, served it, named it, sold it, and got remembered for it.`
    ],
    connected: [
      { href: '@root/generated/pages/black-church.html', title: 'The Black Church', description: 'Church meals and mutual aid are central to Black food and institution-building.' },
      { href: '@root/encyclopedia/great-migration.html', title: 'The Great Migration', description: 'Migration carried Southern foodways into new cities and markets.' },
      { href: '@root/encyclopedia/madam-cj-walker.html', title: 'Madam C.J. Walker', description: 'Connects Black entrepreneurship, branding, and community economies.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Freedom changed labor, land, and household economies after slavery.' }
    ],
    externalLinks: [
      { source: 'National Museum of African American History and Culture', title: 'Black Foodways and Cuisine', url: 'https://nmaahc.si.edu/explore/stories/black-foodways-and-cuisine' },
      { source: 'Smithsonian Magazine', title: 'How Enslaved Chefs Helped Shape American Cuisine', url: 'https://www.smithsonianmag.com/history/how-enslaved-chefs-helped-shape-american-cuisine-180969697/' },
      { source: 'Smithsonian Libraries and Archives', title: 'Bound to the Fire', url: 'https://www.si.edu/object/bound-fire-how-virginias-enslaved-cooks-helped-invent-american-cuisine-kelley-fanto-deetz%3Asiris_sil_1089720' },
      { source: 'Library of Congress', title: 'Foodways: Resources in the American Folklife Center', url: 'https://guides.loc.gov/foodways-folklife' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://nmaahc.si.edu/explore/stories/black-foodways-and-cuisine', 'https://www.si.edu/object/bound-fire-how-virginias-enslaved-cooks-helped-invent-american-cuisine-kelley-fanto-deetz%3Asiris_sil_1089720'],
      supportingSources: ['https://www.smithsonianmag.com/history/how-enslaved-chefs-helped-shape-american-cuisine-180969697/', 'https://guides.loc.gov/foodways-folklife'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'Enslaved cooks, appropriation, Aunt Jemima imagery, soul food framing, and claims about African, Indigenous, and European foodways reviewed.',
      materialCorrections: 'Replaced a narrow soul-food summary with a broader foodways history centered on labor, credit, migration, and preservation.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-dance',
    outputPath: 'encyclopedia/black-dance.html',
    fullDate: '2026-02-18',
    dailyDateLabel: 'February 18',
    subject: 'Black Dance Culture',
    category: 'Culture',
    type: 'Culture',
    dates: '1800s - present',
    tags: ['dance', 'culture', 'social-dance', 'gesture', 'appropriation'],
    summary: `Black dance culture is not only performance on a stage. It is social language: how people gather, flirt, mourn, battle, worship, celebrate, signal belonging, and make style travel. From ring shouts and tap to jazz dance, hand dancing, hip-hop, go-go, line dances, viral challenges, and concert work by artists such as Katherine Dunham and Alvin Ailey, Black movement has repeatedly reshaped American culture. The tension is familiar: dances born in Black communities are mocked, policed, copied, commercialized, and renamed. A real encyclopedia page has to follow the movement from community spaces to stages and screens, while asking who gets credit when the body becomes culture.`,
    timeline: [
      { date: '1700s-1800s', event: 'African-derived movement practices survive and change under slavery, religion, labor, and surveillance.' },
      { date: '1800s', event: 'Black performers shape theatrical dance even as minstrelsy distorts Black movement for white entertainment.' },
      { date: '1920s', event: 'Jazz dances such as the Charleston spread from Black performance and social spaces into national culture.' },
      { date: '1930s', event: 'Katherine Dunham conducts Caribbean fieldwork and builds a technique rooted in African diaspora movement.' },
      { date: '1958', event: 'Alvin Ailey founds Alvin Ailey American Dance Theater.' },
      { date: '1960s', event: 'Soul Train and local dance shows help circulate Black social dance on television.' },
      { date: '1970s-1980s', event: 'Hip-hop dance forms develop in New York and other cities through parties, battles, crews, and street culture.' },
      { date: '1990s-2000s', event: 'Regional dances from go-go, bounce, club, and hip-hop scenes move through music videos and the internet.' },
      { date: '2010s-present', event: 'Social media accelerates Black dance circulation while often separating dances from their creators.' }
    ],
    fullStory: [
      `Black dance culture begins with survival and invention under pressure. Enslaved Africans and their descendants carried movement vocabularies into the Americas even when drums, gatherings, and religious practices were restricted or watched. Movement became memory, worship, communication, play, and release. It could be communal, competitive, sacred, comic, erotic, or defiant depending on the space.`,
      `The history is not one straight line from Africa to TikTok. It is a series of adaptations across regions and institutions. Ring shouts, juba, tap, cakewalk, jazz dance, Lindy Hop, hand dancing, Chicago stepping, Detroit jit, New Orleans bounce, Memphis jookin, Baltimore club, hip-hop, house, krump, and line dances all come from specific communities and conditions. Some are stage forms. Some are social forms. Some move between both.`,
      `Minstrelsy complicates the story. White performers built a racist entertainment industry by caricaturing Black speech, music, and movement. At the same time, Black performers used theatrical spaces to work, innovate, and sometimes subvert the forms imposed on them. The cakewalk, for example, carries histories of parody, performance, and white misunderstanding. Black dance has often had to move through spaces that wanted the style without respecting the people.`,
      `In the 20th century, concert dance became a major site of Black artistic argument. Katherine Dunham combined performance with anthropology, drawing from Caribbean and African diaspora research to create a technique and body of work that changed modern dance. Pearl Primus, Alvin Ailey, Donald McKayle, Garth Fagan, and many others placed Black experience and diaspora movement on stages that had often treated European technique as universal.`,
      `Dance schools and theaters were not neutral gates. Black dancers trained where they could, created companies when existing institutions excluded them, and built repertories that refused the idea that Black movement belonged only in entertainment. Ailey's Revelations, Dunham's anthropological method, Primus's research-driven solos, and Mitchell's Dance Theatre of Harlem all made different arguments about technique, memory, and access. They showed that Black dance could be vernacular and classical, sacred and commercial, local and global.`,
      `Social dance carried a different but equally powerful authority. The Library of Congress and Smithsonian document how Black dancers and choreographers shaped American dance through both formal and community practices. In Washington, D.C., hand dancing, hip-hop, and go-go marked generations, neighborhoods, and sound worlds. These dances were not only steps. They told people where you were from, what music raised you, and how your body understood the beat.`,
      `Television, music video, and the internet changed the speed of circulation. Soul Train made Black dance visible in living rooms. Music videos turned regional movement into national style. Social media made a dance travel globally in hours. That speed can bring opportunity, but it also makes erasure easier. A dance created by a Black teenager can become famous through someone else's performance, branding, or sponsorship before the creator is named.`,
      `Appropriation is not only copying. Dance has always traveled, and Black communities borrow, remix, and transform too. The issue is power: who is punished for moving a certain way, who is paid, who is called innovative, who is treated as vulgar, and who gets to enter the archive. Black dance is praised as American culture after it becomes profitable, but Black dancers can still be disciplined in schools, clubs, and public spaces for the same expressiveness.`,
      `The fuller story honors both the stage and the party. Black dance culture is choreography, but it is also a circle at a cookout, a church aisle, a club floor, a parade route, a battle, a wedding line, a front porch, and a phone screen. The body remembers what the textbook often forgets.`
    ],
    quote: {
      text: `the more aware we all are of our heritage, the more forceful it will become`,
      cite: `Katherine Dunham, quoted by Library of Congress`
    },
    costImpact: [
      `The cost of Black dance culture has included caricature, theft, low pay, body policing, and archival neglect. Black performers were often asked to entertain institutions that refused them equal dignity. Social dancers created styles that generated enormous cultural value without contracts, credit, or ownership.`,
      `The impact is foundational. American concert dance, jazz, musical theater, hip-hop, music video, social media culture, and everyday gesture all carry Black movement. Dance has helped Black communities build identity across generations while giving the wider world new ways to move, gather, and feel time.`
    ],
    whyItMattersToday: [
      `Black dance matters today because movement is still one of the fastest ways Black creativity becomes public property. A dance can be detached from the block, club, crew, or child who made it and sold back as content. Naming origin is not about freezing culture. It is about refusing theft disguised as virality.`,
      `It also matters because dance is history carried in the body. Movement can preserve diaspora memory, regional identity, humor, spiritual practice, and resistance even when written records are thin. That makes dance a serious historical source, not just entertainment.`,
      `A reader should leave understanding that Black dance culture teaches through motion. It tells where people have been, what they survived, and how joy can be disciplined into art without losing its heat.`
    ],
    connected: [
      { href: '@root/generated/pages/alvin-ailey.html', title: 'Alvin Ailey', description: 'A central figure in bringing Black modern dance to global stages.' },
      { href: '@root/encyclopedia/black-fashion.html', title: 'Black Fashion and Cultural Appropriation', description: 'Another field where style travels from Black communities into commerce.' },
      { href: '@root/encyclopedia/aave.html', title: 'AAVE and Linguistic Culture', description: 'Language and movement both carry Black social knowledge.' },
      { href: '@root/generated/pages/arthur-mitchell.html', title: 'Arthur Mitchell', description: 'Connects ballet, institution-building, and Black dance access.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Black Dancers and Choreographers research guide', url: 'https://guides.loc.gov/black-dance' },
      { source: 'National Museum of African American History and Culture', title: 'Cultural Expressions', url: 'https://nmaahc.si.edu/explore/exhibitions/cultural-expressions' },
      { source: 'Smithsonian Center for Folklife and Cultural Heritage', title: 'Generations of African American Social Dance in D.C.', url: 'https://folklife.si.edu/magazine/freedom-sounds-generations-of-african-american-social-dance-in-dc-hand-dancing-hip-hop-and-go-go' },
      { source: 'Library of Congress', title: 'Katherine Dunham: A Life in Dance', url: 'https://www.loc.gov/collections/katherine-dunham/articles-and-essays/katherine-dunham-a-life-in-dance/' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://guides.loc.gov/black-dance', 'https://nmaahc.si.edu/explore/exhibitions/cultural-expressions'],
      supportingSources: ['https://folklife.si.edu/magazine/freedom-sounds-generations-of-african-american-social-dance-in-dc-hand-dancing-hip-hop-and-go-go', 'https://www.loc.gov/collections/katherine-dunham/articles-and-essays/katherine-dunham-a-life-in-dance/'],
      verifiedQuoteSource: 'Library of Congress Black Dancers and Choreographers guide quoting Katherine Dunham.',
      sensitiveClaimsReviewed: 'Appropriation, minstrelsy, viral dance credit, and claims about African diaspora movement continuity reviewed with non-monolithic wording.',
      materialCorrections: 'Expanded legacy viral-dance framing into a broader history of social dance, concert dance, gesture, and credit.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-fashion',
    outputPath: 'encyclopedia/black-fashion.html',
    fullDate: '2026-02-16',
    dailyDateLabel: 'February 16',
    subject: 'Black Fashion and Cultural Appropriation',
    category: 'Culture',
    type: 'Culture',
    dates: '1800s - present',
    tags: ['fashion', 'style', 'appropriation', 'hair', 'identity'],
    summary: `Black fashion is not only what people wear. It is a record of labor, survival, refusal, beauty, business, and being seen. Headwraps, Sunday best, zoot suits, denim, sneakers, streetwear, braids, church hats, hoop earrings, couture, and hip-hop style all carry histories of identity and power. The appropriation conversation can get flattened into "who is allowed to wear what." The deeper question is sharper: why are Black people punished for styles that become profitable, fashionable, or respectable when removed from Black bodies? This page follows Black style as artistry and archive, from dressmakers and designers to everyday communities whose looks changed the world.`,
    timeline: [
      { date: '1800s', event: 'Black dressmakers, laundresses, seamstresses, and tailors build skill under slavery and after emancipation.' },
      { date: '1868', event: 'Elizabeth Keckley publishes Behind the Scenes, documenting her life and work as a dressmaker and public figure.' },
      { date: '1930s-1940s', event: 'The zoot suit emerges from Black and Latino working-class style and becomes a flashpoint during wartime.' },
      { date: '1950s-1960s', event: 'Ann Lowe and other Black designers create high fashion while facing industry erasure.' },
      { date: '1958', event: 'Ebony Fashion Fair begins bringing high fashion to Black audiences and fundraising for Black communities.' },
      { date: '1966', event: 'Lois K. Alexander-Lane establishes the Harlem Institute of Fashion.' },
      { date: '1979', event: 'Alexander-Lane founds the Black Fashion Museum in Harlem.' },
      { date: '1980s-1990s', event: 'Designers and streetwear innovators such as Patrick Kelly, Willi Smith, Dapper Dan, Cross Colours, and others reshape fashion.' },
      { date: '2007', event: 'The Black Fashion Museum collection is donated to NMAAHC.' },
      { date: '2016-2017', event: 'The Museum at FIT presents Black Fashion Designers, highlighting more than 60 designers.' }
    ],
    fullStory: [
      `Black fashion history begins with constraint and invention. Under slavery, clothing could mark status, labor, surveillance, and control. After emancipation, dress became one way to claim dignity in public space. Sunday best, uniforms, work clothes, school clothes, lodge regalia, and church hats all carried messages about respectability, aspiration, community, and self-possession.`,
      `Black skill in clothing work was often hidden inside someone else's status. Elizabeth Keckley, who purchased freedom for herself and her son, became a noted Washington dressmaker and worked for Mary Todd Lincoln. Ann Lowe designed gowns for elite clients, including Jacqueline Bouvier Kennedy's wedding party, while her name was often omitted from public credit. Their stories show that Black fashion history includes technical mastery and business intelligence, not only style inspiration.`,
      `Fashion has also been a language of refusal. The zoot suit grew from Black and Latino working-class style and jazz culture. Its excess fabric and dramatic shape challenged wartime austerity, racial containment, and the demand that marginalized young people remain invisible. Smithsonian writing notes that the suit's political meaning came partly from claiming space. Clothing could become a public argument without a speech.`,
      `In the 20th century, Black designers and entrepreneurs built institutions to preserve what the mainstream industry ignored. Lois K. Alexander-Lane founded the Harlem Institute of Fashion and later the Black Fashion Museum. NMAAHC now holds that collection, which includes garments, accessories, costumes, and textiles created or worn by Black designers, makers, entertainers, and everyday people. The collection itself is an answer to erasure: if the industry will not remember, communities must archive themselves.`,
      `The Museum at FIT's Black Fashion Designers exhibition made another correction. It rejected the idea that there is one "Black style." Designers of African descent have worked in couture, sportswear, streetwear, millinery, tailoring, avant-garde design, African diasporic reference, accessible clothing, and luxury fashion. The point is not sameness. The point is that Black designers have shaped fashion while being treated as exceptions or trend sources rather than central makers.`,
      `Everyday style matters as much as famous names. A pressed suit for church, a school outfit chosen with care, a fresh haircut before a photograph, or a hat worn to a funeral can carry the same historical force as a runway garment. Under segregation, looking sharp could be protection and declaration at once. During the Black freedom struggle, denim, natural hair, African textiles, dark suits, choir robes, and uniforms all communicated different politics of dignity, militancy, faith, and group discipline.`,
      `Appropriation enters when style travels through unequal power. Cornrows, durags, hoop earrings, long nails, sneakers, grills, oversized silhouettes, and streetwear aesthetics have been called unprofessional, threatening, or low-class on Black people, then praised as edgy or chic elsewhere. Hair has been especially policed. Schools and workplaces have punished Black natural hair and protective styles while fashion magazines and runways borrow the look for novelty.`,
      `Fashion images also decide who gets imagined as modern. Magazines, department stores, costume collections, and museum archives have long shaped public taste. When Black designers and wearers are absent from those records, the absence can make later generations think innovation began only when white institutions noticed it.`,
      `The line between exchange and exploitation is not always simple. Black fashion itself is global, improvisational, and constantly borrowing. But power decides who gets punished, paid, copied, and named. When Black communities create style under pressure and companies profit without credit or opportunity, the issue is not inspiration. It is extraction.`,
      `Black fashion history is therefore not a list of trends. It is a history of making the body speak in a country that has tried to regulate Black visibility. Style can protect, provoke, seduce, mourn, celebrate, sell, and remember. It can also be taken. The work is to see the maker, not only the look.`
    ],
    costImpact: [
      `The cost of Black fashion has included erased authorship, workplace and school discipline, undercapitalized businesses, racialized beauty standards, and the theft of street and community style by larger industries. Black designers have had to fight for credit while Black consumers and workers often pay social penalties for the same looks fashion later sells.`,
      `The impact is global. Black style has shaped American elegance, streetwear, luxury fashion, music visuals, beauty industries, sportswear, hair culture, and digital aesthetics. It has also produced archives and institutions, from Ebony Fashion Fair to the Black Fashion Museum collection, that preserve what the market often forgets.`
    ],
    whyItMattersToday: [
      `Black fashion matters today because style is still a battleground over who gets to be seen. Dress codes, hair policies, luxury branding, influencer culture, and runway references all carry older questions about Black respectability, creativity, and ownership.`,
      `The appropriation debate matters most when it follows power rather than scolding individuals. Who created the style? Who was punished for it? Who profits? Who is called original? Who gets hired? Those questions move the conversation from taste to history.`,
      `A reader should leave understanding Black fashion as design, archive, business, and public language. It is not a costume closet for the culture. It is a record of people making beauty under watch.`
    ],
    connected: [
      { href: '@root/generated/pages/ann-lowe.html', title: 'Ann Lowe', description: 'A Black couturier whose work shows the cost of erased authorship.' },
      { href: '@root/generated/pages/elizabeth-keckley.html', title: 'Elizabeth Keckley', description: 'Connects fashion labor, freedom, and public reputation in the Civil War era.' },
      { href: '@root/encyclopedia/aave.html', title: 'AAVE and Linguistic Culture', description: 'Another Black cultural form borrowed while its originators are judged.' },
      { href: '@root/encyclopedia/black-dance.html', title: 'Black Dance Culture', description: 'Movement and dress often travel together through Black popular culture.' }
    ],
    externalLinks: [
      { source: 'National Museum of African American History and Culture', title: 'The Black Fashion Museum at NMAAHC', url: 'https://nmaahc.si.edu/explore/collection/black-fashion-museum' },
      { source: 'National Museum of African American History and Culture', title: 'Cultural Expressions', url: 'https://nmaahc.si.edu/explore/exhibitions/cultural-expressions' },
      { source: 'The Museum at FIT', title: 'Black Fashion Designers exhibition', url: 'https://exhibitions.fitnyc.edu/exhibitions-timeline/black-fashion-designers/' },
      { source: 'Smithsonian Magazine', title: 'A Brief History of the Zoot Suit', url: 'https://www.smithsonianmag.com/arts-culture/brief-history-zoot-suit-180958507/' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://nmaahc.si.edu/explore/collection/black-fashion-museum', 'https://nmaahc.si.edu/explore/exhibitions/cultural-expressions'],
      supportingSources: ['https://exhibitions.fitnyc.edu/exhibitions-timeline/black-fashion-designers/', 'https://www.smithsonianmag.com/arts-culture/brief-history-zoot-suit-180958507/'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'Appropriation framing, hair/style policing, erased designer credit, and zoot suit racial politics reviewed.',
      materialCorrections: 'Expanded legacy appropriation summary into a broader history of Black fashion labor, design, institutions, and cultural extraction.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-lives-matter',
    fullDate: '2026-06-30',
    dailyDateLabel: 'June 30',
    subject: 'Black Lives Matter',
    category: 'Movement',
    type: 'Movements',
    dates: '2013 - present',
    tags: ['movement', 'policing', 'social-media', 'organizing', 'black-lives-matter'],
    summary: `Black Lives Matter began as language written through grief, then became a network, a protest framework, and a global phrase for refusing anti-Black death as normal. Alicia Garza, Patrisse Cullors, and Opal Tometi helped shape it after George Zimmerman was acquitted in the killing of Trayvon Martin in 2013. But the movement cannot be understood only as a hashtag. It drew from older Black freedom struggles while using digital tools, decentralized organizing, queer Black feminist leadership, street protest, mutual aid, and cultural pressure in new ways. Its history includes power, disagreement, backlash, and transformation. The sentence matters because it names what institutions have repeatedly denied.`,
    timeline: [
      { date: 'Feb 26, 2012', event: 'Trayvon Martin is killed in Sanford, Florida.' },
      { date: 'Jul 13, 2013', event: 'George Zimmerman is acquitted, sparking grief and protest.' },
      { date: 'Jul 2013', event: 'Alicia Garza writes a public love letter to Black people; Patrisse Cullors shares #BlackLivesMatter; Opal Tometi helps build digital infrastructure.' },
      { date: '2014', event: 'The deaths of Michael Brown in Ferguson and Eric Garner in New York bring wider national attention.' },
      { date: '2015', event: 'Library of Congress begins archiving Black Lives Matter web presence and related protest material.' },
      { date: '2016', event: 'Movement for Black Lives releases a broad policy platform.' },
      { date: 'May 25, 2020', event: 'George Floyd is murdered by Minneapolis police officer Derek Chauvin.' },
      { date: '2020', event: 'Protests against anti-Black violence spread across the United States and globally.' },
      { date: '2023', event: 'Pew Research Center marks ten years of #BlackLivesMatter social-media activity.' }
    ],
    fullStory: [
      `Black Lives Matter began with a sentence, but the sentence carried centuries behind it. Trayvon Martin's killing in 2012 and George Zimmerman's acquittal in 2013 exposed familiar wounds: the presumption that Black children are threatening, the legal elasticity of self-defense when the victim is Black, and the public demand that Black grief prove itself reasonable before it is heard.`,
      `Alicia Garza wrote what she described as a love letter to Black people after the verdict. Patrisse Cullors shared the phrase as a hashtag. Opal Tometi helped build the online infrastructure that allowed the phrase to become a network. The founders' identities mattered. Black Lives Matter was shaped by Black women, including queer Black women and organizers attentive to immigrants, trans people, disabled people, workers, and people often pushed aside in older movement narratives.`,
      `The movement became nationally visible in 2014 after Michael Brown was killed by police in Ferguson, Missouri, and Eric Garner died after a New York police officer placed him in a chokehold. Ferguson became a turning point because sustained protest, police militarization, livestreams, local organizers, and national attention converged. The movement's decentralized form meant there was no single office that controlled every protest. That made it flexible and hard to contain, but also difficult for outsiders to understand.`,
      `Black Lives Matter drew from older traditions: anti-lynching activism, civil-rights direct action, Black Power, prison abolition, feminist organizing, LGBTQ activism, and community self-defense. It also used tools that earlier movements did not have. Hashtags, livestreams, cellphone video, and rapid online fundraising changed the speed at which evidence, grief, and mobilization traveled. The Library of Congress web archives recognize BLM as part of a larger record of digital-era protest.`,
      `The phrase grew far beyond the organization. Some people used it to refer to local chapters, some to the broader Movement for Black Lives, some to protests against police violence, and some simply to the moral claim that Black life should not be disposable. That breadth gave the phrase power, but it also produced confusion and conflict. Critics often treated every action under the phrase as if it came from one command center. Supporters sometimes disagreed over tactics, funding, leadership, abolition, electoral politics, and relationships with institutions.`,
      `Local organizing was often where the phrase became concrete. In city after city, activists pressed for police data, civilian review, bail support, budget changes, jail conditions, elected prosecutors, school discipline reform, and care for families after violence. Some campaigns produced policy shifts. Others ran into union power, court limits, mayoral caution, or public exhaustion. The movement's visibility did not mean organizers suddenly controlled the systems they were challenging.`,
      `In 2020, after Minneapolis police officer Derek Chauvin murdered George Floyd, protests spread across the United States and around the world. Pew Research later described the hashtag's scale across ten years, noting tens of millions of tweets and a dramatic surge in 2020. Corporations, schools, sports leagues, museums, and city governments adopted the language, sometimes with real policy consequences and sometimes with little more than branding. That tension is part of the movement's legacy.`,
      `Backlash also became central. Legislatures debated protest restrictions. Police unions and politicians framed the movement as anti-police. Conservative media turned the phrase into a threat. Internal financial controversies damaged trust in some national organizations. A serious page should not hide those tensions, but it should not let backlash define the movement either. Social movements are not pure objects. They are contested fields of grief, strategy, money, language, and power.`,
      `Black Lives Matter changed what could be said publicly about policing, anti-Black violence, abolition, mutual aid, and the value of Black life. Its deepest lesson may be that naming harm is itself a form of organizing. A sentence became a place to gather, argue, mourn, and demand.`
    ],
    quote: {
      text: `We need to love ourselves and fight for a world where Black lives matter.`,
      cite: `Alicia Garza, quoted by NMAAHC`
    },
    costImpact: [
      `The cost of Black Lives Matter has included arrests, surveillance, online harassment, family exposure, burnout, internal conflict, and the pain of repeatedly organizing around death. Families whose loved ones became public symbols often had to grieve while cameras, campaigns, and strangers claimed pieces of their story.`,
      `The impact is broad. The movement changed public language around police violence, expanded abolitionist and anti-carceral debates, influenced local policy campaigns, produced archives of digital protest, and made anti-Black state and vigilante violence harder to dismiss as isolated events.`
    ],
    whyItMattersToday: [
      `Black Lives Matter matters today because it changed the scale at which Black grief could become public evidence. Cellphone video alone does not create justice. Hashtags alone do not create policy. But together with organizing, they made denial more difficult and connected local pain to national and global patterns.`,
      `The movement also matters because it widened the frame of who counts as a movement subject. Its best language insisted that Black women, queer people, trans people, immigrants, disabled people, incarcerated people, and poor people were not side notes to Black freedom.`,
      `A reader should leave understanding that Black Lives Matter is not only a slogan to approve or reject. It is a chapter in the long argument over whether American institutions will treat Black life as fully human before death forces the question again.`
    ],
    connected: [
      { href: '@root/encyclopedia/mamie-till-mobley.html', title: 'Mamie Till-Mobley', description: 'Connects public grief, racial violence, and movement memory.' },
      { href: '@root/encyclopedia/beulah-mae-donald.html', title: 'Beulah Mae Donald', description: 'A legal-accountability fight after anti-Black violence.' },
      { href: '@root/generated/pages/charleston-church-shooting.html', title: 'Charleston Church Shooting', description: 'A later white supremacist attack that shaped public mourning and organizing.' },
      { href: '@root/encyclopedia/slave-patrols.html', title: 'Slave Patrols and American Policing', description: 'Historical context for debates about policing and racial control.' }
    ],
    externalLinks: [
      { source: 'Black Lives Matter', title: 'Herstory', url: 'https://blacklivesmatter.com/herstory/' },
      { source: 'National Museum of African American History and Culture', title: 'From Trayvon Martin to Emmett Till: Black Lives Matter', url: 'https://nmaahc.si.edu/explore/stories/trayvon-martin-emmett-till-black-lives-matter' },
      { source: 'Library of Congress', title: 'Black Lives Matter web archive', url: 'https://www.loc.gov/item/lcwaN0016241/' },
      { source: 'Pew Research Center', title: 'Social Media, Online Activism and 10 Years of #BlackLivesMatter', url: 'https://www.pewresearch.org/internet/2023/06/29/blacklivesmatter-turns-10/' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://blacklivesmatter.com/herstory/', 'https://nmaahc.si.edu/explore/stories/trayvon-martin-emmett-till-black-lives-matter'],
      supportingSources: ['https://www.loc.gov/item/lcwaN0016241/', 'https://www.pewresearch.org/internet/2023/06/29/blacklivesmatter-turns-10/'],
      verifiedQuoteSource: 'NMAAHC article quoting Alicia Garza.',
      sensitiveClaimsReviewed: 'Living founders, organizational scope, George Zimmerman acquittal, George Floyd murder, decentralized organizing, and internal controversy wording reviewed.',
      materialCorrections: 'Expanded daily hashtag summary into a history of digital organizing, queer Black feminist leadership, decentralized movement structure, backlash, and public memory.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-tech-pioneers',
    outputPath: 'encyclopedia/black-tech-pioneers.html',
    fullDate: '2026-02-20',
    dailyDateLabel: 'February 20',
    subject: 'Black Tech Pioneers',
    category: 'Science',
    type: 'Collective',
    dates: '1950s - present',
    tags: ['technology', 'computing', 'engineering', 'innovation', 'black-firsts'],
    summary: `Black technology history is often told as a list of hidden names. That recovery matters, but it is only the first step. Black engineers, mathematicians, programmers, and inventors helped build the systems that made modern computing, aerospace, personal computers, groupware, and digital infrastructure possible. Katherine Johnson calculated trajectories. Clarence "Skip" Ellis became the first African American to earn a PhD in computer science. Mark Dean helped shape the IBM PC and high-speed computing. Their stories also reveal the gatekeeping around who was imagined as technical. The work was never only genius. It was access, mentorship, patents, labs, credit, and the right to ask questions in rooms that were not built for them.`,
    timeline: [
      { date: '1953', event: 'Katherine Johnson begins work at NACA Langley in the segregated West Area Computing section.' },
      { date: '1960', event: 'Johnson coauthors a NASA technical report on orbital flight calculations.' },
      { date: '1962', event: 'John Glenn asks Johnson to verify electronic computer calculations for Friendship 7.' },
      { date: '1969', event: 'Clarence Ellis earns a PhD in computer science from the University of Illinois.' },
      { date: '1975', event: 'National Society of Black Engineers is founded to support Black engineering students and professionals.' },
      { date: '1979', event: 'Mark Dean joins IBM after graduating from the University of Tennessee.' },
      { date: '1981', event: 'IBM introduces the 5150 PC; Dean holds three of the original PC patents.' },
      { date: '1995', event: 'Dean becomes the first Black American IBM Fellow.' },
      { date: '1997', event: 'Ellis becomes the first African American elected a Fellow of the Association for Computing Machinery.' },
      { date: '2015', event: 'Johnson receives the Presidential Medal of Freedom.' }
    ],
    fullStory: [
      `Black tech history is not a contradiction. Black people were present in technical work long before the industry learned how to market diversity. The problem is that computing history often highlights machines, companies, and founders while treating the people who made calculations, standards, components, and systems as supporting cast. For Black pioneers, erasure could be doubled by race, gender, and job title.`,
      `That work required entering fields that often treated Black intelligence as an exception. Students needed math teachers, scholarships, lab access, mentors, and hiring doors that were not evenly available. Black engineers and programmers frequently had to prove competence twice: once through the work itself and again against institutional doubt. Their achievements therefore belong not only to individual brilliance, but to families, Black schools, professional societies, and civil-rights pressure that pushed technical workplaces open.`,
      `Katherine Johnson's work at NACA and NASA shows how computing once meant a person. She entered Langley in 1953, when Black women mathematicians worked in segregated conditions. Johnson asked questions, attended briefings, coauthored technical reports, calculated trajectories, and verified numbers for John Glenn's orbital flight. Her story is not simply that she was brilliant. It is that an institution depended on her precision while maintaining systems that had restricted Black women's opportunity.`,
      `Clarence "Skip" Ellis shows another path through computing. MIT's Black history archive identifies Ellis as the first African American to earn a PhD in computer science, in 1969, and the first African American elected a Fellow of the Association for Computing Machinery. His research included operating systems, parallelism, groupware, and collaboration technology. Those fields shaped how people and machines work together, which means his influence reaches into the everyday logic of networked work.`,
      `Mark Dean's work at IBM helps correct another blind spot. The personal computer is often remembered through company brands and consumer nostalgia. IBM's own history records that Dean joined the company in 1979, worked on the IBM PC, held three of the original PC patents, helped develop the ISA bus, and later contributed to a one-gigahertz processor. He became the first Black American IBM Fellow in 1995. Those are not symbolic achievements. They are infrastructure.`,
      `These stories also show that technology is collective. Johnson worked within teams of mathematicians and engineers. Ellis moved through universities, labs, and companies. Dean's patents and leadership mattered inside large research ecosystems. The myth of the lone tech genius often hides the collaborative nature of technical work and makes it easier to erase people who do not match the expected image of the inventor.`,
      `The archive is widening, but unevenly. NASA biographies, IBM institutional histories, university archives, oral histories, and professional organizations preserve different pieces of the record. Reading across them helps prevent one famous film, one patent list, or one corporate tribute from standing in for the whole field.`,
      `Access was a recurring barrier. Segregated schools, discriminatory hiring, lack of mentors, and the cost of advanced education shaped who could enter technical fields. Organizations such as the National Society of Black Engineers emerged because talent was not enough if students were isolated, underfunded, or pushed out. Pipeline language can sound mechanical, but for Black technologists it often means community, scholarship, peer support, and survival.`,
      `Black tech pioneers also challenge what counts as innovation. A trajectory calculation, a bus architecture, a collaboration system, a patent, a research report, a standard, or a mentorship network can all shape the future. Some achievements become products. Others become conditions that make products possible. The archive needs both.`,
      `The point of this page is not to pretend the tech industry has overcome exclusion. It has not. Black workers remain underrepresented in many technical roles, and algorithmic systems can reproduce racial harm. The better lesson is that Black people helped build modern technology even when modern technology did not build fair pathways for them.`
    ],
    costImpact: [
      `The cost included segregated workplaces, isolation in advanced programs, stolen or delayed credit, and the pressure to prove competence in environments where mistakes by Black professionals were rarely treated as ordinary. Black technologists often had to build networks of support while doing the work itself.`,
      `The impact is built into modern life. Spaceflight calculations, personal computing architecture, collaboration systems, engineering societies, patents, research reports, and technical mentorship all carry Black contributions. These pioneers changed not only what machines could do, but who could imagine themselves as builders.`
    ],
    whyItMattersToday: [
      `Black tech pioneers matter today because representation in technology is not only about who gets hired now. It is about correcting the origin story. If people are taught that computing was built only by white men in garages or corporate labs, they inherit a false map of innovation.`,
      `Their history also asks harder questions about current systems. Who gets access to advanced math? Who is mentored? Who receives patent credit? Who is promoted from technical work into technical leadership? Who is harmed by the technologies being built?`,
      `A reader should leave understanding that Black technologists were not visitors to the future. They were already helping design it.`
    ],
    connected: [
      { href: '@root/encyclopedia/katherine-johnson.html', title: 'Katherine Johnson', description: 'A central figure in NASA mathematics and human spaceflight.' },
      { href: '@root/generated/pages/annie-easley.html', title: 'Annie Easley', description: 'A NASA computer scientist and programmer whose work bridges energy and aerospace.' },
      { href: '@root/generated/pages/benjamin-banneker.html', title: 'Benjamin Banneker', description: 'Connects early Black mathematics and astronomy to later technical history.' },
      { href: '@root/encyclopedia/shirley-ann-jackson.html', title: 'Shirley Ann Jackson', description: 'Another Black scientist whose career reshaped advanced research and institutions.' }
    ],
    externalLinks: [
      { source: 'NASA', title: 'Katherine Johnson biography', url: 'https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/' },
      { source: 'IBM', title: 'Mark Dean', url: 'https://www.ibm.com/history/mark-dean' },
      { source: 'MIT Black History', title: 'Clarence Ellis, 1975', url: 'https://blackhistory.mit.edu/archive/clarence-ellis-1975' },
      { source: 'National Society of Black Engineers', title: 'NSBE mission and history', url: 'https://nsbe.org/about/' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/', 'https://www.ibm.com/history/mark-dean'],
      supportingSources: ['https://blackhistory.mit.edu/archive/clarence-ellis-1975', 'https://nsbe.org/about/'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'First-Black PhD and ACM Fellow claims for Clarence Ellis, IBM patent claims for Mark Dean, Katherine Johnson mission claims, and NSBE founding framing reviewed.',
      materialCorrections: 'Expanded legacy name-list framing into a collective technology history focused on infrastructure, access, credit, and institutions.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-wall-street',
    outputPath: 'encyclopedia/black-wall-street.html',
    fullDate: '2026-05-31',
    dailyDateLabel: 'May 31',
    subject: 'Greenwood / Black Wall Street',
    category: 'Economics',
    type: 'Places',
    dates: 'c. 1906 - present',
    tags: ['greenwood', 'tulsa', 'black-wall-street', 'wealth', 'massacre'],
    summary: `Greenwood was not important only because white mobs destroyed it. It was important because Black people built it. By 1921, Tulsa's Greenwood District held homes, churches, doctors, lawyers, hotels, theaters, restaurants, newspapers, and more than one hundred Black-owned businesses. Segregation forced Black dollars inward, but residents turned constraint into institution-building. The Tulsa Race Massacre was an attack on people and on a visible claim to Black prosperity. Remembering Greenwood only through flames lets the attackers control the story. The deeper history begins before May 31, 1921, follows the destruction honestly, and then follows the rebuilding that officials tried to obstruct.`,
    timeline: [
      { date: 'c. 1906', event: 'O.W. Gurley and other Black entrepreneurs help develop land and business life in Greenwood.' },
      { date: '1910s', event: 'Tulsa grows as an oil-boom city while segregation shapes Greenwood into a self-contained Black economy.' },
      { date: '1921', event: 'Greenwood contains businesses, homes, churches, schools, hotels, newspapers, and professional offices.' },
      { date: 'May 30, 1921', event: 'Dick Rowland and Sarah Page encounter each other in a Tulsa elevator; rumors spread.' },
      { date: 'May 31, 1921', event: 'A white mob gathers at the courthouse after Rowland is arrested.' },
      { date: 'May 31-Jun 1, 1921', event: 'White mobs attack Greenwood, looting, burning, shooting, and destroying much of the district.' },
      { date: 'Jun 1921', event: 'Thousands of Black residents are detained or left homeless; the Red Cross leads relief work.' },
      { date: '1920s', event: 'Greenwood residents rebuild despite insurance denials and city obstruction.' },
      { date: '2001', event: 'The Oklahoma commission report documents historical facts and calls for repair.' },
      { date: '2018-present', event: 'Tulsa renews investigations into possible mass graves connected to the massacre.' }
    ],
    fullStory: [
      `Greenwood's story has to begin with building. The neighborhood in North Tulsa became one of the most prominent Black business districts in the United States. The phrase Black Wall Street captured its reputation, but the community was not a metaphor. It was a place where people bought groceries, saw doctors, attended church, read newspapers, watched films, stayed in hotels, and built homes.`,
      `Segregation shaped that economy. White Tulsa restricted where Black residents could live, work, and spend money. Those restrictions were unjust, but Greenwood residents made an internal economy out of necessity. Tulsa City-County Library notes that by 1921 Greenwood contained 108 Black-owned businesses. Buying Black was not only ideology. It was survival, circulation, and community development in a city that did not offer equal access elsewhere.`,
      `The prosperity was visible, and visibility drew resentment. Tulsa was an oil-boom city, and land mattered. White supremacy, jealousy, policing, land hunger, and the national climate after World War I all fed the danger around Greenwood. Black military service, labor unrest, lynching, and a resurgent Ku Klux Klan shaped the wider atmosphere. Greenwood's success was not protected by law simply because it was successful.`,
      `The immediate spark came after Dick Rowland, a young Black man, encountered Sarah Page, a white elevator operator, on May 30, 1921. The details remain uncertain. Rumors escalated. Rowland was arrested. A white mob gathered at the courthouse. Black men, aware of lynching danger, came to help protect him. A confrontation turned violent, and the violence moved toward Greenwood.`,
      `In the early hours of June 1, white mobs invaded Greenwood. They looted and burned homes and businesses. Black residents defended themselves but were outnumbered and overwhelmed. The Tulsa Historical Society records that 35 city blocks lay in ruins, more than 800 people were treated for injuries, contemporary death counts began at 36, and historians now believe as many as 300 people may have died. The American Red Cross found thousands in need of relief.`,
      `Authorities did not simply fail in a neutral way. The 2001 commission report found that officials deputized white men, supplied arms to white individuals, detained Black residents, and did not adequately protect Greenwood. Insurance companies refused many claims by calling the destruction a riot. City officials attempted zoning changes that would have made rebuilding harder. The massacre was followed by policy choices that deepened the harm.`,
      `Property records and survivor testimony show why those choices mattered. A burned business was not only a storefront. It could be a family's savings, an employee's wages, a child's inheritance, a church's meeting place, and proof that Black people could build outside white control. When insurers refused claims and officials blamed Black residents, the city helped convert violence into lasting economic loss. The massacre destroyed capital, but denial protected the people and institutions that had helped destroy it.`,
      `Greenwood residents rebuilt anyway. That part of the story is essential. The district's later life never fully erased the losses, and urban renewal, highway construction, and disinvestment later damaged the community again. But the people who returned after 1921 refused to let the massacre be the final sentence. Rebuilding was a form of resistance.`,
      `The popular version often asks how a place like Greenwood could be destroyed. The better question is why a country allowed Black prosperity to be treated as a threat. Greenwood was targeted because it was full of life, not because it was empty. The massacre was an attack on a community's right to build, own, gather, and remember.`
    ],
    quote: {
      text: `NO ONE KNOWS`,
      cite: `American Red Cross report wording highlighted by National Archives exhibit`
    },
    costImpact: [
      `The cost included lives, homes, businesses, churches, schools, records, generational wealth, and safety. Residents lost property that insurance often refused to cover. Thousands were displaced or detained. Families carried trauma and the burden of rebuilding in a city that had helped expose them to destruction.`,
      `The impact reaches beyond Tulsa. Greenwood has become a national symbol of Black entrepreneurship and of the violence that can meet Black prosperity. It also forces discussions of reparations, land, records, insurance, and public memory to move from abstraction to a specific destroyed neighborhood.`
    ],
    whyItMattersToday: [
      `Greenwood matters today because Black wealth is often discussed as if it simply failed to appear. Greenwood shows what Black communities built under segregation and what racial violence, policy, and denial could take. The wealth gap is not only about individual choices. It is also about extraction and destruction.`,
      `The story also matters because memory has consequences. Calling the massacre a riot helped shift blame and block insurance claims. Recovering the language of massacre, investigating graves, and teaching Greenwood's prosperity are part of repairing a public record that was deliberately distorted.`,
      `A reader should leave remembering the businesses before the fire and the rebuilding after it. Destruction is only one chapter of Greenwood's history, not the whole book.`
    ],
    connected: [
      { href: '@root/encyclopedia/tulsa-massacre.html', title: 'Tulsa Race Massacre', description: 'The attack that destroyed much of Greenwood in 1921.' },
      { href: '@root/encyclopedia/sarah-rector.html', title: 'Sarah Rector', description: 'Connects Oklahoma, Black wealth, land, and predatory control.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'Earlier Black institution-building and white backlash after emancipation.' },
      { href: '@root/encyclopedia/black-press.html', title: 'The Black Press and Media', description: 'Greenwood\'s newspapers were part of Black community infrastructure.' }
    ],
    externalLinks: [
      { source: 'Tulsa Historical Society and Museum', title: '1921 Tulsa Race Massacre', url: 'https://tulsahistory.org/exhibit/1921-tulsa-race-massacre/' },
      { source: 'Oklahoma Historical Society', title: 'Tulsa Race Massacre resources', url: 'https://www.okhistory.org/learn/tulsaracemassacre' },
      { source: 'National Archives Museum', title: 'Black Wall Street: 100 Years Since the Tulsa Race Massacre', url: 'https://visit.archives.gov/whats-on/explore-exhibits/black-wall-street-100-years-tulsa-race-massacre' },
      { source: 'Tulsa City-County Library', title: 'Black Wall Street', url: 'https://www.tulsalibrary.org/black-wall-street' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://tulsahistory.org/exhibit/1921-tulsa-race-massacre/', 'https://www.okhistory.org/learn/tulsaracemassacre'],
      supportingSources: ['https://visit.archives.gov/whats-on/explore-exhibits/black-wall-street-100-years-tulsa-race-massacre', 'https://www.tulsalibrary.org/black-wall-street'],
      verifiedQuoteSource: 'National Archives exhibit quoting American Red Cross report.',
      sensitiveClaimsReviewed: 'Death toll range, official complicity, insurance denial framing, Dick Rowland/Sarah Page uncertainty, and business-count claims reviewed.',
      materialCorrections: 'Centered Greenwood before and after the massacre, rather than letting destruction define the entire page.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'black-women-in-politics',
    outputPath: 'encyclopedia/black-women-in-politics.html',
    dailyDateLabel: 'Encyclopedia',
    subject: 'Black Women in Politics',
    category: 'Politics',
    type: 'Collective',
    dates: '1868 - present',
    tags: ['politics', 'women', 'voting-rights', 'representation', 'black-firsts'],
    summary: `Black women built American democracy while being repeatedly told to wait their turn. They organized against slavery, documented lynching, built clubs, marched for suffrage, registered voters under terror, challenged party credentials, ran for office, wrote legislation, and governed communities before institutions fully admitted them. The story is not only a march from exclusion to representation. It is a history of labor that made representation possible. From Frances Ellen Watkins Harper, Mary Church Terrell, Ida B. Wells, and Fannie Lou Hamer to Shirley Chisholm, Barbara Jordan, Carol Moseley Braun, Kamala Harris, and many local leaders, Black women have treated politics as survival work, community work, and power work all at once.`,
    timeline: [
      { date: '1868', event: 'Frances Ellen Watkins Harper helps found the American Woman Suffrage Association.' },
      { date: '1896', event: 'National Association of Colored Women is founded, with leaders including Mary Church Terrell.' },
      { date: '1913', event: 'Ida B. Wells challenges racist segregation in the Washington suffrage parade.' },
      { date: '1920', event: 'The Nineteenth Amendment is ratified, but Black women in the South still face voter suppression.' },
      { date: '1964', event: 'Fannie Lou Hamer testifies before the Democratic National Convention credentials committee.' },
      { date: '1968', event: 'Shirley Chisholm is elected the first Black woman in Congress.' },
      { date: '1972', event: 'Chisholm runs for the Democratic presidential nomination.' },
      { date: '1974', event: 'Barbara Jordan becomes a national constitutional voice during Watergate.' },
      { date: '1992', event: 'Carol Moseley Braun becomes the first Black woman elected to the U.S. Senate.' },
      { date: '2021', event: 'Kamala Harris becomes the first woman, first Black person, and first South Asian American vice president.' }
    ],
    fullStory: [
      `Black women in politics did not begin with elected office. They began wherever decisions about survival were being made. Enslaved women resisted slavery, protected families, carried information, and shaped community life without formal rights. Free Black women organized churches, schools, mutual aid, conventions, and antislavery campaigns. Their politics often had to work outside the ballot because law kept the ballot away.`,
      `After the Civil War, Reconstruction opened possibilities and exposed limits. Black men gained constitutional voting rights through the Fifteenth Amendment, though those rights were violently attacked. Women were still excluded from federal voting rights. Black women advocated for citizenship while navigating racism in white suffrage circles and sexism in Black political spaces. Frances Ellen Watkins Harper and Mary Church Terrell insisted that race and gender could not be separated without lying about Black women's lives.`,
      `Ida B. Wells made that conflict visible in 1913 when organizers of the national suffrage parade tried to segregate Black women. Wells refused to disappear into the back. Her action showed that even movements for rights could reproduce racial hierarchy. The Nineteenth Amendment in 1920 did not deliver the vote equally. Black women in the South still faced poll taxes, literacy tests, intimidation, job loss, and violence.`,
      `Grassroots voting-rights work made the next breakthroughs possible. Fannie Lou Hamer, Ella Baker, Septima Clark, Diane Nash, and thousands of less famous women organized citizenship schools, canvassed, trained, cooked, housed, strategized, and confronted terror. Hamer's 1964 testimony against the exclusionary Mississippi Democratic Party showed how a sharecropper from Ruleville could expose national hypocrisy better than polished officials.`,
      `Elected office brought another kind of battle. Shirley Chisholm entered Congress in 1969 as the first Black woman elected to the House. U.S. House history records how she faced both racism and sexism while building a legislative career focused on poor and working-class people, children, education, food assistance, and antiwar politics. Her 1972 presidential campaign did not win the nomination, but it widened the imagination of American politics.`,
      `The path from organizing to office was never automatic. Black women candidates often entered races without party machinery, donor confidence, or media assumptions of legitimacy. They faced questions about electability that were really questions about race, gender, class, and who voters were imagined to be. When they won, they still had to turn symbolic firsts into committee assignments, budgets, staff, legislation, and constituent service. Representation was only the doorway.`,
      `Barbara Jordan followed a different style. She worked through institutional power, legal argument, and constitutional authority. Her Watergate statement made her a national figure, but it was grounded in years of Texas politics and legislative strategy. The House's own history of Black women in Congress shows that Chisholm, Jordan, Yvonne Burke, Cardiss Collins, and Katie Hall had to fight for committee power, party recognition, and policy influence in a Congress not built for them.`,
      `The story continued through mayors, state legislators, judges, cabinet officials, senators, organizers, and vice presidential power. Carol Moseley Braun's Senate victory in 1992 mattered because the Senate had been an almost entirely white male institution. Kamala Harris's vice presidency mattered as another barrier broken, while also reminding readers that one first cannot substitute for a whole political infrastructure.`,
      `Black women in politics have often been praised after they deliver votes and ignored when they demand power. The fuller history insists on both: the grassroots labor and the elected office, the public speech and the meeting notes, the campaign and the childcare, the law and the kitchen table. Democracy has survived in part because Black women kept doing political work before the country agreed to call it leadership.`
    ],
    quote: {
      text: `I intend to focus attention on the nation's problems.`,
      cite: `Shirley Chisholm, quoted by U.S. House History`
    },
    costImpact: [
      `The cost has included violence, ridicule, underfunding, exclusion from party leadership, voter suppression, threats, and the expectation that Black women will save democracy without receiving equal authority inside it. Grassroots organizers often paid with jobs, housing, safety, health, and time.`,
      `The impact is structural. Black women expanded voting rights, built civic institutions, forced parties to answer excluded communities, passed legislation, chaired committees, ran for president, served in the Senate and vice presidency, and trained generations of organizers and voters.`
    ],
    whyItMattersToday: [
      `Black women in politics matter today because representation is often celebrated without supporting the organizing that makes it possible. Campaigns praise Black women voters after elections, but the deeper question is whether Black women have resources, protection, agenda-setting power, and room to govern.`,
      `Their history also corrects the idea that democracy is maintained mainly by formal institutions. Black women have repeatedly defended democratic practice from outside those institutions, then entered them and changed what they could do.`,
      `A reader should leave understanding that Black women did not arrive late to politics. The country arrived late to recognizing their political labor.`
    ],
    connected: [
      { href: '@root/generated/pages/fannie-lou-hamer-testimony.html', title: 'Fannie Lou Hamer\'s Testimony', description: 'Grassroots voting-rights leadership challenging national party power.' },
      { href: '@root/encyclopedia/barbara-jordan.html', title: 'Barbara Jordan', description: 'A constitutional voice and pathbreaker in Congress.' },
      { href: '@root/encyclopedia/shirley-chisholm.html', title: 'Shirley Chisholm', description: 'The first Black woman in Congress and a presidential candidate.' },
      { href: '@root/generated/pages/voting-rights-act.html', title: 'Voting Rights Act of 1965', description: 'Federal enforcement shaped by the organizing of Black women and men.' }
    ],
    externalLinks: [
      { source: 'U.S. House History, Art & Archives', title: 'To Fight Doubly Hard', url: 'https://history.house.gov/Exhibitions-and-Publications/BAIC/Historical-Essays/Permanent-Interest/Fight-Doubly-Hard/' },
      { source: 'U.S. House History, Art & Archives', title: 'The First African-American Woman Elected to Congress', url: 'https://history.house.gov/historicalhighlight/detail/37113' },
      { source: 'National Women\'s History Museum', title: 'Fannie Lou Hamer', url: 'https://www.womenshistory.org/education-resources/biographies/fannie-lou-hamer' },
      { source: 'U.S. House History, Art & Archives', title: 'Shirley Chisholm biography', url: 'https://history.house.gov/People/Detail/10918' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://history.house.gov/Exhibitions-and-Publications/BAIC/Historical-Essays/Permanent-Interest/Fight-Doubly-Hard/', 'https://history.house.gov/historicalhighlight/detail/37113'],
      supportingSources: ['https://www.womenshistory.org/education-resources/biographies/fannie-lou-hamer', 'https://history.house.gov/People/Detail/10918'],
      verifiedQuoteSource: 'U.S. House History historical highlight quoting Shirley Chisholm.',
      sensitiveClaimsReviewed: 'First claims, Nineteenth Amendment limits, voter suppression, Black women congressional history, and Harris vice-presidential firsts reviewed.',
      materialCorrections: 'Expanded legacy list into a deeper collective political history centered on grassroots work, elected office, and institutional power.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style encyclopedia-only page, ledger record, internal links, 4 external links, depth validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'booker-t-washington',
    fullDate: '2026-05-11',
    dailyDateLabel: 'May 11',
    subject: 'Booker T. Washington',
    category: 'Education',
    type: 'People',
    dates: '1856 - 1915',
    tags: ['education', 'tuskegee', 'reconstruction', 'atlanta-compromise', 'black-leadership'],
    summary: `Booker T. Washington built power through a difficult bargain. Born enslaved in Virginia, he became the founding principal of Tuskegee Institute and one of the most influential Black leaders in the United States. He raised money, built buildings, trained students, advised presidents, and argued for industrial education and economic self-help. He also urged public compromise with segregation in ways that drew sharp criticism from W.E.B. Du Bois, Ida B. Wells, and others. Washington's story is not simple hero or sellout. It is a study in institution-building under white supremacy, the costs of accommodation, and the question Black leaders have faced again and again: what can be built when open demands may bring violent backlash?`,
    timeline: [
      { date: 'Apr 5, 1856', event: 'Born enslaved in Franklin County, Virginia.' },
      { date: '1865', event: 'Moves with his family to Malden, West Virginia, after emancipation.' },
      { date: '1872', event: 'Enrolls at Hampton Normal and Agricultural Institute.' },
      { date: '1881', event: 'Becomes founding principal of Tuskegee Normal and Industrial Institute.' },
      { date: '1895', event: 'Delivers the Atlanta Exposition Address, later called the Atlanta Compromise.' },
      { date: '1900', event: 'Helps found the National Negro Business League.' },
      { date: '1901', event: 'Publishes Up From Slavery.' },
      { date: 'Oct 16, 1901', event: 'Dines at the White House with President Theodore Roosevelt, provoking racist backlash.' },
      { date: '1915', event: 'Dies at Tuskegee.' }
    ],
    fullStory: [
      `Booker T. Washington was born into slavery in Virginia in 1856 and came of age during emancipation and Reconstruction. His early life included work in salt furnaces and coal mines, hunger for education, and a long journey to Hampton Institute. Those details became central to the story he later told about himself: discipline, labor, self-help, and education as a path from slavery into institution-building.`,
      `At Hampton, Washington absorbed the educational philosophy of Samuel Chapman Armstrong, who emphasized industrial training, order, moral discipline, and practical labor. That model shaped Washington's leadership at Tuskegee, where he arrived in 1881. Tuskegee began with little more than authorization, a small appropriation, and community hope. Lewis Adams, a formerly enslaved craftsman and local leader, played a crucial role in securing the school through political negotiation. Washington became the figure who built it into a national institution.`,
      `Tuskegee's early years were physically demanding. Students helped build the campus, made bricks, farmed, studied trades, and followed a rigid schedule. Washington used this labor to teach skills and to stretch scarce resources. He also became a master fundraiser, speaking to white philanthropists and Northern donors who were often willing to support Black industrial education but not Black political equality. That was the bargain at the center of his career.`,
      `The Atlanta Exposition Address in 1895 made Washington nationally famous. Speaking to a largely white audience, he urged Black Southerners to focus on industrial labor, economic development, and cooperation with white neighbors rather than immediate agitation for social equality. The phrase "Atlanta Compromise" came later, but the controversy was immediate and lasting. White leaders praised him because his message seemed to reduce political threat. Many Black listeners were proud to see a Black educator receive national attention. Others worried that his accommodation gave segregation moral cover.`,
      `Washington's public philosophy did not mean he was inactive. He built Tuskegee, supported Black business through the National Negro Business League, advised presidents, influenced appointments, and quietly funded some legal challenges to segregation. That hidden side matters because it complicates the caricature of total surrender. But secrecy also reveals the limits of his strategy. If anti-segregation work had to be quiet while public speech reassured white power, the cost of accommodation remained real.`,
      `Critics such as W.E.B. Du Bois argued that Washington's approach asked Black people to give up political power, civil rights, and higher education in exchange for economic opportunity that white supremacy could still deny. Ida B. Wells and others challenged the idea that hard work alone could answer lynching, disfranchisement, and racial terror. The debate was not petty rivalry. It was a serious argument over survival, strategy, class, education, and power.`,
      `Washington's influence was enormous. Presidents listened. Donors gave. Tuskegee grew. Students left with training that could support families and communities. Yet his rise also concentrated power. He could influence Black newspapers, appointments, and leadership networks, sometimes punishing critics. That side belongs in the story too. Institution-building can create opportunity and gatekeeping at the same time.`,
      `Washington died in 1915, before the Great Migration, before the Harlem Renaissance, before the modern civil-rights movement, and before Tuskegee's later scientific fame became associated with George Washington Carver and others. His legacy remains difficult because he worked under brutal constraints and made choices that still raise hard questions. The fuller history does not require readers to choose one verdict. It asks them to see the school he built, the compromise he made, the criticism he earned, and the white supremacist world that shaped the choices available to him.`
    ],
    quote: {
      text: `cast down your bucket where you are`,
      cite: `Booker T. Washington, Atlanta Exposition Address, 1895`
    },
    costImpact: [
      `Washington's strategy cost him credibility with many Black intellectuals and activists who believed accommodation strengthened segregation. His public caution could make white donors comfortable while Black communities faced disfranchisement, lynching, and poverty. Students and staff also lived under an educational regime that prized discipline and labor sometimes at the expense of broader academic possibility.`,
      `The impact was also real. Tuskegee trained thousands, anchored Black education in Alabama, produced teachers and skilled workers, and became a major institution. Washington's fundraising and political networks shaped Black education and business across the South, even as his philosophy remained contested.`
    ],
    whyItMattersToday: [
      `Washington matters today because debates over education, respectability, economic self-help, protest, and institutional funding have not disappeared. Communities still argue over whether survival requires compromise, whether compromise becomes surrender, and who pays the price for public moderation.`,
      `His story also reminds readers that Black leaders have often had to build under surveillance and threat. It is easy to judge strategy from a distance. It is harder to understand the danger, money, violence, and dependency around every public choice. Understanding that context does not erase criticism. It makes the criticism more historically serious.`,
      `A reader should leave with Washington in full scale: builder, fundraiser, educator, compromiser, power broker, and contested leader in a country that made every path toward Black advancement dangerous.`
    ],
    connected: [
      { href: '@root/generated/pages/web-du-bois.html', title: 'W.E.B. Du Bois', description: 'Washington\'s most famous critic and a different vision of Black education and rights.' },
      { href: '@root/encyclopedia/ida-b-wells.html', title: 'Ida B. Wells', description: 'A journalist and anti-lynching activist who challenged accommodation with white violence.' },
      { href: '@root/encyclopedia/hbcus.html', title: 'HBCUs', description: 'Places Tuskegee inside the wider history of Black higher education.' },
      { href: '@root/encyclopedia/mis-education.html', title: 'The Mis-Education of the Negro', description: 'A later critique of education shaped by power and racial ideology.' }
    ],
    externalLinks: [
      { source: 'Tuskegee University', title: 'Booker T. Washington', url: 'https://www.tuskegee.edu/legacy/booker-t-washington.html' },
      { source: 'Tuskegee University', title: 'History and Mission', url: 'https://www.tuskegee.edu/explore/History-and-Mission.html' },
      { source: 'Library of Congress', title: 'Atlanta Exposition Speech manuscript', url: 'https://www.loc.gov/item/mss44669_01' },
      { source: 'National Park Service', title: 'Booker T. Washington and Theodore Roosevelt', url: 'https://www.nps.gov/thri/bookertwashington.htm' }
    ],
    research: {
      status: 'batch-4-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.tuskegee.edu/legacy/booker-t-washington.html', 'https://www.loc.gov/item/mss44669_01'],
      supportingSources: ['https://www.tuskegee.edu/explore/History-and-Mission.html', 'https://www.nps.gov/thri/bookertwashington.htm'],
      verifiedQuoteSource: 'Library of Congress Atlanta Exposition Address manuscript and recording context.',
      sensitiveClaimsReviewed: 'Enslaved birth, Tuskegee founding roles, Atlanta Compromise interpretation, quiet anti-segregation funding, criticism by Du Bois/Wells, and White House dinner backlash reviewed.',
      materialCorrections: 'Expanded daily debate framing into a full institution-building and accommodation-strategy account.',
      finalStatus: 'Batch 4 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = {
  ENTRIES,
};
