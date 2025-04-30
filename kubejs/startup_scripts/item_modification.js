ItemEvents.modification((event) => {
  event.modify("minecraft:potion", (item) => {
    item.setMaxStackSize(8);
    item.setCraftingRemainder("minecraft:glass_bottle");
  });
  event.modify("minecraft:lingering_potion", (item) => {
    item.setMaxStackSize(8);
    item.setCraftingRemainder("minecraft:glass_bottle");
  });
  event.modify("minecraft:splash_potion", (item) => {
    item.setMaxStackSize(8);
    item.setCraftingRemainder("minecraft:glass_bottle");
  });
});
