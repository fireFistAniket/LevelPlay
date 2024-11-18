import HeaderTab from "@/components/leagueComponent/headerTab";
import MatchHighLight from "@/components/leagueComponent/matchHighlight";
import MatchReplays from "@/components/leagueComponent/matchReplays";
import MatchResults from "@/components/leagueComponent/MatchResults";
import PointTable from "@/components/leagueComponent/pointTable";
import UpcomingMatch from "@/components/leagueComponent/upcomingMatch";
import Watch from "@/components/leagueComponent/watch";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

export default function League() {
  return (
    <WebsiteTemplate>
      <HeaderTab />
      <div className="px-4 2xl:px-36 xl:px-28 flex flex-col-reverse lg:flex-row gap-10 lg:gap-3 ">
        <main className="flex flex-col gap-6 lg:flex-1">
          <Watch />
          <UpcomingMatch />
          <MatchReplays />
          <MatchHighLight />
        </main>
        <main className="flex flex-col gap-6">
          <PointTable />
          <MatchResults />
        </main>
      </div>
    </WebsiteTemplate>
  );
}
