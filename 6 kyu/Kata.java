import java.util.*;

public class Kata {
    public static int[] sortArray(int[] array) {
        if(array.length == 0)
            return array;
        else{
            int numbersOfOdds = 0;
            for(int i=0,j=0;i<array.length;i++)
                if(array[i]%2 != 0)
                    numbersOfOdds++;


            int[] oddArray = new int[numbersOfOdds];

            for(int i=0,j=0;i<array.length;i++)
                if(array[i]%2 != 0){
                    oddArray[j] = array[i];
                    j++;
                }

            Arrays.sort(oddArray);
                printArray(oddArray);
            System.out.println();

            for(int i=0,j=0;i<array.length;i++)
                if(array[i]%2 != 0){
                    array[i] = oddArray[j];
                    j++;
                }

            return array;
        }
    }

    static void printArray(int[] array){
        for(int el : array)
            System.out.print(el+" ");
    }

    public static void main(String[] args) {
        int[] array = {5,3,2,4,1,8};
        printArray(array);
        System.out.println();
        printArray(sortArray(array));
    }
}