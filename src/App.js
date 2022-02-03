import { useEffect, useState, } from "react";
import { fetchImages } from "./api";


let num ="1";
function Header() {
  return (
    <header className="hero is-small is-danger">
      <div className="hero-body">
        <div className="container">
          <h1 style={{textAlign: "center",textSi: "200%"}} className="title">猫閲覧サイト</h1>
          <p>本サイトではCat APIを利用して猫の画像を表示するサイトです。</p>
          <p>＜after＞ボタンと＜before＞ボタンを押すことにより、表示させたい猫の種類を変更できます。</p>
          <p>下記の選択部分からcat番号を選択し、＜表示＞ボタンを押すことで猫の画像を表示することができます。</p>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={props.src}
            alt="cute cat!"
          />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const {urls} = props;
  console.log(props);
  if (urls == null) {
    return <Loading />;
  }
  return (
    
    <div className="columns is-vcentered is-multiline">
       {/* {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
       })} */}
       <Image src={urls}/>
    </div>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }
  if(num==="1"){
    return (
      <div>
        <p style={{textAlign: "center"}}>白黒猫</p>
          <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                    <select name="breed"  >
                    <option value="1">cat1</option>
                    <option value="3">cat2</option>
                    <option value="5">cat3</option>
                    <option value="10">cat4</option>
                    <option value="11">cat5</option>
                    <option value="16">cat6</option>
                    <option value="18">cat7</option>
                    <option value="20">cat8</option>
                    <option value="23">cat9</option>
                    <option value="24">cat10</option>
                    <option value="25">cat11</option>
                    <option value="27">cat12</option>
                    </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-dark">
                表示
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }else if(num==="2"){
    return (
      <div>
        <p style={{textAlign: "center"}}>茶黒猫</p>
          <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                    <select name="breed"  >
                    <option value="2">cat1</option>
                    <option value="6">cat2</option>
                    <option value="7">cat3</option>
                    <option value="8">cat4</option>
                    <option value="9">cat5</option>
                    <option value="12">cat6</option>
                    <option value="13">cat7</option>
                    <option value="14">cat8</option>
                    <option value="15">cat9</option>
                    <option value="17">cat10</option>
                    <option value="19">cat11</option>
                    <option value="26">cat12</option>
                    <option value="28">cat13</option>
                    <option value="29">cat14</option>
                    </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-dark">
              表示
              </button>
            </div>
          </div>   
        </form>
      </div>
    );
  }else if(num==="3"){
    return (
      <div>
        <p style={{textAlign: "center"}}>猫（その他）</p>
          <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                    <select name="breed"  >
                    <option value="4">cat1</option>
                    <option value="21">cat2</option>
                    <option value="22">cat3</option>
                    <option value="30">cat4</option>
                    <option value="31">cat5</option>
                    </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-dark">
              表示
              </button>
            </div>
          </div>   
        </form>
      </div>
    );
  }
  
}




function Changebutton1(props){
  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit();
  }
  return(
    <form onSubmit={handleSubmit}>

    <button type="submit" className="button is-dark" >
    <p>after</p>
  </button>
  </form>
  )
}


function Changebutton2(props){
  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit();
  }
  return(
    <form onSubmit={handleSubmit}>
    <button type="submit" className="button is-dark" >
    before
  </button>
  </form>
  )
}



function Main() {
  const [gomi, setGomi] = useState(null);
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("1").then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }
  function change1(){
    if(num==="1"){
      num="2";
    }else if(num==="2"){
      num="3";
    }else if(num==="3"){
      num="1";
    }
    setGomi(num);
  }
  function change2(){
    if(num==="1"){
      num="3";
    }else if(num==="2"){
      num="1";
    }else if(num==="3"){
      num="2";
    }
    setGomi(num);
  }
  return (
    <main>
      <section className="section">
        <div className="container">
        <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <div className="container">
      <Changebutton1 onFormSubmit={change1}/>
      </div>
      <section className="section">
        <div className="container">
          <Gallery urls={urls}/>
        </div> 
      </section>
      <section>
      <div className="container">
      <Changebutton2 onFormSubmit={change2}/>
      </div>
      </section>
    </main>
  );
}




function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>本サイトは授業の課題として作成されています。</p>
        <p>以下のCat APIを利用し、猫の画像を取得しています。</p>
        <p>
        Cat APIは
          <a href="https://thatcopy.pw/catapi/">こちら</a>
        </p>
      </div>
      <section className="content has-text-centered hero is-primary">
      <div className="hero-body">
      <p>日本大学文理学部情報科学科webプログラミング最終課題</p>
      <p>&copy;篠遠孝 5420072</p>
      </div>
      </section>
    </footer>
  );
}






function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;