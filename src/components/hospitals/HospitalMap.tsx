
import React, { useEffect, useRef } from 'react';

const HospitalMap = ({ hospitals }: { hospitals: Array<any> }) => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Center coordinates for Bhilai, Chhattisgarh
    const bhilaiCoordinates = '21.209009,81.428497';
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=hospitals+in+bhilai+chhattisgarh&center=${bhilaiCoordinates}&zoom=13`;
    
    if (mapRef.current) {
      mapRef.current.src = googleMapsUrl;
    }
  }, [hospitals]);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border">
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="about:blank"
      />
    </div>
  );
};

export default HospitalMap;
