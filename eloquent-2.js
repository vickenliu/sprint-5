//  Looping a triangle

loopTriangle(7);

function loopTriangle(levels){
  var output='';
  for(var i=1;i<=levels;i++){
    for(var j=0;j<i;j++){
      output+='#';
    }
    output+='\n';
  }
  return console.log(output);
}

//  FizzBuzz

fizzbuzz();

function fizzbuzz(){
  var output='';
  for(var i=1;i<=100;i++){
    if(i%3==0 && i%5!=0)
      output+='Fizz';
    else if(i%3!=0 && i%5==0)
      output+='Buzz';
    else if(i%3==0 && i%5==0)
      output+='FizzBuzz';
    else 
      output+=i;
    output+=' ';
  } 
  console.log(output);
}

// Chess board

chessBoard(8);

function chessBoard(levels){
  var output='';
  for(var i=0;i<levels;i++){
    if(i%2==0)
      output+=' ';
    else
      output+='#';
    for(var j=1;j<levels;j++){
      if(output.substr((output.length)-1) == '#')
        output+=' ';
      else
        output+='#';
    }
    output+='\n';
  }
  console.log(output);
}