import React from 'react'

import WarningMessage from '../components/WarningMessage'

export default {
    title: 'Components/WarningMessage',
    component: WarningMessage,
}

const Template = (args) => <WarningMessage {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'The selected wallet is not elegible for a DRep application because it hasn’t voted before. Please select another wallet.',
}
