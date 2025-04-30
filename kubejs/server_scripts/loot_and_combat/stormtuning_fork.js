LootJS.lootTables((event) => {
  event
    .getLootTable("minecraft:chests/trial_chambers/reward_rare")
    .firstPool()
    .addEntry(LootEntry.of("wayfarer_core:stormtuning_fork").withWeight(1));
  event
    .getLootTable("minecraft:chests/trial_chambers/reward_unique")
    .firstPool()
    .addEntry(LootEntry.of("wayfarer_core:stormtuning_fork").withWeight(2));
  event
    .getLootTable("minecraft:chests/trial_chambers/reward_ominous_rare")
    .firstPool()
    .addEntry(LootEntry.of("wayfarer_core:stormtuning_fork").withWeight(2));
  event
    .getLootTable("minecraft:chests/trial_chambers/reward_ominous_unique")
    .firstPool()
    .addEntry(LootEntry.of("wayfarer_core:stormtuning_fork").withWeight(4));
});

LootJS.modifiers((event) => {
  event
    .addTableModifier("minecraft:chests/trial_chambers/reward_unique")
    .removeLoot("minecraft:trident");
  event
    .addTableModifier("minecraft:chests/trial_chambers/reward_ominous_unique")
    .removeLoot("minecraft:heavy_core");
});

ServerEvents.tags("item", (event) => {
  event.add("c:tools", "wayfarer_core:stormtuning_fork");
  event.add("c:melee_weapon", "wayfarer_core:stormtuning_fork");
  event.add("c:melee_weapons", "wayfarer_core:stormtuning_fork");
  event.add("c:tools/spear", "wayfarer_core:stormtuning_fork");
  event.add("c:tools/spears", "wayfarer_core:stormtuning_fork");
});
