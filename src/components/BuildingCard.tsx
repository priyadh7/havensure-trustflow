import React from 'react';
import { BuildingGrade } from '@/components/BuildingGrade';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Users, 
  Calendar, 
  TrendingUp,
  Building2,
  Home,
  Store,
  Factory
} from 'lucide-react';

interface BuildingCardProps {
  title: string;
  location: string;
  image: string;
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C';
  score: number;
  type: string;
  units: number;
  completionDate: string;
  builder: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  description: string;
}

export const BuildingCard: React.FC<BuildingCardProps> = ({
  title,
  location,
  image,
  grade,
  score,
  type,
  units,
  completionDate,
  builder,
  status,
  description
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-primary/10 text-primary border-primary/20';
      case 'In Progress': return 'bg-accent/10 text-accent border-accent/20';
      case 'Planning': return 'bg-secondary/10 text-secondary border-secondary/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'residential': return Home;
      case 'commercial': return Building2;
      case 'mixed-use': return Store;
      case 'industrial': return Factory;
      default: return Building2;
    }
  };

  const TypeIcon = getTypeIcon(type);

  return (
    <div className="glass-card overflow-hidden group hover:shadow-trust transition-all duration-500 magnetic">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${getStatusColor(status)} border backdrop-blur-sm`}>
            {status}
          </Badge>
        </div>

        {/* Grade */}
        <div className="absolute top-4 right-4">
          <div className="glass px-3 py-1 rounded-full">
            <BuildingGrade grade={grade} score={score} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          <TypeIcon className="w-6 h-6 text-primary" />
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Builder:</span>
            <p className="font-medium">{builder}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Type:</span>
            <p className="font-medium">{type}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Units:</span>
            <p className="font-medium flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {units.toLocaleString()}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Completion:</span>
            <p className="font-medium flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {completionDate}
            </p>
          </div>
        </div>

        {/* Trust Score */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="text-sm text-muted-foreground">Trust Score</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-bold text-primary">{score}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};