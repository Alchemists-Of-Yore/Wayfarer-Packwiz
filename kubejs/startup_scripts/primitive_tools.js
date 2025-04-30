ItemEvents.toolTierRegistry((event) => {
  event.add("flint", (tier) => {
    tier.uses = 100;
    tier.attackDamageBonus = 0;
    tier.speed = 2.0;
    tier.setIncorrectBlocksForDropsTag("minecraft:incorrect_for_wooden_tool");
    tier.enchantmentValue = 5;
    tier.repairIngredient = "minecraft:flint";
  });
  event.add("bone", (tier) => {
    tier.uses = 150;
    tier.attackDamageBonus = 0;
    tier.speed = 3.0;
    tier.setIncorrectBlocksForDropsTag("minecraft:incorrect_for_wooden_tool");
    tier.enchantmentValue = 3;
    tier.repairIngredient = "minecraft:bone";
  });
});

StartupEvents.registry("item", (event) => {
  event
    .create("bone_pick", "pickaxe")
    .tier("bone")
    .speedBaseline(-2.8)
    .attackDamageBaseline(2);
  event
    .create("flint_axe", "axe")
    .tier("flint")
    .speedBaseline(-3.1)
    .attackDamageBaseline(3);
  event
    .create("flint_shovel", "shovel")
    .tier("flint")
    .speedBaseline(-3.0)
    .attackDamageBaseline(0.5);
});

// ItemEvents.modification((event) => {
//   event.modify("farmersdelight:flint_knife", (item) => {
//     item.maxDamage = 125;
//   });
