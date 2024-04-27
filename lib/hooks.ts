"use client"

import { useActiveSection } from '@/context/active-section-context';
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'
import type { SectionName } from '@/lib/types';

export default function useSectionInView(sectionName:SectionName,threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeofLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000){
      setActive(sectionName);
    }
  }, [inView, setActive, timeofLastClick]);
  return {
    ref,
    inView,
  }
}
