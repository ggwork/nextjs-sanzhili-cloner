"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import type { ProductDetail } from "@/types";

/**
 * Source `.nei.detail .content`: a centered (~926px) column — title (27px/#333,
 * centered), date (14px/#666, centered), then the `#lblContent` body. Product/
 * case detail bodies are image-only galleries (each `<p>` holds a centered
 * `<img>`); some CMS entries (高抗冲ABS / ABS行李箱 / ABS安全帽) have no images on
 * the source site and render a "详情内容整理中" placeholder. Ends with a 返回 link.
 */
export function DetailGallery({
  detail,
  backHref,
  backLabel,
}: {
  detail: ProductDetail;
  backHref: string;
  backLabel?: string;
}) {
  const t = useTranslations();

  return (
    <Reveal variant="fade-up">
      <div className="mx-auto pb-[60px]" style={{ maxWidth: 926 }}>
        <h1 className="text-center text-[27px] text-ink" style={{ margin: "58.5px 0 18px" }}>
          {t(detail.title)}
        </h1>
        <div className="mb-[27px] text-center text-[14px] text-[#666]">{detail.date}</div>

        {detail.images.length > 0 ? (
          <div>
            {detail.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${t(detail.title)} ${i + 1}`}
                width={1000}
                height={750}
                className="h-auto w-full"
                sizes="(max-width: 768px) 95vw, 60vw"
              />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-[16px] text-[#999]">
            {t("common.detailPending")}
          </p>
        )}

        <div className="mt-[50px] text-center">
          <Link
            href={backHref}
            className="inline-block border border-[#ccc] px-6 py-2 text-[14px] text-[#666] transition-colors hover:border-brand hover:text-brand"
          >
            {backLabel ?? t("common.back")}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
