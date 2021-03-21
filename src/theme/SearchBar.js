import React, { Component } from 'react'
import lunr from 'lunr'
import Doc1 from '../../docs/create-a-blog-post.md'
import ReactDOMServer from 'react-dom/server'
import md2json from 'md-2-json'
import html2md from 'html-to-md'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  this.test = this.test.bind(this);	  
  }

  test() {
   let str = ReactDOMServer.renderToString(<Doc1/>);
const md = html2md(str, {emptyTags:['code', 'blockquote']});
  let idx = lunr(function () {
  this.ref('name')
  this.field('text')
  this.metadataWhitelist = ['position'];
  let arrMd = md.split('\n');
  arrMd.forEach(data => {
	  let obj = {name: 'd', text: data}
	  this.add(obj);
  })
 });
	  console.log(md);
  let arrMd = md.split('\n');
console.log(arrMd);
let jsn = md2json.parse('dd');
	  console.log(jsn);
  console.log(idx.search("Greetings"));  	  
  }

  render() {
    return <div>

		 <input type="search" onChange={this.test} />
		  </div>
  }
}

export default SearchBar;
