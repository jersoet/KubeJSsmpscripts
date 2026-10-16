StartupEvents.registry('item', event => {
    event.create('echo_mechanism')
        .displayName('Echo Mechanism')
        .texture('kubejs:item/echo_mechanism')
        .maxStackSize(64)

    event.create('nuclear_mechanism')
        .displayName('Nuclear Mechanism')
        .texture('kubejs:item/nuclear_mechanism')
        .maxStackSize(64)

    event.create('incomplete_nuclear_mechanism')
        .displayName('Incomplete Nuclear Mechanism')
        .texture('kubejs:item/incomplete_nuclear_mechanism')
        .maxStackSize(64)
})