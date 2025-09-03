import React from 'react';
import { Star, Shield, Award, CheckCircle } from 'lucide-react';

interface BuildingGradeProps {
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C';
  score: number;
}

export const BuildingGrade: React.FC<BuildingGradeProps> = ({ grade, score }) => {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-primary bg-primary/10 border-primary/20';
      case 'A': return 'text-accent bg-accent/10 border-accent/20';
      case 'B+': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'B': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'C': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStars = (score: number) => {
    const fullStars = Math.floor(score / 20);
    const hasHalfStar = score % 20 >= 10;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${
              i < fullStars 
                ? 'text-yellow-400 fill-yellow-400' 
                : i === fullStars && hasHalfStar 
                  ? 'text-yellow-400 fill-yellow-400/50' 
                  : 'text-muted-foreground'
            }`} 
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">{score}/100</span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between">
      <div className={`px-3 py-1 rounded-full border font-bold text-sm ${getGradeColor(grade)}`}>
        Grade {grade}
      </div>
      {getStars(score)}
    </div>
  );
};