// src/components/sections/Hero.tsx
import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'

import Section from '../layout/Section'
import Badge from '../ui/Badge'
import profilePhoto from '../../assets/images/profile-photo.webp'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100, delay: 0.35 },
  },
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <div id="top">
      <Section className="pt-12 sm:pt-16">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              <Badge>SDVOSB</Badge>
              <Badge>SAM.gov Active</Badge>
              <Badge>Top Secret Eligible</Badge>
              <Badge>Austin, TX • Open to Japan</Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t('hero_title')}
              </h1>

              <p className="text-lg text-zinc-300 sm:text-xl">
                {t('hero_role')}
              </p>

              <p className="max-w-3xl leading-relaxed text-zinc-400">
                {t('hero_desc')}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="justify-self-center lg:justify-self-end"
            variants={photoVariants}
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-3xl bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />
              <img
                src={profilePhoto}
                alt={t('hero_title')}
                className="relative h-40 w-40 rounded-3xl border border-zinc-800 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] sm:h-48 sm:w-48"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}