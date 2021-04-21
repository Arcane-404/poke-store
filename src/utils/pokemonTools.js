import pkmnName from '../assets/pokemonName.json'
import pkmnType from '../assets/pokemonType.json'
// const print = console.log

export const title = (str) => str.replace(/\w\S*/g, (txt) => (
  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
))

export const getPokemonLink = (pkmn) => {
  pkmn = pkmn.trim().replace(/[\s'._-]/g,"").toLowerCase()
  pkmn = (pkmnName[pkmn]) ? pkmnName[pkmn].link : title(pkmn)
  const URL = 'https://bulbapedia.bulbagarden.net/wiki'
  const link = `${ URL }/${ pkmn }_(Pokémon)`
  return link
}

export const spellChecker = (pkmn) => {
  pkmn = pkmn.trim().replace(/[\s'._-]/g,"").toLowerCase()
  if (pkmnName[pkmn]) pkmn = pkmnName[pkmn].search
  return pkmn
}
