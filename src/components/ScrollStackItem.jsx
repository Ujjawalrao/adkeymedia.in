import { useLayoutEffect, useRef } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full my-8 p-6 lg:p-10 rounded-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.12)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 40,
  itemScale = 0.04,
  itemStackDistance = 24,
  stackPosition = '20%',
  baseScale = 0.9,
  scaleDuration = 0.35,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);

  const parsePercentage = (value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  };

  useLayoutEffect(() => {
    const host = scrollerRef.current;
    const cards = Array.from(host?.querySelectorAll('.scroll-stack-card') || []);

    if (!cards.length) return;

    let ticking = false;

    const updateTransforms = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const viewportHeight = window.innerHeight || 1;
      const stackOffset = parsePercentage(stackPosition, viewportHeight);

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        const triggerStart = cardTop - stackOffset - itemStackDistance * index;
        const triggerEnd = cardTop - viewportHeight * 0.16;
        const progress = Math.min(1, Math.max(0, (scrollTop - triggerStart) / Math.max(1, triggerEnd - triggerStart)));
        const scale = 1 - progress * (1 - (baseScale + index * itemScale));
        const translateY = progress * (itemStackDistance * index + 24);
        const blur = blurAmount && progress > 0.2 ? (progress - 0.2) * blurAmount * 2 : 0;

        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
        card.style.transition = `transform ${scaleDuration}s ease, filter ${scaleDuration}s ease`;
        card.style.willChange = 'transform, filter';
        card.style.transformOrigin = 'top center';
        card.style.backfaceVisibility = 'hidden';
      });

      onStackComplete?.();
    };

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.position = 'relative';
      card.style.zIndex = String(10 - index);
    });

    updateTransforms();

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          ticking = false;
          updateTransforms();
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateTransforms);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateTransforms);
    };
  }, [baseScale, blurAmount, itemDistance, itemScale, itemStackDistance, onStackComplete, scaleDuration, stackPosition]);

  return (
    <div ref={scrollerRef} className={`relative w-full ${className}`.trim()}>
      <div className="scroll-stack-inner pt-6 pb-12">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
