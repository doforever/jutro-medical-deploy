export default function Pills ({color, md}) {
  return (
    <svg width={md ? "136" : "82"} height={md ? "132" : "80"} viewBox="0 0 140 137" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M102.909 27.2177C102.909 13.2799 91.9773 2.62158 77.6819 2.62158C66.75 2.62158 59.1819 7.54082 52.4546 19.019L3.68182 101.006C2.84091 103.466 2 105.925 2 109.205C2 123.143 12.9318 133.801 27.2273 133.801C38.1591 133.801 48.25 126.422 50.7728 117.404L52.4546 114.944" stroke={color} strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M91.137 134.622C116.68 134.622 137.387 114.433 137.387 89.5286C137.387 64.6245 116.68 44.4357 91.137 44.4357C65.5938 44.4357 44.887 64.6245 44.887 89.5286C44.887 114.433 65.5938 134.622 91.137 134.622Z" stroke={color} strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M61.175 72.8365L117.914 106.669" stroke={color} strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.4324 55.9132L43.2051 63.2921" stroke={color} strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M61.9899 24.824C64.3768 16.1108 73.6417 10.886 82.5784 13.2133" stroke={color} strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
