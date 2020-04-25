class Pagination {
  constructor(props){
    this.data=(props.data===undefined||props.data===null)?[{id:"Mie ayam",nama:"Wawan",kelas:"High"}]:props.data;
    this.pages=0;
    this.props=props;
    this.pecah={};
    this.indexs();
    this.loadPage();
    this.pagination();
  }

  loadPage(index){
    let inc=0;
    let setElement=document.querySelector((this.props.element===undefined||this.props.element===null)?"#root":this.props.element);
      setElement.innerHTML+=this.pecah[(index===undefined)?0:index].map((itemData)=>{
        inc++;
        if(inc<=this.props.perPage){
          return this.props.html(itemData,inc);
        }else{
          return null;
        }
      });
  }


  pagination(){
      let setPagination=document.querySelector((this.props.btnElement===undefined||this.props.btnElement===null)?"#root":this.props.btnElement);
      let data=this.pecah;
      let html=this.props.html;
      let props=this.props;
      Object.keys(this.pecah).forEach((item,i) => {
        let x=document.createElement("button");
        x.textContent=i+1;
        x.value=item;
        x.addEventListener("click",function(item){
        try {
          let inc=0;
          let setElement=document.querySelector((props.element===undefined||props.element===null)?"#root":props.element);
          setElement.innerHTML=data[item.target.value].map((item, i) => {
            inc++;
            if(inc<=props.perPage){
              return html(item,inc);
            }
          });
        } catch (e) {
            alert(e)
        }

      },false);
        setPagination.appendChild(x);
      });

  }

  indexs(){

    if(typeof this.data==="object"){
      "use strict";
      try {

        let datax={},inc=this.props.perPage,page=0;
        datax["0"]=[];
        this.props.data.forEach((item,index)=>{
          if(index<inc){
            datax[page].push(item);
          }else{
            page++;
            inc+=this.props.perPage;
            datax[page]=[];
            datax[page].push(item);
          }
        });
        this.pecah=datax;
      } catch (e) {
        document.body.innerHTML=e;
      }
    }
    //end indexs function
  }
  next(){
    if(this.pages<Object.keys(this.pecah).length){

    }
  }
  prev(){

  }
}
