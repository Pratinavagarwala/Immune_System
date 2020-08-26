class Form {

  constructor() {
    this.acc=createButton("New Account");
    this.login = createButton('Login');
    this.title = createElement('h2');
    this.flag=0;
  }
  
  display(){
    
    background(immunity);
    this.re=createButton("RELOAD")
    this.re.position(window.innerWidth-1500,window.innerHeight-650);
    this.title.html("Immunity Tracker");
    this.title.position(window.innerWidth/2 - 50, 0);
    
    this.login.position(window.innerWidth/2 + 10, window.innerHeight/2);
    this.acc.position(window.innerWidth/2 -10, window.innerHeight/2+100);
   
    this.login.mousePressed(()=>{
      this.flag=1;
      this.login.hide();
      this.acc.hide();
      login1=new Login();
      login1.display();
      
    })
    this.acc.mousePressed(()=>{
      this.flag=2;
      this.acc.hide();
      this.login.hide();
      login1=new Login();
      login1.display();
    });

    this.re.mousePressed(()=>{
      location.reload();
    });

  }
}
