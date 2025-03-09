import React from 'react';
import { Sparkles, Sun, Cloud, Umbrella } from 'lucide-react';
import { vetements } from '../data';

export const Suggestions: React.FC = () => {
  const getSuggestionsDuJour = () => {
    const vetementsFiltres = vetements.filter(v => v.etat !== 'À remplacer');
    return vetementsFiltres.slice(0, 3);
  };

  return (
    <div className="p-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
          Suggestions du jour
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getSuggestionsDuJour().map(vetement => (
            <div key={vetement.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all transform hover:-translate-y-1">
              <img 
                src={vetement.image} 
                alt={vetement.nom}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-100">{vetement.nom}</h3>
                <p className="text-purple-400 mt-1">{vetement.categorie}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Météo et tendances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:-translate-y-1">
            <Sun className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-100">Aujourd'hui</h3>
            <p className="text-gray-300">Parfait pour les vêtements légers</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:-translate-y-1">
            <Cloud className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-100">Cette semaine</h3>
            <p className="text-gray-300">Préparez vos tenues mi-saison</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:-translate-y-1">
            <Umbrella className="w-8 h-8 text-pink-400 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-100">Tendances</h3>
            <p className="text-gray-300">Les couleurs pastel sont à la mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};