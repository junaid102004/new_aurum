import React from 'react';

// Reusable Step Component
const Step = ({ 
  title, 
  color = '#FF6715', 
  showConnector = true,
  connectorPosition = 'full',
  hasCheckmark = false 
}) => {
  const connectorClasses = {
    full: 'sm:after:left-[50%] sm:after:w-[100%]',
    partial: 'md:after:left-[50%] md:after:w-[100%]',
    none: 'sm:after:left-[0%] sm:after:w-[0%]'
  };

  return (
    <div className={`w-full h-[70px] sm:h-[100px] flex flex-col justify-center items-center relative after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-[#37493C] ${showConnector ? connectorClasses[connectorPosition] : ''}`}>
      {/* Desktop View */}
      <div className="hidden sm:block relative z-30 cursor-pointer size-[22px] rounded-full">
        <div className="w-full h-full rounded-full"></div>
        <div className="wave-container absolute inset-0 flex justify-center items-center">
          <div className="circle size-[40px] delay1 flex justify-center items-center z-30" style={{ background: color }}>
            {hasCheckmark && (
              <svg width="14" height="11" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z" fill="white"></path>
              </svg>
            )}
          </div>
          <div className="circle size-[40px] delay2" style={{ background: color }}></div>
          <div className="circle size-[40px] delay3" style={{ background: color }}></div>
          <div className="circle size-[40px] delay4" style={{ background: color }}></div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="flex sm:hidden justify-center items-center relative z-30 cursor-pointer size-[38px] rounded border-2 border-[#131313]">
        <div className="size-[24px] rounded flex justify-center items-center" style={{ backgroundColor: color }}>
          {hasCheckmark && (
            <svg width="14" height="11" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z" fill="white"></path>
            </svg>
          )}
        </div>
      </div>
      
      <h6 className="absolute capitalize top-[84%] sm:top-[95%] max-w-[120px] font-supera700 cxs:font-supera600 leading-snug sm:leading-normal px-1 text-[11px] xs:text-[11px] md:text-[12px] lg:text-[13px] text-center text-[#4E4E4E]">
        {title}
      </h6>
    </div>
  );
};

// Main Component
const ProgressTimeline = () => {
  return (
    <div>
      {/* Main Grid */}
      <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 2xl:grid-cols-9 gap-y-9 lg:gap-y-14">
        <Step 
          title="Start of Raft" 
          color="#35971C" 
          hasCheckmark={true}
        />
        
        {Array.from({ length: 17 }).map((_, i) => (
          <Step 
            key={`floor-${i+1}`}
            title={`Completion ${i+1}${getOrdinalSuffix(i+1)} Floor`}
            connectorPosition={
              i === 5 ? 'none' : 
              i === 8 ? 'none' : 
              i === 13 ? 'none' : 
              i === 16 ? 'none' : 
              'full'
            }
          />
        ))}
      </div>
      
      {/* Bottom Row */}
      <div className="flex justify-center mt-8 lg:mt-14 md:px-72">
        <Step 
          title="Plumbing Work" 
          connectorPosition="full"
          showConnector={true}
        />
        <Step 
          title="PO Work" 
          connectorPosition="partial"
          showConnector={true}
        />
        <Step 
          title="Finishing Work" 
          connectorPosition="full"
          showConnector={true}
        />
        <Step 
          title="Project ready for handover" 
          showConnector={false}
        />
      </div>
    </div>
  );
};

// Helper function for ordinal suffixes
function getOrdinalSuffix(num) {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}

export default ProgressTimeline;