"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/section-title";

const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const EASE = [0.215, 0.61, 0.355, 1] as const;

export function ContactInfoCards() {
  const t = useTranslations();

  const cards = [
    {
      icon: MapPin,
      label: t("contactInfo.addressLabel"),
      value: t("contactInfo.addressValue"),
    },
    {
      icon: Phone,
      label: t("contactInfo.phoneLabel"),
      value: PHONE,
    },
    {
      icon: Mail,
      label: t("contactInfo.emailLabel"),
      value: EMAIL,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-content">
        <SectionTitle>{t("contactInfo.title")}</SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center rounded-lg border border-line bg-white p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                <card.icon className="h-8 w-8 text-brand transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-[18px] font-medium text-ink">
                {card.label}
              </h3>
              <p className="text-[15px] leading-relaxed text-body">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
