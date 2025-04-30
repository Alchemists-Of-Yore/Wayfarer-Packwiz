ServerEvents.recipes((event) => {
  event.shapeless("1x wayfarer_core:scribing_tools", [
    "minecraft:glass_bottle",
    "minecraft:feather",
    "minecraft:ink_sac",
    "minecraft:ink_sac",
    "minecraft:ink_sac",
    "minecraft:ink_sac",
    "minecraft:ink_sac",
  ]);

  //List of Recipes that use Scribing Tools

  event.shapeless("1x minecraft:writable_book", [
    "wayfarer_core:scribing_tools",
    "minecraft:book",
  ]);
  event.shapeless("1x map_atlases:atlas", [
    "minecraft:map",
    "minecraft:map",
    "minecraft:map",
    "wayfarer_core:scribing_tools",
    "minecraft:leather",
  ]);
  event.shaped("1x minecraft:name_tag", [" S ", "CXC", "CCC"], {
    X: "wayfarer_core:scribing_tools",
    S: "minecraft:string",
    C: "create:cardboard",
  });
  event.shaped("1x supplementaries:doormat", [" S ", "HHH", "   "], {
    S: "wayfarer_core:scribing_tools",
    H: "minecraft:rabbit_hide",
  });
  let plank_common = (plank) => {
    event.shaped(`3x ${plank}_sign`, [" PP", " XS", "   "], {
      X: "wayfarer_core:scribing_tools",
      S: "minecraft:stick",
      P: `${plank}_planks`,
    });
    event.shaped(`3x ${plank}_hanging_sign`, [" XC", " PP", "   "], {
      X: "wayfarer_core:scribing_tools",
      C: "minecraft:chain",
      P: `${plank}_planks`,
    });
  };
  let plank = (plank) => {
    plank_common(plank);
    event.shaped(
      `3x supplementaries:way_sign_${plank}`,
      [" X ", "PPP", "   "],
      {
        X: "wayfarer_core:scribing_tools",
        P: `${plank}_planks`,
      }
    );
  };
  let plank_modded = (plank, modid) => {
    plank_common(modid + ":" + plank);
    event.shaped(
      `3x supplementaries:${modid}/way_sign_${plank}`,
      [" X ", "PPP", "   "],
      {
        X: "wayfarer_core:scribing_tools",
        P: `${modid}:${plank}_planks`,
      }
    );
  };

  plank("oak");
  plank("birch");
  plank("spruce");
  plank("dark_oak");
  plank("jungle");
  plank("acacia");
  plank("cherry");
  plank("mangrove");
  plank("crimson");
  plank("warped");
  plank("bamboo");

  plank_modded("willow", "nomansland");
  plank_modded("pine", "nomansland");
  plank_modded("walnut", "nomansland");
  plank_modded("maple", "nomansland");
  plank_modded("fir", "newworld");

  event.shaped("3x farmersdelight:canvas_sign", [" AA", " XS", "   "], {
    X: "wayfarer_core:scribing_tools",
    S: "minecraft:stick",
    A: "farmersdelight:canvas",
  });
  event.shaped("3x farmersdelight:hanging_canvas_sign", [" XC", " AA", "   "], {
    X: "wayfarer_core:scribing_tools",
    C: "minecraft:chain",
    A: "farmersdelight:canvas",
  });

  event.shaped("minecraft:cartography_table", ["MS ", "PP ", "PP "], {
    S: "wayfarer_core:scribing_tools",
    M: "minecraft:map",
    P: "#minecraft:planks",
  });

  event.replaceInput(
    { id: "minecraft:map" },
    "minecraft:compass",
    "wayfarer_core:scribing_tools"
  );

  //List of removed Recipes. To be replaced in the section above
  event.remove([
    { id: "minecraft:writable_book" },
    { id: "map_atlases:craft_atlas" },
    { id: "minecraft:cartography_table" },
    { id: "farmersdelight:hanging_canvas_sign" },
    { id: "farmersdelight:canvas_sign" },
    { id: "supplementaries:doormat_2" },
    { id: "create:crafting/appliances/name_tag" },
  ]);
  event.remove({
    not: { mod: "kubejs", mod: "farmersdelight" },
    output: "#kubejs:all_signs",
  });
});

ServerEvents.tags("item", (event) => {
  //Add Way Signs to Signs tag for removal utilities above
  event.add("kubejs:all_signs", "#minecraft:signs");
  event.add("kubejs:all_signs", "#minecraft:hanging_signs");
  event.add("kubejs:all_signs", "#supplementaries:way_signs");
});
