import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const content = {
  siteTitle: "Nexverse - IITM",
  siteDescription:
    "Nexverse is a dynamic student-led society at IITM, organizing tech events, workshops, and networking opportunities to help students grow and innovate.",
  nexverseNameLogo: "/logo1.png",
  nexverseLogo: "/logo2.png",
  eventsCarousel: [
    {
      title: "Event name",
      button: "Explore",
      link: "#",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Event name",
      button: "Explore",
      link: "#",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore",
      link: "#",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Event name",
      button: "Explore",
      link: "#",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  upcommingEvents: {
    celestia: {
      title: "celestia 1.0",
      description: "",
      registrationLink: "https://linktr.ee/celestiaeventregistration",
      events: [
        {
          title: "Estate Empire",
          description: (
            <>
              Estate Empire is an immersive investment and bidding simulation.
              Participants buy, develop, and trade virtual land in a simulated
              map of Delhi. The game requires strategic decision-making, market
              analysis, and careful risk management to maximize ROI.
              <ul>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    {" "}
                    <span className="font-bold">Date</span> : 17 April ,2025
                  </span>{" "}
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Fees</span> "₹50"
                  </span>
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Timing</span> 10:00am - 1:00pm
                  </span>
                </li>
              </ul>
            </>
          ),
          detailsLink: "/details/0",
          backgroundImage: "/estatebg.png",
          graphic: "/estate_empire.png",
        },
        {
          title: "BlindCode ",
          description: (
            <>
              Participants will be provided with a demo landing page which you
              have to replicate within the given duration. The landing page
              design will feature various complex animations and interactive
              elements.
              <ul>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    {" "}
                    <span className="font-bold">Date</span> : 17 April ,2025
                  </span>{" "}
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Fees</span> "₹50"
                  </span>
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Timing</span> 12:00pm - 3:00pm
                  </span>
                </li>
              </ul>
            </>
          ),
          detailsLink: "/details/1",
          backgroundImage: "/blindcodebg.png",
          graphic: "/blindcode.png",
        },
        {
          title: "Designathon",
          description: (
            <>
              Designathon 2025: Brand the Fiction is a creative 3-hour design
              sprint where participants will bring a fictional brand to life
              using branding and design tools. The challenge tests design
              thinking, aesthetic sense, and storytelling skills under time
              pressure.
              <ul>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    {" "}
                    <span className="font-bold">Date</span> : 17 April ,2025
                  </span>{" "}
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Fees</span> "₹50"
                  </span>
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Timing</span> 10:00am - 1:00pm
                  </span>
                </li>
              </ul>
            </>
          ),
          detailsLink: "/details/2",
          backgroundImage: "/bgdesignathon.png",
          graphic: "/designathon.png",
        },
        {
          title: "Market Mania",
          description: (
            <>
              Market Mania is a dynamic competition where participants are given
              a random company and product and have 2 hours to create a 5-minute
              pitch. This event challenges creativity, strategic thinking, and
              presentation skills while promoting teamwork.
              <ul>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    {" "}
                    <span className="font-bold">Date</span> : 17 April ,2025
                  </span>{" "}
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Fees</span> "₹50"
                  </span>
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Timing</span> 12:30pm - 3:00pm
                  </span>
                </li>
              </ul>
            </>
          ),
          detailsLink: "/details/3",
          backgroundImage: "/marketmaniabg.png",
          graphic: "/marektsticker.png",
        },
        {
          title: "Cosplay Carnival",
          description: (
            <>
              Cosplay Carnival 2025 is an exciting event where participants can
              dress as their favorite characters, from superheroes to Bollywood
              icons. Through performance and creativity, competitors bring their
              characters to life for a chance to win exciting prizes.
              <ul>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    {" "}
                    <span className="font-bold">Date</span> : 17 April ,2025
                  </span>{" "}
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Fees</span> "₹100"
                  </span>
                </li>
                <li className="flex flex-row items-center">
                  <span className="text-cyan-300 mr-3 mt-1">•</span>
                  <span className="mt-2">
                    <span className="font-bold">Timing</span> 1:00pm - 3:30pm
                  </span>
                </li>
              </ul>
            </>
          ),
          detailsLink: "/details/4",
          backgroundImage: "/cosplaybg.png",
          graphic: "/cosplaysticker.png",
        },
      ],
      eventDetails: [
        //DESIGNATHON
        {
          id: 0,
          name: "DESIGNATHON",
          tagline: "CELESTIA 1.0",
          date: "17 April 2025",
          registrationFee: "₹50",
          registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdn9XlrNXAiMlApyVZxWZtgH6hkoJP1sHYU9se-k7cNHLBZrQ/viewform?usp=header",
          prize: {
            winner: "₹2000 + Certificate + Trophy",
            runnerUp: "₹1000 + Certificate + Trophy",
          },
          background: {
            gradientFrom: "from-black",
            gradientTo: "to-[#041a2c]",
            overlayImage: "/bgdesignathon.png",
            overlayOpacity: "opacity-75",
          },
          colors: {
            primary: "text-cyan-300",
            accent: "text-purple-300",
            border: "border-blue-900/50",
            gradientBox: "bg-gradient-to-r from-cyan-900/80 to-purple-900/80",
          },
          overview:
            "BRAND THE FICTION IS A 3-HOUR CREATIVE DESIGN SPRINT WHERE PARTICIPANTS WILL BRING A FICTIONAL BRAND TO LIFE USING UI/UX AND BRANDING TOOLS. WITH TIME CONSTRAINTS AND A SURPRISE BRIEF, THIS CHALLENGE WILL TEST PARTICIPANTS' DESIGN THINKING, AESTHETIC SENSE, AND VISUAL STORYTELLING SKILLS.",
          rules: [
            <>
              <strong>SURPRISE BRAND BRIEF</strong> - THE THEME WILL BE REVEALED
              AT THE START OF THE EVENT.
            </>,
            <>
              <strong>ORIGINAL WORK ONLY</strong> -ALL DESIGNS MUST BE CREATED
              DURING THE COMPETITION. PRE-MADE ASSETS/TEMPLATES ARE NOT ALLOWED.
            </>,
            <>
              {" "}
              <strong>SUBMISSION ON TIME</strong> - PARTICIPANTS MUST SUBMIT
              THEIR DESIGNS BEFORE THE DEADLINE.
            </>,
            <>
              <strong> FILE FORMAT </strong> - FINAL SUBMISSIONS SHOULD BE IN
              .PNG/.JPG (FOR VISUALS) AND .FIG/.XD (FOR UI MOCKUPS).
            </>,
            <>
              {" "}
              <strong>NO AI-GENERATED CONTENT</strong> - DESIGNS MUST BE 100%
              ORIGINAL AND HUMAN-MADE.
            </>,
            <>
              {" "}
              <strong>TOOLS ALLOWED</strong> -FIGMA, CANVA, ADOBE XD,
              PHOTOSHOP/ILLUSTRATOR.
            </>,
          ],
          contacts: [
            { name: "TAMIYA GUSSAIN", phone: "8851085996" },
            { name: "RAVNEET KAUR", phone: "9958465322" },
            { name: "PARNIKA MATHUR", phone: "9899100870" },
          ],
          images: {
            qr: "/designqr.png",
            graphic: "/designathon.png",
          },
        },
        //blindcode
        {
          id: 1,
          name: "BLIND CODE",
          tagline: "CELESTIA 1.0",
          date: "17 April 2025",
          registrationFee: "₹50",
          registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScfD5ntN76Mpq2ygUJm2v06N2ZCdrDSre7XvNRzdYoQIYhKEw/viewform?usp=header  ",
          prize: {
            winner: "₹2000 + Certificate + Trophy",
            runnerUp: "₹1000 + Certificate + Trophy",
          },
          background: {
            gradientFrom: "from-black",
            gradientTo: "to-[#041a2c]",
            overlayImage: "/blindcodebg.png",
            overlayOpacity: "opacity-35",
          },
          colors: {
            primary: "text-cyan-300",
            accent: "text-purple-300",
            border: "border-blue-900/50",
            gradientBox: "bg-gradient-to-r from-cyan-900/80 to-purple-900/80",
          },
          overview:
            "PARTICIPANTS WILL BE PROVIDED WITH A DEMO LANDING PAGE WHICH YOU HAVE TO REPLICATE WITHIN THE GIVEN DURATION. THE LANDING PAGE DESIGN WILL FEATURE VARIOUS COMPLEX ANIMATIONS AND INTERACTIVE ELEMENTS.",
          rules: [
            <>
              PARTICIPANTS MUST REPLICATE THE PROVIDED LANDING PAGE EXACTLY AS
              SEEN IN THE VIDEO, INCLUDING ALL ANIMATIONS AND TRANSITIONS.
            </>,
            <>
              YOU CAN USE ANY PLATFORM OR LANGUAGE, SUCH AS HTML, CSS, AND
              JAVASCRIPT, OR EXTERNAL FRAMEWORKS AND LIBRARIES LIKE BOOTSTRAP OR
              TAILWIND CSS, TO CREATE THE PROVIDED DESIGN AND USE OF AI
              PLATFORMS (SUCH AS CHATT, CURSOR AI ETC) ARE PROHIBITED.
            </>,
            <>
              PARTICIPANTS CAN INSPECT THE LIVE PREVIEW FOR 10 MINUTES EVERY
              HOUR TO REFINE THEIR CODE. PLEASE NOTE THAT TAKING PICTURES OF THE
              WEBPAGE IS STRICTLY PROHIBITED; ANY VIOLATION OF THIS RULE WILL
              RESULT IN DISQUALIFICATION.
            </>,
            <>TIME LIMIT: 3 HOURS</>,
          ],
          contacts: [
            { name: "MANAS CHAWLA", phone: "8287966275" },
            { name: "AKSHIT JAIN", phone: "9717726278" },
            { name: "PRATHAM SALUJA", phone: "8287272778" },
          ],
          images: {
            qr: "/blindcodeqr.png",
            graphic: "/blindcode.png",
          },
        },
        //Estate empire
        {
          id: 2,
          name: "ESTATE EMPIRE",
          tagline: "CELESTIA 1.0",
          date: "17 April 2025",
          registrationFee: "₹50",
          registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfBboQUp_4rHS0S_7UOp0HxfeXBw6xQW2w5UnyAfkbtEtkP2w/viewform?usp=header ",
          prize: {
            winner: "₹2000 + Certificate + Trophy",
            runnerUp: "₹1000 + Certificate + Trophy",
          },
          background: {
            gradientFrom: "from-black",
            gradientTo: "to-[#041a2c]",
            overlayImage: "/bgem.png",
            overlayOpacity: "opacity-15",
          },
          colors: {
            primary: "text-cyan-300",
            accent: "text-purple-300",
            border: "border-blue-900/50",
            gradientBox: "bg-gradient-to-r from-cyan-900/80 to-purple-900/80",
          },
          overview: `ESTATE EMPIRE IS A STRATEGIC INVESTMENT AND BIDDING SIMULATION WHERE PARTICIPANTS WILL COMPETE TO BUY,
          DEVELOP, AND TRADE VIRTUAL LAND IN A SIMULATED MAP OF DELHI. EACH PLAYER MUST MAKE CALCULATED BIDDING
          DECISIONS, ANALYZE MARKET TRENDS, AND MAXIMIZE THEIR RETURN ON INVESTMENT (ROI) TO BECOME THE MOST
          SUCCESSFUL LAND INVESTOR. MARKET CONDITIONS, COMPETITION, AND EXTERNAL FACTORS WILL INFLUENCE LAND
          PRICES AND INVESTMENT POTENTIAL, MAKING THE GAME BOTH CHALLENGING AND DYNAMIC.`,
          rules: [
            <>
              <strong>ARTIFICIAL MONEY SYSTEM</strong> - EACH PARTICIPANT WILL
              RECEIVE AN ARTIFICIAL MONEY OF 15CR AS THEIR STARTING AMOUNT TO
              BID WITH.
            </>,
            <>
              <strong>NO EXTERNAL ASSISTANCE</strong> - PARTICIPANTS CANNOT USE
              EXTERNAL FINANCIAL ADVISORS, CALCULATORS, OR SOFTWARE TO PREDICT
              MARKET VALUES.
            </>,
            <>
              {" "}
              <strong>BIDDING ETIQUETTE</strong> - PLAYERS MUST NOT COMMUNICATE
              WITH EACH OTHER TO MANIPULATE PRICES OR FORM CARTELS.
            </>,
            <>
              <strong>TIME LIMITS</strong> - EACH BIDDING ROUND WILL HAVE A
              FIXED TIME LIMIT, AND PARTICIPANTS MUST PLACE THEIR BIDS WITHIN
              THIS TIMEFRAME.
            </>,
            <>
              {" "}
              <strong>FINAL DECISION IS BINDING</strong> - ONCE A BID IS PLACED,
              IT CANNOT BE WITHDRAWN.
            </>,
          ],
          contacts: [
            { name: "SHAIVI DHUPER", phone: "9773830095" },
            { name: "TANISHKA", phone: "9654200748" },
            { name: "TANVEER SINGH", phone: "7500055556" },
          ],
          images: {
            qr: "/estateempireqr.png",
            graphic: "/graphic.png",
          },
          // object for 2nd event
        },
        //market mania
        {
          id: 3,
          name: "MARKET MANIA ",
          tagline: "CELESTIA 1.0",
          date: "17 April 2025",
          registrationFee: "₹50",
          registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfalS_EJCS1558ilkq53PwJLpq82pBetlWTB-yqnpQs8N80ow/viewform ",
          prize: {
            winner: "₹2000 + Certificate + Trophy",
            runnerUp: "₹1000 + Certificate + Trophy",
          },
          background: {
            gradientFrom: "from-black",
            gradientTo: "to-[#041a2c]",
            overlayImage: "/marketmaniabg.png",
            overlayOpacity: "opacity-35",
          },
          colors: {
            primary: "text-cyan-300",
            accent: "text-purple-300",
            border: "border-blue-900/50",
            gradientBox: "bg-gradient-to-r from-cyan-900/80 to-purple-900/80",
          },
          overview:
            "MARKET MANIA IS AN EXCITING AND FAST-PACED COMPETITIONF PARTICIPANTS WILL RECEIVE A RANDOM COMPANY AND A RANDOM PRODUCT AND HAVE TWO HOURS TO CRAFT A COMPELLING MAX 5 MINUTE PITCH. THIS EVENT TESTS CREATIVITY, STRATEGIC THINKING, AND PRESENTATION SKILLS AS CONTESTANTS MUST DEVELOP INNOVATIVE WAYS TO MARKET THEIR ASSIGNED PRODUCT UNDER A SPECIFIC BRAND.",
          rules: [
            <>
              <strong>TEAM COMPOSITION:</strong> - TEAM SHOULD CONSIST OF 1-4
              PARTICIPANTS.PARTICIPANTS CAN USE ANY RESOURCES TO EXECUTE THEIR
              IDEA.
            </>,
            <>
              <strong>TIME LIMIT:</strong> TIME IS STRICTLY 5+2 MIN. INCLUDING
              QUESTIONS -ANSWERS (IF ANY). TEAMS MUST MAKE THEIR PRESENTATIONS
              WITHIN THE TIME FRAME.
            </>,
            <>
              {" "}
              <strong>JUDGING CRITERIA:</strong> - THE JUDGES WILL EVALUATE THE
              QUALITY AND IMPACT OF THE PRODUCT CREATIVITY, TEAMWORK, AND THE
              REASONING BEHIND THEIR EXECUTION WILL BE TAKEN INTO ACCOUNT.
            </>,
            <>
              <strong> DISQUALIFICATION: </strong> - THE IDEA SHOULDN'T BE
              COPIED OR THE TEAM WILL BE DISQUALIFIED. MAKE SURE THE IDEA IS
              UNIQUE, NEW AND OWNED BY YOU COMPLETELY.TEAMS SHOULD ADHERE TO THE
              TIME LIMIT OR IT WOULD RESULT IN NEGATIVE.
            </>,
          ],
          contacts: [
            { name: "PRAKRATI AGGARWAL", phone: "9873644488" },
            { name: "MOHNISH MEHTA", phone: "9311681677" },
            { name: "KUNJAL", phone: "9115751750" },
          ],
          images: {
            qr: "/marketmaniaqr.png",
            graphic: "/marketsticker.png",
          },
        },
        //cosplay
        {
          id: 4,
          name: "COSPLAY CARNIVAL ",
          tagline: "CELESTIA 1.0",
          date: "17 April 2025",
          registrationFee: "₹100",
          registrationLink: "https://forms.gle/trVW4ce6vn3N3Lj6A",
          prize: {
            winner: "₹2000 + Certificate + Trophy",
            runnerUp: "₹1000 + Certificate + Trophy",
          },
          background: {
            gradientFrom: "from-black",
            gradientTo: "to-[#041a2c]",
            overlayImage: "/cosplaybg.png",
            overlayOpacity: "opacity-15",
          },
          colors: {
            primary: "text-cyan-300",
            accent: "text-purple-300",
            border: "border-blue-900/50",
            gradientBox: "bg-gradient-to-r from-cyan-900/80 to-purple-900/80",
          },
          overview: `GET READY TO UNLEASH YOUR INNER CHARACTER AT COSPLAY CARNIVAL 2025!
WHETHER YOU'RE A SUPERHERO, AN ANIME ICON, OR A BOLLYWOOD LEGEND, THIS EVENT IS YOUR STAGE TO SHINE. PARTICIPANTS WILL DRESS UP AS THEIR FAVORITE CHARACTERS, BRING THEM TO LIFE WITH PERFORMANCE AND PRESENCE, AND COMPETE FOR EXCITING PRIZES.
THEME:
 AVENGERS (MARVEL SUPERHEROES & VILLAINS)
 ANIME (POPULAR ANIME & MANGA CHARACTERS)
 BOLLYWOOD (CLASSIC AND MODERN BOLLYWOOD ICONS).`,
          rules: [
            <>
              PARTICIPANTS MUST REGISTER IN ADVANCE. WALK-INS MAY BE
              ACCOMMODATED BASED ON AVAILABILITY.{" "}
            </>,
            <>
              COSTUMES MUST BE SELF-MADE OR CUSTOMIZED; STORE-BOUGHT COSTUMES
              WITH MODIFICATIONS ARE ALLOWED{" "}
            </>,
            <>
              NO OFFENSIVE CONTENT-COSPLAYS MUST BE APPROPRIATE FOR A PUBLIC
              SETTING.{" "}
            </>,
            <>
              PROPS ARE ALLOWED BUT SHOULD BE SAFE (NO REAL WEAPONS OR HAZARDOUS
              MATERIALS).
            </>,
            <>
              PERFORMANCES (POSES, DIALOGUES, SKITS) SHOULD BE WITHIN 2 MINUTES
              IF INCLUDED.{" "}
            </>,
            <>GROUP OR SOLO PARTICIPATION IS ALLOWED (MAX TEAM SIZE: 3). </>,
            <>TIME LIMIT: 3 HOURS</>,
          ],
          contacts: [
            { name: "AMAANI ARORA", phone: "9354437868" },
            { name: "HRISHABH RAJ", phone: "8810289675" },
            { name: "JUHI", phone: "9873679706" },
          ],
          images: {
            qr: "/Cosplayqr.png",
            graphic: "/cosplaysticker.png",
          },
        },
      ],
    },
  },
  team: [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "#",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "#",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "#",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "#",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://#",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "#",
    },
  ],
  socialLinks: [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      name: "Email",
      icon: <IoMdMail />,
      link: "#",
    },
  ],
};

export default content;
