ItemEvents.toolTierRegistry((event) => {
  event.add("bronze", (tier) => {
    tier.uses = 275;
    tier.attackDamageBonus = 1;
    tier.speed = 4.0;
    tier.setIncorrectBlocksForDropsTag("minecraft:incorrect_for_stone_tool");
    tier.enchantmentValue = 10;
    tier.repairIngredient = "kubejs:bronze_ingot";
  });
  event.add("steel", (tier) => {
    tier.uses = 1250;
    tier.attackDamageBonus = 3;
    tier.speed = 8.0;
    tier.enchantmentValue = 15;
    tier.repairIngredient = "kubejs:steel_ingot";
  });
});

StartupEvents.registry("item", (event) => {
  event.create("copper_nugget");
  event.create("steel_ingot");
  event.create("steel_nugget");

  event.create("tin_ingot");
  event.create("tin_nugget");
  event.create("raw_tin");
  event.create("crushed_raw_tin");

  event.create("silver_ingot");
  event.create("silver_nugget");
  event.create("raw_silver");
  event.create("crushed_raw_silver");

  event.create("bronze_ingot");
  event.create("bronze_nugget");
  event
    .create("bronze_sword", "sword")
    .tier("bronze")
    .speedBaseline(-2.4)
    .attackDamageBaseline(2);
  event
    .create("bronze_pickaxe", "pickaxe")
    .tier("bronze")
    .speedBaseline(-2.8)
    .attackDamageBaseline(0);
  event
    .create("bronze_axe", "axe")
    .tier("bronze")
    .speedBaseline(-3.1)
    .attackDamageBaseline(5);
  event
    .create("bronze_shovel", "shovel")
    .tier("bronze")
    .speedBaseline(-3.0)
    .attackDamageBaseline(0.5);
  event
    .create("bronze_hoe", "hoe")
    .tier("bronze")
    .speedBaseline(2.0)
    .attackDamageBaseline(-3);
});

StartupEvents.registry("block", (event) => {
  event
    .create("bronze_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .soundType("metal")
    .hardness(3)
    .resistance(6);
  event
    .create("copper_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .soundType("copper")
    .displayName("Block of Copper")
    .hardness(3)
    .resistance(6);
  event
    .create("steel_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .displayName("Block of Steel")
    .soundType("metal")
    .hardness(5) // Set hardness (affects mining time)
    .resistance(6);
  event
    .create("tin_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .soundType("metal")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(6);
  event
    .create("tin_ore")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true)
    .soundType("stone")
    .hardness(2.0) // Set hardness (affects mining time)
    .resistance(6);
  event
    .create("deepslate_tin_ore")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true)
    .soundType("deepslate")
    .hardness(3.0) // Set hardness (affects mining time)
    .resistance(6);

  event
    .create("raw_silver_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("c:storage_blocks/raw_silver")
    .tagBlock("c:storage_blocks")
    .displayName("Block of Raw Silver")
    .hardness(5)
    .resistance(6);

  // event
  //   .create("raw_tin_block")
  //   .tagBlock("minecraft:mineable/pickaxe")
  //   .tagBlock("c:storage_blocks/raw_tin")
  //   .tagBlock("c:storage_blocks")
  //   .displayName("Block of Raw Tin")
  //   .hardness(5)
  //   .resistance(6);
  event
    .create("silver_block")
    .tagBlock("minecraft:mineable/pickaxe")
    .soundType("metal")
    .hardness(5) // Set hardness (affects mining time)
    .resistance(6);
  event
    .create("silver_ore")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true)
    .soundType("stone")
    .hardness(5) // Set hardness (affects mining time)
    .resistance(6);
  event
    .create("deepslate_silver_ore")
    .tagBlock("minecraft:mineable/pickaxe")
    .requiresTool(true)
    .soundType("deepslate")
    .hardness(6) // Set hardness (affects mining time)
    .resistance(6);
});
//StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
//  event.addAfter('minecraft:stone_shovel', 'kubejs:bronze_shovel')
//  event.addAfter('minecraft:stone_shovel', 'kubejs:bronze_pickaxe')
//  event.addAfter('minecraft:stone_shovel', 'kubejs:bronze_axe')
//  event.addAfter('minecraft:stone_shovel', 'kubejs:bronze_hoe')
//})
//StartupEvents.modifyCreativeTab('minecraft:combat', event => {
//  event.addAfter('minecraft:stone_sword', 'kubejs:bronze_sword')
//})

//StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
//  event.addAfter('minecraft:iron_ingot', 'kubejs:bronze_ingot')
//  event.addAfter('minecraft:iron_ingot', 'minecraft:copper_ingot')
//  event.addAfter('minecraft:iron_ingot', 'kubejs:tin_ingot')
//})
//   event.modify("minecraft:iron_pickaxe", (item) => {
//     item.maxDamage = 600;
//   });
//   event.modify("minecraft:iron_sword", (item) => {
//     item.maxDamage = 600;
//   });
//   event.modify("minecraft:iron_axe", (item) => {
//     item.maxDamage = 600;
//   });
//   event.modify("minecraft:iron_shovel", (item) => {
//     item.maxDamage = 600;
//   });
//   event.modify("minecraft:iron_hoe", (item) => {
//     item.maxDamage = 600;
//   });
//   event.modify("farmersdelight:iron_knife", (item) => {
//     item.maxDamage = 600;
//   });

//   event.modify("minecraft:netherite_pickaxe", (item) => {
//     item.maxDamage = 3000;
//   });
//   event.modify("minecraft:netherite_sword", (item) => {
//     item.maxDamage = 3000;
//   });
//   event.modify("minecraft:netherite_axe", (item) => {
//     item.maxDamage = 3000;
//   });
//   event.modify("minecraft:netherite_shovel", (item) => {
//     item.maxDamage = 3000;
//   });
//   event.modify("minecraft:netherite_hoe", (item) => {
//     item.maxDamage = 3000;
//   });
//   event.modify("farmersdelight:netherite_knife", (item) => {
//     item.maxDamage = 3000;
//   });
// });
