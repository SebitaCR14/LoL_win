import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Champion({ champion }) {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(Object.entries(champion.stats));
  }, []);
  return (
    <div className="my-5">
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/11.17.1/img/champion/${champion.image.full}`}
        height={champion.image.h}
        width={champion.image.w}
      />
      <h1 className="text-2xl font-bold">{champion.id}</h1>
      <ul>
        {stats.map((stat, i) => {
          return <li key={i}>{`${stat[0]}: ${stat[1]}`}</li>;
        })}
      </ul>
    </div>
  );
}
