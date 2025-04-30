ItemEvents.modification((event) => {
  event.modify("minecraft:iron_sword", (item) => {
    item.setMaxDamage(540);
  });
  event.modify("minecraft:iron_pickaxe", (item) => {
    item.setMaxDamage(540);
  });
  event.modify("minecraft:iron_hoe", (item) => {
    item.setMaxDamage(540);
  });
  event.modify("minecraft:iron_shovel", (item) => {
    item.setMaxDamage(540);
  });
  event.modify("minecraft:iron_axe", (item) => {
    item.setMaxDamage(540);
  });
  event.modify("farmersdelight:iron_knife", (item) => {
    item.setMaxDamage(540);
  });

  event.modify("minecraft:iron_helmet", (item) => {
    item.setMaxDamage(265);
  });
  event.modify("minecraft:iron_chestplate", (item) => {
    item.setMaxDamage(340);
  });
  event.modify("minecraft:iron_leggings", (item) => {
    item.setMaxDamage(305);
  });
  event.modify("minecraft:iron_boots", (item) => {
    item.setMaxDamage(295);
  });
});
