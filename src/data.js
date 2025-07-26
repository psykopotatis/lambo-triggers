const triggerData = [
    {
        "stockName": "Implantica",
        "trigger": "Besked från FDA",
        "date": "2025-09-30",
        "originalDate": "Q3/Q4",
        "triggerDescription": "FDA:s beslut om Premarket Approval (PMA) för Implanticas refluximplantat RefluxStop i USA. Bolaget har skickat in sista modulen till FDA och väntar besked under hösten 2025. Ett godkännande skulle ge tillträde till den stora USA-marknaden för RefluxStop.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–50%"
    },
    {
        "stockName": "Xspray",
        "trigger": "Besked från FDA",
        "date": "2025-10-07",
        "originalDate": "Q4 (7 oktober)",
        "triggerDescription": "FDA:s beslut (PDUFA-datum 7 okt 2025) om Xsprays ansökan för Dasynoc – en ny formulering av cancerläkemedlet dasatinib. Ett godkännande innebär bolagets första produktlansering i USA och bekräftelse på deras teknik efter en tidigare FDA-nekande (CRL).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+40–80%"
    },
    {
        "stockName": "Xbrane",
        "trigger": "Besked från FDA",
        "date": "2025-10-21",
        "originalDate": "Q4 (21 oktober)",
        "triggerDescription": "FDA:s beslut (BsUFA-datum 21 okt 2025) om Xbranes biosimilarkandidat till Lucentis (ranibizumab). Godkännande skulle låta Xbrane (och partnern) lansera biosimilaren i USA, förutsatt att tidigare tillverkningsinspektioner klaras. Det är ett viktigt steg då Xbrane redan säljer produkten i Europa.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    },
    {
        "stockName": "Curasight",
        "trigger": "Topline från fas 2 uTrace, prel. Efficacy data uTreat",
        "date": "2025-09-30",
        "originalDate": "Q3/Q4",
        "triggerDescription": "Resultat från Curasights pågående studier av uPAR-baserade cancerdiagnostik- och behandlingsplattformen. Dels topline-data från fas II-studien av bilddiagnostikspårämnet uTRACE (t.ex. i prostatacancer) under H2 2025, dels preliminära effektdata från fas I-studien av det terapeutiska radionuklidläkemedlet uTREAT (glioblastom) mot slutet av 2025. Positiva data skulle bekräfta plattformens kliniska potential och bana väg för partnerskap (Curium är redan partner för uTRACE).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+40–70%"
    },
    {
        "stockName": "Guard Therapeutics",
        "trigger": "Data från fas 2b-studie POINTER",
        "date": "2025-12-31",
        "originalDate": "Q4",
        "triggerDescription": "Topplinedata från Guard Therapeutics fas IIb-studie POINTER, som utvärderar läkemedlet RMC-035 (ROSgard) för njurskydd hos patienter som genomgår hjärtkirurgi. Studien är fullrekryterad (170 patienter) och tre månaders uppföljning innebär att resultat väntas mot slutet av 2025. Positivt utfall (skydd av njurfunktion) skulle vara ett stort genombrott och öka sannolikheten för en partner eller fas III-start, givet att nuvarande börsvärde är relativt lågt jämfört med marknadspotentialen.",
        "triggerImpact": "jättehög",
        "triggerImpactPercentage": "+80–150%"
    },
    {
        "stockName": "Lipigon",
        "trigger": "Data från fas 2-studie lipisense",
        "date": "2025-12-31",
        "originalDate": "Q4",
        "triggerDescription": "Första resultat från Lipigons fas II-studie av Lipisense, en antisense-behandling som siktar på ANGPTL4 för att sänka triglyceridnivåer. Studien förväntas inkludera sista patienten i H1 2025 och presentera initiala data under H2 2025. Om data visar tydlig måluppfyllnad (t.ex. sänkta triglycerider) kan intresset från större bolag öka kraftigt, då Lipisense adresserar kardiometabola behov. Givet Lipigons mycket låga börsvärde skulle positiva resultat kunna ge en kraftig kursuppgång.",
        "triggerImpact": "jättehög",
        "triggerImpactPercentage": "+80–150%"
    },
    {
        "stockName": "Hansa Biopharma",
        "trigger": "Data från fas 3-studie ConfideS + en till",
        "date": "2025-12-31",
        "originalDate": "H2",
        "triggerDescription": "Två viktiga studieresultat väntas under H2 2025 för Hansa. Dels utfallet i den pivotala fas III-studien ConfIdeS som utvärderar imlifidase (Idefirix) som desensibiliseringsbehandling vid njurtransplantation (avgörande för ett FDA-godkännande i USA). Dels resultaten från en fas III-studie i anti-GBM-syndrom (en sällsynt autoimmun njursjukdom). Positiva resultat skulle kraftigt stärka Imlifidase användningsområde och försäljningspotential, samt bana väg för marknadsgodkännande i USA. Trots Hansas medelstora börsvärde väntas en tydlig kursreaktion vid framgång, om än inte lika dramatisk som för mindre bolag.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    },
    {
        "stockName": "Synact Pharma",
        "trigger": "Data fas 2-studie",
        "date": "2025-12-31",
        "originalDate": "Q4/Q1 26",
        "triggerDescription": "Resultat från Synacts pågående fas IIb-studie (ADVANCE) med resomelagon (AP1189) i nyligen diagnostiserad svår reumatoid artrit. Bolaget siktar på att ha fullrekryterat studien (ca 240 patienter) till Q4 2025 och presentera de första resultaten strax därefter. Efter tidigare blandade fas II-resultat i RA är detta data som kan bekräfta resomelagons effekt i rätt patientgrupp. Positiva resultat skulle återuppbygga förtroendet och kunna fördubbla kursen (samt underlätta partner/finansiering), medan ännu ett svagt utfall vore förödande. Med nuvarande nedpressat värde bedöms kursreaktionen vid framgång som stor.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+50–80%"
    },
    {
        "stockName": "Dicot",
        "trigger": "Data (måste nå fullrek först)",
        "date": "2025-12-31",
        "originalDate": "H2? (måste nå fullrek först)",
        "triggerDescription": "Resultat från Dicots fas IIa-studie av LIB-01 för behandling av erektil dysfunktion. Studien är nu fullrekryterad och sista dosering skedde juni 2025; studien avslutas i augusti och resultaten väntas rapporteras inom ~3 månader därefter (omkring november 2025). LIB-01 har en ny verkningsmekanism med potential för längre varaktighet än befintliga ED-läkemedel. Positiva data skulle vara första bevis på konceptet i patienter och kunna ge ett rejält lyft åt aktien genom ökad sannolikhet för ett partneravtal eller vidare finansiering, även om uppsidan kan dämpas något av Dicots redan relativt höga börsvärde för en fas IIa.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    },
    {
        "stockName": "Terranet",
        "trigger": "MVP utskick till kunder, avtal?",
        "date": "2025-09-30",
        "originalDate": "MVP Q3 utskick till kunder, avtal Q4?",
        "triggerDescription": "Terranet planerar att under Q3 2025 leverera en MVP (Minimum Viable Product) av sitt anti-kollisionssystem BlincVision till utvalda fordonstillverkare för utvärdering. Detta innebär att potentiella kunder själva kan testa systemet i praktiken. Under Q4 2025 finns förhoppningar om att dessa tester leder till konkreta samarbetsavtal eller order. Ett första kommersiellt avtal med en fordonstillverkare skulle vara ett stort genombrott för Terranet och förväntas ge en mycket stor positiv kurseffekt, givet bolagets låga värdering och avsaknad av tidigare större intäkter.",
        "triggerImpact": "jättehög",
        "triggerImpactPercentage": "+80–150%"
    },
    {
        "stockName": "Freemelt",
        "trigger": "Serietillverkning med SAAB?",
        "date": "2025-12-31",
        "originalDate": "Q4?",
        "triggerDescription": "Möjligt genombrott inom 3D-printing för metall: Freemelt har sedan 2024 samarbetat med Saab kring additiv tillverkning av komponenter (t.ex. 3D-printade koppardetaljer för försvarsindustrin). Under Q4 2025 kan detta mynna ut i att Saab initierar serietillverkning med Freemelts EBM-skrivare eller lägger en större beställning om testerna fallit väl ut. Ett sådant besked skulle validera Freemelts teknik för industriell produktion och sannolikt driva betydande kursuppgång (potential för ~30–50% ökning) då det bekräftar intäktsmöjligheter i större skala.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–50%"
    },
    {
        "stockName": "AAC",
        "trigger": "200 mkr eller 700 mkr order",
        "date": "2025-09-30",
        "originalDate": "sommar/H2?",
        "triggerDescription": "Eventuellt större ordertillkännagivande för satellitbolaget AAC Clyde Space. Bolaget har indikerat god orderingång 2024–2025 men orderboken minskade under Q1 2025. I marknaden spekuleras det om AAC tävlar om en mycket stor konstellationsorder värd antingen ~200 MSEK eller uppemot ~700 MSEK. Ett offentliggörande av en order i den storleksordningen vore transformerande – t.ex. en 700 MSEK-order skulle mer än dubbla nuvarande orderstock och ge fleråriga intäkter. Effekten på aktien väntas bli kraftig positiv: för en mellanstor order (~200 MSEK) kanske måttligt hög, men för en riktigt stor (~700 MSEK) potentiellt mycket hög (kursen kan stiga avsevärt då framtida tillväxt säkras).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–80%"
    },
    {
        "stockName": "Zenith Energy",
        "trigger": "Utfall från domstol",
        "date": "2025-12-31",
        "originalDate": "H2 (när som?)",
        "triggerDescription": "Domstolsbesked i Zeniths pågående juridiska processer väntas under H2 2025. Framför allt gäller det utfallet i en flerårig tvist i Paris (mellan Zeniths dotterbolag AAOG Congo och borrbolaget SMP) med ett skadeståndskrav på 9 MUSD. Slutplädering hölls i mars 2025 och dom väntas cirka tre månader därefter – alltså potentiellt under sommaren 2025. Därtill pågår även skiljedomsprocesser (ICSID) rörande olje-tillgångar i Afrika, där besked kan falla inom 2025. Ett positivt utslag (t.ex. skadestånd ~9 MUSD eller återfående av licens) skulle ge Zenith ett välbehövligt kapitaltillskott/tillgång och sannolikt lyfta aktien markant, medan ett negativt utfall kan tynga kursen. Givet bolagets låga värde bedöms kurseffekten vid framgång vara påtaglig, men något begränsad av beloppens storlek relativt bolagets långsiktiga finansieringsbehov.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–70%"
    },
    {
        "stockName": "Elicera",
        "trigger": "Resultat från CARMA kohort 2",
        "date": "2025-09-30",
        "originalDate": "Q3 (förmodligen aug-sep)",
        "triggerDescription": "Preliminära effekt- och säkerhetsresultat från andra doskohorten i Eliceras fas I/IIa-studie CARMA med CAR-T-cellen ELC-301 (beväpnad med iTANK-teknologin) mot lymfom. Första kohorten (låg dos) rapporterades våren 2025 med lovande utfall: aktiv lymfom sjukdom eliminerades hos 2 av 3 patienter. Kohort 2 har nu startat med tredubblad dos och dess data kan presenteras kring sensommaren/hösten 2025. Om även denna högre dos ger tecken på tumörrespons utan allvarliga biverkningar skulle det starkt bekräfta konceptet och öka värdet av Eliceras plattform. Aktien förväntas reagera positivt – potentiellt hög kursuppgång (t.ex. 50%+) trots att det är tidigt, då Elicera värderas lågt och framgång i CAR-T-fältet skulle väcka intresse från större aktörer.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+50–80%"
    },
    {
        "stockName": "Diamyd",
        "trigger": "Interimavläsning fas-3",
        "date": "2026-03-31",
        "originalDate": "mars 2026",
        "triggerDescription": "Interimsavläsning av den pågående pivotala fas III-studien (DIAGNODE-3) med diabetesvaccinet Diamyd® mot autoimmun typ 1-diabetes. Interimsanalysen kommer omfatta ~170 patienter med 15 månaders uppföljning och väntas ske runt mars 2026. Syftet är att utläsa om behandlingen signifikant bevarar insulinproduktion (C-peptid) jämfört med placebo. Utfallet är avgörande för Diamyds framtid: **vid positiv effekt** – särskilt om den är tydlig – skulle Diamyd kunna gå mot accelererat godkännande, vilket sannolikt skulle mångdubbla aktiens värde (givet det enorma medicinska behovet och marknadens storlek). **Vid utebliven effekt** däremot riskerar projektet fallera. Givet att förväntningarna är dämpade efter blandade historiska resultat bedöms uppsidan vid ett tydligt positivt interim-resultat som extremt hög.",
        "triggerImpact": "jättehög",
        "triggerImpactPercentage": "+150–300%"
    },
    {
        "stockName": "Corline",
        "trigger": "Kardium besked från FDA",
        "date": "2025-09-30",
        "originalDate": "Q3/Q4",
        "triggerDescription": "FDA:s godkännandebesked för Kardium Inc:s Globe® PF-ablationsteknologi för behandling av förmaksflimmer. Kardium (baserat i Kanada) är en av Corlines kunder som använder Corlines ytbehandling (CHS™-teknik) på sina katetrar. Kardium lämnade in sin FDA-ansökan i slutet av 2024, och analysfirman Redeye förutspår ett FDA-godkännande i slutet av 2025 och lansering i början av 2026. Vid ett godkännande kommer Kardium behöva skala upp produktion och lager, vilket redan väntas synas som ökade ordrar till Corline under 2025. För Corline betyder detta kommersialisering av deras teknologi via kund – vilket bör ge ökande intäkter (royalty/försäljning av reagenser) och höja aktiens värde. Effekten bedöms som klart positiv (Corline kan få ett lyft på kanske ~30–50% över tid) om FDA säger ja, givet att samarbetet då går in i kommersiell fas.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–50%"
    },
    {
        "stockName": "Cessatech",
        "trigger": "Börja sälja i USA",
        "date": "2025-12-31",
        "originalDate": "H2 2025",
        "triggerDescription": "Planerad kommersiell lansering i USA av Cessatechs nasalsprejbaserade smärtlindring för barn (CT001). Bolaget fokuserar nu på att få ut produkten på USA-marknaden under 2025, efter att ha säkrat tillverkning och eventuella regulatoriska klartecken. Cessatech har redan tecknat ett partnerskap (Proveca) för Europa, men avser att själv (eller via ny partner) lansera i USA. Om försäljningsstart i USA faktiskt sker under H2 2025, innebär det att Cessatech går från utvecklingsbolag till intäktsgenerering. Det skulle vara en stor milstolpe och troligen höja aktien avsevärt – både pga framtida intäkter och ökad trovärdighet. Givet bolagets ringa värdering kan kursreaktionen vid en lyckad USA-launch vara hög (t.ex. 50%±).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    },
    {
        "stockName": "Cerano",
        "trigger": "Topline fas 1 för CS014, deal?",
        "date": "2025-09-30",
        "originalDate": "inom kort och det pratas om deal",
        "triggerDescription": "Topplinjeresultat från Cereno Scientifics fas I-studie med läkemedelskandidaten CS014 (”Cerano”), en epigenetisk HDAC-hämmare med sjukdomsmodifierande potential vid bl.a. fibros i lungor och kärl. Fas I-studien avslutades i april 2025 och topplinedata väntas presenteras i juni 2025. Studien är huvudsakligen för säkerhet; ett positivt utfall (god tolerabilitet och gynnsam farmakodynamik) banar väg för fas II i t.ex. idiopatisk lungfibros. På marknaden spekuleras det i att Cereno kan ingå ett partneravtal/licensavtal för CS014 efter fas I, givet att bolaget historiskt använt partners för vidare utveckling. Analytiker väntar sig visserligen att licensaffärer sker när projekten nått fas II, men om fas I-data imponerar finns chans till tidigare intresse. Ett sådant avtal skulle vara ett stort värdedrivande event. Sammantaget bedöms triggern ha medelhög till hög kurspåverkan – ett fas I-resultat utan avvikelser ger begränsad kursuppgång i sig, men om det åtföljs av konkreta förhandlingar eller bud kan effekten bli större (en deal kan ge snabb premie på kursen).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+20–60%"
    },
    {
        "stockName": "Gomero",
        "trigger": "Avtal med Western Power",
        "date": "2026-03-31",
        "originalDate": "H2 ’25 - Q1 ’26",
        "triggerDescription": "Ett potentiellt storskaligt avtal med Western Power – det statliga elbolaget i Västra Australien med över 2,3 miljoner kunder – efter det pågående pilotprojektet. Gomero fick 2024 en initial order (~0,5 Mkr) via partnern KingHill för att Western Power ska utvärdera SIPP-plattformen på sina transformatorstationer. Om utvärderingen faller väl ut och Western Power beslutar att rulla ut SIPP i full skala (t.ex. på majoriteten av sina ~500 stationer) skulle det innebära ett genombrottsavtal för Gomero, potentiellt i storleksordning med eller större än Gomeros tidigare ~20 Mkr-order från svenska Ellevio. Ett sådant avtal skulle bekräfta Gomeros teknik på en ny marknad, ge betydande återkommande intäkter och väntas lyfta aktien markant (Gomeros börsvärde är lågt, så uppsidan bedöms hög – kanske kring 50 %).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–70%"
    },
    {
        "stockName": "Ascelia Pharma",
        "trigger": "Avtal med partner",
        "date": "2025-09-30",
        "originalDate": "q2/q3",
        "triggerDescription": "Ett kommersiellt partnerskapsavtal för Ascelias ledande läkemedel Orviglance (en kontrastvätska för lever-MRI vid nedsatt njurfunktion). Efter framgångsrika fas-III-resultat för Orviglance (studien SPARKLE visade signifikant förbättrad visualisering av levertumörer) är bolagets fokus nu att säkra en lanseringspartner. FDA-ansökan planeras lämnas in omkring mitten av 2025 och parallellt pågår dialog med potentiella partners om marknadsföring/distribution. Ett avtal skulle sannolikt ge Ascelia upfront-betalning och milstolpar samt tillgång till partnerns kommersiella infrastruktur – vilket avsevärt minskar Ascelias finansieringsbehov och bekräftar Orviglances marknadspotential. Aktien förväntas reagera klart positivt om ett partneravtal annonseras, då det eliminerar mycket osäkerhet; uppsidan bedöms som hög (t.ex. i storleksordningen +30–50 %).",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–50%"
    },
    {
        "stockName": "District Metals Corp",
        "trigger": "Beslut om att häva uranförbudet",
        "date": "2025-12-31",
        "originalDate": "Q3/Q4",
        "triggerDescription": "Sveriges regering föreslår att upphäva förbudet mot uranbrytning, och en omröstning i riksdagen väntas under hösten 2025 (Q3/Q4), med ny lag i så fall gällande från 1 jan 2026:contentReference[oaicite:0]{index=0}. Om förbudet avskaffas kan District Metals återuppta prospektering och utveckling av sina svenska uranrika tillgångar, bland annat Viken-fyndigheten med betydande uran- och vanadiuminnehåll. Ett slopat uranförbud skulle undanröja ett stort regulatoriskt hinder för bolaget och markant öka potentialen för dess projekt.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+40–80%"
    },
    {
        "stockName": "Alzinova",
        "trigger": "Fas 1b-data (ALZ-101)",
        "date": "2025-07-31",
        "originalDate": "slutet av juli",
        "triggerDescription": "Alzinova väntas presentera slutdata från sin fas 1b-studie med vaccinkandidaten ALZ-101 mot Alzheimers sjukdom i slutet av juli 2025. Studien utvärderar säkerhet och immunrespons hos patienter, och tidigare delresultat visar på god tolerabilitet och ett starkt, oligomer-specifikt immunsvar hos >95 % av patienterna:contentReference[oaicite:1]{index=1}:contentReference[oaicite:2]{index=2}. Positiva fas 1b-data skulle bekräfta plattformens potential och bana väg för en fas 2-studie, vilket kan attrahera partnerintresse givet det enorma behovet inom Alzheimers.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    },
    {
        "stockName": "Cereno Scientific",
        "trigger": "Toplineresultat fas I (CS014)",
        "date": "2025-07-31",
        "originalDate": "~juli",
        "triggerDescription": "Cereno Scientific räknar med att topline-resultat från bolagets fas I-studie av CS014 (en ny HDAC-hämmare) kan presenteras omkring juli 2025:contentReference[oaicite:3]{index=3}. CS014 är en epigenetisk läkemedelskandidat med multimodal verkningsmekanism som siktar på underliggande sjukdomsprocesser vid svåra kardiovaskulära och lungsjukdomar (den första indikationen är idiopatisk lungfibros):contentReference[oaicite:4]{index=4}. Fas I-prövningen i friska frivilliga har fokuserat på säkerhet, tolerabilitet och farmakokinetik, och ett positivt utfall (utan dosbegränsande biverkningar) skulle möjliggöra start av fas II-studier och öka chanserna till partnerskap eller fortsatt finansiering.",
        "triggerImpact": "mellan",
        "triggerImpactPercentage": "+10–25%"
    },
    {
        "stockName": "Leading Edge Materials Corp.",
        "trigger": "Ansökan om strategiskt projekt-status (CRMA)",
        "date": "2025-12-31",
        "originalDate": "slutet av sommaren (utfall ~Q4)",
        "triggerDescription": "EU:s initiativ Critical Raw Materials Act (CRMA) öppnar en ny ansökningsrunda för strategiska projekt mot slutet av sommaren 2025, och Leading Edge Materials avser att återigen ansöka om att klassas som \"Strategiskt projekt\" för sin svenska tunga sällsynta jordartsfyndighet Norra Kärr:contentReference[oaicite:5]{index=5}. Ett beslut kring denna ansökan väntas omkring Q4 2025. Om Norra Kärr erhåller strategiskt projekt-status enligt CRMA skulle det bekräfta projektets vikt för EU och underlätta tillstånd och finansiering, vilket sannolikt gynnar aktien.",
        "triggerImpact": "mellan",
        "triggerImpactPercentage": "+15–30%"
    },
    {
        "stockName": "Bioextrax",
        "trigger": "Avtal med globalt kemiföretag (LoI)",
        "date": "2025-09-30",
        "originalDate": "30 september",
        "triggerDescription": "Bioextrax har förlängt sin bindande avsiktsförklaring (LoI) med ett av världens tre största kemiföretag till den 30 september 2025:contentReference[oaicite:6]{index=6}. Syftet är att parterna före detta datum ska enas om ett långsiktigt avtal rörande Bioextrax teknologi för bioplasten PHA (medium-chain-length PHA) inom Home & Personal Care-sektorn:contentReference[oaicite:7]{index=7}. Om ett slutligt licensavtal tecknas med detta globala topp-3 kemibolag skulle det innebära ett genombrott för Bioextrax och förväntas ge en mycket kraftig kursreaktion.",
        "triggerImpact": "jättehög",
        "triggerImpactPercentage": "+80–150%"
    },
    {
        "stockName": "Immunovia",
        "trigger": "USA-lansering av PancreaSure",
        "date": "2025-09-30",
        "originalDate": "september",
        "triggerDescription": "Immunovia förbereder en kommersiell lansering av sitt blodtest PancreaSure för tidig upptäckt av bukspottkörtelcancer på den amerikanska marknaden i september 2025:contentReference[oaicite:8]{index=8}. PancreaSure är ett nästa generations test som med hjälp av AI-baserad biomarköranalys upptäcker tidiga stadier av pankreascancer hos högriskpatienter:contentReference[oaicite:9]{index=9}. En lyckad USA-lansering – tillsammans med ytterligare studier för att visa kliniskt värde och säkra ersättning – skulle stärka Immunovias kommersiella utsikter avsevärt efter en utmanande utvecklingsfas.",
        "triggerImpact": "mellan",
        "triggerImpactPercentage": "+10–30%"
    },
    {
        "stockName": "Xoma",
        "trigger": "Slutfört utvecklingsprojekt med Alfa Laval",
        "date": "2025-12-31",
        "originalDate": "slutet av 2025",
        "triggerDescription": "Xoma AB genomför i samarbete med Alfa Laval ett utvecklingsprojekt för att integrera Alfa Lavals högvarvseparatorer i Xomas algproduktionssystem, med målet att effektivt separera odlade mikroalger från vatten:contentReference[oaicite:10]{index=10}. Projektet finansieras helt av Alfa Laval och Xoma räknar med att det ska vara färdigställt till slutet av 2025 om utvecklingen går enligt plan:contentReference[oaicite:11]{index=11}. Ett framgångsrikt slutförande av projektet skulle utgöra en viktig milstolpe som möjliggör pilotprojekt med industriella partners och banar väg för kommersialisering av Xomas algteknologi (FLOW), vilket väntas ge påtaglig kurspotential.",
        "triggerImpact": "hög",
        "triggerImpactPercentage": "+30–60%"
    }    
];
export default triggerData;
