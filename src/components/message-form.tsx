"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Source Message.aspx?ClassID=62 — 客户留言. Two-column layout matching the
 * contact-form pattern: left image, right form with name/phone/email/country
 * inputs + a message textarea + submit button.
 */
export function MessageForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const t = useTranslations();

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const phoneOk = /^(13|15|18|17|19)\d{9}$/.test(form.phone);
    if (!form.name) return alert(t("message.nameRequired"));
    if (!form.phone) return alert(t("message.phoneRequired"));
    if (!phoneOk) return alert(t("message.phoneInvalid"));
    if (!form.email) return alert(t("message.emailRequired"));
    if (!form.country) return alert(t("message.countryRequired"));
    if (!form.message) return alert(t("message.messageRequired"));

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, remarks: form.message }),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", country: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="container-content my-10">
      <Reveal variant="fade-up" className="flex max-md:flex-wrap">
        {/* Left image */}
        <div className="w-1/2 max-md:w-full">
          <Image
            src="/images/contact.jpg"
            alt={t("message.imageAlt")}
            width={1920}
            height={873}
            className="h-auto w-full"
            sizes="(max-width: 768px) 95vw, 40vw"
          />
        </div>

        {/* Right form */}
        <div className="w-[45%] p-5 max-md:w-full">
          <h2 className="mb-2" style={{ fontSize: 25, color: "#777" }}>
            {t("message.title")}
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mt-[30px] flex flex-wrap justify-between">
              <Field
                placeholder={t("message.name")}
                value={form.name}
                onChange={set("name")}
              />
              <Field
                placeholder={t("message.phone")}
                value={form.phone}
                onChange={set("phone")}
              />
              <Field
                placeholder={t("message.email")}
                value={form.email}
                onChange={set("email")}
              />
              <Field
                placeholder={t("message.country")}
                value={form.country}
                onChange={set("country")}
              />
            </div>
            <textarea
              placeholder={t("message.message")}
              value={form.message}
              onChange={set("message")}
              className="mt-0 box-border h-[95px] w-full border border-line bg-white p-2.5 outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "mt-5 block h-[50px] w-full border border-line bg-white text-[16px] text-[#797979]",
                "transition-colors duration-500 hover:border-[#1a689a] hover:bg-[#1a689a] hover:text-white",
                "disabled:cursor-not-allowed disabled:opacity-60",
              )}
            >
              {status === "sending"
                ? t("message.sending")
                : status === "success"
                  ? t("message.success")
                  : status === "error"
                    ? t("message.error")
                    : t("message.submit")}
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
