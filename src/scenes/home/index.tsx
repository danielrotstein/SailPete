import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
import sail from "@/assets/sail.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 dark:bg-slate-400 dark:text-black md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // onViewportEnter will make sure the Navbar adjust to the section we're on the page -> Home, Benefits, Our Classes etc
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20
                before:z-[-1]"
              >
                <h1 className="font-pacifico text-7xl">SailPete</h1>
                {/* <img alt="home-page-text" src={HomePageText} /> */}
              </div>
            </div>

            <p className="text-md mt-16">
              The SailPete Sailing Center is one of the most active sailing
              facilities in the United States. Operated and owned by John and
              Jane Doe. Their dedication to delivering the very best sailing
              education, in environments that make learning fun and rewarding.
              The Center is host to numerous regional and national regattas,
              sailing classes, and community sailing memberships open to
              residents of the Tampa Bay area.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us
            </ActionButton>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center
            md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            className="my-4 rounded-full"
            alt="home-pageGraphic"
            src={sail}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
