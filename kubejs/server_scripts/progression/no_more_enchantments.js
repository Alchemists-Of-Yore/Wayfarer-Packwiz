ServerEvents.tags("item", (event) => {
  event.removeAll("minecraft:enchantables");
  event.removeAll("minecraft:enchantable");

  event.removeAll("minecraft:enchantable/armor");
  event.removeAll("minecraft:enchantable/bow");
  event.removeAll("minecraft:enchantable/chest_armor");
  event.removeAll("minecraft:enchantable/crossbow");
  event.removeAll("minecraft:enchantable/durability");
  event.removeAll("minecraft:enchantable/equippable");
  event.removeAll("minecraft:enchantable/fire_aspect");
  event.removeAll("minecraft:enchantable/fishing");
  event.removeAll("minecraft:enchantable/foot_armor");
  event.removeAll("minecraft:enchantable/head_armor");
  event.removeAll("minecraft:enchantable/leg_armor");
  event.removeAll("minecraft:enchantable/mace");
  event.removeAll("minecraft:enchantable/mining");
  event.removeAll("minecraft:enchantable/mining_loot");
  event.removeAll("minecraft:enchantable/sharp_weapon");
  event.removeAll("minecraft:enchantable/sword");
  event.removeAll("minecraft:enchantable/trident");
  event.removeAll("minecraft:enchantable/vanishing");
  event.removeAll("minecraft:enchantable/weapon");
  event.removeAll("farmersdelight:enchantable/knife");
  event.removeAll("nova_structures:enchantable/metal");

  event.removeAll("c:enchantables");

  event.add("kubejs:silk_touched", "minecraft:golden_sword");
  event.add("kubejs:silk_touched", "minecraft:golden_axe");
  event.add("kubejs:silk_touched", "minecraft:golden_shovel");
  event.add("kubejs:silk_touched", "minecraft:golden_pickaxe");
  event.add("kubejs:silk_touched", "minecraft:golden_hoe");
  event.add("kubejs:silk_touched", "farmersdelight:golden_knife");
  event.add("kubejs:silk_touched", "newworld:ancient_mattock");

  //todo: actually remove enchants lkol
});
