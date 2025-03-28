import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PokemonCard from "./PokemonCard";

const Pokedex =()=> {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    const data = {"count":1302,"items":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}},{"id":4,"name":"charmander","weight":85,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}},{"id":5,"name":"charmeleon","weight":190,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}},{"id":6,"name":"charizard","weight":905,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}},{"id":7,"name":"squirtle","weight":90,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}},{"id":8,"name":"wartortle","weight":225,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"}},{"id":9,"name":"blastoise","weight":855,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}},{"id":10,"name":"caterpie","weight":29,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1}],"abilities":[{"ability":{"name":"shield-dust","url":"https://pokeapi.co/api/v2/ability/19/"},"is_hidden":false,"slot":1},{"ability":{"name":"run-away","url":"https://pokeapi.co/api/v2/ability/50/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}},{"id":11,"name":"metapod","weight":99,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1}],"abilities":[{"ability":{"name":"shed-skin","url":"https://pokeapi.co/api/v2/ability/61/"},"is_hidden":false,"slot":1}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"}},{"id":12,"name":"butterfree","weight":320,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"compound-eyes","url":"https://pokeapi.co/api/v2/ability/14/"},"is_hidden":false,"slot":1},{"ability":{"name":"tinted-lens","url":"https://pokeapi.co/api/v2/ability/110/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"}},{"id":13,"name":"weedle","weight":32,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"shield-dust","url":"https://pokeapi.co/api/v2/ability/19/"},"is_hidden":false,"slot":1},{"ability":{"name":"run-away","url":"https://pokeapi.co/api/v2/ability/50/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"}},{"id":14,"name":"kakuna","weight":100,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"shed-skin","url":"https://pokeapi.co/api/v2/ability/61/"},"is_hidden":false,"slot":1}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"}},{"id":15,"name":"beedrill","weight":295,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"swarm","url":"https://pokeapi.co/api/v2/ability/68/"},"is_hidden":false,"slot":1},{"ability":{"name":"sniper","url":"https://pokeapi.co/api/v2/ability/97/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"}},{"id":16,"name":"pidgey","weight":18,"types":[{"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"keen-eye","url":"https://pokeapi.co/api/v2/ability/51/"},"is_hidden":false,"slot":1},{"ability":{"name":"tangled-feet","url":"https://pokeapi.co/api/v2/ability/77/"},"is_hidden":false,"slot":2},{"ability":{"name":"big-pecks","url":"https://pokeapi.co/api/v2/ability/145/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"}},{"id":17,"name":"pidgeotto","weight":300,"types":[{"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"keen-eye","url":"https://pokeapi.co/api/v2/ability/51/"},"is_hidden":false,"slot":1},{"ability":{"name":"tangled-feet","url":"https://pokeapi.co/api/v2/ability/77/"},"is_hidden":false,"slot":2},{"ability":{"name":"big-pecks","url":"https://pokeapi.co/api/v2/ability/145/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"}},{"id":18,"name":"pidgeot","weight":395,"types":[{"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"keen-eye","url":"https://pokeapi.co/api/v2/ability/51/"},"is_hidden":false,"slot":1},{"ability":{"name":"tangled-feet","url":"https://pokeapi.co/api/v2/ability/77/"},"is_hidden":false,"slot":2},{"ability":{"name":"big-pecks","url":"https://pokeapi.co/api/v2/ability/145/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"}},{"id":19,"name":"rattata","weight":35,"types":[{"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},"slot":1}],"abilities":[{"ability":{"name":"run-away","url":"https://pokeapi.co/api/v2/ability/50/"},"is_hidden":false,"slot":1},{"ability":{"name":"guts","url":"https://pokeapi.co/api/v2/ability/62/"},"is_hidden":false,"slot":2},{"ability":{"name":"hustle","url":"https://pokeapi.co/api/v2/ability/55/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"}},{"id":20,"name":"raticate","weight":185,"types":[{"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},"slot":1}],"abilities":[{"ability":{"name":"run-away","url":"https://pokeapi.co/api/v2/ability/50/"},"is_hidden":false,"slot":1},{"ability":{"name":"guts","url":"https://pokeapi.co/api/v2/ability/62/"},"is_hidden":false,"slot":2},{"ability":{"name":"hustle","url":"https://pokeapi.co/api/v2/ability/55/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"}}]}
    const data2  = [{"id":1,"name":"bulbasaur","description":"Loves to eat","height":7,"weight":69,"base_experience":64,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},"stats":[{"base_stat":45,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}},{"base_stat":49,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":49,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":65,"effort":1,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":45,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}}],"evolutions":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}]},{"id":2,"name":"ivysaur","description":"Proud of its power","height":10,"weight":130,"base_experience":142,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},"stats":[{"base_stat":60,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}},{"base_stat":62,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":63,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":80,"effort":1,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":80,"effort":1,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":60,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}}],"evolutions":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}]}, {"id":3,"name":"venusaur","description":"Sturdy body","height":20,"weight":1000,"base_experience":263,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},"stats":[{"base_stat":80,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}},{"base_stat":82,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":83,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":100,"effort":2,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":100,"effort":1,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":80,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}}],"evolutions":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}]}]


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.items.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item><PokemonCard item = {item}></PokemonCard></Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Pokedex;