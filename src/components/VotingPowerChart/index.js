import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PieChart } from 'react-minimal-pie-chart'

import ButtonComponent from '../Button'

import './styles.scss'

const VotingPowerChart = ({ vp, status, delegate }) => (
    <Col className="wrapper">
        <h2 className="mb-2">Voting delegation</h2>
        <p>Your total voting power is {vp}</p>
        <Row className="chart">
            <PieChart
                data={[
                    {
                        title: 'one',
                        value: vp,
                        color: '#7C89F7',
                    },
                ]}
                lineWidth={10}
                rounded
                totalValue={1234}
                label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                        x={x}
                        y={y}
                        dx={dx}
                        dy={dy}
                        dominantBaseline="central"
                        textAnchor="middle"
                    >
                        {Math.round(dataEntry.percentage) + '%'}
                    </text>
                )}
                labelPosition={0}
                segmentsStyle={{
                    border: ' 12px solid red',
                    background: 'red',
                }}
                animate
            />
            <div className="chart-shadow"></div>
        </Row>
        <div className="d-flex flex-row align-items-center justify-content-between w-100 info">
            <p>Status</p>
            <span>{status}</span>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between w-100 info">
            <p>Delegate(s)</p>
            <span>{delegate}</span>
        </div>
        <ButtonComponent className="w-100">Manage delegation</ButtonComponent>
    </Col>
)

export default VotingPowerChart