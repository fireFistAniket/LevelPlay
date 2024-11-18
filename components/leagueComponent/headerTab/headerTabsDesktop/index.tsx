import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeaderTabsDesktop() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-flow-col">
        <TabsTrigger value="account">Home</TabsTrigger>
        <TabsTrigger value="password">Score</TabsTrigger>
        <TabsTrigger value="result">Results</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="teams">Teams</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
