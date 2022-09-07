import React, { useState, useRef, useCallback, useEffect } from 'react'
import './styles.scss'

function SingleRangeSlider({ min, max, onChange }) {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const range = useRef(null)

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    )

    useEffect(() => {
        if (maxVal) {
            const minPercent = getPercent(minVal)
            const maxPercent = getPercent(maxVal)

            if (range.current) {
                range.current.style.left = `${minPercent}%`
                range.current.style.width = `${maxPercent}%`
            }
        }
    }, [maxVal, getPercent])

    useEffect(() => {
        range.current.style.left = `0%`
        range.current.style.width = `0%`
        setMinVal(min)
    }, [])

    useEffect(() => {
        onChange({ min: minVal, max: maxVal })
    }, [minVal, maxVal, onChange])

    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                defaultValue={minVal}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal)
                    setMaxVal(value)
                    event.target.value = value.toString()
                }}
                className="thumb thumb--zindex-5"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    )
}

export default SingleRangeSlider
