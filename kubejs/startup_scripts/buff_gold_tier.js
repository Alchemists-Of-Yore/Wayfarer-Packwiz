ItemEvents.modification((event) => {
  event.modify("minecraft:golden_sword", (item) => {
    item.setMaxDamage(125);
  });
  event.modify("minecraft:golden_pickaxe", (item) => {
    item.setMaxDamage(125);
  });
  event.modify("minecraft:golden_hoe", (item) => {
    item.setMaxDamage(125);
  });
  event.modify("minecraft:golden_shovel", (item) => {
    item.setMaxDamage(125);
  });
  event.modify("minecraft:golden_axe", (item) => {
    item.setMaxDamage(125);
  });
  event.modify("farmersdelight:golden_knife", (item) => {
    item.setMaxDamage(125);
  });
});
