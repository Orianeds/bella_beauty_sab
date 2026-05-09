# ✨ Bella Beauty SAB – Site vitrine

Site vitrine développé pour une professionnelle de la beauté spécialisée dans :
- Lissage capillaire
- Rehaussement de cils
- Browlift

👉 Démo en ligne : https://chimerical-crostata-2e9672.netlify.app

---

## 📌 Présentation

Ce projet est un site vitrine moderne réalisé avec **Next.js** et **Chakra UI**.  
Il a pour objectif de présenter les services d’une technicienne beauté, de mettre en valeur ses réalisations (photos et vidéos) et de permettre une prise de contact simple et rapide.

L’interface a été pensée pour être **esthétique, fluide et entièrement responsive**.

---

## ✨ Fonctionnalités

- Page d’accueil moderne et responsive
- Présentation des services :
  - Lissage
  - Rehaussement de cils
  - Browlift
- Galerie photos des réalisations
- Intégration de vidéos
- Formulaire de contact
- Support du thème clair/sombre (`next-themes`)
- Design responsive (mobile, tablette, desktop)

---

## 🧰 Stack technique

- Next.js 13
- React 18
- Chakra UI
- Framer Motion
- TailwindCSS (partiel)
- Resend (envoi d’emails)
- pnpm (gestionnaire de paquets)

---

## ⚙️ Installation du projet

### 1. Cloner le repository
git clone https://github.com/ton-utilisateur/nom-du-projet.git

### 2. Accéder au projet
cd nom-du-projet

### 3. Installer les dépendances
pnpm install

### 4. Lancer le projet en développement
pnpm dev
👉 Le projet sera disponible sur : http://localhost:3000

---

## 📦 Scripts disponibles
pnpm dev       # serveur de développement
pnpm build     # build production
pnpm start     # serveur production
pnpm lint      # lint du code

---

## 🏗️ Build production
pnpm build
pnpm start

---

## 📁 Structure du projet

/pages → routes Next.js
/components → composants UI
/styles → styles globaux
/public → assets statiques

---

## 📬 Formulaire de contact

Le formulaire utilise Resend pour l’envoi d’emails.
Créer un fichier .env.local :
RESEND_API_KEY=your_api_key

---

## 🚀 Déploiement

Le projet est déployé sur Netlify :
https://chimerical-crostata-2e9672.netlify.app


