import { Vetement, Tenue } from './types';

export const vetements: Vetement[] = [
  {
    id: '1',
    nom: 'T-shirt blanc basique',
    categorie: 'Haut',
    couleur: 'Blanc',
    saison: ['Printemps', 'Été'],
    dateAchat: '2024-01-15',
    dernierPorte: '2024-03-10',
    etat: 'Excellent',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'
  },
  {
    id: '2',
    nom: 'Jean slim noir',
    categorie: 'Bas',
    couleur: 'Noir',
    saison: ['Toutes'],
    dateAchat: '2023-11-20',
    dernierPorte: '2024-03-12',
    etat: 'Bon',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500'
  },
  {
    id: '3',
    nom: 'Pull gris',
    categorie: 'Haut',
    couleur: 'Gris',
    saison: ['Automne', 'Hiver'],
    dateAchat: '2023-09-05',
    dernierPorte: '2024-02-28',
    etat: 'Moyen',
    image: 'https://images.unsplash.com/photo-1516720826779-3d4f8bdfdfe9?w=500'
  },
  {
    id: '4',
    nom: 'Veste en cuir marron',
    categorie: 'Veste',
    couleur: 'Marron',
    saison: ['Automne', 'Printemps'],
    dateAchat: '2023-10-15',
    dernierPorte: '2024-03-05',
    etat: 'Excellent',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'
  },
  {
    id: '5',
    nom: 'Chemise bleue rayée',
    categorie: 'Haut',
    couleur: 'Bleu',
    saison: ['Toutes'],
    dateAchat: '2024-02-01',
    dernierPorte: '2024-03-15',
    etat: 'Excellent',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500'
  },
  {
    id: '6',
    nom: 'Pantalon chino beige',
    categorie: 'Bas',
    couleur: 'Beige',
    saison: ['Printemps', 'Été'],
    dateAchat: '2023-12-10',
    dernierPorte: '2024-03-08',
    etat: 'Bon',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500'
  },
  {
    id: '7',
    nom: 'Pull col roulé noir',
    categorie: 'Haut',
    couleur: 'Noir',
    saison: ['Automne', 'Hiver'],
    dateAchat: '2023-11-01',
    dernierPorte: '2024-02-20',
    etat: 'Bon',
    image: 'https://images.unsplash.com/photo-1608365151231-7dbed3034787?w=500'
  },
  {
    id: '8',
    nom: 'Blazer gris',
    categorie: 'Veste',
    couleur: 'Gris',
    saison: ['Toutes'],
    dateAchat: '2024-01-20',
    dernierPorte: '2024-03-01',
    etat: 'Excellent',
    image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500'
  },
  {
    id: '9',
    nom: 'Short en jean',
    categorie: 'Bas',
    couleur: 'Bleu',
    saison: ['Été'],
    dateAchat: '2023-06-15',
    dernierPorte: '2023-09-10',
    etat: 'Moyen',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500'
  }
];

export const tenues: Tenue[] = [
  {
    id: '1',
    nom: 'Tenue décontractée',
    vetements: ['1', '2'],
    occasion: 'Casual',
    saison: ['Printemps', 'Été']
  },
  {
    id: '2',
    nom: 'Tenue business',
    vetements: ['5', '6', '8'],
    occasion: 'Professionnel',
    saison: ['Toutes']
  },
  {
    id: '3',
    nom: 'Look automnal',
    vetements: ['4', '7', '2'],
    occasion: 'Casual chic',
    saison: ['Automne']
  }
];