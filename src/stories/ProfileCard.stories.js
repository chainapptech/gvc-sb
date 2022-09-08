import ProfileCard from '../components/ProfileCard'
import Avatar2 from '../assets/images/profile-avatar-2.svg'

const AvatarList = {
    Default: '',
    Avatar2: Avatar2,
}

export default {
    title: 'Components/ProfileCard',
    component: ProfileCard,
    argTypes: {
        avatar: { type: 'select', options: AvatarList },
    },
}

const Template = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
    onClick: () => {
        console.log('onClick func')
    },
    buttonText: 'View profile',
    title: '',
    profileName: 'Bailly Silver',
    profileJob: 'Community manager and investor',
    avatar: AvatarList.Default,
}