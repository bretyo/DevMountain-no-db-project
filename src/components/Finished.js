function Finished(props){

    return(
        <div style={{'overflow-y': 'auto'}} className='finished'>
            <div className='magnetM letterMag'>M</div>
            <div className='magnetX letterMag'>X</div>
            <div className='magnetA letterMag'>A</div>
            <div className='magnetP letterMag'>P</div>
            <div className='magnet magnetL'></div>
            <div className='magnet magnetR'></div>
            <h2>{props.title}</h2>
            <p >{props.passage}</p>
        </div>
    )
}

export default Finished