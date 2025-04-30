ServerEvents.recipes((event) => {
  event.remove({ id: "newworld:ancient_mattock_crafting" });

  event.shaped("kubejs:mattock_mould", ["BBB", "BMB", "BBB"], {
    M: "newworld:ancient_mattock",
    B: "minecraft:brick",
  });

  event.shaped("wayfarer_core:bronze_mattock", [" B ", "BMB", " B "], {
    M: "kubejs:mattock_mould",
    B: "kubejs:bronze_ingot",
  });
});
LootJS.lootTables((event) => {
  event
    .getLootTable("minecraft:archaeology/trail_ruins_common")
    .firstPool()
    .addEntry(LootEntry.of("newworld:ancient_mattock").withWeight(2));
});
