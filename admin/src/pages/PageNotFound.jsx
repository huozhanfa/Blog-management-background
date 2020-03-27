import React from 'react'
import NotFound from '../static/images/404.gif'

export default class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <img src={NotFound} alt="404" style={{height:650,width:1400}}/>
            </div>
        )
    }
}
