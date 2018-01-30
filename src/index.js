class Mycomp extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>    
        )
    }
}

ReactDOM.render(<Mycomp text="my second component"/>, document.getElementById('main'))