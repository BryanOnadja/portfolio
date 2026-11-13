# Portfolio – Bryan Onadja

Site portfolio en **React + Vite**, bilingue (FR/EN), prêt pour **GitHub Pages**.

## Lancer le site sur ton ordinateur

Il faut [Node.js](https://nodejs.org) (version 20 ou plus).

```bash
npm install      # une seule fois
npm run dev      # ouvre le site sur http://localhost:5173
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un texte (FR et EN) | `src/i18n.js` |
| Les couleurs, tailles, espacements | `src/styles.css` (variables en haut du fichier) |
| La page d'accueil | `src/pages/Home.jsx` |
| Une page projet | `src/pages/ParcoursLibre.jsx`, `SecuriteRoutiere.jsx`, `Stabilisateur.jsx` |
| Les graphiques | `src/components/Charts.jsx` (les données sont en haut de chaque page) |
| Les images | dossier `public/images/` |
| Les CV à télécharger | dossier `public/cv/` (garde les mêmes noms de fichiers) |

## Mettre le site en ligne (GitHub Pages)

1. Crée un compte sur [github.com](https://github.com) si ce n'est pas déjà fait.
2. Crée un nouveau dépôt **public**, par exemple `portfolio`.
3. Dans ce dossier, lance :
   ```bash
   git init
   git add .
   git commit -m "Premier envoi du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-NOM-UTILISATEUR/portfolio.git
   git push -u origin main
   ```
4. Sur GitHub, va dans **Settings › Pages** et choisis **Source : GitHub Actions**.
5. Attends 1 à 2 minutes (onglet **Actions**). Ton site sera à l'adresse :
   `https://TON-NOM-UTILISATEUR.github.io/portfolio/`

Ensuite, chaque `git push` met le site à jour automatiquement.

Astuce : si tu nommes le dépôt `TON-NOM-UTILISATEUR.github.io`, l'adresse sera simplement `https://TON-NOM-UTILISATEUR.github.io/`.

## Sources des données

- Parcours Libre : données ouvertes de la Ville d'Ottawa (événements de circulation, comptages piétons).
- Sécurité routière : rapport SED 1516 (Livrable 4) et tableaux de bord Power BI.
- Stabilisateur : présentation finale GNG 2501 (FC25 – EKBAR).
- Surveillance IoT : présentation finale GNG 1503 (équipe FA51).
