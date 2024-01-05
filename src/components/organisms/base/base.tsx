const Base = (props: any) => {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content__res" >
         {props.children}
        </div>
      </div>
    </div>
  );
};

export default Base;