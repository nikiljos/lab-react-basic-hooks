import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../App';

const InsideBox=()=>{

    let [content,toggleContent]=useState(false)
    let [like, changeLike] = useState(0);

    let darkTheme=useContext(ThemeContext)

    useEffect(()=>{
        alert("Content change Triggered")
    },[content])

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc dolor, mattis nec accumsan non, interdum in lectus. 
    Cras aliquet est et enim consectetur feugiat. Nulla tempus rutrum diam ac consequat. Suspendisse ut turpis eu ipsum accumsan tincidunt non eget ante. 
    Integer pretium lobortis leo eleifend ultrices. Morbi faucibus nulla justo, non porta arcu ultricies ut. Proin vitae placerat nisi. Cras vulputate risus 
    dignissim tortor fringilla hendrerit. In pretium lorem sit amet semper congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames`;

    let divStyle={
        backgroundColor:darkTheme?"black":"white",
        color:darkTheme?"white":"black",
        border: "2px dotted black"
    }

    return (
        <div className="InsideBox" style={divStyle}>
            <div className="content">{content?lorem:""}</div>
            <button onClick={()=>{toggleContent(prev => !prev);}}>Content</button>
            <div className="count">{like}</div>
            <button onClick={()=>changeLike(prev=>(prev+1))}>Like</button>
        </div>
    )
}

export default InsideBox