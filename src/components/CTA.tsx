import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">start learning ur way</div>
      <h2 className="text-3xl font-bold">Build and personalise Learning</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit at
        obcaecati dignissimos incidunt temporibus, deserunt sapiente delectus
      </p>
      <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />

      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">build a new companion</Link>
      </button>
    </section>
  );
};

export default CTA;
