ServerEvents.tags("item", (event) => {
  //Add items here to have them disappear from JEI.
  event.add("kubejs:hidden_item", "#kubejs:removed_item");

  event.add("kubejs:hidden_item", "minecraft:dragon_egg");
  event.add("kubejs:hidden_item", "moonlight:placeable_item");
  event.add("kubejs:hidden_item", "minecraft:spawner");
  event.add("kubejs:hidden_item", "minecraft:trial_spawner");
  event.add("kubejs:hidden_item", "nomansland:monster_anchor");
  event.add("kubejs:hidden_item", "#minecraft:decorated_pot_sherd");

  //Add items here to remove their recipes, loot tables and any other way of obtaining them.
  event.add(
    "kubejs:removed_item",
    "minecraft:netherite_upgrade_smithing_template"
  );
  event.add("kubejs:removed_item", "newworld:mattock_crafting_template");
  event.add("kubejs:removed_item", "newworld:mattock_crafting_template_head");
  event.add("kubejs:removed_item", "newworld:mattock_crafting_template_shaft");
  event.add("kubejs:removed_item", "create:netherite_backtank");
  event.add("kubejs:removed_item", "create:netherite_diving_helmet");
  event.add("kubejs:removed_item", "create:netherite_diving_boots");
  event.add("kubejs:removed_item", "create:honeyed_apple");
  event.add("kubejs:removed_item", "create:experience_nugget");
  event.add("kubejs:removed_item", "incubation:turtle_egg_crate");
  event.add("kubejs:removed_item", "supplementaries:netherite_door");
  event.add("kubejs:removed_item", "supplementaries:netherite_trapdoor");
  event.add("kubejs:removed_item", "supplementaries:rope");
  event.add("kubejs:removed_item", "supplementaries:gravel_bricks");
  event.add("kubejs:removed_item", "supplementaries:suspicious_gravel_bricks");
  event.add("kubejs:removed_item", "supplementaries:sconce");
  event.add("kubejs:removed_item", "supplementaries:sconce_soul");
  event.add("kubejs:removed_item", "supplementaries:sconce_lever");
  event.add("kubejs:removed_item", "goated:chevon");
  event.add("kubejs:removed_item", "goated:cooked_chevon");
  event.add("kubejs:removed_item", "#minecraft:trim_templates");
  event.add("kubejs:removed_item", "immersive_aircraft:warship");
  event.add("kubejs:removed_item", "immersive_aircraft:gyrodyne");
  event.add("kubejs:removed_item", "minecraft:music_disc_precipice");
  event.add("kubejs:removed_item", "snowyspirit:music_disc_a_carol");
  event.add("kubejs:removed_item", "supplementaries:music_disc_heave_ho");
  event.add("kubejs:removed_item", "minecraft:enchanted_book");
  event.add("kubejs:removed_item", "minecraft:experience_bottle");
  event.add("kubejs:removed_item", "minecraft:glow_ink_sac");
  event.add("kubejs:removed_item", "minecraft:stone_shovel");
  event.add("kubejs:removed_item", "minecraft:stone_axe");
  event.add("kubejs:removed_item", "minecraft:stone_pickaxe");
  event.add("kubejs:removed_item", "minecraft:stone_sword");
  event.add("kubejs:removed_item", "minecraft:stone_hoe");
  event.add("kubejs:removed_item", "minecraft:wooden_shovel");
  event.add("kubejs:removed_item", "minecraft:wooden_axe");
  event.add("kubejs:removed_item", "minecraft:wooden_pickaxe");
  event.add("kubejs:removed_item", "minecraft:wooden_sword");
  event.add("kubejs:removed_item", "minecraft:wooden_hoe");
  event.add("kubejs:removed_item", "minecraft:netherite_shovel");
  event.add("kubejs:removed_item", "minecraft:netherite_axe");
  event.add("kubejs:removed_item", "minecraft:netherite_pickaxe");
  event.add("kubejs:removed_item", "minecraft:netherite_sword");
  event.add("kubejs:removed_item", "minecraft:netherite_hoe");
  event.add("kubejs:removed_item", "farmersdelight:netherite_knife");
  event.add("kubejs:removed_item", "immersive_aircraft:hull");
  event.add("kubejs:removed_item", "immersive_aircraft:sail");
  event.add("kubejs:removed_item", "immersive_aircraft:propeller");
  event.add("kubejs:removed_item", "immersive_aircraft:boiler");
  event.add("kubejs:removed_item", "immersive_aircraft:airship");
  event.add("kubejs:removed_item", "immersive_aircraft:cargo_airship");
  event.add("kubejs:removed_item", "immersive_aircraft:warship");
  event.add("kubejs:removed_item", "immersive_aircraft:gyrodyne");
  event.add("kubejs:removed_item", "immersive_aircraft:rotary_cannon");
  event.add("kubejs:removed_item", "immersive_aircraft:eco_engine");
  event.add("kubejs:removed_item", "immersive_aircraft:enhanced_propeller");
  event.add("kubejs:removed_item", "immersive_aircraft:nether_engine");
  event.add("kubejs:removed_item", "immersive_aircraft:steel_boiler");
  event.add("kubejs:removed_item", "immersive_aircraft:industrial_gears");
  event.add("kubejs:removed_item", "immersive_aircraft:sturdy_pipes");
  event.add("kubejs:removed_item", "immersive_aircraft:gyroscope");
  event.add("kubejs:removed_item", "immersive_aircraft:hull_reinforcement");
  event.add("kubejs:removed_item", "immersive_aircraft:improved_landing_gear");
  event.add("kubejs:removed_item", "immersive_aircraft:bomb_bay");
  event.add("kubejs:removed_item", "incubation:fried_egg");

  event.removeAllTagsFrom("kubejs:removed_item");
});

ServerEvents.recipes((event) => {
  event.remove({ output: "#kubejs:removed_item" });
});

LootJS.modifiers((event) => {
  event.addBlockModifier(/.*/).removeLoot("#kubejs:removed_item");
  event.addEntityModifier(/.*/).removeLoot("#kubejs:removed_item");
  event.addTableModifier(/.*/).removeLoot("#kubejs:removed_item");
});

//TODO: remove hidden items from creative menus and EMI
//TODO: TOOLTIP
