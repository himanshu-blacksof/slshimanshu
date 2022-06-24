import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//comoponets
import PageHeading from "../Components/PageHeading";
import Footer from "../Components/Footer";

//imager
import team1 from "../assets/images/Team_group.jpg";
import TeamCard from "../Components/TeamCard";
import adityaImg from "../assets/images/team__members/Aditya Nagar.png";
import harshalImg from "../assets/images/team__members/Harshal Kamle.png";
// import akankshaImg from "../assets/images/team__members/Akanksha.jpg";
import rituImg from "../assets/images/team__members/Ritu.jpg";
import kaveryImg from "../assets/images/team__members/Kavery.jpg";
import ashwiniImg from "../assets/images/team__members/Ashwini.jpg";
import raviImg from "../assets/images/team__members/Ravi.jpg";
import aveenaImg from "../assets/images/team__members/Aveena.jpg";
import suyashImg from "../assets/images/team__members/Suyash.jpg";
import kukitaImg from "../assets/images/team__members/Kukita.jpg";
import close from "../assets/images/Group 1447.svg";
import teamImg from "../assets/images/team_img.jpg";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const teamData = [
    {
      image: adityaImg,
      name: "Aditya Nagar",
      post: "Co-Founder & CEO",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/aditya-nagar/",
      description: "Aditya’s story started with passion. The passion to learn, to create, and to grow. Hailing from a technical background, Aditya loved creating industrial-grade drones which lead to the birth of his first start-up - The Galactic Hobby Square. The business grew exponentially with him delivering drones to the Indian Military and dealing with manufacturers, suppliers, and wholesalers across 20+ countries."
    },
    {
      image: harshalImg,
      name: "Harshal Kamle",
      post: "Co-founder and CCO",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/harshal-kamle-12890693/",
      description: "Harshal is the creative brain of our organization. Hailing from a family of designers, he was grown up between color pallets, elements, aesthetics, and business value; so you can imagine the gigabytes of creativity flowing through his body. His upbringing makes him a natural designer but what makes us love him is his zeal to never adjust when it comes to creating design value.",
    },
    {
      image: ashwiniImg,
      name: "Ashwini Parolkar",
      post: "Head of Strategy",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/ashwiniparolkar/",
      description: "Wherever you find an idea concocting, expect to find Ashwini there! Leading our “I have a solution” gang, Ashwini heads our strategy team and oversees organizational transformation for us and our clients. In her career, she has undertaken various functional and managerial roles; overlooking strategy, marketing and branding, outreach, and sales for many brands.",

    },
    {
      image: rituImg,
      name: "Ritu Goyal",
      post: "Executive - Business & Alliance",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/ritu-goyal24/",
      description: "We are not Avengers but Ritu is definitely our Hawkeye. Taking care of business and alliances at Blacksof, this girl knows when a business needs a brand revamp. Be it helping brands realize their design needs to crafting a flawless onboarding experience, she helps sail all our clients to the shore. Another spot she specializes in is creating long-lasting business synergies.",

    },
    {
      image: kaveryImg,
      name: "Kavery Yadav",
      post: "Copywriting Lead",
      linkedInLink: "https://www.linkedin.com/in/kavery-yadav/",
      close: close,
      description: "Branding, Marketing, Visualization, and Ideas with a punch of ‘Consider it done’ is what defines our Copywriting Lead to the T. With an in-depth understanding of brand value, market trends, positioning, and selling, Kavery knows what your users would droll over. So, yes! Content is just the vessel in which she makes this value cocktail and believe us it will make your audience go as high as Burj Khalifa.",

    },
    {
      image: raviImg,
      name: "Ravi Verma",
      post: "UI-UX Specialist",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/ravi-verma-865619208/",
      description: "Leading our UI-UX game, Ravi takes care of all the digital experience needs of our clients. Starting his career as a web designer and diving into the field of UI-UX soon after gives him the required knowledge to deliver user and business agnostic solutions. Ravi delivers value by merging his creative and critical thinking skills with a deep understanding of human psychology and coding acumen.",

    },
    {
      image: kukitaImg,
      name: "Kukita Biswas",
      post: "Brand Specialist",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/kukita-227653128/",
      description: "If the talk is about representing a brand to its fullest, then Kukita is the one who leads the charge at Blacksof. With a deep understanding of branding, psychology, and market trends, Kukita oversees brand refreshes and branding right from conceptualization to implementation - bringing businesses to life through design.",

    },
    {
      image: aveenaImg,
      name: "Aveena Bhagat",
      post: "HR Executive",
      close: close,
      linkedInLink: "https://www.linkedin.com/in/aveena-bhagat/",
      description: "Overseeing recruitment, onboarding, employee wellness, and training and development at Blacksof, Aveena takes care of our end-to-end HR functions. Being a team player and a people person enables her to understand each team member and uplift a positive working environment.",

    },
    {
      image: suyashImg,
      name: "Suyash Pable",
      post: "Copywriting Specialist",
      close: close,
      description: "If you are one for Shakespearean English, then Suyash is ‘The Guy’ for Thy brand. With a flair for creating business-centric, binge-worthy content, he is the word wizard in the team who always brings something new to the table. Our team also calls him Shashi Tharoor Jr. and rightly so, but he wasn’t always this awesome. His journey towards awesomeness started when he left his chemical engineering job and married his true passion - Writing. For 2 years, he piously wrote for an International Sports Website, drastically increasing their follower base. Dabbling his skills into other business genres, he simultaneously helped multiple brands ace their branding and content strategy. He is an ideoholic, an adept researcher, and an even better creator. When he’s not working, he’s either watching his favorite sport or playing ‘Catch’ with a cute little dog. He is a foodie and a big-time music fanatic. Find him wherever you see a head-banging to loud EDM, Rock, or House music. The team’s wordsmith is Suyash.Raising the team spirit and being an excellent collaborator is what Suyash brings to the table. His eloquent qualities are what provides the brand rewarding results in the execution of copywriting. His prior experiences in a leading Sports Website give him an understanding on content writing from conceptualization to the end result. He belongs to the mechanical engineering background which took a drastic turn as he gravitated to his destined career here at Blacksof. He is fond of different sports,hence, his eyes sparkle whenever it comes to writing on it. He is referred to as the ‘Shashi Tharoor’ of our esteemed company. So, combine exemplary writing skills with a touch of excellent teamwork and you now have the magic potion that Suyash offers our team. He is a major non-veg foodie, dog-lover and huge EDM, Rock and House music fan."
    },
    // {
    //   image: akankshaImg ,
    //   name: "Akanksha Paliwal",
    //   post: "Account Associate",
    //   close: close,
    //   linkedInLink: "https://www.linkedin.com/in/akanksha-paliwal/",
    //   description: "Leading our ‘Keep Clients Happy’ team, Akanksha heads all project-related client interactions at Blacksof. Starting her career as a student scriptwriter, Akanksha always had an inclination towards creativity. Her performance landed her the position of production manager right out of college where she managed end-to-end ideation and production of videos.",

    // },
  ]

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="master__container">
        <PageHeading
          heading="Team"
          subHeading="Blacksof will be what YOU make it"
          subSubHeading="We create people-centric experiences, be it for our clients or our team."
        />
      </div>
      <div className="team__image__container">
        <img src={team1} alt="Team Group" />
      </div>

      <div className="master__container">

        <div className="main__heading">
          <h1>Life at Blacksof</h1>
        </div>
        <div className="life__at__blacksof__container">
          <h2>We are a closely</h2>
          <div className="life__blacksof__text">
            <h2> knit team!</h2>
            <p>
              All the good stuff you read above doesn’t cover it all. Yes, there
              are days when we have acute deadlines and work pressure. Times
              when we disagree and argue. Times when we don’t like even the
              version 10 of an iteration. This is because we don’t want to be
              defined by anything short of perfect and intelligent. But, at the
              end of the day, our frequencies match, we are well-aligned with
              our goals, and continue to create value for work and our team.
            </p>
          </div>
        </div>

        <div className="team__member__grid">
          {
            teamData.map((item, index) => {
              return (
                <TeamCard
                  image={item.image}
                  name={item.name}
                  post={item.post}
                  close={item.close}
                  linkedInLink={item.linkedInLink}
                  description={item.description}
                />
              )
            })
          }


        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default TeamPage;
