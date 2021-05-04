function Finished(props){

    return(
        <div style={{'overflow-y': 'auto'}} className='finished'>
            <h2>{props.title}</h2>
            <p >{props.passage}</p>
        </div>
    )
}

export default Finished