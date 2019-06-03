import React from 'react'
import { connect } from 'react-redux'
import LinkComp from '../source/shared/Link/component';
import { loadData, startClock, tickClock } from '../actions'
import Page from '../components/page'


const Breach = ({title}) => (
    <div>
        <h2>{title}</h2>
    </div>
)

Breach.getInitialProps = async ({ctx}) => {
    const { store, isServer, query } = ctx;
    if(query.id) {
       console.log('we gotta ID')
    }
    return {
        title: 'yerr'
    }
}

export default connect()(Breach)
