ServerEvents.recipes((event) => {
        event.shaped("iron_helmet", [
            "MMM",
            "MHM",
            "   "], {
          H: "minecraft:leather_helmet",
          M: "minecraft:iron_ingot",
        });   
        event.shaped("iron_chestplate", [
            "MHM",
            "MMM",
            "MMM"], {
          H: "minecraft:leather_chestplate",
          M: "minecraft:iron_ingot",
        });  
        event.shaped("iron_leggings", [
            "MMM",
            "MHM",
            "M M"], {
          H: "minecraft:leather_leggings",
          M: "minecraft:iron_ingot",
        });  
        event.shaped("iron_boots", [
            "M M",
            "MHM",
            "   "], {
          H: "minecraft:leather_boots",
          M: "minecraft:iron_ingot",
        }); 

        event.shaped("golden_helmet", [
            "MMM",
            "MHM",
            "   "], {
          H: "minecraft:leather_helmet",
          M: "minecraft:gold_ingot",
        });   
        event.shaped("golden_chestplate", [
            "MHM",
            "MMM",
            "MMM"], {
          H: "minecraft:leather_chestplate",
          M: "minecraft:gold_ingot",
        });  
        event.shaped("golden_leggings", [
            "MMM",
            "MHM",
            "M M"], {
          H: "minecraft:leather_leggings",
          M: "minecraft:gold_ingot",
        });  
        event.shaped("golden_boots", [
            "M M",
            "MHM",
            "   "], {
          H: "minecraft:leather_boots",
          M: "minecraft:gold_ingot",
        }); 

        event.shaped("diamond_helmet", [
            "MMM",
            "MHM",
            "   "], {
          H: "minecraft:leather_helmet",
          M: "kubejs:steel_ingot",
        });   
        event.shaped("diamond_chestplate", [
            "MHM",
            "MMM",
            "MMM"], {
          H: "minecraft:leather_chestplate",
          M: "kubejs:steel_ingot",
        });  
        event.shaped("diamond_leggings", [
            "MMM",
            "MHM",
            "M M"], {
          H: "minecraft:leather_leggings",
          M: "kubejs:steel_ingot",
        });  
        event.shaped("diamond_boots", [
            "M M",
            "MHM",
            "   "], {
          H: "minecraft:leather_boots",
          M: "kubejs:steel_ingot",
        }); 

event.remove([{ id: "minecraft:diamond_helmet" }]);
event.remove([{ id: "minecraft:diamond_chestplate" }]);
event.remove([{ id: "minecraft:diamond_leggings" }]);
event.remove([{ id: "minecraft:diamond_boots" }]);
event.remove([{ id: "minecraft:iron_helmet" }]);
event.remove([{ id: "minecraft:iron_chestplate" }]);
event.remove([{ id: "minecraft:iron_leggings" }]);
event.remove([{ id: "minecraft:iron_boots" }]);
event.remove([{ id: "minecraft:golden_helmet" }]);
event.remove([{ id: "minecraft:golden_chestplate" }]);
event.remove([{ id: "minecraft:golden_leggings" }]);
event.remove([{ id: "minecraft:golden_boots" }]);
});
