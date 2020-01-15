import java.util.*;

public class next_smaller_java{

    public static void main(String[] args) {
        long number = 13793457;
        long number1 = 63045;
        long number2 = 1207;
//        long nextSmaller = nextSmaller(number);
//        System.out.println("the next smaller of "+number+" is: "+nextSmaller);
        System.out.println("the next smaller of "+number2+" is: "+nextSmaller(number2));
    }

    public static long nextSmaller(long n)
    {
        String stringNumber = ""+n;
        int pivotIndex = stringNumber.length() -1;
        int smallerIndex = stringNumber.length() -1;
        int i; // counter that finds the pivot position
        System.out.println("pivotIndex at the beginning: "+pivotIndex);
        //find the pivot positon
        for(i= stringNumber.length() -1;i>0;i--){
            if(Integer.parseInt(String.valueOf(stringNumber.charAt(i-1))) > Integer.parseInt(String.valueOf(stringNumber.charAt(smallerIndex)))){
                pivotIndex = i-1;
                System.out.println("pivotIndex: "+pivotIndex);
                break;
            }else
                smallerIndex = i-1;
        }

        System.out.println("pivotIndex: "+pivotIndex);
        System.out.println("pivot: "+Integer.parseInt(String.valueOf(stringNumber.charAt(pivotIndex))));


        if((pivotIndex == (stringNumber.length() -1)) || stringNumber.length()== 1)
            return (long) -1;
        else{
            String finalNumber;
            //find the next smaller number before the pivot
            int pivot = Integer.parseInt(String.valueOf(stringNumber.charAt(pivotIndex)));
            int nextSmaller = Integer.parseInt(String.valueOf(stringNumber.charAt(pivotIndex+1)));
            if(pivotIndex+1 <= stringNumber.length()-1){
                int j;  // counter that finds the nextSmaller
                for(j = pivotIndex+1; j<stringNumber.length();j++){
                    if(Integer.parseInt(String.valueOf(stringNumber.charAt(j))) < pivot && nextSmaller <= Integer.parseInt(String.valueOf(stringNumber.charAt(j))))
                        nextSmaller = Integer.parseInt(String.valueOf(stringNumber.charAt(j)));
                }
            }

            System.out.println("next smaller: "+nextSmaller);
            if(pivotIndex == 0 && nextSmaller == 0)
                finalNumber= -1;
            else{
                //create the array numberToOrder
                ArrayList<Integer> numberToOrder = new ArrayList<>();
                for (int k=(int)pivotIndex;k<stringNumber.length();k++){
                    if(Integer.parseInt(String.valueOf(stringNumber.charAt(k))) != nextSmaller)
                        numberToOrder.add(Integer.parseInt(String.valueOf(stringNumber.charAt(k))));
                }

                Collections.sort(numberToOrder, Collections.reverseOrder());

                //Create finalNumberString
                finalNumber = stringNumber.substring(0,pivotIndex)+nextSmaller;
                //Adding the missings elements of the array numberToOrder
                for (Integer num :
                        numberToOrder) {
                    finalNumber += num;
                }
            }

            return (long) Long.valueOf(finalNumber);
        }
    }
}