import React from 'react';
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Clock, Tag, Calendar } from 'lucide-react';
import { Vetement } from '../types';

interface VetementCardProps {
  vetement: Vetement;
}

export const VetementCard: React.FC<VetementCardProps> = ({ vetement }) => {
  const dernierPorteTexte = vetement.dernierPorte
    ? formatDistance(new Date(vetement.dernierPorte), new Date(), { 
        addSuffix: true,
        locale: fr 
      })
    : 'Jamais porté';

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors group">
      <div className="relative">
        <img 
          src={vetement.image} 
          alt={vetement.nom}
          className="w-full h-56 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-100">{vetement.nom}</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-gray-300">
            <Tag className="w-4 h-4 mr-2 text-purple-400" />
            <span>{vetement.categorie}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-purple-400" />
            <span>Porté {dernierPorteTexte}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2 text-purple-400" />
            <span>{vetement.saison.join(', ')}</span>
          </div>
        </div>
        <div className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium
          ${vetement.etat === 'Excellent' ? 'bg-green-900 text-green-300' :
            vetement.etat === 'Bon' ? 'bg-blue-900 text-blue-300' :
            vetement.etat === 'Moyen' ? 'bg-yellow-900 text-yellow-300' :
            'bg-red-900 text-red-300'}`}>
          {vetement.etat}
        </div>
      </div>
    </div>
  );
};