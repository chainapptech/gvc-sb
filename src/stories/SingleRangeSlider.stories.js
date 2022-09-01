import React from 'react'
import SingleRangeSlider from '../components/SingleRangeSlider'

export default {
    title: 'Components/Sliders/SingleRangeSlider',
    component: SingleRangeSlider,
}

const Template = (args) => <SingleRangeSlider {...args} />

export const Default = Template.bind({})
Default.args = {}
