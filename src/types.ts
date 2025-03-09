export interface Vetement {
  id: string;
  nom: string;
  categorie: string;
  couleur: string;
  saison: string[];
  dateAchat: string;
  dernierPorte?: string;
  etat: 'Excellent' | 'Bon' | 'Moyen' | 'À remplacer';
  image: string;
}

export interface Tenue {
  id: string;
  nom: string;
  vetements: string[];
  occasion: string;
  saison: string[];
}