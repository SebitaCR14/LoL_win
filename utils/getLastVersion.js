import axios from 'axios';

export default async function getLastVersion() {
  const versions = (await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')).data;
  return versions[0];
}
