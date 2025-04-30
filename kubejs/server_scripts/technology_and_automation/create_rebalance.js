ServerEvents.recipes((event) => {
  event.forEachRecipe(
    [
      { type: "minecraft:smelting" },
      { type: "minecraft:blasting" },
      { type: "minecraft:campfire_cooking" },
    ],
    (recipe) => {
      event.remove({ id: recipe.getId() });
      event.custom(recipe.json).id(`${recipe.getId()}_manual_only`);
    }
  );

  event.remove({ id: "create:crushing/copper_ore" });
  event.remove({ id: "create:crushing/deepslate_copper_ore" });
  event.remove({ id: "create:crushing/iron_ore" });
  event.remove({ id: "create:crushing/deepslate_iron_ore" });
  event.remove({ id: "create:crushing/zinc_ore" });
  event.remove({ id: "create:crushing/deepslate_zinc_ore" });
  event.remove({ id: "create:crushing/gold_ore" });
  event.remove({ id: "create:crushing/deepslate_gold_ore" });
  event.remove({ id: "create:crushing/redstone_ore" });
  event.remove({ id: "create:crushing/deepslate_redstone_ore" });
  event.remove({ id: "create:crushing/lapis_ore" });
  event.remove({ id: "create:crushing/deepslate_lapis_ore" });
  event.remove({ id: "create:crushing/coal_ore" });
  event.remove({ id: "create:crushing/deepslate_coal_ore" });
  event.remove({ id: "create:crushing/diamond_ore" });
  event.remove({ id: "create:crushing/deepslate_diamond_ore" });
  event.remove({ id: "create:crushing/emerald_ore" });
  event.remove({ id: "create:crushing/deepslate_emerald_ore" });

  event.remove({ id: "create:crushing/raw_copper" });
  event.remove({ id: "create:crushing/raw_iron" });
  event.remove({ id: "create:crushing/raw_gold" });
  event.remove({ id: "create:crushing/raw_zinc" });
  event.remove({ id: "create:crushing/raw_copper_block" });
  event.remove({ id: "create:crushing/raw_iron_block" });
  event.remove({ id: "create:crushing/raw_gold_block" });
  event.remove({ id: "create:crushing/raw_zinc_block" });
});
