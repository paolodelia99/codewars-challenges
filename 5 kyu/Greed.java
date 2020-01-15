public class Greed{
  public static int greedy(int[] dice){
  int score = 0;
  int[] countArray = new int[6];

  for(int i=0; i<dice.length;i++){
    countArray[dice[i]-1]++;
  }

  for(int i=0;i<countArray.length;){
    if(countArray[i] != 0 && countArray[i] >= 3){
      score += threesScore(i+1);
      countArray[i] -= 3;
    }else{
      if(i == 0)
        score += countArray[i]*100;
      else if(i == 4)
        score += countArray[i]*50;
      i++;
    }

    System.out.println("the score of the "+(i+1)+" cycle is "+score);
  }

  return score;
}

static int threesScore(int numbers){
  switch(numbers){
    case 1:
      return 1000;
    case 2:
      return 200;
    case 3:
      return 300;
    case 4:
      return 400;
    case 5:
      return 500;
    case 6:
      return 600;
    default:
      return 0;
  }
}

  static void printArray(int[] array){
    for (int element : array)
      System.out.print(element+" ");
    System.out.println();
  }

  public static void main(String[] args) {
    int[] dice = {1,1,1,3,1};
    int score = greedy(dice);
    System.out.println("score: "+score);
  }
}
