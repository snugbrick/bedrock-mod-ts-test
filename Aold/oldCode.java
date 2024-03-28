package org.miarcle.miracleslimefun.Aold;

import io.github.thebusybiscuit.slimefun4.api.items.ItemGroup;
import io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem;
import io.github.thebusybiscuit.slimefun4.api.items.SlimefunItemStack;
import io.github.thebusybiscuit.slimefun4.api.recipes.RecipeType;
import io.github.thebusybiscuit.slimefun4.api.researches.Research;
import io.github.thebusybiscuit.slimefun4.core.attributes.Radioactivity;
import io.github.thebusybiscuit.slimefun4.libraries.dough.items.CustomItemStack;
import io.github.thebusybiscuit.slimefun4.utils.LoreBuilder;
import org.bukkit.Material;
import org.bukkit.NamespacedKey;
import org.bukkit.inventory.ItemStack;
import org.miarcle.miracleslimefun.MiracleSlimefun;

/**
@author UraniUm
*/public class oldCode {
    //学习代码，无实际作用
    public static void oldCode2(){
        NamespacedKey categoryId = new NamespacedKey(MiracleSlimefun.getInstance(), "cool_category");//项目组命名空间密钥
        CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");//进入新的项组,创建新的命名项
        ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);//创建一个新的 ItemGroup
        ItemStack itemStack_D = new ItemStack(Material.CAKE);
        //食谱
        ItemStack[] recipe = {
                new ItemStack(Material.DIAMOND), null, new ItemStack(Material.DIAMOND),
                null, new ItemStack(Material.DIAMOND), null,
                new ItemStack(Material.DIAMOND), null, new ItemStack(Material.DIAMOND)
        };
        //项目堆栈,它告诉我们的史莱姆趣物品的外观，并保存我们物品的ID
        SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", itemStack_D, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
        //添加项目
        SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
        sfItem.register(MiracleSlimefun.getInstance());

        NamespacedKey researchKey = new NamespacedKey(MiracleSlimefun.getInstance(), "fire_cake");
        Research research = new Research(researchKey, 123, "神奇蛋糕", 10);//加载费用和会说的话
        research.addItems(sfItem);
        research.register();

        NamespacedKey categoryId2 = new NamespacedKey(MiracleSlimefun.getInstance(), "cool_category");
        String base64 = "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=";
        //CustomItemStack categoryItem2 = new CustomItemStack(SkullItem.fromBase64(base64), "&4Our very cool Category");
        //ItemGroup itemGroup2 = new ItemGroup(categoryId2, categoryItem2);

        /*我们创建了一个新的 ItemGroup
        a.，它使用 customItemStack
        我们创建了一个新的SlimefunItem
        a.，它有一个自定义配方
        b.，它使用自定义SlimefunItemStack
        #至此，我们在粘液科技菜单中添加了一类并且给类中加了一个实际物品
         */
    }
}
