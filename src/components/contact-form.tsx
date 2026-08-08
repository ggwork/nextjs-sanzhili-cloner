"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTACT_FORM_TITLE } from "@/data/site";
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

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneOk = /^(13|15|18|17|19)\d{9}$/.test(form.phone);
    if (!form.name) return alert("请输入姓名");
    if (!form.phone) return alert("请输入电话号码");
    if (!phoneOk) return alert("手机号码规格有误");
    if (!form.email) return alert("请输入邮箱");
    if (!form.country) return alert("请输入国家");
    if (!form.remarks) return alert("请输入备注");
    alert("提交成功");
    setForm({ name: "", phone: "", email: "", country: "", remarks: "" });
  };

  return (
    <section id="contact" className="container-content my-10 scroll-mt-[100px]">
      <Reveal variant="fade-up" className="flex max-md:flex-wrap">
        {/* Left image */}
        <div className="w-1/2 max-md:w-full">
          <Image
            src="/images/contact.jpg"
            alt="联系我们"
            width={1920}
            height={873}
            className="h-auto w-full"
            sizes="(max-width: 768px) 95vw, 40vw"
          />
        </div>

        {/* Right form */}
        <div className="w-[45%] p-5 max-md:w-full">
          <h2 className="mb-2" style={{ fontSize: 25, color: "#777" }}>
            {CONTACT_FORM_TITLE}
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mt-[30px] flex flex-wrap justify-between">
              <Field
                placeholder="姓名"
                value={form.name}
                onChange={set("name")}
              />
              <Field
                placeholder="电话（必填）"
                value={form.phone}
                onChange={set("phone")}
              />
              <Field
                placeholder="邮箱"
                value={form.email}
                onChange={set("email")}
              />
              <Field
                placeholder="国家"
                value={form.country}
                onChange={set("country")}
              />
            </div>
            <textarea
              placeholder="简单描述您的产品需求"
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
              提交
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
