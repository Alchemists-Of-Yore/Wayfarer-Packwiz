ServerEvents.recipes((event) => {
  event.remove({ id: "goated:thatch" });
  event.shaped("6x goated:thatch", ["SSS", "SSS", "   "], {
    S: "farmersdelight:straw",
  });

  event.shaped("8x minecraft:mud", ["CCC", "CWC", "CCC"], {
    W: "#kubejs:water_crafting",
    C: "minecraft:dirt",
  });

  event.smelting("supplementaries:ash", "#minecraft:saplings").xp(0.0);

  event.replaceInput(
    { id: "supplementaries:wicker_fence" },
    "minecraft:sugar_cane",
    "farmersdelight:canvas"
  );

  event.replaceInput(
    { id: "minecraft:copper_ingot" },
    "minecraft:copper_block",
    "kubejs:copper_block"
  );
  event.replaceOutput(
    { id: "minecraft:copper_block" },
    "minecraft:copper_block",
    "kubejs:copper_block"
  );
  event.remove([{ id: "minecraft:copper_ingot_from_waxed_copper_block" }]);

  event.shaped("10x minecraft:copper_block", ["   ", " CC", " CC"], {
    C: "minecraft:copper_ingot",
  });

  event.remove({
    id: "create:industrial_iron_block_from_ingots_iron_stonecutting",
  });
  event.shaped("8x create:industrial_iron_block", ["   ", "IA ", "AI "], {
    A: "minecraft:iron_ingot",
    I: "create:andesite_alloy",
  });

  event.remove({ id: "create:industrial_iron_window" });
  event.shaped("3x create:industrial_iron_window", ["   ", "AGA", "   "], {
    G: "#c:glass_blocks/colorless",
    A: "create:industrial_iron_block",
  });

  event.remove({
    id: "create:weathered_iron_block_from_ingots_iron_stonecutting",
  });
  event.shaped("2x create:weathered_iron_block", ["   ", "IA ", "AI "], {
    A: "supplementaries:ash",
    I: "create:industrial_iron_block",
  });

  event.remove({ id: "create:weathered_iron_window" });
  event.shaped("3x create:weathered_iron_window", ["   ", "AGA", "   "], {
    G: "#c:glass_blocks/colorless",
    A: "create:weathered_iron_block",
  });

  event.remove({ id: "create:crafting/kinetics/metal_girder" });
  event.shaped("8x create:metal_girder", [" A ", "AAA", " A "], {
    A: "create:industrial_iron_block",
  });

  event.remove({ id: "minecraft:iron_bars" });
  event.shaped("2x minecraft:iron_bars", ["   ", "CCC", "CCC"], {
    C: "minecraft:iron_nugget",
  });

  event.replaceInput(
    { id: "minecraft:iron_door" },
    "minecraft:iron_ingot",
    "create:iron_sheet"
  );
  event.remove({ id: "minecraft:iron_trapdoor" });
  event.shaped("2x minecraft:iron_trapdoor", ["   ", "CCC", "CCC"], {
    C: "create:iron_sheet",
  });

  event.remove({ id: "blockbox:iron_plate" });
  event.shaped("10x blockbox:iron_plate", ["   ", " CC", " CC"], {
    C: "minecraft:iron_ingot",
  });
  event.replaceInput(
    { id: "blockbox:iron_plate_door" },
    "blockbox:iron_plate",
    "minecraft:iron_ingot"
  );
  event.replaceInput(
    { id: "blockbox:iron_plate_trapdoor" },
    "blockbox:iron_plate",
    "minecraft:iron_ingot"
  );

  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );

  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_black" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_gray" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_light_gray" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_white" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_red" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_orange" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_yellow" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_lime" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_green" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_cyan" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_blue" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_light_blue" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_purple" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_magenta" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_pink" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );
  event.replaceInput(
    { id: "supplementaries:candle_holders/candle_holder_brown" },
    "minecraft:iron_ingot",
    "minecraft:iron_nugget"
  );

  event.replaceInput(
    { id: "supplementaries:awnings/awning" },
    "supplementaries:flax",
    "farmersdelight:canvas"
  );

  let plank = (plank) => {
    event.remove({
      id: `another_furniture:${plank.split(":")[1]}_table`,
    });

    event.shaped(
      `another_furniture:${plank.split(":")[1]}_table`,
      ["PPP", "S S", "S S"],
      {
        S: "minecraft:stick",
        P: `${plank}_planks`,
      }
    );
  };

  event.remove({ id: "create:copycat_panel_from_ingots_zinc_stonecutting" });
  event.remove({ id: "create:copycat_step_from_ingots_zinc_stonecutting" });

  event.shaped("12x create:copycat_panel", ["ZT ", "TZ "], {
    Z: "create:zinc_ingot",
    T: "kubejs:tin_ingot",
  });

  event.shaped("6x create:copycat_step", ["TZ "], {
    Z: "create:zinc_ingot",
    T: "kubejs:tin_ingot",
  });

  event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": "kubejs:concrete_powder"
    }
  ],
  "results": [
    {
      "id": "kubejs:concrete"
    }
  ]
});

  let plank_modded = (plank) => {
    event.remove({
      id: `everycomp:af/${plank.split(":")[0]}/${plank.split(":")[1]}_table/${
        plank.split(":")[0]
      }/${plank.split(":")[1]}`,
    });

    event.shaped(
      `everycomp:af/${plank.split(":")[0]}/${plank.split(":")[1]}_table`,
      ["PPP", "S S", "S S"],
      {
        S: "minecraft:stick",
        P: `${plank}_planks`,
      }
    );
  };

  plank("minecraft:oak");
  plank("minecraft:birch");
  plank("minecraft:spruce");
  plank("minecraft:dark_oak");
  plank("minecraft:jungle");
  plank("minecraft:acacia");
  plank("minecraft:cherry");
  plank("minecraft:mangrove");
  plank("minecraft:crimson");
  plank("minecraft:warped");
  plank("minecraft:bamboo");
  plank_modded("nomansland:maple");
  plank_modded("nomansland:pine");
  plank_modded("nomansland:walnut");
  plank_modded("nomansland:willow");
  plank_modded("newworld:fir");
});
