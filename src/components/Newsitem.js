import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className="card shadow p-3" style={{width:"18rem",margin:'auto',height:'30rem'}}>
        <img src={imageUrl?imageUrl:"https://imgs.search.brave.com/DT_4Gij_TjSL7H52G6Ifaf8Ldlb30aKKp8-CdFVDIDI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taWxs/aWVzLmllL2Nkbi9z/aG9wL2ZpbGVzL0lN/QUdFU2tpbmNhcmVW/aXRhbENIeWRyYXRp/bmdFbnp5bWVNYXNx/dWUuanBnP3Y9MTY4/MjY3NDI3MyZ3aWR0/aD17d2lkdGh9"} className="card-img-top overflow-hidden d-block" alt="new-headline" style={{width:'254px',height:'141px'}} />
        <div className="card-body">
            <h5 className="card-title overflow-hidden">{title?title.slice(0,30):title}.......</h5>
            <p className="card-text overflow-hidden" style={{width:'222.400px',height:'120px',}}>{description?description.slice(0,150):description}</p>
            <p className="card-text"><small className='text-muted'>By {author?author:'unknown'} on {(new Date(date)).toGMTString( )}</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary my-3">Read More</a>
        </div>
      </div>
    )
  }
}
export default Newsitem