const RESEARCH_DATE = '2026-08-15';

const ENTRIES = [
  {
    encyclopediaSlug: 'henrietta-lacks',
    outputPath: 'encyclopedia/henrietta-lacks.html',
    subject: 'Henrietta Lacks',
    category: 'Medicine',
    type: 'People',
    dates: '1920 - 1951',
    tags: ['medicine', 'bioethics', 'hela-cells', 'johns-hopkins', 'informed-consent'],
    summary: `Henrietta Lacks did not volunteer to transform medicine. She went to Johns Hopkins Hospital in 1951 because she was sick, young, and in pain. During treatment for cervical cancer, cells from her tumor were taken without her knowledge or consent. Those cells became HeLa, the first human cell line that could be grown continuously in a laboratory. They helped make possible breakthroughs in polio vaccine testing, cancer research, genetics, infectious disease, and space biology. That scientific fact cannot be separated from the human one: Lacks died at 31, her family did not learn the truth for decades, and medicine profited from a Black woman's body while her descendants were left to fight for information, privacy, respect, and a voice in how her genetic legacy was used.`,
    timeline: [
      { date: 'Aug 1, 1920', event: 'Born Loretta Pleasant in Roanoke, Virginia; she later becomes known as Henrietta.' },
      { date: '1941', event: 'Marries David Lacks and later moves with him to the Baltimore area.' },
      { date: 'Jan 1951', event: 'Seeks care at Johns Hopkins Hospital for cervical cancer symptoms.' },
      { date: 'Feb 1951', event: 'Tumor samples are sent to George Gey\'s laboratory without her knowledge or consent.' },
      { date: '1951', event: 'Researchers discover that her cancer cells continue growing in culture and name the line HeLa.' },
      { date: 'Oct 4, 1951', event: 'Dies of cervical cancer at age 31.' },
      { date: '1950s', event: 'HeLa cells become central to large-scale polio vaccine testing and other biomedical research.' },
      { date: '1971', event: 'Henrietta Lacks\'s name is publicly connected to HeLa in scientific literature.' },
      { date: '1970s', event: 'Members of the Lacks family begin learning that her cells have been used in research.' },
      { date: '2013', event: 'NIH and the Lacks family reach an agreement for controlled access to HeLa whole-genome sequence data.' },
      { date: '2023', event: 'NIH marks ten years of the NIH-Lacks Family Agreement and reaffirms the privacy partnership.' }
    ],
    fullStory: [
      `Henrietta Lacks was born Loretta Pleasant in Roanoke, Virginia, in 1920 and grew up in the tobacco country of Clover, Virginia. She was part of a Black rural world shaped by family labor, migration, poverty, church, kinship, and the long shadow of slavery. Her story is often introduced at the laboratory door, but it began far from that door, with a young woman whose life included children, work, cousins, illness, laughter, and the ordinary demands of survival.`,
      `In 1951, Lacks went to Johns Hopkins Hospital in Baltimore for treatment of cervical cancer. Johns Hopkins was one of the few major hospitals in the area that treated Black patients, but care was segregated and medical authority was not evenly shared. During her treatment, doctors removed samples of her tumor. Johns Hopkins and NIH accounts agree on the central ethical fact: the specimens were obtained without her knowledge or consent.`,
      `The cells were sent to the laboratory of George Gey, who had been trying to grow human cells outside the body. Most samples died quickly. Lacks's cancer cells did not. They divided again and again, doubling rapidly and surviving in ways researchers had not seen before. The cell line was named HeLa from the first letters of her first and last names.`,
      `That breakthrough changed biomedical research. HeLa cells could be shared, shipped, standardized, and used in experiments that would have been impossible or much slower with fragile cell samples. They were used in polio vaccine testing, cancer research, virology, radiation studies, toxicology, genetics, reproductive medicine, and later research tied to HIV and other diseases. NIH's HeLa site notes more than 110,000 publications citing HeLa use between 1953 and 2018. The point is not that every modern advance came from one cell line. The point is that HeLa became a platform on which huge portions of modern biomedical science learned to stand.`,
      `Henrietta Lacks did not live to see any of that. She died on October 4, 1951, at age 31. Her children lost their mother. Her husband lost his wife. The scientific world gained a tool it quickly treated as detached from the woman who made it possible.`,
      `For years, the family was not told clearly what had happened. When researchers later contacted relatives for blood samples, the family began to understand that Lacks's cells were alive in laboratories around the world. That discovery was not simple pride. It was confusion, grief, anger, and violation. Some family members struggled to get health care while companies sold HeLa-related products and researchers built careers from the cell line. Medical records and genetic information were discussed publicly in ways the family had not meaningfully controlled.`,
      `The law and ethics of tissue research in 1951 were different from today's informed-consent standards, but that cannot become an excuse. Ethics is not only what a regulation required at the time. It is also about power: who was asked, who was told, who was believed, who could refuse, and whose privacy counted. Black patients had reason to distrust medical institutions because those institutions had repeatedly treated Black bodies as teaching material, research material, or clinical opportunity without equal regard for personhood.`,
      `In 2013, the publication of HeLa genome data created a new privacy crisis. Because HeLa came from Henrietta Lacks, the genome data could also reveal information about her descendants. NIH worked with members of the Lacks family to create a controlled-access process for HeLa whole-genome sequence data. The agreement included Lacks family representation in review of access requests. It was not full ownership, and it did not compensate the family for decades of use. But it marked a public acknowledgment that the family had a legitimate stake in a scientific legacy created from their mother and grandmother's body.`,
      `Henrietta Lacks matters because her story refuses separation. It is science and family. Discovery and exploitation. Public benefit and private harm. Progress and consent. The cells are extraordinary, but the education begins when readers understand that "HeLa" was never just a lab label. It was Henrietta Lacks, a Black woman who went to the hospital for care and became part of medical history without being asked.`
    ],
    costImpact: [
      `The cost to Henrietta Lacks was bodily autonomy and privacy at a moment when she was already facing aggressive cancer. The cost to her family was decades of not knowing, not being consulted, and watching a multibillion-dollar biomedical world grow around cells taken from their mother while they had limited power over the story, the records, or the genetic information connected to them.`,
      `The impact is enormous and morally complicated. HeLa cells helped build modern cell biology and supported research across cancer, infectious disease, vaccines, genetics, and toxicology. That public benefit is real. So is the injury. A serious page has to hold both without letting scientific gratitude erase consent.`
    ],
    whyItMattersToday: [
      `Henrietta Lacks matters today because biomedical research still depends on trust. Consent forms and privacy rules are stronger than they were in 1951, but trust is not built by paperwork alone. It is built by listening to communities whose bodies have been used while their voices were dismissed.`,
      `Her story also changes how readers should talk about discovery. Science is not only experiments, papers, and prizes. It is also patients, families, hospitals, race, law, commercial systems, and memory. When a sample becomes valuable, the person behind it should not disappear.`,
      `The most honest way to honor Lacks is not to call her a willing donor. She was not asked. The honor is to name what happened, credit her contribution, respect her descendants, and insist that medical progress and human dignity belong in the same sentence.`
    ],
    connected: [
      { href: '@root/encyclopedia/daniel-hale-williams.html', title: 'Daniel Hale Williams', description: 'Connects Lacks to Black medical history and the struggle for ethical care.' },
      { href: '@root/encyclopedia/helen-octavia-dickens.html', title: 'Dr. Helen Octavia Dickens', description: 'Links reproductive health, medical access, and Black women\'s care.' },
      { href: '@root/generated/pages/patricia-bath.html', title: 'Patricia Bath', description: 'Places Lacks beside another medical story where Black life and innovation changed care.' },
      { href: '@root/encyclopedia/environmental-racism.html', title: 'Environmental Racism', description: 'Connects bodily risk to systems that decide whose health is protected.' }
    ],
    externalLinks: [
      { source: 'NIH Office of Science Policy', title: 'HeLa Cells: A Lasting Contribution to Biomedical Research', url: 'https://osp.od.nih.gov/hela-cells/' },
      { source: 'NIH Grants and Funding', title: 'The NIH-Lacks Family Agreement', url: 'https://www.grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/privacy/nih-lacks-family-agreement' },
      { source: 'NIH Guide Notice', title: 'Update to HeLa Cell Whole Genome Sequence Data Submission and Access', url: 'https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-098.html' },
      { source: 'Johns Hopkins Medicine', title: 'Role of The Johns Hopkins Hospital', url: 'https://www.hopkinsmedicine.org/henrietta-lacks/role-of-the-johns-hopkins-hospital' },
      { source: 'Johns Hopkins Medicine', title: 'Henrietta Lacks Frequently Asked Questions', url: 'https://www.hopkinsmedicine.org/henrietta-lacks/frequently-asked-questions' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://osp.od.nih.gov/hela-cells/', 'https://www.grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/privacy/nih-lacks-family-agreement', 'https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-098.html', 'https://www.hopkinsmedicine.org/henrietta-lacks/role-of-the-johns-hopkins-hospital'],
      supportingSources: ['https://www.hopkinsmedicine.org/henrietta-lacks/frequently-asked-questions'],
      verifiedQuoteSource: 'No quotation included. NIH acknowledgment language was used as evidence but not as a pull quote.',
      sensitiveClaimsReviewed: 'Consent, race and hospital segregation context, HeLa first-continuous-cell-line language, publication counts, family knowledge, genome-data agreement, and financial-benefit claims reviewed.',
      materialCorrections: 'Removed stale quiz wording, unsupported profit shorthand, and overbroad patent/tonnage framing from the legacy page.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, medical ethics claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'james-brown',
    outputPath: 'generated/pages/james-brown.html',
    subject: 'James Brown',
    category: 'Music',
    type: 'People',
    dates: '1933 - 2006',
    tags: ['music', 'funk', 'soul', 'apollo-theater', 'black-pride'],
    summary: `James Brown did not just perform soul and funk. He reorganized the center of popular music around rhythm, discipline, sweat, command, and Black pride. Born into poverty in South Carolina and raised partly in Augusta, Georgia, Brown moved from gospel roots and juvenile incarceration into one of the most demanding stage careers in American music. He built bands like precision engines, turned the Apollo Theater into a proving ground, and made songs that changed dance floors, civil rights soundtracks, and hip-hop sampling. His story also includes control, conflict, arrests, abuse allegations, and a hard public life that should not be polished away. Brown matters because his music made Black power audible in the body, not only in speeches.`,
    timeline: [
      { date: 'May 3, 1933', event: 'Born James Joseph Brown near Barnwell, South Carolina.' },
      { date: '1940s', event: 'Grows up in Augusta, Georgia, amid poverty and informal work.' },
      { date: '1949', event: 'Sent to a juvenile detention facility after a robbery conviction.' },
      { date: 'Early 1950s', event: 'Joins a gospel group that becomes the Famous Flames.' },
      { date: '1956', event: 'Please, Please, Please becomes an early hit for James Brown and the Famous Flames.' },
      { date: 'Oct 24, 1962', event: 'Records Live at the Apollo at his own financial risk.' },
      { date: '1965', event: 'Papa\'s Got a Brand New Bag helps define a sharper rhythmic direction.' },
      { date: 'Apr 5, 1968', event: 'Performs a televised Boston concert the day after King\'s assassination.' },
      { date: '1968', event: 'Releases Say It Loud, I\'m Black and I\'m Proud.' },
      { date: '1986', event: 'Inducted as a charter member of the Rock & Roll Hall of Fame.' },
      { date: 'Dec 25, 2006', event: 'Dies in Atlanta, Georgia.' }
    ],
    fullStory: [
      `James Brown's music came from discipline as much as inspiration. He was born in 1933 near Barnwell, South Carolina, and raised in poverty in Augusta, Georgia. His childhood was unstable, shaped by separation, work, church music, street life, and survival. That background did not magically produce genius. It gave him a hunger for control, money, movement, and command that would later define his bandstand.`,
      `Brown's early life included incarceration as a teenager after a robbery conviction. In a juvenile facility, he sang gospel and formed relationships that helped lead him toward performance. He joined a group that became the Famous Flames, and in 1956 Please, Please, Please made him a national R&B force. The song's pleading intensity carried church feeling into secular performance without losing the emotional structure of call and response.`,
      `Brown's stage show became legendary because it was engineered. The cape routine, the falls to his knees, the screams, the spins, the microphone tricks, and the sudden stops were not chaos. They were timing. Smithsonian materials describe him as setting a standard for dynamic live performance and centering rhythm. Brown fined musicians for mistakes, rehearsed relentlessly, and used hand signals to control accents and breaks. The band had to be as sharp as his feet.`,
      `Live at the Apollo, recorded in 1962, was a risk. His label did not initially see the value of a live album, so Brown helped finance it himself. The Apollo Theater's own history calls the album a major commercial and critical success that cemented his status. That record matters because it captured the exchange between Brown and a Black audience. The crowd is not background. It is part of the instrument.`,
      `By the mid-1960s, Brown's music was changing. Songs such as Papa's Got a Brand New Bag, Cold Sweat, and later Sex Machine stripped the arrangement toward rhythm, riff, and groove. The downbeat became a political and physical event. Funk did not come from nowhere. Brown and his musicians built it through repetition, syncopation, tight horn lines, bass patterns, and the insistence that rhythm could carry meaning without a polite melody leading the way.`,
      `Brown's public role sharpened in 1968. The day after Martin Luther King Jr. was assassinated, Brown performed a televised concert in Boston that officials hoped would reduce unrest. That event has often been described as Brown helping calm a city, but the story is more complicated. Brown used celebrity, television, and Black audience trust at a moment when grief could not be managed by police alone. Later that year, Say It Loud, I'm Black and I'm Proud became an anthem of cultural confidence. Children answered the call in the recording, making pride sound intergenerational.`,
      `His legacy is not clean. Brown was controlling with band members, fought financial and legal battles, and faced serious allegations and convictions related to violence and abuse. A full history cannot use Black pride to excuse harm. The same drive for command that made the music exacting could become destructive in private and professional life. That complexity belongs on the page because readers deserve people, not posters.`,
      `Brown's influence on hip-hop is difficult to overstate. Breakbeats, drum patterns, horn stabs, and vocal fragments from his records became raw material for DJs and producers. Smithsonian states plainly that hip-hop is unimaginable without him. That is not only because his records were sampled. It is because Brown changed how popular music understood the body, the beat, and Black performance authority.`,
      `James Brown matters because he made rhythm speak in public. He turned the stage into a place where Black precision, joy, ambition, discipline, and pride could not be ignored. To hear him fully is to hear both liberation and control, both genius and trouble, both the groove and the cost of keeping it that tight.`
    ],
    quote: {
      text: `Say it loud: I'm Black and I'm proud.`,
      cite: 'James Brown, 1968 recording title and refrain'
    },
    costImpact: [
      `Brown paid through punishing work, relentless touring, legal trouble, damaged relationships, and a public life where control became both method and problem. Band members paid too, through exacting demands, fines, and a workplace built around his authority.`,
      `His impact remade soul, funk, R&B, dance, and hip-hop. He made Black pride commercially audible during a volatile civil rights moment and gave later musicians a rhythmic language that producers, dancers, and crowds still use.`
    ],
    whyItMattersToday: [
      `Brown matters today because rhythm is a historical archive. Funk carries church, labor, marching, nightlife, and Black southern movement into global sound. The beat is not only entertainment. It is memory organized through the body.`,
      `His story also asks readers to hold influence and accountability together. A person can change music and still leave harm that should be named. Honest history does not need saints to teach.`,
      `Every time hip-hop builds from a break, every time a band hits the one, Brown is somewhere in the room. The point is not nostalgia. It is lineage.`
    ],
    connected: [
      { href: '@root/encyclopedia/duke-ellington.html', title: 'Duke Ellington', description: 'Connects Brown to Black band leadership, arrangement, and musical command.' },
      { href: '@root/encyclopedia/black-dance.html', title: 'Black Dance Culture', description: 'Places Brown\'s stage movement inside a broader history of Black performance.' },
      { href: '@root/encyclopedia/ella-fitzgerald.html', title: 'Ella Fitzgerald', description: 'Links Brown to another performer whose live virtuosity reshaped American music.' },
      { href: '@root/generated/pages/alvin-ailey.html', title: 'Alvin Ailey', description: 'Connects rhythm, body, Black southern memory, and performance as cultural archive.' }
    ],
    externalLinks: [
      { source: 'Smithsonian Institution', title: 'James Brown: Godfather of Soul', url: 'https://www.si.edu/spotlight/james-brown' },
      { source: 'Rock & Roll Hall of Fame', title: 'James Brown', url: 'https://rockhall.com/inductees/james-brown/' },
      { source: 'Apollo Theater', title: 'About The Apollo: History and Legacy', url: 'https://www.apollotheater.org/about' },
      { source: 'Smithsonian Magazine', title: 'Legends of the Apollo', url: 'https://www.smithsonianmag.com/arts-culture/legends-of-the-apollo-42880/' },
      { source: 'Songwriters Hall of Fame', title: 'James Brown', url: 'https://www.songhall.org/profiles/james-brown' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.si.edu/spotlight/james-brown', 'https://rockhall.com/inductees/james-brown/', 'https://www.apollotheater.org/about'],
      supportingSources: ['https://www.smithsonianmag.com/arts-culture/legends-of-the-apollo-42880/', 'https://www.songhall.org/profiles/james-brown'],
      verifiedQuoteSource: 'Song title and refrain from Brown\'s 1968 recording. No long lyric excerpt used.',
      sensitiveClaimsReviewed: 'Poverty/incarceration framing, Apollo recording, Boston 1968 calming claim, funk influence, hip-hop sampling influence, legal trouble, and abuse/harm language reviewed.',
      materialCorrections: 'Converted markdown-generated page into rich renderer and added complexity around labor, control, and harm.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified short refrain/title, music/civil-rights claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'james-meredith',
    outputPath: 'generated/pages/james-meredith.html',
    subject: 'James Meredith',
    category: 'Education',
    type: 'People',
    dates: '1933 - Present',
    tags: ['education', 'integration', 'mississippi', 'civil-rights', 'voting-rights'],
    summary: `James Meredith did not integrate the University of Mississippi because he wanted a tidy milestone. He called it a war against white supremacy. An Air Force veteran from Mississippi, Meredith applied to Ole Miss in 1961, fought rejection and delay in court, and entered the campus in 1962 under federal protection after a deadly white riot. He later graduated, then launched the 1966 March Against Fear to challenge terror around Black voting and movement in Mississippi. Meredith matters because he was not simply escorted into history by the Kennedys or the NAACP. He was a strategist with his own ideas, his own conflicts with major civil rights organizations, and a stubborn belief that one person could force a state to reveal itself.`,
    timeline: [
      { date: 'Jun 25, 1933', event: 'Born in Kosciusko, Mississippi.' },
      { date: '1951-1960', event: 'Serves in the U.S. Air Force.' },
      { date: '1960', event: 'Enrolls at Jackson State College after returning to Mississippi.' },
      { date: 'Jan 1961', event: 'Requests application materials from the University of Mississippi.' },
      { date: '1961-1962', event: 'Pursues litigation after Ole Miss rejects and delays his admission.' },
      { date: 'Sep 30-Oct 1, 1962', event: 'Federal marshals escort Meredith to campus as a white riot erupts.' },
      { date: 'Oct 1, 1962', event: 'Registers as the first Black student at the University of Mississippi.' },
      { date: 'Aug 1963', event: 'Graduates from the University of Mississippi.' },
      { date: 'Jun 5, 1966', event: 'Begins the March Against Fear from Memphis to Jackson.' },
      { date: 'Jun 6, 1966', event: 'Is shot and wounded near Hernando, Mississippi.' },
      { date: 'Jun 26, 1966', event: 'Rejoins the march as it reaches Jackson.' }
    ],
    fullStory: [
      `James Meredith was born in Mississippi in 1933, into a state that built white supremacy into law, schools, voting, policing, land, and custom. His father was an independent farmer, and Meredith grew up with a fierce sense of dignity. He later described his fight as a direct challenge to white supremacy, not a request to be included politely.`,
      `Meredith served in the U.S. Air Force from 1951 to 1960. Military service mattered to his sense of citizenship. Like many Black veterans before him, he returned with a sharpened refusal to accept second-class treatment at home. He enrolled at Jackson State College, then set his sights on the University of Mississippi, the flagship public university of a state determined to keep him out.`,
      `In 1961, Meredith began seeking admission. His application was rejected or delayed through tactics designed to preserve segregation. With legal assistance, he sued. The Fifth Circuit eventually found that he had been rejected because of race and ordered his admission. Mississippi officials, including Governor Ross Barnett, resisted. The case became a confrontation between federal authority and state segregation.`,
      `That legal fight mattered because Mississippi tried to make racism look procedural. Admissions forms, recommendations, transfer rules, and official delays became tools for the same exclusion that Brown v. Board had already declared unconstitutional in public education. Meredith's case made clear that desegregation required more than a Supreme Court principle. It required plaintiffs willing to endure retaliation, lawyers willing to force the record open, judges willing to issue orders, and federal officials willing, eventually, to enforce them.`,
      `On September 30, 1962, federal marshals escorted Meredith to the Ole Miss campus in Oxford. A white mob attacked. The violence killed two people and injured scores of marshals and soldiers. JFK Library materials describe Meredith registering as the first Black student after the night of rioting. The National Portrait Gallery account notes the federal military presence that followed. Integration was not a peaceful photo opportunity. It was enforced under siege.`,
      `Meredith attended classes under guard and social isolation. He was not only a student. He was a living challenge to Mississippi's claim that segregation reflected order. His presence made the university, the state, and the federal government show what they were willing to do and what they had refused to do before pressure forced action. He graduated in August 1963.`,
      `The daily strain of that year should not disappear behind the dramatic riot. A classroom can become hostile even when no one throws a bottle. Meredith had to study, eat, move across campus, and complete assignments while his body was treated as a political event. The university admitted him because it was compelled to, not because it had prepared a community to receive him. That distinction explains why integration often placed extraordinary emotional labor on the very students whose rights had been denied.`,
      `Meredith's later activism was just as revealing. In 1966, he began the March Against Fear, a solo walk from Memphis, Tennessee, to Jackson, Mississippi, meant to challenge fear around Black voting and movement. He was shot and wounded on the second day near Hernando, Mississippi. Civil rights organizations continued the march, and leaders including Martin Luther King Jr., Stokely Carmichael, Floyd McKissick, and others joined. The march became a stage for debates over nonviolence, Black Power, voting rights, and movement direction.`,
      `Meredith's relationship with established civil rights organizations was complicated. He was fiercely independent and often critical of movement leadership. That independence can make him harder to place in simplified histories that prefer heroes inside familiar organizational lanes. But Meredith's difficulty is part of his significance. He forced action without always fitting the image of the cooperative plaintiff or grateful beneficiary.`,
      `The Ole Miss integration story also shows the limits of "first" language. Meredith became the first Black student there, but that did not mean the institution was transformed overnight. Integration required federal power because Mississippi's public institutions chose resistance. Later Black students still faced racism, isolation, and the work of changing campus culture after the cameras left.`,
      `James Meredith matters because he turned admission into exposure. He exposed state power, mob violence, federal hesitation, and the courage required to make a public university obey the Constitution. His story is not only about getting in. It is about what America showed of itself at the door.`
    ],
    quote: {
      text: `No price is too high to pay for freedom of person, equality of opportunity, and human dignity.`,
      cite: 'James Meredith, 1963 letter quoted in JFK Library forum transcript'
    },
    costImpact: [
      `Meredith paid with physical danger, isolation, surveillance, and the burden of attending school as a federal crisis. The Ole Miss riot killed two people and injured many others, while the university and surrounding community became militarized because Mississippi officials would not obey integration orders.`,
      `His impact reached beyond one campus. He forced the federal government to act, broke a major state university's segregation barrier, and later helped spark the March Against Fear, a campaign that intensified voting-rights organizing and public debate over Black Power.`
    ],
    whyItMattersToday: [
      `Meredith matters today because access to a school can still be mistaken for justice inside a school. His story shows that admission is one step; climate, power, funding, memory, and institutional honesty are the next battlegrounds.`,
      `He also matters because he complicates movement memory. Not every important actor fit comfortably inside major organizations or shared strategy. Meredith's independence reminds readers that liberation movements include friction, ego, conviction, disagreement, and stubborn personal initiative.`,
      `The Ole Miss crisis is a warning against polite versions of integration. The state did not simply change its mind. It was compelled.`
    ],
    connected: [
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'Connects Meredith to the legal struggle over school desegregation.' },
      { href: '@root/generated/pages/constance-baker-motley.html', title: 'Constance Baker Motley', description: 'Links Meredith to the legal architects who fought segregation in court.' },
      { href: '@root/encyclopedia/jackie-robinson.html', title: 'Jackie Robinson', description: 'Places education integration beside sports integration and public backlash.' },
      { href: '@root/generated/pages/freedom-riders.html', title: 'Freedom Riders', description: 'Connects federal enforcement, white resistance, and movement courage in the Deep South.' }
    ],
    externalLinks: [
      { source: 'JFK Library', title: 'James Meredith and the Integration of Ole Miss', url: 'https://www.jfklibrary.org/events-and-awards/kennedy-library-forums/past-forums/transcripts/james-meredith-and-the-integration-of-ole-miss' },
      { source: 'JFK Library', title: 'Mississippi Integration Situation, September 30, 1962', url: 'https://www.jfklibrary.org/asset-viewer/archives/jfkwhcsf-0924-037' },
      { source: 'National Archives', title: 'Findings on MLK Assassination', url: 'https://www.archives.gov/research/jfk/select-committee-report/part-2-king-findings.html' },
      { source: 'University of Mississippi', title: 'Past, Present, and Future', url: 'https://olemiss.edu/who-we-are/past-present-and-future/' },
      { source: 'National Portrait Gallery', title: 'September 30, 1962: James Meredith and the University of Mississippi', url: 'https://npg.si.edu/blog/september-30-1962-james-meredith-university-mississippi' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.jfklibrary.org/events-and-awards/kennedy-library-forums/past-forums/transcripts/james-meredith-and-the-integration-of-ole-miss', 'https://www.jfklibrary.org/asset-viewer/archives/jfkwhcsf-0924-037', 'https://olemiss.edu/who-we-are/past-present-and-future/'],
      supportingSources: ['https://www.archives.gov/research/jfk/select-committee-report/part-2-king-findings.html', 'https://npg.si.edu/blog/september-30-1962-james-meredith-university-mississippi'],
      verifiedQuoteSource: 'JFK Library forum transcript quotes Meredith\'s September 5, 1963 letter.',
      sensitiveClaimsReviewed: 'Riot casualty/injury counts, first student registration date, federal enforcement, Barnett resistance, March Against Fear shooting, Black Power context, and living-status date reviewed.',
      materialCorrections: 'Converted markdown-generated page into rich renderer and added Meredith\'s independence and later activism.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified quotation, education-integration claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'jan-matzeliger',
    fullDate: '2026-07-15',
    dailyDateLabel: 'July 15',
    subject: 'Jan Matzeliger',
    category: 'Innovation',
    type: 'People',
    dates: '1852 - 1889',
    tags: ['invention', 'shoes', 'manufacturing', 'suriname', 'patents'],
    summary: `Jan Matzeliger changed what ordinary people could afford to put on their feet. Born in Suriname to a Dutch father and a Surinamese mother who had been enslaved, he moved through machine shops, merchant ships, Philadelphia, and Lynn, Massachusetts, before inventing a shoe-lasting machine patented in 1883. Lasting was the hard step that shaped and attached the upper of a shoe to the sole. Skilled workers could do it by hand, but slowly. Matzeliger's machine mechanized the process and helped make mass-produced shoes cheaper and more available. His life also shows the familiar pattern: the invention transformed an industry, while the inventor died young, underpaid by the full value of what he made possible.`,
    timeline: [
      { date: 'Sep 15, 1852', event: 'Born Jan Ernst Matzeliger in Paramaribo, Suriname.' },
      { date: 'c. 1862', event: 'Begins working around machine shops connected to his father\'s work.' },
      { date: '1871', event: 'Begins work as a sailor, according to National Inventors Hall of Fame summary.' },
      { date: '1873', event: 'Settles in Philadelphia after leaving maritime work.' },
      { date: '1877', event: 'Moves to Lynn, Massachusetts, a major shoe manufacturing center.' },
      { date: 'Jan 24, 1882', event: 'Files patent application for a lasting machine.' },
      { date: 'Mar 20, 1883', event: 'Receives U.S. Patent No. 274,207 for the lasting machine.' },
      { date: '1880s', event: 'Continues improving the machine and gains manufacturing interest.' },
      { date: 'Aug 24, 1889', event: 'Dies of tuberculosis before turning 37.' },
      { date: '1991', event: 'Honored on a Black Heritage postage stamp.' },
      { date: '2006', event: 'Inducted into the National Inventors Hall of Fame.' }
    ],
    fullStory: [
      `Jan Ernst Matzeliger was born in Paramaribo, Suriname, in 1852. His background already carried the history of empire, race, and labor. The National Inventors Hall of Fame describes him as the son of a Dutch father and a Surinamese mother who had been enslaved. He learned machinery early, working around shops connected to his father's supervision. That early mechanical familiarity mattered when he later entered one of New England's most important manufacturing worlds.`,
      `As a young man, Matzeliger worked as a sailor and eventually reached the United States. He settled first in Philadelphia and then moved to Lynn, Massachusetts, a major shoe-producing city. Lynn was a place where shoes were not only worn but engineered through labor systems, machines, skilled trades, and factory pressure. The industry had mechanized many steps, but lasting remained stubbornly difficult.`,
      `Lasting sounds simple until you picture it. The upper part of a shoe had to be shaped tightly over a last, then attached to the sole. It required judgment, strength, dexterity, and consistency. Skilled hand lasters could produce high-quality work, but the process limited speed and kept shoes expensive. Manufacturers wanted a machine. Many had failed to build one that could imitate the complex pull, stretch, placement, and fastening involved.`,
      `The difficulty was partly mechanical and partly human. A machine had to hold leather without tearing it, draw it smoothly over an irregular form, place tacks or fasteners correctly, and repeat the operation across sizes and styles. It had to do what a skilled worker did by eye, hand, and habit. That is why Matzeliger's invention belongs in the history of industrial intelligence, not just Black "firsts." He studied a craft deeply enough to translate embodied knowledge into motion, pressure, timing, and parts.`,
      `Matzeliger studied the process from inside the factory. He observed workers, bought reference books, used secondhand drafting tools, and built models after long workdays. The National Inventors Hall of Fame notes that one early model used cigar boxes, elastic, and wire. That detail is not quaint. It shows invention happening without abundant capital, in scraps and after-hours thinking.`,
      `His patent, U.S. Patent No. 274,207, was granted on March 20, 1883. The patent itself states the purpose: to perform by machinery, in a more expeditious and economical manner, operations previously done by hand. The Smithsonian National Postal Museum credits the machine with increasing production from about 50 pairs a day by an expert hand laster to as many as 700 pairs. Those numbers tell an industrial story: speed rose, costs fell, and quality shoes became more widely available.`,
      `The invention also changed labor. Mechanization could reduce prices and expand access, but it could also weaken the bargaining power of skilled workers whose knowledge had anchored the process. Matzeliger's story should not be told as machines simply replacing people for the better. It belongs to a history in which Black and immigrant inventors, factory owners, skilled laborers, and consumers all stood in different relationships to industrial change.`,
      `That complexity is important because innovation stories can become too clean. Cheaper shoes mattered to working families. More efficient factories mattered to owners and consumers. But a machine that reorganized skill also reorganized power on the shop floor. Matzeliger's achievement sits at that intersection, where a brilliant solution could improve access while helping accelerate the factory discipline that reshaped nineteenth-century labor.`,
      `Matzeliger did gain recognition and stock connected to manufacturing his invention, but he did not live long enough to benefit fully. He died of tuberculosis in 1889, not yet 37. The United Shoe Machinery Company later obtained patent and company interests. Lynn's shoe industry benefited from the process he helped transform, while his name remained far less known than the everyday product his machine helped cheapen.`,
      `His page matters because invention is often hidden inside ordinary objects. A shoe on the floor contains labor history, patent history, racial history, factory history, and global migration. Matzeliger's machine did not merely make production faster. It changed the economics of daily life.`
    ],
    costImpact: [
      `Matzeliger paid through overwork, illness, limited capital, and early death before he could fully benefit from the machine's industrial value. Skilled hand lasters also faced the cost of mechanization, as a craft process became more automated and factory power shifted.`,
      `The impact was enormous: faster shoe production, lower prices, and a major shift in manufacturing. The machine helped make durable shoes more accessible to ordinary consumers, while proving again that Black invention was embedded in the material infrastructure of everyday life.`
    ],
    whyItMattersToday: [
      `Matzeliger matters today because people often separate technology from labor. His story puts them back together. A machine is not only a device. It is a decision about skill, speed, cost, ownership, and who benefits from efficiency.`,
      `He also matters because Black invention is not only spectacular or futuristic. Sometimes it is inside the common object everyone uses and almost nobody studies.`,
      `The next time a reader thinks about mass production, Matzeliger belongs in the conversation: a Suriname-born inventor in a Massachusetts shoe city, solving one of the hardest problems in an industry that touched millions of feet.`
    ],
    connected: [
      { href: '@root/generated/pages/elijah-mccoy.html', title: 'Elijah McCoy', description: 'Connects Matzeliger to Black mechanical invention and industrial labor.' },
      { href: '@root/generated/pages/granville-woods.html', title: 'Granville T. Woods', description: 'Links patent struggle and invention in transportation and manufacturing systems.' },
      { href: '@root/encyclopedia/garrett-morgan.html', title: 'Garrett Morgan', description: 'Places Matzeliger beside another practical inventor whose work changed daily safety.' },
      { href: '@root/encyclopedia/black-tech-pioneers.html', title: 'Black Tech Pioneers', description: 'Broadens the story to Black invention, engineering, and hidden infrastructure.' }
    ],
    externalLinks: [
      { source: 'National Inventors Hall of Fame', title: 'Jan Ernst Matzeliger', url: 'https://www.invent.org/inductees/jan-ernst-matzeliger' },
      { source: 'Smithsonian National Postal Museum', title: 'Jan Matzeliger', url: 'https://postalmuseum.si.edu/exhibition/the-black-experience-business-leaders-and-inventors/jan-matzeliger' },
      { source: 'Google Patents', title: 'US274207A: Lasting Machine', url: 'https://patents.google.com/patent/US274207A/en' },
      { source: 'Smithsonian Collections', title: 'The Real McCoy: Jan E. Matzeliger', url: 'https://collections.si.edu/search/detail/ead_component%3Asova-acma-03-026-ref506?q=%22shoe+machinery%22' },
      { source: 'Smithsonian Institution', title: 'United Shoe Machinery Corporation Records', url: 'https://www.si.edu/es/object/archives/components/sova-nmah-ac-0277-ref385' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.invent.org/inductees/jan-ernst-matzeliger', 'https://postalmuseum.si.edu/exhibition/the-black-experience-business-leaders-and-inventors/jan-matzeliger', 'https://patents.google.com/patent/US274207A/en'],
      supportingSources: ['https://collections.si.edu/search/detail/ead_component%3Asova-acma-03-026-ref506?q=%22shoe+machinery%22', 'https://www.si.edu/es/object/archives/components/sova-nmah-ac-0277-ref385'],
      verifiedQuoteSource: 'No quotation included. Patent language was used for factual verification but not as a pull quote.',
      sensitiveClaimsReviewed: 'Birthplace, mother enslaved language, patent number/date, production-rate comparison, labor displacement, tuberculosis death, and company-stock transfer reviewed.',
      materialCorrections: 'Expanded scheduled fallback into full manufacturing, labor, patent, and access history.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, invention/labor claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'jane-bolin',
    fullDate: '2026-08-19',
    dailyDateLabel: 'August 19',
    subject: 'Jane Bolin',
    category: 'Law',
    type: 'People',
    dates: '1908 - 2007',
    tags: ['law', 'judges', 'family-court', 'new-york', 'children'],
    summary: `Jane Bolin's firsts are striking: first Black woman to graduate from Yale Law School, first Black woman assistant corporation counsel in New York City, and first Black woman judge in the United States. But firsts are only the doorway. Bolin served for 40 years in New York's Domestic Relations Court, later Family Court, where she worked on policies affecting children, probation, race, placement, and family life. Her work happened in rooms where headlines rarely stayed: custody disputes, neglected children, unequal services, and court systems that could reproduce racial harm quietly. Bolin matters because she made legal history not only by taking the bench, but by using it to challenge discrimination in the machinery of care.`,
    timeline: [
      { date: 'Apr 11, 1908', event: 'Born Jane Matilda Bolin in Poughkeepsie, New York.' },
      { date: '1916', event: 'Her mother dies when Bolin is a child; her father, attorney Gaius Bolin, raises her with a strong legal example.' },
      { date: '1928', event: 'Graduates from Wellesley College.' },
      { date: '1931', event: 'Becomes the first Black woman to graduate from Yale Law School.' },
      { date: '1932', event: 'Passes the New York bar examination.' },
      { date: '1937', event: 'Becomes the first Black woman Assistant Corporation Counsel in New York City.' },
      { date: 'Jul 22, 1939', event: 'Mayor Fiorello La Guardia swears her in as a judge of New York City\'s Domestic Relations Court.' },
      { date: '1940s-1970s', event: 'Serves on the bench and works against discriminatory child-placement and probation policies.' },
      { date: '1978', event: 'Retires after 40 years of judicial service.' },
      { date: 'Jan 8, 2007', event: 'Dies in Queens, New York.' }
    ],
    fullStory: [
      `Jane Bolin was born in Poughkeepsie, New York, in 1908. Her father, Gaius Bolin, was a respected Black attorney and civic figure. Her mother, Matilda, died when Jane was young. Bolin grew up around law books, legal conversation, and the knowledge that the law could be both weapon and shield. That early proximity mattered because the legal profession was not built to welcome Black women.`,
      `Bolin excelled academically, graduating from Wellesley College in 1928. The path was not simple. She faced racism and isolation at elite institutions, and her decision to attend Yale Law School was not universally encouraged. In 1931, she became the first Black woman to graduate from Yale Law School. That achievement was historic, but the job market still treated her as someone who did not belong. Law firms did not line up to hire her.`,
      `She practiced law with family and then with her husband, attorney Ralph Mizelle. In 1937, she became the first Black woman Assistant Corporation Counsel in New York City. Two years later, Mayor Fiorello La Guardia appointed her to the Domestic Relations Court. The appointment made her the first Black woman judge in the United States. She was 31.`,
      `The swearing-in story is often told as a surprise. Bolin was called to appear at the World's Fair, where La Guardia administered the oath. The symbolism was bright: a Black woman judge in New York, photographed and reported as a breakthrough. But the deeper story happened after the cameras left. Bolin remained on the bench for four decades, reappointed by multiple mayors and working in a court system dealing with family conflict, juvenile cases, support, custody, and child welfare.`,
      `Family court work can sound soft to outsiders. It is not. It is where poverty, racism, gender, family separation, state power, and childhood vulnerability meet. Bolin pushed against discriminatory policies, including assignments and services that separated or treated children differently by race. New York State and Yale accounts credit her with fighting racial discrimination in the court system and advocating for children, especially children of color.`,
      `That work required attention to small administrative choices that could carry large racial consequences. Which agency received a child? Which probation officer was assigned? Which families were treated as troubled but salvageable, and which were treated as already suspect? Bolin understood that discrimination did not need a dramatic courtroom speech to do damage. It could sit in routine practice, in the forms and habits of a court that claimed to be neutral.`,
      `Her work also complicates the history of Black women in law. Bolin was not arguing landmark Supreme Court cases in the spotlight. She was making daily institutional decisions inside a court that shaped intimate life. The power of that work is easy to underestimate because it did not always produce famous opinions. But fair process in family court can determine where a child lives, what support a parent receives, and whether a family meets the state as help or punishment.`,
      `Bolin also served on boards and civic organizations, including the NAACP and New York Urban League. Her relationship with institutions could be complicated, as later scholarship notes tensions with NAACP leadership. That complexity matters because Black women professionals often had to navigate sexism, racism, respectability expectations, and organizational politics while still doing public work.`,
      `She retired in 1978 after 40 years as a judge and lived until 2007. The length of her service can make the achievement sound settled, but the questions remain active: Who gets to interpret family need? Who gets discretion? Who receives care, and who receives surveillance? Bolin's career sits at the root of those questions.`,
      `Jane Bolin matters because she proves that legal history is not only made in constitutional headlines. It is made in the repeated choices of courts that touch ordinary people. Her firsts opened the door. Her real legacy is what she tried to change after she sat down on the bench.`
    ],
    costImpact: [
      `Bolin paid the cost of being a Black woman pioneer inside elite legal education and public law. She faced isolation, hiring discrimination, and the burden of representing possibility in spaces that treated her presence as exceptional. The work itself carried emotional weight: family court required decisions amid poverty, trauma, racial bias, and limited social supports.`,
      `Her impact reached children and families who may never have known her as a national first. By challenging discriminatory practices in child placement and court services, she used judicial authority to make quiet systems more accountable. Her career widened the imagination of who could sit in judgment.`
    ],
    whyItMattersToday: [
      `Bolin matters today because courts still shape family life in ways that can either protect vulnerable people or reproduce inequality. Family court is not outside civil rights history. It is one of the places civil rights either becomes daily practice or fails.`,
      `Her story also helps readers move beyond firsts. Representation on the bench matters, but it matters most when connected to policy, discretion, fairness, and the lived experience of people before the court.`,
      `Bolin's life asks a practical question: once the door opens, what will the institution do differently?`
    ],
    connected: [
      { href: '@root/generated/pages/charlotte-ray.html', title: 'Charlotte E. Ray', description: 'Connects Bolin to earlier Black women breaking barriers in American law.' },
      { href: '@root/generated/pages/constance-baker-motley.html', title: 'Constance Baker Motley', description: 'Links Bolin to Black women judges and civil-rights law.' },
      { href: '@root/encyclopedia/black-women-in-politics.html', title: 'Black Women in Politics', description: 'Broadens the story to Black women in public authority and institutional power.' },
      { href: '@root/encyclopedia/brown-v-board.html', title: 'Brown v. Board of Education', description: 'Connects court authority to the larger legal struggle against segregation.' }
    ],
    externalLinks: [
      { source: 'Yale & Slavery Research Project', title: 'Jane Bolin', url: 'https://ysrp.yale.edu/jane-bolin' },
      { source: 'Yale Law School', title: 'Historical Profile: Jane Matilda Bolin \'31', url: 'https://law.yale.edu/yls-today/news/historical-profile-jane-matilda-bolin-31' },
      { source: 'Empire State Plaza', title: 'New York Leaders: Jane Bolin', url: 'https://empirestateplaza.ny.gov/node/2151' },
      { source: 'Yale University Library', title: 'Jane Matilda Bolin', url: 'https://onlineexhibits.library.yale.edu/s/early-black-yale-students/item/20922' },
      { source: 'New York City Bar Association', title: 'Path-Breaking Black Lawyers', url: 'https://www.nycbar.org/blogs/city-bar-celebrates-black-heritage-month-and-path-breaking-black-lawyers/' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://ysrp.yale.edu/jane-bolin', 'https://law.yale.edu/yls-today/news/historical-profile-jane-matilda-bolin-31', 'https://empirestateplaza.ny.gov/node/2151'],
      supportingSources: ['https://onlineexhibits.library.yale.edu/s/early-black-yale-students/item/20922', 'https://www.nycbar.org/blogs/city-bar-celebrates-black-heritage-month-and-path-breaking-black-lawyers/'],
      verifiedQuoteSource: 'No quotation included. Available sources support facts more strongly than a traceable concise quote.',
      sensitiveClaimsReviewed: 'First Black woman judge claim, Yale first claim, Assistant Corporation Counsel first claim, father and family claims, NAACP/civic service, court policy impact, retirement and death dates reviewed.',
      materialCorrections: 'Expanded scheduled fallback into full legal, family-court, and institutional-power account.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, no unsupported quote, legal first-claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'jacob-lawrence',
    fullDate: '2026-07-20',
    dailyDateLabel: 'July 20',
    subject: 'Jacob Lawrence',
    category: 'Culture',
    type: 'People',
    dates: '1917 - 2000',
    tags: ['art', 'great-migration', 'harlem', 'painting', 'visual-history'],
    summary: `Jacob Lawrence painted history as movement: crowded train stations, angled bodies, working hands, storefront churches, courtrooms, floodwaters, and families carrying more than luggage. He was only 23 when he completed The Migration Series, 60 small panels that made the Great Migration visible as a national story and a modern art landmark. Lawrence did not paint Black history as illustration after the fact. He researched it, sequenced it, captioned it, and made color carry memory. His work matters because it rejects the idea that serious history belongs only in books or monuments. Lawrence taught migration, labor, violence, hope, and community through panels that move like testimony, music, and a train schedule at once.`,
    timeline: [
      { date: 'Sep 7, 1917', event: 'Born in Atlantic City, New Jersey.' },
      { date: '1919', event: 'Family moves to Easton, Pennsylvania, part of a wider Black migration northward.' },
      { date: '1930', event: 'Moves to Harlem with his mother and siblings.' },
      { date: 'Early 1930s', event: 'Studies art through Harlem programs and mentors including Charles Alston and Augusta Savage.' },
      { date: '1937', event: 'Receives a scholarship to the American Artists School.' },
      { date: '1937-1940', event: 'Creates historical series on Toussaint L\'Ouverture, Frederick Douglass, and Harriet Tubman.' },
      { date: '1940-1941', event: 'Completes the 60-panel Migration Series.' },
      { date: 'Nov 1941', event: 'Migration Series is exhibited at Edith Halpert\'s Downtown Gallery; Fortune publishes 26 panels.' },
      { date: '1942', event: 'MoMA and The Phillips Collection divide and acquire The Migration Series.' },
      { date: '1971', event: 'Begins teaching at the University of Washington in Seattle.' },
      { date: 'Jun 9, 2000', event: 'Dies in Seattle, Washington.' }
    ],
    fullStory: [
      `Jacob Lawrence was born in 1917, the child of a family whose movement belonged to the Great Migration. His parents had southern roots, and his early life moved through Atlantic City, Easton, Philadelphia, and Harlem. That geography matters. Lawrence was not looking at migration from a distance. He grew up inside the afterlife of it, surrounded by people whose memories of the South, labor, violence, music, church, and movement shaped northern Black neighborhoods.`,
      `Harlem gave him teachers and subject matter. In the 1930s, while the Depression narrowed opportunity, Black arts institutions and community programs opened rooms where Lawrence could learn. He studied with artists including Charles Alston, was encouraged by Augusta Savage, and spent time in libraries, including the Schomburg Collection. He learned that painting could do historical work without becoming flat illustration.`,
      `Before The Migration Series, Lawrence painted narrative cycles about Toussaint L'Ouverture, Frederick Douglass, Harriet Tubman, and John Brown. These series show his method: research, sequence, compression, and repetition. He did not paint one grand heroic scene. He built history panel by panel, letting small images accumulate into force. That approach gave collective history room to breathe.`,
      `The Migration Series, completed in 1940 and 1941, tells the story of Black southerners leaving the rural South for northern and midwestern cities. Lawrence researched the movement, listened to community memory, wrote captions, and created 60 tempera panels. The panels are small, but they do not feel small. They show labor demand, crop failure, lynching, courtroom injustice, crowded stations, packed trains, industrial work, housing strain, education, and northern community formation.`,
      `The captions are part of the art. They move the viewer from cause to consequence, making each panel a sentence in a larger argument. Lawrence understood that migration was not one decision made once. It was a chain of letters, wages, threats, train tickets, rumors, family negotiations, labor recruiters, and memories of violence. His sequence lets the viewer feel that history as accumulation rather than as a single symbolic departure.`,
      `MoMA's materials emphasize that Lawrence had never visited the South when he painted the series. That fact is not a weakness. It helps explain the work's form. The series is built from research, oral memory, Black newspapers, and the lived world of Harlem migrants. Lawrence was painting not tourism, but historical transmission.`,
      `His style mattered too. Flattened figures, strong diagonals, repeated colors, and clear captions made the panels readable without making them simple. The people are not portraits in the conventional sense. They are bodies in systems: moving, waiting, working, worshiping, grieving, learning. The captions do not decorate the images. They create a rhythm of evidence.`,
      `In 1941, the Downtown Gallery exhibited the series, and Fortune magazine published 26 panels. Lawrence became one of the first nationally recognized Black modern artists and, through the acquisition of the series by MoMA and The Phillips Collection, entered institutions that had excluded or minimized Black artists. That recognition was important, but it also created a tension. His work was embraced partly because it made Black history legible to white art audiences, yet its authority came from Black community knowledge.`,
      `Lawrence continued making work across decades: war, builders, Hiroshima, civil rights, neighborhood life, and American history. He also taught, especially at the University of Washington. His marriage to artist Gwendolyn Knight was a major creative partnership, and she belongs in the story as part of the artistic life around him, not as a footnote.`,
      `Jacob Lawrence matters because he treated Black movement as national history and modern art at the same time. The Migration Series does not ask whether migrants were tragic or triumphant. It shows why they moved, what they left, what they met, and why they kept coming.`
    ],
    quote: {
      text: `I do not look upon the story of the Blacks in America as a separate experience.`,
      cite: 'Jacob Lawrence, quoted by MoMA'
    },
    costImpact: [
      `Lawrence carried the cost of being a Black modern artist in institutions that did not fully know how to value Black historical subject matter without containing it. He also took on the labor of research, translation, and public teaching, making Black collective memory readable across audiences without giving up its specificity.`,
      `His impact changed visual history. The Migration Series became a central artwork for understanding the Great Migration, modernism, and Black narrative form. It gave teachers, museums, and readers a way to see migration not as a statistic, but as a sequence of human choices under pressure.`
    ],
    whyItMattersToday: [
      `Lawrence matters today because migration is still too often reduced to numbers. His panels insist that movement has causes, routes, emotions, costs, and consequences. People move because systems make staying impossible or because imagination makes leaving necessary.`,
      `His work also reminds readers that art can be historical argument. A painting can cite memory, organize evidence, and make a viewer feel chronology without becoming a textbook.`,
      `The Migration Series belongs in a learning site because it teaches how Black communities carry history across form: caption, color, church story, train ride, family memory, and museum wall.`
    ],
    connected: [
      { href: '@root/generated/pages/alma-thomas.html', title: 'Alma Thomas', description: 'Connects Lawrence to Black artists whose work expanded American modernism.' },
      { href: '@root/generated/pages/augusta-savage.html', title: 'Augusta Savage', description: 'Links Lawrence to Harlem arts mentorship and Black institutional support.' },
      { href: '@root/encyclopedia/harriet-tubman.html', title: 'Harriet Tubman', description: 'Connects to one of the historical figures Lawrence painted in narrative series.' },
      { href: '@root/encyclopedia/black-fashion.html', title: 'Black Fashion and Cultural Appropriation', description: 'Broadens visual culture into questions of style, ownership, and representation.' }
    ],
    externalLinks: [
      { source: 'Smithsonian American Art Museum', title: 'Jacob Lawrence', url: 'https://americanart.si.edu/artist/jacob-lawrence-2828' },
      { source: 'MoMA', title: 'Jacob Lawrence', url: 'https://www.moma.org/collection/artists/3418' },
      { source: 'MoMA', title: 'Jacob Lawrence: The Migration Series', url: 'https://www.moma.org/calendar/exhibitions/444' },
      { source: 'MoMA', title: 'One-Way Ticket: Jacob Lawrence\'s Migration Series', url: 'https://www.moma.org/interactives/exhibitions/2015/onewayticket/static/jacob-lawrence/1/' },
      { source: 'Smithsonian American Art Museum', title: 'Oh Freedom! Jacob Lawrence', url: 'https://americanart.si.edu/education/oh-freedom/jacob-lawrence-john-brown' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://americanart.si.edu/artist/jacob-lawrence-2828', 'https://www.moma.org/collection/artists/3418', 'https://www.moma.org/interactives/exhibitions/2015/onewayticket/static/jacob-lawrence/1/'],
      supportingSources: ['https://www.moma.org/calendar/exhibitions/444', 'https://americanart.si.edu/education/oh-freedom/jacob-lawrence-john-brown'],
      verifiedQuoteSource: 'MoMA artist page quotes Lawrence on Black history as American heritage and experience.',
      sensitiveClaimsReviewed: 'Birth date, first major gallery/acquisition framing, Migration Series panel count and split, never-visited-South context, Harlem mentors, and Great Migration claims reviewed.',
      materialCorrections: 'Expanded scheduled fallback into full art-historical and migration-history account with direct museum sources.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style generated page, ledger record, internal links, 5 external links, verified quotation, art-history first-claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'james-baldwin',
    outputPath: 'encyclopedia/james-baldwin.html',
    subject: 'James Baldwin',
    category: 'Literature',
    type: 'People',
    dates: '1924 - 1987',
    tags: ['literature', 'civil-rights', 'queer-history', 'harlem', 'essays'],
    summary: `James Baldwin wrote as if America were a family argument that could no longer be postponed. He was a Harlem-born novelist, essayist, playwright, preacher's son, expatriate, queer Black writer, and civil rights witness whose sentences made private feeling and public violence answer to each other. Baldwin did not let the country hide behind innocence. He wrote about race, sexuality, religion, masculinity, love, fear, police power, exile, and the damage racism did to Black people and white people differently. His work matters because he refused the false choice between beauty and confrontation. He could write with tenderness and still leave the reader without anywhere to hide.`,
    timeline: [
      { date: 'Aug 2, 1924', event: 'Born James Arthur Baldwin in Harlem, New York.' },
      { date: '1930s', event: 'Attends Frederick Douglass Junior High School and DeWitt Clinton High School.' },
      { date: 'Ages 14-17', event: 'Serves as a teenage preacher, a formation that shapes his later voice.' },
      { date: '1948', event: 'Leaves the United States for France.' },
      { date: '1953', event: 'Publishes Go Tell It on the Mountain.' },
      { date: '1955', event: 'Publishes Notes of a Native Son.' },
      { date: '1956', event: 'Publishes Giovanni\'s Room.' },
      { date: '1963', event: 'Publishes The Fire Next Time and appears on the cover of Time.' },
      { date: '1964', event: 'Blues for Mister Charlie opens on Broadway.' },
      { date: '1974', event: 'Publishes If Beale Street Could Talk.' },
      { date: 'Dec 1, 1987', event: 'Dies in Saint-Paul-de-Vence, France.' },
      { date: '2016', event: 'Raoul Peck\'s I Am Not Your Negro brings Baldwin\'s unfinished Remember This House project to new audiences.' }
    ],
    fullStory: [
      `James Baldwin was born in Harlem in 1924 and raised in a crowded household under the authority of a stern stepfather who preached. He learned language in church, school, streets, books, and argument. The pulpit mattered. Even after he left the church, the rhythm of sermon, testimony, warning, and invitation stayed in his prose. NMAAHC notes that Baldwin later said he left the church to become a writer but never left the pulpit.`,
      `Baldwin was a gifted student and reader. He attended schools that connected him to Harlem's intellectual world, including teachers and literary influences. He also grew up under poverty, racism, family pressure, and questions of sexuality that the world around him did not make safe to name. Those pressures became material for writing, but not in a simple autobiographical way. Baldwin turned personal experience into a way to examine the nation.`,
      `In 1948, Baldwin left the United States for France. The move was not escape in the shallow sense. It was distance for survival and vision. Abroad, he could see the United States more clearly and write without being trapped entirely inside American racial scripts. But he never stopped writing about America. Exile gave him a different angle on home.`,
      `Go Tell It on the Mountain, published in 1953, drew from Harlem, church life, family, sexuality, sin, and longing. Notes of a Native Son followed in 1955, joining literary criticism, memoir, and racial analysis. Giovanni's Room, published in 1956, centered white gay characters and same-sex desire at a time when many publishers and readers wanted Black writers to stay within narrow expectations of racial protest. Baldwin refused containment. Race mattered. Sexuality mattered. Love mattered. Shame mattered. None could be cut away from the others.`,
      `During the civil rights era, Baldwin became one of the most visible writers interpreting Black America to a national audience. The Fire Next Time, published in 1963, made him unavoidable. He wrote about white innocence as a danger, Black rage as knowledge, and love not as softness but as a demand for reality. His friendships and encounters with Medgar Evers, Martin Luther King Jr., Malcolm X, Lorraine Hansberry, Nina Simone, and others placed him inside movement conversations, though he was never simply a spokesperson to be managed.`,
      `Baldwin's celebrity was useful and corrosive. Television wanted him because he spoke with force. Institutions wanted him because he could make crisis literary. But celebrity could turn outrage into performance for white audiences. Baldwin understood that trap and kept pushing beyond it. He traveled, debated, lectured, wrote plays and novels, and returned again and again to the question of what racism does to the human spirit.`,
      `His work after the 1960s is sometimes treated as decline because it did not match the cultural position of The Fire Next Time. That reading can be lazy. Baldwin lived through assassinations, state backlash, the rise of Black Power, queer struggle, and the exhaustion of liberal promises. Books such as No Name in the Street and If Beale Street Could Talk carry grief, rage, tenderness, and suspicion earned by history.`,
      `Baldwin was also a queer Black writer before the mainstream literary world had language generous enough for him. NMAAHC and Smithsonian materials emphasize his attention to sexuality and queer rights. He did not write identity as a slogan. He wrote the danger of being forced to lie about desire, love, masculinity, and belonging.`,
      `James Baldwin matters because he made moral analysis intimate. He did not let readers imagine that racism was only a policy failure somewhere else. It was in family, fear, language, sex, schools, churches, police, books, and the stories people told to survive themselves. His sentences still work because they do not flatter. They ask whether the reader is ready to be free of the lies they inherited.`
    ],
    costImpact: [
      `Baldwin paid with exile, surveillance, public pressure, grief, and the burden of being treated as a racial interpreter for audiences that often wanted eloquence more than change. He lost friends to assassination and watched the country absorb Black suffering as spectacle.`,
      `His impact is literary, political, and emotional. He changed the essay, expanded Black queer possibility in literature, influenced civil rights thought, and gave later generations language for the connection between private life and public systems. Baldwin made analysis feel like confession without letting confession become self-absorption.`
    ],
    whyItMattersToday: [
      `Baldwin matters today because his central warning remains alive: a country that lies about its history damages everyone living inside the lie, though not everyone pays equally. His work helps readers see racism as structure and psychic training at the same time.`,
      `He also matters because he refused neat categories. Black, queer, American, expatriate, believer, skeptic, witness, artist: Baldwin carried contradiction without smoothing it for comfort.`,
      `Reading Baldwin should leave a person less satisfied with slogans. He asks for the harder work: telling the truth about love, power, fear, and responsibility before the bill comes due again.`
    ],
    connected: [
      { href: '@root/generated/pages/audre-lorde.html', title: 'Audre Lorde', description: 'Connects Baldwin to Black queer writing and the politics of self-definition.' },
      { href: '@root/encyclopedia/gordon-parks.html', title: 'Gordon Parks', description: 'Links Baldwin to mid-century Black artists using form as witness.' },
      { href: '@root/generated/pages/malcolm-x.html', title: 'Malcolm X', description: 'Connects Baldwin to movement debate, critique, and public speech.' },
      { href: '@root/encyclopedia/aave.html', title: 'AAVE and Linguistic Culture', description: 'Places Baldwin\'s voice inside broader questions of Black language and authority.' }
    ],
    externalLinks: [
      { source: 'National Museum of African American History and Culture', title: 'James Baldwin', url: 'https://nmaahc.si.edu/james-baldwin' },
      { source: 'Smithsonian Institution', title: 'James Baldwin: Writer and Activist', url: 'https://www.si.edu/spotlight/james-baldwin' },
      { source: 'Library of Congress', title: 'James Baldwin', url: 'https://www.loc.gov/item/n79076619/james-baldwin/' },
      { source: 'National Museum of African American History and Culture', title: 'The Makings of a Man', url: 'https://nmaahc.si.edu/explore/stories/makings-man' },
      { source: 'Poetry Foundation', title: 'James Baldwin', url: 'https://www.poetryfoundation.org/poets/james-baldwin' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://nmaahc.si.edu/james-baldwin', 'https://www.si.edu/spotlight/james-baldwin', 'https://www.loc.gov/item/n79076619/james-baldwin/'],
      supportingSources: ['https://nmaahc.si.edu/explore/stories/makings-man', 'https://www.poetryfoundation.org/poets/james-baldwin'],
      verifiedQuoteSource: 'No quotation included. Existing popular Baldwin quotations require separate edition-level tracing before use.',
      sensitiveClaimsReviewed: 'Sexuality language, expatriate framing, civil-rights friendships, Time cover, publication dates, religious upbringing, and death details reviewed.',
      materialCorrections: 'Expanded legacy page, removed stale quiz behavior, and made queer-history framing explicit but carefully sourced.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, literary/queer-history claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'holy-week-uprisings',
    outputPath: 'encyclopedia/holy-week-uprisings.html',
    subject: 'Holy Week Uprisings',
    category: 'Civil Rights',
    type: 'Events',
    dates: 'April 1968',
    tags: ['martin-luther-king-jr', 'uprisings', 'urban-history', 'poor-peoples-campaign', 'washington-dc'],
    summary: `The Holy Week Uprisings were not a footnote to Martin Luther King Jr.'s assassination. They were a national rupture. In the days after King was murdered in Memphis on April 4, 1968, grief and anger moved through nearly 200 cities. Washington, D.C., Chicago, Baltimore, Kansas City, and other cities saw fires, arrests, curfews, troops, and streets turned into evidence of what peaceful speeches had not made the country repair. The uprisings were not only about one death, even a death as devastating as King's. They were about segregated housing, police violence, job exclusion, urban disinvestment, and the gap between civil rights law and Black daily life. They ask a hard question: what happens when a country mourns a prophet but refuses his warning?`,
    timeline: [
      { date: 'Jul 1967', event: 'President Lyndon B. Johnson creates the National Advisory Commission on Civil Disorders after urban uprisings in Newark, Detroit, and other cities.' },
      { date: 'Feb 29, 1968', event: 'The Kerner Commission summary warns that the United States is moving toward two separate and unequal societies.' },
      { date: 'Mar 1968', event: 'King supports striking sanitation workers in Memphis while preparing the Poor People\'s Campaign.' },
      { date: 'Apr 3, 1968', event: 'King delivers his final speech, often called I\'ve Been to the Mountaintop, in Memphis.' },
      { date: 'Apr 4, 1968', event: 'King is assassinated at the Lorraine Motel.' },
      { date: 'Apr 4-14, 1968', event: 'Uprisings, arson, looting, protests, police action, and military deployments spread across U.S. cities.' },
      { date: 'Apr 5, 1968', event: 'Washington, D.C., Chicago, Baltimore, and other cities face escalating unrest.' },
      { date: 'Apr 11, 1968', event: 'Johnson signs the Civil Rights Act of 1968, including the Fair Housing Act.' },
      { date: 'May 1968', event: 'The Poor People\'s Campaign continues in Washington through Resurrection City.' },
      { date: '1970s', event: 'Many affected Black neighborhoods face slow rebuilding, business loss, policing, and continued disinvestment.' }
    ],
    fullStory: [
      `The Holy Week Uprisings began in grief, but grief alone does not explain them. Martin Luther King Jr. was assassinated on April 4, 1968, while in Memphis supporting Black sanitation workers. He had spent the final years of his life naming the connection between racism, poverty, militarism, housing, labor, and state violence. When he was killed, many Black communities did not hear only the news of a murder. They heard the collapse of a promise that nonviolent sacrifice would force the nation to change fast enough.`,
      `The country had already been warned. The Kerner Commission, created after the uprisings of 1967, had concluded that the United States was moving toward two societies, one Black and one white, separate and unequal. The report named white racism, housing segregation, unemployment, police practices, and concentrated poverty as central causes of urban unrest. The report did not come from militants outside government. It came from a presidential commission. The diagnosis was official. The remedy was expensive. The political will was thin.`,
      `King understood that danger. In the months before his death, he was organizing the Poor People's Campaign, an effort to bring poor people of many races to Washington, D.C., to demand jobs, income, housing, and economic rights. He had also returned to Memphis after a sanitation workers' march turned violent on March 28. He wanted to prove that disciplined nonviolent action could still work. That was the unfinished work around him when he stepped onto the Lorraine Motel balcony.`,
      `After the assassination, uprisings spread across the country. Smithsonian Magazine describes nearly 200 cities experiencing unrest, with dozens suffering major property damage. Washington, D.C., became one of the most visible sites. Fires burned along commercial corridors. Troops patrolled streets. Curfews were imposed. The National Park Service later connected programs such as Summer in the Parks to efforts to heal a city shaken by the violence, arson, and looting that followed King's death.`,
      `It is tempting to describe the uprisings only through damage: burned buildings, broken windows, arrests, troops, and dollar totals. Those facts matter, especially because Black neighborhoods often bore the material cost. But a damage-only story lets the country focus on fire instead of fuel. The same neighborhoods that burned had already been shaped by exclusion from mortgages, job discrimination, police occupation, underfunded schools, and political neglect. The uprising was not a policy paper. It was not a plan. It was anguish and rage made visible in public space.`,
      `The state response was forceful. Police, National Guard troops, and federal troops entered cities. Arrests mounted. In some places, elected officials tried to distinguish between mourning, protest, and violence. In other places, officials treated the whole event as disorder to be suppressed. The difference mattered. When government sees only criminality, it misses what the event reveals about governing failure.`,
      `The timing sharpened the contradiction. On April 11, 1968, President Johnson signed the Civil Rights Act of 1968, including the Fair Housing Act. The law had stalled before King's assassination and gained momentum afterward. The country passed a housing-rights law in the same week that cities showed the consequences of housing inequality. Law and uprising were not separate histories. They were part of the same national pressure.`,
      `The aftermath was uneven. Some businesses did not return. Some corridors remained scarred for years. Some residents experienced police surveillance and economic disinvestment layered onto the losses. Others remember the uprisings as a refusal to accept ceremonial mourning while the structures King had denounced remained intact. Both truths can coexist: communities were hurt, and the hurt came from deeper conditions than the fires.`,
      `The Holy Week Uprisings matter because they interrupt the soft version of King's legacy. The nation often prefers King as a voice of peaceful patience. April 1968 shows the cost of ignoring his critique. People mourned him, but they also made clear that mourning without material change was not enough. The uprising was not the dream. It was what happened when the dream kept being deferred.`
    ],
    quote: {
      text: `A riot is the language of the unheard.`,
      cite: 'Martin Luther King Jr., The Other America speech, quoted in Smithsonian Archives context on 1968 uprisings'
    },
    costImpact: [
      `The immediate cost included lives lost, injuries, mass arrests, military deployment, curfews, destroyed businesses, and damaged homes and commercial corridors. Black neighborhoods often carried the heaviest aftermath, because the places that burned were also places already starved of capital and political protection.`,
      `The impact included pressure for the Fair Housing Act, a deeper public reckoning with urban inequality, and a long struggle over memory. Were the uprisings violence, rebellion, mourning, protest, or warning? They were not one thing. They were a public crisis produced by private grief and structural neglect.`
    ],
    whyItMattersToday: [
      `The Holy Week Uprisings matter today because public disorder is still often discussed as if it appears from nowhere. This history teaches readers to ask what conditions came first: housing exclusion, police violence, job loss, segregation, grief, ignored reports, and broken promises.`,
      `They also challenge the sanitized memory of King. If King is remembered only as a calming voice, the country can praise him while rejecting his demands. April 1968 forces the fuller memory back into view: economic justice, fair housing, anti-poverty work, labor dignity, and impatience with delay.`,
      `The lesson is not that burning a neighborhood repairs injustice. It does not. The lesson is that a country that refuses repair should not pretend surprise when pain becomes visible.`
    ],
    connected: [
      { href: '@root/encyclopedia/mlk-assassination.html', title: 'Assassination of Martin Luther King Jr.', description: 'Connects the uprisings to the murder that triggered the national rupture.' },
      { href: '@root/encyclopedia/fair-housing-act.html', title: 'Fair Housing Act', description: 'Shows the law signed during the same week and the housing crisis beneath the unrest.' },
      { href: '@root/encyclopedia/mlk-final-days.html', title: 'Martin Luther King Jr. (Final Days)', description: 'Places the uprisings inside King\'s late focus on labor, poverty, and the Poor People\'s Campaign.' },
      { href: '@root/encyclopedia/environmental-racism.html', title: 'Environmental Racism', description: 'Broadens the question of urban policy, neighborhood harm, and structural neglect.' }
    ],
    externalLinks: [
      { source: 'Smithsonian Magazine', title: 'Martin Luther King Jr.\'s Assassination Sparked Uprisings in Cities Across America', url: 'https://www.smithsonianmag.com/history/martin-luther-king-jrs-assassination-sparked-uprisings-cities-across-america-180968665/' },
      { source: 'National Archives', title: 'Findings in the Assassination of Dr. Martin Luther King, Jr.', url: 'https://www.archives.gov/research/jfk/select-committee-report/part-2-king-findings.html' },
      { source: 'Smithsonian Institution', title: '1968: A Year in the Collections', url: 'https://www.si.edu/spotlight/1968/default' },
      { source: 'National Park Service', title: 'Summer in the Parks (1968-1976)', url: 'https://home.nps.gov/articles/summer-in-the-parks-1968-1976.htm' },
      { source: 'National Park Service', title: 'Resurrection City: The Poor People\'s Campaign', url: 'https://www.nps.gov/articles/resurrection-city.htm' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/research/jfk/select-committee-report/part-2-king-findings.html', 'https://www.si.edu/spotlight/1968/default', 'https://home.nps.gov/articles/summer-in-the-parks-1968-1976.htm'],
      supportingSources: ['https://www.smithsonianmag.com/history/martin-luther-king-jrs-assassination-sparked-uprisings-cities-across-america-180968665/', 'https://www.nps.gov/articles/resurrection-city.htm'],
      verifiedQuoteSource: 'Smithsonian Archives discussion of King\'s Other America speech and 1968 uprisings context.',
      sensitiveClaimsReviewed: 'Death/arrest/property-damage counts, city scope, Kerner Commission framing, Fair Housing Act timing, military deployment, and damage-versus-cause language reviewed.',
      materialCorrections: 'Expanded a short legacy article into full context and replaced damage-only framing with careful structural analysis.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, urban-uprising claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'ida-b-wells',
    outputPath: 'encyclopedia/ida-b-wells.html',
    subject: 'Ida B. Wells',
    category: 'Journalism',
    type: 'People',
    dates: '1862 - 1931',
    tags: ['journalism', 'anti-lynching', 'memphis', 'chicago', 'women'],
    summary: `Ida B. Wells did not simply report lynching. She broke the system of excuses built around it. After a white mob lynched her friends Thomas Moss, Calvin McDowell, and Will Stewart in Memphis in 1892, Wells investigated the lie that lynching was usually a response to sexual violence. She used names, dates, newspapers, witnesses, statistics, speeches, and international organizing to show that lynching protected white power from Black business, voting, self-defense, labor, and dignity. Her press was destroyed. Her life was threatened. She published from exile and kept going. Wells matters because she made evidence a weapon against terror and insisted that neutrality in the face of lies was not truth. It was surrender.`,
    timeline: [
      { date: 'Jul 16, 1862', event: 'Born enslaved in Holly Springs, Mississippi.' },
      { date: '1878', event: 'Parents and a younger brother die during a yellow fever epidemic; Wells helps raise her siblings.' },
      { date: '1884', event: 'Refuses to leave a first-class train car in Tennessee, sues the railroad, and initially wins before the decision is reversed.' },
      { date: '1889', event: 'Becomes part-owner and editor of the Memphis Free Speech and Headlight.' },
      { date: 'Mar 9, 1892', event: 'Thomas Moss, Calvin McDowell, and Will Stewart are lynched in Memphis.' },
      { date: '1892', event: 'Publishes Southern Horrors after her newspaper office is destroyed and she is forced from Memphis.' },
      { date: '1893-1894', event: 'Travels to Britain to build international anti-lynching pressure.' },
      { date: '1895', event: 'Publishes A Red Record and marries Ferdinand Barnett.' },
      { date: '1909', event: 'Participates in founding work connected to the NAACP, though she later clashes with its leadership.' },
      { date: '1913', event: 'Forms the Alpha Suffrage Club in Chicago.' },
      { date: 'Mar 25, 1931', event: 'Dies in Chicago.' },
      { date: '2020', event: 'Receives a posthumous Pulitzer Prize special citation.' }
    ],
    fullStory: [
      `Ida B. Wells was born enslaved in Mississippi in 1862, six months before the Emancipation Proclamation. She came of age in Reconstruction and its betrayal. Her parents, active in education and politics, understood freedom as work: schooling, voting, institution-building, and self-respect. When yellow fever killed both parents and a brother in 1878, Wells was a teenager. She kept her siblings together by becoming a teacher and presenting herself as older than she was.`,
      `Her public method began with refusal. In 1884, Wells was forced from a first-class train car after refusing to move to a segregated car. She sued the railroad and won in a lower court, then lost on appeal before the Tennessee Supreme Court. The legal defeat sharpened her understanding of power. Courts could reverse justice. Newspapers could expose what courts protected.`,
      `By the late 1880s, Wells was writing and editing in Memphis. She became part-owner of the Free Speech and Headlight and used journalism as both documentation and attack. Her work changed after March 9, 1892, when Thomas Moss, Calvin McDowell, and Will Stewart were lynched. They had operated the People's Grocery, a Black-owned business that competed with a nearby white-owned store. The lynching showed Wells that white violence punished Black economic independence as much as any alleged crime.`,
      `Wells began investigating lynching claims. She read white newspapers closely, compared their stories with witnesses and facts, and exposed a pattern: accusations of rape were often invented after the fact to justify killings rooted in economic competition, consensual relationships, political assertion, or Black resistance to white authority. This was dangerous work because the rape accusation was central to the propaganda that made lynching respectable to many white Americans.`,
      `When Wells published her findings, a white mob destroyed her newspaper office. She was away from Memphis at the time. Threats warned that she would be killed if she returned. Exile did not silence her. It changed her base of operations. She wrote from New York and Chicago, published Southern Horrors and A Red Record, lectured in the United States and Britain, and built anti-lynching networks that embarrassed American officials abroad.`,
      `A Red Record was more than moral outrage. It was data work. Wells gathered counts, categories, places, and stated pretexts for lynchings. Library of Congress materials emphasize her use of press stories and firsthand investigation to uncover the truth about lynching. She understood that terror depended on narrative. If white newspapers could define the dead as criminals, they could make murder look like order. Wells fought the story at its source.`,
      `She was also a suffragist, clubwoman, organizer, and political actor. In Chicago, she founded the Alpha Suffrage Club, fought segregated suffrage organizing, challenged school segregation, and ran for office. She helped in the founding environment of the NAACP but was often pushed aside by leaders who found her too confrontational, too independent, or too unwilling to soften her critique.`,
      `Wells's life also resists tidy hero packaging. She could be uncompromising, strategic, and difficult. She clashed with allies. She criticized moderation. She named white women's role in lynching mythology when doing so was socially explosive. Those tensions are not flaws in the history. They are part of why she mattered. A movement needed people willing to say what polite institutions avoided.`,
      `Her posthumous honors, including a 2020 Pulitzer Prize special citation, correct only part of the record. Wells did the work when recognition cost her safety. She made journalism answerable to the dead and to the living communities terror tried to control. Her page belongs here because the modern language of accountability, data journalism, and racial-violence documentation has one of its fiercest ancestors in Ida B. Wells.`
    ],
    costImpact: [
      `Wells paid with exile from Memphis, destruction of her press, repeated death threats, financial precarity, and marginalization inside some organizations she helped build. She also paid the cost of being a Black woman who refused to protect white womanhood myths or male-led movement comfort.`,
      `Her impact reshaped journalism and civil rights. She created a factual record of lynching when denial was public policy. She gave later anti-lynching campaigns evidence, language, and moral force. She modeled a journalism that does not confuse balance with truth when one side is lying to protect murder.`
    ],
    whyItMattersToday: [
      `Wells matters today because racial violence still comes with official language: reports, press statements, leaked allegations, selective biographies of victims, and calls for calm before facts. Wells teaches readers to ask who benefits from the first story and who is being silenced by it.`,
      `Her work also shows that data is not cold when it is used to defend human life. Names, dates, places, and patterns can become a memorial and a legal argument at the same time.`,
      `Wells should not be remembered as merely brave. She was methodical. She built a discipline of truth-telling under threat, and that is the standard she leaves behind.`
    ],
    connected: [
      { href: '@root/generated/pages/emmett-till.html', title: 'Emmett Till', description: 'Connects lynching, false accusation, public witness, and national memory.' },
      { href: '@root/encyclopedia/mamie-till-mobley.html', title: 'Mamie Till-Mobley', description: 'Shows another Black woman forcing the country to look at racial terror.' },
      { href: '@root/encyclopedia/tulsa-massacre.html', title: 'Tulsa Race Massacre', description: 'Places Wells\'s work beside the broader history of white mob violence and suppressed evidence.' },
      { href: '@root/generated/pages/frances-harper.html', title: 'Frances E.W. Harper', description: 'Links Wells to Black women\'s public writing, reform, and moral argument.' }
    ],
    externalLinks: [
      { source: 'Library of Congress', title: 'Ida B. Wells: Topics in Chronicling America', url: 'https://guides.loc.gov/chronicling-america-ida-wells' },
      { source: 'Library of Congress', title: 'Woman Journalist Crusades Against Lynching', url: 'https://www.loc.gov/exhibits/odyssey/educate/barnett.html' },
      { source: 'Library of Congress Blog', title: 'Ida B. Wells, W.E.B. Du Bois, and the Maps of American Racism', url: 'https://blogs.loc.gov/loc/2022/10/ida-b-wells-w-e-b-du-bois-and-the-maps-of-american-racism/' },
      { source: 'National Women\'s History Museum', title: 'Ida B. Wells-Barnett', url: 'https://www.womenshistory.org/education-resources/biographies/ida-b-wells-barnett' },
      { source: 'Pulitzer Prizes', title: '2020 Pulitzer Prize Special Citations and Awards', url: 'https://www.pulitzer.org/prize-winners-by-year/2020' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://guides.loc.gov/chronicling-america-ida-wells', 'https://www.loc.gov/exhibits/odyssey/educate/barnett.html', 'https://blogs.loc.gov/loc/2022/10/ida-b-wells-w-e-b-du-bois-and-the-maps-of-american-racism/'],
      supportingSources: ['https://www.womenshistory.org/education-resources/biographies/ida-b-wells-barnett', 'https://www.pulitzer.org/prize-winners-by-year/2020'],
      verifiedQuoteSource: 'No quotation included because legacy pull quote required further source tracing beyond the available authoritative page.',
      sensitiveClaimsReviewed: 'Moss/McDowell/Stewart lynching cause, rape-accusation propaganda, NAACP founding/marginalization, suffrage work, train case, and Pulitzer citation reviewed.',
      materialCorrections: 'Removed stale daily challenge behavior, replaced weak external sources, and softened unsupported claims about inventing accountability journalism into lineage language.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, no unsupported quote, anti-lynching claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  },
  {
    encyclopediaSlug: 'jackie-robinson',
    outputPath: 'encyclopedia/jackie-robinson.html',
    subject: 'Jackie Robinson',
    category: 'Sports',
    type: 'People',
    dates: '1919 - 1972',
    tags: ['baseball', 'civil-rights', 'brooklyn-dodgers', 'military', 'sports'],
    summary: `Jackie Robinson is often reduced to one phrase: he broke baseball's color barrier. That phrase is true, but it can make the barrier sound like a wall that fell neatly once one brave man crossed it. Robinson's real story is sharper. Before Brooklyn, he challenged segregation in the Army, played in the Negro Leagues, endured a calculated trial of racist abuse in the minor leagues and major leagues, and then spent his post-baseball life pressing presidents, parties, businesses, and civil rights organizations to move faster. Robinson matters because integration was not a handshake. It was a demand enforced through talent, discipline, anger, restraint, strategy, and public pressure. He did not simply enter the game. He changed what the game had to answer for.`,
    timeline: [
      { date: 'Jan 31, 1919', event: 'Born Jack Roosevelt Robinson in Cairo, Georgia.' },
      { date: '1920', event: 'Moves with his family to Pasadena, California.' },
      { date: '1939-1941', event: 'Stars at UCLA in multiple sports.' },
      { date: '1942', event: 'Drafted into the U.S. Army and later commissioned as a second lieutenant.' },
      { date: 'Aug 1944', event: 'Arrested after refusing to move to the back of an Army bus at Camp Hood; later acquitted by court-martial.' },
      { date: '1945', event: 'Plays for the Kansas City Monarchs in the Negro Leagues.' },
      { date: 'Oct 23, 1945', event: 'Signs with the Brooklyn Dodgers organization.' },
      { date: 'Apr 15, 1947', event: 'Debuts with the Brooklyn Dodgers.' },
      { date: '1949', event: 'Wins the National League Most Valuable Player Award.' },
      { date: '1955', event: 'Helps the Dodgers win the World Series.' },
      { date: '1962', event: 'Inducted into the National Baseball Hall of Fame.' },
      { date: 'Oct 24, 1972', event: 'Dies in Stamford, Connecticut.' }
    ],
    fullStory: [
      `Jackie Robinson was born in Georgia in 1919 and raised in Pasadena, California, after his mother, Mallie Robinson, moved the family west. He grew up in a state that liked to advertise itself as different from the South but still carried segregation, housing discrimination, and racial insult. Robinson's athletic gifts were obvious early. At UCLA, he became a rare four-sport star, playing football, basketball, baseball, and track. But athletic excellence did not exempt him from racism. It made him visible inside it.`,
      `Before Robinson challenged Major League Baseball, he challenged the U.S. Army. In 1944, while stationed at Camp Hood, Texas, Robinson refused to move to the back of a military bus. He was arrested and court-martialed, then acquitted. The National Archives highlights this episode because it shows Robinson's civil rights spine before the Dodgers made him famous. He had a reputation for not tolerating affronts to his dignity. That mattered because Branch Rickey would soon ask him to perform a very specific kind of restraint.`,
      `After military service, Robinson played for the Kansas City Monarchs in the Negro Leagues. The Negro Leagues were not merely a waiting room for white baseball. They were institutions built because Major League Baseball excluded Black players. They had stars, owners, fans, rivalries, and a culture of their own. Robinson's move to Brooklyn was a breakthrough, but it also happened inside the decline of Black baseball's separate economy once the majors began signing Black talent.`,
      `Branch Rickey signed Robinson to the Dodgers organization in 1945 and sent him to the Montreal Royals in 1946. Rickey wanted a player talented enough to force the issue and disciplined enough not to be baited into a response that white baseball could use against integration. This was not passivity. It was a strategy that asked Robinson to absorb abuse in public while still beating opponents on the field.`,
      `Robinson debuted with the Brooklyn Dodgers on April 15, 1947. He faced racist taunts from fans, opponents, and even some players; threats; hostile hotels and restaurants; and the pressure of carrying more than his own career. He also played brilliant baseball. He won Rookie of the Year in 1947, the National League MVP Award in 1949, and helped lead the Dodgers to the 1955 World Series championship. His baserunning, defense, hitting, and nerve changed games.`,
      `The popular version often stops there, as if the story ends when the door opens. Robinson did not stop. After retiring, he became an executive, columnist, fundraiser, political voice, and civil rights advocate. The National Archives preserves letters showing him pressing presidents from both parties on civil rights. He criticized delay, tokenism, and shallow praise. He supported the NAACP, worked with civil rights leaders, and sometimes clashed with activists and politicians over strategy. He was not a ceremonial symbol. He was a participant in the argument.`,
      `Robinson's politics were complex. He was anticommunist, business-oriented, and sometimes critical of figures on the Black left. He also demanded federal action, voting rights, employment rights, and dignity with an urgency that made many white moderates uncomfortable. His life reminds readers that Black political thought has never been one lane.`,
      `The cost of integration was carried by his body and health. Robinson lived with diabetes and stress, and he died at 53. Rachel Robinson and their children also carried the pressure of threats and public scrutiny. Baseball honors Robinson every April 15, but the honor should not turn the history into a clean ceremony. Robinson's achievement happened because white institutions had excluded Black people for decades and then asked the first man through the door to be excellent, quiet, and forgiving under attack.`,
      `Jackie Robinson belongs in Black history not because sports are separate from politics, but because they are one of the places America reveals what it believes. He made baseball better. He also made the country answer why talent had ever been barred in the first place.`
    ],
    quote: {
      text: `A life is not important except in the impact it has on other lives.`,
      cite: 'Jackie Robinson, quoted by MLB\'s Jackie Robinson Training Complex'
    },
    costImpact: [
      `Robinson paid with privacy, safety, health, and the forced restraint of a man asked to withstand racism publicly so integration could survive politically. His family shared that burden through threats, travel stress, and the pressure of living inside a national experiment.`,
      `His impact transformed baseball, weakened the public legitimacy of segregation, and gave civil rights advocates a visible example of integration's promise and cruelty. He opened a path, but he also made clear that entry without equality was not enough.`
    ],
    whyItMattersToday: [
      `Robinson matters today because institutions still like firsts better than transformation. They celebrate the person who crosses a line while avoiding the question of why the line existed and what remains after the crossing.`,
      `His story also helps readers understand strategic restraint as labor. Robinson's early silence was not weakness. It was a tactical burden placed on him by racist conditions. Later, when he spoke more openly, that voice was part of the same fight.`,
      `Remembering Robinson fully means honoring the athlete, the organizer, the letter-writer, the critic, and the man who refused to let America use his success as proof that the work was finished.`
    ],
    connected: [
      { href: '@root/encyclopedia/hank-aaron.html', title: 'Hank Aaron', description: 'Connects Robinson to the next generation of Black baseball greatness and racist backlash.' },
      { href: '@root/generated/pages/frank-robinson.html', title: 'Frank Robinson', description: 'Links playing excellence to later leadership barriers in Major League Baseball.' },
      { href: '@root/encyclopedia/althea-gibson.html', title: 'Althea Gibson', description: 'Shows another athlete breaking segregated sports institutions.' },
      { href: '@root/generated/pages/james-meredith.html', title: 'James Meredith', description: 'Connects integration in sports to integration battles in public education.' }
    ],
    externalLinks: [
      { source: 'National Archives', title: 'Jackie Robinson, Civil Rights Advocate', url: 'https://www.archives.gov/education/lessons/jackie-robinson' },
      { source: 'National Archives', title: 'A Letter from Jackie Robinson: Civil Rights Advocate', url: 'https://www.archives.gov/exhibits/featured-documents/jackie-robinson' },
      { source: 'MLB', title: 'Jackie\'s Story', url: 'https://www.mlb.com/robinson-training-complex/jackies-story' },
      { source: 'National Baseball Hall of Fame', title: 'Jackie Robinson', url: 'https://baseballhall.org/hall-of-famers/robinson-jackie' },
      { source: 'Library of Congress', title: 'Jackie Robinson and Other Baseball Highlights', url: 'https://www.loc.gov/collections/jackie-robinson-baseball/articles-and-essays/baseball-the-color-line-and-jackie-robinson/' }
    ],
    research: {
      status: 'batch-13-complete',
      dateResearched: RESEARCH_DATE,
      primarySources: ['https://www.archives.gov/education/lessons/jackie-robinson', 'https://www.archives.gov/exhibits/featured-documents/jackie-robinson', 'https://www.mlb.com/robinson-training-complex/jackies-story'],
      supportingSources: ['https://baseballhall.org/hall-of-famers/robinson-jackie', 'https://www.loc.gov/collections/jackie-robinson-baseball/articles-and-essays/baseball-the-color-line-and-jackie-robinson/'],
      verifiedQuoteSource: 'MLB Jackie Robinson Training Complex biography.',
      sensitiveClaimsReviewed: 'First modern MLB integration claim, Army bus/court-martial account, Negro Leagues framing, Rickey strategy, MVP/Hall of Fame dates, politics, family burden, and death date reviewed.',
      materialCorrections: 'Rebuilt legacy page beyond baseball-only barrier language and removed stale quiz-card behavior.',
      finalStatus: 'Batch 13 complete: independently researched rich source, Claudette-style legacy-path page, ledger record, internal links, 5 external links, verified quotation, sports/civil-rights claim review, depth/similarity validation, desktop/mobile browser check.'
    }
  }
];

module.exports = {
  ENTRIES,
};
