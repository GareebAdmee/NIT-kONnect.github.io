import React from 'react'
import WidgetOptions from './WidgetOptions'

function Widget() {
    return (
        <div className="widget">
            <div className = " widget_header">
                <h5>Spaces to follow</h5>
            </div>
            <div className="widget_contents">
        <WidgetOptions />
      </div>
        </div>
    )
}

export default Widget