const RESEARCH_DATE = '2026-08-14';

const ENTRIES = [
  {
    encyclopediaSlug: 'shirley-ann-jackson',
    outputPath: 'encyclopedia/shirley-ann-jackson.html',
    fullDate: '2026-03-19',
    dailyDateLabel: 'March 19',
    subject: 'Dr. Shirley Ann Jackson',
    category: 'Physics & Scientific Leadership',
    type: 'People',
    dates: '1946 - present',
    tags: ['science', 'physics', 'mit', 'nuclear-regulation', 'technology'],
    summary: `Shirley Ann Jackson is often introduced through firsts: first Black woman to earn a doctorate from MIT, first woman and first Black person to chair the Nuclear Regulatory Commission, first Black woman to lead a top-ranked research university. Those firsts matter, but they can make the story sound smoother than it was. Jackson entered MIT in 1964 as one of only a handful of Black students in her class, studied physics in rooms that could be socially hostile, helped push MIT toward stronger Black student recruitment after Martin Luther King Jr.'s assassination, then moved through laboratories, federal regulation, and university leadership. Her page matters because it shows science as discovery and institution-building at once.`,
    timeline: [
      { date: 'Aug 5, 1946', event: 'Born in Washington, D.C.' },
      { date: '1964', event: 'Graduates from Roosevelt High School as valedictorian and enters MIT.' },
      { date: '1968', event: 'Earns an S.B. in physics from MIT.' },
      { date: '1968', event: 'Helps MIT Black students press for recruitment and support programs after Martin Luther King Jr. is assassinated.' },
      { date: '1973', event: 'Earns a Ph.D. in theoretical elementary particle physics from MIT.' },
      { date: '1976-1991', event: 'Conducts research at AT&T Bell Laboratories.' },
      { date: '1991-1995', event: 'Serves as professor of physics at Rutgers University.' },
      { date: '1995', event: 'Becomes chair of the U.S. Nuclear Regulatory Commission.' },
      { date: '1999', event: 'Becomes president of Rensselaer Polytechnic Institute.' },
      { date: '2015', event: 'Receives the National Medal of Science.' },
      { date: '2022', event: 'Concludes her RPI presidency and becomes president emerita.' }
    ],
    fullStory: [
      `Shirley Ann Jackson's story begins before the titles. It begins with a child in Washington, D.C., curious about the natural world and encouraged to ask hard questions. She grew up in a country where Black children were often told, directly and indirectly, that advanced science was not imagined for them. Her family expected more. Teachers recognized her ability. By the time she graduated from Roosevelt High School as valedictorian in 1964, she had already chosen physics, one of the least welcoming fields for a Black woman in the United States.`,
      `MIT gave Jackson opportunity and isolation at the same time. She arrived as one of only a few Black students in her class. Accounts from MIT and the American Physical Society describe the loneliness and exclusion she faced, including classmates who did not always want to study with her. That detail matters because physics is often described as pure merit. In real life, who gets study partners, mentoring, confidence, and belonging can shape who survives the field.`,
      `Jackson did not only survive MIT. She helped change it. After the assassination of Martin Luther King Jr. in April 1968, Jackson and other Black students pressed the institute to recruit and support more Black students. MIT's later accounts connect that student organizing to efforts that increased Black enrollment and helped build programs such as Project Interphase. Jackson was doing this while completing serious scientific training. The activism and the physics were not separate lives. Both came from seeing that institutions are made by human choices.`,
      `In 1973 she earned her doctorate in theoretical elementary particle physics. MIT identifies her as the first Black woman to receive a doctorate from the institute. MIT News also notes that she was the second Black woman in the United States to earn a doctorate in physics. Those facts are historic, but the page should not reduce her to a credential. A doctorate is not a trophy. It is evidence of years of research, exams, advising, discipline, and staying power inside a discipline that had rarely made room for someone like her.`,
      `After MIT, Jackson worked at Fermilab and CERN, then spent 15 years at AT&T Bell Laboratories. Her research included theoretical physics, solid-state physics, quantum physics, optical physics, and the behavior of electrons in layered systems. Popular summaries sometimes claim that she "invented" caller ID, call waiting, fax technology, or fiber optics. That wording is too simple. Jackson's Bell Labs research belonged to the body of physics and materials science that helped make telecommunications technologies possible. The responsible story credits her contributions to the science behind advanced communication systems without pretending one person invented every consumer feature later associated with them.`,
      `Jackson moved from research into public leadership. At Rutgers she taught physics and continued consulting in semiconductor theory. In 1995 President Bill Clinton nominated her to the Nuclear Regulatory Commission and designated her as chair. The NRC regulates civilian nuclear reactors and nuclear materials, which means its work sits at the intersection of science, public safety, national security, environmental protection, and public trust. Jackson became the first woman and the first African American to chair the agency.`,
      `Her NRC years mattered because technical leadership is not only equations. It is judgment under risk. She emphasized risk-informed, performance-based regulation and international nuclear safety cooperation. She also helped form the International Nuclear Regulators Association and served as its first chair. In a field where authority can look closed and technocratic, Jackson carried both scientific training and public accountability into the center of regulation.`,
      `In 1999 she became president of Rensselaer Polytechnic Institute. RPI's own biography describes a long transformation agenda involving research, infrastructure, faculty, and global scientific leadership. University presidencies are political jobs as well as academic ones. They require fundraising, institutional vision, conflict management, and decisions that are sometimes contested. Jackson's career therefore cannot be understood as a straight climb from lab bench to honor. It is a series of rooms where she had to translate scientific authority into institutional power.`,
      `Jackson received the National Medal of Science in 2015 and has held major roles in science policy, national security advising, corporate boards, and professional societies. The fuller lesson is not that she became exceptional enough to escape racism and sexism. It is that she kept entering systems that had not been designed around her presence, then worked to alter what those systems could recognize as leadership.`
    ],
    quote: {
      text: `enabling others and bringing along the next generation of scientists and engineers`,
      cite: 'Shirley Ann Jackson, MIT News'
    },
    costImpact: [
      `Jackson paid the cost of isolation in elite scientific spaces and the burden of being treated as proof for groups that institutions had excluded. She had to be excellent in physics while also answering the social reality around her: too few Black students, too few Black women physicists, and too little institutional imagination.`,
      `Her impact moves through multiple systems. She expanded what MIT, Bell Labs, the NRC, RPI, and national science policy could look like with a Black woman scientist in command. She also complicates the easy technology story: science behind everyday communication tools was built by teams, institutions, and research cultures, and Black women were part of that work even when public memory rarely said so.`
    ],
    whyItMattersToday: [
      `Jackson matters today because science pipelines are still shaped by belonging, mentoring, funding, and institutional will. Talent is not rare. Access is rationed. Her MIT years show how quickly exclusion can appear in ordinary academic life, and how student organizing can force an institution to change.`,
      `Her career also helps readers distinguish invention myths from scientific contribution. The point is not to attach every modern device to her name. The stronger truth is that theoretical physics, materials science, telecommunications research, regulation, and university leadership all needed minds like hers.`,
      `A reader should leave Jackson understanding that Black history in science is not only about entering the lab. It is about governing the lab, regulating risk, redesigning institutions, and making room for the people still coming.`
    ],
    connected: [
      { href: '@root/encyclopedia/katherine-johnson.html', title: 'Katherine Johnson', description: 'Another Black woman whose mathematical authority changed technical institutions.' },
      { href: '@root/generated/pages/dorothy-vaughan.html', title: 'Dorothy Vaughan', description: 'Connects technical brilliance to management, training, and institutional access.' },
      { href: '@root/generated/pages/annie-easley.html', title: 'Annie Easley', description: 'Links computing, engineering, and the hidden labor behind modern systems.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Places Jackson inside a longer history of Black innovation and technical leadership.' }
    ],
    externalLinks: [
      { source: 'MIT Black History Project', title: 'Shirley Jackson, ca. 1973', url: 'https://www.blackhistory.mit.edu/archive/shirley-jackson-ca-1973' },
      { source: 'MIT News', title: 'Shirley Jackson speaks about her career and being an agent for change', url: 'https://news.mit.edu/2017/shirley-jackson-speaks-about-her-career-and-being-change-agent-0929' },
      { source: 'U.S. Nuclear Regulatory Commission', title: 'Honorable Dr. Shirley Ann Jackson, Commissioner', url: 'https://www.nrc.gov/about-nrc/organization/commission/former-commissioners/jackson' },
      { source: 'Rensselaer Polytechnic Institute', title: 'The Honorable Shirley Ann Jackson', url: 'https://president.rpi.edu/leadership/honorable-shirley-ann-jackson-phd-dl-hon-dsc-hon-nae' }
    ],
    research: {
      status: 'batch-7-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.blackhistory.mit.edu/archive/shirley-jackson-ca-1973', 'https://www.nrc.gov/about-nrc/organization/commission/former-commissioners/jackson'],
      supportingSources: ['https://news.mit.edu/2017/shirley-jackson-speaks-about-her-career-and-being-change-agent-0929', 'https://president.rpi.edu/leadership/honorable-shirley-ann-jackson-phd-dl-hon-dsc-hon-nae'],
      verifiedQuoteSource: 'MIT News 2017 report on Jackson returning to campus.',
      sensitiveClaimsReviewed: 'Living status, MIT first claims, second Black woman physics Ph.D. claim, NRC authority, RPI tenure, and telecommunications contribution wording reviewed.',
      materialCorrections: 'Replaced overbroad "invented caller ID/fiber optics" framing with careful language about Bell Labs physics research contributing to telecommunications technologies.',
      finalStatus: 'Batch 7 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 5 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'edmonia-lewis',
    fullDate: '2026-07-19',
    dailyDateLabel: 'July 19',
    subject: 'Edmonia Lewis',
    category: 'Culture',
    type: 'People',
    dates: '1844 - 1907',
    tags: ['art', 'sculpture', 'black-women', 'native-history', 'rome'],
    summary: `Edmonia Lewis made marble speak from a life the art world tried to make improbable. She was a sculptor of Black and Native ancestry who studied at Oberlin, survived a racially charged accusation and attack, trained in Boston, then moved to Rome and built an international career. Her work took up emancipation, Indigenous life, religious themes, grief, captivity, and freedom inside the language of neoclassical sculpture. Lewis matters because she was not simply a "first." She was an artist negotiating how much of herself to reveal, how much the market would tolerate, and how to carve dignity into stone when critics kept trying to frame her as novelty.`,
    timeline: [
      { date: '1844', event: 'Born Mary Edmonia Lewis, with sources differing on exact birthplace and family details.' },
      { date: '1859', event: 'Enrolls at Oberlin College in Ohio.' },
      { date: '1862', event: 'Is accused of poisoning classmates and later acquitted; she is violently attacked during the controversy.' },
      { date: '1863', event: 'Leaves Oberlin without graduating.' },
      { date: '1864', event: 'Begins sculptural training in Boston with Edward Brackett.' },
      { date: '1865', event: 'Moves to Rome and joins a community of American women sculptors.' },
      { date: '1867', event: 'Creates Forever Free, a sculpture marking emancipation.' },
      { date: '1876', event: 'The Death of Cleopatra is shown at the Centennial Exhibition in Philadelphia.' },
      { date: '1880s', event: 'Fades from regular public attention as records become thinner.' },
      { date: 'Sep 17, 1907', event: 'Dies in London, according to research that corrected earlier uncertainty.' },
      { date: '1990s', event: 'The Death of Cleopatra enters the Smithsonian American Art Museum collection after being rediscovered.' },
      { date: '2022', event: 'The U.S. Postal Service honors Lewis with a Black Heritage stamp.' }
    ],
    fullStory: [
      `Edmonia Lewis's life has to be told with care because the record is uneven and sometimes self-fashioned. She gave different versions of her own background, and later writers repeated details that are difficult to verify. That uncertainty should not be treated as a flaw in the story. It tells us something about the world she had to navigate. A Black and Native woman artist in the nineteenth century had to survive not only racism and sexism, but also an art market hungry for stories it could exoticize.`,
      `Lewis was born in 1844. Smithsonian American Art Museum identifies her birthplace as Greenbush, now Rensselaer, New York, and describes her as having African American and Native American ancestry. Her father was Black, and her mother is often identified as Chippewa or Ojibwa. After being orphaned, she spent part of her youth connected to her mother's people and later attended Oberlin College, one of the few U.S. colleges open to Black and women students in the period.`,
      `Oberlin did not protect her from racism. In 1862 Lewis was accused of poisoning two white classmates. She was acquitted, but before the trial she was dragged from a house and badly beaten by a white mob. Later, after another accusation involving art supplies, she left Oberlin without graduating. The details matter because they show how quickly suspicion could become violence when a Black woman was imagined as out of place.`,
      `Lewis moved to Boston and studied with sculptor Edward Brackett. She made portrait medallions of antislavery figures, including Robert Gould Shaw and other public subjects connected to abolition. Selling those works helped finance her move to Rome in 1865. Rome mattered because marble sculpture was centered there, and because a community of American women sculptors found more working space there than the United States allowed. Still, Lewis remained distinct. She was Black and Native in a circle often remembered as white.`,
      `In Rome, Lewis worked in a neoclassical language but did not surrender her subjects to cold imitation. Smithsonian notes that she carved much of her own marble because she feared critics would not accept the work as original if Italian artisans did the final carving, as was common practice. That choice increased the physical labor of her art and reveals the credibility burden placed on her.`,
      `Forever Free, completed in 1867, responded to emancipation. Hagar drew on a biblical figure of exile and survival. Her Hiawatha-inspired works engaged Longfellow's poem and nineteenth-century fascination with Indigenous subjects, while trying to carve Native people with dignity rather than simple caricature. The Death of Cleopatra, shown at the 1876 Centennial Exhibition, startled viewers with its realism. Cleopatra was not a tidy allegory. She was a dead queen, monumental and bodily, refusing the delicate finish critics expected from women artists.`,
      `The Death of Cleopatra later disappeared into a strange afterlife. It was reportedly used as a grave marker for a racehorse and neglected before being recovered and eventually entering the Smithsonian American Art Museum collection. That journey is almost too symbolic: a major work by a Black and Native woman artist nearly lost, damaged, and then reclaimed by public memory.`,
      `Lewis's later years remain difficult to trace. For a long time, even her death date was uncertain. Research by scholars, reflected in recent museum biographies, established that she died in London in 1907. The uncertainty around her final decades should not be filled with invention. It should make readers ask why archives preserve some artists carefully and let others nearly vanish.`,
      `Edmonia Lewis belongs in the encyclopedia because she made a career across borders when the United States offered her danger, doubt, and narrow categories. Her sculpture asks viewers to look at freedom, captivity, faith, and identity in stone. Her life asks who gets called a master before the museum label arrives.`
    ],
    quote: {
      text: `I had rather you would point out my defects`,
      cite: 'Edmonia Lewis, quoted by Smithsonian American Art Museum'
    },
    costImpact: [
      `Lewis paid the cost of racialized suspicion, physical violence, artistic isolation, and archival neglect. She had to fund her career through portrait sales, leave the United States for Rome, and prove authorship in a field where white women already faced barriers and Black and Native women faced even narrower expectations.`,
      `Her impact is artistic and archival. She created works that made emancipation, Indigenous representation, biblical exile, and Black womanhood part of nineteenth-century sculpture. The recovery of her reputation also reminds museums that historical absence is often the result of neglect, not lack of achievement.`
    ],
    whyItMattersToday: [
      `Lewis matters today because art history is still being corrected. The question is not only why she was forgotten. It is what kinds of artists the archive was built to remember in the first place.`,
      `Her career also pushes against simple representation. Lewis did not merely insert herself into a European form. She used that form to address subjects the art world often sentimentalized or ignored. She worked with classical polish while carrying histories of violence, migration, emancipation, and identity.`,
      `A reader should leave Lewis understanding that beauty can be a strategy, but so can refusal. Her marble figures refuse to let Black and Native presence remain decorative background.`
    ],
    connected: [
      { href: '@root/generated/pages/augusta-savage.html', title: 'Augusta Savage', description: 'Another sculptor whose work and teaching fought exclusion from American art institutions.' },
      { href: '@root/generated/pages/alma-thomas.html', title: 'Alma Thomas', description: 'Connects Black women artists across different centuries and visual languages.' },
      { href: '@root/generated/pages/black-arts-movement.html', title: 'The Black Arts Movement', description: 'Places Lewis beside later debates over Black art, audience, and power.' },
      { href: '@root/generated/pages/ann-lowe.html', title: 'Ann Lowe', description: 'Another Black woman artist whose craft was long under-credited by elite patrons.' }
    ],
    externalLinks: [
      { source: 'Smithsonian American Art Museum', title: 'Edmonia Lewis', url: 'https://americanart.si.edu/artist/edmonia-lewis-2914' },
      { source: 'Smithsonian American Art Museum', title: 'The Death of Cleopatra', url: 'https://americanart.si.edu/artwork/death-cleopatra-33878' },
      { source: 'Smithsonian American Art Museum', title: '3D Scans of Sculptures by Edmonia Lewis', url: 'https://americanart.si.edu/blog/edmonia_lewis_3D' },
      { source: `National Women's History Museum`, title: 'Edmonia Lewis', url: 'https://www.womenshistory.org/education-resources/biographies/edmonia-lewis' }
    ],
    research: {
      status: 'batch-7-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://americanart.si.edu/artist/edmonia-lewis-2914', 'https://americanart.si.edu/artwork/death-cleopatra-33878'],
      supportingSources: ['https://americanart.si.edu/blog/edmonia_lewis_3D', 'https://www.womenshistory.org/education-resources/biographies/edmonia-lewis'],
      verifiedQuoteSource: 'Smithsonian American Art Museum blog quoting Edmonia Lewis on criticism and praise.',
      sensitiveClaimsReviewed: 'Birthplace uncertainty, Black and Native ancestry wording, Oberlin accusation/acquittal, violent attack, studio practice, death date, and rediscovery of The Death of Cleopatra reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a fuller account of contested biography, Oberlin violence, Rome studio practice, major works, archival loss, and recovery.',
      finalStatus: 'Batch 7 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'duke-ellington',
    outputPath: 'encyclopedia/duke-ellington.html',
    fullDate: '2026-04-29',
    dailyDateLabel: 'April 29',
    subject: 'Duke Ellington',
    category: 'Music',
    type: 'People',
    dates: '1899 - 1974',
    tags: ['music', 'jazz', 'composition', 'harlem', 'culture'],
    summary: `Duke Ellington did not make jazz respectable by making it less Black. He expanded its forms, colors, audiences, and ambitions while keeping the orchestra rooted in the individual voices of Black musicians. Born in Washington, D.C., Ellington became a pianist, composer, bandleader, arranger, and cultural diplomat whose work moved from dance halls and radio broadcasts to suites, film scores, sacred concerts, and global tours. The easy version says he made jazz elegant. The deeper story is that he treated Black sound as a whole world: sophisticated, experimental, commercial, spiritual, funny, disciplined, and impossible to shrink.`,
    timeline: [
      { date: 'Apr 29, 1899', event: 'Born Edward Kennedy Ellington in Washington, D.C.' },
      { date: '1917', event: 'Forms an early group known as the Duke Serenaders.' },
      { date: '1923', event: 'Moves to New York with the Washingtonians.' },
      { date: '1927', event: 'Begins the Cotton Club engagement that broadcasts the Ellington sound nationally.' },
      { date: '1931', event: 'Leaves the Cotton Club and expands touring.' },
      { date: '1943', event: 'Premieres Black, Brown and Beige at Carnegie Hall.' },
      { date: '1956', event: 'A triumphant Newport Jazz Festival performance renews national attention.' },
      { date: '1959', event: 'Composes music for Anatomy of a Murder.' },
      { date: '1965', event: 'Presents the first of his sacred concerts.' },
      { date: '1969', event: 'Receives the Presidential Medal of Freedom.' },
      { date: 'May 24, 1974', event: 'Dies in New York City.' }
    ],
    fullStory: [
      `Duke Ellington built an orchestra like a writer builds a cast. He did not compose for generic trumpet, trombone, clarinet, or saxophone. He wrote for people: for the plunger-muted growl of Bubber Miley, the clarinet color of Barney Bigard, the alto voice of Johnny Hodges, the valve trombone of Juan Tizol, the bass power of Jimmy Blanton, and the arranging brilliance of Billy Strayhorn. His music was personal because the band was personal.`,
      `Edward Kennedy Ellington was born in Washington, D.C., in 1899. The city shaped him. Washington had Black middle-class institutions, segregated public life, churches, schools, social clubs, and musicians moving between respectability and nightlife. Ellington absorbed ragtime, stride piano, popular song, and dance music. The nickname "Duke" suggested style, and style became one of his tools. Elegance was not a mask. It was a way of insisting that Black artists deserved command of the room.`,
      `In 1923 Ellington moved to New York with the Washingtonians. The band worked through a changing Harlem scene where Black creativity drew white money, white curiosity, and white control. The Cotton Club made that contradiction plain. Ellington's orchestra became famous there after 1927, aided by radio broadcasts that carried its sound nationally. But the club's audience was largely white, and its stage often trafficked in exoticized images of Blackness. Ellington used the platform without being defined by it.`,
      `The music kept expanding. Pieces such as Mood Indigo, Creole Rhapsody, It Don't Mean a Thing, Sophisticated Lady, Solitude, Caravan, and later Take the "A" Train made the Ellington book both popular and musically daring. He worked with unusual instrumental colors, close harmonies, blues feeling, urban polish, and formal ambition. He understood that swing could be precise and loose at once.`,
      `Billy Strayhorn's arrival in 1939 changed the orchestra's inner architecture. Strayhorn became collaborator, arranger, composer, and trusted musical mind. The public often placed Ellington alone at the center, but the fuller story must name Strayhorn's contributions, including Take the "A" Train, which became the band's theme. Ellington's genius included recognizing and using the genius around him.`,
      `In 1943 Ellington premiered Black, Brown and Beige at Carnegie Hall, calling it a tone parallel to the history of Black people in America. Critics were divided. Some did not know how to hear a large-scale Black historical work in jazz language. That reaction tells us as much about the critics as the music. Ellington was pushing against the idea that jazz belonged only in clubs, only in dance, or only in short commercial forms.`,
      `The 1950s brought changing tastes, big-band decline, and financial pressure. Ellington kept the orchestra alive anyway, often at personal cost. The 1956 Newport Jazz Festival performance, especially Paul Gonsalves's long solo on Diminuendo and Crescendo in Blue, renewed attention. But Ellington's work after Newport was not nostalgia. He wrote suites inspired by places, people, politics, Shakespeare, travel, and spiritual life, including Such Sweet Thunder, The Far East Suite, and sacred concerts.`,
      `Ellington toured internationally as a representative of American culture during the Cold War. That role carried contradiction. The United States sent Black musicians abroad as evidence of freedom while segregation and racial violence remained at home. Ellington navigated that contradiction with grace, humor, and discipline, but the contradiction did not disappear. Black artistry was being used to sell a democracy still failing Black citizens.`,
      `Duke Ellington died in 1974 after composing thousands of pieces and leading one of the most important ensembles in American music. His story matters because he refused the small categories offered to Black art. Jazz could entertain, yes. It could also think, mourn, flirt, pray, remember, travel, and argue. Ellington made an orchestra into a living archive of Black modernity.`
    ],
    costImpact: [
      `Ellington paid the cost of building a large Black orchestra inside a segregated entertainment economy. Travel meant discrimination in hotels, restaurants, and venues. Fame did not erase the indignity of Jim Crow. Keeping the band together also required constant touring, financial risk, and emotional labor.`,
      `His impact is almost impossible to measure neatly. He changed composition, arranging, jazz orchestration, film scoring, sacred music, and the global image of Black American music. He also made room for individual musicians to become sonic characters whose voices still teach listeners how much personality can live inside a note.`
    ],
    whyItMattersToday: [
      `Ellington matters today because Black creativity is still too often asked to choose between popularity and seriousness. He refused that choice. His music could fill a dance floor and reward close study. It could be commercial without being shallow, elegant without being tame, and ambitious without becoming stiff.`,
      `His career also reminds readers to listen for collaboration. Ellington's name mattered, but so did Strayhorn, Hodges, Miley, Tizol, Gonsalves, Blanton, and the long list of musicians whose sounds made the orchestra itself a historical source.`,
      `A reader should leave Ellington understanding that jazz is not background music to American history. It is one of the places where America has told the truth about itself most beautifully.`
    ],
    connected: [
      { href: '@root/encyclopedia/billie-holiday.html', title: 'Billie Holiday', description: 'Another musician whose sound carried beauty, pain, and political memory.' },
      { href: '@root/encyclopedia/the-blues.html', title: 'The Blues', description: 'Connects Ellington to older Black musical forms that shaped jazz language.' },
      { href: '@root/generated/pages/james-brown.html', title: 'James Brown', description: 'A later bandleader who also treated rhythm, discipline, and showmanship as power.' },
      { href: '@root/generated/pages/black-arts-movement.html', title: 'The Black Arts Movement', description: 'Places Black artistic ambition inside later cultural politics.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Today in History: Duke Ellington', url: 'https://www.loc.gov/item/today-in-history/april-29/' },
      { source: 'National Museum of American History', title: 'Duke Ellington and Billy Strayhorn: Jazz Composers', url: 'https://americanhistory.si.edu/documentsgallery/exhibitions/ellington_strayhorn_2.html' },
      { source: 'National Portrait Gallery', title: 'Duke Ellington', url: 'https://npg.si.edu/object/npg_NPG.92.58' },
      { source: 'Library of Congress Music Blog', title: 'American Composers and Musicians from A to Z: Ellington, Duke', url: 'https://blogs.loc.gov/nls-music-notes/2018/05/american-composers-from-a-z-e-part-1-ellington-duke/' }
    ],
    research: {
      status: 'batch-7-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.loc.gov/item/today-in-history/april-29/', 'https://americanhistory.si.edu/documentsgallery/exhibitions/ellington_strayhorn_2.html'],
      supportingSources: ['https://npg.si.edu/object/npg_NPG.92.58', 'https://blogs.loc.gov/nls-music-notes/2018/05/american-composers-from-a-z-e-part-1-ellington-duke/'],
      verifiedQuoteSource: 'No quotation included.',
      sensitiveClaimsReviewed: 'Cotton Club segregation, Billy Strayhorn collaboration, composition counts, Carnegie Hall reception, cultural diplomacy framing, and Presidential Medal timeline reviewed.',
      materialCorrections: 'Expanded legacy daily framing from global jazz icon into a fuller account of orchestra, collaboration, segregation, extended composition, and cultural diplomacy.',
      finalStatus: 'Batch 7 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 4 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'ed-temple',
    fullDate: '2026-07-26',
    dailyDateLabel: 'July 26',
    subject: 'Ed Temple',
    category: 'Sports',
    type: 'People',
    dates: '1927 - 2016',
    tags: ['sports', 'track-and-field', 'tigerbelles', 'hbcus', 'olympics'],
    summary: `Ed Temple coached speed, but his real work was institution-building. At Tennessee State University, he turned the Tigerbelles into one of the great women's track programs in the world. His athletes included Wilma Rudolph, Wyomia Tyus, Barbara Jones, Chandra Cheeseborough, and dozens of Olympians who ran through segregation, limited resources, sexism, and Cold War pressure. Temple's story matters because the finish line was only the visible part. Behind every medal was recruiting, discipline, travel, academics, protection, and a Black college program proving that Black women's excellence did not need permission from better-funded institutions.`,
    timeline: [
      { date: 'Sep 20, 1927', event: 'Born in Harrisburg, Pennsylvania.' },
      { date: '1940s', event: 'Attends Tennessee A&I, later Tennessee State University.' },
      { date: '1950', event: 'Becomes coach of Tennessee State women\'s track.' },
      { date: '1952', event: 'Tigerbelle Barbara Jones wins Olympic gold in the 4x100-meter relay.' },
      { date: '1956', event: 'Temple coaches U.S. women\'s track athletes at the Melbourne Olympics.' },
      { date: '1960', event: 'Serves as U.S. women\'s Olympic track coach as Wilma Rudolph wins three gold medals in Rome.' },
      { date: '1964', event: 'Serves again as U.S. women\'s Olympic track coach in Tokyo.' },
      { date: '1964-1968', event: 'Tigerbelle Wyomia Tyus becomes the first athlete to win back-to-back Olympic 100-meter titles.' },
      { date: '1972', event: 'Is inducted into the Tennessee Sports Hall of Fame.' },
      { date: '1994', event: 'Retires after 44 years coaching Tennessee State women\'s track.' },
      { date: 'Sep 22, 2016', event: 'Dies in Nashville.' }
    ],
    fullStory: [
      `Ed Temple did not inherit a sports machine. He built one. When he began coaching women's track at Tennessee State in 1950, Black women athletes had to fight for recognition in several directions at once. They were Black in a segregated country. They were women in a sports culture that treated men's athletics as the main event. They were HBCU athletes competing against programs with more money, facilities, and institutional attention. Temple looked at that landscape and built a system anyway.`,
      `Temple was born in Harrisburg, Pennsylvania, in 1927 and came to Tennessee State as a student athlete. The school, then Tennessee A&I, was part of the HBCU world that created opportunities where white institutions often excluded Black students. Temple became connected to women's track almost by accident, but he stayed because he understood what disciplined coaching could make possible.`,
      `The Tigerbelles trained hard. Temple expected punctuality, academics, manners, and seriousness. Some of that style can sound old-fashioned now, but in context it was protective as well as demanding. Black women traveling for meets could not assume safety, respect, or equal treatment. Temple's discipline gave the athletes a shared structure in a world waiting to dismiss them.`,
      `The results were extraordinary. Tennessee sources credit Temple's Tigerbelles with 34 national titles, 40 Olympians, and 23 Olympic medals. Barbara Jones won Olympic gold in 1952 as a teenager. Wilma Rudolph became an international star in 1960, winning three gold medals in Rome after a childhood marked by illness and segregation. Wyomia Tyus became the first athlete to win back-to-back Olympic gold medals in the 100 meters, in 1964 and 1968. Chandra Cheeseborough later won relay gold and individual silver in 1984 before succeeding Temple as coach.`,
      `Temple's athletes were not only fast. Many graduated from college. Tennessee State's archival description emphasizes that dozens of Tigerbelle Olympians earned degrees. That matters because Temple was coaching students, not simply producing medals. The program treated athletic excellence and education as connected forms of mobility.`,
      `Temple's work also unfolded inside global politics. During the Cold War, U.S. women athletes competed against the Soviet Union while carrying the contradictions of American democracy. Black women could win medals for the United States abroad and still face segregation at home. Temple understood the irony. Tennessee Secretary of State materials recall his sharp observation that it took traveling to Russia to hear officials talk about athletes as one big family, while he could not order a hot dog freely in parts of his own country.`,
      `Resources remained uneven. Women's track did not receive the institutional money given to men's sports, and HBCUs often did more with less. Temple used recruitment, personal authority, community, and relentless training to close gaps that money had created. His program showed that underinvestment was not a measure of talent. It was a measure of priorities.`,
      `He retired in 1994 after 44 years. The physical legacy includes Ed Temple Boulevard, the Edward S. Temple Track, archival collections, halls of fame, and generations of athletes who speak of him with awe and affection. But the deeper legacy is a coaching model that made Black women's ambition organized, visible, and durable.`,
      `Ed Temple belongs in the encyclopedia because sports history is never only about the person who crosses the line first. It is about who found her, trained her, protected her, insisted she finish school, bought the bus ticket, fought for the lane, and made the world watch. Temple did that work for decades.`
    ],
    quote: {
      text: `They did it quietly. There wasn't any fanfare.`,
      cite: 'Ed Temple, Tennessee Secretary of State Tri-Star Chronicles'
    },
    costImpact: [
      `Temple's athletes paid the cost of competing through segregation, low funding, gender discrimination, and public under-recognition. Temple himself had to build a world-class program in conditions that did not match the quality of the talent he coached. Travel, facilities, recruiting, and respect all required extra labor.`,
      `The impact was global. Tigerbelles changed Olympic history, expanded the visibility of Black women athletes, strengthened Tennessee State's athletic legacy, and proved that HBCUs could produce world-class performance when given serious coaching and community support. Temple's work also helped build a bridge to later gains in women's sports.`
    ],
    whyItMattersToday: [
      `Temple matters today because talent development is not magic. It is infrastructure. Coaching, transportation, nutrition, time, facilities, academic support, and belief all shape who reaches the starting line ready to win.`,
      `His story also pushes readers to see Black women's sports history as more than inspiration. The Tigerbelles were strategic, disciplined, educated, and organized. Their success came from a program, not a miracle.`,
      `A reader should leave Temple understanding that medals are public evidence of private systems. The coach who built the system belongs in history too.`
    ],
    connected: [
      { href: '@root/encyclopedia/wilma-rudolph.html', title: 'Wilma Rudolph', description: 'Temple\'s most famous Tigerbelle and a defining Olympic champion.' },
      { href: '@root/encyclopedia/althea-gibson.html', title: 'Althea Gibson', description: 'Another athlete who competed through racism and institutional exclusion.' },
      { href: '@root/encyclopedia/hbcus.html', title: 'Historically Black Colleges and Universities', description: 'The institutional world that made programs like the Tigerbelles possible.' },
      { href: '@root/generated/pages/doug-williams.html', title: 'Doug Williams', description: 'Another HBCU-trained sports figure whose excellence challenged racial assumptions.' }
    ],
    externalLinks: [
      { source: 'Tennessee Encyclopedia', title: 'Edward S. Temple', url: 'https://tennesseeencyclopedia.net/entries/edward-s-temple/' },
      { source: 'Tennessee Secretary of State', title: 'Tri-Star Chronicles: Ed Temple', url: 'https://sos.tn.gov/tsla/pages/tri-star-chronicles-ed-temple' },
      { source: 'Tennessee State University Library', title: 'Edward S. Temple, Olympic Coach', url: 'https://digitalscholarship.tnstate.edu/library-digital-collections/114/' },
      { source: 'Tennessee Sports Hall of Fame', title: 'Temple, Edward S.', url: 'https://tshf.net/halloffame/temple-edward-s/' }
    ],
    research: {
      status: 'batch-7-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://tennesseeencyclopedia.net/entries/edward-s-temple/', 'https://digitalscholarship.tnstate.edu/library-digital-collections/114/'],
      supportingSources: ['https://sos.tn.gov/tsla/pages/tri-star-chronicles-ed-temple', 'https://tshf.net/halloffame/temple-edward-s/'],
      verifiedQuoteSource: 'Tennessee Secretary of State Tri-Star Chronicles feature quoting Temple.',
      sensitiveClaimsReviewed: 'Olympian/medal counts, 34 national titles, Wilma Rudolph and Wyomia Tyus claims, HBCU context, and women\'s sports resource framing reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a program-level account of Tigerbelles, HBCU infrastructure, women\'s sports, Cold War contradiction, and coaching labor.',
      finalStatus: 'Batch 7 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 5 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'dred-scott',
    fullDate: '2026-06-15',
    dailyDateLabel: 'June 15',
    subject: 'Dred Scott',
    category: 'Law',
    type: 'Law',
    dates: 'c. 1799 - 1858',
    tags: ['supreme-court', 'slavery', 'citizenship', 'constitutional-law', 'civil-war'],
    summary: `Dred Scott v. Sandford is remembered as a Supreme Court decision, but it began as a family's freedom suit. Dred Scott, Harriet Robinson Scott, and their daughters had lived in places where slavery was prohibited, then sued in Missouri courts for freedom. By 1857, the case had become a national weapon. Chief Justice Roger Taney's opinion said Black people could not be U.S. citizens and that Congress lacked power to ban slavery in federal territories. The decision did not settle the slavery conflict. It exposed how far the Court would go to protect slaveholding power, and it helped push the country closer to Civil War.`,
    timeline: [
      { date: 'c. 1799', event: 'Dred Scott is born into slavery in Virginia, according to commonly cited estimates.' },
      { date: '1830s', event: 'Scott is taken by Dr. John Emerson to Illinois and Fort Snelling, where slavery is prohibited.' },
      { date: '1836', event: 'Dred Scott and Harriet Robinson marry at Fort Snelling.' },
      { date: '1846', event: 'Dred and Harriet Scott file freedom suits in St. Louis.' },
      { date: '1850', event: 'A St. Louis jury rules in favor of Dred and Harriet Scott.' },
      { date: '1852', event: 'The Missouri Supreme Court reverses the Scotts victory.' },
      { date: '1854', event: 'Scott loses in federal circuit court.' },
      { date: 'Mar 6, 1857', event: 'The U.S. Supreme Court issues its decision in Dred Scott v. Sandford.' },
      { date: 'May 1857', event: 'The Taylor family purchases and frees Dred, Harriet, Eliza, and Lizzie Scott.' },
      { date: 'Sep 17, 1858', event: 'Dred Scott dies in St. Louis.' },
      { date: '1865-1868', event: 'The Thirteenth and Fourteenth Amendments overturn the slavery and citizenship logic of the decision.' }
    ],
    fullStory: [
      `The Dred Scott case should not begin with Roger Taney. It should begin with Dred Scott, Harriet Robinson Scott, and their children. They were not abstract legal questions. They were a Black family trying to use the law to claim freedom after being held in places where slavery was prohibited. Their fight lasted more than a decade, and the Supreme Court turned that fight into one of the most destructive constitutional decisions in U.S. history.`,
      `Scott had been enslaved by the Blow family and later by Dr. John Emerson, an army surgeon. Emerson took Scott to Illinois, a free state, and then to Fort Snelling in what was then Wisconsin Territory, where the Missouri Compromise prohibited slavery. At Fort Snelling, Scott met and married Harriet Robinson, who was also enslaved. Their marriage was legally significant and humanly important. It showed the Scotts building family life inside a system that denied them ownership of their own bodies, labor, and futures.`,
      `Freedom suits were not unusual in Missouri. Enslaved people had long sued under the doctrine sometimes summarized as "once free, always free," arguing that residence in free territory had made them free. In 1846, Dred and Harriet Scott filed separate suits in St. Louis. Their cases were later linked. In 1850, a jury ruled for them. For a moment, law seemed to recognize what geography and precedent had promised.`,
      `The moment did not hold. In 1852, the Missouri Supreme Court reversed the victory, signaling a shift away from earlier precedent as sectional conflict over slavery grew sharper. Scott then pursued a federal case against John F. A. Sandford. The defendant's name was misspelled as "Sandford" in the Supreme Court record, which is why the case is known by that spelling.`,
      `By the time the Supreme Court decided the case, slavery was the central political crisis in the country. The Kansas-Nebraska Act, violence in Kansas, fugitive slave conflicts, and the collapse of old party alignments had made every territorial question explosive. The Court could have issued a narrow ruling. Instead, Taney's majority opinion reached broadly to protect slaveholding power.`,
      `The decision made three devastating claims. First, Taney argued that Black people of African descent, whether enslaved or free, were not citizens under the U.S. Constitution and could not sue in federal court. Second, the Court held that Scott's residence in free territory had not made him free. Third, it declared that Congress had no constitutional authority to prohibit slavery in federal territories, striking at the Missouri Compromise's logic. The opinion tried to make slaveholders' property claims travel wherever the nation expanded.`,
      `Taney's language was not neutral legal reasoning. It treated Black exclusion as constitutional fact and reduced Black people's relationship to the nation to bondage and denial. The decision also showed how courts can intensify crisis when they pretend to settle moral questions by strengthening power. Rather than quieting the slavery debate, Dred Scott deepened it. Abraham Lincoln and other antislavery politicians used the decision as evidence that slaveholding interests wanted national protection for slavery.`,
      `The Scotts themselves were freed in 1857 after the decision, when the Taylor family purchased and manumitted them. Dred Scott lived only a little more than a year as a free man before dying in 1858. Harriet Scott lived longer, but public memory often narrowed the case around Dred alone. That narrowing matters. Harriet sued too. Their daughters' freedom was at stake too. The case was family history as well as constitutional history.`,
      `The Civil War and Reconstruction amendments later overturned the central legal claims. The Thirteenth Amendment abolished slavery. The Fourteenth Amendment made birthright citizenship part of the Constitution and rejected Dred Scott's citizenship logic. But the damage had already been done. The decision remains a warning that the Supreme Court has not always defended liberty. Sometimes it has used constitutional language to deny people the very right to make a claim.`,
      `Dred Scott belongs in the encyclopedia because the case forces readers to see law as a field of struggle. Courts can be used by oppressed people seeking freedom. Courts can also be used by powerful people trying to close the door. Both are true, and the Scotts lived the cost of that contradiction.`
    ],
    quote: {
      text: `no rights which the white man was bound to respect`,
      cite: 'Chief Justice Roger B. Taney, Dred Scott v. Sandford'
    },
    costImpact: [
      `The cost fell first on the Scott family. They spent years in litigation while their freedom, their marriage, and their daughters' futures remained subject to people who claimed ownership over them. The decision then expanded that harm nationally by telling free Black communities that citizenship itself was outside their reach.`,
      `Its impact was political and constitutional. Dred Scott discredited the Court for many antislavery Americans, inflamed sectional conflict, and helped make clear why emancipation alone would not be enough. Citizenship had to be written into the Constitution because the Court had tried to write Black people out of it.`
    ],
    whyItMattersToday: [
      `Dred Scott matters today because it rejects the comforting idea that courts naturally bend toward justice. Courts are institutions shaped by people, politics, precedent, and power. The decision shows what happens when legal authority treats oppression as something to protect.`,
      `It also clarifies why the Fourteenth Amendment is so central to American life. Birthright citizenship was not an abstract addition. It was an answer to a Court that had denied Black belonging at the highest level.`,
      `A reader should leave Dred Scott understanding that constitutional rights were not handed down cleanly. They were fought for by families, lawyers, movements, soldiers, and lawmakers after the law had failed spectacularly.`
    ],
    connected: [
      { href: '@root/generated/pages/14th-amendment.html', title: 'The 14th Amendment', description: 'The citizenship answer to Dred Scott.' },
      { href: '@root/generated/pages/15th-amendment.html', title: 'The 15th Amendment', description: 'Another Reconstruction amendment built from the wreckage of slavery.' },
      { href: '@root/generated/pages/reconstruction.html', title: 'Reconstruction', description: 'The era that tried to rebuild citizenship after slavery and civil war.' },
      { href: '@root/generated/pages/plessy-v-ferguson.html', title: 'Plessy v. Ferguson', description: 'Another Supreme Court decision that narrowed Black rights under constitutional language.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Dred Scott v. Sandford (1857)', url: 'https://www.archives.gov/milestone-documents/dred-scott-v-sandford' },
      { source: 'National Archives', title: 'Dred Scott', url: 'https://www.archives.gov/kansas-city/highlights/dred-scott' },
      { source: 'National Park Service', title: 'Dred Scott', url: 'https://www.nps.gov/people/dred-scott.htm' },
      { source: 'Library of Congress', title: 'Dred Scott v. Sandford, 60 U.S. 393', url: 'https://www.loc.gov/item/usrep060393/' },
      { source: 'Oyez', title: 'Dred Scott v. Sandford', url: 'https://www.oyez.org/cases/1850-1900/60us393' }
    ],
    research: {
      status: 'batch-7-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/milestone-documents/dred-scott-v-sandford', 'https://www.loc.gov/item/usrep060393/'],
      supportingSources: ['https://www.archives.gov/kansas-city/highlights/dred-scott', 'https://www.nps.gov/people/dred-scott.htm', 'https://www.oyez.org/cases/1850-1900/60us393'],
      verifiedQuoteSource: 'National Archives transcript and Library of Congress United States Reports record of Dred Scott v. Sandford.',
      sensitiveClaimsReviewed: 'Citizenship holding, Harriet Scott role, family freedom, Sandford spelling, Missouri precedent, territorial slavery holding, and amendment reversal reviewed.',
      materialCorrections: 'Expanded scheduled fallback into a family-centered constitutional history and corrected the date field from decision-only framing to Dred Scott life dates.',
      finalStatus: 'Batch 7 complete: independently researched rich source, Claudette-style page, ledger record, internal links, 5 external links, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = { ENTRIES };
