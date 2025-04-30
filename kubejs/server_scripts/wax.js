ServerEvents.recipes((event) => {
  event.shapeless("kubejs:wax_block", ["9x wayfarer_core:wax"]);
  event.shapeless("9x wayfarer_core:wax", ["kubejs:wax_block"]);
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 100,
    experience: 0.1,
    ingredients: [
      {
        item: "minecraft:porkchop",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      id: "wayfarer_core:wax",
    },
  });
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 50,
    experience: 0.1,
    ingredients: [
      {
        item: "minecraft:honeycomb",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      id: "wayfarer_core:wax",
      count: 2,
    },
  });
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 100,
    experience: 0.3,
    ingredients: [
      {
        item: "wayfarer_core:wax",
      },
      {
        item: "supplementaries:ash",
      },
      {
        item: "supplementaries:ash",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      id: "supplementaries:soap",
    },
  });

  event.custom({
    type: "farmersdelight:cooking",
    container: {
      id: "minecraft:glass_bottle",
    },
    cookingtime: 100,
    experience: 0.7,
    ingredients: [
      {
        item: "nomansland:resin",
      },
      {
        item: "nomansland:resin",
      },
      {
        item: "wayfarer_core:wax",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      id: "nomansland:resin_oil_bottle",
    },
  });
  event.shapeless("1x minecraft:leather", [
    "wayfarer_core:wax",
    "minecraft:rotten_flesh",
    "supplementaries:ash",
  ]);
  event.replaceInput(
    { id: "minecraft:candle" },
    "minecraft:honeycomb",
    "wayfarer_core:wax"
  );
  event.replaceInput(
    { input: "#wayfarer_core:waxable_in_crafting" },
    "minecraft:honeycomb",
    "wayfarer_core:wax"
  );
  //List of removed Recipes. To be replaced in the section above
  event.remove([
    { id: "supplementaries:soap" },
    { id: "minecraft:leather" },
    { id: "nomansland:resin_oil_bottle_fd" },
  ]);
  event.remove({ id: "brewinandchewin:keg" });
  event.shaped("brewinandchewin:keg", ["PIP", "TBW", "PIP"], {
    P: "#minecraft:planks",
    B: "minecraft:barrel",
    I: "minecraft:iron_ingot",
    W: "wayfarer_core:wax",
    T: "nomansland:tap",
  });
});

ServerEvents.tags("item", (event) => {
  //Adds Copper to Waxables tag
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:copper_block");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:cut_copper");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:cut_copper_stairs");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:cut_copper_slab");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:copper_door");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:copper_trapdoor");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:copper_bulb");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:copper_grate");
  event.add("wayfarer_core:waxable_in_crafting", "minecraft:chiseled_copper");
  event.add("wayfarer_core:waxable_in_crafting", "blockbox:copper_pillar");
  event.add("wayfarer_core:waxable_in_crafting", "blockbox:copper_bars");

  event.add("wayfarer_core:waxable_in_crafting", "minecraft:exposed_copper");
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_cut_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_cut_copper_stairs"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_cut_copper_slab"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_copper_door"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_copper_trapdoor"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_copper_bulb"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_copper_grate"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:exposed_chiseled_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:exposed_copper_pillar"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:exposed_copper_bars"
  );

  event.add("wayfarer_core:waxable_in_crafting", "minecraft:weathered_copper");
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_cut_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_cut_copper_stairs"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_cut_copper_slab"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_copper_door"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_copper_trapdoor"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_copper_bulb"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_copper_grate"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:weathered_chiseled_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:weathered_copper_pillar"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:weathered_copper_bars"
  );

  event.add("wayfarer_core:waxable_in_crafting", "minecraft:oxidized_copper");
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_cut_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_cut_copper_stairs"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_cut_copper_slab"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_copper_door"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_copper_trapdoor"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_copper_bulb"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_copper_grate"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "minecraft:oxidized_chiseled_copper"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:oxidized_copper_pillar"
  );
  event.add(
    "wayfarer_core:waxable_in_crafting",
    "blockbox:oxidized_copper_bars"
  );
});

LootJS.modifiers((event) => {
  event
    .addEntityModifier(["minecraft:pig", "minecraft:hoglin"])
    .addLoot("wayfarer_core:wax")
    .setCount([0, 1]);
});
