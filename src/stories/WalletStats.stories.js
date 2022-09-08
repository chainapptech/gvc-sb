import WalletStats from '../components/WalletStats'

export default {
    title: 'Components/WalletStats',
    component: WalletStats,
}

const Template = (args) => <WalletStats {...args} />

export const Default = Template.bind({})
Default.args = {
    stakedAdaName: 'Staked ADA',
    stakedAdaValue: '532',
    delegatedADAvalue: '4,403',
}
export const MiddleCol = Template.bind({})
MiddleCol.args = {
    stakedAdaName: 'Staked ADA',
    stakedAdaValue: '4,403',
    delegatedADAvalue: '10 delegations ',
}
export const ThirdCol = Template.bind({})
ThirdCol.args = {
    stakedAdaName: 'Total voting power',
    stakedAdaValue: '4,935',
    delegatedADAvalue: 'Available for voting',
}
