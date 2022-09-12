import React from 'react'

import SmallModal from '../components/SmallModal'

export default {
    title: 'Components/SmallModal',
    component: SmallModal,
}

const Template = (args) => <SmallModal {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
    buttonText: 'Button',
    secondButtonText: 'Second',
    onClick: () => {
        console.log('first button')
    },
    secondOnClick: () => {
        console.log('second Button')
    },
    title: 'Title goes here',
    description: 'Description goes here',
}
