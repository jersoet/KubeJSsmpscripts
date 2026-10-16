ItemEvents.tooltip(event => {
  const armorPieces = [
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_boots'
  ]

  armorPieces.forEach(item => {
    event.add(item, 'Full set bonus: Resistance II and Strength II')
  })
})
