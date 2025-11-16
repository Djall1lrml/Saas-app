import React from "react";
import { getAllCompanions } from "@/src/lib/actions/companion.action";
import CompanionCard from "@/src/components/CompanionCard";
import { getSubjectColor } from "@/src/lib/utils";
import SearchInput from "@/src/components/SearchInput";
import SubjectFilter from "@/src/components/SubjectFilter";
const CompanionLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";
  const Companions = await getAllCompanions({ subject, topic });
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>companion library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />{" "}
        </div>
      </section>
      <section className="companions-grid">
        {Companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionLibrary;
