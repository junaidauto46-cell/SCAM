import React, { useEffect } from 'react'
import { useInView } from 'framer-motion'
import { animate } from 'framer-motion'
import { LucideProps } from 'lucide-react'

interface StatsCounterProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ icon: Icon, end, label, prefix = '', suffix = '', decimals = 0 }) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, end, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, end, decimals, prefix, suffix]);

  return (
    <div className="flex flex-col items-center">
      <Icon className="w-10 h-10 text-brand-blue mb-3" />
      <h3 ref={ref} className="text-3xl md:text-4xl font-bold text-white">
        {prefix}0{suffix}
      </h3>
      <p className="text-sm text-brand-gray-text mt-1">{label}</p>
    </div>
  )
}

export default StatsCounter
