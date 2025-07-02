import { Step } from "./steps/Step.jsx";

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

export function Content() {
  return (
    <>
      <div id={"content"}>
        <h1>Slik fungerer det: Enkel og trygg prosess</h1>

        <div id={"stepsContainer"}>
          {STEPS.map((item) => (
            <Step {...item} />
          ))}
        </div>
        <h1>Velg abonnement som passer deg</h1>
      </div>
    </>
  );
}
