ServerEvents.recipes((event) => {
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:wheat",
      },
    ],
    result: [
      {
        item: {
          count: 1,
          id: "create:wheat_flour",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "farmersdelight:straw",
        },
      },
    ],
    tool: {
      tag: "c:tools/knife",
    },
  });

  event.remove({ id: "farmersdelight:wheat_dough_from_eggs" });
  event.remove({ id: "farmersdelight:wheat_dough_from_water" });

  event.shapeless("8x farmersdelight:wheat_dough", [
    "4x create:wheat_flour",
    "1x minecraft:egg",
    "4x create:wheat_flour",
  ]);
  event.shapeless("8x farmersdelight:wheat_dough", [
    "4x create:wheat_flour",
    "1x #kubejs:water_crafting",
    "4x create:wheat_flour",
  ]);

  event.replaceInput(
    { id: "supplementaries:sack_2" },
    "minecraft:wheat",
    "farmersdelight:canvas"
  );

  let recipe = (recipe) => {
    event.replaceInput(
      { id: `${recipe}` },
      "minecraft:wheat",
      "farmersdelight:wheat_dough"
    );
  };
  recipe("farmersdelight:honey_cookie");
  recipe("farmersdelight:sweet_berry_cookie");
  recipe("farmersdelight:apple_pie");
  recipe("farmersdelight:pie_crust");
  recipe("nomansland:food/pear_cobbler");
  recipe("farmersdelight:cake_from_milk_bottle");
  recipe("minecraft:cake");
  recipe("minecraft:cookie");
  recipe("minecraft:cake");

  event.remove({ output: "create:dough" });
  event.remove({ input: "create:dough" });
  event.remove({ id: "create:crafting/appliances/dough" });
  event.remove({ id: "minecraft:bread" });
  event.remove({ id: "minecraft:packed_mud" });
  event.remove({ id: "snowyspirit:gingerbread" });
  event.remove({ id: "snowyspirit:gingerbread_compressed" });
});
