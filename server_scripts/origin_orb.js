ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'origins:orb_of_origin', // output
    [
      ' AAA ',
      'ABCDA',
      'ACECA',
      'AFCGA',
      ' AAA '
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:ender_pearl',
      C: 'minecraft:ender_eye',
      D: 'minecraft:cod',
      E: 'minecraft:nether_star',
      F: 'minecraft:blaze_rod',
      G: 'minecraft:phantom_membrane'
    }
  )

})