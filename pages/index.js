import axios from 'axios';
import Champion from '../components/Champion';
import getLastVersion from '../utils/getLastVersion';

export default function Home({ champions }) {
  return (
    <div className="grid grid-cols-4 text-center">
      {champions.map((champion) => (
        <Champion key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const version = await getLastVersion();
  const championsJSON = (
    await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/es_AR/champion.json`)
  ).data;

  const champions = Object.values(championsJSON.data);

  return { props: { champions } };
}
