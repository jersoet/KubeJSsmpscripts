ServerEvents.recipes(event => {
  const incompleteMechanism = 'kubejs:incomplete_nuclear_mechanism'

  event.recipes.create.sequenced_assembly(
    ['kubejs:nuclear_mechanism'],
    'create:precision_mechanism',
    [
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'create:iron_sheet']
      ),
      event.recipes.create.filling(
        incompleteMechanism,
        [incompleteMechanism, Fluid.of('createnuclear:uranium', 1000)]
      ),
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'alexscaves:uranium_rod']
      ),
      event.recipes.create.pressing(
        incompleteMechanism,
        incompleteMechanism
      ),
      event.recipes.create.pressing(
        incompleteMechanism,
        incompleteMechanism
      )
    ]
  )
    .transitionalItem(incompleteMechanism)
    .loops(1)

  event.replaceInput(
    { output: 'createnuclear:reactor_core' },
    'create:precision_mechanism',
    'kubejs:nuclear_mechanism'
  )
})
