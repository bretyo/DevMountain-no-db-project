function Sample(props){
    console.log(props)

    let psg;
    if(props.madLibSelected && props.madLibSelected.passage) {( psg = props.madLibSelected.passage.split('%%%%')[0])}
    return(
        <div className='sample'>
            <p>{(props.madLibSelected && props.madLibSelected.passage)? psg + '...' : 'Pick a MadLib template and a sample will appear here'}</p>
        </div>
    )
}
export default Sample