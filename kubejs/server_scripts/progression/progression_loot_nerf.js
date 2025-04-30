LootJS.modifiers((event) => {
  event
    .addTableModifier(/.*/)
    .replaceLoot("minecraft:enchanted_book", "minecraft:emerald", true)

    .replaceLoot("minecraft:iron_pickaxe", "kubejs:bronze_pickaxe", true)
    .replaceLoot("minecraft:iron_sword", "kubejs:bronze_sword", true)
    .replaceLoot("minecraft:iron_axe", "kubejs:bronze_axe", true)
    .replaceLoot("minecraft:iron_hoe", "kubejs:bronze_hoe", true)
    .replaceLoot("minecraft:iron_shovel", "kubejs:bronze_shovel", true)
    .replaceLoot(
      "farmersdelight:iron_knife",
      "wayfarer_core:bronze_knife",
      true
    )

    .replaceLoot("minecraft:diamond_pickaxe", "minecraft:iron_pickaxe", true)
    .replaceLoot("minecraft:diamond_sword", "minecraft:iron_sword", true)
    .replaceLoot("minecraft:diamond_axe", "minecraft:iron_axe", true)
    .replaceLoot("minecraft:diamond_hoe", "minecraft:iron_hoe", true)
    .replaceLoot("minecraft:diamond_shovel", "minecraft:iron_shovel", true)
    .replaceLoot(
      "farmersdelight:diamond_knife",
      "farmersdelight:iron_knife",
      true
    )

    .replaceLoot("minecraft:stone_pickaxe", "kubejs:bronze_pickaxe", true)
    .replaceLoot("minecraft:stone_sword", "kubejs:bronze_sword", true)
    .replaceLoot("minecraft:stone_axe", "kubejs:bronze_axe", true)
    .replaceLoot("minecraft:stone_hoe", "kubejs:bronze_hoe", true)
    .replaceLoot("minecraft:stone_shovel", "kubejs:bronze_shovel", true)

    .replaceLoot("minecraft:wooden_pickaxe", "kubejs:bone_pick", true)
    .replaceLoot("minecraft:wooden_sword", "kubejs:flint_axe", true)
    .replaceLoot("minecraft:wooden_axe", "kubejs:flint_axe", true)
    .replaceLoot("minecraft:wooden_hoe", "kubejs:bone_pick", true)
    .replaceLoot("minecraft:stone_shovel", "kubejs:flint_shovel", true)

    .replaceLoot(
      "minecraft:netherite_ingot",
      "minecraft:netherite_scrap",
      true
    );
});

//TODO: remove hidden items from creative menus and EMI
//TODO: TOOLTIP
