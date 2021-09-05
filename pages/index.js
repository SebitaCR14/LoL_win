import axios from 'axios';
import Champion from '../components/Champion';

export default function Home({champions}) {
  console.log(champions);
  return (
    <div>
      {champions.map((champion)=><Champion key={champion.id} champion={champion} />)}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const championsJSON = (
    await axios.get('http://ddragon.leagueoflegends.com/cdn/11.17.1/data/en_US/champion.json')
  ).data;

  const champions = Object.values(championsJSON.data)
  

  return { props:{champions}  };
}
