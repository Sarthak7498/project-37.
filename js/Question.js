class Question {

  constructor() {
    this.title = createElement('h1')
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
   
    this.input1 = createInput("Enter Your Name Here....");
    this.input1.position(150, 230);

    this.input2 = createInput("Enter Correct Option No..");
    this.input2.position(350, 230);

    this.button = createButton('Submit');
    this.button.position(290, 300);

    this.question = createElement('h3');
    this.question.position(150, 80);
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.option1 = createElement('h4');
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);

    this.option2 = createElement('h4');
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);

    this.option3 = createElement('h4');
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);

    this.option4 = createElement('h4');
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.feedback = createElement( 'h2');
    this.feedback.html("Thank You, Your Answer Has Been Submitted")
    this.feedback.position(350,350) 
  
  }

 

  
  display(){
   
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      this.feedback.hide()
      
    
    });
    
    

}


}