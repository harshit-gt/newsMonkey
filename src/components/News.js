import React, {  useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import Loader from './Loader';
import Proptypes from 'prop-types'
export default function News(props) {
  document.title = props.category[0].toUpperCase()+props.category.slice(1)+"  News Monkey";
  const [currState, changeState] = useState({
    articles: [],
    loading: true,
    page: 1
  })
  const handlePrev=()=>
  {
    changeState(
      {
        page:currState.page-1,
        loading:true
      }
    )
  }
  const handleNext = ()=>
  {
    changeState({
      page:currState.page+1,
      loading:true
    })
  }
  // &pageSize=${props.pageSize}
  useEffect( ()=>{
    console.log('in Use effect')
     const fetchData = async ()=>
     {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${currState.page}&pageSize=${props.pageSize}&apiKey=b01fc18171334e6dab07852febb0b4d6`;
      console.log(url)
      const response =await fetch(url)
      return await response.json()
     }
     fetchData().then(data=>
      {
        changeState(()=>
        {
          return {
            articles:data.articles,
            loading:false,
            page:currState.page,
          }
        })
      })
  },[currState.page,props.pageSize,props.country,props.category])
  return (
    <div>
      return (
      <>
      <div className='container my-5'>
          <h2 className='text-center text-red-200' >Top Headlines from <span className='text-red-400'>{props.category[0].toUpperCase()+props.category.slice(1)}</span> Category</h2>
          {/* {currState.loading && <Loader />} */}
          <div className="row my-5 justify-content-center">
            {
              currState.articles?.map((obj, i) => {
                return (
                  <div className='col-md-4 col-lg-4 p-5'>
                    <Newsitem key={obj.title.slice(0,5)} title={obj.title} description={obj.description} imageUrl={obj.urlToImage} newsUrl={obj.url} author={obj.author} date={obj.publishedAt}/>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={currState.page <= 1} type="button" className="btn btn-primary w-25" onClick={handlePrev}>&laquo;Previous</button>
          <button disabled={ Math.ceil(36/props.pageSize)<=  currState.page} type="button" className="btn btn-primary w-25" onClick={handleNext}>next &raquo;</button>
        </div>
      </>
      )
    </div>
  )
}
News.defaultProps = {
country:'in',
pageSize:6
}
News.propTypes = {
country:Proptypes.string,
pageSize:Proptypes.number
}