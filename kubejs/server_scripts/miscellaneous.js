ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "minecraft:glow_item_frame" },
    "minecraft:glow_ink_sac",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:tinted_glass" },
    "minecraft:amethyst_shard",
    "minecraft:quartz"
  );
  event.replaceInput(
    { id: "farmersdelight:cooking_pot" },
    "minecraft:wooden_shovel",
    "kubejs:spoon"
  );

  event.remove({ id: "supplementaries:suspicious_gravel" });
  event.remove({ id: "farmersdelight:scaffolding_from_canvas" });
  event.remove({ id: "incubation:hay_nest" });
  event.shaped("incubation:hay_nest", ["   ", "S S", "SBS"], {
    S: "minecraft:wheat",
    B: "minecraft:hay_block",
  });
  event.remove({ id: "brewinandchewin:ice_crate" });
  event.shaped("brewinandchewin:ice_crate", ["PMP", "MCM", "PMP"], {
    P: "#minecraft:planks",
    C: "minecraft:wind_charge",
    M: "minecraft:packed_ice",
  });
  event.remove({ id: "brewinandchewin:heating_cask" });
  event.shaped("brewinandchewin:heating_cask", ["PMP", "MCM", "PMP"], {
    P: "#minecraft:planks",
    C: "minecraft:fire_charge",
    M: "minecraft:magma_block",
  });
  event.remove({ id: "brewinandchewin:item_coaster" });
  event.shaped("brewinandchewin:coaster", ["   ", "SCS", "   "], {
    C: "farmersdelight:canvas",
    S: "minecraft:stick",
  });
  event.remove({ id: "supplementaries:lumisene_bucket" });
  event.shaped("supplementaries:lumisene_bucket", [" R ", "RBR", " R "], {
    R: "nomansland:resin_oil_bottle",
    B: "minecraft:bucket",
  });
  event.shaped("kubejs:spoon", [" W ", " P ", " S "], {
    P: "#minecraft:planks",
    W: "wayfarer_core:wax",
    S: "minecraft:stick",
  });

  event.remove({ id: "supplementaries:sack_3" });
  event.remove({ id: "another_furniture:furniture_hammer" });
  event.shaped("another_furniture:furniture_hammer", ["TBT", " S ", " S "], {
    S: "minecraft:stick",
    T: "create:andesite_alloy",
    B: "create:andesite_alloy_block",
  });

  event.remove({ id: "minecraft:shield" });
  event.shaped("minecraft:shield", [" I ", "IPI", " I "], {
    I: "minecraft:iron_ingot",
    P: "#minecraft:planks",
  });

  event.remove({ id: "supplementaries:cannonball" });
  event.shaped("supplementaries:cannonball", [" I ", "IGI", " I "], {
    G: "minecraft:gunpowder",
    I: "minecraft:iron_ingot",
  });

  event.remove({ id: "exposure:camera" });
  event.shaped("exposure:camera", ["LBO", "KGK", "BCB"], {
    L: "minecraft:lever",
    K: "minecraft:leather",
    G: "minecraft:tinted_glass",
    B: "create:brass_ingot",
    C: "create:precision_mechanism",
    O: "minecraft:stone_button",
  });

  event.remove({ id: "minecraft:sugar_from_sugar_cane" });
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:sugar_cane",
      },
    ],
    result: [
      {
        item: {
          count: 1,
          id: "minecraft:sugar",
        },
      },
    ],
    tool: {
      tag: "c:tools/knife",
    },
  });
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "supplementaries:flax",
      },
    ],
    result: [
      {
        item: {
          count: 1,
          id: "farmersdelight:straw",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "farmersdelight:straw",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "minecraft:string",
        },
      },
    ],
    tool: {
      tag: "c:tools/knife",
    },
  });
  event.replaceInput(
    { id: "supplementaries:sack" },
    "supplementaries:flax",
    "farmersdelight:canvas"
  );
  event.remove({ id: "supplementaries:strings" });
  event.remove({ id: "farmersdelight:canvas" });
  event.remove({ id: "farmersdelight:canvas_from_canvas_rug" });
  event.shapeless("1x farmersdelight:canvas", [
    "farmersdelight:straw",
    "farmersdelight:straw",
  ]);
  event.remove({ id: "farmersdelight:rope" });
  event.shaped("3x farmersdelight:rope", [" S ", " S ", " S "], {
    S: "farmersdelight:straw",
  });

  event.shaped("supplementaries:quiver", ["L L", "LAL", "ILI"], {
    I: "minecraft:iron_ingot",
    L: "minecraft:leather",
    A: "minecraft:arrow",
  });

  event.remove({ id: "supplementaries:wrench" });
  event.shaped("supplementaries:wrench", ["GG ", " I ", " I "], {
    I: "create:andesite_alloy",
    G: "minecraft:iron_ingot",
  });

  event.shaped("wayfarer_core:crucible", ["T T", "T T", "TTT"], {
    T: "terracotta",
  });

  event.remove({ id: "minecraft:bone_meal" });
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:bone",
      },
    ],
    result: [
      {
        item: {
          count: 2,
          id: "minecraft:bone_meal",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "minecraft:bone_meal",
        },
      },
    ],
    tool: {
      tag: "minecraft:axes",
    },
  });
  event.remove({ id: "minecraft:blaze_powder" });
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:blaze_rod",
      },
    ],
    result: [
      {
        item: {
          count: 3,
          id: "minecraft:blaze_powder",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "minecraft:blaze_powder",
        },
      },
      {
        chance: 0.5,
        item: {
          count: 1,
          id: "minecraft:blaze_powder",
        },
      },
    ],
    tool: {
      tag: "minecraft:axes",
    },
  });

  event.remove({ id: "supplementaries:confetti_popper" });
  event.shaped("6x supplementaries:confetti_popper", ["DDD", "PGP", " P "], {
    D: "#c:dyes",
    P: "paper",
    G: "gunpowder",
  });

  event.shaped("kubejs:raw_silver_block", ["RRR", "RRR", "RRR"], {
    R: "kubejs:raw_silver",
  });

  event.remove({
    id: "brewinandchewin:fermenting/glittering_grenadine_from_water",
  });
  event.custom({
    type: "brewinandchewin:fermenting",
    base_fluid: {
      amount: 1000,
      ingredient: {
        tag: "#c:water",
      },
      unit: "millibuckets",
    },
    experience: 1.0,
    ingredients: [
      {
        item: "minecraft:glow_berries",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:sugar",
      },
      {
        item: "minecraft:glow_berries",
      },
    ],
    result: {
      amount: 1000,
      id: "brewinandchewin:glittering_grenadine",
    },
    temperature: 2,
    unit: "millibuckets",
  });
});

ServerEvents.tags("item", (event) => {
  event.add("amendments:sets_on_fire", "nomansland:sconce_torch");
  event.add("amendments:sets_on_fire", "nomansland:sconce_soul_torch");

  event.add("kubejs:will_despawn", "minecraft:egg");
  event.add("kubejs:will_despawn", "minecraft:feather");
  event.add("kubejs:will_despawn", "minecraft:ink_sac");
  event.add("kubejs:will_despawn", "minecraft:glowstone_dust");
  event.add("kubejs:will_despawn", "minecraft:rotten_flesh");
  event.add("kubejs:will_despawn", "minecraft:bone");
  event.add("kubejs:will_despawn", "minecraft:gunpowder");
  event.add("kubejs:will_despawn", "minecraft:arrow");
  event.add("kubejs:will_despawn", "minecraft:sweet_berries");
  event.add("kubejs:will_despawn", "minecraft:cobblestone");
  event.add("kubejs:will_despawn", "minecraft:gravel");
  event.add("kubejs:will_despawn", "minecraft:flint");
  event.add("kubejs:will_despawn", "minecraft:stick");

  event.add("kubejs:durability_crafting", "newworld:ancient_mattock");
  event.add("kubejs:durability_crafting", "another_furniture:furniture_hammer");

  event.add("kubejs:water_crafting", "minecraft:potion");
  event.add("kubejs:water_crafting", "minecraft:water_bucket");

  event.add("kubejs:tin", "kubejs:raw_tin");
  event.add("kubejs:tin", "kubejs:tin_ingot");

  event.add("kubejs:copper", "minecraft:raw_copper");
  event.add("kubejs:copper", "minecraft:copper_ingot");

  event.add("kubejs:zinc", "create:raw_zinc");
  event.add("kubejs:zinc", "create:zinc_ingot");
});

ServerEvents.tags("block", (event) => {
  event.removeAll("minecraft:fall_damage_resetting");
  event.removeAll("minecraft:enderman_holdable");
  event.add("exposure:flashes", "create:rose_quartz_lamp");
  event.add("supplementaries:map_tint_grass_color", "nomansland:grass_sprouts");
  event.add("supplementaries:map_tint_grass_color", "nomansland:oat_grass");
  event.add("supplementaries:map_tint_grass_color", "#minecraft:small_flowers");
  event.add("supplementaries:map_tint_grass_color", "#c:mushrooms");
  event.add("supplementaries:map_tint_grass_color", "#c:mushrooms");
  event.add("kubejs:carryon_whitelist", "decorated_pot");
  event.add("kubejs:carryon_whitelist", "pot");
  event.add("kubejs:carryon_whitelist", "chest");
  event.add("kubejs:carryon_whitelist", "furnace");
  event.add("kubejs:carryon_whitelist", "crafting_table");
  event.add("kubejs:carryon_whitelist", "smoker");
  event.add("kubejs:carryon_whitelist", "blast_furnace");
  event.add("kubejs:carryon_whitelist", "brewinandchewin:keg");
  event.add("kubejs:carryon_whitelist", "stonecutter");
  event.add("kubejs:carryon_whitelist", "barrel");
});

LootJS.modifiers((event) => {
  event
    .addEntityModifier(["minecraft:blaze"])
    .addLoot("minecraft:blaze_rod")
    .setCount([0, 1]);
  event
    .addEntityModifier(["minecraft:chicken"])
    .addLoot("minecraft:feather")
    .setCount([1, 2]);
  event
    .addEntityModifier(["minecraft:skeleton", "minecraft:pillager"])
    .addLoot("minecraft:arrow")
    .setCount([0, 3]);
  event
    .addEntityModifier(["minecraft:pillager"])
    .addLoot("minecraft:emerald")
    .setCount([0, 1]);
  event
    .addEntityModifier(["minecraft:pig"])
    .addLoot("minecraft:porkchop")
    .setCount([1, 1]);
});
