import gLogo from './img/GOOGL.png'
import fb from './img/FB.png'
import am from './img/AMZN.svg'
const List = {
    list: [
        {
            id:"1",
            title:"googl",
            logo:gLogo,
            val:"1515"
        },
        {
            id:"2",
            title:"fb",
            logo:fb,
            val:"1515"
        },
        {
            id:"3",
            title:"amzn",
            logo:am,
            val:"1515"
        },
    ],
    getList: function () {
      return (
        (localStorage.getItem("theList") &&
          JSON.parse(localStorage.getItem("theList"))) ||
        this.list
      );
    },
    saveList: (list) => {
      localStorage.setItem("theList", JSON.stringify(list));
    },
  };
  
  export default List;