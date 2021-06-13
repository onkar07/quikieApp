import React, { useEffect, useLayoutEffect, useState } from 'react'

function Table() {
  const [crypto, setCrypto] = useState();
  const [currentPage, setCurrentpage] = useState(1);
  const [itempp, setItemspp] = useState(5);
  const [text, setText] = useState("save data");

  useEffect( () =>{
    fetch("https://api.nomics.com/v1/currencies/ticker?key=4704ee24ea5d850ad32c0644b21d284cf547af2a&interval=1d,30d&convert=EUR&per-page=100&page=1")
    .then(response => response.json())
    .then((data)=>{setCrypto(data);console.log(crypto)});
},[])

    if(crypto != null){
      console.log(crypto.length)
      const page = [];
      for(let i=0; i<Math.ceil((crypto.length)/itempp); i++){
      page.push(i);
    }
    const IndexOfLastpage = currentPage + itempp;
    const IndexOfFirstpage = IndexOfLastpage - itempp;
    const CurrentItem = crypto.slice(IndexOfFirstpage,IndexOfLastpage);  
    console.log(IndexOfLastpage,IndexOfFirstpage,CurrentItem)
    console.log(page)
    
    const handleClick = (e) =>{
      e.preventDefault();
      const Cname = e.currentTarget.id;
      Object.entries(crypto).map((val)=>{
          if(Cname == val[1].name){
            console.log(val[1])
            console.log(e.currentTarget.id) 
          }
      })
  }

  const handlePage = (event) =>{
    if(currentPage >= (crypto.length)){
      alert("no page")
    }
    else{
      setCurrentpage(currentPage+itempp)
      
    }
    
  }
  const handlePageBackward = () =>{
    if(currentPage==1){
      alert("no page");
    }
    else{
      setCurrentpage(currentPage-itempp)
    }
    
  }
    

        return(
          <div>
                  <div className="container text-center table-responsive tableDiv mb-5">
                <table className="table mt-4 mb-5">
                  <thead >
                  <th colSpan="5" className="table-title align-middle" >
                                    <div className="navigater d-flex justify-content-start  ms-5">
                                        <span><h3>Stock Details Table</h3></span>
                                        <span className="ms-5">
                                        <input class="form-control me-5 search" type="search" placeholder="Search by Company Name" aria-label="Search">
                                         </input>
                                        </span>
                                    </div>
                                </th>
                  </thead>
                  <tbody>
                  <tr className="tableHead">
                      <th scope="col">COMPANY NAME</th>
                      <th scope="col">SYMBOL</th>
                      <th scope="col">MARKET CAP</th>
                      <th scope="col"></th>
                      <th scope="col">CURRENT PRICE</th>
                    </tr>
                  {
                    
                      crypto?
                      Object.entries(CurrentItem).map((val,i) => {
                        i *= 1;
                        return(
                                <tr key={i} id={i}>
                                  <th scope="row">{val[1].name}</th>
                                  <td><span className="symbol">•{'\u00A0'}{val[1].symbol}</span></td>
                                  <td>${val[1].market_cap%1000.00}K</td>
                                  <td> <button className="btn btncolor" id={val[1].name} onClick={setText("yo")}>{text}</button>  </td>
                                  <td>${val[1].price}<br/><sub>USD</sub></td>
                                </tr>
                              ) 
                            }) :null
                        }
                            <tr className="borderbottom">
                                <td colSpan="5" className="" >
                                    <div className="navigater d-flex justify-content-end me-5">
                                      <span className="me-5">{currentPage}-{IndexOfLastpage} of {crypto.length}</span>  
                                      <span className="me-5" onClick={handlePageBackward}>{'<'}</span>    
                                      <span className="me-5" onClick={handlePage}>{'>'}</span>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
               </table>
          </div>
          </div>
        )
    }
    return(
      <div>
              
      </div>
    )
    
}


export default Table
