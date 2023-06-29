import self from "../../assets/img/self.png";
import mock1 from "../../assets/img/mock1.png";
import mock2 from "../../assets/img/mock2.png";
import mock3 from "../../assets/img/mock3.png";
import mock4 from "../../assets/img/mock4.png";

export let colors = ["#ce3c50", "#0090ad"];

export const info = {
  firstName: "Daniel",
  lastName: "Milad",
  initials: "home",
  position: "a Web Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors}`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🎹",
      text: "previously composer/audio engineer",
    },
    {
      emoji: "🇦🇺",
      text: "based in the Aus",
    },
    {
      emoji: "💼",
      text: "freelancer",
    },
    {
      emoji: "📧",
      text: "danmilad.code@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/rahmsc",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/daniel-milad-7467731a4/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/rahmsc_",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "mailto:danmilad.code@gmail.com",
      icon: "fa fa-envelope",
      label: "email",
    },
    {
      link: "https://daniel-milad-resume.tiiny.site/",
      icon: "fa fa-file",
      label: "resume",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: (
    <>
      Hello! I'm Daniel Milad. With previous experience at FinTech startup
      INKPAY, I'm currently working as a freelancer.
      <br />
      <br />I work with brands and businesses designing and developing front-end
      solutions using ReactJS, complete solutions with the MERN stack, and web3
      solutions using Solidity.
      <br />
      <br />
      Within the web3 space, I'm a founder & project manager of the successful
      NFT project 'Pink Flamingo Social Club' - the first multichain NFT
      collection, and cultivated valueable partnerships with Multichain,
      Chainlink and Polygon Studios to name a few.
      <br />
      <br />
      I'm passionate about developing technology solutions that help empower
      brands, artists, and communities to thrive using AI and Web3.
    </>
  ),
  skills: {
    proficientWith: [
      "javascript",
      "react",

      "solidity",
      "tailwindcss",
      "html5",
      "css3",
      "figma",
      "jira/confluence",
      "adobe suite",
    ],
    exposedTo: [
      "nodejs",
      "expressjs",
      "nextjs",
      "typescript",
      "mongodb",
      "react native",
      "python",
      "SQL",
    ],
  },
  hobbies: [
    {
      label: "music production",
      emoji: "🎧",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    {
      label: "travel",
      emoji: "🌎",
    },
    {
      label: "exercise",
      emoji: "🏃‍♀️",
    },
  ],
  portfolio: [
    {
      title: "Wild Oasis - Hotel Mangement App",
      live: "https://cabinbookingdemo.netlify.app/dashboard?last=7",
      source: "https://github.com/rahmsc/Wild-Oasis-App",
      image: mock1,
    },
    {
      title: "Fast React Pizza Co. - Food Ordering App",
      live: "https://fastreactpizzademo.netlify.app",
      source: "https://github.com/rahmsc/Fast-React-Pizza-App",
      image: mock2,
    },
    {
      title: "WordWise - Travel Diary App using Leaflet",
      live: "https://wheretotraveltheworld.netlify.app",
      source: "https://github.com/rahmsc/worldwise-app",
      image: mock3,
    },
    {
      title: "Forkify - Recipe Searching App",
      live: "https://forkify-danmilad.netlify.app",
      source: "https://github.com/rahmsc/forkify-fork",
      image: mock4,
    },
  ],
};
