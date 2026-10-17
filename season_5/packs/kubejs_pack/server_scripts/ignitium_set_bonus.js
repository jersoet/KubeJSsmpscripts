ServerEvents.tick(event => {
    // Optional optimization: only run every 20 ticks (1 second) to save performance
    if (event.server.getTickCount() % 20 != 0) return;

    event.server.getPlayerList().getPlayers().forEach(player => {
        // Check individual armor slots using 1.21 item container methods
        let helmet = player.getItemBySlot('head')
        let chestplate = player.getItemBySlot('chest')
        let leggings = player.getItemBySlot('legs')
        let boots = player.getItemBySlot('feet')

        // Match the exact item IDs from the Cataclysm mod
        if (
            helmet.id == 'cataclysm:ignitium_helmet' &&
            (chestplate.id == 'cataclysm:ignitium_chestplate' || chestplate.id == 'cataclysm:ignitium_elytra_chestplate') &&
            leggings.id == 'cataclysm:ignitium_leggings' &&
            boots.id == 'cataclysm:ignitium_boots'
        ) {
            // Apply Resistance (duration in ticks, amplifier, ambient, show particles)
            player.potionEffects.add('minecraft:resistance', 40, 1, false, false)
            
            // Apply Strength II (amplifier 1 = Level 2)
            player.potionEffects.add('minecraft:strength', 40, 1, false, false)
        }
    })
})