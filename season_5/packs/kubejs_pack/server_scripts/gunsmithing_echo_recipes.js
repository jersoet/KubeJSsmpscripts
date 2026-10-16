ServerEvents.recipes(event => {
  event.remove({ id: 'cgs:flintlock' })
  event.shaped(
    'cgs:flintlock',
    [' M ', 'BAF', '  L'],
    {
      M: 'kubejs:echo_mechanism',
      B: '#c:plates/iron',
      A: 'create:andesite_alloy',
      F: 'minecraft:flint_and_steel',
      L: '#c:stripped_logs'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/gatling' })
  event.recipes.create.mechanical_crafting(
    'cgs:gatling',
    ['BBILLL', 'BBICCL', 'BBIPAL', 'BBIAAL', '   M  '],
    {
      A: 'create:andesite_alloy',
      B: '#c:plates/steel',
      C: 'create:cogwheel',
      I: '#c:ingots/steel',
      L: '#c:plates/brass',
      P: 'create:precision_mechanism',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/revolver' })
  event.recipes.create.mechanical_crafting(
    'cgs:revolver',
    ['BBIC', 'WALL', '   W', ' M  '],
    {
      A: 'create:andesite_alloy',
      B: '#c:plates/steel',
      C: 'create:cogwheel',
      I: '#c:ingots/steel',
      L: '#c:plates/brass',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/shotgun' })
  event.recipes.create.mechanical_crafting(
    'cgs:shotgun',
    ['BBAL', 'BBAL', 'WW W', '  M '],
    {
      A: 'create:andesite_alloy',
      B: '#c:plates/steel',
      L: '#c:plates/brass',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/nailgun' })
  event.recipes.create.mechanical_crafting(
    'cgs:nailgun',
    ['IIBAL ', 'PPFTMW', ' LLLW ', '   E  '],
    {
      A: 'create:andesite_alloy',
      B: '#create:toolboxes',
      F: 'create:fluid_valve',
      I: '#c:plates/iron',
      L: '#c:plates/brass',
      M: 'create:precision_mechanism',
      P: 'create:fluid_pipe',
      T: 'create:copper_backtank',
      W: '#c:stripped_logs',
      E: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/blazegun' })
  event.recipes.create.mechanical_crafting(
    'cgs:blazegun',
    ['  ALW ', 'LCCBLW', ' PPTW ', '   M  '],
    {
      A: 'create:andesite_alloy',
      B: 'create:blaze_burner',
      C: 'create:chute',
      L: '#c:plates/brass',
      P: 'create:fluid_pipe',
      T: 'create:fluid_tank',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/launcher' })
  event.recipes.create.mechanical_crafting(
    'cgs:launcher',
    ['APLLPA', 'ICCCCI', 'WAWWA ', ' WW   ', '   M  '],
    {
      A: 'create:andesite_alloy',
      C: 'create:chute',
      I: '#c:plates/steel',
      L: '#c:plates/brass',
      P: 'create:fluid_pipe',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/launcher_auto' })
  event.recipes.create.mechanical_crafting(
    'cgs:launcher_auto',
    ['LLCC ', 'PPBBp', 'PPccT', '  M  '],
    {
      B: '#create:toolboxes',
      C: '#c:plates/copper',
      L: '#c:plates/brass',
      P: 'create:fluid_pipe',
      T: 'create:copper_backtank',
      c: 'create:cogwheel',
      p: 'create:precision_mechanism',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/ballistazooka' })
  event.recipes.create.mechanical_crafting(
    'cgs:ballistazooka',
    ['FIISS', 'WWWWL', 'FIISS', '  M  '],
    {
      F: 'create:flywheel',
      I: '#c:plates/iron',
      L: '#c:plates/brass',
      S: 'minecraft:string',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )

  event.remove({ id: 'cgs:mechanical_crafting/hammer' })
  event.recipes.create.mechanical_crafting(
    'cgs:hammer',
    ['PLT', 'WA ', ' A ', ' A ', ' M '],
    {
      A: 'create:andesite_alloy',
      L: '#c:storage_blocks/brass',
      P: 'create:mechanical_piston',
      T: 'create:copper_backtank',
      W: '#c:stripped_logs',
      M: 'kubejs:echo_mechanism'
    }
  )
})
