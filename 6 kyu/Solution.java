public class Solution{

  public static void main(String[] args) {
    int[] numbers = {2,2,3};
    int target = 4;

    System.out.println("The indices are: ");
    printArray(twoSum(numbers,target));
  }

  public static int[] twoSum(int[] numbers, int target)
   {
       int[] indicesArray = new int[2];
       boolean isTupleFound = false;

       System.out.println("the array is: ");
       printArray(numbers);
       System.out.println();
       System.out.println("The target is: "+target);

       for(int i=0;i<numbers.length-1;i++){
         for(int j=i;j<numbers.length;j++){
           if(j != i)
             if((numbers[i]+numbers[j])== target){
               indicesArray[0] = numbers[i];
               indicesArray[1] = numbers[j];
               isTupleFound = true;
               break;
             }
         }
         if(isTupleFound)
          break;
       }

       return indicesArray;
   }

   static void printArray(int[] array){
     for (int el : array)
      System.out.print(el+" ");
   }
}
