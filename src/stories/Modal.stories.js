import Modal from '../components/Modal'

export default {
    title: 'Components/Modal',
    component: Modal,
}

const Template = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
}
