"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Source `.addform`: 80% wide, two columns — left image (50%), right form (45%).
 * h1 25px/#777. Four inputs (姓名/电话/邮箱/国家, 45% width, 50px tall, 1px #ccc
 * border), a textarea (95px), and a 提交 button that on hover goes bg #1a689a /
 * white. Submit runs the source's alert-based validation (client-only mock).
 */
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    remarks: "",
  });
  const t = useTranslations();

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneOk = /^(13|15|18|17|19)\d{9}$/.test(form.phone);
    if (!form.name) return alert(t("contact.nameRequired"));
    if (!form.phone) return alert(t("contact.phoneRequired"));
    if (!phoneOk) return alert(t("contact.phoneInvalid"));
    if (!form.email) return alert(t("contact.emailRequired"));
    if (!form.country) return alert(t("contact.countryRequired"));
    if (!form.remarks) return alert(t("contact.remarksRequired"));
    alert(t("contact.success"));
    setForm({ name: "", phone: "", email: "", country: "", remarks: "" });
  };

  return (
    <section id="contact" className="container-content my-10 scroll-mt-[100px]">
      <Reveal variant="fade-up" className="flex max-md:flex-wrap">
        {/* Left image */}
        <div className="w-1/2 max-md:w-full">
          <Image
            src="/images/contact.jpg"
            alt={t("contact.imageAlt")}
            width={1920}
            height={873}
            className="h-auto w-full"
            sizes="(max-width: 768px) 95vw, 40vw"
          />
        </div>

        {/* Right form */}
        <div className="w-[45%] p-5 max-md:w-full">
          <h2 className="mb-2" style={{ fontSize: 25, color: "#777" }}>
            {t("contact.title")}
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mt-[30px] flex flex-wrap justify-between">
              <Field
                placeholder={t("contact.name")}
                value={form.name}
                onChange={set("name")}
              />
              <Field
                placeholder={t("contact.phone")}
                value={form.phone}
                onChange={set("phone")}
              />
              <Field
                placeholder={t("contact.email")}
                value={form.email}
                onChange={set("email")}
              />
              <Field
                placeholder={t("contact.country")}
                value={form.country}
                onChange={set("country")}
              />
            </div>
            <textarea
              placeholder={t("contact.remarks")}
              value={form.remarks}
              onChange={set("remarks")}
              className="mt-0 box-border h-[95px] w-full border border-line bg-white p-2.5 outline-none"
            />
            <button
              type="submit"
              className={cn(
                "mt-5 block h-[50px] w-full border border-line bg-white text-[16px] text-[#797979]",
                "transition-colors duration-500 hover:border-[#1a689a] hover:bg-[#1a689a] hover:text-white",
              )}
            >
              {t("contact.submit")}
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Field(props: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="mb-5 h-[50px] w-[45%] border border-line bg-white pl-5 outline-none max-md:w-full"
    />
  );
}
