StartupEvents.registry('item', event => {
    event.create('echo_mechanism')
        .displayName('Echo Mechanism')
        .texture('kubejs:item/echo_mechanism')
        .maxStackSize(64)
})