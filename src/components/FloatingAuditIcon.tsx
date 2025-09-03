import React from 'react';
import auditIcon from '@/assets/audit-icon-3d.png';

interface FloatingAuditIconProps {
  delay?: number;
  className?: string;
}

export const FloatingAuditIcon: React.FC<FloatingAuditIconProps> = ({ 
  delay = 0, 
  className = "" 
}) => {
  return (
    <div 
      className={`absolute opacity-60 hover:opacity-100 transition-all duration-500 ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 10px 30px hsla(158, 64%, 52%, 0.3))'
      }}
    >
      <img 
        src={auditIcon} 
        alt="3D Audit Icon" 
        className="w-16 h-16 md:w-20 md:h-20 float hover:scale-110 transition-transform duration-300 trust-glow"
      />
    </div>
  );
};