import { SelectedPage, ClassType } from "@/shared/types";
import kidssail from "@/assets/kidssail.png";
import adultsail from "@/assets/adultsail.png";
import racecourses from "@/assets/racecourses.png";
import sailclasses from "@/assets/sailclasses.png";
import sailclass from "@/assets/sailclass.png";
import specialclass from "@/assets/specialclass.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Adult Learn to Sail Classes",
    description:
      "This introductory sailing course is designed to teach basic sailing techniques necessary to allow you to comfortably enjoy sailing our fleet of Ideal 18’s in fair weather. Adaptive boats and equipment available upon request.",
    image: sailclasses,
  },
  {
    name: "Adult Intermediate Sailing Classes",
    description:
      "The Intermediate Adult Sailing course is the next step in our curriculum after the basic Learn to Sail course. It provides additional instruction on sail trim, boathandling, and other advanced techniques.",
    image: sailclass,
  },
  {
    name: "Learn to Race and Racing with Spinnakers",
    description:
      "These classes are designed for members who have a generous amount of sailing experience, a decent feel for boat handling, and would like to start racing our fleet of Ideal 18’s. Students will be introduced to rigging the spinnaker, hoists, douses, and how to incorporate these procedures into your racing tactics.",
    image: racecourses,
  },
  {
    name: "Private Lessons",
    description:
      "The only other person aboard is one of our expert instructors. However, if the course you choose includes classroom sessions ashore (a small but important element) please understand that those classrooms sessions are shared with others who may be learning that same week.",
    image: adultsail,
  },
  {
    name: "Kids Classes",
    description:
      "We offer beginner, intermediate, and advanced/racing courses for all 8-13yr olds looking to advance their sailing skills.",
    image: kidssail,
  },
  {
    name: "Special Classes",
    description:
      "These are seasonal events designed to further a sailors knowledge and skills regarding a particular topic.",
    image: specialclass,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40 dark:bg-black dark:text-white"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>
              OUR
              <span className="text-white dark:text-primary-500"> CLASSES</span>
            </HText>
            <p className="text-md py-5">
              More than 220,000 children and adult students chose SailPete to
              learn how to sail, learn how to cruise on big sailboats, and learn
              sailboat racing. The school at SailPete offers everything you need
              to achieve your sailing goals. Our American Sailing Association
              (ASA) curriculum is internationally recognized, teaching students
              the range of skills from basic crew participation to achieving the
              confidence to sail the bay, cross oceans, or charter a boat
              internationally.
            </p>
            <p>
              Whether you are exploring the sport of sailing for the first time,
              revisiting a forgotten passion, or striving to take your skills to
              the next level, SailPete provides the resources you'll need to
              make your sailing dreams come true.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
