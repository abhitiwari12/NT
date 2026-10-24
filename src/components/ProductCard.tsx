import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Layers } from 'lucide-react';
import { Product } from '../types';
import { Link } from '../context/RouterContext';
import { useEnquiry } from '../context/EnquiryContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { openEnquiryModal } = useEnquiry();
  const [imageError, setImageError] = useState(false);

  const detailPath =
    product.division === 'spices-oilseeds'
      ? `/spices-oilseeds/${product.slug}`
      : `/aluminium-scrap/${product.slug}`;

  // Division clean label (unboxed metadata text)
  const categoryLabel =
    product.category === 'spices'
      ? 'Spices'
      : product.category === 'oilseeds'
      ? 'Oilseeds'
      : 'Aluminium Scrap';

  return (
    <article className="group bg-white rounded-lg border border-[#DCE2E8] hover:border-[#BAC5D0] transition-all duration-200 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Product Image Slot with zero-broken-image fallback */}
        <Link href={detailPath} className="block relative aspect-4/3 overflow-hidden bg-[#F1F4F7]">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#10243D]/5 to-[#10243D]/15 p-6 text-center">
              <Layers className="w-10 h-10 text-[#183653]/40 mb-2" />
              <span className="text-xs font-semibold text-[#10243D]">{product.name}</span>
              <span className="text-[11px] text-[#5E6D82] mt-0.5">{categoryLabel}</span>
            </div>
          )}
        </Link>

        {/* Card Body */}
        <div className="p-5">
          {/* Unboxed metadata with typographic dot separator (Strict Zero-Pill Rule) */}
          <div className="flex items-center gap-1.5 text-xs text-[#5E6D82] mb-2 font-medium">
            <span>{categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>B2B Wholesale</span>
          </div>

          <h3 className="text-base font-bold text-[#10243D] font-display group-hover:text-[#183653] transition-colors leading-snug">
            <Link href={detailPath}>{product.name}</Link>
          </h3>

          <p className="mt-2 text-sm text-[#344256] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 pb-5 pt-2 border-t border-[#F1F4F7] flex items-center justify-between gap-3">
        <Link
          href={detailPath}
          className="text-xs font-semibold text-[#10243D] hover:text-[#183653] inline-flex items-center gap-1 transition-colors"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>

        <button
          onClick={() => openEnquiryModal(product)}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#10243D] hover:bg-[#183653] rounded transition-colors cursor-pointer"
        >
          <MessageSquare className="w-3 h-3" aria-hidden="true" />
          <span>Enquire</span>
        </button>
      </div>
    </article>
  );
}
