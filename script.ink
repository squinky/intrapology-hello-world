VAR topic = "nothing"

->Start

==Start

Apple: Hi, I'm the first video caller!

Banana: Hi, I'm the second video caller!

->MultipleChoice

==MultipleChoice

//choices start appearing from here onward
@What should be our next topic of discussion?

Apple: Here is some multiple-choice voting!

Banana: What should be our next topic of discussion?

+ Apple: The weather!
    ~topic = "the weather"
+ Apple: Cats!
    ~topic = "cats"
+ Apple: Late-stage capitalism!
    ~topic = "late-stage capitalism"
//choices stop appearing after this point

- ->WriteIn

==WriteIn

//rant box appears from here onward
@Write any thoughts you have about {topic} here.

Apple: Now it's time for some fun with write-in options!

Banana: The audience is going to type stuff in and you are going to read it all!

Apple: That's right!

Apple: Firebase-read

Banana: That's all, folks!

->END