import React from "react";

const Place= [
    {id:1, name: "ぽんぽこの湯", place: "中野市", url: "http://ponpoko.fun/"},
    {id:2, name: "斑尾温泉", place: "中野市", url: "https://www.madarao.jp/hotel/hot-spring"},
    {id:3, name: "もみじ壮", place: "中野市", url: "https://www.momijisou.com/"},
    {id:4, name: "長嶺温泉", place: "中野市", url: "https://www.nakanokanko.jp/spots/13"},
    {id:5, name: "よろずや", place: "山ノ内町", url: "https://yudanaka-yoroduya.com/"},
    {id:6, name: "あぶらや", place: "山ノ内町", url: "https://www.aburaya-tousen.co.jp/"},
    {id:7, name: "N", place: "山ノ内町", url: "http://www.town.yamanouchi.nagano.jp/kankoshoko/onsen.html"},
    {id:8, name: "馬曲温泉", place: "木島平村", url: "https://maguse-onsen.com/"},
    {id:9, name: "パノマランド木島平村", place: "木島平村", url: "https://panoramaland-k.com/"},
    {id:10, name: "N", place: "木島平村", url: "#"}
]

console.log(Place);

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('This is not work:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Onsen:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Search;

