LootJS.lootTables((event) => {
  event
    .getLootTable("minecraft:chests/bastion_treasure")
    .firstPool()
    .addEntry(LootEntry.of("minecraft:mace").withWeight(25));
  event
    .getLootTable("minecraft:chests/bastion_other")
    .firstPool()
    .addEntry(LootEntry.of("minecraft:mace").withWeight(10));
  event
    .getLootTable("minecraft:chests/bastion_hoglin_stable")
    .firstPool()
    .addEntry(LootEntry.of("minecraft:mace").withWeight(10));
  event
    .getLootTable("minecraft:chests/bastion_bridge")
    .firstPool()
    .addEntry(LootEntry.of("minecraft:mace").withWeight(10));
});
