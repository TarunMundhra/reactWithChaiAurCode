
function customRender( reactElement , mainContainer){

    // loop based comment 

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.Children
    for( const prop in reactElement.props ){
        if ( prop === 'Children' )continue //ignore this shit

        domElement.setAttribute( prop , reactElement.props[prop])   
    }

    mainContainer.appendChild( domElement)
    // const domElement = document.createElement(reactElement.type)
    
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute( 'href' , reactElement.props.href)
    // domElement.setAttribute( 'target' , reactElement.props.target)

    // mainContainer.appendChild(domElement)

}

// to simulate how react see it after compiling(lossly speaking)
// it sees it as a tree

const reactElement = {
    type : 'a' ,//anchor
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    Children : 'Click me to visit google'
}
// we say one need to write like this to use our library

const mainContainer = document.querySelector('#root')

// need to render mainContainer 

customRender( reactElement , mainContainer)
