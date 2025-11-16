import CompanionCard from "@/src/components/CompanionCard";
import CompanionsList from "@/src/components/CompanonsList";
import CTA from "@/src/components/CTA";
import { recentSessions } from "@/src/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/src/lib/actions/companion.action";
import { getSubjectColor } from "@/src/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions: Companion[] =
    (await getRecentSessions(10))?.flat() ?? [];
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
