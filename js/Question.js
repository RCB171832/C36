class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option Number....");
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.message = createElement("h2");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.question.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question - Which is the fastest car in the world?");
    this.question.position(150, 80);

    this.option1.html("1: Audi R8");
    this.option1.position(150, 100);

    this.option2.html("2: Hennessy Venom GT");
    this.option2.position(150, 120);

    this.option3.html("3: Lamborghini Urus");
    this.option3.position(150, 140);

    this.option4.html("4: BMW Q6");
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(150, 250);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You For Answer");
      this.message.position(350, 350);
    })


  }
}
