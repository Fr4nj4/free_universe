import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>La dimension&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>libre&nbsp;</h1>
        <br />
        <h1 className={title()}>que todos necesitamos.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Compilado de las mejores herramientas y verdades dimensiones gratuitas
          para encontrar los mejores recursos de internet.
        </h2>
      </div>

      <div className="flex gap-3"></div>
    </section>
  );
}
