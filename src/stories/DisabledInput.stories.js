import React from 'react'
import DisabledInput from '../components/Inputs/DisabledInput'

import Input from '../components/Inputs/DisabledInput'

export default {
    title: 'Components/Inputs/DisabledInput',
    component: Input,
    argTypes: {
        type: { type: 'select', options: ['email', 'text'] },
    },
}

const Template = (args) => <DisabledInput {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Label',
    type: 'text',
}
