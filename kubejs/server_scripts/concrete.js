ServerEvents.recipes((event) => {
  event.shaped("8x kubejs:concrete_powder", ["GSG", "SCS", "GSG"], {
    S: "minecraft:sand",
    G: "minecraft:gravel",
    C: "minecraft:clay_ball",
  });
  event.shaped("8x kubejs:concrete", ["CCC", "CWC", "CCC"], {
    W: "#kubejs:water_crafting",
    C: "kubejs:concrete_powder",
  });
  event.shaped("8x kubejs:concrete_powder", ["CCC", "CSC", "CCC"], {
    C: "#c:concrete_powders",
    S: "supplementaries:soap",
  });

  let dye = (dye) => {
    event.shaped(`8x ${dye}_concrete_powder`, ["CCC", "CDC", "CCC"], {
      D: `${dye}_dye`,
      C: "kubejs:concrete_powder",
    });
    event.shaped(`8x ${dye}_concrete`, ["CCC", "CDC", "CCC"], {
      D: `${dye}_dye`,
      C: "kubejs:concrete",
    });
    event.shaped(`8x ${dye}_concrete`, ["CCC", "CDC", "CCC"], {
      C: `${dye}_concrete_powder`,
      D: "#kubejs:water_crafting",
    });
  };

  dye("white");
  dye("light_gray");
  dye("gray");
  dye("black");
  dye("brown");
  dye("yellow");
  dye("lime");
  dye("green");
  dye("cyan");
  dye("blue");
  dye("light_blue");
  dye("magenta");
  dye("pink");
  dye("purple");
  dye("red");
  dye("orange");

  event.shaped("6x kubejs:concrete_slab", ["   ", "CCC", "   "], {
    C: "kubejs:concrete",
  });
  event.shaped("4x kubejs:concrete_stairs", ["C  ", "CC ", "CCC"], {
    C: "kubejs:concrete",
  });

  event.remove({ id: "supplementaries:soap_clean_minecraft_concrete" });
  event.remove({ id: "supplementaries:soap_clean_minecraft_concrete_powder" });

  event.remove({ id: "white_concrete_powder" });
  event.remove({ id: "light_gray_concrete_powder" });
  event.remove({ id: "gray_concrete_powder" });
  event.remove({ id: "black_concrete_powder" });
  event.remove({ id: "brown_concrete_powder" });
  event.remove({ id: "yellow_concrete_powder" });
  event.remove({ id: "lime_concrete_powder" });
  event.remove({ id: "green_concrete_powder" });
  event.remove({ id: "cyan_concrete_powder" });
  event.remove({ id: "blue_concrete_powder" });
  event.remove({ id: "light_blue_concrete_powder" });
  event.remove({ id: "magenta_concrete_powder" });
  event.remove({ id: "pink_concrete_powder" });
  event.remove({ id: "purple_concrete_powder" });
  event.remove({ id: "red_concrete_powder" });
  event.remove({ id: "orange_concrete_powder" });
});

ServerEvents.tags("item", (event) => {
  event.add("amendments:sets_on_fire", "nomansland:sconce_torch");
});

ServerEvents.tags("block", (event) => {
  event.removeAll("minecraft:fall_damage_resetting");
});
