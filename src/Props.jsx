// function Avatar (props){
//     console.log(props)
//     return (
//         <>
//         <img src={props.src} width={props.height}height={props.height}/>
//         </>
//     )
// }
function Avatar ({src,width,height,children}){
   
    return (
        <>
        <img src={src} width={width}height={height}/>
        {children}
        </>
    )
}

export default Avatar;