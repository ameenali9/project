import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import 'babel-polyfill';

let MainCont = Styled.div `
width:80%;
margin:auto;
`;

// set header tag and it details
function Header(props){
    let Header = Styled.div ` 
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `;
    let Logo = Styled.img `
    width:200px;
    padding:50px;
    `;
    let SearchBox = Styled.div `
    position:relative;
    `;
    let SearchImg = Styled.img `
    position:absolute;
    width:20px;
    padding:9px;
    `;
    let SearchInput = Styled.input `background-color:#fff;
    border-radius:20px;
    width:300px;
    font-size:24px;
    color:#747779;
    border:0px;
    padding:4px 20px 4px 35px;
    outline:none;
    border:1px solid #010101
    `;
    // using defaultValue prop instant value prop at SearchInput tag for avoid read-only feature for this tag
    return (
        <Header>
            <div>
                <Logo src={require('./assets/logo.png')} alt="FikraSpace logo" />
            </div>
            <SearchBox>
                <SearchImg src={require('./assets/searchlogo.png')} alt="" />
                <SearchInput type="search" placeholder="search" id="search" onKeyUp={props.onKeyEnterFun} />
            </SearchBox>
        </Header>
    )
}

// set articales container include drop lists
function Articale(props){
    let ArticalesLists = Styled.div `
    position:absolute;
    right:10%;
    margin-top:-4px;
    `;
    let Dropdown = Styled.div `
    position: relative;
    display:flex;
    align-items:center;
    `;
    let SpanSort = Styled.span `
    padding-left:30px;
    padding-right:10px;
    font-weight:bolder;
    font-family:'Source Sans Pro', sans-serif;
    `;
    let Select = Styled.select `
    background-color:#f1f1f1;
    border:1px solid #070707 ;
    width:100px;font-size:20px;
    color:black;
    padding:2px 10px;
    outline:none;
    margin-right:6px;
    `;
    let Option = Styled.option `
    background-color:#f1f1f1;
    color:black;
    padding:2px 10px;
    `;
    let Articales = Styled.div `display:flex;`;
    let RecentLinks = Styled.div `
    flex-grow:2;
    flex-basis:1200px;
    `;
    // props.news for set location of target articles location
    return (
        <React.Fragment>
            <ArticalesLists>
                <Dropdown>
                    <SpanSort>Sorted by : </SpanSort>
                    <Select id="sortBy" onChange={props.onArtSortChangeFun} defaultValue={props.SelectArtSortVal}>
                        <Option value="default" >Default</Option>
                        <Option value="title" >Title</Option>
                        <Option value="publishedAt" >Date</Option>
                        <Option value="vote" >Vote</Option>
                    </Select>
                    <SpanSort>Article number : </SpanSort>
                    <Select id="articleNum" onChange={props.onArtNumChangeFun} defaultValue={props.SelectArtNumFun}>
                        <Option value="20" >20</Option>
                        <Option value="15" >15</Option>
                        <Option value="10" >10</Option>
                        <Option value="5" >5</Option>
                    </Select>
                </Dropdown>
            </ArticalesLists>
            <Articales>
                <RecentLinks>
                    <span>Recent Links</span>
                    <hr />
                    <br />
                    <main id="news">
                        {props.news}
                    </main>  
                </RecentLinks>  
            </Articales>
        </React.Fragment>
    )
}

//set style and dimensions and it shapes and contents for sigle article
function NewData(props){
    let ArticaleDiv = Styled.article `
    display:flex;
    margin-bottom:20px;
    position:relative;
    box-shadow:1px 1px 20px rgba(0,0,0,0.2);
    border-radius:5px;
    padding:10px;
    `;
    let ImgCont = Styled.div `
    display:flex;
    flex-basis:150px;
    `;
    let NewImg = Styled.img `
    height:150px;
    width:150px;
    `;
    let TextCont = Styled.div `
    position:relative;
    padding-left:20px;
    padding-right:80px;
    `;
    let Texttitle = Styled.span `
    text-transform:capitalize;
    font-weight:bolder;
    display:block;
    font-family: 'Libre Baskerville', serif;
    font-size:24px;
    padding:0px 4px 0px 0px;color:#000;
    `;
    let TextSpan = Styled.span `
    display:block;color:silver;
    padding:0px 10px 0px 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size:18px;
    padding-bottom:40px;
    `;
    let TextTime = Styled.time `
    position:absolute;
    bottom:0px;
    color:blue;
    font-family: 'Source Sans Pro', sans-serif;
    `;
    let VoteCont = Styled.div `
    position:absolute;
    text-align:center;
    right:0px;
    padding-right:20px;`;
    let VoteUp = Styled.img `
    cursor:pointer;
    width:30px;
    height:30px;
    `;
    let VoteSpan = Styled.span `
    font-size:30px;
    font-weight:bolder;
    `;
    let VoteDown = Styled.img `
    cursor:pointer;
    width:30px;
    height:30px;
    `;
    let LinkNews = Styled.a `text-decoration:none;`;
    // props.index for get index location at array of newsData within constructor
    return (
        <ArticaleDiv>

            <ImgCont>
                <NewImg src={props.urlToImage} alt="news picture" />
            </ImgCont>
            <TextCont>
                <LinkNews href={props.url} target="_blank">
                    <Texttitle id={'title'+props.id}>{props.title}</Texttitle>
                </LinkNews>
                <TextSpan>{props.description}</TextSpan>
                <TextTime dateTime={props.publishedAt}>{props.publishedAt}</TextTime>
            </TextCont>
            <VoteCont>
                <VoteUp src={require('./assets/upvote.png')} id={"upvote" + props.id} alt={props.index} onClick={props.votingFun}/>
                <br />
                <VoteSpan id={"votenum"+props.id}>{props.voutenum}</VoteSpan>
                <br />
                <VoteDown src={require('./assets/downvote.png')} id={"dnvote" + props.id} alt={props.index} onClick={props.votingFun}/>
            </VoteCont>
        </ArticaleDiv>
    )
}

class NewsApp extends React.Component {
    constructor (){
        super()
        this.state = {
            newsData : [], //date of articles
            newsTarget : 'messi', // target search query
            newsSortBy: "default", // sorting method
            newsNum: "20" // number of articles that required by cleint
        };
        // puch defualt articles when news app page is loaded at first time
        this.getNews();
    }

    async getNews(Target = 'messi',NewsNumber = '20'){
        this.state.newsData = [];
        let date = new Date();
        let response = await fetch(`https://newsapi.org/v2/everything?q=${Target}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&apiKey=b60f15202abc40cf895fd1162f96752b&pageSize=${NewsNumber}`);
        let data     = await response.json();
        // KeY is a key of localStorage object for target article
        var KeY;
        data.articles.map((NeW,i)=>{
            KeY = NeW.title + NeW.publishedAt;
            // check if we have data at localStorage object for target articale
            if(localStorage.getItem(KeY) == undefined || localStorage.getItem(KeY) == null || localStorage.getItem(KeY) == NaN){
                // set one for it, if there is no data 'vote number'
                localStorage.setItem(KeY,"0");
            }
            // set default location of article, and push it at newsData within constructor of class
            data.articles[i].default = i;
            data.articles[i].vote = localStorage.getItem(KeY);
        })
        this.setState({
            // push final result at newsData within constructor of class
            newsData: data.articles
        })
    }

    FeedNews() {
        // check newsData of contructor is not empty
        if(this.state.newsData.length != 0){
            // get data of newsData
            let newsdate = this.state.newsData;
            // get sorting method 
            let SortedWord = this.state.newsSortBy;
            let bySorted = newsdate;
            let x, y;
            if(SortedWord == "default"){ bySorted.sort(function(a,b){ x=a.default;y=b.default;return x - y;}); } // sorting base on number from minimum value to maximum value for articles index default value
            if(SortedWord == "publishedAt"){ bySorted.sort(function(a,b){ x=a.publishedAt.toString().toLowerCase();y=b.publishedAt.toString().toLowerCase();return x > y ? -1 : x < y ? 1 : 0;}); } // sorting according date string value from newest to oldest articles
            if(SortedWord == "title"){ bySorted.sort(function(a,b){ x=a.title.toString().toLowerCase();y=b.title.toString().toLowerCase();return x < y ? -1 : x > y ? 1 : 0;}); } // sorting according title string of articles from 0-9a-zA-Z
            if(SortedWord == "vote"){ bySorted.sort(function(a,b){ x=a.vote;y=b.vote;return y - x;}); } // sorting according to vote value of articles that set it within newsData array objects
            // check if there are data
            if (bySorted.length != 0){
                return (
                    bySorted.map((_new_, i)=>{ //loop
                        // set key to get vote value of article at localStorage object
                        var key = _new_.title + _new_.publishedAt;
                        if(localStorage.getItem(key) == undefined || localStorage.getItem(key) == null || localStorage.getItem(key) == NaN){
                            localStorage.setItem(key,"0");
                        }
                        // make new articale
                        return <NewData  urlToImage = {_new_.urlToImage} id={i} title={_new_.title} description={_new_.description} publishedAt={_new_.publishedAt} voutenum={localStorage.getItem(key)} key={i} votingFun={this.voting.bind(this)} url={_new_.url} index={i}/>
                    })
                )
            }
        }
    }

    onArtSortChange(event){
        // update newsSortBy value of state of constructor of class
        this.setState({ newsSortBy : event.target.value });
    }

    onArtNumChange(event){
        // get news for new input value that typed at search input
        this.getNews(this.state.newsTarget,event.target.value);
        // update newsNum value of state of constructor of class
        this.setState({ newsNum : event.target.value });
    }

    voting(event){
        let tagID = event.target.id; // get id of article
        let index = parseInt(event.target.alt); // get index of article
        let vote_id = tagID.substring(6); //get articale id
        let alt = tagID.substring(0,6); //get action is upvote or downvote
        let title_art = document.getElementById('title'+vote_id).innerHTML; //get articale title
        let time_art = document.getElementById('time'+vote_id).innerHTML; //get artical time
        let vote_tag = document.getElementById('votenum'+vote_id); //define vote number 'span' tag
        let Key_vot = title_art + time_art; //set key of localStorage
        let votenum = 0; //set defualt value for vote number
        //check we have db for this artical. if no have make now for it
        if(localStorage.getItem(Key_vot) != undefined && localStorage.getItem(Key_vot) != null && localStorage.getItem(Key_vot) != NaN){
            votenum = parseInt(localStorage.getItem(Key_vot));
        }
        //check action is upvote or downvote for increasing or decreasing vote number
        if(alt == 'upvote'){ votenum++; }
        if(alt == 'dnvote'){ votenum--; }
        //update db for this articale 'vote number'
        localStorage.setItem(Key_vot,votenum); 
        //append new value of vote number for vote_tag of target articale
        vote_tag.innerHTML = votenum;
        this.state.newsData[index].vote = votenum;
    }
    
    onPressEnter(event){
        // check if cleint press enter key
        if (event.keyCode == 13){
            //get search input value
            let targetValue = event.target.value;
            // if search input falue is empty set default value for searching newsapi 
            if (targetValue.length == 0){ targetValue = "iraq" }
            this.getNews(targetValue,this.state.newsNum);
            // update value of newsTarget for cleint choice
            this.setState({
                newsTarget : targetValue
            })
         }
    }

    render(){
        return (
            <MainCont>
                <Header onKeyEnterFun={this.onPressEnter.bind(this)} SearchInputvalue={this.state.newsTarget}/>
                <Articale news={this.FeedNews()} onArtNumChangeFun={this.onArtNumChange.bind(this)} SelectArtNumFun={this.state.newsNum} onArtSortChangeFun={this.onArtSortChange.bind(this)} SelectArtSortVal={this.state.newsSortBy}/>
            </MainCont>
        )
    }
}

ReactDOM.render(<NewsApp /> , document.getElementById('root'));