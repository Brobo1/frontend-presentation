import { Step } from "./steps/Step.jsx";
import { SubscriptionTier } from "./subscriptions/SubscriptionTier.jsx";

const STEPS = [
  {
    imgSrc: "src/assets/img.png",
    heading: "1. Logg inn & Verifiser",
    desc: "Bruk Apple, Google, Facebook, og verifiser deg trygt med Vipps",
  },
  {
    imgSrc: "src/assets/img_1.png",
    heading: "2. Registrer Firma",
    desc: "Legg inn ditt org.nr. Vi tar en KYC-sjekk for din og kundens trygghet.",
  },
  {
    imgSrc: "src/assets/img_2.png",
    heading: "3. Velg Abonnement",
    desc: "Lås opp fulle oppdragsdetaljer og kontaktinformasjon.",
  },
  {
    imgSrc: "src/assets/img_3.png",
    heading: "4. Start å Tjene",
    desc: "Svar på oppdrag, få jobben og motta gode tilbakemeldinger.",
  },
];

const SUBSCRIPTION_TIERS = [
  {
    title: "Basis",
    price: "299 kr/mnd",
    features: [
      "Tilgang til alle oppdrag",
      "Kontaktinformasjon til kunder",
      "Ubegrenset antall bud",
      "E-post support"
    ],
    recommended: false
  },
  {
    title: "Pro",
    price: "499 kr/mnd",
    features: [
      "Alt i Basis",
      "Prioritert visning i søk",
      "Ubegrenset antall bud",
      "Telefonsupport",
      "Verifisert badge på profil"
    ],
    recommended: true
  },
  {
    title: "Premium",
    price: "799 kr/mnd",
    features: [
      "Alt i Pro",
      "Topp plassering i søk",
      "Fremhevet profil",
      "Dedikert kundekonsulent",
      "Månedlig statistikk og rapporter",
      "Prioritert kundeservice 24/7"
    ],
    recommended: false
  }
];

export function Content() {
  return (
    <>
      <div id={"content"}>
        <h1>Slik fungerer det: Enkel og trygg prosess</h1>

        <div id={"stepsContainer"}>
          {STEPS.map((item, index) => (
            <Step key={index} {...item} />
          ))}
        </div>

        <h1>Velg abonnement som passer deg</h1>

        <div id={"subscriptionContainer"}>
          {SUBSCRIPTION_TIERS.map((tier, index) => (
            <SubscriptionTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </>
  );
}
