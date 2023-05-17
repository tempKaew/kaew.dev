import useOnScroll from '@/src/hooks/useOnScroll'
import { animateDownOpacity } from '@/src/utils/animation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Menu() {
  const isScrolled = useOnScroll()

  return (
    <header
      className={clsx('fixed z-[1000] w-full px-4 md:px-8', [
        isScrolled === true && [
          'border-divider-light -pb-1 -mt-1 border-b border-lightest-navy backdrop-blur-2xl'
        ]
      ])}
    >
      <nav className="grid grid-cols-6 py-2 md:py-4">
        <motion.div
          className="col-span-1 flex items-center font-bold uppercase text-green"
          initial={animateDownOpacity.initial}
          animate={animateDownOpacity.animate}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Kaew<span className="hidden text-lightest-navy md:block">DEV</span>
        </motion.div>
        <div className="col-span-4 col-start-3 flex justify-end text-lightest-slate">
          <motion.ol
            className="flex list-none space-x-2 py-2 pr-0 font-light md:space-x-5 md:pr-10 md:font-normal"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
          >
            <motion.li variants={animateDownOpacity} transition={{ duration: 0.5 }}>
              Project
            </motion.li>
            <motion.li variants={animateDownOpacity} transition={{ duration: 0.5 }}>
              Experience
            </motion.li>
            <motion.li variants={animateDownOpacity} transition={{ duration: 0.5 }}>
              Blog
            </motion.li>
            <motion.li variants={animateDownOpacity} transition={{ duration: 0.5 }}>
              Contact
            </motion.li>
          </motion.ol>

          <ul className="flex items-center">
            <motion.li
              className="hidden sm:block"
              initial={animateDownOpacity.initial}
              animate={animateDownOpacity.animate}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://github.com/tempkaew"
                className="flex items-center justify-center rounded-xl hover:bg-lightest-navy"
                aria-label="My GitHub profile"
                title="My GitHub profile"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <title>GitHub Icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </span>
              </a>
            </motion.li>
            <motion.li
              className="hidden sm:block"
              initial={animateDownOpacity.initial}
              animate={animateDownOpacity.animate}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a
                href="https://github.com/tempkaew"
                className="flex items-center justify-center rounded-xl hover:bg-lightest-navy"
                aria-label="My Resume"
                title="My Resume"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <span className="flex h-9 items-center justify-center rounded-xl px-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Resume
                </span>
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
