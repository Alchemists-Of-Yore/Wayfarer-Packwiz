ServerEvents.recipes((event) => {
  event.shaped("2x kubejs:redstone_circuit", ["   ", " DD", " IT"], {
    I: "create:copper_sheet",
    T: "minecraft:redstone_torch",
    D: "minecraft:redstone",
  });

  event.replaceInput(
    { id: "minecraft:piston" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:dispenser" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:dropper" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "supplementaries:cog_block" },
    "minecraft:redstone_block",
    "kubejs:redstone_circuit"
  );

  event.remove([{ id: "minecraft:observer" }]);
  event.shaped("minecraft:observer", ["CCC", "DXQ", "CCC"], {
    C: "minecraft:cobblestone",
    D: "minecraft:redstone",
    X: "kubejs:redstone_circuit",
    Q: "minecraft:quartz",
  });

  event.remove([{ id: "supplementaries:relayer" }]);
  event.shaped("supplementaries:relayer", ["CCC", "DXT", "CCC"], {
    C: "minecraft:cobblestone",
    D: "minecraft:redstone",
    X: "kubejs:redstone_circuit",
    T: "kubejs:tin_ingot",
  });

  event.remove([{ id: "minecraft:daylight_detector" }]);
  event.shaped("minecraft:daylight_detector", ["GGG", "QXQ", "PDP"], {
    P: "#minecraft:planks",
    D: "minecraft:redstone",
    X: "kubejs:redstone_circuit",
    G: "#c:glass_blocks",
    Q: "minecraft:quartz",
  });

  event.remove([{ id: "minecraft:redstone_lamp" }]);
  event.shaped("minecraft:redstone_lamp", [" G ", "GDG", " C "], {
    D: "minecraft:glowstone_dust",
    C: "kubejs:redstone_circuit",
    G: "#c:glass_blocks",
  });

  event.remove([{ id: "supplementaries:redstone_illuminator" }]);
  event.shaped("supplementaries:redstone_illuminator", [" G ", "GDG", " C "], {
    D: "minecraft:glowstone_dust",
    C: "kubejs:redstone_circuit",
    G: "minecraft:prismarine_crystals",
  });

  event.remove([{ id: "minecraft:note_block" }]);
  event.shaped("minecraft:note_block", ["DQD", "QXQ", "DQD"], {
    D: "#minecraft:planks",
    X: "kubejs:redstone_circuit",
    Q: "minecraft:amethyst_shard",
  });

  event.remove([{ id: "minecraft:crafter" }]);
  event.shaped("minecraft:crafter", ["IRI", "CXC", "DDD"], {
    D: "minecraft:redstone",
    X: "kubejs:redstone_circuit",
    C: "minecraft:copper_ingot",
    I: "minecraft:iron_ingot",
    R: "minecraft:crafting_table",
  });

  event.remove([{ id: "supplementaries:turn_table" }]);
  event.shaped("supplementaries:turn_table", ["PPP", "CIC", "CXC"], {
    X: "kubejs:redstone_circuit",
    C: "minecraft:cobblestone",
    I: "kubejs:tin_ingot",
    P: "#minecraft:planks",
  });

  event.remove([{ id: "supplementaries:spring_launcher" }]);
  event.shaped("supplementaries:spring_launcher", ["CSC", "CXC", "RIR"], {
    X: "minecraft:sticky_piston",
    S: "minecraft:slime_block",
    C: "minecraft:cobblestone",
    R: "minecraft:redstone",
    I: "minecraft:iron_ingot",
  });

  event.remove([{ id: "minecraft:jukebox" }]);
  event.shaped("minecraft:jukebox", [" D ", "NXN", "   "], {
    X: "kubejs:redstone_circuit",
    N: "minecraft:note_block",
    D: "minecraft:diamond",
  });

  event.remove([{ id: "supplementaries:speaker_block" }]);
  event.shaped("supplementaries:speaker_block", [" D ", "NXN", "   "], {
    X: "kubejs:redstone_circuit",
    N: "minecraft:note_block",
    D: "wayfarer_core:scribing_tools",
  });

  event.replaceInput(
    { id: "minecraft:copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:exposed_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:exposed_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:weathered_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:weathered_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:oxidized_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:oxidized_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:waxed_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:waxed_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:waxed_exposed_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:waxed_exposed_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:waxed_weathered_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:waxed_weathered_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
  event.replaceInput(
    { id: "minecraft:waxed_oxidized_copper_bulb" },
    "minecraft:blaze_rod",
    "minecraft:glowstone_dust"
  );
  event.replaceInput(
    { id: "minecraft:waxed_oxidized_copper_bulb" },
    "minecraft:redstone",
    "kubejs:redstone_circuit"
  );
});
