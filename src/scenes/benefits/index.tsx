import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  GlobeAmericasIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import sailing2 from "@/assets/sailing2.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Community",
    description:
      "Sailing is more than a sport - It's a lifestyle and a welcoming community.",
  },
  {
    icon: <GlobeAmericasIcon className="h-6 w-6" />,
    title: "Travel",
    description:
      "Sailing opens up new ways to travel and see new corners of this big world.",
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    title: "Finances",
    description:
      "Charter companies provide opportunities for you to sail and get paid.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20 dark:text-white"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            SOME<span className="text-primary-500"> BENEFITS</span>
          </HText>
          <p className="text-md my-5">
            Learning to sail has the power to change your outlook and spin you
            in a new direction. When you start sailing, you’ll learn new skills,
            gain an appreciation for the sport and have new adventures – that’s
            to be expected. However, there are also hidden benefits you may not
            think about until you dive into this alluring lifestyle.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS & DESCRIPTION */}
        <div className="mt-16 gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="h-auto w-full rounded-md"
            alt="Benefits-sailing-image"
            src={sailing2}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
