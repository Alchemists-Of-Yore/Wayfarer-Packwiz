ServerEvents.recipes((event) => {
  let stone = (stone, wall) => {
    event.stonecutting(stone, `${stone}_stairs`);
    event.shapeless(stone, [`2x ${stone}_slab`]);
    if (wall) event.stonecutting(stone, `${stone}_wall`);
  };

  stone("sandstone", true);
  stone("smooth_sandstone", false);
  stone("red_sandstone", true);
  stone("smooth_red_sandstone", false);
  stone("nomansland:polished_stone", false);
  stone("polished_blackstone", true);
  stone("polished_tuff", true);

  let brick = (brick, wall) => {
    event.stonecutting(`${brick}s`, `${brick}_stairs`);
    event.shapeless(`${brick}s`, [`2x ${brick}_slab`]);
    if (wall) event.stonecutting(`${brick}s`, `${brick}_wall`);
  };

  brick("stone_brick", true);
  brick("polished_blackstone_brick", true);
  brick("mud_brick", true);
  brick("mossy_stone_brick", true);
  brick("nomansland:cobblestone_brick", true);
  brick("nomansland:mossy_cobblestone_brick", true);
  brick("tuff_brick", true);
  brick("brick", true);

  event.shapeless("smooth_stone", [`2x smooth_stone_slab`]);
});
