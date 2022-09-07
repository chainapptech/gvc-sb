import React from 'react'

import ShareModal from '../components/ShareModal'

export default {
    title: 'Components/ShareModal',
    component: ShareModal,
}

const Template = (args) => <ShareModal {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
}
