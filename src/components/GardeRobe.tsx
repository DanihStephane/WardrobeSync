import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { vetements } from '../data';
import { VetementCard } from './VetementCard';

export const GardeRobe: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState<string>('');

  const categories = Array.from(new Set(vetements.map(v => v.categorie)));

  const filteredVetements = vetements.filter(vetement => {
    const matchSearch = vetement.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategorie = !selectedCategorie || vetement.categorie === selectedCategorie;
    return matchSearch && matchCategorie;
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            type="text"
            placeholder="Rechercher un vêtement..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <select
            className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 appearance-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            value={selectedCategorie}
            onChange={(e) => setSelectedCategorie(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVetements.map(vetement => (
          <VetementCard key={vetement.id} vetement={vetement} />
        ))}
      </div>
    </div>
  );
};