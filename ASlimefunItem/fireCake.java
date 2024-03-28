package org.miarcle.miracleslimefun.ASlimefunItem;

import io.github.thebusybiscuit.slimefun4.api.events.PlayerRightClickEvent;
import io.github.thebusybiscuit.slimefun4.api.items.ItemGroup;
import io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem;
import io.github.thebusybiscuit.slimefun4.api.items.SlimefunItemStack;
import io.github.thebusybiscuit.slimefun4.api.recipes.RecipeType;
import io.github.thebusybiscuit.slimefun4.core.attributes.WitherProof;
import io.github.thebusybiscuit.slimefun4.core.handlers.BlockUseHandler;
import io.github.thebusybiscuit.slimefun4.core.handlers.ItemUseHandler;
import org.bukkit.block.Block;
import org.bukkit.entity.Wither;
import org.bukkit.inventory.ItemStack;

import javax.annotation.Nonnull;

/**
 * @author UraniUm
 */
public class fireCake extends SlimefunItem implements WitherProof {
    //学习代码，无实际作用
    public fireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);

    }



    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);

        ItemUseHandler itemUseHandler = this::onItemUseRightClick;
        addItemHandler(itemUseHandler);
    }

    private void onBlockRightClick(PlayerRightClickEvent event) {
        event.cancel();
        event.getPlayer().setFireTicks(5 * 20);
        event.getPlayer().sendMessage("你上当啦");
    }

    private void onItemUseRightClick(PlayerRightClickEvent event) {
        event.getPlayer().giveExpLevels(1);
    }

    @Override
    public void onAttack(@Nonnull Block block, @Nonnull Wither wither) {
        wither.setHealth(0);
    }
}
