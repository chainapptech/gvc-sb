import React from 'react'

import WalletModal from '../components/WalletModal'

export default {
    title: 'Components/WalletModal',
    component: WalletModal,
}

const Template = (args) => <WalletModal {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
    number: '1',
    textHeading: '',
    text: 'Download the Catalyst app',
}
