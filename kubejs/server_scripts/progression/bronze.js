ServerEvents.recipes((event) => {
  event.shapeless("kubejs:bronze_ingot", ["9x kubejs:bronze_nugget"]);
  event.shapeless("9x kubejs:bronze_nugget", ["kubejs:bronze_ingot"]);
  event.shapeless("kubejs:bronze_block", ["9x kubejs:bronze_ingot"]);
  event.shapeless("9x kubejs:bronze_ingot", ["kubejs:bronze_block"]);

  //Helmets
  event.remove([{ id: "minecraft:turtle_helmet" }]);
  event.remove([{ id: "create:crafting/appliances/copper_diving_helmet" }]);
  event.shaped("create:copper_diving_helmet", ["BBB", "CGC", "   "], {
    C: "minecraft:copper_ingot",
    B: "kubejs:bronze_ingot",
    G: "#c:glass_blocks",
  });

  event.remove([{ id: "create:crafting/appliances/copper_backtank" }]);
  event.shaped("create:copper_backtank", ["ASA", "BHB", "BBB"], {
    A: "create:andesite_alloy",
    B: "kubejs:bronze_ingot",
    S: "create:shaft",
    H: "minecraft:heart_of_the_sea",
  });

  event.remove([{ id: "goated:barbaric_helmet" }]);
  event.shaped("goated:barbaric_helmet", ["H H", "BBB", "T T"], {
    T: "kubejs:tin_ingot",
    B: "kubejs:bronze_ingot",
    H: "minecraft:goat_horn",
  });

  event.shaped("kubejs:mining_helmet", [" C ", "BBB", "G G"], {
    G: "minecraft:gold_ingot",
    B: "kubejs:bronze_ingot",
    C: "#minecraft:candles",
  });

  //Tools
  event.shaped("kubejs:bronze_sword", [" C ", " C ", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:bronze_shovel", [" C ", " S ", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:bronze_hoe", [" CC", " S ", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:bronze_pickaxe", ["CCC", " S ", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:bronze_axe", [" CC", " SC", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });
  event.shaped("wayfarer_core:bronze_knife", ["   ", " C ", " S "], {
    C: "kubejs:bronze_ingot",
    S: "minecraft:stick",
  });

  event.shaped("minecraft:bell", [" S ", "BBB", "BNB"], {
    S: "minecraft:stick",
    B: "kubejs:bronze_ingot",
    N: "kubejs:bronze_nugget",
  });

  event.replaceInput(
    { id: "minecraft:spyglass" },
    "minecraft:copper_ingot",
    "kubejs:bronze_ingot"
  );
  event.replaceInput(
    { id: "minecraft:spyglass" },
    "minecraft:amethyst_shard",
    "minecraft:tinted_glass"
  );

  event.replaceInput(
    { id: "create:crafting/appliances/copper_diving_boots" },
    "minecraft:copper_ingot",
    "kubejs:bronze_ingot"
  );
});

ServerEvents.tags("block", (event) => {
  event.remove("minecraft:needs_stone_tool", "minecraft:copper_ore");
  event.remove("minecraft:incorrect_for_wooden_tool", "minecraft:copper_ore");
  event.remove("minecraft:needs_stone_tool", "minecraft:deepslate_copper_ore");
  event.remove(
    "minecraft:incorrect_for_wooden_tool",
    "minecraft:deepslate_copper_ore"
  );
});
ServerEvents.tags("item", (event) => {
  event.add("c:tools", "wayfarer_core:bronze_knife");
  event.add("c:tools/knife", "wayfarer_core:bronze_knife");
  event.add("farmersdelight:straw_harvesters", "wayfarer_core:bronze_knife");
  event.add("farmersdelight:tools/knives", "wayfarer_core:bronze_knife");
});
