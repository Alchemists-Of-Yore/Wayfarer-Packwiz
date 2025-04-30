ServerEvents.recipes((event) => {
  event.remove({ id: "immersive_aircraft:engine" });
  event.shaped("immersive_aircraft:engine", ["SBS", "SFS", "SPS"], {
    S: "kubejs:steel_ingot",
    B: "minecraft:water_bucket",
    F: "minecraft:furnace",
    P: "minecraft:piston",
  });

  event.remove({ id: "immersive_aircraft:biplane" });
  event.shaped("immersive_aircraft:biplane", ["GJG", "SES", "GBG"], {
    S: "kubejs:steel_ingot",
    J: "kubejs:steel_block",
    B: "minecraft:barrel",
    E: "immersive_aircraft:engine",
    G: "#minecraft:wooden_slabs",
  });

  event.remove({ id: "immersive_aircraft:quadrocopter" });
  event.shaped("immersive_aircraft:quadrocopter", ["SBS", "CEC", "SBS"], {
    S: "kubejs:steel_nugget",
    B: "minecraft:stripped_bamboo_block",
    E: "immersive_aircraft:engine",
    C: "farmersdelight:canvas",
  });

  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 400,
    experience: 0.8,
    ingredients: [
      {
        item: "nomansland:resin_oil_bottle",
      },
      {
        item: "minecraft:fire_charge",
      },
      {
        item: "minecraft:glowstone_dust",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      id: "kubejs:aviation_fuel",
    },
  });
});
