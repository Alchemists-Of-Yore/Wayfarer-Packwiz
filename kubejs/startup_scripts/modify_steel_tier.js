ItemEvents.modification((event) => {
  event.modify("minecraft:diamond_sword", (item) => {
    item.setMaxDamage(2750);
  });
  event.modify("minecraft:diamond_pickaxe", (item) => {
    item.setMaxDamage(2750);
  });
  event.modify("minecraft:diamond_hoe", (item) => {
    item.setMaxDamage(2750);
  });
  event.modify("minecraft:diamond_shovel", (item) => {
    item.setMaxDamage(2750);
  });
  event.modify("minecraft:diamond_axe", (item) => {
    item.setMaxDamage(2750);
  });
  event.modify("farmersdelight:diamond_knife", (item) => {
    item.setMaxDamage(2750);
  });

  event.modify("minecraft:diamond_helmet", (item) => {
    item.setMaxDamage(663);
  });
  event.modify("minecraft:diamond_chestplate", (item) => {
    item.setMaxDamage(828);
  });
  event.modify("minecraft:diamond_leggings", (item) => {
    item.setMaxDamage(795);
  });
  event.modify("minecraft:diamond_boots", (item) => {
    item.setMaxDamage(729);
  });
});
