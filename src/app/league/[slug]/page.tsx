import LeagueTable from "@/components/LeagueTable";

const Brasileiro = async ({ params }: { params: { slug: string } }) => {
  console.log(params);
  //   const getBrasileiro = await filterLeague("Campeonato Brasileiro Série A");
  return <div className="w-[600px]">{params.slug}</div>;
};

export default Brasileiro;